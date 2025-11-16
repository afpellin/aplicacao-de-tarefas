import React, { useContext } from "react";
import { TaskContext } from "../context/TaskContext";

export default function ThemeToggle() {
  const { theme, setTheme } = useContext(TaskContext);

  const toggle = () => setTheme(theme === "dark" ? "light" : "dark");

  return (
    <button className="btn ghost" onClick={toggle} aria-label="Alternar tema">
      {theme === "dark" ? "🌙" : "☀️"}
    </button>
  );
}
