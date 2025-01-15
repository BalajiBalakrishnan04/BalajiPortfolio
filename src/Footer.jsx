import React from 'react'
import logo from "./Assests/logo.png"
import { RiLinkedinFill } from "react-icons/ri";
import { PiGithubLogoFill } from "react-icons/pi";

export const Footer = () => {
  return (
    <div className='w-full min-h-100vh py-[30px] flex flex-col justify-center items-center bg-[#22070f] gap-[20px] '>
<p className='text-[#ff4d6d] sm:text-[14px] text-[12px] '><span className='text-[16px]'>&copy; </span> 2025 <span className='font-semibold'>Balaji</span>, All rights reserved.</p>
 <div className="flex gap-[50px] ">
     <a href="https://github.com/BalajiBalakrishnan04" target="black"><PiGithubLogoFill className="sm:text-[30px] text-[25px] cursor-pointer text-[#ff4d6d]  border-[2px] border-[#ff4d6d] bg-black p-[4px] rounded-full shadow-[1px_1px_10px_4px_#a4133c] hover:bg-[#ff4d6d] hover:text-black ease-out delay-100" /></a>
     <a href="https://www.linkedin.com/in/balajibalakrishnan04" target="black"><RiLinkedinFill className="sm:text-[30px] text-[25px] cursor-pointer text-[#ff4d6d]  border-[2px] border-[#ff4d6d] bg-black p-[4px] rounded-full shadow-[1px_1px_10px_4px_#a4133c] hover:bg-[#ff4d6d] hover:text-black ease-out delay-100" /></a>
      </div> 
      <p className='text-[#ff4d6d] sm:text-[14px] text-[12px] '>Designed and developed by <span className='font-semibold'>Balaji</span></p>
    </div>
  )
}
