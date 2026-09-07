import React from "react";

const Experience = () => {
  return (
    <>
      <main className="py-10  px-6 md:px-16">
        <section id="experience">
          <h2 className="text-3xl text-center font-bold mb-8">
            Experience & Education
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* ==================== EXPERIENCE ==================== */}
            <section className="space-y-6">
              {/* Naelix Tech Group */}
              <div className="relative pl-6 border-l-2 border-blue-500 dark:border-blue-400">
                <span className="absolute left-[-6px] top-2 w-3 h-3 rounded-full bg-blue-500 dark:bg-blue-400"></span>

                <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                  Full-Stack Developer — Naelix Tech Group of Companies
                </h3>

                <p className="text-sm text-gray-500 dark:text-gray-400">
                  January 2026 – Present
                </p>

                <p className="mt-3 text-gray-700 dark:text-gray-300 leading-relaxed">
                  Contributing to production web applications across team
                  collaboration, fintech, developer infrastructure, and
                  identity verification.
                </p>

                <ul className="mt-3 text-gray-700 dark:text-gray-300 list-disc list-inside space-y-2 text-sm leading-relaxed">
                  <li>
                    Develop and maintain full-stack features across multiple
                    production applications.
                  </li>

                  <li>
                    Build and integrate REST APIs, authentication systems,
                    real-time functionality, and third-party services.
                  </li>

                  <li>
                    Work across React-based frontends and Node.js backend
                    services to deliver end-to-end features.
                  </li>

                  <li>
                    Collaborate with engineering teams to troubleshoot issues,
                    improve application reliability, and ship production-ready
                    features.
                  </li>

                  <li>
                    Contribute to applications involving financial
                    transactions, developer services, communication, and
                    identity verification.
                  </li>
                </ul>
              </div>

              {/* Xerv */}
              <div className="relative pl-6 border-l-2 border-blue-500 dark:border-blue-400">
                <span className="absolute left-[-6px] top-2 w-3 h-3 rounded-full bg-blue-500 dark:bg-blue-400"></span>

                <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                  Backend Developer @ Xerv
                </h3>

                <p className="text-sm text-gray-500 dark:text-gray-400">
                  August 2025 – November 2025
                </p>

                <p className="mt-3 text-gray-700 dark:text-gray-300 leading-relaxed">
                  Developed and maintained backend services for NeTuArk, a
                  full-stack social networking platform, with a focus on
                  reliable APIs, authentication, real-time communication, and
                  scalable data management.
                </p>

                <ul className="mt-3 text-gray-700 dark:text-gray-300 list-disc list-inside space-y-2 text-sm leading-relaxed">
                  <li>
                    Designed and implemented RESTful APIs supporting
                    authentication, user profiles, social interactions, and
                    messaging workflows.
                  </li>

                  <li>
                    Implemented secure authentication and authorization
                    workflows to protect user accounts and API resources.
                  </li>

                  <li>
                    Built real-time communication functionality for chat and
                    user interactions using backend event-driven services.
                  </li>

                  <li>
                    Designed and optimized database models and queries using
                    Prisma and MySQL to support application performance and
                    maintainability.
                  </li>

                  <li>
                    Collaborated with frontend developers to integrate APIs,
                    troubleshoot application issues, and deliver end-to-end
                    features.
                  </li>

                  <li>
                    Integrated Firebase services into application
                    authentication and cloud-based workflows where required.
                  </li>
                </ul>
              </div>

              {/* SPTech Internship */}
              <div className="relative pl-6 border-l-2 border-blue-500 dark:border-blue-400">
                <span className="absolute left-[-6px] top-2 w-3 h-3 rounded-full bg-blue-500 dark:bg-blue-400"></span>

                <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                  Web Developer Intern @ SPTech
                </h3>

                <p className="text-sm text-gray-500 dark:text-gray-400">
                  June 2025 – August 2025
                </p>

                <p className="mt-3 text-gray-700 dark:text-gray-300 leading-relaxed">
                  Supported students during web development training by
                  mentoring learners on programming fundamentals, preparing
                  learning resources, and creating visual materials to improve
                  technical understanding.
                </p>
              </div>
            </section>

            {/* ==================== EDUCATION ==================== */}
            <section>
              <div className="relative pl-6 border-l-2 border-blue-500 dark:border-blue-400">
                <span className="absolute left-[-6px] top-2 w-3 h-3 rounded-full bg-blue-500 dark:bg-blue-400"></span>

                <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                  SP Tech and Solutions
                </h3>

                <p className="text-sm text-gray-500 dark:text-gray-400">
                  2025
                </p>

                <p className="mt-3 text-gray-700 dark:text-gray-300 leading-relaxed">
                  <span className="text-blue-500">⁛</span>{" "}
                  Completed a Diploma in Full-Stack Development with
                  hands-on training in modern web development technologies,
                  software engineering practices, and application development.
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