"use client";

import Image from "next/image";
import AboutHero from "../../../../public/about/abouthero.png";
import HelmetMan from "../../../../public/about/helmetman.svg";
import RightArrow from "../../assets/about/arrow_right.svg";
import Bridge from "../../../../public/about/bridge.svg";
import { aboutCards } from "@/app/utils/constant";
import ContactSec from "./ContactSec";

// Type definition for aboutCards items
type AboutCard = {
  id: number | string;
  name: string;
  desc: string;
};

const Hero = () => {
  return (
    <>
      {/* About Hero Section */}
      <div className="relative w-full about-hero-bg">
        <Image src={AboutHero} height={1500} width={1500} alt="about background" className="w-full" />
        <h1 className="absolute text-white text-[20px] md:text-[40px] lg:text-[72px] font-semibold montserrat-600 w-3/5 md:w-1/2 lg:leading-[5rem] top-20 md:top-28 lg:top-36 left-5 lg:left-20 z-10">
          Precision Design. Enduring Architecture. Inspired Living.
        </h1>
      </div>

      {/* About Info Section */}
      <div className="md:w-[1175px] w-full m-auto my-20 flex flex-col md:flex-row md:gap-x-5 lg:gap-x-40 px-4">
        <div className="w-full md:w-1/3">
          <Image src={HelmetMan} height={620} width={400} alt="helmet man" />
        </div>
        <div className="text-center md:text-left mt-5 text-[var(--green-color)] flex-1">
          <h4 className="kanit-400 text-[14px] font-medium">ABOUT EARTHAM</h4>
          <h1 className="text-[40px] lg:text-[55px] kanit-600 font-semibold leading-[3.5rem]">
            We&apos;re providing the best customer service
          </h1>
          <div className="bg-[var(--grey-color)] lato-400 text-[17px] w-full p-6 my-5 rounded-md">
            <p>
              For over 25 years, Earthaam has remained committed to designing spaces that transcend mere functionality.
              Each creation is meticulously planned and crafted to harmonize with its surroundings, seamlessly blending
              into the urban fabric while standing out as an architectural masterpiece.
            </p>
            <p className="text-[25px] my-8">
              <strong>Jone Doe</strong>, CEO
            </p>
          </div>
          <button className="bg-[var(--green-color)] px-10 py-3 mt-8 text-[20px] text-white flex items-center gap-x-2 rounded-full">
            Learn more
            <Image src={RightArrow} height={20} width={20} alt="arrow right" />
          </button>
        </div>
      </div>

      {/* Bridge Section */}
      <div className="relative">
        <Image src={Bridge} height={1500} width={1500} alt="bridge background" className="w-full" />
        <div className="absolute top-0 w-full h-full flex flex-col justify-center items-center text-white text-center px-6">
          <h1 className="text-[30px] lg:text-[55px] font-semibold montserrat-600">Build Your Future Today</h1>
          <h3 className="text-[12px] lg:text-[17px] montserrat-400 w-4/5 mt-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, necessitatibus. Ipsam quos quod cumque
            distinctio vel nisi, unde quo reprehenderit.
          </h3>
        </div>
      </div>

      {/* Cards Section */}
      <div className="w-11/12 lg:w-4/5 relative -mt-20 md:-mt-36 m-auto flex flex-col md:flex-row justify-center space-y-5 md:space-y-0 md:space-x-5 lg:space-x-8">
        {aboutCards.map((item: AboutCard) => (
          <div
            key={item.id}
            className="w-full md:w-1/3 lg:w-[381px] shadow-lg p-4 bg-white flex items-center space-x-4 rounded-md"
          >
            <div className="bg-[var(--green-color)] font-bold text-[40px] kanit-700 text-white p-5 rounded-full min-w-[80px] text-center">
              {item.id}
            </div>
            <div>
              <h1 className="text-[var(--blue-color)] montserrat-700 font-bold text-[20px]">{item.name}</h1>
              <p className="montserrat-300 text-[17px] font-light">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Contact Section */}
      <ContactSec />
    </>
  );
};

export default Hero;
