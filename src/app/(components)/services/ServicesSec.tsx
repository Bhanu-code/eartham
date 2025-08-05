'use client';

import Image from 'next/image';
import React from 'react';
import { motion, Variants } from 'framer-motion';

import Icon1 from '../../assets/services/icon.svg';
import Icon2 from '../../assets/services/icon (1).svg';
import Icon3 from '../../assets/services/icon (2).svg';
import Icon4 from '../../assets/services/icon (3).svg';
import Icon5 from '../../assets/services/icon (4).svg';
import Icon6 from '../../assets/services/icon (5).svg';

// Framer Motion Variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants:Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
    },
  },
};

const ServicesSec: React.FC = () => {
  const services = [
    { icon: Icon1, title: 'Construction', bg: 'bg-white', text: 'text-[var(--green-color)]' },
    { icon: Icon2, title: 'Renovation', bg: 'bg-[#DDC258]', text: 'text-white' },
    { icon: Icon3, title: 'Consultation', bg: 'bg-white', text: 'text-[var(--green-color)]' },
    { icon: Icon4, title: 'Architecture', bg: 'bg-[var(--green-color)]', text: 'text-white' },
    { icon: Icon5, title: 'Turnkey Solutions', bg: 'bg-white', text: 'text-[var(--green-color)]' },
    { icon: Icon6, title: 'Electric', bg: 'bg-[var(--green-color)]', text: 'text-white' },
  ];

  return (
    <motion.div
      className="w-full py-10 sm:py-14 md:py-20"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      <div className="wrapper w-full max-w-[1200px] mx-auto px-4 sm:px-6 md:px-8">
        <motion.h1
          className="text-center montserrat-700 font-bold text-[#292E3D] text-[24px] sm:text-[30px] md:text-[36px]"
          variants={cardVariants}
        >
          Services
        </motion.h1>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10 my-6 sm:my-8 md:my-10 place-items-center"
          variants={containerVariants}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              className={`item shadow-lg ${service.bg} ${service.text} w-full max-w-[271px] h-[181px] flex flex-col items-center justify-center cursor-pointer`}
              variants={cardVariants}
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 200, damping: 15 }}
            >
              <Image
                src={service.icon}
                width={40}
                height={40}
                alt="icon"
                className="w-10 h-10 sm:w-[50px] sm:h-[50px]"
              />
              <hr className="w-[2rem] my-4 mx-auto" />
              <h2 className="montserrat-600 font-semibold text-[16px] sm:text-[18px] md:text-[20px] text-center">
                {service.title}
              </h2>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ServicesSec;
