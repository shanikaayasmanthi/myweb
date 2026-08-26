import React from "react";
import { motion } from "framer-motion";

const CursorSpotlight = ({ x, y, opacity, size = 420 }) => (
  <motion.div
    className="absolute rounded-full pointer-events-none bg-primary/15"
    style={{
      left: 0,
      top: 0,
      width: size,
      height: size,
      filter: "blur(90px)",
      x,
      y,
      translateX: "-50%",
      translateY: "-50%",
      opacity,
    }}
  />
);

export default CursorSpotlight;
