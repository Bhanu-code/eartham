import ContactForm from '@/app/(components)/contact/ContactForm'
import Hero from '@/app/(components)/contact/Hero'
import React from 'react'

const page = () => {
  return (
    <>
      <Hero />
      <div>
        <div className="wrap text-center m-auto py-20 w-1/2 space-y-3">
          <h1 className='text-[40px] montserrat-700 text-[var(--green-color)] font-bold'>Call: (541) 931-3526</h1>
          <p className='text-[var(--green-color)] montserrat-500 font-medium text-[28px]'>We Can’t Wait to Make Your Ideas a Reality</p>
        </div>
      </div>
        <ContactForm/>
    </>
  )
}

export default page
