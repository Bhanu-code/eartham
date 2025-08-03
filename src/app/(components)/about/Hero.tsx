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
    <div className="overflow-hidden">
      {/* About Hero Section */}
      <div className="w-full relative">
        <Image src={AboutHero} height={1500} width={1500} alt="about background" className="w-full" />
        <h1 className="absolute text-white text-lg md:text-4xl lg:text-7xl font-semibold montserrat-600 w-3/5 md:w-1/2 md:leading-[3rem] lg:leading-[5rem] top-5 md:top-5 lg:top-10 left-5 lg:left-20 z-10">
          Precision Design. Enduring Architecture. Inspired Living.
        </h1>
      </div>

      {/* Company Overview Section */}
      <div className="w-full bg-white py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-[var(--green-color)] kanit-400 text-[14px] font-medium mb-4">ABOUT EARTHAAM</h2>
            <h3 className="text-3xl md:text-5xl font-bold text-[var(--blue-color)] montserrat-700 mb-6">
              Crafting Landmarks. Shaping Legacy.
            </h3>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg lato-400 leading-relaxed">
                At the heart of Ahmedabad's skyline, <strong>Earthaam Infracon</strong> stands as a symbol of 
                <strong> luxury, innovation, and architectural excellence</strong>. Established in 1995, Earthaam was 
                founded with a vision to redefine the real estate landscape—not just by constructing buildings but by 
                creating enduring landmarks that leave a legacy for generations to come.
              </p>
              
              <p className="text-lg lato-400 leading-relaxed">
                From <strong>premium residential projects</strong> to <strong>iconic commercial developments</strong> and 
                <strong> world-class hospitality spaces</strong>, Earthaam has built a portfolio that reflects innovation, 
                trust, and timeless design.
              </p>
            </div>
            
            <div className="bg-[var(--grey-color)] p-8 rounded-lg">
              <h4 className="text-2xl font-bold text-[var(--green-color)] montserrat-600 mb-4">Our Vision</h4>
              <p className="text-lg lato-400 leading-relaxed">
                Our upcoming 5-star luxury hotel on Sindhu Bhavan Road is a testament to this commitment—a development 
                designed to set new benchmarks in hospitality and urban living.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* About Info Section (Original) */}
      <div className="md:w-[1175px] w-full m-auto my-20 flex flex-col md:flex-row md:gap-x-5 lg:gap-x-40 px-4">
        <div className="w-full md:w-1/3">
          <Image src={HelmetMan} height={620} width={400} alt="helmet man" />
        </div>
        <div className="text-center md:text-left mt-5 text-[var(--green-color)] flex-1">
          <h4 className="kanit-400 text-[14px] font-medium">ABOUT EARTHAM</h4>
          <h1 className="text-[20px] md:text-[30px] lg:text-[55px] md:w-1/3 lg:w-full kanit-600 font-semibold lg:leading-[3.5rem]">
            We&apos;re providing the best customer service
          </h1>
          <div className="bg-[var(--grey-color)] lato-400 text-[17px] md:w-[320px] lg:w-full p-6 my-5">
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

      {/* Why Choose Earthaam Section */}
      <div className="w-full bg-[var(--grey-color)] py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold text-[var(--blue-color)] montserrat-700 mb-6">
              Why Choose Earthaam?
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <div className="bg-[var(--green-color)] text-white text-2xl font-bold kanit-700 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                25+
              </div>
              <h3 className="text-xl font-bold text-[var(--blue-color)] montserrat-600 mb-3">
                Over Two Decades of Proven Expertise
              </h3>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <div className="bg-[var(--green-color)] text-white text-2xl font-bold kanit-700 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                ∞
              </div>
              <h3 className="text-xl font-bold text-[var(--blue-color)] montserrat-600 mb-3">
                End-to-End Real Estate Solutions
              </h3>
              <p className="text-sm lato-400">from blueprint to benchmark</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <div className="bg-[var(--green-color)] text-white text-2xl font-bold kanit-700 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                ★
              </div>
              <h3 className="text-xl font-bold text-[var(--blue-color)] montserrat-600 mb-3">
                Premium Quality With Every Project
              </h3>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <div className="bg-[var(--green-color)] text-white text-2xl font-bold kanit-700 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                📍
              </div>
              <h3 className="text-xl font-bold text-[var(--blue-color)] montserrat-600 mb-3">
                Strategic Locations in Ahmedabad and Beyond
              </h3>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <div className="bg-[var(--green-color)] text-white text-2xl font-bold kanit-700 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                🌱
              </div>
              <h3 className="text-xl font-bold text-[var(--blue-color)] montserrat-600 mb-3">
                Luxury Meets Sustainability
              </h3>
            </div>
          </div>
        </div>
      </div>

      {/* What Makes Us Different Section */}
      <div className="w-full bg-white py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold text-[var(--blue-color)] montserrat-700 mb-6">
              What Makes Us Different?
            </h2>
            <p className="text-xl italic text-[var(--green-color)] montserrat-400">
              We don't just build; we inspire.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="bg-[var(--green-color)] text-white p-3 rounded-full flex-shrink-0">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[var(--blue-color)] montserrat-600 mb-2">
                    Innovative Design Thinking
                  </h3>
                  <p className="lato-400 leading-relaxed">
                    Our architects and designers leverage modern technologies and global trends to create future-ready spaces.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-[var(--green-color)] text-white p-3 rounded-full flex-shrink-0">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[var(--blue-color)] montserrat-600 mb-2">
                    Uncompromising Quality
                  </h3>
                  <p className="lato-400 leading-relaxed">
                    Every project adheres to the highest standards of craftsmanship and materials.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="bg-[var(--green-color)] text-white p-3 rounded-full flex-shrink-0">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[var(--blue-color)] montserrat-600 mb-2">
                    Client-Centric Approach
                  </h3>
                  <p className="lato-400 leading-relaxed">
                    Building strong relationships and delivering beyond expectations remain at the core of our operations.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-[var(--green-color)] text-white p-3 rounded-full flex-shrink-0">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[var(--blue-color)] montserrat-600 mb-2">
                    Sustainable Practices
                  </h3>
                  <p className="lato-400 leading-relaxed">
                    We integrate eco-conscious solutions, ensuring our developments enrich both communities and the environment.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <p className="text-lg lato-400 max-w-4xl mx-auto">
              This approach has made us one of the <strong>most trusted real estate developers in Ahmedabad</strong>, 
              preferred by property buyers seeking luxury and long-term value.
            </p>
          </div>
        </div>
      </div>

      {/* Bridge Section */}
      <div className="relative">
        <Image src={Bridge} height={1500} width={1500} alt="bridge background" className="w-full" />
        <div className="absolute top-0 w-full h-full flex flex-col justify-center items-center text-white text-center px-6">
          <h1 className="text-[30px] lg:text-[55px] font-semibold montserrat-600">Build Your Future Today</h1>
          <h3 className="text-[12px] lg:text-[17px] montserrat-400 w-4/5 mt-4">
            Building Futures, Not Just Structures - We believe that real estate is more than concrete and steel. 
            It's about creating spaces where memories are made, businesses grow, and communities flourish.
          </h3>
        </div>
      </div>

      {/* Cards Section */}
      <div className="w-11/12 lg:w-4/5 relative top-10 mb-20 md:mb-1 md:-top-22 lg:-top-15 m-auto flex flex-col md:flex-row justify-center space-y-5 md:space-y-0 md:space-x-5 lg:space-x-8">
        {aboutCards.map((item: AboutCard) => (
          <div
            key={item.id}
            className="w-full md:w-1/3 lg:w-[381px] shadow-lg p-4 bg-white flex items-center space-x-4"
          >
            <div className="bg-[var(--green-color)] font-bold text-[40px] kanit-700 text-white p-5 min-w-[80px] text-center">
              {item.id}
            </div>
            <div>
              <h1 className="text-[var(--blue-color)] montserrat-700 font-bold text-[20px]">{item.name}</h1>
              <p className="montserrat-300 text-[17px] font-light">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Legacy & Future Section */}
      <div className="w-full bg-[var(--green-color)] text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold montserrat-700 mb-6">
            Building Futures, Not Just Structures
          </h2>
          <p className="text-lg lato-400 leading-relaxed mb-8">
            Our developments are designed to <strong>enrich lives and stand as a testament to enduring value</strong>. 
            As we move forward, our focus remains on expanding our legacy across India and setting new standards 
            in luxury real estate and hospitality.
          </p>
          <button className="bg-white text-[var(--green-color)] px-10 py-3 text-[20px] font-semibold flex items-center gap-x-2 rounded-full mx-auto hover:bg-gray-100 transition-colors">
            Explore Our Projects
            <Image src={RightArrow} height={20} width={20} alt="arrow right" className="filter brightness-0" />
          </button>
        </div>
      </div>

      {/* Contact Section */}
      <ContactSec />
    </div>
  );
};

export default Hero;