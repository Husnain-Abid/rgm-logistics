import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const {
      name,
      phone,
      pickupCity,
      destinationCity,
      vehicleType,
      message,
    } = body;

    if (!name || !phone) {
      return NextResponse.json(
        { error: "Name and phone number are required." },
        { status: 400 }
      );
    }

    if (!process.env.RESEND_API_KEY) {
      return NextResponse.json(
        { error: "Email service is not configured." },
        { status: 500 }
      );
    }

    if (!process.env.CONTACT_EMAIL) {
      return NextResponse.json(
        { error: "Contact email is not configured." },
        { status: 500 }
      );
    }

    const { data, error } = await resend.emails.send({
      from: "RGM Website <onboarding@resend.dev>",
      to: [process.env.CONTACT_EMAIL],
      subject: `New Contact Inquiry from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 650px; margin: 0 auto;">
          <div style="background: #0f2d57; padding: 24px; color: white;">
            <h1 style="margin: 0;">New Contact Inquiry</h1>
            <p style="margin: 8px 0 0;">RGM Goods & Car Carrier Services</p>
          </div>

          <div style="padding: 24px; background: #f8f9fb;">
            <h2 style="color: #0f2d57;">Customer Details</h2>

            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 10px; font-weight: bold;">Name</td>
                <td style="padding: 10px;">${name}</td>
              </tr>

              <tr>
                <td style="padding: 10px; font-weight: bold;">Phone</td>
                <td style="padding: 10px;">${phone}</td>
              </tr>

              <tr>
                <td style="padding: 10px; font-weight: bold;">Pickup City</td>
                <td style="padding: 10px;">${pickupCity || "Not provided"}</td>
              </tr>

              <tr>
                <td style="padding: 10px; font-weight: bold;">Destination City</td>
                <td style="padding: 10px;">${destinationCity || "Not provided"}</td>
              </tr>

              <tr>
                <td style="padding: 10px; font-weight: bold;">Vehicle Type</td>
                <td style="padding: 10px;">${vehicleType || "Not provided"}</td>
              </tr>
            </table>

            <h2 style="color: #0f2d57; margin-top: 30px;">Message</h2>

            <div style="background: white; padding: 18px; border-radius: 8px;">
              ${message || "No additional message provided."}
            </div>

            <div style="margin-top: 30px; padding: 16px; background: #eaf2ff; border-radius: 8px;">
              <strong>Submitted from:</strong> RGM Website Contact Form
            </div>
          </div>
        </div>
      `,
    });

    if (error) {
      console.error("Resend error:", error);

      return NextResponse.json(
        { error: "Failed to send email." },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Your inquiry has been sent successfully.",
      data,
    });
  } catch (error) {
    console.error("Contact form error:", error);

    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}