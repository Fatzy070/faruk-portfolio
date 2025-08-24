import React from 'react';
import Data from '../data/Data';
import Stack from './Stack';


const Skill = () => {
    const { name , software , web , view} = Data;
    return (
        <>
        <div className='text-center mt-10 lg:mt-20'>
            <h2 className='capitalize md:text-[1.5rem] text-[rgba(96,165,250,255)] font-semibold'>{software}</h2> 
            <h1 className='text-[1.5rem] md:text-6xl  font-semibold font-sans'>{name}</h1>
            <p className='py-5 px-8 text-gray-400'>{web}</p>
            <div className='flex justify-center'>
                <p className='font-semibold text-white bg-[rgba(29,78,216,255)] py-3 rounded-[8px] w-[150px] capitalize'>
                    <a href="#">{view}</a>
                    </p>
            </div>
        </div>
        <Stack />
        </>
    );
};

export default Skill;