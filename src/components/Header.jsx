// // import React from "react";
// // import "./header.css";
// // import Navbar from "./Navbar/Navbar";
// // import Image from "./back.jpg";

// // export default function Header() {
// //   return (
// //     <div>
// //       <div className="main" style={{ backgroundImage: `url(${Image})`,backgroundRepeat:"no-repeat",backgroundSize:"cover",height:"550px",opacity:"0.9" }}>
// //         <Navbar />
// //         <center>
// //           <div className="description">
// //             <div className="name">
// //               Hello!
// //               <br />
// //               <span>I'm Shanika Ayasmanthi</span>{" "}
// //             </div>
// //             <div className="note">Undergraduater in Computer Science</div>
// //           </div>
// //         </center>
// //       </div>
// //     </div>
// //   );
// // }
// import React, { useEffect, useRef, useState } from "react";
// import { forceSimulation, forceManyBody, forceCollide, forceX, forceY } from "d3-force";
// import { motion } from "framer-motion";

// const items = Array.from({ length: 30 }, (_, i) => ({ id: i, label: `Item ${i + 1}` }));

// const BubbleMenu = () => {
//   const svgRef = useRef(null);
//   const [nodes, setNodes] = useState(items);
//   const [hovered, setHovered] = useState(null);

//   useEffect(() => {
//     const simulation = forceSimulation(nodes)
//       .force("charge", forceManyBody().strength(-30))
//       .force("centerX", forceX(0).strength(0.1))
//       .force("centerY", forceY(0).strength(0.1))
//       .force("collide", forceCollide(25))
//       .on("tick", () => setNodes((prevNodes) => [...prevNodes])); // 👈 Functional update

//     return () => simulation.stop();
//   }, []); // 👈 Dependency array remains empty to avoid unnecessary re-renders

//   const handleMouseMove = (event) => {
//     const { clientX, clientY } = event;
//     setNodes((prevNodes) =>
//       prevNodes.map(node => {
//         const dx = node.x - clientX;
//         const dy = node.y - clientY;
//         const distance = Math.sqrt(dx * dx + dy * dy);
//         const moveFactor = Math.max(50 - distance, 0) * 0.2;
//         return {
//           ...node,
//           x: node.x + dx * moveFactor,
//           y: node.y + dy * moveFactor,
//         };
//       })
//     );
//   };

//   return (
//     <svg ref={svgRef} width={500} height={500} className="bg-gray-100" onMouseMove={handleMouseMove}>
//       {nodes.map(node => (
//         <motion.circle
//           key={node.id}
//           cx={node.x || 250}
//           cy={node.y || 250}
//           r={hovered === node.id ? 30 : 20}
//           fill={hovered === node.id ? "orange" : "steelblue"}
//           onMouseEnter={() => setHovered(node.id)}
//           onMouseLeave={() => setHovered(null)}
//           animate={{ scale: hovered === node.id ? 1.3 : 1 }}
//           transition={{ type: "spring", stiffness: 100, damping: 10 }}
//         />
//       ))}
//     </svg>
//   );
// };

// export default BubbleMenu;