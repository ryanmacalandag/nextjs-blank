"use client";

import { useDarkModeContext } from "@/app/_providers/DarkModeContext";
import { RiMoonFill, RiSunFill } from "react-icons/ri";

function DarkModeToggle() {
  const { isDarkMode, setIsDarkMode } = useDarkModeContext();

  return (
    <button
      className="opacity-40 hover:opacity-85"
      onClick={() => setIsDarkMode((prev) => !prev)}
    >
      {isDarkMode ? <RiSunFill /> : <RiMoonFill />}
    </button>
  );
}

export default DarkModeToggle;
