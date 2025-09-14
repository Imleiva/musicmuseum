/*
 * Guía virtual del museo con avatar personalizable
 * • Avatar interactivo que muestra curiosidades musicales
 * • Toolbar con herramientas (curiosidades, customización, configuración)
 * • Sistema de burbujas de texto con hechos de cada banda/avatar
 * • Integración con selector de avatares y modal de configuración
 */
import { useState, useEffect, useCallback } from "react";
import "./MuseumGuide.css";
import "./AvatarImages.css";
import GuideToolbar from "./GuideToolbar";
import AvatarGridSelector from "./AvatarGridSelector";
import GuideAvatar from "./GuideAvatar";
import GuideBubble from "./GuideBubble";
import { useTranslation } from "../../hooks/useTranslation";
import { greetings } from "../../data/greetings";
import { facts } from "../../data/facts";

const AVATAR_SRC = "/images/avatars/tete.png";

export default function MuseumGuide({ onOverlay, onOpenSettings }) {
  const { t, language } = useTranslation();
  const [activeTool, setActiveTool] = useState("curiosities");
  const [avatar, setAvatar] = useState("leiva");
  const [showBubbles, setShowBubbles] = useState(true);
  const [bubbleIdx, setBubbleIdx] = useState(0);
  const [avatarBubbles, setAvatarBubbles] = useState({});
  const [currentGreeting, setCurrentGreeting] = useState({});
  const [settings, setSettings] = useState({
    avatarTransitions: true,
  });

  // Cargar configuraciones desde localStorage
  useEffect(() => {
    const savedSettings = localStorage.getItem("museumSettings");
    if (savedSettings) {
      const parsedSettings = JSON.parse(savedSettings);
      setSettings((prev) => ({
        ...prev,
        avatarTransitions:
          parsedSettings.avatarTransitions !== undefined
            ? parsedSettings.avatarTransitions
            : true,
      }));
    }
  }, []);

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

  const handleAvatarChange = (newAvatar) => {
    if (settings.avatarTransitions) {
      // Con transiciones: cambio normal con animaciones
      setAvatar(newAvatar);
    } else {
      // Sin transiciones
      setAvatar(newAvatar);
      // Forzar re-render inmediato sin animaciones
      setBubbleIdx(0);
    }
    // Generar nuevas bubbles para el nuevo avatar con NUEVO saludo
    const newBubbles = generateAvatarBubbles(newAvatar);
    setAvatarBubbles((prev) => ({
      ...prev,
      [newAvatar]: newBubbles,
    }));
    // Marcar que este avatar tiene saludo activo
    setCurrentGreeting((prev) => ({
      ...prev,
      [newAvatar]: newBubbles[0] || null,
    }));
    setBubbleIdx(0);
  };

  const handleAvatarClick = () => {
    // Solo cambiar al siguiente fact, sin regenerar saludo
    const bubbles = avatarBubbles[avatar] || [];
    const factStartIndex = currentGreeting[avatar] ? 1 : 0; // Saltar saludo si existe
    const totalFacts = bubbles.length - factStartIndex;

    if (totalFacts > 0) {
      const nextFactIndex =
        factStartIndex + ((bubbleIdx - factStartIndex + 1) % totalFacts);
      setBubbleIdx(nextFactIndex);
    }
  };

  const handleNextBubble = () => {
    const bubbles = avatarBubbles[avatar] || [];
    const hasGreeting = currentGreeting[avatar] ? 1 : 0;
    const factCount = bubbles.length - hasGreeting;

    if (factCount > 0) {
      // Si estamos en el saludo (índice 0) y hay facts, ir al primer fact
      if (bubbleIdx === 0 && hasGreeting && factCount > 0) {
        setBubbleIdx(1);
      } else {
        // Ciclar solo entre facts (índices 1+)
        const currentFactIndex = bubbleIdx - hasGreeting;
        const nextFactIndex =
          hasGreeting + ((currentFactIndex + 1) % factCount);
        setBubbleIdx(nextFactIndex);
      }
    }
  };

  // Función para generar bubbles con saludo aleatorio (solo para cambio de avatar)
  const generateAvatarBubbles = useCallback(
    (avatarKey) => {
      const avatarGreetings = greetings[language]?.[avatarKey] || [];
      const avatarFacts = facts[language]?.[avatarKey] || [];

      // Seleccionar UN saludo aleatorio para el nuevo avatar
      const randomGreeting =
        avatarGreetings.length > 0
          ? avatarGreetings[Math.floor(Math.random() * avatarGreetings.length)]
          : null;

      // Estructura: [saludo, ...facts] o solo [...facts] si no hay saludo
      return randomGreeting ? [randomGreeting, ...avatarFacts] : avatarFacts;
    },
    [language]
  );

  // Inicializar bubbles para el avatar actual
  useEffect(() => {
    const newBubbles = generateAvatarBubbles(avatar);
    setAvatarBubbles((prev) => ({
      ...prev,
      [avatar]: newBubbles,
    }));
    // Marcar el saludo actual
    setCurrentGreeting((prev) => ({
      ...prev,
      [avatar]: newBubbles[0] || null,
    }));
  }, [avatar, language, generateAvatarBubbles]);

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
    pinkfloyd: "/images/avatars/pinkfloyd.png",
    davidbowie: "/images/avatars/davidbowie.png",
    nirvana: "/images/avatars/nirvana.png",
    ozzy: "/images/avatars/ozzy.png",
    brucespringsteen: "/images/avatars/brucespringsteen.png",
    oasis: "/images/avatars/oasis.png",
    jinjer: "/images/avatars/jinjer.png",
    archenemy: "/images/avatars/archenemy.png",
    blondie: "/images/avatars/blondie.png",
    slash: "/images/avatars/slash.png",
    eltonjohn: "/images/avatars/eltonjohn.png",
    motorhead: "/images/avatars/motorhead.png",
    pantera: "/images/avatars/pantera.png",
    radiohead: "/images/avatars/radiohead.png",
    ratm: "/images/avatars/ratm.png",
    gretavanfleet: "/images/avatars/gretavanfleet.png",
    manowar: "/images/avatars/manowar.png",
    judaspriest: "/images/avatars/judaspriest.png",
    scorpions: "/images/avatars/scorpions.png",
    blueoystercult: "/images/avatars/blueoystercult.png",
    jeffscottsoto: "/images/avatars/jeffscottsoto.png",
    opeth: "/images/avatars/opeth.png",
    stevenwilson: "/images/avatars/stevenwilson.png",
    stevevai: "/images/avatars/stevevai.png",
    michaeljackson: "/images/avatars/michaeljackson.png",
    bryanadams: "/images/avatars/bryanadams.png",
    johnmayer: "/images/avatars/johnmayer.png",
    jimihendrix: "/images/avatars/jimihendrix.png",
    prince: "/images/avatars/prince.png",
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
                handleAvatarClick();
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
      <AvatarGridSelector
        isOpen={activeTool === "customize"}
        onAvatarSelect={(key) => {
          handleAvatarChange(key);
        }}
        onClose={handleAvatarSelectorClose}
        currentAvatar={avatar}
        transitionsEnabled={settings.avatarTransitions}
      />
    </div>
  );
}
