"use client";
import { useEffect, useState } from "react";

export default function ThemeSwitcher() {
  const [dark, setDark] = useState(false);
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme == "dark-mode") {
      setDark(true);
      document.body.classList.add("dark-mode");
    }
  }, []);
  useEffect(() => {
    if (dark) {
      localStorage.setItem("theme", "dark-mode");
      document.body.classList.add("dark-mode");
    } else {
      localStorage.removeItem("theme");
      document.body.classList.remove("dark-mode");
    }
  }, [dark]);
    const toggleTheme = () => {
    setDark((prev) => !prev);
  };
  return (
    <button
      className="theme-switcher"
      id="theme-switcher"
      onClick={toggleTheme}
    >
      Change theme
    </button>
  );
}
