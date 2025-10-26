import React, { useState, useEffect, useRef } from "react";

export default function GuideBubble({ text, title, onClick }) {
  const [textOffset, setTextOffset] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const textRef = useRef(null);
  const CHARS_PER_VIEW = 120; // Caracteres aproximados que se muestran por vista en móvil

  // Detectar si es móvil
  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkIsMobile();
    window.addEventListener("resize", checkIsMobile);

    return () => window.removeEventListener("resize", checkIsMobile);
  }, []);

  useEffect(() => {
    // Resetear offset cuando cambia el texto
    setTextOffset(0);
  }, [text]);

  const handleBubbleClick = (e) => {
    e.stopPropagation();

    // En desktop, siempre usar el onClick original (cambiar fact)
    if (!isMobile) {
      onClick();
      return;
    }

    // En móvil, manejar paginación solo si el texto es largo
    if (text.length > CHARS_PER_VIEW) {
      const nextOffset = textOffset + CHARS_PER_VIEW;
      if (nextOffset >= text.length) {
        // Si llegamos al final, cambiar al siguiente fact
        setTextOffset(0);
        onClick();
      } else {
        setTextOffset(nextOffset);
      }
    } else {
      // Si el texto es corto, cambiar fact directamente
      onClick();
    }
  };

  const handleTouchStart = (e) => {
    if (!isMobile) return;

    const touch = e.touches[0];
    const startY = touch.clientY;

    const handleTouchMove = (moveEvent) => {
      const moveTouch = moveEvent.touches[0];
      const deltaY = startY - moveTouch.clientY;

      // Si desliza hacia arriba (deltaY > 30)
      if (deltaY > 30 && text.length > CHARS_PER_VIEW) {
        const nextOffset = textOffset + CHARS_PER_VIEW;
        if (nextOffset < text.length) {
          setTextOffset(nextOffset);
        } else {
          // Al final, cambiar fact
          setTextOffset(0);
          onClick();
        }

        // Limpiar listeners
        document.removeEventListener("touchmove", handleTouchMove);
        document.removeEventListener("touchend", handleTouchEnd);
      }
    };

    const handleTouchEnd = () => {
      document.removeEventListener("touchmove", handleTouchMove);
      document.removeEventListener("touchend", handleTouchEnd);
    };

    document.addEventListener("touchmove", handleTouchMove);
    document.addEventListener("touchend", handleTouchEnd);
  };

  const getDisplayText = () => {
    // En desktop, mostrar siempre el texto completo
    if (!isMobile) {
      return text;
    }

    // En móvil, usar paginación solo si el texto es largo
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

  const showScrollIndicator =
    isMobile &&
    text.length > CHARS_PER_VIEW &&
    textOffset + CHARS_PER_VIEW < text.length;

  return (
    <div
      ref={textRef}
      className={`museum-guide-bubble clickable ${
        showScrollIndicator ? "scrollable-text" : ""
      }`}
      title={
        showScrollIndicator ? "Desliza hacia arriba para ver más texto" : title
      }
      onClick={handleBubbleClick}
      onTouchStart={handleTouchStart}
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
