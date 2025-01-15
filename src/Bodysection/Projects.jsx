import React, { useState } from 'react';
import fitprojimg1 from "../Assests/project 1.jpg";
import fitprojimg2 from "../Assests/project 2.jpg";
import { motion } from "framer-motion";
import { RxCross2 } from "react-icons/rx";


export const Projects = () => {

  const [showModal, setShowModal] = useState(false); // State to control modal visibility
  const [selectedProject, setSelectedProject] = useState(null); 

  const projdata = [
    {
      id: 1,
      img: fitprojimg1,
      Projname: "Fitness website (static website)",
      technology: "Figma, HTML, CSS, Javascript.",
      description: 'We have developed a static fitness website during my internship focused on fitness tips and workout guidance. The website was designed using figma, HTML, CSS and JavaScript.',
      button: 'Know More',
      url: 'https:/fitnessproject817.netlify.app',
      code:'https://github.com/BalajiBalakrishnan04/fitness_project'
    },
    {
      id: 2,
      img: fitprojimg2,
      Projname: "Criclog website",
      technology: "Figma, React JS, Node JS, MongoDB",
      description: 'We have developed a cricket website during my internship focused on live matches, scores, comments and cricket news. The website was designed using figma, React js, Node js and MongoDB.',
      button: 'Know More'
    }
  ];

 

  const handleProjectClick = (projectData) => {
    setSelectedProject(projectData);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedProject(null);
  };

  return (
    <div className="project w-full min-h-100vh flex flex-col xl:px-[200px] lg:px-[120px] md:px-[60px] sm:px-[120px] px-[45px] py-[70px] gap-[40px] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#800f2f] to-[#000000] to-95%">
      <motion.h1 initial={{ y: -50, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: false, amount: 1 }} transition={{ duration: 2, delay: 0.5 }} className='flex justify-center item-center md:text-[32px] sm:text-[28px] text-[24px] font-serif text-[#ff4d6d]'>
        Projects
      </motion.h1>
      <div className="w-full xl:gap-[50px] gap-[40px] grid md:grid-cols-2 grid-cols-1 justify-center items-center">
        {projdata.map((value) => (
          <Projectchild key={value.id} data={value} handleProjectClick={handleProjectClick} />
        ))}
      </div>

      {/* Modal Display */}
      {showModal && selectedProject && (
        <div className='w-full h-screen z-10 bg-[#6d6c6c49] backdrop-blur-[5px] top-0 left-0 fixed py-[40px] flex justify-center items-center'>
          <div className='lg:w-[65%] md:w-[75%] sm:w-[85%] w-[90%] min-h-100vh bg-[#070707] text-[white] z-20 py-[30px] flex flex-col justify-center items-center sm:gap-[30px] gap-[20px] px-[20px] rounded-xl border-[2px] border-[#c9184a] shadow-[0px_1px_10px_3px_#c9184a] relative'>
            <p className='w-full md:text-[19px] sm:text-[17px] text-[15px] text-[#ff4d6d] font-semibold flex justify-center px-[40px]'>{selectedProject.Projname} 
              <RxCross2 onClick={handleCloseModal} className='md:text-[22px] sm:text-[18px] text-[17px] text-[#ff4d6d] absolute right-5 top-5' />
            </p>
            <p className='md:px-[40px] sm:px-[20px] md:text-[16px] sm:text-[14px] text-[13px]'>{selectedProject.description}</p>
            <div className='sm:w-[90%] w-[100%] flex justify-between sm:py-[20px] py-[10px]'>
                   <a href={selectedProject.code} target="blank"> <button className='text-[#ff4d6d] bg-[black] sm:text-[15px] text-[13px] font-semibold p-[6px] rounded-[10px] border-[2px] border-[#ff4d6d] shadow-[0px_1px_10px_3px_#c9184a] hover:scale-105 duration-200'>
                View Code
              </button></a>
              <a href={selectedProject.url} target="blank" >
                  <button className='text-[#ff4d6d] bg-[black] sm:text-[15px] text-[13px] font-semibold p-[6px] rounded-[10px] border-[2px] border-[#ff4d6d] shadow-[0px_1px_10px_3px_#c9184a] hover:scale-105 duration-200'>
                    View Live
                  </button>
                </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export const Projectchild = ({ data, handleProjectClick }) => {
  const { Projname, technology, img, button, } = data;

  return (
    <div className="w-full text-[#ff4d6d]">
      <motion.div initial={{ rotateY:15}} animate={{ rotateY:0}} viewport={{once:false, amount:1}} transition={{duration:2,delay:0.5, repeat: Infinity, repeatType: "reverse" }}
       className="bg-[#000000] flex flex-col gap-2 rounded-xl md:text-[14px] sm:text-[13px] text-[11px] shadow-[0px_1px_10px_5px_#a4133c] ">
        <img src={img} className='w-full md:h-[280px] sm:h-[250px] h-[230px] rounded-lg' />
        <div className='flex flex-col gap-4 sm:px-[20px] px-[10px] py-[10px]'>
          <h2 className='font-semibold'>Project Name : <span className="text-[white] font-normal">{Projname}</span></h2>
          <h2 className='font-semibold'>Technologies Used : <span className="text-[white] font-normal">{technology}</span></h2>
          <h2 className='w-full flex justify-center py-2'>
            <button onClick={() => handleProjectClick(data)} className='px-1.5 text-[#ff4d6d] bg-[black] sm:text-[15px] text-[13px] py-[2px] rounded-[10px] border-[2px] border-[#ff4d6d] shadow-[0px_1px_10px_3px_#c9184a] hover:scale-105 duration-300 '>
              {button}
            </button>
          </h2>
        </div>
      </motion.div>
    </div>
  );
};
