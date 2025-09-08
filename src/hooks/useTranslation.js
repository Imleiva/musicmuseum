/*
 * Hook personalizado para traducciones
 * • Interfaz simple para acceder al contexto de traducciones
 * • Validación de uso correcto dentro del provider
 * • Retorna funciones de traducción y cambio de idioma
 */
import { useContext } from "react";
import { TranslationContext } from "../contexts/TranslationContext";

export const useTranslation = () => {
  const context = useContext(TranslationContext);
  if (!context) {
    throw new Error("useTranslation must be used within a TranslationProvider");
  }
  return context;
};
