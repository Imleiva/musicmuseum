import React, { useState } from "react";
import "./MobileDrawerMenu.css";

export default function MobileDrawerMenu({ onNavigate, onMenuOpen }) {
  const [open, setOpen] = useState(false);
  const [showRooms, setShowRooms] = useState(false);

  const handleOpen = () => {
    setOpen(true);
    if (onMenuOpen) onMenuOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    if (onMenuOpen) onMenuOpen(false);
  };

  return (
    <>
      {/* Botón hamburguesa fijo arriba a la izquierda */}
      <button
        className="drawer-hamburger"
        onClick={handleOpen}
        aria-label="Abrir menú"
      >
        <span className="drawer-hamburger-icon">☰</span>
      </button>

      {/* Overlay y Drawer lateral */}
      {open && (
        <>
          <div
            className="drawer-menu-overlay open"
            onClick={handleClose}
            style={{ cursor: 'pointer' }}
          />
          <nav className="drawer-menu open">
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
                      handleClose();
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
                      handleClose();
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
                      handleClose();
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
                handleClose();
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
                handleClose();
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
          onClick={handleClose}
          aria-label="Volver"
        >
          Volver
        </button>
      </nav>
        </>
      )}
    </>
  );
}
