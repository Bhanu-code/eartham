import Image from 'next/image'
import React from 'react'

import Bg from "../../assets/services/bg.png"
import Play from "../../assets/services/play-circle.svg"
import ImageIcon from "../../assets/services/image.svg"
import Stars from "../../assets/services/stars.svg"
import Line from "../../assets/services/Line 6.svg"

const Hero = () => {
    return (
        <>
            <div className="w-full">
                <Image src={Bg} width={1400} height={1400} alt='bg' />
                <div className="w-11/12 m-auto absolute top-30 left-2 md:top-35 md:left-5 lg:top-40 lg:left-15 flex">
                    <div className='flex m-auto'>
                        <div className="left w-full lg:w-1/2  flex flex-col items-left space-y-1 text-[var(--green-color)]">
                            <div className='leading-5 md:leading-10 lg:leading-15'>
                                <h1 className=' text-[20px] md:text-[30px] lg:text-[55px] montserrat-600 font-semibold'>Diversified Services</h1>
                                <h1 className=' text-[20px] md:text-[30px] lg:text-[55px] montserrat-600 font-semibold'>Unavrying Quality</h1>
                            </div>
                            <p className='text-[10px] md:text-[15px] lg:text-[22px] montserrat-400 text-light line-[34px] text-[#7591A3] w-4/5'>We designed 100+ commercial & residential projects in UAS & across the globe. Providing Design & 3D Support to Architectural Firms Globally. Award-Winning Company. <strong>17+ Years </strong> Of Experience.</p>
                            <div className="actions mt-1 md:mt-8 lg:mt-10  flex items-center gap-5 justify-start w-4/5">
                                <button className='px-1 py-1  lg:px-10 lg:py-2 text-[5px] md:text-[10px] lg:text-[14px] border lg:border-2 border-[var(--green-color)] rounded-[50px]'>
                                    See Our Work
                                </button>
                                <div className='space-x-2'>
                                    <Image className='inline w-[20px] md:w-[25px] lg:w-[40px]' src={Play} width={40} height={40} alt='play' />
                                    <Image className='inline w-[50px] md:w-[70px] lg:w-[100px]' src={Line} width={100} height={100} alt='line' />
                                    <span className='text-[10px] md:text-[16px] lg:text-[20px]'>Explore</span>
                                </div>
                            </div>
                        </div>
                        <div className="right w-1/2 hidden md:flex flex-col justify-between">
                            {/* card   */}
                            <div className="bg-white  flex items-center justify-start gap-3 p-3 w-1/3">
                                <Image className='inline' src={ImageIcon} width={50} height={50} alt='play' />
                                <div className='flex flex-col'>
                                    <span>Daniel Chester</span>
                                    <Image className='inline' src={Stars} width={60} height={60} alt='play' />
                                </div>
                            </div>
                            {/* card   */}
                            <div className="bg-white  flex items-center justify-end ml-auto gap-3 p-3 w-1/3">
                                <Image className='inline' src={ImageIcon} width={50} height={50} alt='play' />
                                <div className='flex flex-col'>
                                    <span>Daniel Chester</span>
                                    <Image className='inline' src={Stars} width={60} height={60} alt='play' />
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Hero