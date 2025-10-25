import React, { useState, useEffect, useRef } from "react";

export default function GuideBubble({ text, title, onClick }) {
  const [textOffset, setTextOffset] = useState(0);
  const [showScrollIndicator, setShowScrollIndicator] = useState(false);
  const textRef = useRef(null);
  const CHARS_PER_VIEW = 120; // Caracteres aproximados que se muestran por vista

  useEffect(() => {
    // Resetear offset cuando cambia el texto
    setTextOffset(0);
    // Verificar si el texto necesita scroll
    setShowScrollIndicator(text.length > CHARS_PER_VIEW);
  }, [text]);

  const handleBubbleClick = (e) => {
    e.stopPropagation();

    // Si el texto es largo, manejar el scroll interno
    if (text.length > CHARS_PER_VIEW) {
      const nextOffset = textOffset + CHARS_PER_VIEW;
      if (nextOffset >= text.length) {
        // Si llegamos al final, volver al inicio
        setTextOffset(0);
      } else {
        setTextOffset(nextOffset);
      }
    } else {
      // Si el texto es corto, usar el onClick original (cambiar fact)
      onClick();
    }
  };

  const getDisplayText = () => {
    if (text.length <= CHARS_PER_VIEW) {
      return text;
    }

    const endOffset = Math.min(textOffset + CHARS_PER_VIEW, text.length);
    let displayText = text.slice(textOffset, endOffset);

    // Añadir puntos suspensivos si no estamos al final
    if (endOffset < text.length) {
      displayText += "...";
    }

    return displayText;
  };

  return (
    <div
      ref={textRef}
      className={`museum-guide-bubble clickable ${
        showScrollIndicator ? "scrollable-text" : ""
      }`}
      title={showScrollIndicator ? "Haz clic para ver más texto" : title}
      onClick={handleBubbleClick}
    >
      {getDisplayText()}
      {showScrollIndicator && (
        <div className="scroll-indicator">
          <span className="scroll-dots">⋯</span>
        </div>
      )}
    </div>
  );
}
