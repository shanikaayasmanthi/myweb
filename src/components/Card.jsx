import React from 'react'
import UIUXIcon from '../assets/icons/UIUX.png';
import WebIcon from '../assets/icons/WEBDEV.png';
import MobileIcon from '../assets/icons/MOBILE.png';
import MaintainIcon from '../assets/icons/Maintain.png';


const Card = ({service}) => {

    const getImage=(title)=>{
        switch (title) {
            case "Web Design & Development":
                return WebIcon;
            case "Mobile App Development":
                return MobileIcon;
            case "UI/UX Design":
                return UIUXIcon;
            case "Maintaining":
                return MaintainIcon;
            default:
                break;
        }
    }
  return (
    <div className="relative z-10 flex flex-col items-center h-full p-7 overflow-hidden text-center transition-all duration-300 border group border-white/15 bg-white/[0.07] backdrop-blur-xl rounded-3xl shadow-lg shadow-black/30 hover:-translate-y-1.5 hover:border-primary/50 hover:bg-white/[0.12] hover:shadow-xl hover:shadow-primary/20">
      <span className="absolute inset-x-6 top-0 h-px transition-opacity duration-300 opacity-0 bg-gradient-to-r from-transparent via-white/50 to-transparent group-hover:opacity-100" />

      <div className="flex items-center justify-center w-16 h-16 mb-5 transition-colors duration-300 border rounded-2xl bg-white/5 border-white/10 group-hover:border-primary/40 group-hover:bg-primary/10">
        <img src={getImage(service.title)} alt='' className="w-8 h-8" />
      </div>
      <h1 className='font-semibold text-white text-[17px] mb-2'>{service.title}</h1>
      <p className="text-sm font-light leading-relaxed text-gray-400">{service.description}</p>
    </div>
  )
}

export default Card
