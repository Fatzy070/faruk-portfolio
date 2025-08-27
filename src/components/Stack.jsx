import React from 'react';
import Data from '../data/Data'
import { IoLogoJavascript , IoLogoHtml5 } from "react-icons/io5";
import { SiTypescript , SiCloudinary , SiRender  , SiVercel ,  SiExpress  , SiTailwindcss , SiMongodb  , SiRedis , SiFirebase } from "react-icons/si";
import { FaPython , FaReact ,  FaGitAlt , FaGithub ,  } from "react-icons/fa";
import { IoLogoNodejs , IoLogoCss3 } from "react-icons/io";
import { HiOutlineCommandLine } from "react-icons/hi2";
import { CgCloud } from 'react-icons/cg';

const Stack = () => {
    const {  js ,  type ,  python , react , node , ex  , html , css , tailwind , mongodb , redis , cloud , fire , git , github , vercel , cli , render , red } = Data
    return (
        <>
        <div className='text-center py-3 mx-8'>
            <h1 className='capitalize font-semibold md:font-bold text-[1.3rem] md:text-4xl'>my tech stack & skills </h1>
            <p className='pt-3 text-gray-400 md:text-[1.1rem]'>The tools and technologies I use to build modern web applications.</p>
        </div>
        <section className=' mx-8 md:mx-5 lg:mx-38 mt-5 '>
             <div className='flex items-center'>
                <div className='flex text-[rgba(59,130,246,255)]'>
                <p className='border-[2px] h-[30px]  '></p>
            </div>
            <h1 className='text-center font-bold text-[1.2rem] md:text-[1.5rem] w-full'>Languages & Frameworks</h1>
            </div>
            <section className='grid gap-5 mt-5 grid-cols-2 md:grid-cols-4'>
                <div className='flex lan capitalize  text-black font-semibold lg:w-[230px] items-center bg-yellow-300 text-[1rem] p-3  gap-3 rounded-[8px]'>
                <IoLogoJavascript size={35} />
                <p>{js}</p>
            </div>   
        
            <div className='flex text-white lan capitalize font-semibold lg:w-[230px] items-center bg-[rgba(49,120,198,255)] text-[1rem] p-3  gap-3 rounded-[8px]'>
                <SiTypescript size={35} />
                <p>{type}</p>
            </div>  

            <div className='flex text-white lan capitalize font-semibold lg:w-[230px] items-center bg-[rgba(55,118,171,255)] text-[1rem] p-3  gap-3 rounded-[8px]'>
                <FaPython size={35} />
                <p>{python}</p>
            </div>  

            <div className='flex text-black lan capitalize font-semibold lg:w-[230px] items-center bg-[rgba(97,218,251,255)] text-[1rem] p-3  gap-3 rounded-[8px]'>
                <FaReact size={35} />
                <p>{react}</p>
            </div>  

            <div className='flex  text-white lan capitalize font-semibold lg:w-[230px] items-center bg-[rgba(51,153,51,255)] text-[1rem] p-3  gap-3 rounded-[8px]'>
                <IoLogoNodejs size={35} />
                <p>{node}</p>
            </div>    

            <div className='flex text-white lan capitalize font-semibold lg:w-[230px] items-center bg-black text-[1rem] p-3  gap-3 rounded-[8px]'>
                <SiExpress size={35} />
                <p>{ex}</p>
            </div>

            <div className='flex text-white  lan uppercase font-semibold lg:w-[230px] items-center bg-[rgba(227,79,38,255)] text-[1rem] p-3  gap-3 rounded-[8px]'>
                <IoLogoHtml5 size={35} />
                <p>{html}</p>
            </div>  
                        
            <div className='flex text-white lan uppercase font-semibold lg:w-[230px] items-center bg-[rgba(21,114,182,255)] text-[1rem] p-3  gap-3 rounded-[8px]'>
                <IoLogoCss3 size={35} />
                <p>{css}</p>
            </div>   

            <div className='flex  text-white lan capitalize font-semibold lg:w-[230px] items-center bg-[rgba(6,182,212,255)] text-[1rem] p-3  gap-3 rounded-[8px]'>
                <SiTailwindcss size={35} />
                <p>{tailwind}</p>
            </div>              

            </section>
        </section>
        <section className=' mx-8 md:mx-5 lg:mx-38 mt-10 '>
             <div className='flex items-center'>
                <div className='flex text-[rgba(59,130,246,255)]'>
                <p className='border-[2px] h-[30px]  '></p>
            </div>
            <h1 className='text-center font-bold text-[1.3rem] md:text-[1.5rem] w-full'>Database & Storage </h1>
            </div>
            <section className='grid gap-5 mt-5 grid-cols-2 md:grid-cols-4'>
                <div className='flex lan capitalize  text-white font-semibold lg:w-[230px] items-center bg-[rgba(71,162,72,255)] text-[1rem] p-3  gap-3 rounded-[8px]'>
                <SiMongodb size={35} />
                <p>{mongodb}</p>
            </div>   
        
            <div className='flex text-white lan capitalize font-semibold lg:w-[230px] items-center bg-[rgba(44,56,45,255)] text-[1rem] p-3  gap-3 rounded-[8px]'>
                <SiFirebase size={35} />
                <p>{fire}</p>
            </div>  

            <div className='flex text-white lan capitalize font-semibold lg:w-[230px] items-center bg-[rgba(52,72,197,255)] text-[1rem] p-3  gap-3 rounded-[8px]'>
                <SiCloudinary size={35} />
                <p>{cloud}</p>
            </div>  
            <div className='flex text-white lan capitalize font-semibold lg:w-[230px] items-center bg-[rgba(220,56,45,255)] text-[1rem] p-3  gap-3 rounded-[8px]'>
                <SiRedis size={35} />
                <p>{red}</p>
            </div>  

                     
            </section>
        </section>
        <section className=' mx-8 md:mx-5 lg:mx-38 mt-10'>
             <div className='flex items-center'>
                <div className='flex text-[rgba(59,130,246,255)]'>
                <p className='border-[2px] h-[30px]  '></p>
            </div>
            <h1 className='text-center font-bold text-[1.3rem] md:text-[1.5rem] w-full'>Tools & DevOps </h1>
            </div>
            <section className='grid gap-5 mt-5 grid-cols-2 md:grid-cols-4'>
                <div className='flex lan capitalize  text-white font-semibold lg:w-[230px] items-center bg-[rgba(240,80,50,255)] text-[1rem] p-3  gap-3 rounded-[8px]'>
                <FaGitAlt size={35} />
                <p>{git }</p>
            </div>   
        
            <div className='flex text-white lan capitalize font-semibold lg:w-[230px] items-center bg-[rgba(24,23,23,255)] text-[1rem] p-3  gap-3 rounded-[8px]'>
                <FaGithub size={35} />
                <p>{github}</p>
            </div>  

            <div className='flex text-white lan capitalize font-semibold lg:w-[230px] items-center bg-black text-[1rem] p-3  gap-3 rounded-[8px]'>
                <SiVercel size={35} />
                <p>{vercel}</p>
            </div>  
            <div className='flex text-white lan capitalize font-semibold lg:w-[230px] items-center bg-[rgba(138,5,255,255)] text-[1rem] p-3  gap-3 rounded-[8px]'>
                <SiRender size={35} />
                <p>{render}</p>
            </div>  
            <div className='flex text-black lan uppercase shadow-lg font-semibold lg:w-[230px] items-center bg-white text-[1rem] p-3  gap-3 rounded-[8px]'>
                <HiOutlineCommandLine size={35} />
                <p>{cli}</p>
            </div>  

                     
            </section>
        </section>
        </>
    );
};

export default Stack;