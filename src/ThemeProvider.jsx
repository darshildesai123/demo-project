import React, { createContext, useEffect, useState } from "react";

export const ThemeContext = createContext({});

function ThemeProvider({ children }) {
  const theme = localStorage.getItem("theme");
  const [mode, setMode] = useState(theme ?? "");

  useEffect(() => {
      document.body.style.backgroundColor = mode;
    // if (mode === "light") {
    // } else {
    //   document.body.style.backgroundColor = "lightblue";
    // }
    localStorage.setItem("theme", mode);
  }, [mode]);

  return (
    <>
      <ThemeContext.Provider value={{ mode, setMode }}>
        {children}
      </ThemeContext.Provider>
    </>
  );
}

export default ThemeProvider;
