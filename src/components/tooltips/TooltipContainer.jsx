/*
 * Contenedor principal del sistema de tooltips
 * • Se integra en App.jsx para estar disponible globalmente
 * • Gestiona el estado del tooltip activo usando Context
 * • Renderiza el tooltip en esquina superior derecha
 */
import React from "react";
import RockTooltip from "./RockTooltip";
import { useTooltipContext } from "./useTooltipContext";

const TooltipContainer = () => {
  const { tooltip, hideTooltip } = useTooltipContext();

  return (
    <RockTooltip
      title={tooltip.title}
      message={tooltip.content}
      isVisible={tooltip.visible}
      onHide={hideTooltip}
      duration={4000}
    />
  );
};

export default TooltipContainer;
