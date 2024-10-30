import React, { useEffect } from 'react';
import { MdDarkMode, MdLightMode } from 'react-icons/md';

const ThemeToggleButton = ({ handleToggle, currentTheme }) => {
  useEffect(() => {
    // Toggle light-theme class based on currentTheme
    if (currentTheme === 'light') {
      document.body.classList.add('light-theme');
    } else {
      document.body.classList.remove('light-theme');
    }
  }, [currentTheme]);

  return (
    <button className="toggle-theme" onClick={handleToggle}>
      {currentTheme === 'dark' ? <MdDarkMode /> : <MdLightMode />}
    </button>
  );
};

export default ThemeToggleButton;
