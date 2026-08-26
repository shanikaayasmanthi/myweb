import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Landing from "../../components/Landing/Landing";
import Aboutme from "../../components/About/Aboutme";
import Experience from "../../components/Experience/Experience";
import Education from "../../components/Education/Education";
import Contact from "../../components/Contact/Contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <Landing />
      <Aboutme />
      <Experience />
      <Education />
      <Contact />
    </>
  );
}
