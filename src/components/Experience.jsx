import React from "react";

const Experience = () => {
  return (
   <>
       <main className="py-10 px-6 md:px-16">
          <section id="experience" className="">
      <h2 className="text-3xl text-center font-bold mb-8 ">
        Experience & Education
      </h2>

      <div className="grid grid-cols-2 gap-3">
          <section>
          <div className="relative pl-6 border-l-2 border-blue-500 dark:border-blue-400">
        <span className="absolute left-[-6px] top-2 w-3 h-3 rounded-full bg-blue-500 dark:bg-blue-400"></span>

        <h3 className="text-lg font-bold text-gray-900 dark:text-white">
          Web Developer Intern @ SPTech
        </h3>

        {/* Date */}
        <p className="text-sm text-gray-500 dark:text-gray-400">
          June 2025 – August 2025
        </p>

        {/* Details */}
        <p className="mt-2 text-gray-700 dark:text-gray-300">
          Assisted in mentoring new students on web development fundamentals, supported team growth by providing learning resources, and created visual aids to enhance student understanding.
        </p>
      </div>      
      <div className="relative pl-6 border-l-2 border-blue-500 dark:border-blue-400 pt-4">
     
        <span className="absolute left-[-6px] top-6 w-3 h-3 rounded-full bg-blue-500 dark:bg-blue-400"></span>

     
        <h3 className="text-lg font-bold text-gray-900 dark:text-white">
          Backend Developer at Xerv
        </h3>

       
        <p className="text-sm text-gray-500 dark:text-gray-400">
          August 2025 – November 2025
        </p>

       
        <p className="mt-2 text-gray-700 dark:text-gray-300">
         Developed and maintained the backend for NeTuArk, a full-stack social platform featuring real-time chat, news feeds, and user profiles.
        Implemented secure user authentication, messaging APIs, and real-time data handling using Node.js, Express, Prisma, and MySQL.
    Optimized database queries and schema design with Prisma for improved performance and scalability.
    Collaborated closely with frontend developers to integrate REST APIs and streamline platform responsiveness.
     Utilized Firebase for authentication workflows and cloud data synchronization.
        </p>
      </div>  
      </section> 

      <section>
      <div className="relative pl-6 border-l-2 border-blue-500 dark:border-blue-400 pt-4">
     
        <span className="absolute left-[-6px] top-6 w-3 h-3 rounded-full bg-blue-500 dark:bg-blue-400"></span>

     
        <h3 className="text-lg font-bold text-gray-900 dark:text-white">
           SP Tech and Solutions - 
        </h3>

       
        <p className="text-sm text-gray-500 dark:text-gray-400">
          2025
        </p>

       
        <p className="mt-2 text-gray-700 dark:text-gray-300">
        <span className="text-blue-500"> ⁛ </span>Completed a Diploma in Full-Stack Development, gaining hands-on experience with modern web technologies.
        </p>
      </div>
      </section>
      </div>
    </section>


       </main>
  
   </>
  );
};

export default Experience;
