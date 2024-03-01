"use client";

import dynamic from "next/dynamic";
import React, { useEffect, useState } from "react";
import { FiSun, FiMoon } from "react-icons/fi";
//import { useTheme } from "next-themes";

const useTheme = dynamic(() => import("next-themes"), {
  ssr: false
});

const ThemeToggle = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div
      className="fixed bottom-5 right-5 bg-opacity-80 backdrop-blur-[0.5rem] hover:scale-[1.15] active:scale-105 transition-all z-20 cursor-pointer"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
    >
      {theme === "dark" ? (
        <div className="bg-[#1c2749] rounded-full shadow-md shadow-black">
          <FiSun size={38} stroke="#eab308" fill="#eab308" className="p-2" />
        </div>
      ) : (
        <div className="bg-gray-100 rounded-full shadow-md shadow-gray-500">
          <FiMoon size={38} stroke="#2563eb" fill="#2563eb" className="p-2" />
        </div>
      )}
    </div>
  );
};

export default ThemeToggle;
