import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaXmark } from "react-icons/fa6";
import { navData } from "../../data/navData";
import { downloadCv } from "../../utils/downloadCv";
import ThemeSwitcher from "../ThemeSwitcher/ThemeSwitcher";
import BubbleText from "../BubbleText/BubbleText";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [menuOpen]);

  const handleNavClick = (e, link) => {
    e.preventDefault();
    setMenuOpen(false);
    const target = document.querySelector(link);
    if (target) target.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-black/40 backdrop-blur-2xl border-b border-white/10 py-3 shadow-lg shadow-black/20"
            : "bg-transparent py-5"
        }`}
      >
        <nav className="flex items-center justify-between max-w-6xl px-5 mx-auto md:px-10">
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, "#home")}
            className="text-xl font-extrabold tracking-tight text-white md:text-2xl"
          >
            Shanika<span className="text-primary">.</span>
          </a>

          <div className="items-center hidden gap-2 md:flex">
            {navData.map((item) => (
              <a
                key={item.name}
                href={item.link}
                onClick={(e) => handleNavClick(e, item.link)}
                className="relative px-3 py-1.5 text-sm font-medium text-gray-300 transition-colors duration-300 group hover:text-primary"
              >
                <span className="absolute inset-0 transition-all duration-300 scale-75 rounded-full opacity-0 pointer-events-none bg-white/10 backdrop-blur-md group-hover:opacity-100 group-hover:scale-100" />
                <BubbleText text={item.name} className="relative" />
              </a>
            ))}
          </div>

          <div className="items-center hidden gap-4 md:flex">
            <ThemeSwitcher />
            <button
              onClick={downloadCv}
              className="relative px-5 py-2 text-sm font-semibold text-white transition-all duration-300 border rounded-full border-white/20 bg-primary/80 backdrop-blur-md shadow-lg shadow-primary/30 hover:bg-primary/90 hover:shadow-primary/50"
            >
              <span className="absolute h-px inset-x-4 top-0 bg-gradient-to-r from-transparent via-white/50 to-transparent" />
              <BubbleText text="Download CV" />
            </button>
          </div>

          <div className="flex items-center gap-3 md:hidden">
            <ThemeSwitcher />
            <button
              type="button"
              aria-label="Open menu"
              onClick={() => setMenuOpen(true)}
              className="flex items-center justify-center w-10 h-10 text-white"
            >
              <FaBars className="text-2xl" />
            </button>
          </div>
        </nav>
      </header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[60] flex flex-col items-center justify-center gap-10 bg-black/70 backdrop-blur-2xl md:hidden"
          >
            <button
              type="button"
              aria-label="Close menu"
              onClick={() => setMenuOpen(false)}
              className="absolute text-white top-6 right-6"
            >
              <FaXmark className="text-3xl" />
            </button>

            {navData.map((item) => (
              <a
                key={item.name}
                href={item.link}
                onClick={(e) => handleNavClick(e, item.link)}
                className="relative px-5 py-2 text-2xl font-semibold text-gray-100 transition-colors duration-300 group hover:text-primary"
              >
                <span className="absolute inset-0 transition-all duration-300 scale-75 rounded-full opacity-0 pointer-events-none bg-white/10 backdrop-blur-md group-hover:opacity-100 group-hover:scale-100" />
                <BubbleText text={item.name} className="relative" />
              </a>
            ))}

            <button
              onClick={() => {
                setMenuOpen(false);
                downloadCv();
              }}
              className="relative px-6 py-3 text-base font-semibold text-white transition-all duration-300 border rounded-full border-white/20 bg-primary/80 backdrop-blur-md shadow-lg shadow-primary/30 hover:bg-primary/90 hover:shadow-primary/50"
            >
              <span className="absolute h-px inset-x-4 top-0 bg-gradient-to-r from-transparent via-white/50 to-transparent" />
              <BubbleText text="Download CV" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
