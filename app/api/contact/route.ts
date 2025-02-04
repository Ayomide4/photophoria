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

    const transporter = nodemailer.createTransport({
      service: "Gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: `"Photophoria" <${process.env.EMAIL_USER}>`,
      to: "aomotosho4@gmail.com", // Replace with your recipient email
      subject: "New Contact Form Submission",
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Full Name:</strong> ${fullName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Package:</strong> ${selectedPackage}</p>
        <p><strong>Event Date:</strong> ${eventDate}</p>
        <p><strong>Add-ons:</strong> ${addons}</p>
        <p><strong>Event Details:</strong></p>
        <p>${eventDetails}</p>
      `,
    });

    return NextResponse.json(
      { message: "Email sent successfully" },
      { status: 200 },
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { message: "Failed to send email" },
      { status: 500 },
    );
  }
}
