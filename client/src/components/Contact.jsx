import React from "react";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

const Contact = () => {
  return (
    <section id="contact"
      className="bg-gradient-to-br from-indigo-50 via-white to-sky-50 py-20 px-6 text-center">
      
      <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
        Let’s Connect 
      </h2>
      <p className="text-gray-600 mb-12">
        Feel free to reach out — I’m always open to discussions and opportunities
      </p>

      <div className="max-w-3xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6">
        
        <a href="mailto:manikantaprasad8622@gmail.com" target="_blank" rel="noreferrer"
          className="flex flex-col items-center gap-3 p-6 rounded-2xl bg-white shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
          <FaEnvelope className="text-3xl text-indigo-600" />
          <span className="font-medium text-gray-700">Email</span>
        </a>

        <a href="https://github.com/mkprasadp/" target="_blank" rel="noreferrer"
          className="flex flex-col items-center gap-3 p-6 rounded-2xl bg-white shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
          <FaGithub className="text-3xl text-gray-800" />
          <span className="font-medium text-gray-700">GitHub</span>
        </a>

        <a href="https://www.linkedin.com/in/manikanta-prasad-padala-b46a44266/" target="_blank"
          rel="noreferrer" className="flex flex-col items-center gap-3 p-6 rounded-2xl bg-white shadow-md hover:shadow-xl transition-all duration-300
            hover:-translate-y-2">
          <FaLinkedin className="text-3xl text-blue-600" />
          <span className="font-medium text-gray-700">LinkedIn</span>
        </a>

      </div>

      <p className="mt-14 text-gray-500 text-sm">
        Looking forward to connecting with you 🚀
      </p>
    </section>
  );
};

export default Contact;
