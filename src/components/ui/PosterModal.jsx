/*
 * Modal de información de posters y conciertos
 * • Modal con información del concierto seleccionado
 * • Carousel de imágenes relacionadas con el evento
 * • Enlaces a plataformas de música (Spotify, YouTube, etc.)
 * • Controles de navegación y cierre
 */
import { useEffect, useState, useRef } from "react";
import { createPortal } from "react-dom";
import MusicLinks from "./MusicLinks";

export default function PosterModal({ concert, onClose }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const innerRef = useRef(null);
  const modalRef = useRef(null);

  // Crear array de imágenes
  const images = [];
  if (concert?.imageUrl) {
    images.push(concert.imageUrl);
  }
  if (concert?.additionalImages && concert.additionalImages.length > 0) {
    images.push(...concert.additionalImages);
  }

  const hasMultipleImages = images.length > 1;

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };
  useEffect(() => {
    if (concert) {
      document.body.classList.add("has-poster-modal");

      // Estrategia más agresiva para forzar el overlay por encima
      const canvas = document.querySelector("canvas");
      if (canvas) {
        canvas.style.zIndex = "1";
        canvas.style.position = "relative";
      }

      // Desactivar TODOS los elementos HTML de drei y three.js
      const dreiElements = document.querySelectorAll(
        'div[style*="position: absolute"], div[style*="transform-style"], div[data-r3f]'
      );
      dreiElements.forEach((el) => {
        el.style.pointerEvents = "none";
        el.style.zIndex = "1";
        el.style.transform = "translateZ(1px)";
      });

      // Buscar específicamente elementos HTML de drei (texto/HTML)
      const htmlElements = document.querySelectorAll(
        'div[style*="pointer-events"], div[style*="transform3d"]'
      );
      htmlElements.forEach((el) => {
        if (el.closest(".poster-modal-overlay")) return; // No tocar el overlay
        el.style.pointerEvents = "none";
        el.style.zIndex = "1";
        el.style.visibility = "hidden";
      });
    } else {
      document.body.classList.remove("has-poster-modal");

      // Restaurar canvas
      const canvas = document.querySelector("canvas");
      if (canvas) {
        canvas.style.zIndex = "";
        canvas.style.position = "";
      }

      // Reactivar elementos HTML de drei
      const dreiElements = document.querySelectorAll(
        'div[style*="position: absolute"], div[style*="transform-style"], div[data-r3f]'
      );
      dreiElements.forEach((el) => {
        el.style.pointerEvents = "";
        el.style.zIndex = "";
        el.style.transform = "";
      });

      const htmlElements = document.querySelectorAll(
        'div[style*="pointer-events"], div[style*="transform3d"]'
      );
      htmlElements.forEach((el) => {
        el.style.pointerEvents = "";
        el.style.zIndex = "";
        el.style.visibility = "";
      });
    }

    return () => {
      document.body.classList.remove("has-poster-modal");

      // Limpiar al desmontar
      const canvas = document.querySelector("canvas");
      if (canvas) {
        canvas.style.zIndex = "";
        canvas.style.position = "";
      }

      const allElements = document.querySelectorAll(
        'div[style*="position: absolute"], div[style*="transform-style"], div[data-r3f], div[style*="pointer-events"], div[style*="transform3d"]'
      );
      allElements.forEach((el) => {
        el.style.pointerEvents = "";
        el.style.zIndex = "";
        el.style.transform = "";
        el.style.visibility = "";
      });
    };
  }, [concert]);

  // Detectar si el ratón está cerca del borde derecho del área scrollable
  useEffect(() => {
    const inner = innerRef.current;
    const modal = modalRef.current;
    if (!inner || !modal) return;

    const onMove = (e) => {
      const rect = inner.getBoundingClientRect();
      const threshold = 22; // px desde el borde derecho para considerar 'sobre scrollbar'
      if (e.clientX >= rect.right - threshold && e.clientX <= rect.right) {
        modal.classList.add("scroll-near");
      } else {
        modal.classList.remove("scroll-near");
      }
    };

    inner.addEventListener("mousemove", onMove);
    inner.addEventListener("mouseleave", () =>
      modal.classList.remove("scroll-near")
    );

    return () => {
      inner.removeEventListener("mousemove", onMove);
      inner.removeEventListener("mouseleave", () =>
        modal.classList.remove("scroll-near")
      );
      modal.classList.remove("scroll-near");
    };
  }, []);

  if (!concert) return null;

  const handleOverlayClick = (e) => {
    // Close only when the overlay itself was clicked (not children)
    if (e && e.target === e.currentTarget) {
      if (onClose) onClose();
    }
  };

  const overlayContent = (
    <div className="poster-modal-overlay" onClick={handleOverlayClick}>
      <div className="poster-modal" ref={modalRef}>
        <div className="poster-modal-inner" ref={innerRef}>
          <header
            className="poster-modal-header"
            style={{ position: "relative", minHeight: 48 }}
          >
            <div className="poster-modal-band-info">
              <h3>🎸 {concert.band}</h3>
              <span className="poster-modal-genre-tag">{concert.genre}</span>
            </div>
            <button
              className="poster-modal-close"
              onClick={onClose}
              aria-label="Close poster modal"
              style={{ position: "absolute", top: 0, right: 0 }}
            >
              ✕
            </button>
          </header>

          {/* Image carousel section */}
          {images.length > 0 && (
            <div className="image-carousel">
              <div className="carousel-container carousel-square">
                <img
                  src={images[currentImageIndex]}
                  alt={`${concert.band} - Image ${currentImageIndex + 1}`}
                  className="concert-image"
                  onError={(e) => {
                    e.target.style.display = "none";
                  }}
                />

                {hasMultipleImages && (
                  <>
                    <button
                      className="carousel-btn prev-btn"
                      onClick={prevImage}
                    >
                      ‹
                    </button>
                    <button
                      className="carousel-btn next-btn"
                      onClick={nextImage}
                    >
                      ›
                    </button>
                    <div className="image-counter">
                      {currentImageIndex + 1} / {images.length}
                    </div>
                  </>
                )}
              </div>
            </div>
          )}

          <div className="concert-details">
            <p className="venue-info">📍 {concert.venue}</p>
            <p className="concert-date">📅 {concert.date}</p>
            <p className="attendance">👥 {concert.attendance || "Sold Out"}</p>
          </div>

          <div className="concert-description">
            <h4>Concert Details</h4>
            <p>{concert.description}</p>

            {concert.setlist && (
              <div className="setlist">
                <h5>🎵 Setlist Highlights</h5>
                <ul>
                  {concert.setlist.map((song, index) => (
                    <li key={index}>{song}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Enlaces a plataformas musicales */}
          <MusicLinks bandName={concert.band} />
        </div>
      </div>
    </div>
  );

  // Usar createPortal para renderizar al final del DOM (máxima prioridad)
  return createPortal(overlayContent, document.body);
}
