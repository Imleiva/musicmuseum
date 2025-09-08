/*
 * Contexto para manejo de traducciones
 * • Sistema de internacionalización (i18n)
 * • Cambio dinámico entre español e inglés
 * • Persistencia del idioma en localStorage
 * • Hook personalizado para acceso a traducciones
 */
import React, { createContext, useState, useEffect } from "react";
import { translations } from "../translations";

const TranslationContext = createContext();

export { TranslationContext };
export const TranslationProvider = ({ children }) => {
  const [language, setLanguage] = useState("es");

  // Cargar idioma guardado al iniciar
  useEffect(() => {
    const savedSettings = localStorage.getItem("museumSettings");
    if (savedSettings) {
      const settings = JSON.parse(savedSettings);
      if (settings.language) {
        setLanguage(settings.language);
      }
    }
  }, []);

  // Función para cambiar idioma
  const changeLanguage = (newLanguage) => {
    setLanguage(newLanguage);
    // Actualizar configuración guardada
    const savedSettings = localStorage.getItem("museumSettings");
    if (savedSettings) {
      const settings = JSON.parse(savedSettings);
      settings.language = newLanguage;
      localStorage.setItem("museumSettings", JSON.stringify(settings));
    } else {
      localStorage.setItem(
        "museumSettings",
        JSON.stringify({ language: newLanguage })
      );
    }
  };

  // Función para obtener traducción
  const t = (key, defaultValue = "") => {
    const keys = key.split(".");
    let value = translations[language];

    for (const k of keys) {
      value = value?.[k];
    }

    return value || defaultValue || key;
  };

  // Función para obtener traducción con parámetros
  const tWithParams = (key, params = {}, defaultValue = "") => {
    let text = t(key, defaultValue);

    // Reemplazar parámetros en el texto
    Object.keys(params).forEach((param) => {
      text = text.replace(new RegExp(`\\{${param}\\}`, "g"), params[param]);
    });

    return text;
  };

  const value = {
    language,
    setLanguage: changeLanguage,
    t,
    tWithParams,
    translations: translations[language],
  };

  return (
    <TranslationContext.Provider value={value}>
      {children}
    </TranslationContext.Provider>
  );
};
