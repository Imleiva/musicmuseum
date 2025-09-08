/*
 * Panel de ayuda con controles de navegación
 * • Muestra instrucciones para usar la escena 3D
 * • Explica controles de cámara y interacciones
 * • Texto localizado según idioma seleccionado
 */
import React from "react";
import { useTranslation } from "../../hooks/useTranslation";

export default function ControlsHelp() {
  const { t } = useTranslation();

  return (
    <div className="controls-help">
      <h4>{t("controls.title")}</h4>
      <ul>
        <li>{t("controls.drag")}</li>
        <li>{t("controls.scroll")}</li>
        <li>{t("controls.look")}</li>
        <li>{t("controls.posters")}</li>
      </ul>
    </div>
  );
}
