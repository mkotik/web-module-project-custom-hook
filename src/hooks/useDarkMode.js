import { useState } from "react";
import useLocalStorage from "./useLocalStorage";

const useDarkMode = (initialValue) => {
  const [darkModeEnabled, setDarkModeEnabled] = useLocalStorage(
    "darkMode",
    initialValue
  );
  return [darkModeEnabled, setDarkModeEnabled];
};

export default useDarkMode;
