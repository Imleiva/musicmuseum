/*
 * Toolbar de herramientas del guía
 * • Botones para curiosidades, customización y configuración
 * • Icons específicos para cada herramienta
 * • Indicador visual de herramienta activa
 * • Tooltips localizados para cada botón
 */
import React from "react";
import "./GuideToolbar.css";
import { useTranslation } from "../../hooks/useTranslation";

export default function GuideToolbar({ active, onSelect }) {
  const { t } = useTranslation();

  const icons = [
    {
      key: "curiosities",
      label: t("toolbar.curiosities"),
      icon: (
        <img
          src="/images/icons/curiosidades.png"
          alt={t("toolbar.curiosities")}
          width={28}
          height={28}
        />
      ),
    },
    {
      key: "customize",
      label: t("toolbar.customize"),
      icon: (
        <img
          src="/images/icons/customavatar.png"
          alt={t("toolbar.customize")}
          width={28}
          height={28}
        />
      ),
    },
    {
      key: "settings",
      label: t("toolbar.settings"),
      icon: (
        <img
          src="/images/icons/settings.png"
          alt={t("toolbar.settings")}
          width={28}
          height={28}
        />
      ),
    },
  ];
  return (
    <div className="guide-toolbar">
      {icons.map((item) => (
        <button
          key={item.key}
          className={`guide-toolbar-btn${active === item.key ? " active" : ""}`}
          title={item.label}
          onClick={() => onSelect(item.key)}
        >
          {item.icon}
        </button>
      ))}
    </div>
  );
}
