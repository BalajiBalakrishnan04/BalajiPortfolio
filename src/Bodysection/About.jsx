import { FaUserGraduate } from "react-icons/fa6";
import Progimg from "../Assests/programming.jpg"
import {motion}  from "framer-motion";
import { FaUserLarge } from "react-icons/fa6";
import { BsFillCake2Fill } from "react-icons/bs";






export const AboutSection=()=>{
    
    return(
        
    <div className=" about w-full min-h-100vh py-[80px] flex flex-col justify-center items-center gap-[40px] bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-[#800f2f] to-[#000000] to-95%">
        <motion.h1 initial={{ y:-50,opacity:0}} whileInView={{ y:0, opacity:1}} viewport={{once:false, amount:1}} transition={{duration:2,delay:0.5}}
        className=" text-white md:text-[32px] sm:text-[28px] text-[24px] font-serif">About <span className="text-[#ff4d6d]">Me</span></motion.h1>
        <div 
        className="w-[85%] min-h-100vh text-[white] flex lg:flex-row flex-col-reverse justify-center item-center gap-[20px] lg:divide-x-[3px]  divide-[#c9184a] ">
            <div className="lg:w-[50%] w-[100%] flex justify-center items-center ">
            <img  src={Progimg} className=" lg:w-[80%] md:w-[55%] sm:w-[65%] w-[85%] h-[90%]  rounded-[10px] "/> 

                        </div>
            
            <div className="lg:w-[50%] w-[90%] lg:pl-[40px] pl-[10px] flex flex-col gap-[20px] py-[20px] md:text-[17px] sm:text-[15px] text-[14px]">
            <motion.h1 initial={{opacity:0}} whileInView={{opacity:1}} viewport={{once:false, amount:1}} transition={{duration:2,delay:0.5}} className="flex gap-4"> <FaUserLarge className="sm:text-[26px] text-[22px] text-[#ff4d6d]" /><p>:</p>Balaji. B</motion.h1>
            <motion.h1 initial={{opacity:0}} whileInView={{opacity:1}} viewport={{once:false, amount:1}} transition={{duration:2,delay:0.5}} className="flex gap-4"> <BsFillCake2Fill className="sm:text-[26px] text-[22px] text-[#ff4d6d]" /><p>:</p>17/08/2002</motion.h1>
            <motion.h1 initial={{opacity:0}} whileInView={{opacity:1}} viewport={{once:false, amount:1}} transition={{duration:2,delay:0.5}} className="flex gap-4"> <FaUserGraduate className="sm:text-[26px] text-[22px] text-[#ff4d6d]" /><p>:</p>B.E(ECE)</motion.h1>
            <motion.h1 initial={{opacity:0}} whileInView={{opacity:1}} viewport={{once:false, amount:1}} transition={{duration:2,delay:0.5}} className="indent-5 pt-[20px] text-justify md:text-[16px] sm:text-[14px] text-[12px]">
            I am Balaji B, I am proficient in [HTML, CSS, JavaScript, React.js, Node.js, MongoDB]. I would like to implement my innovative ideas and skills for accomplishing the projects and support for organization growth.</motion.h1>
            </div>
           
        </div>
      </div>
    // 
    )
}