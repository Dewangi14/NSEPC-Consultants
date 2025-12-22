// "use client";
// import React, { useEffect, useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { HiOutlineMenu, HiX } from "react-icons/hi";
// import Link from "next/link";
// import { useRouter } from "next/router";

// const Header = () => {
//   const router = useRouter();
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [menuOpen, setMenuOpen] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 0);
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const menuItems = [
//     {
//     key : "About Us",
//     link:"/about-us"
//     },
//     {
//       key : "Ethanol",
//       link:"/ethanol"
//       },
//     {
//       key : "Our Expertise",
//       link:"/why-choose-us"
//       },
//     {
//     key : "Services",
//     link:"/#services"
//     },
//     {
//     key : "Clients",
//     link:"/#clients"
//     },
//     {
//     key : "Contact Us",
//     link:"/#contact"
//     },
// ];

//   return (
//     <div
//       className={`header fixed top-0 left-0 w-full z-50 transition-all duration-300 font-medium ${
//       //  "bg-pink-50/60 backdrop-blur-sm text-[#061833]"
//         // isScrolled ? "bg-pink-50/60 backdrop-blur-sm text-[#061833]" : "bg-transparent text-pink-50"
//         isScrolled ? "bg-pink-50/60 backdrop-blur-sm text-[#061833]" : "bg-pink-50/30 backdrop-blur-sm text-[#061833]"
//       }`}
//     >
//       <div className="container flex justify-between items-center mx-auto p-5">
//         {/* Logo */}
//         <div className="font-bold text-base sm:text-lg z-10 cursor-pointer" onClick={()=>router.push("/")}>
//           <img src="/assets/ns-logo-no-bg.png" className="w-10 lg:w-16" alt="logo"/>
//         </div>

//         {/* Desktop Menu */}
//         <div
//           className={`hidden md:flex gap-5 text-xs xl:text-sm ${
//             !isScrolled && "text-shadow-lg"
//           } transition-all duration-300`}
//         >
//           {menuItems.map((item,idx) => (
//             <div key={idx} className="cursor-pointer hover:font-semibold hover:-translate-y-0.5 transition-all duration-300" onClick={()=>router.push(item?.link)}>
//               {item?.key}
//             </div>
//           ))}
//         </div>

//         {/* Mobile Menu Icon */}
//         <div className="md:hidden text-xl">
//           {menuOpen ? (
//             <HiX onClick={() => setMenuOpen(false)} className="cursor-pointer transition-transform" />
//           ) : (
//             <HiOutlineMenu onClick={() => setMenuOpen(true)} className="cursor-pointer transition-transform" />
//           )}
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       <AnimatePresence>
//         {menuOpen && (
//           <motion.div
//             initial={{ height: 0, opacity: 0 }}
//             animate={{ height: "auto", opacity: 1 }}
//             exit={{ height: 0, opacity: 0 }}
//             transition={{ duration: 0.3, ease: "easeInOut" }}
//             className={`md:hidden bg-pink-50/95 backdrop-blur-md text-[#061833] px-6 py-4`}
//           >
//             <div className="flex flex-col gap-4 text-sm font-medium h-full">
//               {menuItems.map((item,idx) => (
//                 <motion.div
//                   key={idx}
//                   whileHover={{ x: 5 }}
//                   className="cursor-pointer pb-2"
//                   onClick={() => {setMenuOpen(false)}}
//                 >
//                   <Link href={item?.link}>{item?.key}</Link>
                
//                 </motion.div>
//               ))}
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </div>
//   );
// };

// export default Header;


"use client";
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiOutlineMenu, HiX } from "react-icons/hi";
import Link from "next/link";
import { useRouter } from "next/router";
import { useSpeech } from "@/context/SpeechContext"; // NEW
import { IoVolumeHigh } from "react-icons/io5";
import { IoMdVolumeOff } from "react-icons/io";

const Header = () => {
  const router = useRouter();
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { speechEnabled, toggleSpeech } = useSpeech(); // NEW

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { key: "Home", link: "/" },
    { key: "About Us", link: "/about-us" },
    { key: "Ethanol", link: "/ethanol" },
    { key: "Our Expertise", link: "/why-choose-us" },
    { key: "Services", link: "/#services" },
    { key: "Clients", link: "/#clients" },
    { key: "Contact Us", link: "/#contact" },
  ];

  return (
    <div
      className={`header fixed top-0 left-0 w-full z-50 transition-all duration-300 font-medium ${
        isScrolled
          ? "bg-pink-50/60 backdrop-blur-sm text-[#061833]"
          : "bg-pink-50/30 backdrop-blur-sm text-[#061833]"
      }`}
    >
      <div className="container flex justify-between items-center mx-auto p-5">
        
        {/* Logo */}
        <div
          className="font-bold text-base sm:text-lg z-10 cursor-pointer"
          onClick={() => router.push("/")}
        >
          <img
            src="/assets/ns-logo-no-bg.png"
            className="w-10 lg:w-16"
            alt="logo"
          />
        </div>

        {/* Desktop Menu */}
        <div
          className={`hidden md:flex gap-5 text-xs xl:text-sm items-center ${
            !isScrolled && "text-shadow-lg"
          } transition-all duration-300`}
        >
          {menuItems.map((item, idx) => (
            <div
              key={idx}
              className="cursor-pointer hover:font-semibold hover:-translate-y-0.5 transition-all duration-300"
              onClick={() => router.push(item?.link)}
            >
              {item?.key}
            </div>
          ))}
             {/* SPEECH TOGGLE BUTTON (DESKTOP) */}
        <button
          onClick={toggleSpeech}
          className={`hidden md:block p-3 rounded-full text-2xl font-semibold transition-all bg-white cursor-pointer`}
        >
          {speechEnabled ? <IoVolumeHigh /> : <IoMdVolumeOff />}
        </button>

{/* <button
  onClick={() => {
    console.log("🔊 CLICK DETECTED");

    const utterance = new SpeechSynthesisUtterance(
      "Speech system test. If you hear this, audio is working."
    );

    utterance.rate = 0.9;
    utterance.pitch = 1;
    utterance.volume = 1;

    // IMPORTANT: pick FIRST available voice
    const voices = window.speechSynthesis.getVoices();
    if (voices.length > 0) {
      utterance.voice = voices[0];
    }

    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(utterance);

    toggleSpeech();
  }}
  className="hidden md:block p-3 rounded-full text-2xl font-semibold transition-all bg-white cursor-pointer"
>
  {speechEnabled ? <IoVolumeHigh /> : <IoMdVolumeOff />}
</button> */}

        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden text-xl flex items-center gap-3">
          
          {/* 🔊 SPEECH TOGGLE BUTTON (MOBILE) */}

          <button
          onClick={toggleSpeech}
          className={`p-2 rounded-full text-lg font-semibold transition-all bg-white cursor-pointer`}
        >
          {speechEnabled ? <IoVolumeHigh /> : <IoMdVolumeOff />}
        </button>

          {menuOpen ? (
            <HiX
              onClick={() => setMenuOpen(false)}
              className="cursor-pointer transition-transform"
            />
          ) : (
            <HiOutlineMenu
              onClick={() => setMenuOpen(true)}
              className="cursor-pointer transition-transform"
            />
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden bg-pink-50/95 backdrop-blur-md text-[#061833] px-6 py-4"
          >
            <div className="flex flex-col gap-4 text-sm font-medium h-full">
              {menuItems.map((item, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ x: 5 }}
                  className="cursor-pointer pb-2"
                  onClick={() => {
                    setMenuOpen(false);
                  }}
                >
                  <Link href={item?.link}>{item?.key}</Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Header;
