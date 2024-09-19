"use client";
import React, { useState, useEffect } from "react";
import { MdDarkMode } from "react-icons/md";
import { MdOutlineLightMode } from "react-icons/md";

export default function Theme() {
  const [darkMode, setDarkMode] = useState(true);
  useEffect(() => {
    const theme = localStorage.getItem("theme");
    if (theme === "dark") {
      setDarkMode(true);
    }
  }, []);
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark")
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);
  return (
    <div onClick={() => setDarkMode(!darkMode)} className="cursor-pointer fixed  bottom-1/2 sm:px-5  z-[99999] sm:bottom-4">
      {darkMode ? <MdDarkMode size={30} /> : <MdOutlineLightMode size={30} className="text-green-400" />}
    </div>
  );
}
