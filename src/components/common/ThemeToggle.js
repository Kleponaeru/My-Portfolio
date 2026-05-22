import { FiMoon, FiSun } from "react-icons/fi";

export const ThemeToggle = ({ theme, onToggle }) => (
  <button
    type="button"
    className="theme-toggle"
    onClick={onToggle}
    aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
  >
    {theme === "dark" ? <FiSun /> : <FiMoon />}
  </button>
);
