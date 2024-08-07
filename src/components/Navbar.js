import React from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import { useState } from 'react'


const Navbar = () => {
  const [click, setClick] = useState(false)

  const handleClick = () => setClick(!click);
  const handleFlow = () => setClick(!click)

  const handleMenu = () => (click ? 'w-1/2 ' : 'w-0 '); 
  
  return (
    <div className={`
      w-full 
      h-20
      border-b-1
      border-border
      bg-backgroundColor
      sticky
      top-0
      left-0
      z-10
      
      `}>
      <div className='
        flex 
        justify-between 
        items-center 
        h-full  
        max-w-screen-xl 
        m-auto
        p-4
        md:px-12        
        '>
        <h1 className='text-4xl font-bold leading-tight'>De<span className='text-primaryColor'>Fi</span></h1>
        <ul className={`bg-backgroundColor 
          border-l-1 
          border-border 
          absolute 
          z-20  
          duration-700
          transition-all
          h-screen
          right-0
          overflow-x-hidden
          duration-400 
          flex-col 
          justify-start 
          top-20 
          w-1/2
          sm:hidden
          ${handleMenu()}`}>
            <li className='sm:px-4 sm:py-0 sm:flex p-4 w-full border-b-2 border-border'>
                <a className='text-md font-semibold text-lightBlack text-lg' href='/'>Home</a>
            </li>
            <li className='sm:px-4 sm:py-0 sm:flex p-4 w-full border-b-2 border-border'>
                <a className='text-md font-semibold text-lightBlack text-lg' href='/'>Featured</a>
            </li>
            <li className='sm:px-4 sm:py-0 sm:flex p-4 w-full border-b-2 border-border'>
                <a className='text-md font-semibold text-lightBlack text-lg' href='/'>Earn</a>
            </li>
            <li className='sm:px-4 sm:py-0 sm:flex p-4 w-full border-b-2 border-border'>
                <a className='text-md font-semibold text-lightBlack text-lg' href='/'>Contact</a>
            </li>
        </ul>
        <ul className='
          hidden
          bg-backgroundColor
          border-border 
          sm:flex  
          '>
            <li className='sm:px-4 sm:py-0 sm:flex '>
                <a className='text-md font-semibold text-lightBlack' href='/'>Home</a>
            </li>
            <li className='sm:px-4 sm:py-0 sm:flex '>
                <a className='text-md font-semibold text-lightBlack' href='/'>Featured</a>
            </li>
            <li className='sm:px-4 sm:py-0 sm:flex '>
                <a className='text-md font-semibold text-lightBlack' href='/'>Earn</a>
            </li>
            <li className='sm:px-4 sm:py-0 sm:flex '>
                <a className='text-md font-semibold text-lightBlack' href='/'>Contact</a>
            </li>
        </ul>
        <div className='btn-group sm:h-14 sm:w-56 h-8 w-32'>
                <button 
                className='
                  bg-primaryColor 
                  h-full
                  w-full
                   mb-0 
                  cursor-pointer 
                  px-3.5 
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
                    Connect Wallet
                </button>
        </div>
        <div className='flex sm:hidden cursor-pointer transition-all duration-300' onClick={() => {
          handleClick()
          handleFlow()
        }} >
              
              {click ? (<FaTimes className=''/>) : (<FaBars className='' size={20}/>)}
        </div>
      </div>
    </div>
  )
}

export default Navbar

// import React from 'react'
// import { FaBars, FaTimes } from 'react-icons/fa'
// import { useState } from 'react'

// const Navbar = () => {
//   const [click, setClick] = useState(false)

//   const handleClick = () => setClick(!click);

//   const handleMenu = () => (click ? 'right-0 ' : '-right-full '); 
//   const handleFlowMenu = () => (click ? 'overflow-visible' : 'overflow-hidden');

//   return (
//     <div className={`w-full h-20 border-b-1 border-border bg-backgroundColor sticky top-0 left-0 z-10 overflow-hidden 
//     ${handleFlowMenu()}`}>
//       <div className='flex justify-between items-center h-full max-w-screen-xl m-auto p-4 md:px-12'>
//         <h1 className='text-4xl font-bold leading-tight'>De<span className='text-primaryColor'>Fi</span></h1>
//         <ul className={`bg-backgroundColor border-l-1 border-border absolute z-20 h-screen w-1/2 top-20 sm:hidden transition-transform duration-700 ${handleMenu()}`}>
//           <li className='sm:px-4 sm:py-0 sm:flex p-4 w-full border-b-2 border-border'>
//             <a className='text-md font-semibold text-lightBlack text-lg' href='/'>Home</a>
//           </li>
//           <li className='sm:px-4 sm:py-0 sm:flex p-4 w-full border-b-2 border-border'>
//             <a className='text-md font-semibold text-lightBlack text-lg' href='/'>Featured</a>
//           </li>
//           <li className='sm:px-4 sm:py-0 sm:flex p-4 w-full border-b-2 border-border'>
//             <a className='text-md font-semibold text-lightBlack text-lg' href='/'>Earn</a>
//           </li>
//           <li className='sm:px-4 sm:py-0 sm:flex p-4 w-full border-b-2 border-border'>
//             <a className='text-md font-semibold text-lightBlack text-lg' href='/'>Contact</a>
//           </li>
//         </ul>
//         <ul className='hidden bg-backgroundColor border-border sm:flex'>
//           <li className='sm:px-4 sm:py-0 sm:flex'>
//             <a className='text-md font-semibold text-lightBlack' href='/'>Home</a>
//           </li>
//           <li className='sm:px-4 sm:py-0 sm:flex'>
//             <a className='text-md font-semibold text-lightBlack' href='/'>Featured</a>
//           </li>
//           <li className='sm:px-4 sm:py-0 sm:flex'>
//             <a className='text-md font-semibold text-lightBlack' href='/'>Earn</a>
//           </li>
//           <li className='sm:px-4 sm:py-0 sm:flex'>
//             <a className='text-md font-semibold text-lightBlack' href='/'>Contact</a>
//           </li>
//         </ul>
//         <div className='btn-group sm:h-14 sm:w-56 h-8 w-32'>
//           <button className='bg-primaryColor h-full w-full mb-0 cursor-pointer px-3.5 sm:text-lg text-xs text-backgroundColor rounded-br-2xl sm:rounded-br-3xl rounded-tl-2xl sm:rounded-tl-3xl rounded-tr-sm rounded-bl-sm font-semibold hover:shadow-navShadow transition duration-300'>
//             Connect Wallet
//           </button>
//         </div>
//         <div className='flex sm:hidden cursor-pointer transition-all duration-300' onClick={handleClick}>
//           {click ? (<FaTimes className='' />) : (<FaBars className='' size={20} />)}
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Navbar

