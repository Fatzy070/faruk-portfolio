import React from 'react';
import { useState } from 'react';
import Data from '../../data/Data';
import { LuSquareMenu } from "react-icons/lu";
import { IoClose } from "react-icons/io5";

const Nav = () => {
    const { nav , hire } = Data
    const [open , setOpen ] = useState(false)

    const toggle = () => {
        setOpen(!open)
    }

    return (
        <>
        <div
        onClick={toggle}
        >
            <LuSquareMenu size={30} />
        </div>

          {open && (

            <section  className='absolute bg-[rgba(15,23,42,255)] top-0 left-0 h-[100vh] w-full '>
                <div className='flex justify-end p-5'
                    onClick={toggle}
                >
                    <IoClose size={25} color='white'/>
                </div>
            <section className='h-[80%] flex items-center justify-center'>
                <div>   
                <div>
                {nav.map((item , index) => {
                    return (
                        <div key={index} className='home text-gray-300 text-center pt-6 font-semibold text-[1.9rem]'> 
                           
                                {item.name} 
                            
                        </div>
                    )
                })}
            </div> 
            <div className='flex justify-center'>
                <h1 className='capitalize  mt-7 text-[1.2rem] bg-[rgba(29,78,216,255)] font-semibold text-white w-[130px] flex justify-center items-center p-2 h-[50px] rounded-[10px]
            '>
                <p>hire me</p>
            </h1> 
            </div>
            </div>
            </section>
          </section>
          )}
        </>
    );
};

export default Nav;