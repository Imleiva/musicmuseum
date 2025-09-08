// Avatares personalizados
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
  // Estado para la selección temporal (preview) y confirmada
  const [preview, setPreview] = useState(selectedKey || null);
  const [nextPreview, setNextPreview] = useState(null); // El siguiente avatar a mostrar
  const [displayedAvatar, setDisplayedAvatar] = useState(selectedKey || null); // Avatar que se muestra visualmente
  const [smokeActive, setSmokeActive] = useState(false);

  // Mostrar solo bandas en el grid
  const filtered = bands.filter(
    (b) =>
      (genre === "Todos" || b.genre === genre) &&
      (decade === "Todas" || b.decade === decade) &&
      b.name.toLowerCase().includes(search.toLowerCase())
  );

  // Modal y overlay usando portal para cubrir toda la pantalla
  return ReactDOM.createPortal(
    <>
      {/* Overlay para bloquear toda la pantalla */}
      <div className="avatar-grid-overlay" onClick={onClose} />
      {/* Modal principal */}
      <div className="avatar-grid-modal">
        {/* Grid de logos a la izquierda */}
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
                      if (preview === null) {
                        // Primera selección: solo aparece el humo y el avatar
                        setPreview(item.key);
                        setDisplayedAvatar(item.key); // Actualizar también el avatar mostrado
                        setSmokeActive(true);
                      } else {
                        // Ya hay un avatar seleccionado: transición completa
                        // NO cambiar displayedAvatar hasta que el humo lo cubra
                        setNextPreview(item.key);
                        setPreview(item.key); // Actualizar preview para la selección visual
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
        {/* Preview del avatar a la derecha */}
        <div className="avatar-grid-preview">
          {preview ? (
            <SmokeTransition
              isActive={smokeActive}
              onPhaseChange={(phase) => {
                // Cambiar el avatar mostrado cuando el humo está en su punto máximo
                if (phase === "peak" && nextPreview) {
                  setDisplayedAvatar(nextPreview); // Cambiar el avatar visual
                  setNextPreview(null);
                }
              }}
              onTransitionComplete={() => {
                setSmokeActive(false);
              }}
            >
              {(() => {
                // Mostrar el avatar que debe estar visualmente presente
                const currentKey = displayedAvatar;
                // Buscar en ambos arrays
                const item = [...bands, ...avatars].find(
                  (b) => b.key === currentKey
                );
                if (!item) return null;

                let avatarKey = null;
                if (item.genre !== "Avatar" && bandAvatarMapping[item.key]) {
                  avatarKey = bandAvatarMapping[item.key];
                }
                // Lógica especial para tete
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
