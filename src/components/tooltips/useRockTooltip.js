/*
 * Hook personalizado para el sistema de tooltips del museo
 * • Simplifica el uso de tooltips en cualquier componente
 * • Gestiona el estado y configuración automáticamente
 * • Respeta la configuración global de tooltips del usuario
 */
import { useState, useEffect } from "react";

export const useRockTooltip = () => {
  const [tooltipState, setTooltipState] = useState({
    isVisible: false,
    title: "",
    message: "",
    type: "default",
    compact: false,
    persistent: false,
    duration: 4000,
  });

  const [tooltipsEnabled, setTooltipsEnabled] = useState(true);

  // Cargar configuración de tooltips desde localStorage
  useEffect(() => {
    const savedSettings = localStorage.getItem("museumSettings");
    if (savedSettings) {
      try {
        const settings = JSON.parse(savedSettings);
        setTooltipsEnabled(settings.showTooltips !== false);
      } catch (error) {
        console.warn("Error loading tooltip settings:", error);
      }
    }

    // Escuchar cambios en configuración
    const handleSettingsChange = (event) => {
      if (event.detail && event.detail.showTooltips !== undefined) {
        setTooltipsEnabled(event.detail.showTooltips);
      }
    };

    window.addEventListener("museumSettingsChanged", handleSettingsChange);
    return () => {
      window.removeEventListener("museumSettingsChanged", handleSettingsChange);
    };
  }, []);

  // Mostrar tooltip
  const showTooltip = (options) => {
    if (!tooltipsEnabled) return;

    setTooltipState({
      isVisible: true,
      title: options.title || "",
      message: options.message || "",
      type: options.type || "default",
      compact: options.compact || false,
      persistent: options.persistent || false,
      duration: options.duration || 4000,
    });
  };

  // Ocultar tooltip
  const hideTooltip = () => {
    setTooltipState((prev) => ({
      ...prev,
      isVisible: false,
    }));
  };

  // Tooltip rápido para información básica
  const showQuickTip = (message, title = "") => {
    showTooltip({
      title,
      message,
      compact: true,
      duration: 3000,
    });
  };

  // Tooltip de información
  const showInfo = (message, title = "ℹ️ Información") => {
    showTooltip({
      title,
      message,
      type: "info",
      duration: 5000,
    });
  };

  // Tooltip de advertencia
  const showWarning = (message, title = "⚠️ Aviso") => {
    showTooltip({
      title,
      message,
      type: "warning",
      duration: 6000,
    });
  };

  // Tooltip persistente (requiere cierre manual)
  const showPersistent = (message, title = "") => {
    showTooltip({
      title,
      message,
      persistent: true,
      duration: 0,
    });
  };

  return {
    tooltipState,
    tooltipsEnabled,
    showTooltip,
    hideTooltip,
    showQuickTip,
    showInfo,
    showWarning,
    showPersistent,
  };
};

// Métodos de conveniencia para usar desde cualquier componente
export const TooltipHelpers = {
  // Para botones de navegación
  navigation: {
    metalRoom: "Explora la colección de Heavy Metal, Thrash y Death Metal",
    rockRoom: "Descubre clásicos del Rock, Hard Rock y Progressive",
    punkRoom: "Sumérgete en Punk Rock, Hardcore y Alternative",
  },

  // Para controles de interfaz
  controls: {
    settings: "Abre la configuración del museo",
    customize: "Personaliza tu avatar de banda",
    curiosities: "Descubre datos curiosos sobre las bandas",
    search: "Busca bandas por nombre o género",
    filters: "Filtra por género o década",
  },

  // Para elementos interactivos
  interactions: {
    poster: "Haz clic para ver información detallada del concierto",
    avatar: "Selecciona este avatar para tu perfil",
    playAudio: "Reproduce audio relacionado con este concierto",
    carousel: "Navega por las imágenes del concierto",
  },
};
