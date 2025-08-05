'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Hero from '@/app/(components)/contact/Hero'
import ContactForm from '@/app/(components)/contact/ContactForm'

const Page = () => {
  return (
    <>
      {/* Hero section with animation */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Hero />
      </motion.div>

      {/* Call text section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        <div className="wrap text-center m-auto py-20 w-screen md:w-1/2 space-y-3">
          <h1 className="text-[35px] md:text-[40px] montserrat-700 text-[var(--green-color)] font-bold">
            Call: (541) 931-3526
          </h1>
          <p className="text-[var(--green-color)] montserrat-500 font-medium text-[22px] md:text-[28px]">
            We Can&apos;t Wait to Make Your Ideas a Reality
          </p>
        </div>
      </motion.div>

      {/* ContactForm already has motion */}
      <ContactForm />
    </>
  )
}

export default Page
