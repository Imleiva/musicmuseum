/*
 * Modal de configuración del museo
 * • Cambio de idioma (español/inglés)
 * • Configuración de audio, tema visual y velocidad de animaciones
 * • Ajustes de calidad de imagen y tooltips
 * • Guarda configuración en localStorage
 */
import React, { useState, useEffect, useCallback } from "react";
import { useTranslation } from "../../hooks/useTranslation";
import "./SettingsModal.css";

export default function SettingsModal({ isOpen, onClose }) {
  const { t, language, setLanguage } = useTranslation();
  const [settings, setSettings] = useState({
    language: "es",
    soundEnabled: true,
    // animationSpeed: "normal", // TODO: Implementar funcionalidad
    // imageQuality: "high", // TODO: Implementar funcionalidad
    showTooltips: true,
  });

  const [tempSettings, setTempSettings] = useState(null);
  const [hasUnsavedChanges, setHasUnsavedChanges] = useState(false);

  useEffect(() => {
    if (isOpen) {
      const savedSettings = localStorage.getItem("museumSettings");
      const defaultSettings = {
        language: "es",
        soundEnabled: true,
        // animationSpeed: "normal", // TODO: Implementar funcionalidad
        // imageQuality: "high", // TODO: Implementar funcionalidad
        showTooltips: true,
      };

      if (savedSettings) {
        const parsedSettings = JSON.parse(savedSettings);
        const finalSettings = { ...defaultSettings, ...parsedSettings };
        setSettings(finalSettings);
        setTempSettings(finalSettings);
      } else {
        const defaultSettings = {
          language: "es",
          soundEnabled: true,
          animationSpeed: "normal",
          imageQuality: "high",
          showTooltips: true,
        };
        setSettings(defaultSettings);
        setTempSettings(defaultSettings);
      }
      setHasUnsavedChanges(false);
    }
  }, [isOpen]);

  const saveSettings = (newSettings) => {
    setSettings(newSettings);
    localStorage.setItem("museumSettings", JSON.stringify(newSettings));
    if (newSettings.language !== language) {
      setLanguage(newSettings.language);
    }

    // Emitir evento personalizado para notificar cambios
    window.dispatchEvent(
      new CustomEvent("museumSettingsChanged", {
        detail: newSettings,
      })
    );
  };

  const handleSaveChanges = () => {
    if (tempSettings) {
      saveSettings(tempSettings);
      setHasUnsavedChanges(false);
      onClose(); // Cerrar el modal después de guardar
    }
  };

  const handleCancelChanges = () => {
    setTempSettings({ ...settings });
    setHasUnsavedChanges(false);
  };

  const handleSettingChange = (key, value) => {
    const newTempSettings = { ...tempSettings, [key]: value };
    setTempSettings(newTempSettings);
    setHasUnsavedChanges(true);
  };

  const doClose = useCallback(() => {
    if (onClose) onClose();
  }, [onClose]);

  const handleClose = useCallback(() => {
    // If there are unsaved changes, ask for confirmation before closing
    if (hasUnsavedChanges) {
      const ok = window.confirm(
        t("settings.discardConfirm") ||
          "You have unsaved changes. Discard and close?"
      );
      if (ok) doClose();
    } else {
      doClose();
    }
  }, [hasUnsavedChanges, doClose, t]);

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      handleClose();
    }
  };

  // Close on Escape key, with same confirmation logic
  useEffect(() => {
    if (!isOpen) return;
    const onKey = (ev) => {
      if (ev.key === "Escape" || ev.key === "Esc") {
        ev.preventDefault();
        handleClose();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isOpen, handleClose]);

  if (!isOpen) return null;

  return (
    <div className="settings-modal-overlay" onClick={handleOverlayClick}>
      <div className="settings-modal">
        <div className="settings-modal-header">
          <h2 className="settings-modal-title">{t("settings.title")}</h2>
          <button
            className="settings-modal-close"
            onClick={handleClose}
            title={t("common.close")}
          >
            ✕
          </button>
        </div>

        <div className="settings-modal-content">
          {/* Idioma */}
          <div className="settings-group">
            <h3 className="settings-group-title">{t("settings.language")}</h3>
            <div className="settings-option">
              <span className="settings-label">
                {t("settings.languageLabel")}
              </span>
              <div className="toggle-buttons">
                <button
                  className={`toggle-btn ${
                    tempSettings?.language === "es" ? "active" : ""
                  }`}
                  onClick={() => handleSettingChange("language", "es")}
                >
                  {t("settings.spanish")}
                </button>
                <button
                  className={`toggle-btn ${
                    tempSettings?.language === "en" ? "active" : ""
                  }`}
                  onClick={() => handleSettingChange("language", "en")}
                >
                  {t("settings.english")}
                </button>
              </div>
            </div>
          </div>

          {/* Audio */}
          <div className="settings-group">
            <h3 className="settings-group-title">{t("settings.audio")}</h3>
            <div className="settings-option">
              <span className="settings-label">{t("settings.audioLabel")}</span>
              <label className="rock-switch">
                <input
                  type="checkbox"
                  checked={tempSettings?.soundEnabled || false}
                  onChange={(e) =>
                    handleSettingChange("soundEnabled", e.target.checked)
                  }
                />
                <span className="rock-slider"></span>
              </label>
            </div>
          </div>

          {/* TODO: Implementar velocidad de animaciones */}
          {/*
          <div className="settings-group">
            <h3 className="settings-group-title">{t("settings.animations")}</h3>
            <div className="settings-option">
              <span className="settings-label">
                {t("settings.animationsLabel")}
              </span>
              <div className="toggle-buttons">
                <button
                  className={`toggle-btn ${
                    tempSettings?.animationSpeed === "slow" ? "active" : ""
                  }`}
                  onClick={() => handleSettingChange("animationSpeed", "slow")}
                >
                  {t("settings.slow")}
                </button>
                <button
                  className={`toggle-btn ${
                    tempSettings?.animationSpeed === "normal" ? "active" : ""
                  }`}
                  onClick={() =>
                    handleSettingChange("animationSpeed", "normal")
                  }
                >
                  {t("settings.normal")}
                </button>
                <button
                  className={`toggle-btn ${
                    tempSettings?.animationSpeed === "fast" ? "active" : ""
                  }`}
                  onClick={() => handleSettingChange("animationSpeed", "fast")}
                >
                  {t("settings.fast")}
                </button>
              </div>
            </div>
          </div>
          */}

          {/* TODO: Implementar calidad de imágenes */}
          {/*
          <div className="settings-group">
            <h3 className="settings-group-title">
              {t("settings.performance")}
            </h3>
            <div className="settings-option">
              <span className="settings-label">
                {t("settings.qualityLabel")}
              </span>
              <div className="toggle-buttons">
                <button
                  className={`toggle-btn ${
                    tempSettings?.imageQuality === "low" ? "active" : ""
                  }`}
                  onClick={() => handleSettingChange("imageQuality", "low")}
                >
                  {t("settings.low")}
                </button>
                <button
                  className={`toggle-btn ${
                    tempSettings?.imageQuality === "medium" ? "active" : ""
                  }`}
                  onClick={() => handleSettingChange("imageQuality", "medium")}
                >
                  {t("settings.medium")}
                </button>
                <button
                  className={`toggle-btn ${
                    tempSettings?.imageQuality === "high" ? "active" : ""
                  }`}
                  onClick={() => handleSettingChange("imageQuality", "high")}
                >
                  {t("settings.high")}
                </button>
              </div>
            </div>
          </div>
          */}

          {/* Tooltips */}
          <div className="settings-group">
            <h3 className="settings-group-title">{t("settings.help")}</h3>
            <div className="settings-option">
              <span className="settings-label">
                {t("settings.tooltipsLabel")}
              </span>
              <label className="rock-switch">
                <input
                  type="checkbox"
                  checked={tempSettings?.showTooltips || false}
                  onChange={(e) =>
                    handleSettingChange("showTooltips", e.target.checked)
                  }
                />
                <span className="rock-slider"></span>
              </label>
            </div>
          </div>
        </div>

        <div className="settings-modal-footer">
          <div className="settings-modal-actions">
            <button
              className="settings-reset-btn"
              onClick={() => {
                const defaultSettings = {
                  language: "es",
                  soundEnabled: true,
                  // animationSpeed: "normal", // TODO: Implementar funcionalidad
                  // imageQuality: "high", // TODO: Implementar funcionalidad
                  showTooltips: true,
                };
                setTempSettings(defaultSettings);
                setHasUnsavedChanges(true);
              }}
            >
              {t("settings.reset")}
            </button>
            <div className="settings-main-actions">
              <button
                className="settings-cancel-btn"
                onClick={handleCancelChanges}
                disabled={!hasUnsavedChanges}
              >
                {t("settings.cancel")}
              </button>
              <button
                className="settings-save-btn"
                onClick={handleSaveChanges}
                disabled={!hasUnsavedChanges}
              >
                {t("settings.save")}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
