"use client"

import React from 'react';
import { motion } from 'framer-motion';

const ContactForm = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className="w-full py-20 bg-[#F7F7F7]"
    >
      <div className="w-11/12 flex m-auto gap-x-10 montserrat-700 font-bold text-[16px]">
        <div className="left flex flex-col gap-5 w-full md:w-3/5 m-auto">
          <h1 className="text-[40px] montserrat-700 font-bold text-[var(--green-color)]">Get in Touch</h1>
          <hr className="text-[var(--green-color)] w-10 border-2" />
          <input
            type="text"
            name="name"
            placeholder="Name"
            className="bg-white text-[#666666] p-3"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="bg-white text-[#666666] p-3"
          />
          <textarea
            name="message"
            placeholder="Message"
            className="bg-white p-3 text-[#666666] h-40"
          />
          <button className="text-[var(--green-color)] rubik-600 font-semibold mt-4 w-full md:w-1/3 text-[16px] border-2 border-[var(--green-color)] px-2 py-3 rounded-[50px]">
            SEND MESSAGE
          </button>
        </div>

        {/* Future expansion */}
        {/* <div className="right flex-1">
          <FAQs />
        </div> */}
      </div>
    </motion.div>
  );
};

export default ContactForm;
