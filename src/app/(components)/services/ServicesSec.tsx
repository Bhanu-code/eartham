import Image from 'next/image'
import React from 'react'

import Icon1 from "../../assets/services/icon.svg"
import Icon2 from "../../assets/services/icon (1).svg"
import Icon3 from "../../assets/services/icon (2).svg"
import Icon4 from "../../assets/services/icon (3).svg"
import Icon5 from "../../assets/services/icon (4).svg"
import Icon6 from "../../assets/services/icon (5).svg"

const ServicesSec = () => {
    return (
        <>
            <div className="w-full py-20 ">
                <div className="wrapper w-4/5 m-auto ">
                    <h1 className='text-center montserrat-700 font-bold text-[#292E3D] text-[36px] '>Services</h1>
                    <div className="grid text-[var(--green-color)] grid-cols-3 gap-y-10 m-auto my-10 items-center justify-center">
                        {/* item1 */}
                        <div className="item  shadow-lg bg-white w-[271px] h-[181px] flex flex-col items-center justify-center">
                            <Image src={Icon1} width={50} height={50} alt='icon' />
                            <hr className='w-[2rem] my-4 m-auto text-[#E0E3EB]' />
                            <h2 className='montserrat-600 font-semibold text-[20px]'>Construction</h2>
                        </div>
                        {/* item1 */}
                        <div className="item  shadow-lg bg-[#DDC258] text-white w-[271px] h-[181px] flex flex-col items-center justify-center">
                            <Image src={Icon2} width={50} height={50} alt='icon' />
                            <hr className='w-[2rem] my-4 m-auto' />
                            <h2 className='montserrat-600 font-semibold text-[20px]'>Renovation</h2>
                        </div>
                        {/* item1 */}
                        <div className="item  shadow-lg bg-white w-[271px] h-[181px] flex flex-col items-center justify-center">
                            <Image src={Icon3} width={50} height={50} alt='icon' />
                            <hr className='w-[2rem] my-4 m-auto' />
                            <h2 className='montserrat-600 font-semibold text-[20px]'>Consultation</h2>
                        </div>
                        {/* item1 */}
                        <div className="item bg-[var(--green-color)] shadow-lg text-white w-[271px] h-[181px] flex flex-col items-center justify-center">
                            <Image src={Icon4} width={50} height={50} alt='icon' />
                            <hr className='w-[2rem] my-4 m-auto' />
                            <h2 className='montserrat-600 font-semibold text-[20px]'>Architecture</h2>
                        </div>
                        {/* item1 */}
                        <div className="item  shadow-lg bg-white w-[271px] h-[181px] flex flex-col items-center justify-center">
                            <Image src={Icon5} width={50} height={50} alt='icon' />
                            <hr className='w-[2rem] my-4 m-auto' />
                            <h2 className='montserrat-600 font-semibold text-[20px]'>Turnkey Solutions</h2>
                        </div>
                        {/* item1 */}
                        <div className="item  shadow-lg bg-[var(--green-color)] text-white w-[271px] h-[181px] flex flex-col items-center justify-center">
                            <Image src={Icon6} width={50} height={50} alt='icon' />
                            <hr className='w-[2rem] my-4 m-auto' />
                            <h2 className='montserrat-600 font-semibold text-[20px]'>Electric</h2>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default ServicesSec