import React from 'react'
import Crypto from '../assets/hero-img.png'
import { animate, motion } from 'framer-motion'

const heroVariants = {
  initial : {
    opacity: 0,
    x : -100,
  },
  animate : {
    opacity: 1,
    x : 0,
    transition : {
      delay : 1,
      duration : 1,
      staggerChildren: 0.3,
    }
  }
}

const Hero = () => {
  return (
    <div className='flex h-full sm:mt-10 mt-16 '>
      <div className='
      grid
      md:grid-cols-2
      md:m-4
      justify-center
      items-center
      
      '>
        <motion.div 
          variants={heroVariants}
          initial="initial"
          animate="animate" 
          className=' lg:px-14 lg:h-full lg:relative'>
          <motion.div className='lg:absolute lg:mr-14 lg:top-1/2 lg:-translate-y-1/2 flex-col lg:py- lg:space-y-9 md:px-0 space-y-3 sm:px-8 px-6'>
            
            <p  className=' px-3 lg:mt-2'>Buy & Sell Crypto 24/7 using your retirement account</p>
            <h1  className='
              px-3
              py-0
              text-4xl
              sm:text-2xl
              lg:text-5xl
              font-bold
            '>
              Invest in Cryptocurrency with Your IRA
            </h1>
            <p  className='px-3 '>Buy, Sell, and store hundreds of Cryptocurrencies</p>
            <div  className='lg:flex px-4 py-0 space-y-2 lg:space-x-2 lg:space-y-0'>
              <input className='
                w-full
                lg:w-2/3
                lg:h-1/2
                px-2
                py-3
                border
                border-solid
                border-primaryColor
                rounded-tr-sm
                rounded-bl-sm
                rounded-tl-3xl
                rounded-br-3xl
                text-sm
              ' type='email' placeholder='Enter your email'/>
              <button className='
              bg-primaryColor 
                    h-full
                    w-full
                    lg:w-1/3
                    lg:h-1/2
                    mb-0 
                    cursor-pointer 
                    px-3.5 
                    py-3
                    sm:text-md
                    text-sm
                    text-backgroundColor
                    rounded-br-2xl
                    sm:rounded-br-3xl
                    rounded-tl-2xl
                    sm:rounded-tl-3xl
                    rounded-tr-sm
                    rounded-bl-sm
                    font-semibold
                    hover:shadow-navShadow
                    transition
              '>
              Learn More</button>
            </div>
          </motion.div>
          
        </motion.div>
        <motion.div
          initial={{x: 100, opacity: 0}}
          animate={{x: 0, opacity : 1}}
          transition={{delay: 2, duration: 1 }}
          className='right sm:p-4 '>
          <div className='img-container w-full flex'>
            <img className='m-auto max-w-maxWidth' src={Crypto} alt=''/>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Hero