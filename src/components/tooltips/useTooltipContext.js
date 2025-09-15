/*
 * Hook personalizado para usar el TooltipContext
 * • Separado del componente para cumplir con Fast Refresh
 * • Valida que se use dentro del TooltipProvider
 */
import { useContext } from "react";
import { TooltipContext } from "./context";

export const useTooltipContext = () => {
  const context = useContext(TooltipContext);
  if (!context) {
    throw new Error("useTooltipContext must be used within a TooltipProvider");
  }
  return context;
};
