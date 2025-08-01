"use client";

import React from "react";
import Image from "next/image";
import WhyChooseCard from "./WhyChooseCard";
import Building from "../assets/whychoose/building.png";
import { whychooseus } from "../utils/constant";

const _WhyChoose = () => {
  return (
    <div className="w-full mt-10 sm:mt-15 md:mt-20 lg:mt-30">
      {/* Desktop */}
      <div className="hidden lg:grid grid-cols-4 grid-rows-2 bg-[var(--green-color)] h-[767px]">
        <WhyChooseCard data={whychooseus[0]} />
        <div className="row-span-2 relative">
          <Image
            src={Building}
            fill
            alt="building"
            className="object-cover"
            sizes="(min-width: 1024px) 25vw"
          />
        </div>
        <div className="col-span-2 bg-white text-[var(--green-color)] text-[60px] montserrat-400 flex flex-col items-end justify-start pr-10 pt-5 text-right h-[384px]">
          <p>WHY</p>
          <p>CHOOSE</p>
          <p>US?</p>
        </div>
        {whychooseus.slice(1).map((item, index) => (
          <WhyChooseCard key={index} data={item} />
        ))}
      </div>

      {/* Tablet */}
      <div className="hidden w-screen  md:block lg:hidden bg-[var(--green-color)] md:h-[1200px] py-8 px-4">
        <div className="w-11/12">
          <div className="w-full  mx-auto">
            <div className="bg-white relative left-7  text-[var(--green-color)] text-4xl md:text-5xl montserrat-400 flex flex-col items-center text-center rounded-lg py-8 mb-6">
              <p>WHY</p>
              <p>CHOOSE</p>
              <p>US?</p>
            </div>
            <div className="grid grid-cols-3 gap-2 h-[600px] w-full">
              <div className="space-y-4">
                {whychooseus.slice(0, 2).map((item, index) => (
                  <div className="h-1/2" key={index}>
                    <WhyChooseCard data={item} />
                  </div>
                ))}
              </div>
              <div className="relative left-8 top-9">
                <Image
                  src={Building}
                  fill
                  alt="building"
                  className="object-cover rounded-lg"
                  sizes="(min-width: 768px) 33vw"
                />
              </div>
              <div className="space-y-4">
                {whychooseus.slice(2).map((item, index) => (
                  <div className="h-1/2" key={index}>
                    <WhyChooseCard data={item} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile */}
      <div className="block md:hidden bg-[var(--green-color)] py-6 px-4 pb-16">
        <div className="max-w-md mx-auto">
          <div className="bg-white text-[var(--green-color)] text-3xl montserrat-400 flex flex-col items-center text-center rounded-lg py-6 mb-6">
            <p>WHY</p>
            <p>CHOOSE</p>
            <p>US?</p>
          </div>
          <div className="mb-6 relative h-64">
            <Image
              src={Building}
              fill
              alt="building"
              className="object-cover rounded-lg"
              sizes="(max-width: 640px) 100vw"
            />
          </div>
          <div className="grid grid-cols-1 gap-4">
            {whychooseus.map((item, index) => (
              <WhyChooseCard key={index} data={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default _WhyChoose;