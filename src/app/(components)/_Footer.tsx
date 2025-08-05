"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

import Message from '../assets/footer_icons/Message.svg';
import Chat from '../assets/footer_icons/Chat.svg';
import Calendar from '../assets/footer_icons/Calendar.svg';
import Security from '../assets/footer_icons/Security.svg';
import Time from '../assets/footer_icons/Time.svg';

const _Footer = () => {
  const footerLinks = [
    { href: "/", label: "Home" },
    { href: "/about_lk", label: "About Us" },
    { href: "/services", label: "Services" },
    { href: "/projects", label: "Projects" },
    { href: "/up_coming", label: "Up Coming" },
    { href: "/contact_lk", label: "Contact Us" }
  ];

  const footerIcons = [
    { src: Message, alt: "message" },
    { src: Calendar, alt: "calendar" },
    { src: Chat, alt: "chat" },
    { src: Security, alt: "security" },
    { src: Time, alt: "time" }
  ];

  return (
    <footer className="w-full text-white bg-[color:var(--green-color)] py-8 sm:py-10 md:py-12 lg:py-16">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="container w-11/12 sm:w-10/12 md:w-9/12 lg:w-8/12 xl:w-1/2 mx-auto flex flex-col items-center justify-center space-y-6 sm:space-y-8 md:space-y-10"
      >

        {/* Brand Title */}
        <motion.h1
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="jost-600 font-semibold text-xl sm:text-2xl md:text-[25px] lg:text-3xl tracking-wide text-center"
        >
          EARTHAAM
        </motion.h1>

        {/* Footer Links */}
        <motion.nav
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="footer-links w-full"
        >
          <div className="montserrat-600 font-semibold grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-x-4 gap-y-3 sm:gap-x-6 md:gap-x-8 text-sm sm:text-[15px] text-center md:text-left">
            {footerLinks.map((link, index) => (
              <motion.div
                whileHover={{ scale: 1.05 }}
                key={index}
              >
                <Link
                  href={link.href}
                  className="hover:text-gray-200 transition-colors duration-200 whitespace-nowrap"
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.nav>

        {/* Footer Icons */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4 }}
          className="footer-icons w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg"
        >
          <div className="grid grid-cols-3 sm:grid-cols-5 items-center justify-items-center gap-3 sm:gap-4 md:gap-5">
            {footerIcons.map((icon, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.1 }}
                className="bg-white rounded-full p-2 sm:p-2.5 md:p-3 hover:scale-110 transition-transform duration-200 cursor-pointer"
              >
                <Image
                  src={icon.src}
                  width={24}
                  height={24}
                  className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8"
                  alt={icon.alt}
                />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Copyright */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="copyright jost-400 text-xs sm:text-sm md:text-[12px] text-[#92989F] text-center mt-4 sm:mt-6"
        >
          All rights reserved 2024.
        </motion.p>

      </motion.div>
    </footer>
  );
};

export default _Footer;
