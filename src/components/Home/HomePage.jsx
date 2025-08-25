import React from 'react';
import Nav from '../navigation/Nav';
import Skill from '../Skill'
import About from '../About';
import Project from '../Project'
const Home = () => {

    return (
       <>
        <Nav />
        <Skill />
        <About />
        <Project /> 
       </>
    );
};

export default Home;