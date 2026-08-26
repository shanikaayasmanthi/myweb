import React, { useEffect, useRef, useState } from "react";
import { FaPalette } from "react-icons/fa6";
import { useTheme } from "../../context/ThemeContext";

const ThemeSwitcher = () => {
  const { primaryColor, setPrimaryColor, presetColors } = useTheme();
  const [open, setOpen] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={containerRef}>
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        aria-label="Choose theme color"
        aria-expanded={open}
        className="flex items-center justify-center transition-colors duration-300 border rounded-full group w-9 h-9 md:w-10 md:h-10 border-white/20 bg-white/5 backdrop-blur-sm text-white hover:border-primary hover:text-primary"
      >
        <FaPalette className="text-base transition-transform duration-300 origin-center md:text-lg group-hover:scale-125" />
      </button>

      {open && (
        <div className="absolute right-0 z-50 p-4 mt-3 border rounded-xl border-white/10 bg-black/70 backdrop-blur-2xl shadow-xl shadow-black/40 w-64">
          <p className="mb-3 text-xs font-semibold tracking-wide text-gray-400 uppercase">
            Theme color
          </p>

          <label className="flex items-center gap-3 p-2 transition border rounded-lg cursor-pointer border-white/10 hover:border-primary/50">
            <span
              className="relative w-10 h-10 overflow-hidden border-2 rounded-full shrink-0 border-white/20"
              style={{ backgroundColor: primaryColor }}
            >
              <input
                type="color"
                value={primaryColor}
                onChange={(e) => setPrimaryColor(e.target.value)}
                aria-label="Pick a custom theme color"
                className="absolute inset-0 w-full h-full cursor-pointer opacity-0"
              />
            </span>
            <span className="flex flex-col">
              <span className="text-sm font-medium text-gray-200">
                Pick a color
              </span>
              <span className="font-mono text-xs uppercase text-gray-500">
                {primaryColor}
              </span>
            </span>
          </label>

          <p className="mt-4 mb-2 text-xs font-semibold tracking-wide text-gray-400 uppercase">
            Quick picks
          </p>
          <div className="flex flex-wrap gap-3">
            {presetColors.map((preset) => {
              const active =
                preset.hex.toLowerCase() === primaryColor.toLowerCase();
              return (
                <button
                  key={preset.id}
                  type="button"
                  title={preset.name}
                  aria-label={preset.name}
                  onClick={() => setPrimaryColor(preset.hex)}
                  className={`w-8 h-8 rounded-full border-2 transition ${
                    active
                      ? "border-white scale-110"
                      : "border-transparent hover:scale-110"
                  }`}
                  style={{ backgroundColor: preset.hex }}
                />
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default ThemeSwitcher;
