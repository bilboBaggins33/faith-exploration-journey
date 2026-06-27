
import { serve } from "https://deno.land/std@0.190.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface ContactFormData {
  name: string;
  email: string;
  message: string;
  // Honeypot field: real users never fill this; bots usually do.
  company?: string;
}

const isValidEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    // This function is intentionally public (verify_jwt = false) so the public
    // contact form works. Basic abuse protection: honeypot + input validation.
    // For higher volume, add IP-based rate limiting (e.g. a Supabase table or
    // an upstream WAF / Cloudflare Turnstile).
    const { name, email, message, company }: ContactFormData = await req.json();

    // Honeypot tripped — pretend success so bots don't retry, but send nothing.
    if (company && company.trim().length > 0) {
      return new Response(
        JSON.stringify({ success: true, message: "Message sent successfully!" }),
        { status: 200, headers: { "Content-Type": "application/json", ...corsHeaders } }
      );
    }

    if (!name || !email || !message) {
      throw new Error("Missing required fields");
    }

    if (!isValidEmail(email)) {
      throw new Error("Invalid email address");
    }

    if (name.length > 100 || email.length > 200 || message.length > 5000) {
      throw new Error("Input exceeds allowed length");
    }

    const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");
    if (!RESEND_API_KEY) {
      throw new Error("RESEND_API_KEY is not configured");
    }

    // Send confirmation email to user
    const userEmailResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: "Bible Quest <noreply@bibleadventurequest.com>",
        to: [email],
        subject: "We received your message!",
        html: `
          <h1>Thank you for contacting Bible Quest, ${name}!</h1>
          <p>We have received your message and will get back to you as soon as possible.</p>
          <p>For your reference, here's a copy of your message:</p>
          <div style="background-color: #c8a528; padding: 15px; border-radius: 8px; margin: 20px 0;">
            <p>${message.replace(/\n/g, '<br>')}</p>
          </div>
          <p>Best regards,<br>The Bible Quest Team</p>
        `,
      }),
    });
    await userEmailResponse.json();

    // Send notification email to admin
    const adminEmailResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: "Bible Quest Contact Form <noreply@bibleadventurequest.com>",
        to: ["richard@melfam.com"],
        subject: `New Contact Form Submission from ${name}`,
        html: `
          <h1>New Contact Form Submission</h1>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Message:</strong></p>
          <div style="background-color: #c8a528; padding: 15px; border-radius: 8px; margin: 20px 0;">
            <p>${message.replace(/\n/g, '<br>')}</p>
          </div>
        `,
      }),
    });
    await adminEmailResponse.json();

    return new Response(
      JSON.stringify({ 
        success: true,
        message: "Message sent successfully!" 
      }),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
          ...corsHeaders,
        },
      }
    );
  } catch (error: any) {
    console.error("Error in send-contact-email function:", error);
    return new Response(
      JSON.stringify({ 
        success: false,
        error: error.message 
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
