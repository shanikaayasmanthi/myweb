import React from 'react'
import './navbar.css'

import { FaGithub } from 'react-icons/fa';
import { FaFacebook } from 'react-icons/fa';
import { FaWhatsapp } from 'react-icons/fa';
import { FaEnvelope } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';

export default function Navbar() {
  return (
    <div>
        <div className="social-media-icon">
          <div><FaGithub className='icon'/></div>
          <div><FaFacebook className='icon'/></div>
          <div><FaWhatsapp className='icon'/></div>
          <div><FaEnvelope className='icon'/></div>
          <div><FaLinkedin className='icon'/></div>
        </div>
      </div>
  )
}
