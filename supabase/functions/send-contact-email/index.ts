
import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { name, email, message }: ContactFormData = await req.json();

    if (!name || !email || !message) {
      throw new Error("Missing required fields");
    }

    console.log(`Received contact form submission from ${name} (${email})`);

    // Send confirmation email to user
    const userEmailResponse = await resend.emails.send({
      from: "Bible Adventure Quest <info@bibleadventurequest.com>",
      to: [email],
      subject: "We received your message!",
      html: `
        <h1>Thank you for contacting Bible Adventure Quest, ${name}!</h1>
        <p>We have received your message and will get back to you as soon as possible.</p>
        <p>For your reference, here's a copy of your message:</p>
        <div style="background-color: #f5f5f5; padding: 15px; border-radius: 8px; margin: 20px 0;">
          <p>${message.replace(/\n/g, '<br>')}</p>
        </div>
        <p>Best regards,<br>The Bible Adventure Quest Team</p>
      `,
    });

    // Send notification email to admin
    const adminEmailResponse = await resend.emails.send({
      from: "Bible Adventure Quest Contact Form <info@bibleadventurequest.com>",
      to: ["admin@bibleadventurequest.com"], // Replace with actual admin email
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <h1>New Contact Form Submission</h1>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <div style="background-color: #f5f5f5; padding: 15px; border-radius: 8px; margin: 20px 0;">
          <p>${message.replace(/\n/g, '<br>')}</p>
        </div>
      `,
    });

    console.log("Emails sent successfully");

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
