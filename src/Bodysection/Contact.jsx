import React, { useRef, useState } from 'react'
import TextField from '@mui/material/TextField';
import { IoHome } from "react-icons/io5"
import { IoCall } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import {motion}  from "framer-motion";
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';

export const Contact = () => {
  return (
    <div className="contact w-full min-h-100vh flex flex-col xl:px-[100px] md:px-[70px] sm:px-[40px] py-[100px] gap-[40px] bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-[#800f2f] to-[#000000] to-95%" >
       <motion.h1 initial={{ y:-50,opacity:0}} whileInView={{ y:0, opacity:1}} viewport={{once:false, amount:1}} transition={{duration:2,delay:0.5}} className='w-full flex justify-center md:text-[32px] sm:text-[28px] text-[24px] font-serif text-[#ff4d6d]'>Contact</motion.h1> 
       
       <div  className='w-full flex lg:flex-row flex-col gap-[50px] justify-center'>
                   <div className=" lg:w-[50%] w-[100%] md:text-[16px] sm:text-[14px] text-[12px] flex flex-col gap-[25px] justify-center sm:px-[40px] px-[15px]   text-[white]  ">
                   <motion.h1 initial={{opacity:0}} whileInView={{ opacity:1}} viewport={{once:false, amount:1}} transition={{duration:2,delay:0.5}} className="flex  sm:gap-4 gap-2 items-center"> <IoHome className="sm:text-[28px] text-[24px] text-[#ff4d6d]" /><p>:</p>No.17, Jaganathapuram, New street, Chetpet, Chennai 600 031</motion.h1>
                   <motion.h1 initial={{opacity:0}} whileInView={{ opacity:1}} viewport={{once:false, amount:1}} transition={{duration:2,delay:0.5}} className="flex sm:gap-4 gap-2"> <IoCall className="sm:text-[28px] text-[20px] text-[#ff4d6d]" /><p>:</p>8300875727</motion.h1>
                   <motion.h1 initial={{opacity:0}} whileInView={{ opacity:1}} viewport={{once:false, amount:1}} transition={{duration:2,delay:0.5}} className="flex sm:gap-4 gap-2"> <MdEmail className="sm:text-[28px] text-[20px] text-[#ff4d6d]" /><p>:</p>balajibalakrishnan04@gmail.com</motion.h1>
                   <motion.iframe initial={{opacity:0}} whileInView={{ opacity:1}} viewport={{once:false, amount:1}} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3180.12253576469!2d80.24229649897411!3d13.072518719659168!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5267bd64b74811%3A0x6587cd2f7f13233f!2sAmman%20Mens%20PG%20Hostel%2C%20Paying%20Guest%2C%20Hostel%20for%20mens%20CHETPET!5e0!3m2!1sen!2sin!4v1736909053782!5m2!1sen!2sin" className='sm:w-[100%] lg:h-[200px] sm:h-[250px] h-[200px] rounded-md shadow-[0px_1px_10px_4px_#a4133c]' allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></motion.iframe>
                   </div>
       <Contactinput/>
       </div>
    </div>
  )
}


const textFieldStyles = {
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: '#ff4d6d',
    },
    '&:hover fieldset': {
      borderColor: '#ff4d6d',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#ff4d6d',
    },
  },
  '& .MuiInputLabel-root': {
    color: '#ff4d6d',
  },
  '& .MuiInputLabel-root.Mui-focused': {
    color: '#ff4d6d',
  },
  '& .MuiOutlinedInput-input': {
    color: '#ffffff',
    fontSize: { xs: '12px', sm: '14px', md: '16px' }, // Responsive font size
              height: { xs: '15px', sm: '20px', md: '25px' },  // Responsive height

  },
};


const forminit = {
  username: '',
  email: '',
  subject: '',
  message: ''
};

export const Contactinput = () => {
  const form = useRef();
  const [formdata, setformdata] = useState(forminit);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setformdata({ ...formdata, [name]: value });
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);


    emailjs
      .sendForm('service_u0zg896', 'template_beyh08v', form.current, {
        publicKey: 'Vz1-3jeJU3-lIUAIY',
      })
      .then(
        () => {
          toast.success('Message sent', { className: "w-1/5" });
          setformdata(forminit);
          form.current.reset();
        },
        (error) => {
          toast.error(`Failed.. ${error.text || 'Something went wrong'}`, { className: "w-1/5" });
        }
      )
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <div className='lg:w-[50%] w-[100%] lg:px-[0px] md:px-[130px] sm:px-[80px] px-[30px]'>
      <form ref={form} onSubmit={sendEmail} className='xl:px-[20px] min-h-100vh flex flex-col justify-center items-center gap-[20px] py-[30px] rounded-xl shadow-[1px_1px_8px_2px_#c9184a] '>
        <TextField id="Name" type='text' label="Name" variant="outlined" sx={textFieldStyles} className='w-[70%]' name='username' value={formdata.username} onChange={handleChange} required />
        <TextField id="email" type='email' label="E-mail" variant="outlined" sx={textFieldStyles} className='w-[70%]' name='email' value={formdata.email} onChange={handleChange} required />
        <TextField id="subject" type='text' label="Subject" variant="outlined" sx={textFieldStyles} className='w-[70%]' name='subject' value={formdata.subject} onChange={handleChange} required />
        <TextField id="Message" type='text' label="Message" variant="outlined" sx={textFieldStyles} className='w-[70%]' name='message' value={formdata.message} onChange={handleChange} multiline required />
        <div className='w-full flex justify-center'>
          <button type='submit' disabled={isSubmitting} className='px-1.5 py-1 mt-[25px] md:text-[16px] sm:text-[14px] text-[12px] font-semibold shadow-[1px_1px_15px_4px_#a4133c] border-[2px] border-[#ff4d6d] rounded-xl text-[white] bg-[#c9184a]  cursor-pointer'>
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </button>
        </div>
      </form>
    </div>
  )
}