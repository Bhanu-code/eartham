"use client";
import React from 'react';
import { motion, Variants } from 'framer-motion';

interface ServiceData {
  id: number;
  name: string;
  desc: string;
  points: string[];
}

interface ServiceSecProps {
  data: ServiceData;
}

const fadeUp:Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const ServiceSec: React.FC<ServiceSecProps> = ({ data }) => {
  return (
    <motion.div
      className="w-full bg-white my-10 sm:my-14 md:my-20"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={fadeUp}
    >
      <motion.div
        className="w-full service-cont max-w-[1200px] mx-auto bg-[#F7F7F7] space-y-6 sm:space-y-7 rounded-lg shadow-md overflow-hidden"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
      >
        <div className="py-6 sm:py-8 md:py-10 px-4 sm:px-10 md:px-16 lg:px-20">
          <motion.h1
            className="text-[24px] sm:text-[28px] md:text-[30px] montserrat-700 font-bold text-[var(--green-color)]"
            variants={fadeUp}
          >
            {data.name}
            <hr className="border-2 mt-3 sm:mt-4 text-[var(--green-color)] w-[60px] sm:w-[80px]" />
          </motion.h1>

          <motion.p
            className="mt-6 sm:mt-8 md:mt-12 montserrat-400 text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px]"
            variants={fadeUp}
          >
            {data.desc}
          </motion.p>

          <motion.ul
            className="montserrat-400 text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] mt-6 sm:mt-8 md:mt-10 ml-4 sm:ml-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-4 sm:gap-x-6 gap-y-2"
            variants={fadeUp}
          >
            {data.points.map((point, index) => (
              <motion.li
                className="text-left list-disc ml-4 pl-2"
                key={index}
                variants={fadeUp}
              >
                {point}
              </motion.li>
            ))}
          </motion.ul>
        </div>

        <motion.div
          className="action qoutes-buttons flex flex-col sm:flex-row montserrat-600 text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px] font-semibold"
          variants={fadeUp}
        >
          <motion.div
            className={`w-full sm:w-1/2 ${
              data.id % 2 === 0 ? 'bg-[var(--yellow-color)]' : 'bg-[var(--green-color)]'
            } py-4 sm:py-5 flex items-center justify-center`}
            whileHover={{ scale: 1.02 }}
          >
            <motion.button
              className="text-white mx-auto px-3 py-1 sm:px-4 sm:py-2 border border-white"
              whileHover={{ backgroundColor: 'white', color: 'var(--green-color)' }}
              transition={{ duration: 0.3 }}
            >
              GET A QUOTE
            </motion.button>
          </motion.div>

          <motion.div
            className={`w-full sm:w-1/2 ${
              data.id % 2 === 0 ? 'bg-[var(--green-color)]' : 'bg-[var(--yellow-color)]'
            } py-4 sm:py-5 flex items-center justify-center`}
            whileHover={{ scale: 1.02 }}
          >
            <motion.button
              className="text-white mx-auto px-3 py-1 sm:px-4 sm:py-2 border border-white"
              whileHover={{ backgroundColor: 'white', color: 'var(--yellow-color)' }}
              transition={{ duration: 0.3 }}
            >
              VIEW PROJECTS
            </motion.button>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default ServiceSec;
