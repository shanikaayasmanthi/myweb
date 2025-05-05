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
    <div className="p-8 text-white bg-orange-600 place-items-center w-[300px] h-[250px] m-2 items-center">
    <img src={getImage(service.title)} alt='' className="w-20 h-20 p-2 border"/>
      <h1 className='font-bold text-center text-[17px] py-1'> {service.title}</h1>
      <p className="font-thin text-justify text-md text-slate-100">{service.description}</p>
    </div>
  )
}

export default Card
