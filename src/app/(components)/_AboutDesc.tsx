"use client"

import { motion } from "framer-motion"

const _AboutDesc = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
      className="w-[90%] sm:w-4/5 mt-10 sm:mt-15 md:mt-20 px-4 sm:px-6 md:px-8 text-sm sm:text-base md:text-lg lg:text-[18px] text-[#010101] montserrat-500 font-medium mb-10 sm:mb-12 md:mb-14 m-auto text-center space-y-4 sm:space-y-5"
    >
      <p className="leading-relaxed sm:leading-relaxed md:leading-loose max-w-4xl mx-auto">
        At the heart of Ahmedabad&apos;s skyline, Earthaam Infracon stands as a symbol of{' '}
        <strong>luxury, innovation, and architectural excellence</strong>. Established in 1995, 
        Earthaam was founded with a vision to redefine the real estate landscape—not just by 
        constructing buildings but by creating enduring landmarks that leave a legacy for 
        generations to come.
      </p>

      <motion.button
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.96 }}
        transition={{ type: "spring", stiffness: 300 }}
        className="px-4 sm:px-6 md:px-8 border-2 sm:border-[3px] rounded-[25px] sm:rounded-[35px] md:rounded-[50px] w-full sm:w-[220px] md:w-[259px] h-[45px] sm:h-[50px] md:h-[60px] border-[var(--green-color)] py-1 mt-6 sm:mt-8 md:mt-10 montserrat-600 font-semibold text-base sm:text-lg md:text-[20px] text-[var(--green-color)] hover:bg-[var(--green-color)] hover:text-white transition-colors duration-300 active:scale-95 transform"
      >
        Explore More
      </motion.button>
    </motion.div>
  )
}

export default _AboutDesc
