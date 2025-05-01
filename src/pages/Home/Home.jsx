import React, { useRef } from 'react';
import Landing from '../../components/Landing/Landing';
import Contact from '../../components/Contact/Contact';
import Aboutme from '../../components/About/Aboutme';

export default function Home() {

  const aboutRef = useRef(null);
  const contactRef = useRef(null);

  return (
    <>
      <Landing 
      // aboutRef={aboutRef} contactRef={contactRef}

      />
      {/* <section ref={aboutRef} id='about'><Aboutme/></section>
      <section ref={contactRef} id='cpntact'><Contact/></section> */}
      
    </>
  );
}
