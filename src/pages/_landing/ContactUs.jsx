import React, { useState } from "react";
import { FaBuildingColumns } from "react-icons/fa6";
import { PiPhoneCallFill } from "react-icons/pi";
import { MdEmail } from "react-icons/md";
import FadeInFromLeft from "@/components/animations/FadeInFromLeft";
import { useRouter } from "next/router";

const ContactUs = () => {
  const router = useRouter();

const SubmitHandler = (e) => {
  e.preventDefault();

  router.push({
    pathname: "/payment",
    query: {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
    },
  });
};

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });
  
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    phone: "",
  });
  
  // Validation function
  const validateField = (name, value) => {
    let error = "";
  
    switch (name) {
      case "name":
        if (!/^[A-Za-z ]+$/.test(value)) {
          error = "Name should contain only alphabets.";
        } else if (value.trim().length < 2) {
          error = "Name must be at least 2 characters.";
        }
        break;
  
      case "email":
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
          error = "Enter a valid email address.";
        }
        break;
  
      case "phone":
        if (!/^[0-9]+$/.test(value)) {
          error = "Phone must contain only numbers.";
        } else if (value.length < 10) {
          error = "Phone number must be at least 10 digits.";
        }
        break;
    }
  
    setErrors((prev) => ({ ...prev, [name]: error }));
  };
  
  // On Input Change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    validateField(name, value);
  };
  
  return (
    <div id={"contact"} className="flex flex-col gap-10 lg:gap-20 bg-[#061833] py-16 sm:py-20 px-6 sm:px-10 md:px-16 lg:px-20 items-center text-pink-50">
      <div className="section-heading-text">
        GET IN TOUCH
        <div className="h-1 w-full bg-gradient-to-r from-pink-300 to-white"></div>
      </div>

      <div className="flex flex-col-reverse lg:flex-row gap-10 lg:gap-6 w-full">
        <FadeInFromLeft>
        <div className="flex flex-col gap-1 w-full lg:w-1/2 items-start justify-center">
       
          <div className="flex gap-2 items-center">
            <div className="p-4 bg-pink-50 text-[#061833] rounded-full">
            <PiPhoneCallFill size={30}/>
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

        <div className="w-full lg:w-1/2">

            <form className="flex flex-col gap-5 bg-pink-50 rounded-4xl p-10 xl:p-14 text-[#061833] xl:w-11/12" onSubmit={SubmitHandler}>

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
    type="text"
    required
  />
  {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
</div>

<div className="w-full border-b border-[#061833] p-2">
  <input
    name="email"
    value={formData.email}
    onChange={handleChange}
    className="outline-none w-full h-full placeholder-[#061833] text-xs xl:text-base"
    placeholder="Email"
    type="email"
    required
  />
  {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
</div>

<div className="w-full border-b border-[#061833] p-2">
  <input
    name="phone"
    value={formData.phone}
    onChange={handleChange}
    className="outline-none w-full h-full placeholder-[#061833] text-xs xl:text-base"
    type="tel"
    placeholder="Phone"
    required
  />
  {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
</div>

                {/* <div className="w-full border-b  border-[#061833] p-2">

                    <textarea className="outline-none w-full h-full placeholder-[#061833] text-xs xl:text-base" placeholder="Message"/>

                </div> */}

                <div className="mx-auto w-2/3 lg:w-5/12 mt-8">
                    <button type="submit" className="bg-[#061833] px-5 xl:px-7 py-2 xl:py-3 text-sm xl:text-base font-semibold rounded-full text-pink-50 w-full cursor-pointer">Book Now</button>
                </div>
                

            </form>

        </div>
      </div>
    </div>
  );
};

export default ContactUs;
