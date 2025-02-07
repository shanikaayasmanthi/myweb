import React, { useRef, useState } from "react";
import { headerData } from "../../data/headerData";
import {
  FaBars,
  FaEnvelope,
  FaFacebook,
  FaGithub,
  FaLinkedin,
  FaX,
} from "react-icons/fa6";
import { navData } from "../../data/navData";

const Landing = () => {
  const [shownavItems, setShownavItems] = useState(false);
  console.log(shownavItems);
  console.log(navData);
  const linkRef = useRef(null);

  const downloadCv=async()=>{
    console.log("clicked");
    
    try{
      const blob = await fetch(headerData.resumePdf).then((response)=>response.blob());
      const url =window.URL.createObjectURL(blob);
      const  link = document.createElement("a");
      link.href = url;
      link.download = 'shanika_ayasmanthiCV.pdf';
      link.click();
      window.URL.revokeObjectURL(url);
    }catch(error){
      console.log("Error downloading Cv:",error);
      
    }
    
    // const blob = new Blob({type:'application/pdf'});
    // const url = URL.createObjectURL(blob);
    // if(linkRef.current) {
    //   linkRef.current.href =url;
    //   linkRef.current.download = headerData.resumePdf;
    //   linkRef.current.click();
    // }
    
    // URL.revokeObjectURL(url);
  };

  return (
    <>
      {shownavItems && (
        <div className="absolute z-20 h-screen bg-black opacity-80 md:w-[35%] w-full text-gray-100  pl-16 pt-16  ">
          <FaX
            className="absolute text-white cursor-pointer md:text-xl right-8 top-6"
            onClick={() => setShownavItems(false)}
          />
          <div className="flex-col space-y-16">
            {navData.map((data) => (
              <>
              <a
                key={data.name}
                href={data.link}
                rel="noopener noreferrer"
                className="text-black cursor-pointer "
              >
                <h1
                  className="mb-16 text-2xl font-semibold text-gray-100 opacity-100 hover:text-white hover:cursor-pointer hover:shadow-sm"
                  key={data.name}
                >
                  {data.name}
                </h1></a>
              </>
            ))}
          </div>
        </div>
      )}
      <div className="flex flex-col h-screen md:flex-row">
        <div className="order-1 bg-orange-600 md:order-1 md:basis-2/5 h-2/6 md:h-screen">
          <div className="flex justify-end md:justify-start">
            <FaBars
              className="m-3 text-xl text-left text-black cursor-pointer md:m-4 md:text-3xl hover:text-gray-100"
              onClick={() => setShownavItems(true)}
            />
          </div>
          <div className="flex items-center justify-center">
            <div className="z-10 mt-[16%] overflow-hidden bg-white rounded-full md:w-72 md:h-72 md:mt-[18%] w-52 h-52 border-black border-8 md:border-none">
              <img
                src={headerData.image}
                alt="Profile"
                className="z-10 object-cover w-full h-full"
              />
            </div>
          </div>
          <div className="absolute flex items-center justify-center space-x-3 text-black hover:text-gray-100 top-4 md:mt-14 md:static md:ml-0 left-4">
            {headerData.social.gmail && (
              <a
                key={headerData.social.gmail}
                href={headerData.social.gmail}
                target="_blank"
                rel="noopener noreferrer"
                className="text-black cursor-pointer "
              >
                <FaEnvelope className="z-10 text-lg cursor-pointer md:text-3xl hover:text-gray-100" />
              </a>
            )}
            {headerData.social.linkedIn && (
              <a
                key={headerData.social.linkedIn}
                href={headerData.social.linkedIn}
                target="_blank"
                rel="noopener noreferrer"
                className="text-black cursor-pointer "
              >
                <FaLinkedin className="z-10 text-lg text-black cursor-pointer md:text-3xl hover:text-gray-100" />
              </a>
            )}
            {headerData.social.github && (
              <a
                key={headerData.social.github}
                href={headerData.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-black cursor-pointer "
              >
                <FaGithub className="z-10 text-lg text-black cursor-pointer md:text-3xl hover:text-gray-100" />
              </a>
            )}
            {/* {headerData.social.phone && (
            <a
                    key={headerData.social.phone}
                    href={headerData.social.phone}
                    target="_blank"
                    type="tel"
                    rel="noopener noreferrer"
                    className="text-black cursor-pointer "
                >
            <FaPhone className="z-10 text-lg text-black cursor-pointer md:text-3xl hover:text-gray-100"/></a>
          )} */}
            {headerData.social.facebook && (
              <a
                key={headerData.social.facebook}
                href={headerData.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="text-black cursor-pointer "
              >
                <FaFacebook className="z-10 text-lg text-black cursor-pointer md:text-3xl hover:text-gray-100" />
              </a>
            )}
          </div>
        </div>
        <div className="content-center order-2 text-gray-100 bg-black md:order-2 md:basis-3/5 h-4/6 md:h-screen p-9 min-h-fit">
          <div className="flex-col space-y-2 md:space-y-6 justify-items-center text-balance md:mt-0 mt-[10%] md:p-8">
            {/* <h2 className="font-bold text-center md:text-2xl">Hi I'm</h2> */}
            
            <h3 className="md:text-2xl ">
              {headerData.title}
            </h3>
            <h1 className="text-2xl font-bold text-center text-orange-600 md:text-5xl md:no-underline overline">
              {headerData.name}
            </h1>
            <p className="text-justify md:text-xl">{headerData.desciption}</p>
            <button onClick={downloadCv} className="px-5 py-2 text-black transition duration-300 ease-in-out delay-150 bg-gray-100 mt-7 md:text-xl hover:-translate-y-1 hover:scale-110 hover:shadow-md hover:shadow-orange-600 rounded-2xl hover:bg-orange-600 hover:text-gray-100">
              Download CV
            </button>
          </div>
        </div>
      </div>
    </>
  );
  // return (
  //   <div className="flex flex-col items-center justify-center min-h-screen bg-orange-400">
  //     <div className="mb-8 overflow-hidden rounded-full h-54 w-54">
  //       <img
  //         src={headerData.image}
  //         alt="Profile"
  //         className="object-cover w-full h-full"
  //       />
  //     </div>
  //     <h1 className="mb-4 text-5xl italic font-bold text-white transform -rotate-6 ">- {headerData.name} -</h1>
  //     <p className="pt-5 mb-8 text-2xl text-white">{headerData.title}</p>
  //     <div className="flex space-x-4">
  //           {(headerData.social).map((entry)=>{
  //               <><h1>{entry.id}</h1>
  //               {/* <a
  //                   key={entry.id}
  //                   href={entry.link}
  //                   target="_blank"
  //                   rel="noopener noreferrer"
  //                   className="text-white cursor-pointer hover:text-orange-500"
  //               >
  //                   <FiTwitter />
  //               </a> */}
  //               </>
  //           })}

  //       <a
  //         href="#"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //         className="text-white hover:text-orange-500"
  //       >
  //         <i className="fab fa-facebook-f"></i>
  //       </a>
  //       <a
  //         href="#"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //         className="text-white hover:text-orange-500"
  //       >
  //         <i className="fab fa-linkedin-in"></i>
  //       </a>
  //       <a
  //         href="#"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //         className="text-white hover:text-orange-500"
  //       >
  //         <i className="fab fa-instagram"></i>
  //       </a>
  //     </div>
  //   </div>
  // )
};

export default Landing;
