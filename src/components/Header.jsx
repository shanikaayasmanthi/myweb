import React from "react";
import "./header.css";
import Navbar from "./Navbar/Navbar";
import Image from "./back.jpg";

export default function Header() {
  return (
    <div>
      <div className="main" style={{ backgroundImage: `url(${Image})`,backgroundRepeat:"no-repeat",backgroundSize:"cover",height:"550px",opacity:"0.9" }}>
        <Navbar />
        <center>
          <div className="description">
            <div className="name">
              Hello!
              <br />
              <span>I'm Shanika Ayasmanthi</span>{" "}
            </div>
            <div className="note">Undergraduater in Computer Science</div>
          </div>
        </center>
      </div>
    </div>
  );
}
