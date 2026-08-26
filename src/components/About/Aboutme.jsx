import React from "react";
import { motion } from "framer-motion";
import Card from "../Card";
import { serviceData } from "../../data/serviceData";
import { statsData } from "../../data/headerData";
import { useCursorSpotlight } from "../../utils/useCursorSpotlight";
import CursorSpotlight from "../CursorSpotlight/CursorSpotlight";

const Aboutme = () => {
  const spotlight = useCursorSpotlight();

  return (
    <div
      id="about"
      ref={spotlight.containerRef}
      onMouseMove={spotlight.handleMouseMove}
      onMouseLeave={spotlight.handleMouseLeave}
      className="relative overflow-hidden scroll-mt-20"
    >
      <CursorSpotlight
        x={spotlight.spotlightX}
        y={spotlight.spotlightY}
        opacity={spotlight.spotlightOpacity}
      />

      <div className="relative px-5 py-16 md:px-10 md:py-24">
        <h1 className="text-3xl font-bold text-center text-white md:text-4xl">
          Who am I?
        </h1>
        <div className="w-16 h-1 mx-auto mt-4 rounded-full bg-primary" />

        <p className="max-w-3xl mx-auto mt-8 text-sm leading-relaxed text-center text-gray-400 md:text-base">
          I'm a passionate Software Engineer who loves turning ideas into
          functional and visually appealing digital experiences. With a
          strong interest in mobile app development, UI/UX design, and
          hosting, I enjoy crafting seamless applications that not only work
          great but also feel intuitive and engaging. Whether it's building
          dynamic web applications, designing smooth user experiences, or
          optimizing deployments, I'm always eager to explore new
          technologies and create solutions that make an impact. Let's build
          something amazing together.
        </p>

        <div className="relative max-w-3xl mx-auto mt-14">
          <motion.div
            className="absolute inset-x-6 inset-y-2 rounded-[3rem] bg-primary/30 blur-2xl"
            style={{ x: spotlight.blobX, y: spotlight.blobY }}
          />

          <div className="relative grid grid-cols-1 gap-6 sm:grid-cols-2">
            {serviceData.map((service) => (
              <Card key={service.id} service={service} />
            ))}
          </div>

          <div className="relative grid grid-cols-3 gap-6 mt-6">
            {statsData.map((stat) => (
              <div
                key={stat.id}
                className="px-3 py-4 text-center transition border rounded-2xl border-white/10 bg-white/5 backdrop-blur-md hover:border-primary/30"
              >
                <p className="text-2xl font-bold md:text-3xl text-primary">
                  {stat.number}
                </p>
                <p className="mt-1 text-xs text-gray-400 md:text-sm">
                  {stat.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aboutme;
