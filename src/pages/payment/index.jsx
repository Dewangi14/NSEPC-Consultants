// import FadeInFromLeft from '@/components/animations/FadeInFromLeft'
// import React from 'react'
// import { FaBuildingColumns } from 'react-icons/fa6'
// import { MdEmail } from 'react-icons/md'
// import { PiPhoneCallFill } from 'react-icons/pi'
// import { motion } from "framer-motion";
// import { useRouter } from 'next/router'

// const Payment = () => {
//     const router = useRouter();
//   return (
//     <div id={"contact"} className="flex flex-col gap-10 lg:gap-20 bg-[#061833] py-16 sm:py-20 lg:py-32 px-6 sm:px-10 md:px-16 lg:px-20 items-center text-pink-50">
//     <div className="section-heading-text">
//       PAYMENT
//       <div className="h-1 w-full bg-gradient-to-r from-pink-300 to-white"></div>
//     </div>
//     <div className='flex flex-col gap-5 text-center'>

//     <motion.div
//   className="text-pink-200 font-bold text-3xl text-center"
//   animate={{ opacity: [1, 0.3, 1], scale: [1, 1.02, 1] }}
//   transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
// >
//   ⚠️ &nbsp; Please confirm the available DATE and TIME slots with our team before proceeding for payment through the form below.
// </motion.div>
// <a className='font-bold cursor-pointer' role='button' href={"#contact-details"} >View Contact Details</a>
//     </div>
//     <div className="flex flex-col gap-10 lg:gap-32 w-full">

//       <div className="w-full">

//           <div className="flex flex-col gap-5 bg-pink-50 rounded-4xl p-10 xl:p-14 text-[#061833] lg:w-1/2 mx-auto">

//               <div className="font-bold text-xl xl:text-2xl text-center mb-5">
//                   Book a Consultation
//               </div>

//               <div className="w-full border-b  border-[#061833] p-2">

//                   <input className="outline-none w-full h-full placeholder-[#061833] text-xs xl:text-base" placeholder="Name"/>

//               </div>
//               <div className="w-full border-b  border-[#061833] p-2">

//                   <input className="outline-none w-full h-full placeholder-[#061833] text-xs xl:text-base" placeholder="Email"/>

//               </div>
//               <div className="w-full border-b  border-[#061833] p-2">

//                   <input className="outline-none w-full h-full placeholder-[#061833] text-xs xl:text-base" type="tel" placeholder="Phone"/>

//               </div>
//               {/* <div className="w-full border-b  border-[#061833] p-2">

//                   <textarea className="outline-none w-full h-full placeholder-[#061833] text-xs xl:text-base" placeholder="Message"/>

//               </div> */}

//               <div className="mx-auto w-2/3 lg:w-5/12 mt-8">
//                   <button className="bg-[#061833] px-5 xl:px-7 py-2 xl:py-3 text-sm xl:text-base font-semibold rounded-full text-pink-50 w-full">Proceed to Pay</button>
//               </div>
              

//           </div>

//       </div>

//       <FadeInFromLeft>
//       <div className="flex flex-col gap-1 w-full items-start justify-center" id='#contact-details'>
     
//         <div className="flex gap-2 items-center">
//           <div className="p-4 bg-pink-50 text-[#061833] rounded-full">
//           <PiPhoneCallFill size={30}/>
//           </div>

//           <div className="flex flex-col gap-2 p-2 w-full">
//             <div className="font-bold text-lg xl:text-xl">CALL US</div>

//             <div className="font-light text-xs md:text-sm xl:text-base">
//             +91-7696935365 &nbsp;&nbsp;&nbsp; | &nbsp;&nbsp;&nbsp; +91-9205127555
//             </div>
//           </div>
//         </div>
//         <div className="flex gap-2 items-center">
//           <div className="p-4 bg-pink-50 text-[#061833] rounded-full">
//             <MdEmail size={30} />
//           </div>
//           <div className="flex flex-col gap-2 p-2 w-full">
//             <div className="font-bold text-lg xl:text-xl">CONTACT US</div>

//             <div className="font-light text-xs md:text-sm xl:text-base">
//               email.for.nsconsultants@something.com
//             </div>
//           </div>
//         </div>
//         <div className="flex gap-2 items-center">
//           <div className="p-4 bg-pink-50 text-[#061833] rounded-full">
//             <FaBuildingColumns size={30} />
//           </div>

//           <div className="flex flex-col gap-2 p-2 w-full">
//             <div className="font-bold text-lg xl:text-xl">VISIT US</div>

//             <div className="font-light text-xs md:text-sm xl:text-base">
//               Level 3B, DLF Centre, Sansad Marg, Connaught Place, New Delhi -
//               110001, India
//             </div>
//           </div>
//         </div>
//       </div>
//       </FadeInFromLeft>
//     </div>
//   </div>
//   )
// }

// export default Payment


import FadeInFromLeft from '@/components/animations/FadeInFromLeft'
import React, { useState } from 'react'
import { FaBuildingColumns } from 'react-icons/fa6'
import { MdEmail } from 'react-icons/md'
import { PiPhoneCallFill } from 'react-icons/pi'
import { motion } from "framer-motion";
import { useRouter } from 'next/router'
import Script from 'next/script'

