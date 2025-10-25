/*
 * Componente de transición con efecto de tormenta
 * • Reproduce video de tormenta durante cambios de avatar
 * • Controla opacidad del contenido en fases (appearing/peak/disappearing)
 * • Sincroniza animación con progreso del video
 * • Notifica cambios de fase al componente padre
 */
import React, { useState, useEffect } from "react";
import "./ThunderstormTransition.css";
import { getImagePath } from "../../../utils/assetPaths";

const ThunderstormTransition = ({
  isActive,
  onPhaseChange,
  onTransitionComplete,
  children,
}) => {
  const [thunderstormPhase, setThunderstormPhase] = useState("none");
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    if (isActive && thunderstormPhase === "none") {
      setIsTransitioning(true);
      setThunderstormPhase("appearing");
      onPhaseChange && onPhaseChange("appearing");
    }
  }, [isActive, thunderstormPhase, onPhaseChange]);

  useEffect(() => {
    onPhaseChange && onPhaseChange(thunderstormPhase);
  }, [thunderstormPhase, onPhaseChange]);

  const handleTimeUpdate = (e) => {
    const video = e.target;
    const progress = video.currentTime / video.duration;

    if (progress >= 0.25 && thunderstormPhase === "appearing") {
      setThunderstormPhase("peak");
    } else if (progress >= 0.4 && thunderstormPhase === "peak") {
      setThunderstormPhase("disappearing");
    } else if (progress >= 0.5 && thunderstormPhase === "disappearing") {
      const thunderstormElement = e.target;
      thunderstormElement.style.opacity = "0";
      thunderstormElement.style.transition = "opacity 0.8s ease-out";
      // Finalizar transición suavemente
      setTimeout(() => {
        if (thunderstormPhase !== "none") {
          setIsTransitioning(false);
          setThunderstormPhase("none");
          onTransitionComplete && onTransitionComplete();
        }
      }, 800);
    }
  };

  const handleVideoEnd = () => {
    console.log("Thunderstorm transition completed");
    setTimeout(() => {
      if (thunderstormPhase !== "none") {
        setIsTransitioning(false);
        setThunderstormPhase("none");
        onTransitionComplete && onTransitionComplete();
      }
    }, 150);
  };

  const handleVideoError = () => {
    console.log("Error loading thunderstorm video");
    setIsTransitioning(false);
    setThunderstormPhase("none");
    onTransitionComplete && onTransitionComplete();
  };

  return (
    <div className="thunderstorm-transition-container">
      <div
        className="thunderstorm-transition-content"
        style={{
          opacity:
            thunderstormPhase === "appearing"
              ? 0.2
              : thunderstormPhase === "peak"
              ? 0
              : thunderstormPhase === "disappearing"
              ? 1
              : 1,
          transition:
            thunderstormPhase === "appearing"
              ? "opacity 1.8s ease-out"
              : thunderstormPhase === "peak"
              ? "none"
              : thunderstormPhase === "disappearing"
              ? "opacity 0.6s ease-out"
              : "opacity 0.8s ease-out",
        }}
      >
        {children}
      </div>

      {isTransitioning && (
        <video
          src={getImagePath("/images/thunderstorm.mp4")}
          autoPlay
          muted
          playsInline
          className="thunderstorm-video"
          style={{
            opacity:
              thunderstormPhase === "appearing"
                ? 0.6
                : thunderstormPhase === "peak"
                ? 0.95
                : thunderstormPhase === "disappearing"
                ? 0.5
                : 0,
            transition: "opacity 0.8s ease-in-out",
            maskImage:
              "radial-gradient(ellipse at center, black 50%, transparent 80%)",
            WebkitMaskImage:
              "radial-gradient(ellipse at center, black 50%, transparent 80%)",
          }}
          onLoadedData={() => console.log("Thunderstorm video loaded")}
          onTimeUpdate={handleTimeUpdate}
          onError={handleVideoError}
          onEnded={handleVideoEnd}
        />
      )}
    </div>
  );
};

export default ThunderstormTransition;
