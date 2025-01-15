import React, { useState } from 'react';
import { Link  } from 'react-scroll';
import logo from "../Assests/logo.png"
import { IoMenuSharp } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";



export const Navbarcomp=()=>{
    

    return(
    <div className="w-full sm:h-[65px] h-[60px] flex justify-between items-center lg:px-[65px] sm:px-[50px] px-[20px] bg-gradient-to-r from-[#000000]  via-[#800f2f] to-[#000000] border-b-[1px] border-[#800f2f] text-[white] shadow-md shadow-[#a4133c] fixed rounded-b-xl  z-20">
    <div className='flex sm:gap-3 gap-2 items-center'> <h2 className=' border-[2px] border-[#c9184a] p-[3px] rounded-full shadow-[0px_1px_8px_2px_#a4133c]  '><img src={logo} className='sm:w-[40px] w-[35px]'/></h2>
     <h3 className="sm:text-[22px] text-[18px] text-[#ff4d6d] italic font-serif">Balaji</h3></div> 
     <Navbarsubcomp/>
    </div>
    
    )
}

const Navbarsubcomp=()=>{
    const [Menu, setmenu]=useState(true);
    const handlemenu=()=>{
        setmenu(false);
    }
    const handleclose=()=>{
        setmenu(true);
    }

    
    return(
    <div>
        {Menu ?(<div>
         <ul class="lg:flex justify-center items-center gap-[40px] text-[16px] xl:text-[17px] ease-in delay-500 cursor-pointer font-medium hidden lg:visible">
         <Link to="home" spy={true} hashSpy={true} smooth={true} duration={500} activeClass="text-[#ff4d6d] border-b-2 border-[#ff4d6d]"> <li class="hover:text-[#ff4d6d] hover:border-b-2 border-[#ff4d6d] py-1 ">Home</li></Link> 
         <Link to="about" spy={true} hashSpy={true} smooth={true} duration={500} activeClass="text-[#ff4d6d] border-b-2 border-[#ff4d6d]"><li class="hover:text-[#ff4d6d] hover:border-b-2 border-[#ff4d6d] py-1">About Me</li></Link> 
         <Link to="skills" spy={true} hashSpy={true} smooth={true} duration={500} activeClass="text-[#ff4d6d] border-b-2 border-[#ff4d6d]"><li class="hover:text-[#ff4d6d] hover:border-b-2 border-[#ff4d6d] py-1">Technical Expertise</li></Link>
         <Link to="experience" spy={true} hashSpy={true} smooth={true} duration={500} activeClass="text-[#ff4d6d] border-b-2 border-[#ff4d6d]"> <li class="hover:text-[#ff4d6d]  hover:border-b-2 border-[#ff4d6d] py-1">Experience</li></Link>
         <Link to="project" spy={true} hashSpy={true} smooth={true} duration={500} activeClass="text-[#ff4d6d] border-b-2 border-[#ff4d6d]"> <li class="hover:text-[#ff4d6d] hover:border-b-2 border-[#ff4d6d] py-1">Projects</li></Link>
         <Link to="contact" spy={true} hashSpy={true} smooth={true} duration={500} activeClass="text-[#ff4d6d] border-b-2 border-[#ff4d6d]"><li class="hover:text-[#ff4d6d]  hover:border-b-2 border-[#ff4d6d] py-1">Contact</li></Link>
            </ul>
            <IoMenuSharp className='sm:text-[34px] text-[30px] text-[#ff4d6d] visible lg:hidden ' onClick={handlemenu} />
            </div>):
            (<div className='sm:w-[60%] w-[70%] h-screen  bg-gradient-to-r from-[#000000]  via-[#590d22] to-[#000000] fixed z-30 top-0 right-0 py-[60px]  border-l-[1px] border-[#800f2f] text-[white] shadow-lg shadow-[#a4133c]'>
         <ul class=" sm:px-[60px] px-[30px] flex flex-col  sm:text-[17px] text-[15px] gap-10 ">
         <RxCross2 className=' sm:text-[30px] text-[25px] text-[#ff4d6d] right-[30px] absolute top-[20px] ' onClick={handleclose} />
         <Link to='home' spy={true} hashSpy={true} smooth={true} duration={500} activeClass="text-[#ff4d6d] "> <li class="hover:text-[#ff4d6d]  hover:border-b-2 border-[#ff4d6d] py-1 inline-block transition duration-300  ">Home</li></Link> 
               <Link to='about' spy={true} hashSpy={true} smooth={true} duration={500} activeClass="text-[#ff4d6d]  "><li class="hover:text-[#ff4d6d] hover:border-b-2 border-[#ff4d6d] py-1 inline-block transition duration-300 ">About Me</li></Link> 
               <Link to='skills' spy={true} hashSpy={true} smooth={true} duration={500} activeClass="text-[#ff4d6d] "><li class="hover:text-[#ff4d6d] hover:border-b-2 border-[#ff4d6d] py-1 inline-block transition duration-300  ">Technical Expertise</li></Link>
               <Link to='experience' spy={true} hashSpy={true} smooth={true} duration={500} activeClass="text-[#ff4d6d] "><li class="hover:text-[#ff4d6d]  hover:border-b-2 border-[#ff4d6d] py-1 inline-block transition duration-300  ">Experience</li></Link>
               <Link to='project' spy={true} hashSpy={true} smooth={true} duration={500} activeClass="text-[#ff4d6d] "> <li class="hover:text-[#ff4d6d] hover:border-b-2 border-[#ff4d6d] py-1 inline-block transition duration-300 ">Projects</li></Link>
               <Link to='contact' spy={true} hashSpy={true} smooth={true} duration={500} activeClass="text-[#ff4d6d] "><li class="hover:text-[#ff4d6d]  hover:border-b-2 border-[#ff4d6d] py-1 inline-block transition duration-300  ">Contact</li></Link>
            </ul>
            
            </div>)}
    </div>
    
    )
}