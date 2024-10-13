"use client";

import { createContext } from "react";

export const themeContext = createContext();

export const themeProvider = ({ children }) => {
  const [mode, setMode] = useState("dark");
  const toggle = () => {
    setMode((prew) => prew === "dark" ? "light" : "dark");
  };

  return (
    <themeContext.Provider value = {{toggle, mode}}>
        <div></div>
    </themeContext.Provider>
  )
};
