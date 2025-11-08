import React from "react";
import { FaFacebook, FaLinkedin, FaYoutube, FaRss } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="flex flex-col">

    <div className="py-16 sm:py-20 px-6 sm:px-10 md:px-16 lg:px-20 bg-[#061833] text-pink-50 flex flex-col gap-10 items-center lg:items-start lg:gap-0 lg:flex-row justify-between border-t-[0.05px] border-pink-50">
      <div className="font-bold text-2xl lg:text-3xl xl:text-4xl flex flex-col gap-5 items-center text-center lg:items-start lg:text-left w-full lg:w-1/4">
        NS Consultants
        <div className="text-xs xl:text-sm font-light">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry
        </div>
        <div className="">
        <button className="bg-pink-50 rounded-full px-5 py-2 xl:px-7 xl:py-2.5 text-xs xl:text-sm font-bold text-[#061833] cursor-pointer mx-auto w-full">
       Get In Touch With Us
        </button>
      </div>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 justify-center lg:w-2/4">
        <div className="text-sm xl:text-base font-bold flex flex-col gap-5">
          Discover
          <div className="flex flex-col gap-3 font-light text-xs xl:text-sm">
            <div>Milestones</div>

            <div>Case Studies</div>
            <div>Feedbacks</div>
          </div>
        </div>
        <div className="text-sm xl:text-base font-bold flex flex-col gap-5">
          About
          <div className="flex flex-col gap-3 font-light text-xs xl:text-sm">
            <div>Services</div>

            <div>Our Products</div>
            <div>Team</div>
          </div>
        </div>
        <div className="text-sm xl:text-base font-bold flex flex-col gap-5">
          Connect
          <div className="flex flex-col gap-3 font-light text-xs xl:text-sm">
            <div>Contact Us</div>

            <div>Consultation</div>
          </div>
        </div>
        <div className="text-sm xl:text-base font-bold flex flex-col gap-5">
          Follow Us
          <div className="flex gap-3 items-center font-light text-xs">
            <div>
              <FaFacebook className="text-xl xl:text-2xl" />
            </div>

            <div>
              <FaLinkedin className="text-xl xl:text-2xl" />
            </div>
            <div>
              <FaYoutube className="text-2xl xl:text-3xl" />
            </div>
            <div>
              <FaRss className="text-xl xl:text-2xl" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="bg-pink-50 p-1 text-center text-[10px] xl:text-[12px] text-[#061833] font-medium">Copyright © 2021 </div>
    </div>
  );
};

export default Footer;
