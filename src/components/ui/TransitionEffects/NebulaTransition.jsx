/*
 * Componente de transición con efecto de humo rojo
 * • Reproduce video de humo rojo durante cambios de avatar
 * • Controla opacidad del contenido en fases (appearing/peak/disappearing)
 * • Sincroniza animación con progreso del video
 * • Notifica cambios de fase al componente padre
 */
import React, { useState, useEffect } from "react";
import "./NebulaTransition.css";
import { getImagePath } from "../../../utils/assetPaths";

const NebulaTransition = ({
  isActive,
  onPhaseChange,
  onTransitionComplete,
  children,
}) => {
  const [nebulaPhase, setNebulaPhase] = useState("none");
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    if (isActive && nebulaPhase === "none") {
      setIsTransitioning(true);
      setNebulaPhase("appearing");
      onPhaseChange && onPhaseChange("appearing");
    }
  }, [isActive, nebulaPhase, onPhaseChange]);

  useEffect(() => {
    onPhaseChange && onPhaseChange(nebulaPhase);
  }, [nebulaPhase, onPhaseChange]);

  const handleTimeUpdate = (e) => {
    const video = e.target;
    const progress = video.currentTime / video.duration;

    if (progress >= 0.25 && nebulaPhase === "appearing") {
      setNebulaPhase("peak");
    } else if (progress >= 0.4 && nebulaPhase === "peak") {
      setNebulaPhase("disappearing");
    } else if (progress >= 0.5 && nebulaPhase === "disappearing") {
      const nebulaElement = e.target;
      nebulaElement.style.opacity = "0";
      nebulaElement.style.transition = "opacity 0.8s ease-out";
      // Finalizar transición suavemente
      setTimeout(() => {
        if (nebulaPhase !== "none") {
          setIsTransitioning(false);
          setNebulaPhase("none");
          onTransitionComplete && onTransitionComplete();
        }
      }, 800);
    }
  };

  const handleVideoEnd = () => {
    console.log("Red smoke transition completed");
    setTimeout(() => {
      if (nebulaPhase !== "none") {
        setIsTransitioning(false);
        setNebulaPhase("none");
        onTransitionComplete && onTransitionComplete();
      }
    }, 150);
  };

  const handleVideoError = () => {
    console.log("Error loading red smoke video");
    setIsTransitioning(false);
    setNebulaPhase("none");
    onTransitionComplete && onTransitionComplete();
  };

  return (
    <div className="nebula-transition-container">
      <div
        className="nebula-transition-content"
        style={{
          opacity:
            nebulaPhase === "appearing"
              ? 0.15
              : nebulaPhase === "peak"
              ? 0
              : nebulaPhase === "disappearing"
              ? 1
              : 1,
          transition:
            nebulaPhase === "appearing"
              ? "opacity 2.0s ease-out"
              : nebulaPhase === "peak"
              ? "none"
              : nebulaPhase === "disappearing"
              ? "opacity 0.6s ease-out"
              : "opacity 0.8s ease-out",
        }}
      >
        {children}
      </div>

      {isTransitioning && (
        <video
          src={getImagePath("/images/humorojo.mp4")}
          autoPlay
          muted
          playsInline
          className="nebula-video"
          style={{
            opacity:
              nebulaPhase === "appearing"
                ? 0.5
                : nebulaPhase === "peak"
                ? 0.9
                : nebulaPhase === "disappearing"
                ? 0.5
                : 0,
            transition: "opacity 0.8s ease-in-out",
            maskImage:
              "radial-gradient(ellipse at center, black 60%, transparent 85%)",
            WebkitMaskImage:
              "radial-gradient(ellipse at center, black 60%, transparent 85%)",
          }}
          onLoadedData={() => console.log("Red smoke video loaded")}
          onTimeUpdate={handleTimeUpdate}
          onError={handleVideoError}
          onEnded={handleVideoEnd}
        />
      )}
    </div>
  );
};

export default NebulaTransition;
