import React from "react";
import profile from "../assets/profile.png";

const Header = () => {
  return (
    <header className="relative min-h-screen flex items-center bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 pt-24 overflow-hidden">

      <div className="absolute top-1/2 left-1/2 w-[900px] h-[900px] bg-indigo-600 rounded-full blur-[200px] opacity-20 -translate-x-1/2 -translate-y-1/2"></div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-20">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-20">

          <div className="text-center md:text-left text-white">
            <span className="inline-block mb-6 px-5 py-2 text-sm font-semibold text-indigo-300 bg-white/10 rounded-full">
             Full-Stack Developer
            </span>

            <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">
              Hi, I'm{" "}
              <span className="text-indigo-400">Manikanta</span>
            </h1>

            <p className="mt-5 text-xl text-slate-300 font-medium">
              Building scalable & beautiful web applications
            </p>

            <p className="mt-4 text-slate-400 max-w-xl leading-relaxed">
              Specialized in MERN Stack with a strong focus on performance,
              clean UI, and production-ready architecture.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-6 justify-center md:justify-start">
              <a href="#projects"
                className="px-10 py-4 rounded-full bg-indigo-500 text-white font-semibold shadow-xl hover:bg-indigo-600 hover:scale-105 transition-all">
                View Projects
              </a>

              <a href="https://drive.google.com/file/d/1XcookuLSIXgUPs91ggZqUrp5uRU4Tol7/view"
                target="_blank" rel="noopener noreferrer" 
                className="px-10 py-4 rounded-full border border-indigo-400 text-indigo-300 font-semibold hover:bg-indigo-500 hover:text-white hover:scale-105 transition-all">
                Download Resume
              </a>
            </div>
          </div>

          <div className="flex justify-center md:justify-end">
            <div className="relative">

              <div className="absolute -inset-[140px] rounded-full border border-white/40 animate-spin"></div>
              <div className="absolute -inset-[220px] rounded-full border border-white/25 animate-spin [animation-duration:40s]"></div>
              <div className="absolute -inset-[300px] rounded-full border border-white/15 animate-spin [animation-duration:60s]"></div>

              <div className="relative rounded-full p-2 bg-white/10 backdrop-blur-xl">
                <img src={profile} alt="Profile"
                  className="w-72 h-72 md:w-80 md:h-80 rounded-full object-cover border-4 border-white shadow-2xl"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
