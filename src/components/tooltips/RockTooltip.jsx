/*
 * Sistema de Tooltips Discreto y Profesional
 * • Posición fija en esquina superior derecha
 * • Animaciones suaves y elegantes
 * • Diseño minimalista que encaja con la estética rock
 * • Auto-desaparición configurable
 */
import React, { useState, useEffect, useCallback } from "react";
import ReactDOM from "react-dom";
import "./RockTooltip.css";

const RockTooltip = ({
  title,
  message,
  isVisible,
  onHide,
  duration = 4000,
  compact = false,
  persistent = false,
  type = "default", // default, info, warning
}) => {
  const [isAnimating, setIsAnimating] = useState(false);
  const [shouldRender, setShouldRender] = useState(false);

  const handleHide = useCallback(() => {
    setIsAnimating(false);

    // Esperar que termine la animación antes de desmontar
    setTimeout(() => {
      setShouldRender(false);
      if (onHide) onHide();
    }, 200);
  }, [onHide]);

  useEffect(() => {
    if (isVisible) {
      setShouldRender(true);
      setIsAnimating(true);

      // Auto-hide después del duration (si no es persistente)
      if (!persistent && duration > 0) {
        const timer = setTimeout(() => {
          handleHide();
        }, duration);

        return () => clearTimeout(timer);
      }
    } else {
      handleHide();
    }
  }, [isVisible, duration, persistent, handleHide]);

  if (!shouldRender) return null;

  const tooltipClasses = [
    "rock-tooltip",
    isAnimating ? "visible" : "",
    compact ? "compact" : "",
    type !== "default" ? type : "",
  ]
    .filter(Boolean)
    .join(" ");

  const tooltipElement = (
    <div className="rock-tooltip-container">
      <div className={tooltipClasses}>
        {title && <div className="rock-tooltip-title">{title}</div>}
        <div className="rock-tooltip-text">{message}</div>
      </div>
    </div>
  );

  // Renderizar en un portal para asegurar posicionamiento correcto
  return ReactDOM.createPortal(tooltipElement, document.body);
};

export default RockTooltip;
