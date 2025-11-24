/*
 * Toolbar de herramientas del guía
 * • Botones para curiosidades, customización y configuración
 * • Icons específicos para cada herramienta
 * • Indicador visual de herramienta activa
 * • Tooltips localizados para cada botón
 * • Diseño compacto para móvil
 */
import React, { useMemo } from "react";
import "./GuideToolbar.css";
import { useTranslation } from "../../hooks/useTranslation";
import { useTooltipContext } from "../tooltips";
import { getTooltipMessages } from "../tooltips/messages";
import { getImagePath } from "../../utils/assetPaths";

export default function GuideToolbar({
  active,
  onSelect,
  curiositiesEnabled = true,
  isCollapsed = false,
  onToggleCollapse,
}) {
  const { t, translations } = useTranslation();
  const { showTooltip, hideTooltip } = useTooltipContext();
  const tooltipMessages = useMemo(
    () => getTooltipMessages(translations),
    [translations]
  );

  const icons = [
    {
      key: "curiosities",
      label: t("toolbar.curiosities"),
      tooltipMessage: tooltipMessages.controls.curiosities,
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
      tooltipMessage: tooltipMessages.controls.customize,
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
      tooltipMessage: tooltipMessages.controls.settings,
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
    <div className={`guide-toolbar ${isCollapsed ? "collapsed" : ""}`}>
      {/* Botón de toggle para todas las pantallas */}
      <button
        className="guide-toolbar-toggle"
        onClick={onToggleCollapse}
        title={isCollapsed ? "Mostrar herramientas" : "Ocultar herramientas"}
      >
        <span className="toggle-icon">{isCollapsed ? "+" : "×"}</span>
      </button>

      {/* Iconos del toolbar */}
      <div className={`guide-toolbar-icons ${isCollapsed ? "collapsed" : ""}`}>
        {icons.map((item) => (
          <button
            key={item.key}
            className={`guide-toolbar-btn clickable${
              active === item.key ? " active" : ""
            }${
              item.key === "curiosities" && !curiositiesEnabled
                ? " disabled"
                : ""
            }`}
            style={{ cursor: "var(--cursor-hand)" }}
            title={item.label}
            onClick={() => onSelect(item.key)}
            onMouseEnter={() => {
              let tooltipText = item.tooltipMessage;

              if (item.key === "curiosities") {
                tooltipText = curiositiesEnabled
                  ? tooltipMessages.controls.curiositiesEnabled
                  : tooltipMessages.controls.curiositiesDisabled;
              } else if (item.key === "customize") {
                tooltipText = tooltipMessages.controls.customize;
              } else if (item.key === "settings") {
                tooltipText = tooltipMessages.controls.settings;
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
    </div>
  );
}
