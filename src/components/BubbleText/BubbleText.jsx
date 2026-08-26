import React, { useCallback, useRef } from "react";

const RADIUS = 40;
const MAX_SCALE = 1.3;

const BubbleText = ({ text, className = "" }) => {
  const containerRef = useRef(null);
  const charRefs = useRef([]);

  const handleMouseMove = useCallback((e) => {
    const mouseX = e.clientX;
    const mouseY = e.clientY;

    charRefs.current.forEach((el) => {
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const charX = rect.left + rect.width / 2;
      const charY = rect.top + rect.height / 2;
      const dist = Math.hypot(mouseX - charX, mouseY - charY);

      if (dist < RADIUS) {
        const t = dist / RADIUS;
        const scale = 1 + (MAX_SCALE - 1) * Math.cos((t * Math.PI) / 2);
        el.style.transform = `scale(${scale})`;
        el.style.zIndex = String(Math.round(scale * 10));
      } else {
        el.style.transform = "scale(1)";
        el.style.zIndex = "0";
      }
    });
  }, []);

  const handleMouseLeave = useCallback(() => {
    charRefs.current.forEach((el) => {
      if (!el) return;
      el.style.transform = "scale(1)";
      el.style.zIndex = "0";
    });
  }, []);

  charRefs.current = [];

  return (
    <span
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`inline ${className}`}
    >
      {text.split("").map((char, i) => (
        <span
          key={i}
          ref={(el) => {
            charRefs.current[i] = el;
          }}
          className="relative inline-block origin-center transition-transform duration-150 ease-out"
          style={{
            whiteSpace: char === " " ? "pre" : "normal",
            marginLeft: "0.5px",
            marginRight: "0.5px",
          }}
        >
          {char}
        </span>
      ))}
    </span>
  );
};

export default BubbleText;
