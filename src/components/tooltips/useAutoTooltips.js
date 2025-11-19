/*
 * Hook para gestionar tooltips automáticos y tips del sistema
 * • Muestra tips periódicos sobre funcionalidades del museo
 * • Detecta cambios de avatar y muestra notificaciones
 * • Maneja hints contextuales basados en la navegación del usuario
 */
import { useEffect, useRef } from "react";
import { useTooltipContext } from "./useTooltipContext";
import { TooltipMessages } from "./messages";

export const useAutoTooltips = () => {
  const { showAutoTip, showNotification, tooltip, autoTipsBlocked } =
    useTooltipContext();
  const lastTipIndex = useRef(0);
  const tipInterval = useRef(null);
  const hasStarted = useRef(false);

  // Iniciar tips automáticos cada 30 segundos
  useEffect(() => {
    if (!tooltip || tooltip.priority === undefined) return;

    // Prevenir ejecución inmediata en el primer render
    if (!hasStarted.current) {
      hasStarted.current = true;
    }

    const autoTips = [
      TooltipMessages.autoTips.avatarChange,
      TooltipMessages.autoTips.exploration,
      TooltipMessages.autoTips.interaction,
      TooltipMessages.autoTips.navigation,
      TooltipMessages.autoTips.settings,
      TooltipMessages.autoTips.curiosities,
      TooltipMessages.autoTips.hidden,
    ];

    const startAutoTips = () => {
      tipInterval.current = setInterval(() => {
        // Solo mostrar si no hay tooltip manual activo y no están bloqueados
        if (tooltip.priority === "manual" || autoTipsBlocked) {
          return;
        }

        const tipIndex = lastTipIndex.current % autoTips.length;
        const tip = autoTips[tipIndex];

        showAutoTip(tip, "💡 Tip del Museo", 4000);
        lastTipIndex.current = tipIndex + 1;
      }, 15000); // Cada 15 segundos para pruebas
    };

    // Esperar más tiempo en móvil antes del primer tip para mejor experiencia inicial
    const isMobile = window.innerWidth <= 768;
    const initialDelay = setTimeout(startAutoTips, isMobile ? 15000 : 8000);

    return () => {
      if (tipInterval.current) {
        clearInterval(tipInterval.current);
      }
      clearTimeout(initialDelay);
    };
  }, [tooltip, autoTipsBlocked, showAutoTip]);

  // Función para mostrar notificación de cambio de avatar
  const notifyAvatarChange = (avatarName) => {
    if (!tooltip) return;

    const message = `¡Avatar cambiado a ${avatarName}! Descubre sus curiosidades únicas`;
    showNotification(message, "🎸 Nuevo Avatar", 3000);
  };

  // Función para mostrar tip contextual
  const showContextualTip = (context) => {
    if (!tooltip) return;

    const contextualTips = {
      roomChange: "🎵 Cada sala tiene su propia atmósfera y colección única",
      posterClick: "📋 Los pósters contienen información histórica detallada",
      settingsOpen: "⚙️ Personaliza tu experiencia del museo aquí",
      avatarSelect: "👤 Cada avatar tiene datos curiosos diferentes",
    };

    const tip = contextualTips[context];
    if (tip) {
      showAutoTip(tip, "✨ Info", 3000);
    }
  };

  return {
    notifyAvatarChange,
    showContextualTip,
  };
};
