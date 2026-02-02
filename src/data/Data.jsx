import React from 'react';
import crypto from '../assets/crypto.png';
import kopee from '../assets/kopee.png';
import profusion from '../assets/profusion.png';
import youth from '../assets/youth.png';
import weather from '../assets/weather.png';
import dashboard from '../assets/dashboard.png';
import blog from '../assets/blog.png';
import fintech from '../assets/fintech.png';
import cryptoNova from '../assets/Crypto2.jpg';
import zyntek from '../assets/zyntek.png';
import learn from '../assets/learn.png';
import logi from '../assets/logi.png';
import Nexus from '../../public/nexus.png'

const Data = {
  // Navigation
  nav: [
    { id: 'about', name: 'About' },
    { id: 'project', name: 'Projects' },
    { id: 'experience', name: 'Experience' },
    { id: 'contact', name: 'Contact' },
  ],

  // Hero Section
  hire: 'Hire me',
  name: "I'm Ogunsola Faruk",
  software: "a Software Engineer",
  web: "Passionate Software Developer shaping Africa's tech future with JavaScript, Next.js, React, and Node.js.",
  view: "view projects",
  down: '📄 Download CV',

  // Skills/Tech Stack
  js: 'Javascript',
  type: 'typescript',
  python: 'python',
  react: 'react',
  node: 'Node.js',
  tailwind: 'tailwind',
  mongodb: 'mongodb',
  redis: 'redis',
  cloud: 'cloudinary',
  fire: 'firebase',
  git: 'git',
  github: 'github',
  vercel: 'vercel',
  cli: 'cli',
  render: 'render',
  ex: 'express',
  html: 'html5',
  css: 'css3',
  red: 'redis',
  next: 'Next.js',

  // About Section
  about: 'about me',
  abouttext: `I'm a dedicated Software Developer with expertise in building modern, scalable web applications using JavaScript, React, and Node.js. I specialize in transforming conceptual ideas into robust, production-ready solutions that deliver tangible business value.

Currently expanding my expertise into cybersecurity, I'm developing a comprehensive understanding of secure development practices and threat mitigation strategies. My objective is to bridge software engineering with security principles, creating resilient digital solutions that prioritize both functionality and protection.

Committed to continuous learning and technical excellence, I actively stay updated with emerging technologies while applying industry best practices to every project I undertake.`,

  // Projects
  project: [
    {
      id: 1,
      siteName: 'Nexus social',
      about: `Nexus Social is a production-grade full-stack ecosystem designed to mirror the complexity of modern social platforms. Built with Next.js and Node.js, the project prioritizes system integrity and performance. Beyond core features like real-time messaging and content interaction, I focused on implementing a scalable API architecture, rigorous authentication protocols, and protected routing to ensure a secure, seamless user experience from the ground up.`,
      react: 'next.js',
      tailwind: 'tailwind',
      link: 'https://nexus-tau-taupe.vercel.app/',
      github: 'https://github.com/Fatzy070/social-frontend-',
      image: Nexus,
      node: 'Node.js',
      data: 'MongoDB'
    },
    {
      id: 1,
      siteName: 'LogiXpress',
      about: `LogiXpress is a modern logistics platform that makes shipping and package tracking fast, reliable, and effortless. Users can create shipments, track them in real-time, and manage deliveries with ease. The platform features a responsive and intuitive UI, built with React and Tailwind CSS. It integrates with a backend API for real-time updates and seamless data management. LogiXpress empowers users to stay in control of their shipments, anytime, anywhere.`,
      react: 'react',
      tailwind: 'tailwind',
      link: 'https://logixpress.vercel.app/',
      github: 'https://github.com/Fatzy070/logistic-front',
      image: logi,
      node: 'Node.js',
      data: 'MongoDB'
    },
    {
      id: 2,
      siteName: 'learnhub',
      about: 'LearnHub is a modern mini-LMS platform designed to make learning simple, organized, and accessible. It provides a clean interface where students can explore courses, watch lessons, track progress, and manage their learning journey without distractions. The platform includes features such as video playback, user authentication, progress saving, and structured course organization all built to deliver a smooth, efficient learning experience.',
      react: 'react',
      tailwind: 'tailwind',
      link: 'https://learnhub-henna.vercel.app/',
      github: 'https://github.com/Fatzy070/learn-front',
      image: learn,
      node: 'Node.js',
      data: 'MongoDB'
    },
    {
      id: 3,
      siteName: 'Zyntek',
      about: 'A modern e-commerce website that combines tech and fashion into one platform. It features a clean UI, responsive layouts, dynamic product displays, and smooth navigation for an elegant shopping experience. The project highlights my frontend skills in React, Tailwind CSS, and responsive web design, with a focus on performance and visual consistency across devices.',
      react: 'react',
      tailwind: 'tailwind',
      link: 'https://zyntek-silk.vercel.app/',
      github: 'https://github.com/Fatzy070/Zyntek-front',
      image: zyntek,
      node: 'Node.js',
      data: 'MongoDB'
    },
    {
      id: 4,
      siteName: 'Fintech',
      about: 'A modern fintech app that simplifies personal finance by helping users track expenses, monitor savings, and make smarter financial decisions. Built with cutting-edge web technologies, it combines a sleek, responsive interface with secure, real-time features for seamless money management.',
      react: 'react',
      tailwind: 'tailwind',
      link: 'https://naijafintech.vercel.app/',
      github: 'https://github.com/Fatzy070/tracker-frontend',
      image: fintech,
      node: 'Node.js',
      data: 'MongoDB'
    },
    {
      id: 5,
      siteName: 'CryptoNova',
      about: 'A live cryptocurrency portfolio tracker that lets users monitor their crypto assets in real time. Built with React.js and integrated with live market APIs, CryptoNova features Google login, smooth portfolio management, and a clean, interactive dashboard.',
      react: 'react',
      tailwind: 'tailwind',
      link: 'https://crypto-nova-neon.vercel.app/',
      github: 'https://github.com/Fatzy070/CryptoNova-frontend',
      image: cryptoNova,
      node: 'Node.js'
    },
    {
      id: 6,
      siteName: 'Blog',
      about: 'This is a mini social media/blog application built with React, Firebase, and Tailwind CSS. Users can create accounts, login via email or Google, edit their profiles, and create posts with text, images, or videos.',
      react: 'react',
      tailwind: 'tailwind',
      link: 'https://blogwebapp-red.vercel.app/',
      github: 'https://github.com/Fatzy070/blogwebapp',
      image: blog,
      node: 'firebase',
      data: 'MongoDB'
    },
    {
      id: 7,
      siteName: 'crypgo',
      about: 'A modern cRryptocurrency tracker that provides users with real-time data on various coins. Built with React and TailwindCSS for a sleek interface, and Node.js for backend operations, Crypgo delivers a smooth experience for monitoring and exploring crypto trends.',
      react: 'react',
      tailwind: 'tailwind',
      link: 'https://crypto-psi-five-92.vercel.app/',
      github: 'https://github.com/Fatzy070/crypto-frontend',
      image: crypto,
      node: 'node.js',
      data: 'MongoDB'
    },
    {
      id: 8,
      siteName: 'dashboard',
      about: 'An interactive admin dashboard that visualizes key metrics and data in a clean interface. Built with React and TailwindCSS for the frontend and Node.js on the backend, this project demonstrates dynamic data fetching, state management, and responsive design for real-world business use cases.',
      react: 'react',
      tailwind: 'tailwind',
      link: 'https://dashboard-blond-five-33.vercel.app/',
      github: 'https://github.com/Fatzy070/dashboard',
      image: dashboard,
      node: 'node.js'
    },
    {
      id: 9,
      siteName: 'YouthVenture',
      about: 'An engaging travel and adventure website designed for young explorers. YouthVenture showcases destinations, experiences, and stories with a responsive design powered by React and TailwindCSS, while Node.js ensures seamless backend support.',
      react: 'react',
      tailwind: 'tailwind',
      link: 'https://traveller-coral.vercel.app/',
      github: 'https://github.com/Fatzy070/traveller',
      image: youth,
      node: 'node.js'
    },
    {
      id: 10,
      siteName: 'weatherApp',
      about: 'A real-time weather application that allows users to search and view live weather conditions of any city worldwide. Built with HTML, CSS, and JavaScript, it integrates with a weather API to display accurate data including temperature, humidity, and weather descriptions in a clean and responsive interface.',
      html: 'html',
      css: 'css',
      javascript: 'Javascript',
      link: 'https://liveweather-inky.vercel.app/',
      github: 'https://github.com/Fatzy070/liveweather',
      image: weather
    }
  ],

  // Experience Section
  exp: 'experience',
  inter: 'intern - SP Tech',
  date: 'jan 2025 - jun 2025',
  work: [
    { id: 1, name: 'Worked with a team to develop and maintain web applications using React, Node.js, and MongoDB.' },
    { id: 2, name: 'Assisted in creating and consuming REST APIs, focusing on secure authentication and data flow.' },
    { id: 3, name: 'Improved debugging and problem-solving skills while collaborating on real-world client projects.' },
  ],

  // Freelance Section
  personal: 'Freelance Web Developer / Personal Projects',
  freelance: [
    { id: 1, name: 'Crypgo', about: 'Cryptocurrency tracker with live market data.' },
    { id: 2, name: 'YouthVenture', about: 'Travel & adventure platform for young explorers.' },
    { id: 3, name: 'kopee', about: 'Coffee shop landing page with modern, responsive UI.' }
  ],

  // Contact Section
  get: 'get in touch',
  getText: `I'm open to exciting opportunities and collaborations. Whether you'd like to connect, share ideas, or simply say hello, feel free to reach out. Let's create something impactful together.`
};

export default Data;