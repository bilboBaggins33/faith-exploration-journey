import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import Stripe from "https://esm.sh/stripe@14.21.0";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.45.0";

/**
 * Stripe webhook: keeps the `subscribers` table in sync with Stripe so the app
 * has an authoritative, server-side source of truth for subscription status.
 *
 * Required Supabase secrets:
 *   - STRIPE_SECRET_KEY
 *   - STRIPE_WEBHOOK_SECRET   (from the Stripe dashboard webhook endpoint)
 *   - SUPABASE_URL
 *   - SUPABASE_SERVICE_ROLE_KEY
 *
 * Configure the Stripe webhook to send: checkout.session.completed,
 * customer.subscription.created/updated/deleted.
 *
 * This function must run with verify_jwt = false (see config.toml).
 */

const stripe = new Stripe(Deno.env.get("STRIPE_SECRET_KEY") || "", {
  apiVersion: "2023-10-16",
});

const supabaseAdmin = createClient(
  Deno.env.get("SUPABASE_URL") ?? "",
  Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ?? ""
);

const upsertSubscriber = async (params: {
  userId: string | null;
  email: string | null;
  customerId: string | null;
  subscriptionId: string | null;
  status: string;
  currentPeriodEnd: number | null;
}) => {
  if (!params.userId && !params.email) return;

  await supabaseAdmin.from("subscribers").upsert(
    {
      user_id: params.userId,
      email: params.email,
      stripe_customer_id: params.customerId,
      stripe_subscription_id: params.subscriptionId,
      status: params.status,
      current_period_end: params.currentPeriodEnd
        ? new Date(params.currentPeriodEnd * 1000).toISOString()
        : null,
      updated_at: new Date().toISOString(),
    },
    { onConflict: "user_id" }
  );
};

const resolveUserId = async (
  metadataUserId: string | null,
  customerId: string | null
): Promise<string | null> => {
  if (metadataUserId) return metadataUserId;
  // Fallback: recover the user_id stored when checkout.session.completed first
  // synced this customer (that event carries the metadata / client_reference_id).
  if (!customerId) return null;
  const { data } = await supabaseAdmin
    .from("subscribers")
    .select("user_id")
    .eq("stripe_customer_id", customerId)
    .not("user_id", "is", null)
    .maybeSingle();
  return data?.user_id ?? null;
};

serve(async (req) => {
  const signature = req.headers.get("stripe-signature");
  const webhookSecret = Deno.env.get("STRIPE_WEBHOOK_SECRET");
  const body = await req.text();

  let event: Stripe.Event;
  try {
    if (!signature || !webhookSecret) {
      throw new Error("Missing Stripe signature or webhook secret");
    }
    event = await stripe.webhooks.constructEventAsync(body, signature, webhookSecret);
  } catch (err) {
    return new Response(`Webhook signature verification failed: ${(err as Error).message}`, {
      status: 400,
    });
  }

  try {
    switch (event.type) {
      case "checkout.session.completed": {
        const session = event.data.object as Stripe.Checkout.Session;
        const subscriptionId = session.subscription as string | null;
        const userId =
          (session.metadata?.supabase_user_id as string | undefined) ||
          (session.client_reference_id as string | undefined) ||
          null;

        let status = "active";
        let currentPeriodEnd: number | null = null;
        if (subscriptionId) {
          const sub = await stripe.subscriptions.retrieve(subscriptionId);
          status = sub.status;
          currentPeriodEnd = sub.current_period_end;
        }

        await upsertSubscriber({
          userId,
          email: session.customer_email ?? null,
          customerId: (session.customer as string) ?? null,
          subscriptionId,
          status,
          currentPeriodEnd,
        });
        break;
      }

      case "customer.subscription.created":
      case "customer.subscription.updated":
      case "customer.subscription.deleted": {
        const sub = event.data.object as Stripe.Subscription;
        const metadataUserId = (sub.metadata?.supabase_user_id as string | undefined) || null;

        // Try to recover the customer's email for fallback matching.
        let email: string | null = null;
        try {
          const customer = await stripe.customers.retrieve(sub.customer as string);
          if (customer && !("deleted" in customer)) {
            email = customer.email ?? null;
          }
        } catch (_e) {
          // ignore
        }

        const userId = await resolveUserId(metadataUserId, sub.customer as string);

        await upsertSubscriber({
          userId,
          email,
          customerId: sub.customer as string,
          subscriptionId: sub.id,
          status: event.type === "customer.subscription.deleted" ? "canceled" : sub.status,
          currentPeriodEnd: sub.current_period_end,
        });
        break;
      }

      default:
        break;
    }

    return new Response(JSON.stringify({ received: true }), {
      headers: { "Content-Type": "application/json" },
      status: 200,
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: (error as Error).message }), {
      headers: { "Content-Type": "application/json" },
      status: 500,
    });
  }
});
