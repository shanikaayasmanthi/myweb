import React, { useState } from "react";
import {
  FaEnvelope,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaLocationArrow,
  FaMobile,
  FaPhone,
  FaRulerVertical,
} from "react-icons/fa";
import {
  FaLine,
  FaLocationDot,
  FaLocationPin,
  FaLocationPinLock,
  FaRulerHorizontal,
} from "react-icons/fa6";
import { contactData } from "../../data/contactData";
import { Link } from "react-router-dom";

const Contact = () => {
  
const [name,setName] =useState('');
const [email,setEmail] =useState('');
const [message,setMessage] =useState('');
  
  return (
    <div>
      <div className="bg-black md:h-screen">
        <div className="bg-black md:flex md:justify-center md:items-center md:py-28">
          <div className="md:w-1/3 text-white bg-orange-600  md:mr-[-100px] z-10 md:rounded-3xl md:p-10 shadow-lg shadow-slate-600 py-7">
            <h1 className="pl-10 text-3xl font-semibold md:text-3xl md:p-0">
              Contact
            </h1>
            <div className="mt-10 space-y-10 text-gray-200 md:px-3 ">
              <div className="items-center md:space-x-2 md:flex-wrap md:flex justify-items-center">
                <FaLocationDot className="text-2xl" />
                <p className="flex flex-wrap">{contactData.address}</p>
              </div>
              <div className="items-center md:space-x-2 md:flex-wrap md:flex justify-items-center">
                <FaEnvelope className="text-2xl" />
                <p>{contactData.email}</p>
              </div>
              <div className="items-center md:space-x-2 md:flex-wrap md:flex justify-items-center">
                <FaMobile className="text-2xl" />
                <p>{contactData.phone}</p>
              </div>
            </div>
            <div className="flex items-center justify-center pt-10 text-xl space-x-7">
              <>
                <FaInstagram />
              </>
              <>
                <FaFacebook />
              </>
              <>
                <FaLinkedin />
              </>
            </div>
          </div>
          <div className="md:w-1/2 py-16 text-black bg-white md:pl-[150px] md:rounded-3xl md:pr-4 shadow-lg shadow-slate-600 pl-14">
            <h1 className="text-3xl font-bold">Get In Touch</h1>
            <p className="text-gray-500">Feel free to drop me a line below!</p>
            <div>
              <form className="">
                <input
                  className="w-[80%] bg-slate-200 border-none h-10 px-5 rounded-lg my-4 "
                  type="text"
                  placeholder="Name"
                  value={name}
                  onChange={e => setName(e.target.value)}
                />
                <input
                  className="w-[80%] bg-slate-200 border-none h-10 px-5 rounded-lg my-4"
                  type="text"
                  placeholder="Email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                />
                <textarea
                  className="w-[80%] bg-slate-200 border-none min-h-20 px-5 rounded-lg my-4 py-2 max-h-28"
                  type="textarea"
                  placeholder="Message"
                  value={message}
                  onChange={e => setMessage(e.target.value)}
                />
              </form>
              <button className="h-10 px-5 text-white bg-orange-500 rounded-lg hover:bg-orange-600">
                Submit
              </button>
            </div>
          </div>
        </div>
        <div className="w-full text-center text-gray-400 bg-black md:text-xs text-balance text-[10px] p-2">
        copyright © 2025 | All right reserved by shanika ayasmanthi
      </div>
      </div>
    </div>
  );
};

export default Contact;
