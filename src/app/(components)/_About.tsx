import Image from 'next/image'
import React from 'react'
import Slide2 from "../../../public/hero_home_icons/slide2.png"


const _About = () => {
  return (
    <>
    <div className="w-full text-center">
      <h1 className='text-[35px] text-[var(--green-color)] mt-20 mb-10 montserrat-700 font-bold'>About Eartham</h1>
      <div className="image-slider m-auto flex">
        <Image className='border rounded-2xl ' src={Slide2} height={650} width={650} alt='slide'  />
        <Image className='border rounded-2xl ' src={Slide2} height={650} width={650} alt='slide'  />
        <Image className='border rounded-2xl' src={Slide2} height={650} width={650} alt='slide'  />
      </div>
    </div>
    </>
  )
}

export default _About
