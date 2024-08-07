import React from 'react'
import {FaFacebook, FaGithub, FaLinkedin, FaTwitter} from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='footer bg-border clip-custom py-20 px-0'>
      <div className='container sm:m-auto grid sm:grid-cols-5 grid-cols-2 justify-between p-4 '>
        <div className='col hidden sm:flex flex-col'>
            <h1 className='text-4xl leading-tight mx-auto  font-bold'>De<span className='text-primaryColor'>Fi</span></h1>
        </div>
        <div className='col flex flex-col '>
            <h5 className='text-lg font-semibold'>Support</h5>
            <span className='bar w-8 my-4 border-b-4 border-primaryColor'></span>
            <a href='/' className='text-lightBlack'>Contact Us</a>
            <a href='/' className='text-lightBlack'>Chat</a>
            <a href='/' className='text-lightBlack'>Help Center</a>
            <a href='/' className='text-lightBlack'>FAQ</a>
        </div>

        <div className='col flex flex-col '>
            <h5 className='text-lg font-semibold'>Developers</h5>
            <span className='bar w-8 my-4 border-b-4 border-primaryColor'></span>
            <a href='/' className='text-lightBlack'>Cloud</a>
            <a href='/' className='text-lightBlack'>Commerce</a>
            <a href='/' className='text-lightBlack'>Pro</a>
            <a href='/' className='text-lightBlack'>API</a>
        </div>

        <div className='col flex flex-col'>
            <h5 className='text-lg font-semibold'>Company</h5>
            <span className='bar w-8 my-4 border-b-4 border-primaryColor'></span>
            <a href='/' className='text-lightBlack'>About</a>
            <a href='/' className='text-lightBlack'>Information</a>
            <a href='/' className='text-lightBlack'>Legal</a>
            <a href='/' className='text-lightBlack'>Privacy</a>
        </div>

        <div className='col flex flex-col'>
            <h5 className='text-lg font-semibold'>Social</h5>
            <span className='bar w-8 my-4 border-b-4 border-primaryColor'></span>
            <a href='/' className='text-lightBlack flex '><FaFacebook className='my-auto mr-2'/>Facebook</a>
            <a href='/' className='text-lightBlack flex'><FaGithub className='my-auto mr-2'/> Github</a>
            <a href='/' className='text-lightBlack flex'><FaLinkedin className='my-auto mr-2'/>LinkedIn</a>
            <a href='/' className='text-lightBlack flex'><FaTwitter className='my-auto mr-2'/>Twitter</a>
    
        </div>
      </div>
    </div>
  )
}

export default Footer
