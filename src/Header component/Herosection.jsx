import Profimg from "../Assests/Profile.png"

import Typewriter from "typewriter-effect";
import {motion}  from "framer-motion";
import { RiLinkedinFill } from "react-icons/ri";
import { PiGithubLogoFill } from "react-icons/pi";





export const Herosection=()=>{
    const imageVariants = {
        initial: { x: 100, },
        animateOne: { x: 0, opacity: 1, transition: { duration: 2, delay: 0.5 } },
        animateTwo: { opacity: 1, y:15, transition: { duration:2, repeat: Infinity, repeatType: "reverse" } }
      };

    return(
        
    <div className=" home w-full min-h-100vh flex lg:flex-row flex-col justify-between items-center sm:px-[90px] px-[20px] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#800f2f] to-[#000000] to-95%" >
        <Herosub/>
        <div>
            
     <motion.img src={Profimg}  variants={imageVariants}
  initial="initial"
  animate={["animateOne", "animateTwo"]} className=" w-[100%]  xl:h-[400px] lg:h-[350px] md:h-[300px] sm:h-[270px] h-[250px]  lg:mt-[140px] mt-[20px] lg:mb-[20px] mb-[40px] rounded-full lg:px-4 sm:px-2.5 px-2 border-[3px] bg-[#88888821] border-[#ff4d6d] shadow-[0px_1px_15px_7px_#a4133c] "/> 
    
     </div>
    </div>
    

    )
}
export const Herosub=()=>{
    return(
    <motion.div initial={{x:-150, opacity:0}} animate={{x:0, opacity:1}} transition={{duration:2,delay:0.5}} className=" lg:w-[50%] w-[100%] text-white md:text-[30px] sm:text-[26px] text-[22px] flex flex-col gap-[5px] lg:pt-[190px] pt-[150px] pb-[45px] lg:items-start  items-center ">
        <h1 className="font-serif">Hello, I am <span className="text-[#ff4d6d] ">Balaji.B</span></h1>

        <p className="text-[#ff4d6d] md:text-[30px] sm:text-[26px] text-[22px] font-serif">
            <Typewriter options={{strings: ["MERN Stack Developer" ], passfor:(3000), autoStart: true, loop:true }}/></p>
        
              <div className="flex gap-[50px] lg:pt-[60px] pt-[40px] ">
     <a href="https://github.com/BalajiBalakrishnan04" target="black"><PiGithubLogoFill className="sm:text-[36px] text-[32px] cursor-pointer text-[#ff4d6d]  border-[2px] border-[#ff4d6d] bg-black p-[4px] rounded-full shadow-[1px_1px_10px_4px_#a4133c] hover:bg-[#ff4d6d] hover:text-black ease-out delay-100" /></a>
     <a href="https://www.linkedin.com/in/balajibalakrishnan04" target="black"><RiLinkedinFill className="sm:text-[36px] text-[32px] cursor-pointer text-[#ff4d6d]  border-[2px] border-[#ff4d6d] bg-black p-[4px] rounded-full shadow-[1px_1px_10px_4px_#a4133c] hover:bg-[#ff4d6d] hover:text-black ease-out delay-100" /></a>
      </div>
      <button initial={{x:-150, opacity:0}} animate={{x:0, opacity:1}} transition={{duration:2,delay:1}}   className="px-2 py-1.5 mt-[25px] sm:text-[16px] text-[14px] bg-[black] font-semibold shadow-[1px_1px_15px_5px_#800f2f] border-[2px] border-[#c9184a] rounded-xl text-[#ff4d6d] hover:scale-105 ease-in-out duration-300 cursor-pointer">Get My Resume</button>
        </motion.div>
    )
}

