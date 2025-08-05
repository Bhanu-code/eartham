"use client";

import Image from "next/image";
import { motion, Variants } from "framer-motion";
import RightArrow from "../../assets/about/arrow_right.svg";
import Helmet from "../../assets/about/helmet.svg";
import PaintBrush from "../../assets/about/paintbrush'.svg";
import Screws from "../../assets/about/screws.svg";

// Animation variants
const containerVariants = {
  initial: { opacity: 0 },
  animate: { 
    opacity: 1,
    transition: {
      duration: 0.6,
      staggerChildren: 0.2
    }
  }
};

const leftSideVariants:Variants = {
  initial: { opacity: 0, x: -60 },
  animate: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.7, ease: "easeOut" }
  }
};

const rightSideVariants:Variants = {
  initial: { opacity: 0, x: 60 },
  animate: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.7, ease: "easeOut" }
  }
};

const formVariants = {
  initial: { opacity: 0, y: 30 },
  animate: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.5,
      staggerChildren: 0.1
    }
  }
};

const inputVariants:Variants = {
  initial: { opacity: 0, y: 20 },
  animate: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" }
  }
};

const featureVariants:Variants = {
  initial: { opacity: 0, x: 40 },
  animate: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  },
  hover: {
    x: -10,
    transition: { duration: 0.3, ease: "easeInOut" }
  }
};

const iconVariants:Variants = {
  hover: {
    scale: 1.1,
    rotate: 5,
    transition: { duration: 0.3, ease: "easeInOut" }
  }
};

const buttonVariants:Variants = {
  hover: { 
    scale: 1.05,
    transition: { duration: 0.3, ease: "easeInOut" }
  },
  tap: { scale: 0.98 }
};

const ContactSec = () => {
    return (
        <motion.div 
            className="contact w-11/12 my-10 mb-50 flex flex-col-reverse md:flex-row items-center m-auto justify-between md:gap-x-10 lg:gap-x-20"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.3 }}
            variants={containerVariants}
        >
            <motion.div 
                className="left w-11/12 md:w-1/2"
                variants={leftSideVariants}
            >
                <motion.h1 
                    className="text-[40px] md:text-[55px] text-nowrap montserrat-600 font-semibold text-[var(--green-color)] my-5"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    Request a Quote
                </motion.h1>
                
                <motion.div 
                    className="grid grid-cols-2 items-center justify-between gap-5 text-[#00000040]"
                    variants={formVariants}
                >
                    <motion.input 
                        type="text" 
                        placeholder="Full Name" 
                        className="border p-2" 
                        variants={inputVariants}
                    />
                    <motion.input 
                        type="text" 
                        placeholder="E-Mail" 
                        className="border p-2" 
                        variants={inputVariants}
                    />
                    <motion.input 
                        type="text" 
                        placeholder="Phone Number" 
                        className="border p-2" 
                        variants={inputVariants}
                    />
                    <motion.input 
                        type="text" 
                        placeholder="Select Service" 
                        className="border p-2" 
                        variants={inputVariants}
                    />
                    <motion.textarea 
                        name="text" 
                        placeholder="Message" 
                        className="border p-2 h-42 col-span-2" 
                        variants={inputVariants}
                    />
                </motion.div>
                
                <motion.button 
                    className="rounded-[50px] text-[20px] montserrat-400 flex items-center space-x-5 bg-[var(--green-color)] mt-10 px-10 py-3 text-white"
                    variants={buttonVariants}
                    whileHover="hover"
                    whileTap="tap"
                >
                    Appointment
                    <motion.div
                        whileHover={{ x: 5 }}
                        transition={{ duration: 0.2 }}
                    >
                        <Image className="inline" src={RightArrow} height={20} width={20} alt="arrow" />
                    </motion.div>
                </motion.button>
            </motion.div>

            <motion.div 
                className="right w-11/12 m-auto md:mx-0 md:flex-1 flex flex-col gap-y-10"
                variants={rightSideVariants}
            >
                <motion.div 
                    className="w-[487px] flex gap-x-10 items-center justify-center ml-auto"
                    variants={featureVariants}
                    whileHover="hover"
                >
                    <motion.div 
                        className="left"
                        variants={iconVariants}
                        whileHover="hover"
                    >
                        <Image src={Helmet} height={100} width={100} alt="helmet" />
                    </motion.div>
                    <div className="right">
                        <h1 className="font-bold text-[var(--green-color)] montserrat-700 text-[17px]">High Quality Build</h1>
                        <p className="montserrat-400 w-1/2 lg:w-full text-[17px]">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate s.</p>
                    </div>
                </motion.div>

                <motion.div 
                    className="w-[487px] flex gap-x-10 items-center justify-center ml-auto"
                    variants={featureVariants}
                    whileHover="hover"
                >
                    <motion.div 
                        className="left"
                        variants={iconVariants}
                        whileHover="hover"
                    >
                        <Image src={PaintBrush} height={100} width={100} alt="paintbrush" />
                    </motion.div>
                    <div className="right">
                        <h1 className="font-bold text-[var(--green-color)] montserrat-700 text-[17px]">High Quality Build</h1>
                        <p className="montserrat-400 w-1/2 lg:w-full text-[17px]">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate s.</p>
                    </div>
                </motion.div>

                <motion.div 
                    className="w-[487px] flex gap-x-10 items-center justify-center ml-auto"
                    variants={featureVariants}
                    whileHover="hover"
                >
                    <motion.div 
                        className="left"
                        variants={iconVariants}
                        whileHover="hover"
                    >
                        <Image src={Screws} height={100} width={100} alt="screws" />
                    </motion.div>
                    <div className="right">
                        <h1 className="font-bold text-[var(--green-color)] montserrat-700 text-[17px]">High Quality Build</h1>
                        <p className="montserrat-400 w-1/2 lg:w-full text-[17px]">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate s.</p>
                    </div>
                </motion.div>
            </motion.div>
        </motion.div>
    );
};

export default ContactSec;