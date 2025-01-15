import React from 'react'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { GiLaptop } from "react-icons/gi";
import { FaHeadphones } from "react-icons/fa";
import {motion}  from "framer-motion";



export const Experience = () => {
  return (

  
        <div className=' experience w-full min-h-100vh py-[80px] flex flex-col gap-[70px] bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-[#800f2f] to-[#000000] to-95%'>

    <motion.h1 initial={{ y:-50,opacity:0}} whileInView={{ y:0, opacity:1}} viewport={{once:false, amount:1}} transition={{duration:2,delay:0.5}}
    className="flex justify-center item-center md:text-[32px] sm:text-[28px] text-[24px] font-serif text-[#ff4d6d] ">Experience</motion.h1>
    <motion.div initial={{ rotateY:90,opacity:0}} whileInView={{ rotateY:0, opacity:1}} viewport={{once:false, amount:0.3}} transition={{duration:2,delay:0.5}} className='w-full px-[20px]' >
    <VerticalTimeline lineColor='#ff4d6d'>
    <VerticalTimelineElement className="work experience 2 "
    contentStyle={{ background: '#c9184a', color: 'white', borderRadius:'20px',}}
    contentArrowStyle={{ borderRight: '7px solid #c9184a' }}
    date="Sep 2024 - Present"
    iconStyle={{ background: '#c9184a', color: 'black' }}
    icon={<GiLaptop />}
  >
    <h3 className="vertical-timeline-element-title text-[black] md:text-[20px] sm:text-[18px] text-[16px] font-bold">MERN Stack Developer</h3>
    <h4 className="vertical-timeline-element-subtitle text-[#590d22] md:text-[18px] sm:text-[16px] text-[14px] font-semibold">Intern</h4>
    <p className='text-[white] md:text-[15px] sm:text-[13px] text-[11px]'> I have currently working as an intern in the specialization of MERN developer from why global services, chennai.</p>
    </VerticalTimelineElement>

    <VerticalTimelineElement
    className="work experience 1"
    contentStyle={{ background: '#c9184a', color: 'white', borderRadius:'20px' }}
    contentArrowStyle={{ borderRight: '7px solid #c9184a' }}
    date="Oct 2023 - May-2024"
    iconStyle={{ background: '#c9184a', color: 'black'}}
    icon={<FaHeadphones />}
  >
    <h3 className="vertical-timeline-element-title text-[black] md:text-[20px] sm:text-[18px] text-[16px] font-bold">AR Caller</h3>
    <h4 className="vertical-timeline-element-subtitle text-[#590d22] md:text-[18px] sm:text-[16px] text-[14px] font-semibold">Trainee</h4>
    <p className='text-[white] md:text-[15px] sm:text-[13px] text-[11px]'>
   I have an 6 months of working experience in trainee AR Caller at Shoreline healthcare technology, chennai.
    </p>
    </VerticalTimelineElement>

    </VerticalTimeline>
    </motion.div>
        </div>
        
  )
   
}

