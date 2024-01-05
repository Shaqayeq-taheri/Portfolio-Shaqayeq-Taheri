import React from 'react'
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

function ContactMe() {
  return (
    <div className='bg-zinc-100 p-20'>
      <h5 className="text-4xl text-center bg-zinc-100 font-bold ">Contact Me</h5>
      <div className='flex flex-wrap gap-10 bg-zinc-100 '>
        <img src="src/assets/images/contact.svg" className='bg-zinc-100 ' alt="contact me" />
        <div className='flex md:flex-col mx-auto justify-center gap-10 bg-zinc-100 md:mt-44 mt-10'>
        <a href="https://www.linkedin.com/in/shaqayeq-taheri-328697254/">
          <FaLinkedin size={80} className='hover:animate-pulse bg-zinc-100' />
        </a>
        <a href="https://github.com/Shaqayeq-taheri">
          <FaGithub size={80} className='hover:animate-pulse bg-zinc-100'  />
        </a>
        <a href="mailto:shaqayeq-taheri@gmail.com">
          <HiOutlineMail size={80} className='hover:animate-pulse bg-zinc-100' />
        </a>
        </div>
      </div>
    </div>
  )
}

export default ContactMe