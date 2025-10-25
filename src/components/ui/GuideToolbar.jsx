/*
 * Toolbar de herramientas del guía
 * • Botones para curiosidades, customización y configuración
 * • Icons específicos para cada herramienta
 * • Indicador visual de herramienta activa
 * • Tooltips localizados para cada botón
 * • Funcionalidad de contraer/expandir para móvil
 */
import React, { useState, useEffect } from "react";
import "./GuideToolbar.css";
import { useTranslation } from "../../hooks/useTranslation";
import { useTooltipContext, TooltipMessages } from "../tooltips";
import { getImagePath } from "../../utils/assetPaths";

export default function GuideToolbar({
  active,
  onSelect,
  curiositiesEnabled = true,
}) {
  const { t } = useTranslation();
  const { showTooltip, hideTooltip } = useTooltipContext();

  // Estado para controlar si el toolbar está contraído
  const [isCollapsed, setIsCollapsed] = useState(false);

  // Detectar si es móvil y contraer por defecto
  useEffect(() => {
    const isMobile = window.innerWidth <= 768;
    setIsCollapsed(isMobile);
  }, []);

  const toggleCollapsed = () => {
    setIsCollapsed(!isCollapsed);
  };

  const icons = [
    {
      key: "curiosities",
      label: t("toolbar.curiosities"),
      tooltipMessage: TooltipMessages.controls.curiosities,
      icon: (
        <img
          src={getImagePath("/images/icons/curiosidades.png")}
          alt={t("toolbar.curiosities")}
          width={28}
          height={28}
        />
      ),
    },
    {
      key: "customize",
      label: t("toolbar.customize"),
      tooltipMessage: TooltipMessages.controls.customize,
      icon: (
        <img
          src={getImagePath("/images/icons/customavatar.png")}
          alt={t("toolbar.customize")}
          width={28}
          height={28}
        />
      ),
    },
    {
      key: "settings",
      label: t("toolbar.settings"),
      tooltipMessage: TooltipMessages.controls.settings,
      icon: (
        <img
          src={getImagePath("/images/icons/settings.png")}
          alt={t("toolbar.settings")}
          width={28}
          height={28}
        />
      ),
    },
  ];
  return (
    <div className={`guide-toolbar ${isCollapsed ? "collapsed" : "expanded"}`}>
      {/* Botón para contraer/expandir */}
      <button
        className="guide-toolbar-toggle clickable"
        onClick={toggleCollapsed}
        onMouseEnter={() => {
          const tooltipText = isCollapsed
            ? "Expandir panel de controles"
            : "Contraer panel de controles";
          showTooltip(tooltipText, "🎛️ Controles");
        }}
        onMouseLeave={() => {
          hideTooltip();
        }}
        title={isCollapsed ? "Expandir controles" : "Contraer controles"}
      >
        <img
          src={getImagePath(
            isCollapsed
              ? "/images/icons/expand.png"
              : "/images/icons/collapse.png"
          )}
          alt={isCollapsed ? "Expandir" : "Contraer"}
          width={20}
          height={20}
        />
      </button>

      {/* Botones principales - solo mostrar cuando no está contraído */}
      {!isCollapsed &&
        icons.map((item) => (
          <button
            key={item.key}
            className={`guide-toolbar-btn clickable${
              active === item.key ? " active" : ""
            }${
              item.key === "curiosities" && !curiositiesEnabled
                ? " disabled"
                : ""
            }`}
            title={item.label}
            onClick={() => onSelect(item.key)}
            onMouseEnter={() => {
              let tooltipText = item.tooltipMessage;

              if (item.key === "curiosities") {
                tooltipText = curiositiesEnabled
                  ? "Descubre datos curiosos sobre las bandas. Haz clic para desactivar"
                  : "Las curiosidades están desactivadas. Haz clic para activarlas";
              } else if (item.key === "customize") {
                tooltipText =
                  "Personaliza tu avatar de banda. Haz clic para abrir el selector";
              } else if (item.key === "settings") {
                tooltipText =
                  "Abre la configuración del museo. Haz clic para personalizar tu experiencia";
              }

              showTooltip(tooltipText, `🎸 ${item.label}`);
            }}
            onMouseLeave={() => {
              hideTooltip();
            }}
          >
            {item.icon}
            {/* Línea de deshabilitado para curiosidades */}
            {item.key === "curiosities" && !curiositiesEnabled && (
              <div className="disabled-line"></div>
            )}
          </button>
        ))}
    </div>
  );
}
