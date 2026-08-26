import React from "react";
import { motion } from "framer-motion";
import { FaGraduationCap } from "react-icons/fa6";
import { educationData } from "../../data/educationData";
import { useCursorSpotlight } from "../../utils/useCursorSpotlight";
import CursorSpotlight from "../CursorSpotlight/CursorSpotlight";

const Education = () => {
  const spotlight = useCursorSpotlight();

  return (
    <section
      id="education"
      ref={spotlight.containerRef}
      onMouseMove={spotlight.handleMouseMove}
      onMouseLeave={spotlight.handleMouseLeave}
      className="relative px-5 py-16 overflow-hidden md:px-10 md:py-24 scroll-mt-20"
    >
      <CursorSpotlight
        x={spotlight.spotlightX}
        y={spotlight.spotlightY}
        opacity={spotlight.spotlightOpacity}
      />

      <div className="relative max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-white md:text-4xl">
          Education
        </h2>
        <div className="w-16 h-1 mx-auto mt-4 rounded-full bg-primary" />

        <div className="relative mt-14">
          <motion.div
            className="absolute inset-x-6 inset-y-2 rounded-[3rem] bg-primary/25 blur-2xl"
            style={{ x: spotlight.blobX, y: spotlight.blobY }}
          />

          <div className="relative flex flex-wrap justify-center gap-6">
            {educationData.map((edu) => (
              <div
                key={edu.id}
                className="relative flex flex-col w-full max-w-sm p-6 overflow-hidden text-center transition-all duration-300 border group sm:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)] md:text-left border-white/15 bg-white/[0.07] backdrop-blur-xl rounded-3xl shadow-lg shadow-black/30 hover:-translate-y-1.5 hover:border-primary/50 hover:bg-white/[0.12] hover:shadow-xl hover:shadow-primary/20"
              >
                <span className="absolute inset-x-6 top-0 h-px transition-opacity duration-300 opacity-0 bg-gradient-to-r from-transparent via-white/50 to-transparent group-hover:opacity-100" />

                <div className="flex items-center justify-center w-12 h-12 mx-auto mb-4 transition-colors duration-300 border rounded-2xl md:mx-0 bg-white/5 border-white/10 text-primary group-hover:border-primary/40 group-hover:bg-primary/10">
                  <FaGraduationCap className="text-xl" />
                </div>
                <span className="mb-2 text-xs font-semibold tracking-wide md:self-start text-primary">
                  {edu.duration}
                </span>
                <h3 className="text-base font-semibold leading-snug text-white md:text-lg">
                  {edu.degree}
                </h3>
                <p className="mt-1 text-sm text-gray-400">{edu.institution}</p>
                {edu.details && (
                  <p className="mt-3 text-xs text-gray-500">{edu.details}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
