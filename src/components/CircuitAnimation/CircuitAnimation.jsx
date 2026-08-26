import React, { useMemo } from "react";
import { motion } from "framer-motion";

const VIEW_W = 760;
const VIEW_H = 620;
const LINE_COUNT = 16;

const seededRandom = (seed) => {
  let s = seed;
  return () => {
    s = (s * 9301 + 49297) % 233280;
    return s / 233280;
  };
};

const generateLines = (count, seed) => {
  const rand = seededRandom(seed);
  const lines = [];

  for (let i = 0; i < count; i++) {
    const startX = 10 + rand() * (VIEW_W - 20);
    const bends = 4 + Math.floor(rand() * 4);
    const points = [{ x: startX, y: -10 }];
    let curX = startX;
    let curY = -10;

    for (let b = 0; b < bends; b++) {
      if (b % 2 === 0) {
        curY += 60 + rand() * 110;
      } else {
        curX += (rand() > 0.5 ? 1 : -1) * (50 + rand() * 110);
        curX = Math.max(10, Math.min(VIEW_W - 10, curX));
      }
      points.push({ x: curX, y: curY });
    }

    lines.push({
      points,
      d: points
        .map((p, idx) => `${idx === 0 ? "M" : "L"}${p.x},${p.y}`)
        .join(" "),
      duration: 3 + rand() * 3,
      delay: rand() * 4,
    });
  }

  return lines;
};

const evenTimes = (count) =>
  Array.from({ length: count }, (_, i) => i / (count - 1));

const CircuitAnimation = ({ className = "" }) => {
  const lines = useMemo(() => generateLines(LINE_COUNT, 11), []);

  return (
    <div className={`pointer-events-none select-none ${className}`}>
      <svg
        viewBox={`0 0 ${VIEW_W} ${VIEW_H}`}
        preserveAspectRatio="xMidYMin slice"
        className="w-full h-full overflow-visible"
        fill="none"
      >
        {lines.map((line, i) => (
          <motion.path
            key={`line-${i}`}
            d={line.d}
            stroke="rgb(var(--color-primary))"
            strokeWidth="1"
            strokeLinecap="round"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.4 }}
            transition={{ duration: 1.6, delay: i * 0.15, ease: "easeInOut" }}
            style={{ filter: "drop-shadow(0 0 3px rgb(var(--color-primary)))" }}
          />
        ))}

        {lines.flatMap((line, li) =>
          line.points.map((p, pi) => (
            <motion.circle
              key={`node-${li}-${pi}`}
              cx={p.x}
              cy={p.y}
              r="2.2"
              fill="rgb(var(--color-primary))"
              animate={{ opacity: [0.2, 0.85, 0.2], scale: [1, 1.3, 1] }}
              transition={{
                duration: 2.6,
                repeat: Infinity,
                delay: ((li + pi) % 7) * 0.35,
                ease: "easeInOut",
              }}
              style={{ filter: "drop-shadow(0 0 4px rgb(var(--color-primary)))" }}
            />
          ))
        )}

        {lines.map((line, i) => (
          <motion.circle
            key={`pulse-${i}`}
            r="2.6"
            fill="#ffffff"
            initial={{ cx: line.points[0].x, cy: line.points[0].y, opacity: 0 }}
            animate={{
              cx: line.points.map((p) => p.x),
              cy: line.points.map((p) => p.y),
              opacity: line.points.map((_, idx) =>
                idx === 0 || idx === line.points.length - 1 ? 0 : 1
              ),
            }}
            transition={{
              duration: line.duration,
              delay: line.delay,
              repeat: Infinity,
              ease: "linear",
              times: evenTimes(line.points.length),
            }}
            style={{ filter: "drop-shadow(0 0 6px rgb(var(--color-primary)))" }}
          />
        ))}
      </svg>
    </div>
  );
};

export default CircuitAnimation;
