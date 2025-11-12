/*
 * Panel de ayuda con controles de navegación
 * • Muestra instrucciones para usar la escena 3D
 * • Explica controles de cámara y interacciones
 * • Texto localizado según idioma seleccionado
 * • Panel contraíble para mejorar experiencia en móvil
 */
import React, { useState, useEffect } from "react";
import { useTranslation } from "../../hooks/useTranslation";

export default function ControlsHelp() {
  const { t } = useTranslation();

  // Estado para controlar si el panel está contraído - iniciar cerrado siempre
  const [isCollapsed, setIsCollapsed] = useState(true);

  // Mantener cerrado por defecto en todas las resoluciones
  useEffect(() => {
    setIsCollapsed(true);
  }, []);

  const toggleCollapsed = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div className={`controls-help ${isCollapsed ? "collapsed" : "expanded"}`}>
      <div className="controls-help-header">
        <h4>{t("controls.title")}</h4>
        <button
          className="controls-help-toggle clickable"
          onClick={toggleCollapsed}
          title={isCollapsed ? "Expandir controles" : "Contraer controles"}
          aria-label={isCollapsed ? "Expandir controles" : "Contraer controles"}
        >
          {isCollapsed ? "▲" : "▼"}
        </button>
      </div>
      {!isCollapsed && (
        <ul>
          <li>{t("controls.drag")}</li>
          <li>{t("controls.scroll")}</li>
          <li>{t("controls.posters")}</li>
        </ul>
      )}
    </div>
  );
}
