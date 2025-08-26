import React from 'react';
import Data from '../data/Data'
import { FaLink } from "react-icons/fa6";
import { RiGithubLine } from "react-icons/ri";

const Project = () => {
  const { project } = Data;

  return (
    <section className="px-6 py-7 bg-[rgba(2,6,23,255)]">
      <h1 id='project' className="text-3xl md:text-4xl font-bold text-center mb-10 text-gray-800 dark:text-gray-100">
        My Work & Projects
      </h1>

      <div className='grid grid-cols-1 md:grid-cols-2 gap-10 lg:mx-20'>
        {project.map((item) => {
          return (
            <div key={item} className='bounce bg-[rgba(30,41,59,255)] rounded-[8px] overflow-hidden '> 
                <img src={item.image} alt={item.siteName} className='  w-full '/>
                <div className='p-5'>
                  <h2 className='capitalize text-white font-semibold md:text-2xl'>{item.siteName}</h2>
                  <p className='py-2 text-gray-300 text-[13px] md:text-[1rem]'>{item.about}</p>
                  <div className='py-3'>
                    { item.html && (
                      <span className='rounded-2xl text-[14px] px-2 py-[2px] mr-2  bg-gray-700  capitalize  '>{item.html}</span>
                  )}
                  { item.css && (
                      <span className='px-2 rounded-2xl py-[2px] text-[14px] mr-2 bg-gray-700  capitalize  '>{item.css}</span>
                  )}
                  {item.react && (
                    <span className='px-2 rounded-2xl text-[14px] py-[2px] mr-2 bg-gray-700  capitalize  '>{item.react} </span>
                  )}
                  {item.tailwind && (
                    <span className='px-2 rounded-2xl text-[14px] py-[2px] mr-2 bg-gray-700  capitalize  '>{item.tailwind} </span>
                  )}
                  {item.node && (
                    <span className='px-2 rounded-2xl text-[14px] py-[2px] mr-2 bg-gray-700  capitalize  ' >{item.node}</span>
                  )}
                  </div>
                  <div className='flex gap-3'>
                    <a href={item.link}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='flex items-center gap-1.5 capitalize text-[rgba(96,165,250,255)] font-semibold text-[15px] md:text-[1rem]'
                    >
                      <FaLink size={25} />
                       <p>live demo </p>
                      </a>
                      <a href={item.github}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='flex items-center text-[#a8bdcf] gap-1.5 capitalize font-semibold text-[15px] md:text-[1rem]'
                      >
                        <RiGithubLine size={25} />
                        <p>github </p>
                      </a>
                  </div>
                </div>
            </div>
          )
        })}
      </div>
    </section>
  );
};

export default Project;
