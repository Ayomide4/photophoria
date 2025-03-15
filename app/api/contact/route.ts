import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  try {
    const {
      fullName,
      email,
      phone,
      package: selectedPackage,
      eventDate,
      addons,
      eventDetails,
    } = await req.json();

    // Validate email configuration
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
      console.error("Missing email configuration: EMAIL_USER or EMAIL_PASS environment variables are not set");
      return NextResponse.json(
        { message: "Server configuration error" },
        { status: 500 },
      );
    }

    // Create transporter with more detailed Gmail settings
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true, // use SSL
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS, // This should be an app password if using Gmail with 2FA
      },
      tls: {
        rejectUnauthorized: false // Helps with self-signed certificates
      }
    });

    // Verify connection configuration
    try {
      await transporter.verify();
      console.log("SMTP connection verified successfully");
    } catch (err) {
      console.error("SMTP connection error:", err);
      return NextResponse.json(
        { message: "Email server connection failed" },
        { status: 500 },
      );
    }

    // Format addons display
    const formattedAddons = addons === "none" ? "None" : addons;

    try {
      // Send email with more detailed options
      const info = await transporter.sendMail({
        from: `"Photophoria" <${process.env.EMAIL_USER}>`,
        to: "info@photophoria.co", // Company email address
        replyTo: email, // The customer's email for direct reply
        subject: "New PhotoPhoria Contact Form Submission",
        html: `
          <h2>New Contact Form Submission</h2>
          <p><strong>Full Name:</strong> ${fullName}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Package:</strong> ${selectedPackage}</p>
          <p><strong>Event Date:</strong> ${eventDate}</p>
          <p><strong>Add-ons:</strong> ${formattedAddons}</p>
          <p><strong>Event Details:</strong></p>
          <p>${eventDetails.replace(/\n/g, '<br>')}</p>
        `,
      });

      console.log("Email sent successfully:", info.messageId);

      return NextResponse.json(
        { message: "Email sent successfully", messageId: info.messageId },
        { status: 200 },
      );
    } catch (emailError) {
      console.error("Error sending email:", emailError);
      return NextResponse.json(
        { message: "Failed to send email", error: emailError.message },
        { status: 500 },
      );
    }
  } catch (error) {
    console.error("Error processing request:", error);
    return NextResponse.json(
      { message: "Failed to process request", error: error instanceof Error ? error.message : "Unknown error" },
      { status: 500 },
    );
  }
}
