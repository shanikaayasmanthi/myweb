import { useRef } from "react";
import { useMotionValue, useSpring, useTransform } from "framer-motion";

export const useCursorSpotlight = () => {
  const containerRef = useRef(null);

  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const centeredX = useMotionValue(0);
  const centeredY = useMotionValue(0);

  const spotlightX = useSpring(pointerX, { damping: 22, stiffness: 120, mass: 0.4 });
  const spotlightY = useSpring(pointerY, { damping: 22, stiffness: 120, mass: 0.4 });
  const spotlightOpacity = useSpring(0, { damping: 20, stiffness: 100 });

  const parallaxX = useSpring(centeredX, { damping: 30, stiffness: 40 });
  const parallaxY = useSpring(centeredY, { damping: 30, stiffness: 40 });

  const blobX = useTransform(parallaxX, (v) => v * 0.05);
  const blobY = useTransform(parallaxY, (v) => v * 0.05);

  const handleMouseMove = (e) => {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const relX = e.clientX - rect.left;
    const relY = e.clientY - rect.top;
    pointerX.set(relX);
    pointerY.set(relY);
    centeredX.set(relX - rect.width / 2);
    centeredY.set(relY - rect.height / 2);
    spotlightOpacity.set(1);
  };

  const handleMouseLeave = () => {
    spotlightOpacity.set(0);
    centeredX.set(0);
    centeredY.set(0);
  };

  return {
    containerRef,
    spotlightX,
    spotlightY,
    spotlightOpacity,
    blobX,
    blobY,
    handleMouseMove,
    handleMouseLeave,
  };
};
