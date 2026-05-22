export const ThemeToggle = ({ theme, onToggle }) => (
  <button
    type="button"
    className="theme-toggle"
    onClick={onToggle}
    aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
  >
    <span>{theme === "dark" ? "Light" : "Dark"}</span>
  </button>
);
