/*
 * Componente de transición con efecto de fuego
 * • Reproduce video de fuego durante cambios de avatar
 * • Controla opacidad del contenido en fases (appearing/peak/disappearing)
 * • Sincroniza animación con progreso del video
 * • Notifica cambios de fase al componente padre
 */
import React, { useState, useEffect } from "react";
import "./FireTransition.css";
import { getImagePath } from "../../../utils/assetPaths";

const FireTransition = ({
  isActive,
  onPhaseChange,
  onTransitionComplete,
  children,
}) => {
  const [firePhase, setFirePhase] = useState("none");
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    if (isActive && firePhase === "none") {
      setIsTransitioning(true);
      setFirePhase("appearing");
      onPhaseChange && onPhaseChange("appearing");
    }
  }, [isActive, firePhase, onPhaseChange]);

  useEffect(() => {
    onPhaseChange && onPhaseChange(firePhase);
  }, [firePhase, onPhaseChange]);

  const handleTimeUpdate = (e) => {
    const video = e.target;
    const progress = video.currentTime / video.duration;

    if (progress >= 0.15 && firePhase === "appearing") {
      setFirePhase("covering");
    } else if (progress >= 0.25 && firePhase === "covering") {
      setFirePhase("peak");
    } else if (progress >= 0.35 && firePhase === "peak") {
      setFirePhase("disappearing");
    } else if (progress >= 0.45 && firePhase === "disappearing") {
      const fireElement = e.target;
      fireElement.style.opacity = "0";
      fireElement.style.transition = "opacity 0.3s ease-out";
      // Finalizar transición inmediatamente para mejor UX
      setTimeout(() => {
        setIsTransitioning(false);
        setFirePhase("none");
        onTransitionComplete && onTransitionComplete();
      }, 300);
    }
  };

  const handleVideoEnd = () => {
    console.log("Fire transition completed");
    setTimeout(() => {
      setIsTransitioning(false);
      setFirePhase("none");
      onTransitionComplete && onTransitionComplete();
    }, 150);
  };

  const handleVideoError = () => {
    console.log("Error loading fire video");
    setIsTransitioning(false);
    setFirePhase("none");
    onTransitionComplete && onTransitionComplete();
  };

  return (
    <div className="fire-transition-container">
      <div
        className="fire-transition-content"
        style={{
          opacity:
            firePhase === "appearing"
              ? 1
              : firePhase === "covering"
              ? 1
              : firePhase === "peak"
              ? 0.5
              : firePhase === "disappearing"
              ? 1
              : 1,
          transition:
            firePhase === "appearing"
              ? "opacity 0.4s ease-out"
              : firePhase === "peak"
              ? "opacity 0.6s ease-in-out"
              : firePhase === "disappearing"
              ? "opacity 0.4s ease-in"
              : "none",
        }}
      >
        {children}
      </div>

      {isTransitioning && (
        <video
          src={getImagePath("/images/fuego1.mp4")}
          autoPlay
          muted
          playsInline
          className="fire-video"
          style={{
            opacity:
              firePhase === "appearing"
                ? 0.7
                : firePhase === "covering"
                ? 1.0
                : firePhase === "peak"
                ? 1.0
                : firePhase === "disappearing"
                ? 0.4
                : 0.7,
          }}
          onLoadedData={() => console.log("Fire video loaded")}
          onTimeUpdate={handleTimeUpdate}
          onError={handleVideoError}
          onEnded={handleVideoEnd}
        />
      )}
    </div>
  );
};

export default FireTransition;
