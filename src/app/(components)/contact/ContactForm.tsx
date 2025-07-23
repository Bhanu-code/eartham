import React from 'react'
import { FAQs } from './FAQs'

const ContactForm = () => {
    return (
        <>
            <div className="w-full  py-20 bg-[#F7F7F7]">
                <div className="w-11/12 flex m-auto gap-x-10">
                    <div className="left flex flex-col gap-5 w-1/2">
                        <h1 className='text-[40px] montserrat-700 font-bold  text-[var(--green-color)]'>Get in Touch</h1>
                        <hr className='text-[var(--green-color)] w-10 border-2' />
                        <input type="text" name='name' placeholder='Name' className='bg-white text-[#666666] p-3' />
                        <input type="email" name='email' placeholder='Email' className='bg-white text-[#666666] p-3' />
                        <textarea name="message" className='bg-white p-5 text-[#666666] h-40' placeholder='Message' id="" />
                    </div>
                    <div className="right flex-1">
                        <FAQs/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ContactForm