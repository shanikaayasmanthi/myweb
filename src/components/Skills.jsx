// import React, { useState, useEffect ,useRef} from "react";
// import { motion } from "framer-motion";
// import {skillData} from '../data/skillData';


// const FloatingWords = () => {
//   const parentRef = useRef(null);
//   const [positions, setPositions] = useState([]);
//   const [visible, setVisible] = useState(skillData.map(() => true));
//   const [parentSize, setParentSize] = useState({ width: 0, height: 0 });

//   // Function to get a random position inside the parent div
//   const getRandomPosition = () => ({
//     x: Math.random() * (parentSize.width - 150), // Leave space for text
//     y: Math.random() * (parentSize.height - 50)  // Leave space for text
//   });

//   // Update parent div size on mount & resize
//   useEffect(() => {
//     const updateSize = () => {
//       if (parentRef.current) {
//         setParentSize({
//           width: parentRef.current.clientWidth,
//           height: parentRef.current.clientHeight
//         });
//       }
//     };

//     updateSize(); // Initial size
//     window.addEventListener("resize", updateSize); // Update on resize

//     return () => window.removeEventListener("resize", updateSize);
//   }, []);

//   // Set initial positions when parent size is available
//   useEffect(() => {
//     if (parentSize.width > 0 && parentSize.height > 0) {
//       setPositions(skillData.map(() => getRandomPosition()));
//     }
//   }, [parentSize]);

//   useEffect(() => {
//     const intervals = skillData.map((_, index) => {
//       return setInterval(() => {
//         setVisible((prev) => {
//           const newVisible = [...prev];
//           newVisible[index] = false; // Fade out
//           return newVisible;
//         });

//         setTimeout(() => {
//           setPositions((prev) => {
//             const newPositions = [...prev];
//             newPositions[index] = getRandomPosition(); // Change position
//             return newPositions;
//           });

//           setVisible((prev) => {
//             const newVisible = [...prev];
//             newVisible[index] = true; // Fade in at new position
//             return newVisible;
//           });
//         }, 1000); // Wait 1s before fading in at new position
//       }, Math.random() * 3000 + 2000); // Each element has a different random interval
//     });

//     return () => intervals.forEach(clearInterval);
//   }, [parentSize]);

//   return (
//     <div ref={parentRef} className="relative w-full p-5 overflow-hidden text-orange-400 rounded-full ">
//       {positions.length > 0 &&
//         skillData.map((word, index) => (
//           <motion.div
//             key={word}
//             animate={{
//               opacity: visible[index] ? 1 : 0,
//               x: positions[index]?.x || 0,
//               y: positions[index]?.y || 0
//             }}
//             transition={{ duration: 1 }}
//             className="text-lg font-thin w-fit "
//             style={{ whiteSpace: "wrap" }} // Prevent text wrapping
//           >
//             {word}
//           </motion.div>
//         ))}
//     </div>
//   );
// };

// export default FloatingWords;