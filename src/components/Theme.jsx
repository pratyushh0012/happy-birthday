import { useEffect } from "react";

export const Theme = () => {
  // Effect to apply dark theme when component mounts
  useEffect(() => {
    // Always apply dark theme
    document.documentElement.classList.add("dark");
    localStorage.setItem("theme", "dark");
  }, []);

  return null;
};
