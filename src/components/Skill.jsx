import React from 'react';
import Data from '../data/Data';
import Stack from './Stack';
import ProfileImage from '/public/profile.png'



const Skill = () => {
    const { name , software , web , view , down} = Data;
    
  
    return (
        <>
        <div className='text-center mt-10 lg:mt-15'>
            <h2 className='capitalize md:text-[1.5rem] text-[rgba(96,165,250,255)] font-semibold'>{software}</h2> 
            <h1 className='text-[1.4rem] md:text-6xl  font-semibold font-sans pb-5'>{name}</h1>
            <p className="text-sm md:text-lg text-slate-500 dark:text-slate-400 max-w-3xl mx-auto mb-8">{web}</p>
          <div className="flex justify-center items-center space-x-4"><a href="#projects" className="bg-blue-600 max-sm:text-[10.5px] text-white font-semibold px-6 py-3 rounded-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 shadow-md">View Projects</a><a download={'/https://docs.google.com/document/d/16Y18WIM1lIMWcJqDB-rfylWsfgKSzY-pcB_aW857574/edit?tab=t.0'} href="https://docs.google.com/document/d/16Y18WIM1lIMWcJqDB-rfylWsfgKSzY-pcB_aW857574/edit?tab=t.0" className="border-2 border-slate-300 max-sm:text-[10.5px] dark:border-slate-600 text-slate-700 dark:text-slate-300 font-semibold px-7 py-3 max-sm:py-2.5 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-700 hover:border-slate-400 dark:hover:border-slate-500 transition-all duration-300">Download CV</a></div>  
        </div>
      <section className='py-20'>
          
            <div className="relative w-64 h-64 md:w-80 md:h-80 mx-auto">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full blur-2xl opacity-30 dark:opacity-50"></div>
                    <img src={ProfileImage} width={100} height={100} alt="Ogunsola Faruk Profile" className="relative w-full h-full rounded-full object-cover border-8 border-white dark:border-slate-800 shadow-2xl" />

          </div>
    
        <Stack />
      </section>
        </>
    );
};

export default Skill;