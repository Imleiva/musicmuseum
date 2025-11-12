import React, { useState } from "react";
import "./MobileDrawerMenu.css";

export default function MobileDrawerMenu({ onNavigate }) {
  const [open, setOpen] = useState(false);
  const [showRooms, setShowRooms] = useState(false);

  return (
    <>
      {/* Botón hamburguesa fijo arriba a la izquierda */}
      <button
        className="drawer-hamburger"
        onClick={() => setOpen(true)}
        aria-label="Abrir menú"
      >
        <span className="drawer-hamburger-icon">☰</span>
      </button>

      {/* Drawer lateral */}
      <div
        className={`drawer-menu-overlay${open ? " open" : ""}`}
        onClick={() => setOpen(false)}
      />
      <nav className={`drawer-menu${open ? " open" : ""}`}>
        {/* Header con logo del museo */}
        <div className="drawer-menu-header">
          <img
            src="/musicmuseum/images/logoLRHF.png"
            alt="Logo Leiva'n Roll Hall Of Fame"
            className="drawer-menu-logo"
          />
        </div>

        <ul>
          <li style={{ position: "relative", width: "100%" }}>
            <button
              onClick={() => setShowRooms(!showRooms)}
              className="drawer-menu-btn drawer-menu-salas-btn"
              style={{
                position: "relative",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "100%",
              }}
            >
              <span style={{ flex: 1, textAlign: "center" }}>Salas</span>
              <span
                className="drawer-arrow"
                style={{
                  position: "absolute",
                  right: 18,
                  top: "50%",
                  transform: "translateY(-50%)",
                  fontSize: "0.9em",
                  color: "#ff4444",
                  pointerEvents: "none",
                  transition: "color 0.2s",
                }}
              >
                {showRooms ? "▲" : "▼"}
              </span>
            </button>
            {showRooms && (
              <ul className="drawer-submenu">
                <li>
                  <button
                    onClick={() => {
                      onNavigate("metal");
                      setOpen(false);
                    }}
                    className="drawer-menu-btn"
                  >
                    Metal
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => {
                      onNavigate("rock");
                      setOpen(false);
                    }}
                    className="drawer-menu-btn"
                  >
                    Rock
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => {
                      onNavigate("punk");
                      setOpen(false);
                    }}
                    className="drawer-menu-btn"
                  >
                    Punk
                  </button>
                </li>
              </ul>
            )}
          </li>
          <li>
            <button
              onClick={() => {
                onNavigate("avatar");
                setOpen(false);
              }}
              className="drawer-menu-btn"
            >
              Cambiar avatar
            </button>
          </li>
          <li>
            <button
              onClick={() => {
                onNavigate("settings");
                setOpen(false);
              }}
              className="drawer-menu-btn"
            >
              Ajustes
            </button>
          </li>
        </ul>

        {/* Botón volver al final */}
        <button
          className="drawer-back"
          onClick={() => setOpen(false)}
          aria-label="Volver"
        >
          Volver
        </button>
      </nav>
    </>
  );
}
