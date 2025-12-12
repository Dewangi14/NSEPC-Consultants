import Razorpay from "razorpay";

export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).json({ message: "Method not allowed" });

  try {
    const razorpay = new Razorpay({
      key_id: process.env.RAZORPAY_KEY_ID,
      key_secret: process.env.RAZORPAY_KEY_SECRET,
    });

    const options = {
      amount: req.body.amount * 100,
      currency: "INR",
      receipt: `receipt_order_${Date.now()}`,
      notes: {
        gst_number: req.body.gst
      }
    };
    

    const order = await razorpay.orders.create(options);
    res.status(200).json(order);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Something went wrong" });
  }
}
