"use client";

import Image from 'next/image';
import React from 'react';
import { motion } from 'framer-motion';

import Slide2 from '../../../../public/hero_home_icons/slide2.png';
import Fb from '../../assets/contact/facebook.svg';
import Tw from '../../assets/contact/twitter.svg';
import Lk from '../../assets/contact/linkedin.svg';
import VLine from '../../assets/contact/Vector 22.svg';

const Hero: React.FC = () => {
  return (
    <div className="w-full flex flex-col lg:flex-row">
      <motion.div
        className="relative w-full lg:w-[861px] bg-[#1F1F1FD9]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <Image
          className="opacity-40 w-full h-auto"
          src={Slide2}
          width={861}
          height={600}
          alt="slide"
          priority
        />
        <motion.div
          className="absolute top-10 sm:top-16 md:top-24 lg:top-40 left-0 right-0 w-full max-w-[1200px] mx-auto px-4 sm:px-6 md:px-10 lg:px-20 text-white space-y-6 sm:space-y-8 md:space-y-10"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <motion.div
            className="flex items-center space-x-3"
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <Image src={VLine} height={60} alt="line" className="h-12 sm:h-16 md:h-20" />
            <h1 className="text-[32px] sm:text-[40px] md:text-[48px] lg:text-[64px] montserrat-700 font-bold">
              Contact Us
            </h1>
          </motion.div>
          <motion.p
            className="montserrat-400 text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px] w-full sm:w-4/5"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut quis egestas pellentesque libero dolor in diam consequat ut. Mi nibh amet viverra id aliquet neque odio.
          </motion.p>
        </motion.div>
      </motion.div>

      <motion.div
        className="flex-1 text-center md:text-left px-4 sm:px-6 md:px-10 lg:px-15 pt-10 sm:pt-16 md:pt-20 pb-6 sm:pb-8 md:pb-10"
        initial={{ x: 50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <h1 className="text-[var(--green-color)] text-[24px] sm:text-[28px] md:text-[32px] montserrat-700 font-bold">
          Contact Info
        </h1>
        <div className="space-y-6 sm:space-y-8 mt-6 sm:mt-8">
          <div>
            <h3 className="text-[var(--green-color)] font-bold text-[14px] sm:text-[15px] md:text-[16px] montserrat-700">
              Our Office
            </h3>
            <p className="text-[#2A2A2A] montserrat-400 text-[13px] sm:text-[14px] md:text-[15px] mt-2">
              1234 Divi St. #1000, San Francisc, CA 93251
            </p>
          </div>

          <div>
            <h3 className="text-[var(--green-color)] font-bold text-[14px] sm:text-[15px] md:text-[16px] montserrat-700">
              Open Office Hours
            </h3>
            <p className="text-[#2A2A2A] montserrat-400 text-[13px] sm:text-[14px] md:text-[15px] mt-2">
              M-F: 9am – 6pm S-S: 10am – 4pm
            </p>
          </div>

          <div>
            <h3 className="text-[var(--green-color)] font-bold text-[14px] sm:text-[15px] md:text-[16px] montserrat-700">
              Get in Touch
            </h3>
            <p className="text-[#2A2A2A] montserrat-400 text-[13px] sm:text-[14px] md:text-[15px] mt-2">
              constructioninc.com
            </p>
            <p className="text-[#2A2A2A] montserrat-400 text-[13px] sm:text-[14px] md:text-[15px]">
              (346) 426-2351
            </p>
          </div>
        </div>

        <motion.div
          className="socials flex items-center justify-center md:justify-start space-x-6 sm:space-x-8 mt-10 sm:mt-12 md:mt-15"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <Image src={Fb} width={20} height={20} alt="facebook" className="w-5 h-5 sm:w-6 sm:h-6" />
          <Image src={Tw} width={20} height={20} alt="twitter" className="w-5 h-5 sm:w-6 sm:h-6" />
          <Image src={Lk} width={20} height={20} alt="linkedin" className="w-5 h-5 sm:w-6 sm:h-6" />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Hero;
