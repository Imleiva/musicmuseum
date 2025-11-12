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
import { getImagePath } from "../../utils/assetPaths";

const AVATAR_SRC = getImagePath("/images/avatars/tete.png");

export default function MuseumGuide({ onOverlay, onOpenSettings }) {
  const { t, language } = useTranslation();
  const [activeTool, setActiveTool] = useState("curiosities");
  const [avatar, setAvatar] = useState("leiva");
  const [showBubbles, setShowBubbles] = useState(true);
  const [curiositiesEnabled, setCuriositiesEnabled] = useState(true);
  const [bubbleIdx, setBubbleIdx] = useState(0);
  const [avatarBubbles, setAvatarBubbles] = useState({});
  const [currentGreeting, setCurrentGreeting] = useState({});
  const [toolbarCollapsed, setToolbarCollapsed] = useState(true); // Iniciar colapsado
  const [settings, setSettings] = useState({
    avatarTransitions: true,
  });

  // Cargar configuraciones desde localStorage
  useEffect(() => {
    const loadSettings = () => {
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
    };

    // Cargar al inicio
    loadSettings();

    // Escuchar cambios en localStorage
    const handleStorageChange = (e) => {
      if (e.key === "museumSettings") {
        loadSettings();
      }
    };

    window.addEventListener("storage", handleStorageChange);

    // También escuchar eventos personalizados para cambios en la misma pestaña
    const handleSettingsChange = () => {
      loadSettings();
    };

    window.addEventListener("museumSettingsChanged", handleSettingsChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
      window.removeEventListener("museumSettingsChanged", handleSettingsChange);
    };
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
    console.log("[MuseumGuide] handleToolSelect:", tool);
    if (tool === "settings") {
      onOpenSettings();
    } else if (tool === "curiosities") {
      // Toggle las curiosidades
      setCuriositiesEnabled(!curiositiesEnabled);
      setShowBubbles(!curiositiesEnabled);
      // Si las estamos deshabilitando, cambiar el tool activo
      if (curiositiesEnabled) {
        setActiveTool("none");
      } else {
        setActiveTool("curiosities");
      }
    } else {
      setActiveTool(tool);
      if (tool === "customize") {
        setShowBubbles(false);
      }
    }
    setTimeout(() => {
      console.log("[MuseumGuide] activeTool:", activeTool);
    }, 200);
  };

  const handleAvatarSelectorClose = () => {
    // Solo restaurar las curiosidades si estaban habilitadas
    if (curiositiesEnabled) {
      setShowBubbles(true);
      setActiveTool("curiosities");
    }
    setBubbleIdx(0);
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

  const handleToggleToolbar = () => {
    setToolbarCollapsed(!toolbarCollapsed);
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
    leiva: getImagePath("/images/avatars/tete.png"),
    thewarning: getImagePath("/images/avatars/thewarning.png"),
    ghost: getImagePath("/images/avatars/ghost.png"),
    acdc: getImagePath("/images/avatars/angusacdc.png"),
    queen: getImagePath("/images/avatars/queen.png"),
    ironmaiden: getImagePath("/images/avatars/ironmaiden.png"),
    aerosmith: getImagePath("/images/avatars/aerosmith.png"),
    kiss: getImagePath("/images/avatars/kiss.png"),
    metallica: getImagePath("/images/avatars/metallica.png"),
    gnr: getImagePath("/images/avatars/gnr.png"),
    bonjovi: getImagePath("/images/avatars/bonjovi.png"),
    defleppard: getImagePath("/images/avatars/defleppard.png"),
    poison: getImagePath("/images/avatars/poison.png"),
    motleycrue: getImagePath("/images/avatars/motleycrue.png"),
    alicecooper: getImagePath("/images/avatars/alicecooper.png"),
    whitesnake: getImagePath("/images/avatars/whitesnake.png"),
    vanhalen: getImagePath("/images/avatars/vanhalen.png"),
    extreme: getImagePath("/images/avatars/extreme.png"),
    thebaboonshow: getImagePath("/images/avatars/thebaboonshow.png"),
    pinkfloyd: getImagePath("/images/avatars/pinkfloyd.png"),
    davidbowie: getImagePath("/images/avatars/davidbowie.png"),
    nirvana: getImagePath("/images/avatars/nirvana.png"),
    ozzy: getImagePath("/images/avatars/ozzy.png"),
    brucespringsteen: getImagePath("/images/avatars/brucespringsteen.png"),
    oasis: getImagePath("/images/avatars/oasis.png"),
    jinjer: getImagePath("/images/avatars/jinjer.png"),
    archenemy: getImagePath("/images/avatars/archenemy.png"),
    blondie: getImagePath("/images/avatars/blondie.png"),
    slash: getImagePath("/images/avatars/slash.png"),
    eltonjohn: getImagePath("/images/avatars/eltonjohn.png"),
    motorhead: getImagePath("/images/avatars/motorhead.png"),
    pantera: getImagePath("/images/avatars/pantera.png"),
    radiohead: getImagePath("/images/avatars/radiohead.png"),
    ratm: getImagePath("/images/avatars/ratm.png"),
    gretavanfleet: getImagePath("/images/avatars/gretavanfleet.png"),
    manowar: getImagePath("/images/avatars/manowar.png"),
    judaspriest: getImagePath("/images/avatars/judaspriest.png"),
    scorpions: getImagePath("/images/avatars/scorpions.png"),
    blueoystercult: getImagePath("/images/avatars/blueoystercult.png"),
    jeffscottsoto: getImagePath("/images/avatars/jeffscottsoto.png"),
    opeth: getImagePath("/images/avatars/opeth.png"),
    stevenwilson: getImagePath("/images/avatars/stevenwilson.png"),
    stevevai: getImagePath("/images/avatars/stevevai.png"),
    michaeljackson: getImagePath("/images/avatars/michaeljackson.png"),
    bryanadams: getImagePath("/images/avatars/bryanadams.png"),
    johnmayer: getImagePath("/images/avatars/johnmayer.png"),
    jimihendrix: getImagePath("/images/avatars/jimihendrix.png"),
    prince: getImagePath("/images/avatars/prince.png"),
  };

  return (
    <div className="museum-guide">
      <div className="museum-guide-avatar-toolbar-container">
        <div className="museum-guide-avatar-bubble-container">
          <div
            className={`museum-guide-avatar-wrapper${
              activeTool !== "curiosities" ? " reserve-bubble-space" : ""
            }${toolbarCollapsed ? " toolbar-collapsed" : ""}`}
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
          {activeTool !== "customize" && showBubbles && curiositiesEnabled && (
            <GuideBubble
              text={avatarBubbles[avatar]?.[bubbleIdx] || ""}
              title={t("museumGuide.clickForMore")}
              onClick={handleNextBubble}
            />
          )}
        </div>
        <div className="museum-guide-toolbar-container">
          <GuideToolbar
            active={activeTool}
            onSelect={handleToolSelect}
            curiositiesEnabled={curiositiesEnabled}
            isCollapsed={toolbarCollapsed}
            onToggleCollapse={handleToggleToolbar}
          />
        </div>
      </div>
      <AvatarGridSelector
        isOpen={activeTool === "customize" && typeof window !== "undefined"}
        onAvatarSelect={(key) => {
          handleAvatarChange(key);
          console.log("[MuseumGuide] Avatar seleccionado:", key);
        }}
        onClose={handleAvatarSelectorClose}
        currentAvatar={avatar}
        transitionsEnabled={settings.avatarTransitions}
        debugActiveTool={activeTool}
      />
    </div>
  );
}
