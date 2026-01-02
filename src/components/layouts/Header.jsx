import React from 'react';
import Menu from '../navigation/Menu'
import Toggle from '../Theme/Toggle';
import Data from '../../data/Data';

const Header = () => {
    const { nav } = Data;
  const scrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
  };
  
    return (
         <>
           <section className='flex justify-between  px-5 py-3  lg:my-0 md:my-7  md:px-15 lg:px-7 items-center'>
             <div className='fatzy'>
               <h1>FATZY.dev</h1> 
            </div>
            <div className=' hidden md:flex gap-8'>
                {nav.map((item , index) => {
                    return (
                         <button
            key={index}
            onClick={() => scrollToSection(item.id)}
            className='home text-[1rem] '
          >
            {item.name}
          </button>
                    )
                })}
            </div>
            <div className='flex items-center gap-10'>
                
                <Toggle />
                <div className='block md:hidden'>
                    <Menu />
                </div>
            <div
             className='capitalize hidden text-[1.1rem] bg-[rgba(29,78,216,255)] font-semibold text-white w-[100px] md:flex justify-center items-center h-[40px] 
            rounded-[10px]
            '>
               <a href="#contacts">
                 <h1>hire me</h1>
               </a>
            </div>
            </div>
           </section>
        </>
    );
};

export default Header;