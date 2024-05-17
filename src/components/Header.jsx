import React from "react";
import "./header.css";
import Navbar from "./Navbar";
import Image from "./back.jpg";

export default function Header() {
  return (
    <div>
      <div className="main" style={{ backgroundImage: `url(${Image})`,backgroundRepeat:"no-repeat",backgroundSize:"contain",height:"740px" }}>
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
