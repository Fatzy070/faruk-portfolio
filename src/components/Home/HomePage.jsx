import React from 'react';
import Header from '../layouts/Header';
import Skill from '../Skill'
import About from '../About';
import Project from '../Project'
import { useState  , useEffect } from 'react'
import Experience from '../Experience';
import Contact from '../Contact';
import Footer from '../layouts/Footer';
const Home = () => {
    const [scrolled , setScrolled ] = useState(false)

     useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50); 
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


    return (
       <>
      <div className={` md:m-0 sticky top-3 md:top-0 z-40 ${scrolled ? 'text-white m-3 rounded-[10px] border backdrop-blur-md bg-black/40 md:border-none':'bg-transparent'}`}>
          <Header />
      </div>
        <Skill />
        <About />
        <Project /> 
        <Experience />
        <Contact />
        <Footer />
       </>
    );
};

export default Home;