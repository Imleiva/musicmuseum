/*
 * Componente de transición con efecto de humo
 * • Reproduce video de humo durante cambios de avatar
 * • Controla opacidad del contenido en fases (appearing/peak/disappearing)
 * • Sincroniza animación con progreso del video
 * • Notifica cambios de fase al componente padre
 */
import React, { useState, useEffect } from "react";
import "./SmokeTransition.css";

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

    if (progress >= 0.35 && smokePhase === "appearing") {
      setSmokePhase("peak");
    } else if (progress >= 0.45 && smokePhase === "peak") {
      setSmokePhase("disappearing");
    } else if (progress >= 0.85 && smokePhase === "disappearing") {
      const smokeElement = e.target;
      smokeElement.style.opacity = "0";
      smokeElement.style.transition = "opacity 1s ease-out";
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
              : smokePhase === "peak"
              ? 0
              : smokePhase === "disappearing"
              ? 0.7
              : 1,
          transition:
            smokePhase === "appearing"
              ? "opacity 0.8s ease-in-out"
              : smokePhase === "disappearing"
              ? "opacity 0.6s ease-out"
              : smokePhase === "peak"
              ? "opacity 0.8s ease-in-out"
              : "opacity 0.8s ease-out",
        }}
      >
        {children}
      </div>

      {isTransitioning && (
        <video
          src="/images/humo.mp4"
          autoPlay
          muted
          playsInline
          className="smoke-video"
          style={{
            opacity:
              smokePhase === "appearing"
                ? 1
                : smokePhase === "peak"
                ? 0.9
                : smokePhase === "disappearing"
                ? 0.3
                : 1,
            transition: "opacity 0.8s ease-out",
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
