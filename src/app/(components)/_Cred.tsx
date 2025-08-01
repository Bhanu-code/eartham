import React from 'react'
import { creds, tabs } from "../utils/constant"
import Right from "../assets/cred_section_icons/right.svg"
import Image from 'next/image'

const _Cred = () => {
  return (
    <div className="w-full py-6 sm:py-8 md:py-10 my-10 sm:my-15 md:my-20">
      {/* Credentials Section */}
      <div className="w-[90%] sm:w-4/5 flex flex-col sm:flex-row m-auto items-center justify-between text-center gap-6 sm:gap-4 md:gap-8">
        {
          creds.map((cred, index) => (
            <div key={index} className='text-[var(--green-color)] flex-1'>
              <h2 className='montserrat-600 font-semibold text-xl sm:text-2xl md:text-[28px] leading-tight'>
                {cred?.value}
              </h2>
              <span className='montserrat-500 font-extralight text-base sm:text-lg md:text-[20px] block mt-1 sm:mt-2'>
                {cred?.desc}
              </span>
            </div>
          ))
        }
      </div>

      {/* Tabs Section */}
      <div className=" w-11/12  text-[var(--green-color)] my-10 sm:my-15 md:my-20 m-auto">
        {/* Desktop/Tablet Layout */}
        <div className="hidden   sm:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 items-center justify-between md:gap-10 lg:gap-x-5  text-center">
          {
            tabs.map((item, index) => (
              <button 
                key={index} 
                className='border-2 border-[var(--green-color)] montserrat-500 rounded-full px-2 md:px-3 py-2 flex items-center space-x-1 md:space-x-2 hover:bg-[var(--green-color)] hover:text-white transition-colors duration-300 flex-1 justify-center min-w-0'
              >
                <Image 
                  src={Right} 
                  height={24} 
                  width={24} 
                  className="md:h-9 md:w-9 flex-shrink-0" 
                  alt="right icon" 
                />
                <p className='text-left font-medium text-sm md:text-[18px]'>
                  {item.name}
                </p>
              </button>
            ))
          }
        </div>

        {/* Mobile Layout */}
        <div className="sm:hidden grid grid-cols-1 gap-4">
          {
            tabs.map((item, index) => (
              <button 
                key={index} 
                className='border-2 border-[var(--green-color)] montserrat-500 rounded-full px-4 py-3 flex items-center space-x-3 hover:bg-[var(--green-color)] hover:text-white transition-colors duration-300 w-full justify-center'
              >
                <Image 
                  src={Right} 
                  height={28} 
                  width={28} 
                  alt="right icon" 
                />
                <p className='font-medium text-base'>
                  {item.name}
                </p>
              </button>
            ))
          }
        </div>

        {/* Alternative Mobile Layout - 2 columns for more items */}
        {/* Uncomment this if you prefer 2-column layout on mobile */}
        {/*
        <div className="sm:hidden grid grid-cols-2 gap-3">
          {
            tabs.map((item, index) => (
              <button 
                key={index} 
                className='border-2 border-[var(--green-color)] montserrat-500 rounded-full px-3 py-2 flex items-center space-x-2 hover:bg-[var(--green-color)] hover:text-white transition-colors duration-300 justify-center'
              >
                <Image 
                  src={Right} 
                  height={20} 
                  width={20} 
                  alt="right icon" 
                />
                <p className='font-medium text-sm truncate'>
                  {item.name}
                </p>
              </button>
            ))
          }
        </div>
        */}
      </div>
    </div>
  )
}

export default _Cred;