import React from "react";

const Experience = () => {
  return (
    <section id="experience" className="bg-gray-50 dark:bg-gray-900 py-10 px-6 md:px-16">
      <h2 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white">
        Experience
      </h2>

      {/* Timeline item */}
      <div className="relative pl-6 border-l-2 border-blue-500 dark:border-blue-400">
        {/* Dot */}
        <span className="absolute left-[-6px] top-2 w-3 h-3 rounded-full bg-blue-500 dark:bg-blue-400"></span>

        {/* Role & Company */}
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
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
    </section>
  );
};

export default Experience;
