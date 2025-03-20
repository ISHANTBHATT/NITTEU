"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  Facebook,
  Twitter,
  Youtube,
  Linkedin,
  Instagram,
  ArrowRight,
  Phone,
  Mail,
  Play,
} from "lucide-react";
import Link from "next/link";
function Footer() {
  return (
    <div>
      <motion.footer
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="py-16 px-8 lg:px-20 border-t"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <h3 className="text-lg font-medium mb-6">PAGES</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-600 hover:text-[#C1344E]">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-[#C1344E]">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-[#C1344E]">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-[#C1344E]">
                  Blog post
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-[#C1344E]">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-[#C1344E]">
                  Events
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-6">FOLLOW PAGES</h3>
            <ul className="space-x-3 flex">
              <Link
                href="#"
                aria-label="Facebook"
                className="text-gray-600 hover:text-[#C1344E]"
              >
                <Facebook size={30} />
              </Link>
              <Link
                href="#"
                aria-label="Twitter"
                className="text-gray-600 hover:text-[#C1344E]"
              >
                <Twitter size={30} />
              </Link>
              <Link
                href="#"
                aria-label="LinkedIn"
                className="text-gray-600 hover:text-[#C1344E]"
              >
                <Linkedin size={30} />
              </Link>
              <Link
                href="#"
                aria-label="Instagram"
                className="text-gray-600 hover:text-[#C1344E]"
              >
                <Instagram size={30} />
              </Link>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-6">EVENTS</h3>
            <div className="space-y-6">
              <div className="flex gap-4">
                <img
                  src="https://images.unsplash.com/photo-1455849318743-b2233052fcff"
                  alt=""
                  className="w-20 h-20 object-cover"
                />
                <div>
                  <div className="flex items-center gap-2 text-sm text-gray-600 mb-1">
                    <span>AUG 25, 2022</span>
                    <span>/</span>
                    <span>ARTICLES</span>
                  </div>
                  <h4 className="font-medium">
                    How to make your college application stand out
                  </h4>
                </div>
              </div>
              <div className="flex gap-4">
                <img
                  src="https://images.unsplash.com/photo-1523240795612-9a054b0db644"
                  alt=""
                  className="w-20 h-20 object-cover"
                />
                <div>
                  <div className="flex items-center gap-2 text-sm text-gray-600 mb-1">
                    <span>AUG 24, 2022</span>
                    <span>/</span>
                    <span>EDUCATION</span>
                  </div>
                  <h4 className="font-medium">
                    Basic steps to get involved in research as undergraduate
                  </h4>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-6">CONTACT</h3>
            <div className="space-y-4">
              <p className="flex items-center gap-2 text-gray-600">
                <Phone className="w-5 h-5 text-[#C1344E]" />
                (487) 514 - 3698
              </p>
              <p className="flex items-center gap-2 text-gray-600">
                <Mail className="w-5 h-5 text-[#C1344E]" />
                contact@classroom.com
              </p>
              <p className="flex items-center gap-2 text-gray-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 text-[#C1344E]"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
                2819 Gordon Street, Los Angeles CA, 90017
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-between pt-8 border-t">
          <div className="flex items-center gap-2 mb-4 lg:mb-0">
            <div className="w-8 h-8 bg-[#C1344E] flex items-center justify-center text-white font-bold">
              X
            </div>
            <span className="font-medium">Nitteu</span>
          </div>
          <div className="text-sm text-gray-600">
            © Copyright - Nitteu | Designed by{" "}
            <a href="#" className="text-[#C1344E]">
              Apace Digital Cargo
            </a>{" "}
          </div>
        </div>
      </motion.footer>
    </div>
  );
}

export default Footer;
