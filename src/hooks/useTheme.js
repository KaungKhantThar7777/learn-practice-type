import { useState } from "react";

const useTheme = () => {
  const localStorageTheme = window.localStorage.getItem("theme");
  const [theme, setTheme] = useState(localStorageTheme || "light");

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
      window.localStorage.setItem("theme", "dark");
    } else {
      setTheme("light");
      window.localStorage.setItem("theme", "light");
    }
  };

  return [theme, toggleTheme];
};

export default useTheme;
