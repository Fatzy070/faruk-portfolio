import React from 'react';
import Data from '../data/Data';
import Stack from './Stack';


const Skill = () => {
    const { name , software , web , view , down} = Data;
    
  
    return (
        <>
        <div className='text-center mt-10 lg:mt-20'>
            <h2 className='capitalize md:text-[1.5rem] text-[rgba(96,165,250,255)] font-semibold'>{software}</h2> 
            <h1 className='text-[1.4rem] md:text-6xl  font-semibold font-sans py-3'>{name}</h1>
            <p className='py-5 px-8 text-gray-400 text-[14px]'>{web}</p>
            <div className='flex gap-4 justify-center'>
                <p  className='font-semibold text-white bg-[rgba(29,78,216,255)] py-3 rounded-[8px] w-[150px] capitalize'>
                  <a href="#projects">
                      {view}
                  </a>
                    </p>
                <p  className='font-semibold border border-2 border-gray-400 text-gray-300  py-3 rounded-[8px] w-[150px] capitalize'>
                  <a href="/Resume _ Ogunsola Faruk.docx" download>
                      {down}
                  </a>
                    </p>
            </div>
        </div>
        <Stack />
        </>
    );
};

export default Skill;