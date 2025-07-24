import React from "react";
import WhyChooseCard from "./WhyChooseCard";
import Building from "../assets/whychoose/building.png";
import Image from "next/image";
import { whychooseus } from "../utils/constant";

const _WhyChoose = () => {
  return (
    <div className="w-full mt-10 sm:mt-15 md:mt-20 lg:mt-30">
      {/* Desktop Layout (lg and above) */}
      <div className="hidden lg:grid lg:grid-cols-4 lg:grid-rows-2 bg-[var(--green-color)] h-[767px]">
        <div className="col-span-1">
          <WhyChooseCard data={whychooseus[0]} />
        </div>
        <div className="col-span-1 row-span-2">
          <Image
            src={Building}
            width={1500}
            height={1500}
            alt="building"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="text-[var(--green-color)] h-[384px] montserrat-400 text-[60px] flex flex-col items-end pr-10 pt-5 col-span-2 text-right bg-white mb-5">
          <p>WHY</p>
          <p>CHOOSE</p>
          <p>US?</p>
        </div>
        <div className="col-span-1 row-span-1">
          <WhyChooseCard data={whychooseus[1]} />
        </div>
        <div className="col-span-1 row-span-1">
          <WhyChooseCard data={whychooseus[2]} />
        </div>
        <div className="col-span-1 row-span-1">
          <WhyChooseCard data={whychooseus[3]} />
        </div>
      </div>

      {/* Tablet Layout (md to lg) */}
      <div className="hidden md:block lg:hidden bg-[var(--green-color)] py-8 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header Section */}
          <div className="text-[var(--green-color)] montserrat-400 text-4xl md:text-5xl flex flex-col items-center text-center bg-white rounded-lg py-8 mb-6">
            <p>WHY</p>
            <p>CHOOSE</p>
            <p>US?</p>
          </div>

          {/* Content Grid */}
          <div className="grid grid-cols-3 gap-4 h-[500px]">
            <div className="col-span-1 space-y-4">
              <div className="h-1/2">
                <WhyChooseCard data={whychooseus[0]} />
              </div>
              <div className="h-1/2">
                <WhyChooseCard data={whychooseus[1]} />
              </div>
            </div>
            <div className="col-span-1">
              <Image
                src={Building}
                width={1500}
                height={1500}
                alt="building"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <div className="col-span-1 space-y-4">
              <div className="h-1/2">
                <WhyChooseCard data={whychooseus[2]} />
              </div>
              <div className="h-1/2">
                <WhyChooseCard data={whychooseus[3]} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Layout (up to md) */}
      <div className="block md:hidden bg-[var(--green-color)] py-6 px-4">
        <div className="max-w-md mx-auto">
          {/* Header Section */}
          <div className="text-[var(--green-color)] montserrat-400 text-3xl flex flex-col items-center text-center bg-white rounded-lg py-6 mb-6">
            <p>WHY</p>
            <p>CHOOSE</p>
            <p>US?</p>
          </div>

          {/* Building Image */}
          <div className="mb-6">
            <Image
              src={Building}
              width={1500}
              height={1500}
              alt="building"
              className="w-full h-64 object-cover rounded-lg"
            />
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 gap-4">
            <WhyChooseCard data={whychooseus[0]} />
            <WhyChooseCard data={whychooseus[1]} />
            <WhyChooseCard data={whychooseus[2]} />
            <WhyChooseCard data={whychooseus[3]} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default _WhyChoose;