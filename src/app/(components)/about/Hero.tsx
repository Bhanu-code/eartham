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
        <h1 className="absolute text-[72px] font-semibold montserrat-600 w-1/2 text-white leading-20 top-35 left-30">Precision Design. Enduring Architecture. Inspired Living.</h1>
      </div>

      <div >
        <div className="w-[1175px] h-[620.23px] m-auto my-20 flex  gap-x-40">
          <div className="left w-1/3">
            <Image src={HelmetMan} height={620} width={400} alt="about-bg" />
          </div>
          <div className="right mt-5 text-[var(--green-color)] w-[653px]">
            <h4 className="kanit-400 text-[14px] font-medium">ABOUT EARTHAM</h4>
            <h1 className="text-[55px] kanit-600 font-semibold leading-15">We 're providing the best customer service</h1>
            <div className="bg-[var(--grey-color)] lato-400 text-[17px] h-[242px] p-8 my-5">
              <p>For over 25 years, Earthaam has remained committed to designing spaces that transcend mere functionality. Each creation is meticulously planned and crafted to harmonize with its surroundings, seamlessly blending into the urban fabric while standing out as an architectural masterpiece.
              </p>
              <p className="text-[25px] my-8"><strong>Jone DOe</strong>, CEO</p>
            </div>
            <button className="bg-[var(--green-color)] px-10 py-3 mt-14 text-[25px] text-white flex items-center justify-between gap-x-2 rounded-[50px]">
              Learn more
              <Image src={RightArrow} height={20} width={20} alt="about-bg" />
            </button>
          </div>
        </div>
      </div>
      {/* Bridge Image */}
      <div className="">
        <Image src={Bridge} height={1500} width={1500} alt="about-bg" />
        <div className="relative bottom-130 text-white m-auto text-center">
          <h1 className="text-[55px] font-semibold montserrat-600">Build Your Future Today</h1>
          <h3 className="text-[17px] montserrat-400  w-4/5 m-auto mt-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, necessitatibus. Ipsam quos quod cumque distinctio vel nisi, unde quo reprehenderit.</h3>
        </div>
      </div>
      <div className="w-4/5  relative bottom-55 m-auto flex items-center justify-center space-x-8">
        {
          aboutCards.map((item: object) => (
            <div key={item.id} className="card  w-[381px] h-[131px] shadow-lg p-3 bg-white flex justify-between items-center space-x-5">
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