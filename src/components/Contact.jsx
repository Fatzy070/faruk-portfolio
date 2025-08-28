import React from 'react';
import Data from '../data/Data';
import { FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoLinkedin } from "react-icons/io5";
import { MdOutlineMarkEmailUnread } from "react-icons/md"


const Contact = () => {
    const { get , getText , github } = Data; 
    return (
        <>
            <div id='contacts'>
                <section id='contact' className='text-center px-3  md:px-15 lg:px-65 py-12 bg-black'>
                <h1 className='font-bold text-[1.8rem] md:text-[2.5rem] capitalize'>{get}</h1>
                <p className='text-gray-400 py-7'>{getText}</p>
                <div className=' text-white flex justify-center gap-4 flex-wrap'>
                    <a href='https://www.linkedin.com/in/faruk-ogunsola-394815312'
                    target='_blank'
                    rel='noopener noreferrer'
                     className='rounded-[8px] scale bg-[rgba(0,122,181,255)] flex items-center px-5 py-2.5  gap-3 capitalize font-bold'>
                        <IoLogoLinkedin size={20}/>
                        <p>linkedIn</p>
                    </a>
                    <a href='https://github.com/Fatzy070'
                    target='_blank'
                    rel='noopener noreferrer'
                     className='scale shadow-lg   bg-[#15191f] rounded-[8px] flex items-center px-5 py-2.5 gap-3 capitalize font-bold'>
                        <FaGithub size={20}/>
                        <p>{github}</p>
                    </a>
                    <a href='https://x.com/fatzy_tech'
                    target='_blank'
                    rel='noopener noreferrer'
                     className='scale bg-[rgba(28,150,232,255)] rounded-[8px] flex items-center px-5 py-2.5 justify-center gap-3 capitalize font-bold'>
                        <FaXTwitter size={20}/>
                        <p>twitter</p>
                    </a>
                    <a href='https://www.ogunsolafark8@gmail.com'
                    target='_blank'
                    rel='noopener noreferrer'
                     className='scale bg-[#e02e1d] rounded-[8px] flex items-center px-5 py-2.5 gap-3 capitalize font-bold'>
                        <MdOutlineMarkEmailUnread size={20} />
                        <p>Email</p>
                    </a>
                </div>
            </section>
            </div>
        </>
    );
};

export default Contact;