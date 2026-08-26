import React from "react";
import { motion } from "framer-motion";
import { experienceData } from "../../data/experienceData";
import { useCursorSpotlight } from "../../utils/useCursorSpotlight";
import CursorSpotlight from "../CursorSpotlight/CursorSpotlight";

const Experience = () => {
  const spotlight = useCursorSpotlight();

  return (
    <section
      id="experience"
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

      <div className="relative max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-white md:text-4xl">
          Experience
        </h2>
        <div className="w-16 h-1 mx-auto mt-4 rounded-full bg-primary" />

        <div className="relative mt-14">
          <motion.div
            className="absolute inset-x-0 -inset-y-6 rounded-[3rem] bg-primary/15 blur-2xl"
            style={{ x: spotlight.blobX, y: spotlight.blobY }}
          />

          <div className="relative">
            <div className="absolute inset-y-0 w-px left-4 md:left-1/2 md:-translate-x-1/2 bg-white/10" />

            <div className="space-y-10 md:space-y-14">
              {experienceData.map((exp, index) => {
                const isLeft = index % 2 === 0;
                const card = (
                  <div className="relative p-6 overflow-hidden transition-all duration-300 border group border-white/10 bg-white/[0.06] backdrop-blur-xl rounded-2xl shadow-lg shadow-black/30 hover:border-primary/40 hover:bg-white/[0.1] hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/10">
                    <span className="absolute inset-x-6 top-0 h-px transition-opacity duration-300 opacity-0 bg-gradient-to-r from-transparent via-white/40 to-transparent group-hover:opacity-100" />

                    <div className="flex flex-col gap-1 mb-2 md:flex-row md:items-baseline md:justify-between">
                      <h3 className="text-lg font-semibold text-white md:text-xl">
                        {exp.role}
                      </h3>
                      <span className="text-xs font-medium tracking-wide md:text-sm text-primary whitespace-nowrap">
                        {exp.duration}
                      </span>
                    </div>
                    <p className="mb-3 text-sm font-medium text-gray-400">
                      {exp.company}
                    </p>
                    <ul className="space-y-2">
                      {exp.points.map((point, idx) => (
                        <li
                          key={idx}
                          className="flex gap-2 text-sm leading-relaxed text-gray-300"
                        >
                          <span className="mt-0.5 text-primary">▹</span>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                );

                return (
                  <div
                    key={exp.id}
                    className="relative pl-10 md:pl-0 md:grid md:grid-cols-2 md:gap-x-12"
                  >
                    <span className="absolute top-8 w-3.5 h-3.5 left-[9px] md:left-1/2 md:-translate-x-1/2 rounded-full bg-primary ring-4 ring-black" />

                    {isLeft ? (
                      <>
                        <div>{card}</div>
                        <div className="hidden md:block" />
                      </>
                    ) : (
                      <>
                        <div className="hidden md:block" />
                        <div>{card}</div>
                      </>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
