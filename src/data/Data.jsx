import React from 'react';
import crypto from '../assets/crypto.png'
import kopee from '../assets/kopee.png'
import profusion from '../assets/profusion.png'
import youth from '../assets/youth.png'
import weather from '../assets/weather.png'



const Data ={
    nav:[
        {id:'about' , name:'About' },
        {id:'project' , name:'Projects' },
        {id:'experience' , name:'Experience'},
        {id:'contact' , name:'Contact'},
    ],
    hire:'Hire me',
    name:"I'm Ogunsola Faruk",
    software:"a Software Developer",
    web:"Passionate Software Developer shaping Africa’s tech future with JavaScript, Python, React, and Node.js.",
    view:"view projects",
    js:'Javascript' , 
    type:'typescript',
    python:'python' , 
    react:'react',
    node:'node.js',
    tailwind: 'tailwind',
    mongodb:'mongodb',
    redis:'redis',
    cloud:'cloudinary',
    fire:'firebase', 
    git:'git',
    github:'github',
    vercel:'vercel' ,
    cli:'cli',
    render:'render',
    ex:'express',
    html:'html5',
    css:'css3',
    red:'redis',
    about:'about me ',
    abouttext:`I’m a passionate Software Developer focused on building modern and scalable web applications with JavaScript, React, and Node.js. I love turning ideas into real solutions that make an impact.
Beyond development, I’m currently exploring cybersecurity, sharpening my skills to better understand how technology can be built, secured, and protected. My long-term goal is to combine both development and security to create innovative and safe digital experiences.
When I’m not coding, I’m learning, experimenting, and pushing myself to grow as a developer and as an upcoming cybersecurity expert. 🚀`,
project:[
    {id:1 , siteName: 'crypgo' , about:'A modern cryptocurrency tracker that provides users with real-time data on various coins. Built with React and TailwindCSS for a sleek interface, and Node.js for backend operations, Crypgo delivers a smooth experience for monitoring and exploring crypto trends.' , react:'react' , tailwind:'tailwind' , link:'https://crypto-psi-five-92.vercel.app/' , github:'https://github.com/Fatzy070/crypto-frontend' , image:crypto , node:'node.js' },
    {id:2 , siteName: 'YouthVenture' , about:'An engaging travel and adventure website designed for young explorers. YouthVenture showcases destinations, experiences, and stories with a responsive design powered by React and TailwindCSS, while Node.js ensures seamless backend support.' , react:'react' , tailwind:'tailwind' , link:'https://traveller-coral.vercel.app/' , github:'https://github.com/Fatzy070/traveller' , image: youth , node:'node.js'} ,
    {id:3 , siteName:'profusion' , about:'A clean and minimal portfolio project highlighting professional presentation. Developed with HTML and CSS, Profusion demonstrates strong fundamentals in responsive web design while focusing on elegance and simplicity.' , image: profusion , css:'css' , html:'html' , github:'https://github.com/Fatzy070/fartzy-pro' , link:'https://fartzy-pro.vercel.app/' },
    {id:4 , siteName:'kopee' , about:'A modern coffee shop landing page that blends style with usability. Built using pure HTML and CSS, Kopee emphasizes branding and user-friendly layout while practicing structured, responsive web design.' , image:kopee , github:'https://github.com/Fatzy070/kopee' , html:'html' , css:'css' , link:'https://kopee-xi.vercel.app/' } ,
    {id:5 , siteName:'weatherApp' , html:'html' , css:'css' , github:'https://github.com/Fatzy070/liveweather' , link:'https://liveweather-inky.vercel.app/' , image:weather , about:'A real-time weather application that allows users to search and view live weather conditions of any city worldwide. Built with HTML, CSS, and JavaScript, it integrates with a weather API to display accurate data including temperature, humidity, and weather descriptions in a clean and responsive interface.' , javascript:'Javascript' }
],
exp:'experience',
inter:'intern - SP Tech',
date:'jan 2025 - jun 2025 ',
work:[
    {id:1 , name:'Worked with a team to develop and maintain web applications using React, Node.js, and MongoDB.'},
    {id:2 , name:'Assisted in creating and consuming REST APIs, focusing on secure authentication and data flow.'},
    {id:3 , name:'Improved debugging and problem-solving skills while collaborating on real-world client projects.'},
],
personal:'Freelance Web Developer / Personal Projects',
freelance:[
    {id:1 , name:'Crypgo' , about:'Cryptocurrency tracker with live market data.'},
    {id:2 , name:'YouthVenture' , about:'Travel & adventure platform for young explorers.'},
    {id:3 , name:'kopee' , about:'Coffee shop landing page with modern, responsive UI.'}
],
get:'get in touch',
getText:`I’m open to exciting opportunities and collaborations. Whether you’d like to connect, share ideas, or simply say hello, feel free to reach out. Let’s create something impactful together.`

        
};

export default Data;