const Payment = () => {
  const router = useRouter();

  // 🧠 Local state to store form data
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    amount: 500, // you can make this dynamic if needed
  });
  const [loading, setLoading] = useState(false);

  // 🪄 Update input fields dynamically
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // 💳 Handle payment
  const handlePayment = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone) {
      alert("Please fill all required fields.");
      return;
    }

    setLoading(true);
    try {
      // 1️⃣ Create order from backend API
      const orderResponse = await fetch("/api/razorpay", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ amount: formData.amount }),
      });
      const order = await orderResponse.json();

      // 2️⃣ Configure Razorpay popup
      const options = {
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
        amount: order.amount,
        currency: order.currency,
        name: "NS EPC Consultants",
        description: "Consultation Booking Payment",
        image: "/logo.png",
        order_id: order.id,
        handler: function (response) {
          alert("Payment successful! Payment ID: " + response.razorpay_payment_id);
          router.push("/payment/success"); // optional success page
        },
        prefill: {
          name: formData.name,
          email: formData.email,
          contact: formData.phone,
        },
        notes: {
          address: "NS EPC Consultants Office",
        },
        theme: {
          color: "#061833",
        },
      };

      const rzp = new window.Razorpay(options);
      rzp.open();
    } catch (error) {
      console.error(error);
      alert("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      id={"contact"}
      className="flex flex-col gap-10 lg:gap-20 bg-[#061833] py-16 sm:py-20 lg:py-32 px-6 sm:px-10 md:px-16 lg:px-20 items-center text-pink-50"
    >
      <div className="section-heading-text">
        PAYMENT
        <div className="h-1 w-full bg-gradient-to-r from-pink-300 to-white"></div>
      </div>

      <div className="flex flex-col gap-5 text-center">
        <motion.div
          className="text-pink-200 font-bold text-3xl text-center"
          animate={{ opacity: [1, 0.3, 1], scale: [1, 1.02, 1] }}
          transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
        >
          ⚠️ &nbsp; Please confirm the available DATE and TIME slots with our team before
          proceeding for payment through the form below.
        </motion.div>
        <a className="font-bold cursor-pointer" role="button" href={"#contact-details"}>
          View Contact Details
        </a>
      </div>

      <div className="flex flex-col gap-10 lg:gap-32 w-full">
        <div className="w-full">
          <form
            onSubmit={handlePayment}
            className="flex flex-col gap-5 bg-pink-50 rounded-4xl p-10 xl:p-14 text-[#061833] lg:w-1/2 mx-auto"
          >
            <div className="font-bold text-xl xl:text-2xl text-center mb-5">
              Book a Consultation
            </div>

            <div className="w-full border-b border-[#061833] p-2">
              <input
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="outline-none w-full h-full placeholder-[#061833] text-xs xl:text-base"
                placeholder="Name"
              />
            </div>
            <div className="w-full border-b border-[#061833] p-2">
              <input
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="outline-none w-full h-full placeholder-[#061833] text-xs xl:text-base"
                placeholder="Email"
              />
            </div>
            <div className="w-full border-b border-[#061833] p-2">
              <input
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="outline-none w-full h-full placeholder-[#061833] text-xs xl:text-base"
                type="tel"
                placeholder="Phone"
              />
            </div>

            <div className="mx-auto w-2/3 lg:w-5/12 mt-8">
              <button
                type="submit"
                disabled={loading}
                className="bg-[#061833] px-5 xl:px-7 py-2 xl:py-3 text-sm xl:text-base font-semibold rounded-full text-pink-50 w-full"
              >
                {loading ? "Processing..." : "Proceed to Pay"}
              </button>
            </div>
          </form>
        </div>

        <FadeInFromLeft>
          <div className="flex flex-col gap-1 w-full items-start justify-center" id="#contact-details">
            <div className="flex gap-2 items-center">
              <div className="p-4 bg-pink-50 text-[#061833] rounded-full">
                <PiPhoneCallFill size={30} />
              </div>
              <div className="flex flex-col gap-2 p-2 w-full">
                <div className="font-bold text-lg xl:text-xl">CALL US</div>
                <div className="font-light text-xs md:text-sm xl:text-base">
                  +91-7696935365 &nbsp;&nbsp;&nbsp; | &nbsp;&nbsp;&nbsp; +91-9205127555
                </div>
              </div>
            </div>
            <div className="flex gap-2 items-center">
              <div className="p-4 bg-pink-50 text-[#061833] rounded-full">
                <MdEmail size={30} />
              </div>
              <div className="flex flex-col gap-2 p-2 w-full">
                <div className="font-bold text-lg xl:text-xl">CONTACT US</div>
                <div className="font-light text-xs md:text-sm xl:text-base">
                  email.for.nsconsultants@something.com
                </div>
              </div>
            </div>
            <div className="flex gap-2 items-center">
              <div className="p-4 bg-pink-50 text-[#061833] rounded-full">
                <FaBuildingColumns size={30} />
              </div>
              <div className="flex flex-col gap-2 p-2 w-full">
                <div className="font-bold text-lg xl:text-xl">VISIT US</div>
                <div className="font-light text-xs md:text-sm xl:text-base">
                  Level 3B, DLF Centre, Sansad Marg, Connaught Place, New Delhi -
                  110001, India
                </div>
              </div>
            </div>
          </div>
        </FadeInFromLeft>
      </div>

      {/* Razorpay SDK */}
      <Script src="https://checkout.razorpay.com/v1/checkout.js" />
    </div>
  )
}

export default Payment
