import React from 'react';
import { Navbarcomp } from "./Header component/Navbar"
import { Herosection } from "./Header component/Herosection"
import { AboutSection} from "./Bodysection/About"
import {Skills} from './Bodysection/Skills';
import { Experience } from './Bodysection/Experience';
import { Projects } from './Bodysection/Projects';
import { Contact } from './Bodysection/Contact';
import { ToastContainer} from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import { Footer } from './Footer';


export const App=()=>{
    return(
        <div className='w-full h-full flex flex-col'>
        <Navbarcomp/>
        <Herosection/>
        <AboutSection/>
        <Skills/>
        <Experience/>        
        <Projects/>
        <Contact/>
        <Footer/>
        <ToastContainer className='w-1/5'/>
        </div>
    )
}