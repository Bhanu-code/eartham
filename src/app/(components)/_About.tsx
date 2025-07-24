"use client"

import Image from 'next/image'
import React from 'react'
import Slide2 from "../../../public/hero_home_icons/slide2.png"

const _About = () => {
  const images = [Slide2, Slide2, Slide2, Slide2, Slide2];
  const [currentIndex, setCurrentIndex] = React.useState(1);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev === images.length - 2 ? 1 : prev + 1));
    }, 3000); // Auto slide every 3 seconds
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="w-screen text-center overflow-hidden">
      <h1 className="text-[35px] text-[var(--green-color)] mt-20 mb-10 montserrat-700 font-bold">
        About Eartham
      </h1>
      <div className="image-slider m-auto flex justify-center relative w-screen overflow-hidden">
        <div
          className="flex items-center transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(calc(-${currentIndex * 650}px + 50% - 325px))`,
            width: `${images.length * 650}px`,
          }}
        >
          {images.map((image, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-[650px] px-2 flex justify-center"
            >
              <Image
                className={`border rounded-2xl transition-all duration-500 ${
                  index === currentIndex
                    ? 'opacity-100 scale-100'
                    : 'opacity-50 scale-90'
                }`}
                src={image}
                height={650}
                width={650}
                alt={`slide-${index}`}
                priority={index === currentIndex}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default _About