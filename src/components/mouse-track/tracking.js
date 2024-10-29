import React from "react";
import useMousePosition from "./useMousePosition";

const CursorFollower = ({ includeTouch }) => {
  const { x, y } = useMousePosition({ includeTouch });
  const isDesktop = window.innerWidth > 768;

  const baseStyle = {
    position: "fixed",
    left: x ? `${x}px` : "-100px",
    top: y ? `${y}px` : "-100px",
    width: "20px",
    height: "20px",
    borderRadius: "50%",
    pointerEvents: "none",
    transform: "translate(-50%, -50%)",
  };

  if (!isDesktop) return null;
  return (
    <div style={{ cursor: "none" }}>
      <div
        style={{
          ...baseStyle,
          backgroundColor: "#7E00CC", // Main circle color
          boxShadow: `
          0 0 20px rgba(255, 255, 255, 0.6),
          0 0 30px rgba(155, 89, 182, 0.8),  
          0 0 50px rgba(155, 89, 182, 0.6), 
          0 0 70px rgba(155, 89, 182, 0.4)
      `,
        }}
      />
      {[...Array(5)].map((_, i) => (
        <div
          key={i}
          style={{
            ...baseStyle,
            backgroundColor: "#7E00CC",
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
