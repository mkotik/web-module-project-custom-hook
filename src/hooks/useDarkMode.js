import { useState } from "react";
import useLocalStorage from "./useLocalStorage";

const useDarkMode = (initialValue) => {
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const startingValue = prefersDark ? true : initialValue;
  console.log(startingValue);
  const [darkModeEnabled, setDarkModeEnabled] = useLocalStorage(
    "darkMode",
    startingValue
  );
  return [darkModeEnabled, setDarkModeEnabled];
};

export default useDarkMode;
