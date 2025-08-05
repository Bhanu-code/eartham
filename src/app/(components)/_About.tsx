"use client"

import Image from 'next/image'
import React from 'react'
import Slide2 from "../../../public/hero_home_icons/slide2.png"
import { motion } from "framer-motion"

const About = () => {
  const images = [Slide2, Slide2, Slide2, Slide2, Slide2];
  const [currentIndex, setCurrentIndex] = React.useState(1);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev === images.length - 2 ? 1 : prev + 1));
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="w-screen text-center overflow-hidden">
      {/* Animated Heading */}
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-[35px] text-[var(--green-color)] mt-20 mb-10 montserrat-700 font-bold"
      >
        About Eartham
      </motion.h1>

      {/* Animated Slider */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        className="image-slider m-auto flex justify-center relative w-screen overflow-hidden"
      >
        <div
          className="flex items-center transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(calc(-${currentIndex * 650}px + 50% - 325px))`,
            width: `${images.length * 650}px`,
          }}
        >
          {images.map((image, index) => (
            <motion.div
              key={index}
              className="flex-shrink-0 w-[650px] px-2 flex justify-center"
              initial={{ opacity: 0.4, scale: 0.9 }}
              animate={{
                opacity: index === currentIndex ? 1 : 0.4,
                scale: index === currentIndex ? 1 : 0.9,
              }}
              transition={{ duration: 0.5 }}
            >
              <Image
                className="border rounded-2xl"
                src={image}
                height={650}
                width={650}
                alt={`slide-${index}`}
                priority={index === currentIndex}
              />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default About;
