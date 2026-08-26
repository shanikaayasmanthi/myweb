import React, { useRef, useState } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import { FaEnvelope, FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa6";
import { headerData } from "../../data/headerData";
import { downloadCv } from "../../utils/downloadCv";
import BubbleText from "../BubbleText/BubbleText";
import CodeTypewriter from "../CodeTypewriter/CodeTypewriter";
import CircuitAnimation from "../CircuitAnimation/CircuitAnimation";

const socialLinks = [
  { key: "gmail", icon: FaEnvelope, label: "Email" },
  { key: "linkedIn", icon: FaLinkedin, label: "LinkedIn" },
  { key: "github", icon: FaGithub, label: "GitHub" },
  { key: "facebook", icon: FaFacebook, label: "Facebook" },
];

const scrollToContact = (e) => {
  e.preventDefault();
  document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
};

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const Landing = () => {
  const [avatarLoaded, setAvatarLoaded] = useState(false);
  const sectionRef = useRef(null);

  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const centeredX = useMotionValue(0);
  const centeredY = useMotionValue(0);

  const spotlightX = useSpring(pointerX, { damping: 22, stiffness: 120, mass: 0.4 });
  const spotlightY = useSpring(pointerY, { damping: 22, stiffness: 120, mass: 0.4 });
  const spotlightOpacity = useSpring(0, { damping: 20, stiffness: 100 });

  const parallaxX = useSpring(centeredX, { damping: 30, stiffness: 40 });
  const parallaxY = useSpring(centeredY, { damping: 30, stiffness: 40 });

  const blob1X = useTransform(parallaxX, (v) => v * 0.05);
  const blob1Y = useTransform(parallaxY, (v) => v * 0.05);
  const blob2X = useTransform(parallaxX, (v) => v * -0.04);
  const blob2Y = useTransform(parallaxY, (v) => v * -0.04);

  const handleMouseMove = (e) => {
    const rect = sectionRef.current.getBoundingClientRect();
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

  return (
    <section
      id="home"
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative flex items-center min-h-screen pt-32 pb-16 overflow-hidden scroll-mt-20"
    >
      <motion.div
        className="absolute rounded-full pointer-events-none w-[420px] h-[420px] bg-primary/15 blur-[90px]"
        style={{
          left: 0,
          top: 0,
          x: spotlightX,
          y: spotlightY,
          translateX: "-50%",
          translateY: "-50%",
          opacity: spotlightOpacity,
        }}
      />
      <motion.div
        className="absolute rounded-full pointer-events-none -top-20 -left-20 w-72 h-72 bg-primary/20 blur-3xl"
        style={{ x: blob1X, y: blob1Y }}
        animate={{ opacity: [0.6, 1, 0.6], scale: [1, 1.15, 1] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute rounded-full pointer-events-none bottom-0 right-0 w-96 h-96 bg-primary/10 blur-3xl"
        style={{ x: blob2X, y: blob2Y }}
        animate={{ opacity: [0.5, 0.9, 0.5], scale: [1, 1.1, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />

      <CircuitAnimation className="absolute -top-4 left-0 w-full h-[520px] sm:h-[580px] md:h-[640px] lg:w-[60%] opacity-90" />

      <div className="relative z-10 grid items-center max-w-6xl gap-14 px-5 mx-auto md:px-10 lg:grid-cols-2">
        <motion.div
          className="flex flex-col items-center text-center lg:items-start lg:text-left"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.p
            variants={itemVariants}
            className="text-sm font-medium tracking-widest text-gray-400 uppercase md:text-base"
          >
            Hi, I am
          </motion.p>
          <motion.h2
            variants={itemVariants}
            className="mt-2 text-2xl font-bold text-white md:text-3xl"
          >
            {headerData.name}
          </motion.h2>
          <motion.h1
            variants={itemVariants}
            className="mt-3 text-4xl font-extrabold leading-tight text-white md:text-6xl"
          >
            Software <span className="text-primary">Engineer</span>
          </motion.h1>
          <motion.p
            variants={itemVariants}
            className="max-w-xl mt-5 text-sm leading-relaxed text-gray-400 md:text-base"
          >
            {headerData.desciption}
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex items-center justify-center gap-4 mt-6 lg:justify-start"
          >
            {socialLinks.map(({ key, icon: Icon, label }) =>
              headerData.social[key] ? (
                <a
                  key={key}
                  href={headerData.social[key]}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex items-center justify-center w-10 h-10 text-gray-300 transition-colors duration-300 border rounded-full group border-white/15 bg-white/5 backdrop-blur-md hover:border-primary hover:text-primary hover:bg-white/10"
                >
                  <Icon className="text-base transition-transform duration-300 origin-center group-hover:scale-125" />
                </a>
              ) : null
            )}
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="flex flex-wrap items-center justify-center gap-4 mt-8 lg:justify-start"
          >
            <a
              href="#contact"
              onClick={scrollToContact}
              className="relative px-6 py-3 text-sm font-semibold text-white transition-all duration-300 border rounded-full border-white/20 bg-primary/80 backdrop-blur-md shadow-lg shadow-primary/30 hover:bg-primary/90 hover:shadow-primary/50 hover:-translate-y-0.5"
            >
              <span className="absolute h-px inset-x-4 top-0 bg-gradient-to-r from-transparent via-white/50 to-transparent" />
              <BubbleText text="Let's Talk" />
            </a>
            <button
              onClick={downloadCv}
              className="px-6 py-3 text-sm font-semibold text-white transition-all duration-300 border rounded-full border-white/25 bg-white/5 backdrop-blur-md hover:border-primary hover:text-primary hover:-translate-y-0.5"
            >
              <BubbleText text="Download CV" />
            </button>
          </motion.div>
        </motion.div>

        <motion.div
          className="flex items-center justify-center"
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
        >
          <motion.div
            className="relative flex items-center justify-center"
            animate={{ y: [0, -14, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className="absolute rounded-full w-64 h-64 md:w-80 md:h-80 bg-primary/30 blur-3xl" />

            <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none">
              <div className="w-[320px] sm:w-[420px] md:w-[560px] shrink-0 translate-x-[260px] sm:translate-x-[310px] md:translate-x-[420px] lg:translate-x-[455px] opacity-40">
                <CodeTypewriter />
              </div>
            </div>

            <div className="relative z-10 w-56 h-56 overflow-hidden bg-black border-4 rounded-full md:w-80 md:h-80 lg:w-96 lg:h-96 border-primary/40">
              {!avatarLoaded && (
                <div className="absolute inset-0 rounded-full skeleton-shimmer" />
              )}
              <img
                src={headerData.image}
                alt={headerData.name}
                onLoad={() => setAvatarLoaded(true)}
                className={`object-cover w-full h-full transition-opacity duration-500 ${
                  avatarLoaded ? "opacity-100" : "opacity-0"
                }`}
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Landing;
