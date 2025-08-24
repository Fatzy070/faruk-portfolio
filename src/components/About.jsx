import React from 'react';
import Data from '../data/Data';

const About = () => {
     const { about , abouttext } = Data;
    return (
        <>
          <div className='text-center'>
                <h1 id='about' >{about}</h1>
                <p>{abouttext}</p>
            </div>  
        </>
    );
};

export default About;