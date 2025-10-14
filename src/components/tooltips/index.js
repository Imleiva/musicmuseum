/*
 * Sistema de Tooltips del Rock & Metal Museum
 * • Exporta todos los componentes y hooks necesarios
 * • Punto de entrada único para el sistema de tooltips
 */

// Componente principal del tooltip
export { default as RockTooltip } from "./RockTooltip";

// Contenedor integrador
export { default as TooltipContainer } from "./TooltipContainer";

// Gestor de tooltips automáticos
export { default as AutoTooltipManager } from "./AutoTooltipManager";

// Context y Provider
export { TooltipProvider } from "./TooltipContext";
export { useTooltipContext } from "./useTooltipContext";

// Hooks personalizados
export { useAutoTooltips } from "./useAutoTooltips";

// Mensajes predefinidos
export { TooltipMessages } from "./messages";

// Componentes de ejemplo
export { NavigationButton, SettingsButton, PosterButton } from "./examples";

// Importar estilos CSS (se aplicarán automáticamente)
import "./RockTooltip.css";
