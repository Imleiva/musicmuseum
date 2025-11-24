/*
 * Componente FAQ para mobile
 * • Reemplaza tooltips emergentes en dispositivos móviles
 * • Muestra ayuda y consejos en formato accordion
 * • Botón de interrogación flotante para abrir/cerrar
 */
import React, { useState } from "react";
import "./MobileFAQ.css";
import { useTranslation } from "../../hooks/useTranslation";

export default function MobileFAQ() {
  const [isOpen, setIsOpen] = useState(false);
  const [expandedItem, setExpandedItem] = useState(null);
  const { t } = useTranslation();

  const faqItems = [
    {
      category: "navigation",
      title: t("faq.rooms"),
      content: t("faq.roomsDesc"),
    },
    {
      category: "navigation",

      title: t("faq.navigation"),
      content: t("faq.navigationDesc"),
    },
    {
      category: "interactions",

      title: t("faq.posters"),
      content: t("faq.postersDesc"),
    },
    {
      category: "controls",
      title: t("faq.curiosities"),
      content: t("faq.curiositiesDesc"),
    },
    {
      category: "controls",

      title: t("faq.avatar"),
      content: t("faq.avatarDesc"),
    },
    {
      category: "controls",
      title: t("faq.settings"),
      content: t("faq.settingsDesc"),
    },
  ];

  const toggleItem = (index) => {
    setExpandedItem(expandedItem === index ? null : index);
  };

  return (
    <>
      {/* Botón flotante de interrogación */}
      <button
        className="mobile-faq-trigger"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Help & Tips"
      >
        ?
      </button>

      {/* Modal FAQ */}
      {isOpen && (
        <div className="mobile-faq-overlay" onClick={() => setIsOpen(false)}>
          <div
            className="mobile-faq-container"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="mobile-faq-header">
              <h2>{t("faq.title")}</h2>
              <button
                className="mobile-faq-close"
                onClick={() => setIsOpen(false)}
              >
                ✕
              </button>
            </div>

            <div className="mobile-faq-content">
              {faqItems.map((item, index) => (
                <div key={index} className="mobile-faq-item">
                  <button
                    className={`mobile-faq-question ${
                      expandedItem === index ? "expanded" : ""
                    }`}
                    onClick={() => toggleItem(index)}
                  >
                    <span className="mobile-faq-icon">{item.icon}</span>
                    <span className="mobile-faq-title">{item.title}</span>
                    <span className="mobile-faq-arrow">
                      {expandedItem === index ? "▼" : "▶"}
                    </span>
                  </button>
                  {expandedItem === index && (
                    <div className="mobile-faq-answer">{item.content}</div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
