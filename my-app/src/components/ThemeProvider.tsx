import React, { useState } from "react";
import ErrorBoundary from "./ErrorBoundary";

type Theme = "light" | "dark";
type ThemeContext = { theme: Theme; toggleTheme: () => void };

export const ThemeContext = React.createContext<ThemeContext>(
  {} as ThemeContext
);

export const ThemeProvider: React.FC = ({ children }) => {
  const [theme, setTheme] = useState<Theme>("light");
  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const color = theme === "light" ? "#000" : "#b4b4b4";
  const backgroundColor = theme === "light" ? "#b4b4b4" : "#000";

  document.body.style.color = color;
  document.body.style.backgroundColor = backgroundColor;

  return (
    <ErrorBoundary>
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        {children}
      </ThemeContext.Provider>
    </ErrorBoundary>
  );
};