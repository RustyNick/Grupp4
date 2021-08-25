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

  const color = theme === "ljust" ? "#333" : "#FFF";
  const backgroundColor = theme === "ljust" ? "#FFF" : "#333";

  document.body.style.color = color;
  document.body.style.backgroundColor = backgroundColor;

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};