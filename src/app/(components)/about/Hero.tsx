import Image from "next/image"
import AboutHero from '../../../../public/about/abouthero.png';
import HelmetMan from '../../../../public/about/helmetman.svg';
import RightArrow from "../../assets/about/arrow_right.svg"
import Bridge from "../../../../public/about/bridge.svg"

import { aboutCards } from "@/app/utils/constant";
import ContactSec from "./ContactSec";

const Hero = () => {
  return (
    <>
      {/* about hero */}
      <div className="cont w-full about-hero-bg">
        <Image src={AboutHero} height={1500} width={1500} alt="about-bg" />
        <h1 className="absolute text-white text-[20px] md:text-[40px] lg:text-[72px]  font-semibold montserrat-600 w-3/5 md:w-1/2  lg:leading-20 top-30 md:top-35 lg:top-35 left-5 lg:left-30">Precision Design. Enduring Architecture. Inspired Living.</h1>
      </div>

      <div>
        <div className="md:w-[1175px] md:h-[620.23px] w-screen m-auto my-20 flex flex-col md:flex-row md:gap-x-5 lg:gap-x-40">
          <div className="left w-full md:w-1/4 lg:w-1/3">
            <Image src={HelmetMan} height={620} width={400} alt="about-bg" />
          </div>
          <div className="right text-center md:text-left mt-5 text-[var(--green-color)]  flex-1 lg:w-[653px]">
            <h4 className="kanit-400 text-[14px] font-medium">ABOUT EARTHAM</h4>
            <h1 className=" text-[40px] lg:text-[55px] w-full md:w-1/2 lg:w-full kanit-600 font-semibold leading-15">We 're providing the best customer service</h1>
            <div className="bg-[var(--grey-color)] lato-400 text-[17px] m-auto md:mx-0 w-full md:w-1/2 lg:h-[242px] lg:w-full p-8 my-5">
              <p>For over 25 years, Earthaam has remained committed to designing spaces that transcend mere functionality. Each creation is meticulously planned and crafted to harmonize with its surroundings, seamlessly blending into the urban fabric while standing out as an architectural masterpiece.
              </p>
              <p className="text-[25px] my-8"><strong>Jone DOe</strong>, CEO</p>
            </div>
            <button className="bg-[var(--green-color)] m-auto md:mx-0 px-10 py-3 mt-14 text-[25px] text-white flex items-center justify-between gap-x-2 rounded-[50px]">
              Learn more
              <Image src={RightArrow} height={20} width={20} alt="about-bg" />
            </button>
          </div>
        </div>
      </div>
      {/* Bridge Image */}
      <div className="mt-10">
        <Image src={Bridge} height={1500} width={1500} alt="about-bg" />
        <div className="relative bottom-50 md:bottom-100 lg:bottom-130 text-white m-auto text-center">
          <h1 className="text-[30px] lg:text-[55px] font-semibold montserrat-600">Build Your Future Today</h1>
          <h3 className="text-[10px] lg:text-[17px] montserrat-400  w-4/5 m-auto mt-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, necessitatibus. Ipsam quos quod cumque distinctio vel nisi, unde quo reprehenderit.</h3>
        </div>
      </div>
      <div className="w-11/12 lg:w-4/5 relative bottom-20 md:bottom-55 m-auto flex flex-col md:flex-row i justify-center space-y-5 md:space-x-5 lg:space-x-8">
        {
          aboutCards.map((item: object) => (
            <div key={item.id} className="card w-4/5 lg:w-[381px] lg:h-[131px] shadow-lg p-3 bg-white flex justify-between items-center space-x-5">
              <div className="bg-[var(--green-color)] font-bold text-[40px] kanit-700 text-white p-5">
                {item.id}
              </div>
              <div className="">
                <h1 className="text-[var(--blue-color)] montserrat-700  font-bold text-[20px]">{item.name}</h1>
                <p className="montserrat-300 text-[17px] font-light">{item.desc}</p>
              </div>
            </div>
          ))
        }
      </div>
      <ContactSec />
    </>
  )
}

export default Hero