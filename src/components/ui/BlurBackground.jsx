/*
 * Fondo difuminado para modales
 * • Overlay que difumina el contenido de fondo
 * • Permite cerrar modales al hacer click fuera
 * • Componente simple de utilidad visual
 */
import React from "react";
import "./AvatarGridSelector.css";

export default function BlurBackground({ show, onClick }) {
  if (!show) return null;
  return <div className="global-blur-backdrop" onClick={onClick} />;
}
