import React from 'react';
import Data from '../data/Data';
import { useState } from 'react';
import { CiRead , CiUnread } from "react-icons/ci";

const About = () => {
     const { about , abouttext } = Data;
     const [ open , setOpen ] = useState(false)

     const previewLength = 250

     const toggle = () => {
        setOpen(!open)
     }

    return (
        <>
          <div className='text-center mx-5 md:mx-20 lg:mx-35 mt-10'>
                <h1 id='about' className='font-bold capitalize text-[1.5rem] md:text-3xl' >{about}</h1>
                      <p
        className={`text-[1rem] md:text-[1.2rem] pt-5 text-gray-300 ${
          open ? "text-expand" : "text-collapse"
        }`}
      >

                    {open ?
                    abouttext
                    : abouttext.substring(0, previewLength) + "...."
                    }
                    </p>
                    
                    <div className='flex justify-center mt-7'>
                        <button
                    onClick={toggle}
                    className=' capitalize font-semibold text-gray-400 rounded-[30px] border flex w-[135px] items-center justify-between px-2 h-[40px]'
                    >
                        {open ? <>
                            <CiUnread size={30}/>
                            show less 
                            </> : 
                         <>
                         <CiRead size={30} />
                         show more 
                         </>
                            }
                    </button>
                    </div>
            </div>  
        </>
    );
};

export default About;