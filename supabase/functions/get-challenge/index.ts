import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.45.0";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

type ContentType = "bible" | "theology";

const PREVIEW_CHAPTERS: Record<ContentType, { bookId: string; chapter: number }> = {
  bible: { bookId: "genesis", chapter: 1 },
  theology: { bookId: "mere-christianity", chapter: 1 },
};

function isPreview(type: ContentType, bookId: string, chapter: number) {
  const preview = PREVIEW_CHAPTERS[type];
  return chapter === preview.chapter && bookId === preview.bookId;
}

function isFree(
  type: ContentType,
  bookId: string,
  chapter: number,
  userId: string | null
) {
  if (chapter === 1) {
    if (userId) return true;
    return isPreview(type, bookId, chapter);
  }
  return false;
}

function canAccess(
  type: ContentType,
  bookId: string,
  chapter: number,
  userId: string | null,
  hasSubscription: boolean
) {
  if (hasSubscription) return true;
  return isFree(type, bookId, chapter, userId);
}

async function hasActiveSubscription(
  adminClient: ReturnType<typeof createClient> | null,
  userId: string
): Promise<boolean> {
  if (!adminClient) return false;
  const { data } = await adminClient
    .from("subscribers")
    .select("status, current_period_end")
    .eq("user_id", userId)
    .maybeSingle();

  if (!data) return false;
  const periodEnd = data.current_period_end
    ? new Date(data.current_period_end).getTime()
    : 0;
  return (
    (data.status === "active" || data.status === "trialing") &&
    (!periodEnd || periodEnd > Date.now())
  );
}

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const body = await req.json();
    const type = body?.type as ContentType;
    const bookId = String(body?.bookId ?? "");
    const chapter = Number(body?.chapter);

    if (
      (type !== "bible" && type !== "theology") ||
      !bookId ||
      !Number.isFinite(chapter) ||
      chapter < 1
    ) {
      return new Response(JSON.stringify({ error: "Invalid request" }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const supabaseUrl = Deno.env.get("SUPABASE_URL") ?? "";
    const anonKey = Deno.env.get("SUPABASE_ANON_KEY") ?? "";
    const serviceRoleKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY");

    const supabaseClient = createClient(supabaseUrl, anonKey);
    const adminClient = serviceRoleKey
      ? createClient(supabaseUrl, serviceRoleKey)
      : null;

    let userId: string | null = null;
    const authHeader = req.headers.get("Authorization");
    if (authHeader?.startsWith("Bearer ")) {
      const token = authHeader.replace("Bearer ", "");
      const { data } = await supabaseClient.auth.getUser(token);
      userId = data.user?.id ?? null;
    }

    const subscribed = userId
      ? await hasActiveSubscription(adminClient, userId)
      : false;

    if (!canAccess(type, bookId, chapter, userId, subscribed)) {
      const status = !userId && !isFree(type, bookId, chapter, null) ? 401 : 403;
      return new Response(
        JSON.stringify({
          error:
            status === 401
              ? "Sign in required to access this chapter"
              : "Subscription required to access this chapter",
        }),
        {
          status,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        }
      );
    }

    const path = new URL(
      `./data/${type}/${bookId}/${chapter}.json`,
      import.meta.url
    );
    let challenge: unknown;
    try {
      challenge = JSON.parse(await Deno.readTextFile(path));
    } catch {
      return new Response(JSON.stringify({ error: "Challenge not found" }), {
        status: 404,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    return new Response(JSON.stringify({ challenge }), {
      status: 200,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (error) {
    return new Response(
      JSON.stringify({ error: (error as Error).message || "Server error" }),
      {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );
  }
});
