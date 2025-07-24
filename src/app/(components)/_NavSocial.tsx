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
        <div className="w-full bg-[#F0F0F0] px-3 sm:px-4 md:px-5 py-1 sm:py-1.5 md:py-2">
            {/* Desktop & Tablet Layout */}
            <div className="hidden md:flex justify-between items-center">
                {/* Left - Contact Info */}
                <div className="left flex flex-wrap space-x-3 lg:space-x-5 text-xs sm:text-sm">
                    <div className='flex space-x-1 items-center hover:text-gray-700 transition-colors duration-200'>
                        <Image src={CallIcon} height={15} width={15} alt='call icon' />
                        <span>+91 7319345359</span>
                    </div>
                    <div className='flex space-x-1 items-center hover:text-gray-700 transition-colors duration-200'>
                        <Image src={LocationIcon} height={15} width={15} alt='location icon' />
                        <span>Sindhuban, Ahmedabad</span>
                    </div>
                    <div className='flex space-x-1 items-center hover:text-gray-700 transition-colors duration-200'>
                        <Image src={MailIcon} height={15} width={15} alt='mail icon' />
                        <span>info@gmail.com</span>
                    </div>
                </div>
                
                {/* Right - Social Icons */}
                <div className="right flex space-x-2 lg:space-x-3 items-center">
                    <a href="#" className="hover:scale-110 transition-transform duration-200">
                        <Image src={Insta} height={20} width={20} alt='instagram icon' />
                    </a>
                    <a href="#" className="hover:scale-110 transition-transform duration-200">
                        <Image src={Fb} height={20} width={20} alt='facebook icon' />
                    </a>
                    <a href="#" className="hover:scale-110 transition-transform duration-200">
                        <Image src={Wp} height={20} width={20} alt='whatsapp icon' />
                    </a>
                </div>
            </div>

            {/* Mobile & Small Tablet Layout */}
            <div className="md:hidden">
                {/* Two Row Layout for Mobile */}
                <div className="flex flex-col space-y-2">
                    {/* First Row - Phone and Social */}
                    <div className="flex justify-between items-center">
                        <div className='flex space-x-1 items-center text-xs hover:text-gray-700 transition-colors duration-200'>
                            <Image src={CallIcon} height={14} width={14} alt='call icon' />
                            <span>+91 7319345359</span>
                        </div>
                        <div className="flex space-x-2 items-center">
                            <a href="#" className="hover:scale-110 transition-transform duration-200">
                                <Image src={Insta} height={18} width={18} alt='instagram icon' />
                            </a>
                            <a href="#" className="hover:scale-110 transition-transform duration-200">
                                <Image src={Fb} height={18} width={18} alt='facebook icon' />
                            </a>
                            <a href="#" className="hover:scale-110 transition-transform duration-200">
                                <Image src={Wp} height={18} width={18} alt='whatsapp icon' />
                            </a>
                        </div>
                    </div>
                    
                    {/* Second Row - Location and Email */}
                    <div className="flex justify-between items-center text-xs">
                        <div className='flex space-x-1 items-center hover:text-gray-700 transition-colors duration-200'>
                            <Image src={LocationIcon} height={14} width={14} alt='location icon' />
                            <span className="truncate max-w-[120px] sm:max-w-none">Sindhuban, Ahmedabad</span>
                        </div>
                        <div className='flex space-x-1 items-center hover:text-gray-700 transition-colors duration-200'>
                            <Image src={MailIcon} height={14} width={14} alt='mail icon' />
                            <span className="truncate max-w-[100px] sm:max-w-none">info@gmail.com</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Alternative Single Row Mobile Layout (Hidden by default - uncomment if preferred) */}
            {/* 
            <div className="md:hidden flex justify-between items-center">
                <div className="flex space-x-2 text-xs">
                    <div className='flex space-x-1 items-center'>
                        <Image src={CallIcon} height={14} width={14} alt='call icon' />
                        <span className="hidden sm:inline">+91 7319345359</span>
                        <span className="sm:hidden">Call</span>
                    </div>
                    <div className='flex space-x-1 items-center'>
                        <Image src={LocationIcon} height={14} width={14} alt='location icon' />
                        <span className="hidden sm:inline">Sindhuban, Ahmedabad</span>
                        <span className="sm:hidden">Location</span>
                    </div>
                </div>
                <div className="flex space-x-2 items-center">
                    <Image src={Insta} height={18} width={18} alt='instagram icon' />
                    <Image src={Fb} height={18} width={18} alt='facebook icon' />
                    <Image src={Wp} height={18} width={18} alt='whatsapp icon' />
                </div>
            </div>
            */}
        </div>
    )
}

export default _NavSocial