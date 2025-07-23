import Image from 'next/image'
import React from 'react'

import CallIcon from "../assets/call.svg"
import LocationIcon from "../assets/location.svg"
import MailIcon from "../assets/mail.svg"
import Insta from "../assets/inst.svg"
import Fb from "../assets/fb.svg"
import Wp from '../assets/whatsapp.svg'

const _NavSocial = () => {
    return (
        <>
            <div className="w-full bg-[#F0F0F0] px-5 py-1 flex justify-between">
                {/* left */}
                <div className="left flex space-x-5">
                    <div className='flex space-x-1 items-center'>
                        <Image src={CallIcon} height={15} width={15} alt='call icon' />
                        <span>+91 7319345359</span>
                    </div>
                    <div className='flex space-x-1 items-center'>
                        <Image src={LocationIcon} height={15} width={15} alt='location icon' />
                        <span>Sindhuban, Ahmedabad</span>
                    </div>
                    <div className='flex space-x-1 items-center'>
                        <Image src={MailIcon} height={15} width={15} alt='mail icon' />
                        <span>info@gmail.com</span>
                    </div>
                </div>
                {/* right */}
                <div className="right flex space-x-3 items-center">
                    <Image src={Insta} height={20} width={20} alt='instagram icon' />
                    <Image src={Fb} height={20} width={20} alt='facbook icon' />
                    <Image src={Wp} height={20} width={20} alt='whatsapp icon' />
                </div>
            </div>
        </>
    )
}

export default _NavSocial
