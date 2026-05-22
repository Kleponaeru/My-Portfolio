import { useEffect, useState } from "react";
import "./BounceCards.css";

export default function BounceCards({
  className = "",
  images = [],
  containerWidth = 400,
  containerHeight = 400,
  animationDelay = 0.5,
  animationStagger = 0.06,
  easeType = "elastic.out(1, 0.8)",
  transformStyles = [
    "rotate(10deg) translate(-170px)",
    "rotate(5deg) translate(-85px)",
    "rotate(-3deg)",
    "rotate(-10deg) translate(85px)",
    "rotate(2deg) translate(170px)",
  ],
  enableHover = true,
}) {
  const [isReady, setIsReady] = useState(false);
  const [hoveredIdx, setHoveredIdx] = useState(null);

  useEffect(() => {
    const delayMs = animationDelay * 1000;
    const timer = window.setTimeout(() => {
      setIsReady(true);
    }, delayMs);

    return () => window.clearTimeout(timer);
  }, [animationDelay]);

  const getNoRotationTransform = (transformStr) => {
    const hasRotate = /rotate\([\s\S]*?\)/.test(transformStr);
    if (hasRotate) {
      return transformStr.replace(/rotate\([\s\S]*?\)/, "rotate(0deg)");
    }

    if (transformStr === "none") {
      return "rotate(0deg)";
    }

    return `${transformStr} rotate(0deg)`;
  };

  const getPushedTransform = (baseTransform, offsetX) => {
    const translateRegex = /translate\(([-0-9.]+)px(?:,\s*([-0-9.]+)px)?\)/;
    const match = baseTransform.match(translateRegex);

    if (match) {
      const currentX = parseFloat(match[1]);
      const currentY = match[2] ? parseFloat(match[2]) : 0;
      return baseTransform.replace(
        translateRegex,
        `translate(${currentX + offsetX}px, ${currentY}px)`
      );
    }

    return baseTransform === "none"
      ? `translate(${offsetX}px)`
      : `${baseTransform} translate(${offsetX}px)`;
  };

  const getCardTransform = (index) => {
    const baseTransform = transformStyles[index] || "none";

    if (!enableHover || hoveredIdx === null) {
      return baseTransform;
    }

    if (index === hoveredIdx) {
      return getNoRotationTransform(baseTransform);
    }

    const offsetX = index < hoveredIdx ? -160 : 160;
    return getPushedTransform(baseTransform, offsetX);
  };

  return (
    <div
      className={`bounceCardsContainer ${className}`.trim()}
      style={{
        width: containerWidth,
        height: containerHeight,
      }}
    >
      {images.map((src, idx) => (
        <div
          key={idx}
          className={`card card-${idx}${isReady ? " is-ready" : ""}`}
          style={{
            transform: getCardTransform(idx),
            transitionDelay: `${idx * animationStagger}s`,
          }}
          onMouseEnter={() => setHoveredIdx(idx)}
          onMouseLeave={() => setHoveredIdx(null)}
        >
          <img className="image" src={src} alt={`showcase-${idx + 1}`} />
        </div>
      ))}
    </div>
  );
}
