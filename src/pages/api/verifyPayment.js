import Razorpay from "razorpay";
import crypto from "crypto";
import sgMail from "@sendgrid/mail";

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export default async function handler(req, res) {
  if (req.method !== "POST")
    return res.status(405).json({ message: "Method Not Allowed" });

  try {
    const { order_id, razorpay_payment_id, razorpay_signature, userEmail } = req.body;

    // Step 1: Verify signature
    const sign = crypto
      .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET)
      .update(order_id + "|" + razorpay_payment_id)
      .digest("hex");

    if (sign !== razorpay_signature) {
      return res.status(400).json({ message: "Invalid Payment Signature" });
    }

    // Step 2: Send Email Using SendGrid
    const msg = {
      to: userEmail,
      from: "noreply@nsepc.com", // Sender (verified email in SendGrid)
      subject: "Appointment Confirmed - NSEPC Consultants",
      html: `
        <p>Dear Customer,</p>
        <p>Your appointment is successfully confirmed.</p>
        <p>Date & Time: As discussed with our team.</p>
        <p>Location: <strong>ENTER COMPANY ADDRESS HERE</strong></p>
        <p>Looking forward to meeting you!</p>
        <br/>
        <p>Thanks for reaching out!</p>
      `,
    };

    await sgMail.send(msg);

    return res.status(200).json({ message: "Payment verified & email sent" });
  } catch (error) {
    console.error("Verify API Error:", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
}
