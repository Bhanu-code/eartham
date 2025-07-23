import React from 'react'
import { creds, tabs } from "../utils/constant"
import Right from "../assets/cred_section_icons/right.svg"
import Image from 'next/image'

const _Cred = () => {
  return (
    <>
      <div className="w-full py-10 my-20">
        <div className="w-4/5 flex m-auto items-center justify-between text-center">
          {
            creds.map((cred: object, index: number) => (
              <div key={index} className='text-[var(--green-color)]'>
                <h2 className='montserrat-600 font-semibold text-[28px]'>{cred?.value}</h2>
                <span className='montserrat-500 font-extralight text-[20px]'>{cred?.desc}</span>
              </div>
            ))
          }
        </div>
        <div className="w-11/12 text-[var(--green-color)] my-20 flex m-auto items-center justify-between space-x-5 text-center">
          {
            tabs.map((item: object, index: number) => (
              <button key={index} className='border-2 border-[var(--green-color)] montserrat-500 rounded-full px-3 py-2 flex items-center space-x-2'>
               <Image src={Right} height={36} width={36} alt="right icon" />
               <p className='text-left font-medium text-[18px]'>{item.name}</p>
              </button>
            ))
          }
        </div>

      </div>
    </>
  )
}

export default _Cred
