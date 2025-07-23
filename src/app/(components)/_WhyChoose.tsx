import React from 'react'
import WhyChooseCard from './WhyChooseCard'
import Building from '../assets/whychoose/building.png'
import Image from 'next/image'
import { whychooseus } from '../utils/constant'


const _WhyChoose = () => {
  return (
    <>
      <div className="grid grid-cols-4  grid-rows-2 mt-30 bg-[var(--green-color)] h-[767px]">
        <div className="col-span-1">
          <WhyChooseCard data={whychooseus[0]}  />
        </div>
        <div className="col-span-1 row-span-2  ">
          <Image src={Building} width={1500} height={1500} alt="builidng" />
        </div>
        <div className='text-[var(--green-color)] h-[384px] montserrat-400 text-[60px] flex flex-col  items-end pr-10 pt-5 col-span-2 text-right bg-white mb-5'>
          <p className=''>WHY</p>
          <p className=''>CHOOSE</p>
          <p className=''>US?</p>
          {/* <p className='w-1/2 text-[18px] py-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, expedita deserunt error ipsam</p> */}
        </div>
        <div className="col-span-1 row-span-1">
          <WhyChooseCard  data={whychooseus[1]}  />
        </div>
        <div className="col-span-1 row-span-1">
          <WhyChooseCard  data={whychooseus[2]}  />
        </div>
        <div className="col-span-1 row-span-1">
          <WhyChooseCard data={whychooseus[3]} />
        </div>
        
      </div>

    </>
  )
}

export default _WhyChoose
