import React from "react";
import "./header.css";
import Navbar from "./Navbar";
import Image from "./background.jpeg";

export default function Header() {
  return (
    <div>
      <div className="main" style={{ backgroundImage: `url(${Image})` }}>
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
