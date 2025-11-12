// /pages/payment/success.js
import Link from "next/link";

export default function PaymentSuccess() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#061833] px-4">
      <div className="max-w-md w-full bg-pink-50 shadow-lg rounded-2xl py-20 px-10 text-center">
        <h2 className="text-2xl font-bold text-green-600 mb-3">🎉 Payment Successful!</h2>
        <p className="text-gray-700 mb-10">
          Thank you for your payment. Our team will contact you soon to confirm your booking.
        </p>
        <Link
          href="/"
          className="bg-pink-200 hover:bg-pink-300 text-[#061833] py-2 px-4 rounded-lg font-medium transition"
        >
          Go Back Home
        </Link>
      </div>
    </div>
  );
}
