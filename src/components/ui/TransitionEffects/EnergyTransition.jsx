/*
 * Componente de transición
 * • Reproduce video de energía durante cambios de avatar
 * • Controla opacidad del contenido en fases (appearing/peak/disappearing)
 * • Sincroniza animación con progreso del video
 * • Notifica cambios de fase al componente padre
 */
import React, { useState, useEffect } from "react";
import "./EnergyTransition.css";
import { getImagePath } from "../../../utils/assetPaths";

const EnergyTransition = ({
  isActive,
  onPhaseChange,
  onTransitionComplete,
  children,
}) => {
  const [energyPhase, setenergyPhase] = useState("none");
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    if (isActive && energyPhase === "none") {
      setIsTransitioning(true);
      setenergyPhase("appearing");
      onPhaseChange && onPhaseChange("appearing");
    }
  }, [isActive, energyPhase, onPhaseChange]);

  useEffect(() => {
    onPhaseChange && onPhaseChange(energyPhase);
  }, [energyPhase, onPhaseChange]);

  const handleTimeUpdate = (e) => {
    const video = e.target;
    const progress = video.currentTime / video.duration;

    // Avatar opaco hasta 2.4s, difuminado gradual hasta 2.61s, cambio rápido
    const currentTime = video.currentTime;

    if (currentTime >= 2.4 && energyPhase === "appearing") {
      setenergyPhase("covering");
    } else if (currentTime >= 2.61 && energyPhase === "covering") {
      setenergyPhase("peak");
    } else if (currentTime >= 2.612 && energyPhase === "peak") {
      setenergyPhase("disappearing");
    } else if (currentTime >= 2.8 && energyPhase === "disappearing") {
      setenergyPhase("finalizing");
    } else if (progress >= 0.85 && energyPhase === "finalizing") {
      const energyElement = e.target;
      energyElement.style.opacity = "0";
      energyElement.style.transition = "opacity 0.3s ease-out";
      // Finalizar transición inmediatamente
      setTimeout(() => {
        setIsTransitioning(false);
        setenergyPhase("none");
        onTransitionComplete && onTransitionComplete();
      }, 300);
    }
  };

  const handleVideoEnd = () => {
    console.log("energy transition completed");
    setTimeout(() => {
      setIsTransitioning(false);
      setenergyPhase("none");
      onTransitionComplete && onTransitionComplete();
    }, 600);
  };

  const handleVideoError = () => {
    console.log("Error loading energy video");
    setIsTransitioning(false);
    setenergyPhase("none");
    onTransitionComplete && onTransitionComplete();
  };

  return (
    <div className="energy-transition-container">
      <div
        className="energy-transition-content"
        style={{
          opacity:
            energyPhase === "appearing"
              ? 1
              : energyPhase === "covering"
              ? 0.1
              : energyPhase === "peak"
              ? 0
              : energyPhase === "disappearing"
              ? 0.85
              : energyPhase === "finalizing"
              ? 1
              : 1,
          transition:
            energyPhase === "covering"
              ? "opacity 0.8s ease-out"
              : energyPhase === "finalizing"
              ? "opacity 0.4s ease-out"
              : "none",
        }}
      >
        {children}
      </div>

      {isTransitioning && (
        <video
          src={getImagePath("/images/energy.mp4")}
          autoPlay
          muted
          playsInline
          className="energy-video"
          style={{
            opacity:
              energyPhase === "appearing"
                ? 0.2
                : energyPhase === "covering"
                ? 0.8
                : energyPhase === "peak"
                ? 1.0
                : energyPhase === "disappearing"
                ? 0.3
                : 0.2,
            maskImage:
              "radial-gradient(ellipse at center, black 45%, transparent 75%)",
            WebkitMaskImage:
              "radial-gradient(ellipse at center, black 45%, transparent 75%)",
          }}
          onLoadedData={() => console.log("energy video loaded")}
          onTimeUpdate={handleTimeUpdate}
          onError={handleVideoError}
          onEnded={handleVideoEnd}
        />
      )}
    </div>
  );
};

export default EnergyTransition;
