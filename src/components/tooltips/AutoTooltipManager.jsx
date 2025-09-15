/*
 * Componente interno para manejar tooltips automáticos
 * • Debe estar dentro del TooltipProvider para usar el contexto
 * • Maneja tips automáticos y notificaciones contextuales
 */
import React, { useEffect } from "react";
import { useAutoTooltips } from "./useAutoTooltips";

const AutoTooltipManager = ({ currentRoom }) => {
  const { showContextualTip } = useAutoTooltips();

  // Detectar cambios de sala y mostrar tip contextual
  useEffect(() => {
    if (currentRoom !== undefined) {
      showContextualTip("roomChange");
    }
  }, [currentRoom, showContextualTip]);

  return null; // Este componente no renderiza nada visual
};

export default AutoTooltipManager;
