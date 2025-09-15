/*
 * Ejemplos de integración del sistema de tooltips
 * Muestra cómo implementar tooltips en diferentes componentes
 */
import React from "react";
import { useTooltipContext } from "./useTooltipContext";
import { TooltipMessages } from "./messages";

// Ejemplo de integración en un botón de navegación
const NavigationButton = ({ roomType, children, onClick, isActive }) => {
  const { showTooltip, hideTooltip } = useTooltipContext();

  const handleMouseEnter = () => {
    const message = TooltipMessages.navigation[roomType];
    if (message) {
      showTooltip(message, `🎸 ${roomType.toUpperCase()} ROOM`, 500);
    }
  };

  return (
    <button
      className={`room-btn ${isActive ? "active" : ""}`}
      onClick={onClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={hideTooltip}
    >
      {children}
    </button>
  );
};

// Ejemplo de botón de configuración
const SettingsButton = ({ onClick }) => {
  const { showTooltip, hideTooltip } = useTooltipContext();

  const handleMouseEnter = () => {
    showTooltip(TooltipMessages.controls.settings, "⚙️ Configuración", 300);
  };

  return (
    <button
      className="settings-btn"
      onClick={onClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={hideTooltip}
    >
      ⚙️
    </button>
  );
};

// Ejemplo para pósters de conciertos
const PosterButton = ({ onClick }) => {
  const { showTooltip, hideTooltip } = useTooltipContext();

  return (
    <div
      className="poster-label"
      onClick={onClick}
      onMouseEnter={() =>
        showTooltip(TooltipMessages.interactions.poster, "🎤 Concierto")
      }
      onMouseLeave={hideTooltip}
    >
      Ver Detalles
    </div>
  );
};

export { NavigationButton, SettingsButton, PosterButton };
