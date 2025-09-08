/*
 * Modal para seleccionar avatares y bandas
 * • Muestra grid filtrable de logos de bandas
 * • Preview en tiempo real con transición de humo
 * • Filtros por género, década y búsqueda de texto
 * • Mapea bandas a sus avatares correspondientes
 */
import React, { useState } from "react";
import ReactDOM from "react-dom";
import SmokeTransition from "./SmokeTransition";
import PredictiveHoverEffect from "./PredictiveHoverEffect";
import AvatarPreview from "./AvatarPreview";
import { avatars } from "../../data/avatars.js";
import { bands } from "../../data/bands.js";
import { bandAvatarMapping } from "../../data/bandAvatarMapping.js";
import { genres, decades } from "../../data/filterUtils.js";
import "./AvatarImages.css";
import "./AvatarGridSelector.css";

export default function AvatarGridSelector({ onSelect, onClose, selectedKey }) {
  const [search, setSearch] = useState("");
  const [genre, setGenre] = useState("Todos");
  const [decade, setDecade] = useState("Todas");
  const [preview, setPreview] = useState(selectedKey || null);
  const [nextPrev, setNextPrev] = useState(null);
  const [currentAvatar, setCurrentAvatar] = useState(selectedKey || null);
  const [smokeActive, setSmokeActive] = useState(false);

  const filtered = bands.filter(
    (band) =>
      (genre === "Todos" || band.genre === genre) &&
      (decade === "Todas" || band.decade === decade) &&
      band.name.toLowerCase().includes(search.toLowerCase())
  );

  return ReactDOM.createPortal(
    <>
      <div className="avatar-grid-overlay" onClick={onClose} />
      <div className="avatar-grid-modal">
        <div className="avatar-grid-left">
          <div className="avatar-grid-selector-header">
            <input
              type="text"
              placeholder="Buscar grupo..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <select value={genre} onChange={(e) => setGenre(e.target.value)}>
              {genres.map((g) => (
                <option key={g} value={g}>
                  {g}
                </option>
              ))}
            </select>
            <select value={decade} onChange={(e) => setDecade(e.target.value)}>
              {decades.map((d) => (
                <option key={d} value={d}>
                  {d}
                </option>
              ))}
            </select>
          </div>
          <PredictiveHoverEffect>
            <div className="avatar-grid-selector-grid">
              {filtered.map((item) => (
                <div
                  key={item.key}
                  className={
                    "avatar-grid-selector-item" +
                    (preview === item.key ? " selected" : "")
                  }
                  onClick={() => {
                    if (preview !== item.key) {
                      if (!preview) {
                        setPreview(item.key);
                        setCurrentAvatar(item.key);
                        setSmokeActive(true);
                      } else {
                        setNextPrev(item.key);
                        setPreview(item.key);
                        setSmokeActive(true);
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
              disabled={!preview}
              onClick={() => {
                if (preview) {
                  console.log("Seleccionado:", preview);
                  onSelect(preview);
                  onClose();
                }
              }}
            >
              OK
            </button>
            <button onClick={onClose}>Cancelar</button>
          </div>
        </div>
        <div className="avatar-grid-preview">
          {preview ? (
            <SmokeTransition
              isActive={smokeActive}
              onPhaseChange={(phase) => {
                if (phase === "peak" && nextPrev) {
                  setCurrentAvatar(nextPrev);
                  setNextPrev(null);
                }
              }}
              onTransitionComplete={() => {
                setSmokeActive(false);
              }}
            >
              {(() => {
                const currentKey = currentAvatar;
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
            </SmokeTransition>
          ) : (
            <div className="avatar-preview-placeholder">
              Selecciona un grupo o avatar para ver su información
            </div>
          )}
        </div>
      </div>
    </>,
    document.body
  );
}
