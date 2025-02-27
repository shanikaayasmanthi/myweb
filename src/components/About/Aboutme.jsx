import React from "react";
import Card from "../Card";
import {serviceData} from '../../data/serviceData';

const Aboutme = () => {
  return (
    <div className="bg-black ">
      <div className="mx-8 border-b-4 border-orange-600 md:justify-center md:flex md:mx-20 md:pt-16"></div>
      <div className="py-5 md:px-28 md:py-10 md:items-center md:justify-between">
        <div className="text-white ">
          <h1 className="text-3xl font-bold text-center md:text-4xl ">Who am I?</h1>
          <div className="px-5">
          <p className="py-6 mx-4 text-justify md:p-3 md:text-lg">I'm a passionate Software Engineer who loves turning ideas into functional and visually appealing digital experiences. With a strong interest in mobile app development, UI/UX design, and hosting, I enjoy crafting seamless applications that not only work great but also feel intuitive and engaging.
Whether it's building dynamic web applications, designing smooth user experiences, or optimizing deployments, I'm always eager to explore new technologies and create solutions that make an impact.
Let’s build something amazing together.</p>
          </div>
          
        </div>
        <div className="flex flex-wrap justify-center py-5">
          {serviceData.map((service)=>(
            <Card service={service}/>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Aboutme;

// import React from "react";
// import "./aboutme.css";
// import Profile from "./prifile.png";
// import { FaReact } from "react-icons/fa";

// export default function Aboutme() {
//   return (
//     <div>
//       <div className="about">
//         <div className="profile">
//           <img src={Profile} alt="" />
//         </div>
//         <div className="info">
//           {/* <center> */}
//           <h2>ABOUT ME</h2>
//           <hr />
//           <br />
//           <div className="para">
//             <p>
//               I am an undergraduate student studying Computer Science at the
//               University of Colombo. Alongside my studies, I have completed a
//               web design course, which has honed my skills in creating engaging
//               and user-friendly websites. Currently, I serve as the webmaster
//               for the EI Club at our university for the 2023/2024 academic year,
//               managing and maintaining the club's online presence. My passion
//               for technology and web development drives me to continuously learn
//               and grow in this dynamic field.
//             </p>
//           </div>
//           <div className="details">
//             <h4>
//               NAME:<span>P. Shanika Ayasmanthi</span>
//             </h4>
//             <h4>
//               DATE OF BIRTH:<span>01.08.2000</span>
//             </h4>
//             <h4>
//               NATIONALITY:<span>Citizen of Sri Lanka</span>
//             </h4>
//             <h4>
//               E-MAIL:<span>ayasmanthi@gmai.com</span>
//             </h4>
//           </div>
//           {/* </center> */}
//         </div>
//       </div>
//     </div>
//   );
// }
