// import React from "react";
// import {
//   FaFacebook,
//   FaTwitter,
//   FaYoutube,
//   FaLinkedin,
//   FaInstagram,
// } from "react-icons/fa";

// function Navbar() {
//   return (
//     <>
//       <div className="bg-rose-600 text-white py-2">
//         <div className="container mx-auto px-4 flex justify-between items-center">
//           <div className="flex items-center space-x-4">
//             <span>contact@classroom.com</span>
//             <span>(414) 850 - 0417</span>
//           </div>
//           <div className="flex space-x-4">
//             <FaFacebook className="cursor-pointer" />
//             <FaTwitter className="cursor-pointer" />
//             <FaYoutube className="cursor-pointer" />
//             <FaLinkedin className="cursor-pointer" />
//             <FaInstagram className="cursor-pointer" />
//           </div>
//         </div>
//       </div>
//       <nav className="bg-white py-4 shadow-sm">
//         <div className="container mx-auto px-4 flex justify-between items-center">
//           <div className="flex items-center space-x-8">
//             <h1 className="text-2xl font-bold flex items-center">
//               <span className="mr-2">🎓</span> Classroom X
//             </h1>
//             <div className="space-x-6">
//               <a href="#" className="hover:text-rose-600">
//                 Home
//               </a>
//               <a href="#" className="hover:text-rose-600">
//                 About
//               </a>
//               <a href="#" className="hover:text-rose-600">
//                 Academics
//               </a>
//             </div>
//           </div>
//           <div className="flex items-center space-x-6">
//             <a href="#" className="hover:text-rose-600">
//               Enrollment
//             </a>
//             <div className="relative group">
//               <button className="hover:text-rose-600">Pages</button>
//             </div>
//             <a href="#" className="flex items-center">
//               Cart (0)
//             </a>
//           </div>
//         </div>
//       </nav>
//     </>
//   );
// }

// export default Navbar;

"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { Facebook, Twitter, Youtube, Linkedin, Instagram } from "lucide-react";
function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const isHomePage = pathname === "/";
  return (
    <div className="fixed z-50 w-full">
      {/* Top Bar - Add subtle animation */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-[#c13b50] text-white py-2 px-4 md:px-20 flex justify-between items-center text-sm"
      >
        <div className="flex items-center">
          <a href="mailto:contact@classroom.com" className="flex items-center">
            <span className="mr-1">✉</span> contact@classroom.com
          </a>
          <a href="tel:(414) 850 - 0417" className="ml-6 flex items-center">
            <span className="mr-1">☎</span> (414) 850 - 0417
          </a>
        </div>
        <div className="flex space-x-3">
          <Link href="#" aria-label="Facebook">
            <Facebook size={16} />
          </Link>
          <Link href="#" aria-label="Twitter">
            <Twitter size={16} />
          </Link>
          <Link href="#" aria-label="Youtube">
            <Youtube size={16} />
          </Link>
          <Link href="#" aria-label="LinkedIn">
            <Linkedin size={16} />
          </Link>
          <Link href="#" aria-label="Instagram">
            <Instagram size={16} />
          </Link>
        </div>
      </motion.div>

      {/* Navigation - Add slide down animation */}
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className={` text-white py-4 px-4 md:px-20 flex justify-between items-center ${
          isScrolled || !isHomePage ? "bg-[#1a3a54] " : "bg-transparent"
        }`}
      >
        <div className="flex items-center space-x-8">
          <Link href="/" className="text-white hover:text-gray-200">
            Home
          </Link>
          <Link href="/about" className="text-white hover:text-gray-200">
            About
          </Link>
          <Link href="/academics" className="text-white hover:text-gray-200">
            Academics
          </Link>
        </div>
        <div className="flex items-center">
          <Link href="/" className="flex items-center">
            <span className="text-xl font-bold">NITTEDU</span>
          </Link>
        </div>
        <div className="flex items-center space-x-8">
          <Link href="/enrollment" className="text-white hover:text-gray-200">
            Enrollment
          </Link>

          <Link
            href="/pages"
            className="text-white hover:text-gray-200 flex items-center"
          >
            Contact
          </Link>
          <Link
            href="/pages"
            className="text-white hover:text-gray-200 flex items-center"
          >
            Contact
          </Link>
        </div>
      </motion.nav>
    </div>
  );
}

export default Navbar;
