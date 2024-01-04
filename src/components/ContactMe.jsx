import React from 'react'
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

function ContactMe() {
  return (
    <div className='bg-zinc-100 p-20'>
      <h5 className="text-4xl text-center bg-zinc-100 font-bold tracking-tight">Contact Me</h5>
      <div className='flex gap-10 bg-zinc-100'>
        <img src="src/assets/images/contact.svg" className='bg-zinc-100  w-1/2 h-1/2' alt="contact me" />
        <div className='flex flex-col mx-auto justify-center gap-10 bg-zinc-100  mt-44'>
        <a href="https://www.linkedin.com/in/shaqayeq-taheri-328697254/">
          <FaLinkedin size={80} className='hover:animate-pulse' />
        </a>
        <a href="https://github.com/Shaqayeq-taheri">
          <FaGithub size={80} className='hover:animate-pulse'  />
        </a>
        <a href="mailto:shaqayeq-taheri@gmail.com">
          <HiOutlineMail size={80} className='hover:animate-pulse' />
        </a>
        </div>
      </div>
    </div>
  )
}

export default ContactMe