import React from 'react'
import { SiHtml5 } from "react-icons/si";
import { IoLogoCss3 } from "react-icons/io5";
import { DiJavascript } from "react-icons/di";
import figma from "../Assests/figma.png"
import msofiice from "../Assests/msoffice.png"
import { GrReactjs } from "react-icons/gr";
import { FaNodeJs } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { PiGithubLogoFill } from "react-icons/pi";
import {motion}  from "framer-motion";
import { SiTailwindcss } from "react-icons/si";
import { SiJira } from "react-icons/si";
import { SiMui } from "react-icons/si";







export const Skills = () => {
  return (
    
       <div
        className='skills w-full min-h-100vh py-[70px] flex flex-col gap-[40px] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#800f2f] to-[#000000] to-95% '>
         <motion.div initial={{ y:-50, opacity:0}} whileInView={{ y:0,opacity:1}} viewport={{once:false,amount:1}} transition={{duration:2,delay:0.5}}
         >
         <h1 className="flex  justify-center item-center md:text-[32px] sm:text-[28px] text-[24px] font-serif text-[#ff4d6d] ">Technical Expertise</h1>
         </motion.div>
         <div className='w-full flex md:flex-row flex-col gap-[40px]'>
         <div 
         className="md:w-[50%] w-[85%] flex flex-col sm:ml-[50px] ml-[30px] font-serif  border-2 py-[20px] border-[#c9184a] rounded-lg  shadow-[0px_1px_8px_3px_#a4133c] ">
          <div className=' px-[40px] sm:text-[20px] text-[16px] py-[10px] text-[#c9184a] underline-offset-4 underline'>Development Tools :</div>
          <div className='grid lg:grid-cols-4 sm:grid-cols-3 grid-cols-2 grid-flow-rows py-[10px] gap-[20px]'>
         <motion.h1 initial={{ opacity:0}} whileInView={{ opacity:1}} viewport={{once:false,amount:1}} transition={{duration:2,delay:0.5}} className='flex flex-col justify-center items-center gap-[10px] hover:scale-110'><img src={figma} alt="" className='sm:w-[40px] w-[37px] sm:h-[35px] h-[32px] '/><span className="text-[#ff758f] text-[14px]">Figma</span> </motion.h1>   
         <motion.h1 initial={{ opacity:0}} whileInView={{ opacity:1}} viewport={{once:false,amount:1}} transition={{duration:2,delay:0.5}} className='flex flex-col justify-center items-center gap-[10px] hover:scale-110'><SiHtml5 className=' text-[#ff4931] sm:text-[34px] text-[32px] '/> <span className="text-[#ff758f] text-[14px]">HTML</span></motion.h1>
         <motion.h1 initial={{ opacity:0}} whileInView={{ opacity:1}} viewport={{once:false,amount:1}} transition={{duration:2,delay:0.5}} className='flex flex-col justify-center items-center gap-[10px] hover:scale-110'><IoLogoCss3 className=' text-[#255fff] sm:text-[34px] text-[32px]'/> <span className="text-[#ff758f] text-[14px]">CSS</span></motion.h1>
         <motion.h1 initial={{ opacity:0}} whileInView={{ opacity:1}} viewport={{once:false,amount:1}} transition={{duration:2,delay:0.5}} className='flex flex-col justify-center items-center gap-[10px] hover:scale-110'><DiJavascript className=' text-[#b9b927] sm:text-[34px] text-[32px]'/> <span className="text-[#ff758f] text-[14px]">Javascript</span></motion.h1>
         <motion.h1 initial={{ opacity:0}} whileInView={{ opacity:1}} viewport={{once:false,amount:1}} transition={{duration:2,delay:0.5}} className='flex flex-col justify-center items-center gap-[10px] hover:scale-110'><GrReactjs className=' text-[#3fecd5] sm:text-[34px] text-[32px]'/> <span className="text-[#ff758f] text-[14px]">React JS</span></motion.h1>  
         <motion.h1 initial={{ opacity:0}} whileInView={{ opacity:1}} viewport={{once:false,amount:1}} transition={{duration:2,delay:0.5}} className='flex flex-col justify-center items-center gap-[10px] hover:scale-110'><FaNodeJs className=' text-[#46a825] sm:text-[34px] text-[32px]'/><span className="text-[#ff758f] text-[14px]">Node JS</span></motion.h1>   
         <motion.h1 initial={{ opacity:0}} whileInView={{ opacity:1}} viewport={{once:false,amount:1}} transition={{duration:2,delay:0.5}} className='flex flex-col justify-center items-center gap-[10px] hover:scale-110'><SiMongodb className=' text-[#2b6817] sm:text-[34px] text-[32px]'/> <span className="text-[#ff758f] text-[14px]">Mongo DB</span></motion.h1>
         </div> </div>
         <div
         className="md:w-[50%] w-[85%] flex flex-col md:mr-[50px] md:ml-[0px] sm:ml-[50px] ml-[30px] font-serif  border-2 py-[20px] border-[#c9184a] rounded-lg  shadow-[0px_1px_8px_3px_#a4133c] ">
          <div className=' px-[40px] sm:text-[20px] text-[16px] py-[10px] text-[#c9184a] underline-offset-4 underline'>Other Tools :</div>
          <div className='grid lg:grid-cols-4 sm:grid-cols-3 grid-cols-2 grid-flow-rows py-[10px] gap-[20px]'>
         <motion.h1 initial={{ opacity:0}} whileInView={{ opacity:1}} viewport={{once:false,amount:1}} transition={{duration:2,delay:0.5}} className='flex flex-col justify-center items-center gap-[10px] hover:scale-110'><PiGithubLogoFill  className='bg-[black] rounded-full sm:text-[36px] text-[34px] text-[#800f2f]  '/><span className="text-[#ff758f] text-[14px]">GitHub</span> </motion.h1>   
         <motion.h1 initial={{ opacity:0}} whileInView={{ opacity:1}} viewport={{once:false,amount:1}} transition={{duration:2,delay:0.5}} className='flex flex-col justify-center items-center gap-[10px] hover:scale-110'><SiJira className=' text-[#2d78db] sm:text-[34px] text-[32px]'/> <span className="text-[#ff758f] text-[14px]">Jira</span></motion.h1>
         <motion.h1 initial={{ opacity:0}} whileInView={{ opacity:1}} viewport={{once:false,amount:1}} transition={{duration:2,delay:0.5}} className='flex flex-col justify-center items-center gap-[10px] hover:scale-110'><SiTailwindcss className=' text-[#4d94f1] sm:text-[34px] text-[32px]'/> <span className="text-[#ff758f] text-[14px]">Tailwind CSS</span></motion.h1>
         <motion.h1 initial={{ opacity:0}} whileInView={{ opacity:1}} viewport={{once:false,amount:1}} transition={{duration:2,delay:0.5}} className='flex flex-col justify-center items-center gap-[10px] hover:scale-110'><SiMui className=' text-[#2d78db] sm:text-[34px] text-[32px]'/> <span className="text-[#ff758f] text-[14px]">Material UI</span></motion.h1>
         <motion.h1 initial={{ opacity:0}} whileInView={{ opacity:1}} viewport={{once:false,amount:1}} transition={{duration:2,delay:0.5}} className='flex flex-col justify-center items-center gap-[10px] hover:scale-110'><img src={msofiice} alt="" className='sm:w-[40px] w-[37px] sm:h-[35px] h-[32px]'/><span className="text-[#ff758f] text-[14px]">MS Office</span> </motion.h1> 

                  </div> </div></div>
        </div>

    
  )
}

