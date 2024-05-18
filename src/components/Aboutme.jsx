import React from "react";
import "./aboutme.css";
import Profile from "./prifile.png";

export default function Aboutme() {
  return (
    <div>
      <div className="about">
        <div className="profile">
          <img src={Profile} alt="" />
        </div>
        <div className="info">
          {/* <center> */}
            <h2>ABOUT ME</h2>
            <hr />
            <br />
            <div className="para">
              <p>
                I am an undergraduate student studying Computer Science at the
                University of Colombo. Alongside my studies, I have completed a
                web design course, which has honed my skills in creating
                engaging and user-friendly websites. Currently, I serve as the
                webmaster for the EI Club at our university for the 2023/2024
                academic year, managing and maintaining the club's online
                presence. My passion for technology and web development drives
                me to continuously learn and grow in this dynamic field.
              </p>
            </div>
          {/* </center> */}
        </div>
      </div>
    </div>
  );
}
