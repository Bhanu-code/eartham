'use client';

import Image from 'next/image';
import React from 'react';
import { motion, Variants } from 'framer-motion';

import Bg from '../../assets/services/bg.png';
import Play from '../../assets/services/play-circle.svg';
import ImageIcon from '../../assets/services/image.svg';
import Stars from '../../assets/services/stars.svg';
import Line from '../../assets/services/Line 6.svg';

const fadeUp:Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
};

const Hero = () => {
  return (
    <motion.div
      className="w-full relative"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={fadeUp}
    >
      <Image src={Bg} width={1400} height={1400} alt="bg" className="w-full h-auto" />

      <div className="w-11/12 m-auto absolute top-2 left-2 md:top-8 md:left-5 lg:top-20 lg:left-15 flex">
        <div className="flex m-auto w-full">
          {/* Left Section */}
          <motion.div
            className="left w-full lg:w-1/2 flex flex-col items-left space-y-1 text-[var(--green-color)]"
            variants={fadeUp}
          >
            <div className="leading-5 md:leading-10 lg:leading-15">
              <motion.h1
                className="text-[20px] md:text-[30px] lg:text-[55px] montserrat-600 font-semibold"
                variants={fadeUp}
              >
                Diversified Services
              </motion.h1>
              <motion.h1
                className="text-[20px] md:text-[30px] lg:text-[55px] montserrat-600 font-semibold"
                variants={fadeUp}
              >
                Unavrying Quality
              </motion.h1>
            </div>

            <motion.p
              className="text-[10px] md:text-[15px] lg:text-[22px] montserrat-400 text-light line-[34px] text-[#7591A3] w-4/5"
              variants={fadeUp}
            >
              We designed 100+ commercial & residential projects in UAS & across the globe.
              Providing Design & 3D Support to Architectural Firms Globally. Award-Winning Company.
              <strong> 17+ Years </strong> Of Experience.
            </motion.p>

            <motion.div
              className="actions mt-1 md:mt-8 lg:mt-10 flex items-center gap-5 justify-start w-4/5"
              variants={fadeUp}
            >
              <motion.button
                className="px-1 py-1 lg:px-10 lg:py-2 text-[5px] md:text-[10px] lg:text-[14px] border lg:border-2 border-[var(--green-color)] rounded-[50px]"
                whileHover={{ scale: 1.05, backgroundColor: 'var(--green-color)', color: 'white' }}
                transition={{ duration: 0.3 }}
              >
                See Our Work
              </motion.button>

              <motion.div
                className="space-x-2 flex items-center"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <Image
                  className="inline w-[20px] md:w-[25px] lg:w-[40px]"
                  src={Play}
                  width={40}
                  height={40}
                  alt="play"
                />
                <Image
                  className="inline w-[50px] md:w-[70px] lg:w-[100px]"
                  src={Line}
                  width={100}
                  height={100}
                  alt="line"
                />
                <span className="text-[10px] md:text-[16px] lg:text-[20px]">Explore</span>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right Section */}
          <motion.div
            className="right w-1/2 hidden md:flex flex-col justify-between"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            {/* Card 1 */}
            <motion.div
              className="bg-white flex items-center justify-start gap-3 p-3 md:w-4/5 lg:w-1/3 shadow-md"
              whileHover={{ scale: 1.02 }}
            >
              <Image src={ImageIcon} width={50} height={50} alt="user" />
              <div className="flex flex-col">
                <span>Daniel Chester</span>
                <Image src={Stars} width={60} height={60} alt="rating" />
              </div>
            </motion.div>

            {/* Card 2 */}
            <motion.div
              className="bg-white flex items-center justify-end ml-auto gap-3 p-3 md:w-4/5 lg:w-1/3 shadow-md"
              whileHover={{ scale: 1.02 }}
            >
              <Image src={ImageIcon} width={50} height={50} alt="user" />
              <div className="flex flex-col">
                <span>Daniel Chester</span>
                <Image src={Stars} width={60} height={60} alt="rating" />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Hero;
