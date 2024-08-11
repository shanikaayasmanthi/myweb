import React from 'react'
import Header from './Header'
// import './home.css'
import Aboutme from './Aboutme'
import Skillogo from './Skillogo'
import Navbar from './Navbar'

export default function Home() {
  return (
    <>
      {/* <div className="">
        <Header/>
        <Aboutme/>
        <Skillogo/>
      </div> */}

      <div className="flex h-screen bg-[#DDE6ED]">
        <div className="flex flex-col items-center justify-between w-2/5 p-10 ">
          <div className="p-10">
            {/* <img src="logo.png" alt="Logo" class="w-12 mb-5"/> */}
            <h1 class="text-4xl font-bold mb-2">Hi, I am</h1>
            <h2 class="text-5xl font-bold text-gray-800">Shanika Ayasmanthi</h2>                
            <p class="text-gray-600 text-xl mt-2">Full Stack Developer</p>
          </div>
        </div>
        <div className="bg-[#27374D] w-3/5 p-10" style={{ clipPath: 'polygon(25% 0%, 100% 0%, 100% 100%, 0% 100%)' }}>
          <div className="text-end">
            <Navbar/>
          </div>
        </div>
      </div>

    </>
  )
}
