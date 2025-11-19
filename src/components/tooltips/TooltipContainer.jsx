/*
 * Contenedor principal del sistema de tooltips
 * • Se integra en App.jsx para estar disponible globalmente
 * • Gestiona el estado del tooltip activo usando Context
 * • Renderiza el tooltip en esquina superior derecha
 */
import React, { useState, useEffect } from "react";
import RockTooltip from "./RockTooltip";
import { useTooltipContext } from "./useTooltipContext";

const TooltipContainer = () => {
  const { tooltip, hideTooltip } = useTooltipContext();
  const [canShowTooltips, setCanShowTooltips] = useState(false);

  // Esperar antes de permitir tooltips (especialmente en móvil)
  useEffect(() => {
    const isMobile = window.innerWidth <= 768;
    const delay = isMobile ? 15000 : 8000;
    
    const timer = setTimeout(() => {
      setCanShowTooltips(true);
    }, delay);

    return () => clearTimeout(timer);
  }, []);

  // No mostrar tooltips hasta que haya pasado el delay inicial
  if (!canShowTooltips) {
    return null;
  }

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
