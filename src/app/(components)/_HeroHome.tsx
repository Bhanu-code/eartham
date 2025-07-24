"use client"

import Image from "next/image";
import React from "react";
import GreenBg from "../../../public/hero_home_icons/greenbg.png";
import Slide1 from "../../../public/hero_home_icons/Slide2.png";
import Slide2 from "../../../public/hero_home_icons/Slide1.png";

const HeroHome = () => {
  const images = [Slide1, Slide2];
  const [currentIndex, setCurrentIndex] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000); // Auto slide every 3 seconds
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="w-full space-y-1 text-[color:var(--green-color)] overflow-hidden montserrat-400">
      <div className="pl-20 pt-10 pb-2">
        <h2 className="text-[color:var(--green-color)] text-[25px]">
          Crafting Landmarks,
        </h2>
        <h1 className="text-[35px]">Shaping Legacy.</h1>
        <button className="px-10 montserrat-600 font-semibold py-2 mt-7 text-[color:var(--green-color)] border-[color:var(--green-color)] rounded-3xl border-2">
          Reach Us
        </button>
      </div>

      <div className="hero-bg w-screen top-10 relative">
        <Image
          className="w-full relative top-5 z-0"
          src={GreenBg}
          height={300}
          width={900}
          alt="hero-bg"
        />
        <div className="absolute z-10 bottom-0 w-full max-w-[990px] right-0  overflow-hidden">
          <div
            className="flex items-center transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${currentIndex * 1050}px)`,
              width: `${images.length * 1050}px`,
            }}
          >
            {images.map((image, index) => (
              <div
                key={index}
                className="flex-shrink-0  md:w-[1050px] px-2 flex justify-center"
              >
                <Image
                  className=" rounded-2xl w-[650px]  md:w-[700px] lg:w-[900px]  transition-all duration-500"
                  src={image}
                  height={900}
                  width={900}
                  alt={`slide-${index}`}
                  priority={index === currentIndex}
                />
              </div>
            ))}
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-white via-white/90 to-transparent pointer-events-none z-20"></div>
      </div>
    </div>
  );
};

export default HeroHome;