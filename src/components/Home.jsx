import React from 'react';
import Header from './Header';
// import './home.css';
import Aboutme from './Aboutme';
import Skillogo from './Skillogo';
import Navbar from './Navbar';

export default function Home() {
  const clipPathStyle = window.innerWidth >= 768 ? { clipPath: 'polygon(25% 0%, 100% 0%, 100% 100%, 0% 100%)' } : {};

  return (
    <>
      <div className="flex flex-col md:flex-row h-screen bg-[#DDE6ED]">
        {/* Navbar Container */}
        <div className="bg-[#27374D] w-full md:w-3/5 p-5 md:p-10 order-1 md:order-2" style={ clipPathStyle }>
          <div className="text-center md:text-end">
            <Navbar />
          </div>
        </div>

        {/* Content Container */}
        <div className="flex flex-col items-center justify-center order-2 w-full p-5 md:justify-between md:w-2/5 md:p-10 md:order-1">
          <div className="p-5 text-center md:text-left md:p-10">
            <h1 className="mb-2 text-3xl font-bold md:text-4xl">Hi, I am</h1>
            <h2 className="text-4xl font-bold text-gray-800 md:text-5xl">Shanika Ayasmanthi</h2>                
            <p className="mt-2 text-lg text-gray-600 md:text-xl">Full Stack Developer</p>
          </div>
        </div>
      </div>
    </>
  );
}
