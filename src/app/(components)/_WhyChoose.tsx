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
        <div className="row-span-2">
          <Image
            src={Building}
            width={1500}
            height={1500}
            alt="building"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="col-span-2 bg-white text-[var(--green-color)] text-[60px] montserrat-400 flex flex-col items-end justify-start pr-10 pt-5 text-right mb-5 h-[384px]">
          <p>WHY</p>
          <p>CHOOSE</p>
          <p>US?</p>
        </div>
        {whychooseus.slice(1).map((item, index) => (
          <WhyChooseCard key={index} data={item} />
        ))}
      </div>

      {/* Tablet */}
      <div className="hidden md:block lg:hidden bg-[var(--green-color)] w-screen py-8 px-1 h-[1200px]">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white text-[var(--green-color)] text-4xl md:text-5xl montserrat-400 flex flex-col items-center text-center rounded-lg py-8 mb-6">
            <p>WHY</p>
            <p>CHOOSE</p>
            <p>US?</p>
          </div>
          <div className="grid grid-cols-3 gap-4 h-[400px] w-11/12">
            <div className="space-y-4">
              {whychooseus.slice(0, 2).map((item, index) => (
                <div className="h-1/2" key={index}>
                  <WhyChooseCard data={item} />
                </div>
              ))}
            </div>
            <div>
              <Image
                src={Building}
                width={1500}
                height={1500}
                alt="building"
                className="w-full h-full pl-15 lg:ml-0 object-cover rounded-lg"
              />
            </div>
            <div className="space-y-4 ">
              {whychooseus.slice(2).map((item, index) => (
                <div className="h-1/2" key={index}>
                  <WhyChooseCard data={item} />
                </div>
              ))}
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
          <div className="mb-6">
            <Image
              src={Building}
              width={1500}
              height={1500}
              alt="building"
              className="w-full h-64 object-cover rounded-lg"
              sizes="(max-width: 640px) 100vw, 400px"
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
