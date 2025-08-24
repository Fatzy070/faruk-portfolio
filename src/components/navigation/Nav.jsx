import React from 'react';
import Menu from './Menu'
import Toggle from '../Theme/Toggle';
import Data from '../../data/Data';

const Nav = () => {
    const { nav } = Data;

    return (
         <>
           <section className='flex justify-between  my-4 px-5 lg:my-0 md:my-7 py-3 md:px-15 lg:px-7 items-center'>
             <div className='fatzy'>
               <h1>FATZY.dev</h1> 
            </div>
            <div className=' hidden md:flex gap-8'>
                {nav.map((item , index) => {
                    return (
                        <div key={index} className='home text-[1rem] '> 
                           
                                {item.name} 
                            
                        </div>
                    )
                })}
            </div>
            <div className='flex items-center gap-5'>
                
                <Toggle />
                <div className='block md:hidden'>
                    <Menu />
                </div>
            <div className='capitalize hidden text-[1.1rem] bg-[rgba(29,78,216,255)] font-semibold text-white w-[100px] md:flex justify-center items-center h-[40px] 
            rounded-[10px]
            '>
                <h1>hire me</h1>
            </div>
            </div>
           </section>
        </>
    );
};

export default Nav;