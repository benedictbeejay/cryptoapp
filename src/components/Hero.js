import React from 'react'
import Crypto from '../assets/hero-img.png'

const Hero = () => {
  return (
    <div className='flex h-full sm:mt-8 mt-4'>
      <div className='
      grid
      md:grid-cols-2
      md:m-4
      justify-center
      items-center
      p-3
      space-y-6
      '>
        <div className='lg:p-16 md:p-0 p-6 space-y-2'>
          <p className='px-3'>Buy & Sell Crypto 24/7 using your retirement account</p>
          <h1 className='
            px-3
            py-0
            text-3xl
          '>
            Invest in Cryptocurrency with Your IRA
          </h1>
          <p className='px-3'>Buy, Sell, and store hundreds of Cryptocurrencies</p>
          <div className='px-4 py-0 space-y-2'>
            <input className='
              w-full
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
                  mb-0 
                  cursor-pointer 
                  px-3.5 
                  py-3
                  sm:text-lg
                  text-xs
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
        </div>
        <div className='right p-4'>
          <div className='img-container w-full flex'>
            <img className='m-auto max-w-maxWidth' src={Crypto} alt=''/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero