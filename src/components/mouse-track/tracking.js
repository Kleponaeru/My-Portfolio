import React, { useEffect, useState } from "react";
import useMousePosition from "./useMousePosition";

const CursorFollower = ({ includeTouch }) => {
  const { x, y } = useMousePosition({ includeTouch });
  const isDesktop = window.innerWidth > 768;
  const [theme, setTheme] = useState("dark");

  // Watch for light-theme class on body
  useEffect(() => {
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === "class") {
          setTheme(document.body.classList.contains("light-theme") ? "light" : "dark");
        }
      });
    });

    observer.observe(document.body, {
      attributes: true
    });

    return () => observer.disconnect();
  }, []);

  const themeColors = {
    light: {
      main: "#EE1D2A",  // Red cursor for light mode
      glow: "255, 0, 0", // Red glow
    },    
    dark: {
      main: "#ffffff",  // Light cursor for dark mode
      glow: "155, 89, 182", // Same purple glow
    }
  };

  const currentColors = themeColors[theme];

  const baseStyle = {
    position: "fixed",
    left: x ? `${x}px` : "-100px",
    top: y ? `${y}px` : "-100px",
    width: "20px",
    height: "20px",
    borderRadius: "50%",
    pointerEvents: "none",
    transform: "translate(-50%, -50%)",
    zIndex: 9999,
  };

  if (!isDesktop) return null;
  return (
    <div style={{ cursor: "none" }}>
      <div
        style={{
          ...baseStyle,
          backgroundColor: currentColors.main,
          boxShadow: `
          0 0 20px rgba(${currentColors.glow}, 0.4),
          0 0 30px rgba(${currentColors.glow}, 0.5),  
          0 0 50px rgba(${currentColors.glow}, 0.4), 
          0 0 70px rgba(${currentColors.glow}, 0.2)
        `,
        }}
      />
      {[...Array(5)].map((_, i) => (
        <div
          key={i}
          style={{
            ...baseStyle,
            backgroundColor: currentColors.main,
            opacity: 0.5 - i * 0.1,
            transition: `all ${0.1 + i * 0.05}s ease-out`,
            transform: `translate(-50%, -50%) scale(${1 - i * 0.1})`,
          }}
        />
      ))}
    </div>
  );
};

export default CursorFollower;