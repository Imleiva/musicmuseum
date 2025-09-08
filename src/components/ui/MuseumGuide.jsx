/*
 * Guía virtual del museo con avatar personalizable
 * • Avatar interactivo que muestra curiosidades musicales
 * • Toolbar con herramientas (curiosidades, customización, configuración)
 * • Sistema de burbujas de texto con hechos de cada banda/avatar
 * • Integración con selector de avatares y modal de configuración
 */
import { useState, useEffect } from "react";
import "./MuseumGuide.css";
import "./AvatarImages.css";
import GuideToolbar from "./GuideToolbar";
import AvatarGridSelector from "./AvatarGridSelector";
import GuideAvatar from "./GuideAvatar";
import GuideBubble from "./GuideBubble";
import { useTranslation } from "../../hooks/useTranslation";

const AVATAR_SRC = "/images/avatartete.png";

export default function MuseumGuide({ onOverlay, onOpenSettings }) {
  const { t } = useTranslation();
  const [activeTool, setActiveTool] = useState("curiosities");
  const [avatar, setAvatar] = useState("leiva");
  const [showBubbles, setShowBubbles] = useState(true);
  const [bubbleIdx, setBubbleIdx] = useState(0);

  const greeting = t("museumGuide.greeting");
  const curiosities = [
    t("museumGuide.curiosities.ozzy"),
    t("museumGuide.curiosities.ironMaiden"),
    t("museumGuide.curiosities.keithRichards"),
    t("museumGuide.curiosities.daveGrohl"),
    t("museumGuide.curiosities.joeyJordison"),
    t("museumGuide.curiosities.kiss"),
  ];

  useEffect(() => {
    if (typeof onOverlay === "function") {
      onOverlay(activeTool === "customize");
    }
  }, [activeTool, onOverlay]);

  useEffect(() => {
    if (activeTool === "customize" && showBubbles) {
      setShowBubbles(false);
    }
  }, [activeTool, showBubbles]);

  const handleToolSelect = (tool) => {
    if (tool === "settings") {
      onOpenSettings();
    } else {
      setActiveTool(tool);
      if (tool === "customize") {
        setShowBubbles(false);
      }
    }
  };

  const handleAvatarSelectorClose = () => {
    setShowBubbles(true);
    setBubbleIdx(0);
    setActiveTool("curiosities");
  };

  const handleNextBubble = () => {
    const bubbles = avatarBubbles[avatar] || [];
    setBubbleIdx((idx) => (idx + 1) % bubbles.length);
  };

  const avatarBubbles = {
    leiva: [greeting, ...curiosities],
    thewarning: [
      t("museumGuide.avatars.thewarning.greeting"),
      t("museumGuide.avatars.thewarning.fact1"),
      t("museumGuide.avatars.thewarning.fact2"),
      t("museumGuide.avatars.thewarning.fact3"),
      t("museumGuide.avatars.thewarning.fact4"),
      t("museumGuide.avatars.thewarning.fact5"),
      t("museumGuide.avatars.thewarning.fact6"),
    ],
    ghost: [
      t("museumGuide.avatars.ghost.greeting"),
      t("museumGuide.avatars.ghost.fact1"),
      t("museumGuide.avatars.ghost.fact2"),
      t("museumGuide.avatars.ghost.fact3"),
      t("museumGuide.avatars.ghost.fact4"),
      t("museumGuide.avatars.ghost.fact5"),
      t("museumGuide.avatars.ghost.fact6"),
    ],
    acdc: [
      t("museumGuide.avatars.acdc.greeting"),
      t("museumGuide.avatars.acdc.fact1"),
      t("museumGuide.avatars.acdc.fact2"),
      t("museumGuide.avatars.acdc.fact3"),
      t("museumGuide.avatars.acdc.fact4"),
      t("museumGuide.avatars.acdc.fact5"),
      t("museumGuide.avatars.acdc.fact6"),
    ],
    ironmaiden: [
      t("museumGuide.avatars.ironmaiden.greeting"),
      t("museumGuide.avatars.ironmaiden.fact1"),
      t("museumGuide.avatars.ironmaiden.fact2"),
      t("museumGuide.avatars.ironmaiden.fact3"),
      t("museumGuide.avatars.ironmaiden.fact4"),
      t("museumGuide.avatars.ironmaiden.fact5"),
      t("museumGuide.avatars.ironmaiden.fact6"),
    ],
  };

  const AVATAR_MAP = {
    leiva: "/images/avatars/tete.png",
    thewarning: "/images/avatars/thewarning.png",
    ghost: "/images/avatars/ghost.png",
    acdc: "/images/avatars/angusacdc.png",
    queen: "/images/avatars/queen.png",
    ironmaiden: "/images/avatars/ironmaiden.png",
    aerosmith: "/images/avatars/aerosmith.png",
    kiss: "/images/avatars/kiss.png",
    metallica: "/images/avatars/metallica.png",
    megadeth: "/images/avatars/megadeth.png",
    gnr: "/images/avatars/gnr.png",
    bonjovi: "/images/avatars/bonjovi.png",
    defleppard: "/images/avatars/defleppard.png",
    poison: "/images/avatars/poison.png",
    motleycrue: "/images/avatars/motleycrue.png",
    alicecooper: "/images/avatars/alicecooper.png",
    whitesnake: "/images/avatars/whitesnake.png",
    vanhalen: "/images/avatars/vanhalen.png",
    extreme: "/images/avatars/extreme.png",
    thebaboonshow: "/images/avatars/thebaboonshow.png",
  };

  return (
    <div className="museum-guide">
      <div className="museum-guide-avatar-toolbar-container">
        <div className="museum-guide-avatar-bubble-container">
          <div
            className={`museum-guide-avatar-wrapper${
              activeTool !== "curiosities" ? " reserve-bubble-space" : ""
            }`}
            title="Maese Leiva"
          >
            <GuideAvatar
              src={AVATAR_MAP[avatar]}
              alt="Maese Leiva"
              className={`museum-guide-avatar avatar-img-${avatar}`}
              onClick={(e) => {
                e.stopPropagation();
              }}
            />
          </div>
          {activeTool !== "customize" && showBubbles && (
            <GuideBubble
              text={avatarBubbles[avatar]?.[bubbleIdx] || ""}
              title={t("museumGuide.clickForMore")}
              onClick={handleNextBubble}
            />
          )}
        </div>
        <div className="museum-guide-toolbar-container">
          <GuideToolbar active={activeTool} onSelect={handleToolSelect} />
        </div>
      </div>
      {activeTool === "customize" && (
        <AvatarGridSelector
          onSelect={(key) => {
            setAvatar(key);
          }}
          onClose={handleAvatarSelectorClose}
          currentAvatar={avatar}
        />
      )}
    </div>
  );
}
