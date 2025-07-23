import React from 'react'
import Image from "next/image"

import Logo from "../assets/navbar_icons/logo.svg";

function WhyChooseCard({icon, data}: any) {
 
    return (
        <>
            <div className="w-[295px] h-[383px]">
                <div className='w-[255px] p-5 h-[345px] m-auto mt-7 text-white text-left space-y-3 border border-[var(--yellow-color)]'>
                    <Image src={Logo} width={62} height={62} alt="Logo" />
                    <h1 className='montserrat-600 text-[18px] font-semibold'>{data?.name}</h1>
                    <p className='montserrat-400 text-[16px] '>{data?.desc}</p>
                </div>
            </div>
        </>
    )
}

export default WhyChooseCard
