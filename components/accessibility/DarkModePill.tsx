"use client";

import { useDarkModeContext } from "@/app/_providers/DarkModeContext";
import React from "react";

function DarkModePill() {
  const { isDarkMode } = useDarkModeContext();

  return (
    <span className={`uppercase ${isDarkMode ? "text-success " : ""}`}>
      Darkmode is {isDarkMode ? "on" : "off"}
    </span>
  );
}

export default DarkModePill;
