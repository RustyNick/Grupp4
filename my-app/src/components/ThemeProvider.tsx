import React, { useState } from "react";

type Theme = "ljust" | "mörkt";
type ThemeContext = { theme: Theme; toggleTheme: () => void };

export const ThemeContext = React.createContext<ThemeContext>(
  {} as ThemeContext
);

export const ThemeProvider: React.FC = ({ children }) => {
  const [theme, setTheme] = useState<Theme>("ljust");
  const toggleTheme = () => {
    setTheme(theme === "ljust" ? "mörkt" : "ljust");
  };

  const color = theme === "ljust" ? "#000" : "#b4b4b4";
  const backgroundColor = theme === "ljust" ? "#b4b4b4" : "#000";

  document.body.style.color = color;
  document.body.style.backgroundColor = backgroundColor;

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};