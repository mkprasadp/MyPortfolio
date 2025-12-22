import React from "react";

const About = () => {
  return (
    <section id="about"
      className="relative bg-gradient-to-br from-slate-50 via-white to-slate-100 py-24 px-6 md:px-12 lg:px-24 overflow-hidden">
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-indigo-200 rounded-full blur-3xl opacity-30"></div>
      <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-sky-200 rounded-full blur-3xl opacity-30"></div>

      <div className="relative max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-8 relative inline-block">
            About Me
            <span className="absolute left-0 -bottom-3 w-20 h-1 bg-indigo-600 rounded-full"></span>
          </h2>

          <p className="text-lg text-gray-600 leading-relaxed mb-5">
            I'm a passionate and motivated{" "}
            <span className="font-semibold text-gray-900">B.Tech student</span>{" "}
            specializing in{" "}
            <span className="font-semibold text-gray-900">
              Artificial Intelligence and Machine Learning
            </span>
            , with a strong curiosity for building intelligent, scalable systems.
          </p>

          <p className="text-gray-600 leading-relaxed mb-8">
            I work with modern technologies including{" "}
            <span className="font-medium text-gray-900">
              React, JavaScript, HTML/CSS, MongoDB, Express.js, DSA, Java, and SQL
            </span>
            . My projects focus on solving{" "}
            <span className="font-semibold text-indigo-600">
              real-world problems
            </span>{" "}
            through clean architecture and efficient algorithms.
          </p>

          <ul className="space-y-4">
            {[
              "Strong foundation in Data Structures & Algorithms",
              "Continuous learner through certifications & coding platforms",
              "Hands-on AI / ML implementation using real datasets",
            ].map((item, index) => (
              <li key={index} className="flex items-start gap-4 text-gray-700">
                <span className="mt-1 w-2 h-2 bg-indigo-600 rounded-full"></span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="grid grid-cols-2 gap-8">
          {[
            { value: "10+", label: "Projects Built" },
            { value: "5+", label: "Tech Stacks" },
            { value: "2+", label: "AI / ML Projects" },
            { value: "100%", label: "Learning Mindset" },
          ].map((stat, index) => (
            <div key={index}
              className="bg-white/70 backdrop-blur-xl border border-gray-200 rounded-2xl p-8 text-center shadow-md hover:shadow-xl hover:-translate-y-1 transition-all">
              <h3 className="text-4xl font-extrabold text-indigo-600">
                {stat.value}
              </h3>
              <p className="text-gray-600 mt-3 font-medium">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="relative max-w-3xl mx-auto mt-16 text-center">
        <p className="text-gray-700 text-xl font-medium">
          My goal is to create solutions that blend{" "}
          <span className="text-indigo-600 font-semibold">
            technical excellence
          </span>{" "}
          with thoughtful, user-centric design.
        </p>
      </div>
    </section>
  );
};

export default About;
