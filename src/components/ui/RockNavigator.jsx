/*
 * Navegador entre salas del museo
 * • Botones para cambiar entre salas (Metal, Rock, Punk)
 * • Muestra información de la sala actual
 * • Indicador de progreso (sala X de Y)
 * • Descripciones localizadas de cada sala
 * • Panel contraíble para móvil
 */
import React, { useState, useEffect, useMemo } from "react";
import { useTranslation } from "../../hooks/useTranslation";
import { useTooltipContext } from "../tooltips";
import { getTooltipMessages } from "../tooltips/messages";

export default function RockNavigator({
  currentRoom,
  onRoomChange,
  totalRooms,
}) {
  const { t, translations } = useTranslation();
  const { showTooltip, hideTooltip } = useTooltipContext();
  const tooltipMessages = useMemo(() => getTooltipMessages(translations), [translations]);

  // Estado para controlar si el navigator está contraído - iniciar cerrado por defecto
  const [isCollapsed, setIsCollapsed] = useState(true);

  // Mantener cerrado por defecto en todas las resoluciones
  useEffect(() => {
    setIsCollapsed(true);
  }, []);

  const toggleCollapsed = () => {
    setIsCollapsed(!isCollapsed);
  };

  const roomNames = [t("rooms.metal"), t("rooms.rock"), t("rooms.punk")];

  const roomTypes = ["metal", "rock", "punk"];

  const getTooltipMessage = (roomIndex) => {
    const roomType = roomTypes[roomIndex];
    const message = tooltipMessages.navigation[roomType];
    return message;
  };

  return (
    <nav className={`rock-navigator ${isCollapsed ? "collapsed" : "expanded"}`}>
      <div className="navigator-header">
        <div className="navigator-title-container">
          <h1>{t("navigator.title")}</h1>
          <button
            className="navigator-toggle clickable"
            onClick={toggleCollapsed}
            title={isCollapsed ? "Expandir navegador" : "Contraer navegador"}
            aria-label={
              isCollapsed ? "Expandir navegador" : "Contraer navegador"
            }
          >
            {isCollapsed ? "▼" : "▲"}
          </button>
        </div>
        {!isCollapsed && <p className="navigator-subtitle"></p>}
      </div>

      {!isCollapsed && (
        <div className="room-buttons">
          {Array.from({ length: totalRooms }, (_, index) => (
            <button
              key={index}
              className={`room-btn ${currentRoom === index ? "active" : ""}`}
              onClick={() => onRoomChange(index)}
              onMouseEnter={() => {
                const message = getTooltipMessage(index);
                const title = roomNames[index]; // Removed guitar emoji 🎸
                showTooltip(message, title);
              }}
              onMouseLeave={() => {
                hideTooltip();
              }}
            >
              {roomNames[index] || `Room ${index + 1}`}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}
