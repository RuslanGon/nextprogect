"use client";

import { Children, createContext, useState } from "react";

export const themeContext = createContext();

export const themeProvider = ({ children }) => {
  const [mode, setMode] = useState("dark");
  const toggle = () => {
    setMode((prew) => prew === "dark" ? "light" : "dark");
  };
};
