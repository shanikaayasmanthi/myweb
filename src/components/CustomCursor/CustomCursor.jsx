import React, { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

const INTERACTIVE_SELECTOR =
  "a, button, input, textarea, select, [role='button'], .cursor-hover";

const CustomCursor = () => {
  const [enabled, setEnabled] = useState(false);
  const [visible, setVisible] = useState(false);
  const [hovering, setHovering] = useState(false);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const smoothX = useSpring(cursorX, { damping: 32, stiffness: 420, mass: 0.35 });
  const smoothY = useSpring(cursorY, { damping: 32, stiffness: 420, mass: 0.35 });

  useEffect(() => {
    const isFinePointer =
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(pointer: fine)").matches;

    if (!isFinePointer) return;

    setEnabled(true);
    document.body.classList.add("custom-cursor-active");

    const handleMove = (e) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      setVisible(true);
    };
    const handleLeaveWindow = () => setVisible(false);
    const handleOver = (e) => {
      if (e.target.closest && e.target.closest(INTERACTIVE_SELECTOR)) {
        setHovering(true);
      }
    };
    const handleOut = (e) => {
      if (e.target.closest && e.target.closest(INTERACTIVE_SELECTOR)) {
        setHovering(false);
      }
    };

    window.addEventListener("mousemove", handleMove);
    document.documentElement.addEventListener("mouseleave", handleLeaveWindow);
    document.addEventListener("mouseover", handleOver);
    document.addEventListener("mouseout", handleOut);

    return () => {
      document.body.classList.remove("custom-cursor-active");
      window.removeEventListener("mousemove", handleMove);
      document.documentElement.removeEventListener(
        "mouseleave",
        handleLeaveWindow
      );
      document.removeEventListener("mouseover", handleOver);
      document.removeEventListener("mouseout", handleOut);
    };
  }, [cursorX, cursorY]);

  if (!enabled) return null;

  return (
    <motion.div
      className="fixed top-0 left-0 z-[9999] pointer-events-none"
      style={{ x: smoothX, y: smoothY, translateX: "-50%", translateY: "-50%" }}
    >
      <motion.div
        className="absolute -translate-x-1/2 -translate-y-1/2 border rounded-full top-1/2 left-1/2 border-primary"
        animate={{
          width: hovering ? 52 : 30,
          height: hovering ? 52 : 30,
          opacity: visible ? (hovering ? 0.9 : 0.45) : 0,
          backgroundColor: hovering
            ? "rgb(var(--color-primary) / 0.12)"
            : "rgb(var(--color-primary) / 0)",
        }}
        transition={{ duration: 0.2, ease: "easeOut" }}
      />
      <div
        className="absolute w-2 h-2 -translate-x-1/2 -translate-y-1/2 rounded-full top-1/2 left-1/2 bg-primary"
        style={{ opacity: visible ? 1 : 0, transition: "opacity 0.15s" }}
      />
    </motion.div>
  );
};

export default CustomCursor;
