/*
 * Provider para sistema de tooltips del museo
 * • Proporciona funciones show/hide para componentes
 * • Integra con configuración de showTooltips del usuario
 */
import React, {
  useState,
  useEffect,
  useCallback,
  useMemo,
  useRef,
} from "react";
import { TooltipContext } from "./context";

export const TooltipProvider = ({ children }) => {
  const [tooltip, setTooltip] = useState({
    visible: false,
    content: "",
    title: "",
    priority: "none", // "manual", "auto", "notification"
  });

  const [isEnabled, setIsEnabled] = useState(true);
  const [autoTipsBlocked, setAutoTipsBlocked] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const timeoutRef = useRef(null);
  const blockAutoTipsTimeoutRef = useRef(null);

  // Detectar cambios de tamaño de pantalla
  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth <= 768;
      setIsMobile(mobile);

      // Ocultar tooltips activos cuando se cambia a mobile
      if (mobile && tooltip.visible) {
        setTooltip({
          visible: false,
          content: "",
          title: "",
          priority: "none",
        });
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [tooltip.visible]);

  // Cargar configuración de tooltips desde localStorage
  useEffect(() => {
    const loadTooltipSettings = () => {
      const savedSettings = localStorage.getItem("museumSettings");

      if (savedSettings) {
        const settings = JSON.parse(savedSettings);
        const enabled = settings.showTooltips !== false;
        setIsEnabled(enabled);
      } else {
        setIsEnabled(true);
      }
    };

    // Cargar configuración inicial
    loadTooltipSettings();

    // Escuchar cambios en configuración
    const handleSettingsChange = () => {
      // Obtener el estado anterior
      const previousEnabled = isEnabled;

      // Cargar nueva configuración
      const savedSettings = localStorage.getItem("museumSettings");
      let newEnabled = true; // valor por defecto

      if (savedSettings) {
        const settings = JSON.parse(savedSettings);
        newEnabled = settings.showTooltips !== false;
      }

      // Actualizar estado
      setIsEnabled(newEnabled);

      // Si los tooltips se desactivaron, limpiar estado inmediatamente
      if (!newEnabled) {
        console.log(
          "🎸 Tooltips desactivados desde Settings - limpiando estado"
        );

        // Ocultar cualquier tooltip activo
        setTooltip({
          visible: false,
          content: "",
          title: "",
          priority: "none",
        });

        // Limpiar todos los timeouts
        if (timeoutRef.current) {
          clearTimeout(timeoutRef.current);
          timeoutRef.current = null;
        }
        if (blockAutoTipsTimeoutRef.current) {
          clearTimeout(blockAutoTipsTimeoutRef.current);
          blockAutoTipsTimeoutRef.current = null;
        }
        setAutoTipsBlocked(false);
      } else if (previousEnabled === false && newEnabled === true) {
        console.log("🎸 Tooltips reactivados desde Settings");
      }
    };

    window.addEventListener("museumSettingsChanged", handleSettingsChange);
    window.addEventListener("storage", handleSettingsChange);

    return () => {
      window.removeEventListener("museumSettingsChanged", handleSettingsChange);
      window.removeEventListener("storage", handleSettingsChange);

      // Limpiar timeout al desmontar
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      if (blockAutoTipsTimeoutRef.current) {
        clearTimeout(blockAutoTipsTimeoutRef.current);
      }
    };
  }, [isEnabled, tooltip.visible]);

  const showTooltip = useCallback(
    (content, title = "", priority = "manual") => {
      // Deshabilitar tooltips emergentes en mobile
      if (isMobile || !isEnabled) return;

      // Bloquear tooltips automáticos si están bloqueados
      if (autoTipsBlocked && priority === "auto") {
        return;
      }

      // Verificar prioridades: manual > notification > auto
      const currentPriority = tooltip.priority;
      const priorities = { manual: 3, notification: 2, auto: 1, none: 0 };

      if (priorities[currentPriority] > priorities[priority]) {
        return;
      }

      // Si es un tooltip manual, bloquear los automáticos por un tiempo
      if (priority === "manual") {
        setAutoTipsBlocked(true);

        // Limpiar timeout anterior si existe
        if (blockAutoTipsTimeoutRef.current) {
          clearTimeout(blockAutoTipsTimeoutRef.current);
        }
      }

      // Cancelar cualquier timeout de ocultación pendiente
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
        timeoutRef.current = null;
      }

      setTooltip({
        visible: true,
        content,
        title,
        priority,
      });
    },
    [isEnabled, isMobile, tooltip.priority, autoTipsBlocked]
  );

  const hideTooltip = useCallback(
    (priority = "manual") => {
      // Solo ocultar si la prioridad coincide con la actual o es mayor
      const currentPriority = tooltip.priority;
      const priorities = { manual: 3, notification: 2, auto: 1, none: 0 };

      if (priorities[currentPriority] > priorities[priority]) {
        return;
      }

      // Si se está ocultando un tooltip manual, programar desbloqueo de automáticos
      if (priority === "manual" && currentPriority === "manual") {
        // Esperar 5 segundos después de ocultar un tooltip manual antes de permitir automáticos
        blockAutoTipsTimeoutRef.current = setTimeout(() => {
          setAutoTipsBlocked(false);
          blockAutoTipsTimeoutRef.current = null;
        }, 5000);
      }

      // Limpiar timeout anterior si existe
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }

      // Ocultar con un pequeño delay para permitir transiciones suaves
      timeoutRef.current = setTimeout(() => {
        setTooltip((prev) => ({
          ...prev,
          visible: false,
          priority: "none",
        }));
        timeoutRef.current = null;
      }, 100); // 100ms de gracia para moverse entre elementos
    },
    [tooltip.priority]
  );

  const updateTooltip = useCallback(
    (content, title = "") => {
      if (isMobile || !isEnabled) return;

      setTooltip((prev) => ({
        ...prev,
        content,
        title,
      }));
    },
    [isEnabled, isMobile]
  );

  // Mostrar tooltip automático (tip del sistema)
  const showAutoTip = useCallback(
    (content, title = "💡 Tip", duration = 5000) => {
      if (isMobile || !isEnabled) return;

      // No mostrar si los tooltips automáticos están bloqueados
      if (autoTipsBlocked) {
        return;
      }

      // Verificar si hay un tooltip manual activo
      if (tooltip.priority === "manual") {
        return;
      }

      // Cancelar timeout actual si existe
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
        timeoutRef.current = null;
      }

      setTooltip({
        visible: true,
        content,
        title,
        priority: "auto",
      });

      // Auto-ocultar después del duration
      timeoutRef.current = setTimeout(() => {
        setTooltip((prev) => ({
          ...prev,
          visible: false,
          priority: "none",
        }));
        timeoutRef.current = null;
      }, duration);
    },
    [isEnabled, isMobile, tooltip.priority, autoTipsBlocked]
  );

  // Mostrar notificación especial (avatar cambiado, etc.)
  const showNotification = useCallback(
    (content, title = "✨ Nuevo", duration = 4000) => {
      if (isMobile || !isEnabled) return;

      // Las notificaciones tienen prioridad sobre tooltips automáticos
      // pero no sobre manuales
      if (tooltip.priority === "manual") {
        return;
      }

      // Cancelar timeout actual si existe
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
        timeoutRef.current = null;
      }

      setTooltip({
        visible: true,
        content,
        title,
        priority: "notification",
      });

      // Auto-ocultar después del duration
      timeoutRef.current = setTimeout(() => {
        setTooltip((prev) => ({
          ...prev,
          visible: false,
          priority: "none",
        }));
        timeoutRef.current = null;
      }, duration);
    },
    [isEnabled, isMobile, tooltip.priority]
  );

  const value = useMemo(
    () => ({
      tooltip,
      showTooltip,
      hideTooltip,
      updateTooltip,
      showAutoTip,
      showNotification,
      isEnabled,
      isMobile,
      autoTipsBlocked,
    }),
    [
      tooltip,
      showTooltip,
      hideTooltip,
      updateTooltip,
      showAutoTip,
      showNotification,
      isEnabled,
      isMobile,
      autoTipsBlocked,
    ]
  );

  return (
    <TooltipContext.Provider value={value}>{children}</TooltipContext.Provider>
  );
};
