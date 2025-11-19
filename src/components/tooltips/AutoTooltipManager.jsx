/*
 * Componente interno para manejar tooltips automáticos
 * • Debe estar dentro del TooltipProvider para usar el contexto
 * • Maneja tips automáticos y notificaciones contextuales
 */
import React, { useEffect, useRef } from "react";
import { useAutoTooltips } from "./useAutoTooltips";

const AutoTooltipManager = ({ currentRoom }) => {
  const { showContextualTip } = useAutoTooltips();
  const isInitialMount = useRef(true);

  // Detectar cambios de sala y mostrar tip contextual
  useEffect(() => {
    // Ignorar el primer render (carga inicial)
    if (isInitialMount.current) {
      isInitialMount.current = false;
      return;
    }

    if (currentRoom !== undefined) {
      showContextualTip("roomChange");
    }
  }, [currentRoom, showContextualTip]);

  return null; // Este componente no renderiza nada visual
};

export default AutoTooltipManager;
