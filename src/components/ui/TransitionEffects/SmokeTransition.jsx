/*
 * Componente de transición con efecto de humo
 * • Reproduce video de humo durante cambios de avatar
 * • Controla opacidad del contenido en fases (appearing/peak/disappearing)
 * • Sincroniza animación con progreso del video
 * • Notifica cambios de fase al componente padre
 */
import React, { useState, useEffect } from "react";
import "./SmokeTransition.css";
import { getImagePath } from "../../../utils/assetPaths";

const SmokeTransition = ({
  isActive,
  onPhaseChange,
  onTransitionComplete,
  children,
}) => {
  const [smokePhase, setSmokePhase] = useState("none");
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    if (isActive && smokePhase === "none") {
      setIsTransitioning(true);
      setSmokePhase("appearing");
      onPhaseChange && onPhaseChange("appearing");
    }
  }, [isActive, smokePhase, onPhaseChange]);

  useEffect(() => {
    onPhaseChange && onPhaseChange(smokePhase);
  }, [smokePhase, onPhaseChange]);

  const handleTimeUpdate = (e) => {
    const video = e.target;
    const progress = video.currentTime / video.duration;

    if (progress >= 0.1 && smokePhase === "appearing") {
      setSmokePhase("covering");
    } else if (progress >= 0.2 && smokePhase === "covering") {
      setSmokePhase("peak");
    } else if (progress >= 0.35 && smokePhase === "peak") {
      setSmokePhase("disappearing");
    } else if (progress >= 0.55 && smokePhase === "disappearing") {
      const smokeElement = e.target;
      smokeElement.style.opacity = "0";
      smokeElement.style.transition = "opacity 0.4s ease-out";
      // Finalizar transición inmediatamente para mejor UX
      setTimeout(() => {
        setIsTransitioning(false);
        setSmokePhase("none");
        onTransitionComplete && onTransitionComplete();
      }, 400);
    }
  };

  const handleVideoEnd = () => {
    console.log("Video transición terminado");
    setTimeout(() => {
      setIsTransitioning(false);
      setSmokePhase("none");
      onTransitionComplete && onTransitionComplete();
    }, 500);
  };

  const handleVideoError = () => {
    console.log("Error cargando video");
    setIsTransitioning(false);
    setSmokePhase("none");
    onTransitionComplete && onTransitionComplete();
  };

  return (
    <div className="smoke-transition-container">
      <div
        className="smoke-transition-content"
        style={{
          opacity:
            smokePhase === "appearing"
              ? 1
              : smokePhase === "covering"
              ? 1
              : smokePhase === "peak"
              ? 0.5
              : smokePhase === "disappearing"
              ? 1
              : 1,
          transition:
            smokePhase === "appearing"
              ? "opacity 0.2s ease-out"
              : smokePhase === "peak"
              ? "opacity 0.6s ease-in-out"
              : smokePhase === "disappearing"
              ? "opacity 0.4s ease-in"
              : "none",
        }}
      >
        {children}
      </div>

      {isTransitioning && (
        <video
          src={getImagePath("/images/humo1.mp4")}
          autoPlay
          muted
          playsInline
          className="smoke-video"
          style={{
            opacity:
              smokePhase === "appearing"
                ? 0.7
                : smokePhase === "covering"
                ? 1.0
                : smokePhase === "peak"
                ? 1.0
                : smokePhase === "disappearing"
                ? 0.4
                : 0.7,
          }}
          onLoadedData={() => console.log("Video humo cargado")}
          onTimeUpdate={handleTimeUpdate}
          onError={handleVideoError}
          onEnded={handleVideoEnd}
        />
      )}
    </div>
  );
};

export default SmokeTransition;
