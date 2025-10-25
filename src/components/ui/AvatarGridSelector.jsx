/*
 * Modal para seleccionar avatares y bandas
 * • Muestra grid filtrable de logos de bandas
 * • Preview en tiempo real con transición personalizada
 * • Filtros por género, década y búsqueda de texto
 * • Mapea bandas a sus avatares correspondientes
 */
import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import AlternatingTransition from "./TransitionEffects/AlternatingTransition.jsx";
import PredictiveHoverEffect from "./PredictiveHoverEffect";
import AvatarPreview from "./AvatarPreview";
import { useTranslation } from "../../hooks/useTranslation";
import { avatars } from "../../data/avatars.js";
import { bands } from "../../data/bands.js";
import { bandAvatarMapping } from "../../data/bandAvatarMapping.js";
import "./AvatarImages.css";
import "./AvatarGridSelector.css";

export default function AvatarGridSelector({
  isOpen,
  onAvatarSelect,
  onClose,
  currentAvatar,
  transitionsEnabled,
}) {
  const { t } = useTranslation();
  const [search, setSearch] = useState("");
  const [genre, setGenre] = useState(""); // Vacío para mostrar placeholder
  const [decade, setDecade] = useState(""); // Vacío para mostrar placeholder
  const [localTransitionsEnabled, setLocalTransitionsEnabled] =
    useState(transitionsEnabled);

  // Sincronizar con prop externa cuando cambie
  useEffect(() => {
    setLocalTransitionsEnabled(transitionsEnabled);
  }, [transitionsEnabled]);

  // Generar listas localizadas de géneros y décadas
  const localizedGenres = [
    t("avatarGridSelector.allGenres"),
    ...Array.from(new Set(bands.map((b) => b.genre))),
  ];

  const localizedDecades = [
    t("avatarGridSelector.allDecades"),
    ...Array.from(new Set([...avatars, ...bands].map((b) => b.decade))),
  ];
  const [preview, setPreview] = useState(currentAvatar || "leiva");
  const [nextPrev, setNextPrev] = useState(null);
  const [displayAvatar, setDisplayAvatar] = useState(currentAvatar || "leiva");
  const [smokeActive, setSmokeActive] = useState(false);

  // Si no está abierto, no renderizar nada
  if (!isOpen) return null;

  const filtered = bands
    .filter(
      (band) =>
        (genre === "" ||
          genre === t("avatarGridSelector.allGenres") ||
          band.genre === genre) &&
        (decade === "" ||
          decade === t("avatarGridSelector.allDecades") ||
          band.decade === decade) &&
        band.name.toLowerCase().includes(search.toLowerCase())
    )
    .sort((a, b) => {
      // Leiva siempre el primero
      if (a.key === "leiva") return -1;
      if (b.key === "leiva") return 1;

      // Ordenar: primero los que tienen avatar, luego los que no
      const aHasAvatar = bandAvatarMapping[a.key] ? 1 : 0;
      const bHasAvatar = bandAvatarMapping[b.key] ? 1 : 0;

      // Si uno tiene avatar y el otro no, priorizar el que tiene avatar
      if (aHasAvatar !== bHasAvatar) {
        return bHasAvatar - aHasAvatar; // Los que tienen avatar (1) van antes que los que no (0)
      }

      // Si ambos tienen o no tienen avatar, ordenar alfabéticamente
      return a.name.localeCompare(b.name);
    });

  return ReactDOM.createPortal(
    <>
      <div className="avatar-grid-overlay" onClick={onClose} />
      <div className="avatar-grid-modal">
        <div className="avatar-grid-left">
          <div className="avatar-grid-selector-header">
            <div className="header-row-1">
              <input
                type="text"
                className="clickable search-input"
                placeholder={t("avatarGridSelector.searchPlaceholder")}
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
              <div className="transitions-switch-container">
                <span className="transitions-switch-label">
                  Animaciones {t.transitionsToggle}
                </span>
                <label className="transitions-switch clickable">
                  <input
                    type="checkbox"
                    checked={localTransitionsEnabled}
                    onChange={(e) =>
                      setLocalTransitionsEnabled(e.target.checked)
                    }
                  />
                  <span className="transitions-switch-slider"></span>
                </label>
              </div>
            </div>
            <div className="header-row-2">
              <select
                className="clickable"
                value={genre}
                onChange={(e) => setGenre(e.target.value)}
              >
                <option value="" disabled>
                  {t("avatarGridSelector.genrePlaceholder")}
                </option>
                {localizedGenres.map((g) => (
                  <option key={g} value={g}>
                    {g}
                  </option>
                ))}
              </select>
              <select
                className="clickable"
                value={decade}
                onChange={(e) => setDecade(e.target.value)}
              >
                <option value="" disabled>
                  {t("avatarGridSelector.decadePlaceholder")}
                </option>
                {localizedDecades.map((d) => (
                  <option key={d} value={d}>
                    {d}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <PredictiveHoverEffect>
            <div
              className={`avatar-grid-selector-grid ${
                smokeActive ? "transitioning" : ""
              }`}
            >
              {filtered.map((item) => (
                <div
                  key={item.key}
                  className={
                    "avatar-grid-selector-item clickable" +
                    (preview === item.key ? " selected" : "")
                  }
                  onClick={() => {
                    // Bloquear interacciones durante la transición
                    if (smokeActive) return;

                    if (preview !== item.key) {
                      setPreview(item.key);

                      if (localTransitionsEnabled) {
                        // Con transiciones
                        if (!preview) {
                          setDisplayAvatar(item.key);
                          setSmokeActive(true);
                        } else {
                          setNextPrev(item.key);
                          setSmokeActive(true);
                        }
                      } else {
                        // Sin transiciones: cambio inmediato
                        setDisplayAvatar(item.key);
                        setSmokeActive(false); // Asegurar que no hay animación
                      }
                    }
                  }}
                >
                  <img
                    src={item.logo}
                    alt={item.name}
                    className="avatar-grid-logo"
                  />
                </div>
              ))}
            </div>
          </PredictiveHoverEffect>
          <div className="avatar-grid-selector-footer">
            <button
              className="clickable"
              disabled={!preview}
              onClick={() => {
                if (preview) {
                  console.log("Seleccionado:", preview);
                  onAvatarSelect(preview);
                  onClose();
                }
              }}
            >
              {t("avatarGridSelector.ok")}
            </button>
            <button className="clickable" onClick={onClose}>
              {t("avatarGridSelector.cancel")}
            </button>
          </div>
        </div>
        <div className="avatar-grid-preview">
          {preview ? (
            localTransitionsEnabled ? (
              <AlternatingTransition
                isActive={smokeActive}
                onPhaseChange={(phase) => {
                  if (phase === "peak" && nextPrev) {
                    setDisplayAvatar(nextPrev);
                    setNextPrev(null);
                  }
                }}
                onTransitionComplete={() => {
                  setSmokeActive(false);
                }}
              >
                {(() => {
                  const currentKey = displayAvatar;
                  const item = [...bands, ...avatars].find(
                    (band) => band.key === currentKey
                  );
                  if (!item) return null;

                  let avatarKey = null;
                  if (item.genre !== "Avatar" && bandAvatarMapping[item.key]) {
                    avatarKey = bandAvatarMapping[item.key];
                  }
                  // TODO: hacer esto más genérico
                  const isMaeseLeiva = item.key === "leiva";
                  return (
                    <div className="avatar-preview-col" key={item.key}>
                      {item.genre === "Avatar" ? (
                        <AvatarPreview avatarKey={item.key} />
                      ) : avatarKey ? (
                        <AvatarPreview avatarKey={avatarKey} />
                      ) : (
                        <img
                          src={item.logo}
                          alt={item.name}
                          className="avatar-preview-img"
                        />
                      )}
                      <div className="avatar-preview-name">
                        {isMaeseLeiva ? "Maese Leiva" : item.name}
                      </div>
                      {!isMaeseLeiva && item.genre !== "Avatar" && (
                        <div className="avatar-preview-meta">
                          {item.genre} · {item.decade}
                        </div>
                      )}
                    </div>
                  );
                })()}
              </AlternatingTransition>
            ) : (
              <div className="no-transition-preview">
                {(() => {
                  const currentKey = displayAvatar;
                  const item = [...bands, ...avatars].find(
                    (band) => band.key === currentKey
                  );
                  if (!item) return null;

                  let avatarKey = null;
                  if (item.genre !== "Avatar" && bandAvatarMapping[item.key]) {
                    avatarKey = bandAvatarMapping[item.key];
                  }
                  const isMaeseLeiva = item.key === "leiva";
                  return (
                    <div className="avatar-preview-col" key={item.key}>
                      {item.genre === "Avatar" ? (
                        <AvatarPreview avatarKey={item.key} />
                      ) : avatarKey ? (
                        <AvatarPreview avatarKey={avatarKey} />
                      ) : (
                        <img
                          src={item.logo}
                          alt={item.name}
                          className="avatar-preview-img"
                        />
                      )}
                      <div className="avatar-preview-name">
                        {isMaeseLeiva ? "Maese Leiva" : item.name}
                      </div>
                      {!isMaeseLeiva && item.genre !== "Avatar" && (
                        <div className="avatar-preview-meta">
                          {item.genre} · {item.decade}
                        </div>
                      )}
                    </div>
                  );
                })()}
              </div>
            )
          ) : (
            <div className="avatar-preview-placeholder">
              {t("avatarGridSelector.selectPrompt")}
            </div>
          )}
        </div>
      </div>
    </>,
    document.body
  );
}
