import React from 'react'
import Trade from '../assets/trade.png'

const Signup = () => {
  return (
    <div className='signup'>
      <div className='container m-auto grid sm:grid-cols-2 grid-cols-1 justify-center items-center py-12 px-4'>
            <div className='left text-center flex justify-center'>
                <img className='w-80 hover:sm:scale-125 hover:scale-110 duration-500 ease-in-out' src={Trade} alt='/' />
            </div>
            <div className='right sm:pr-12 px-8 sm:px-0'>
                <h2 className='sm:text-4xl text-2xl font-semibold sm:font-bold'>Earn Passive Income with Crypto</h2>
                <p className='text-md sm:my-6 my-4'>
                    Earn up to 12% annual rewards on 38+ digital assets. Simply field your assets in the app to automatically earn rewards at the end od each month with no lockups and no limits
                </p>
                <div className='input-container space-y-4'>
                    <input className='
                        py-3 
                        px-8 
                        w-full
                        sm:w-1/3
                        border-2 
                        rounded-br-2xl 
                        sm:rounded-br-3xl 
                        rounded-tl-2xl 
                        sm:rounded-tl-3xl 
                        rounded-tr-sm 
                        rounded-bl-sm 
                        border-primaryColor 
                        bg-transparent 
                        text-md mr-3.5' 
                        type='email' 
                        placeholder='
                        Enter your email'
                    />
                    <button className='btn
                        bg-primaryColor 
                        w-full
                        md:w-1/3
                        mb-0 
                        cursor-pointer 
                        px-3.5
                        py-3.5
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
                        duration-300
                    '>
                        Learn More
                    </button>
                </div>
            </div>
      </div>
    </div>
  )
}

export default Signup
