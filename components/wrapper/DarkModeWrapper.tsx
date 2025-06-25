"use client";

import { useDarkModeContext } from "@/providers/DarkModeContext";
import React, { ReactNode } from "react";

const PageWrapper: React.FC<{ children: ReactNode }> = ({ children }) => {
  const { isDarkMode } = useDarkModeContext();

  return (
    <main
      className={`
        dark-mode-wrapper ${isDarkMode && "dark "}
        text-foreground dark:text-background bg-background dark:bg-foreground transition duration-400 ease-out
      `}
    >
      {children}
    </main>
  );
};

export default PageWrapper;
