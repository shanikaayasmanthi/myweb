import React from 'react'
// import './navbar.css'

// import { FaGithub } from 'react-icons/fa';
// import { FaFacebook } from 'react-icons/fa';
// import { FaWhatsapp } from 'react-icons/fa';
// import { FaEnvelope } from 'react-icons/fa';
// import { FaLinkedin } from 'react-icons/fa';

// const icons =[
//   {name:"whatsapp", icon:"FaWhatsapp"},
//   {name:"github", icon:"FaGithub"},
//   {name:"gmail", icon:"FaEnvelope"},
//   {name:"linkedin", icon:"FaLinkedin"},
//   {name:"facebook", icon:"FaFacebook"}
// ];

const navbarItems=[
  {name:"Home", link:""},
  {name:"About", link:""},
  {name:"Project", link:""},
  {name:"Skill", link:""},
  {name:"Contact", link:""}
];

// function geticon(icon){
//   switch (icon) {
//     case 'FaWhatsapp':
//       return FaWhatsapp;
//     case 'FaGithub':
//       return FaGithub;
//     case 'FaEnvelope':
//       return FaEnvelope;
//     case 'FaLinkedin':
//       return FaLinkedin;
//     case 'FaFacebook':
//       return FaFacebook;
//     default:
//       break;
//   }
// }

export default function Navbar() {
  return (
    <div>
        <div className="items-end">
          {/* <div className="flex gap-5">
            {icons.map((item, index) => {
              const IconComponent = geticon(item.icon);
              return (
                <div key={index}>
                  {IconComponent && <IconComponent className="text-white cursor-pointer hover:text-[#aea6a6]" />}
                </div>
              );
            })}
          </div> */}
          <div className="items-end p-5 pr-4">
            <ul className="inline-flex items-end space-x-10 text-xl font-semibold text-white">
              {navbarItems.map((navbarItem,index)=>(
                <li key={index} className="mx-2 cursor-pointer hover:text-[#aea6a6]">{navbarItem.name}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
  )
}
