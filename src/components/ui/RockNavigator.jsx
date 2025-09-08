/*
 * Navegador entre salas del museo
 * • Botones para cambiar entre salas (Metal, Rock, Punk)
 * • Muestra información de la sala actual
 * • Indicador de progreso (sala X de Y)
 * • Descripciones localizadas de cada sala
 */
import { useTranslation } from "../../hooks/useTranslation";

export default function RockNavigator({
  currentRoom,
  onRoomChange,
  totalRooms,
}) {
  const { t } = useTranslation();

  const roomNames = [t("rooms.metal"), t("rooms.rock"), t("rooms.punk")];

  const roomDescriptions = [
    t("navigator.descriptions.metal"),
    t("navigator.descriptions.rock"),
    t("navigator.descriptions.punk"),
  ];

  return (
    <nav className="rock-navigator">
      <div className="navigator-header">
        <h1>{t("navigator.title")}</h1>
        <p>{t("navigator.subtitle")}</p>
      </div>

      <div className="room-buttons">
        {Array.from({ length: totalRooms }, (_, index) => (
          <button
            key={index}
            className={`room-btn ${currentRoom === index ? "active" : ""}`}
            onClick={() => onRoomChange(index)}
          >
            {roomNames[index] || `Room ${index + 1}`}
          </button>
        ))}
      </div>

      <div className="room-info">
        <p className="current-room">{roomNames[currentRoom]}</p>
        <p className="room-description">{roomDescriptions[currentRoom]}</p>
        <p className="room-counter">
          {currentRoom + 1} / {totalRooms}
        </p>
      </div>
    </nav>
  );
}
