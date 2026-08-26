import React, { createContext, useContext, useEffect, useState } from "react";
import { defaultPrimaryColor, presetColors } from "../data/themeData";
import { adjustLightness, hexToRgbChannels } from "../utils/color";

const ThemeContext = createContext(null);
const STORAGE_KEY = "portfolio-primary-color";

const BG = "#000000";
const BG_ALT = "#131018";

const applyPrimaryColor = (hex) => {
  const root = document.documentElement;
  root.style.setProperty("--color-primary", hexToRgbChannels(hex));
  root.style.setProperty(
    "--color-primary-light",
    hexToRgbChannels(adjustLightness(hex, 12))
  );
  root.style.setProperty(
    "--color-primary-dark",
    hexToRgbChannels(adjustLightness(hex, -14))
  );
  root.style.setProperty("--color-bg", hexToRgbChannels(BG));
  root.style.setProperty("--color-bg-alt", hexToRgbChannels(BG_ALT));
};

const isValidHex = (value) => /^#[0-9a-fA-F]{6}$/.test(value);

export const ThemeProvider = ({ children }) => {
  const [primaryColor, setPrimaryColorState] = useState(() => {
    if (typeof window === "undefined") return defaultPrimaryColor;
    const stored = window.localStorage.getItem(STORAGE_KEY);
    return stored && isValidHex(stored) ? stored : defaultPrimaryColor;
  });

  useEffect(() => {
    applyPrimaryColor(primaryColor);
    window.localStorage.setItem(STORAGE_KEY, primaryColor);
  }, [primaryColor]);

  const setPrimaryColor = (hex) => {
    if (isValidHex(hex)) setPrimaryColorState(hex);
  };

  return (
    <ThemeContext.Provider
      value={{ primaryColor, setPrimaryColor, presetColors }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used within a ThemeProvider");
  return ctx;
};
