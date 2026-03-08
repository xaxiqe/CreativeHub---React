import { createContext, useContext, useState } from "react";

const ThemeContext = createContext(undefined);

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  function toggleTheme() {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {" "}
      {children}{" "}
    </ThemeContext.Provider>
  );
};

export const useThemeContext = () => {
  const contextValue = useContext(ThemeContext);
  if (!contextValue) {
    throw new Error("ThemeContext must be used within ThemeProvider");
  }

  const { theme, toggleTheme } = contextValue;
  return {
    theme,
    toggleTheme,
  };
};
