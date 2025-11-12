/*
 * Aplicación principal del Museo de Rock
 * • Escena 3D con tres salas temáticas (Metal, Rock, Punk)
 * • Sistema de navegación entre salas con cámara dinámica
 * • Integración de posters interactivos y reproductor de audio
 * • Guía virtual con avatares y configuración global
 */
import { Canvas } from "@react-three/fiber";
import { useState, useRef, useEffect, useMemo } from "react";
import BlurBackground from "./components/ui/BlurBackground";
import { OrbitControls, ContactShadows } from "@react-three/drei";
import VenueRoom from "./components/3d/VenueRoom";
import RockPoster from "./components/3d/RockPoster";
import Projector from "./components/3d/Projector";
import RockNavigator from "./components/ui/RockNavigator";
import PosterModal from "./components/ui/PosterModal";
import MuseumGuide from "./components/ui/MuseumGuide";
import SettingsModal from "./components/ui/SettingsModal";
import ControlsHelp from "./components/ui/ControlsHelp";
import WebGLErrorFallback from "./components/ui/WebGLErrorFallback";
import { TranslationProvider } from "./contexts/TranslationContext";
import {
  TooltipProvider,
  TooltipContainer,
  AutoTooltipManager,
} from "./components/tooltips";

import concertData from "./data/concerts";
import MobileDrawerMenu from "./components/ui/MobileDrawerMenu";

import AvatarGridSelector from "./components/ui/AvatarGridSelector.jsx";

function App() {
  const [currentRoom, setCurrentRoom] = useState(0);
  const [selectedConcert, setSelectedConcert] = useState(null);
  const [showBlur, setShowBlur] = useState(false);
  const [showSettingsModal, setShowSettingsModal] = useState(false);
  const [showAvatarGrid, setShowAvatarGrid] = useState(false);
  const [currentAvatar, setCurrentAvatar] = useState("leiva");
  const [showAvatarGridDesktop, setShowAvatarGridDesktop] = useState(false);

  // Detectar si es móvil para ajustar posición de cámara
  const isMobileDevice = window.innerWidth <= 768;
  const cameraZ = isMobileDevice ? 25 : 21; // Más lejos en mobile para ver mejor

  const cameraPositions = [
    [0, 1.7, cameraZ],
    [100, 1.7, cameraZ],
    [200, 1.7, cameraZ],
  ];

  const controlTargets = useMemo(
    () => [
      [0, 1.7, -2],
      [100, 1.7, -2],
      [200, 1.7, -2],
    ],
    []
  );

  const roomGenres = ["metal", "rock", "punk"];

  const currentRoomConcerts = concertData.filter(
    (concert) => concert.genre === roomGenres[currentRoom]
  );

  const handleGuideOverlay = (active) => setShowBlur(active);

  const handleOpenSettings = () => setShowSettingsModal(true);
  const handleCloseSettings = () => setShowSettingsModal(false);

  const lastRoom = useRef(currentRoom);
  const [shouldResetCamera, setShouldResetCamera] = useState(true);
  const controlsRef = useRef();
  // Direcciones fijas para cada sala - eliminando dependencia del ControlsWatcher
  const roomRotationDirections = [1, -1, 1]; // Metal: horario, Rock: antihorario, Punk: horario

  useEffect(() => {
    if (lastRoom.current !== currentRoom) {
      setShouldResetCamera(true);
      lastRoom.current = currentRoom;

      // Estabilizar los controles después del cambio de sala
      if (controlsRef.current) {
        controlsRef.current.enabled = false;
        // Resetear valores internos de damping
        controlsRef.current.target.copy(controlTargets[currentRoom]);

        setTimeout(() => {
          if (controlsRef.current) {
            controlsRef.current.enabled = true;
            controlsRef.current.update();
            // Forzar reset del estado interno del damping
            // controlsRef.current.reset(); // Comentado temporalmente
          }
        }, 200); // Aumentar el timeout para mejor estabilización
      }
    } else {
      setShouldResetCamera(false);
    }
  }, [currentRoom, controlTargets]);

  const initialCameraPosition = cameraPositions[currentRoom];

  // Detectar si es móvil
  const isMobile = window.innerWidth <= 768;

  return (
    <TranslationProvider>
      <TooltipProvider>
        <WebGLErrorFallback>
          <div className="app">
            <BlurBackground show={showBlur} />
            {isMobile && (
              <MobileDrawerMenu
                onNavigate={(section) => {
                  if (section === "metal") setCurrentRoom(0);
                  if (section === "rock") setCurrentRoom(1);
                  if (section === "punk") setCurrentRoom(2);
                  if (section === "settings") setShowSettingsModal(true);
                  if (section === "avatar") setShowAvatarGrid(true);
                }}
              />
            )}
            {/* AvatarGridSelector modal for avatar selection */}
            {showAvatarGrid && (
              <AvatarGridSelector
                isOpen={showAvatarGrid}
                onAvatarSelect={(avatarKey) => {
                  setCurrentAvatar(avatarKey);
                  setShowAvatarGrid(false);
                }}
                onClose={() => setShowAvatarGrid(false)}
                currentAvatar={currentAvatar}
                transitionsEnabled={true}
              />
            )}
            {!isMobile && (
              <RockNavigator
                currentRoom={currentRoom}
                onRoomChange={setCurrentRoom}
                totalRooms={3}
              />
            )}

            <ControlsHelp />

            <PosterModal
              concert={selectedConcert}
              onClose={() => setSelectedConcert(null)}
            />

            <Canvas
              camera={{
                position: initialCameraPosition,
                fov: isMobile ? 50 : 40, // FOV más amplio en mobile
                near: 0.3,
                far: 1000,
              }}
              className="canvas-3d"
              gl={{
                powerPreference: "default",
                antialias: false,
                alpha: false,
                preserveDrawingBuffer: false,
                failIfMajorPerformanceCaveat: false,
              }}
              dpr={window.devicePixelRatio > 2 ? 2 : window.devicePixelRatio}
            >
              <ambientLight intensity={0.4} color="#ffffff" />
              <directionalLight position={[2, 50, 1]} intensity={0.9} />

              <VenueRoom
                position={
                  currentRoom === 0
                    ? [0, 0, 0]
                    : currentRoom === 1
                    ? [100, 0, 0]
                    : [200, 0, 0]
                }
                theme={roomGenres[currentRoom]}
                shouldResetCamera={shouldResetCamera}
                rotationDirection={roomRotationDirections[currentRoom]}
              />

              {currentRoomConcerts.map((concert) => (
                <RockPoster
                  key={concert.id}
                  concert={concert}
                  onSelect={setSelectedConcert}
                />
              ))}

              {currentRoom === 0 && (
                <Projector position={[0, 0, 0]} genre="metal" />
              )}
              {currentRoom === 1 && (
                <Projector position={[100, 0, 0]} genre="rock" />
              )}
              {currentRoom === 2 && (
                <Projector position={[200, 0, 0]} genre="punk" />
              )}

              <ContactShadows
                position={[0, -3.99, 0]}
                opacity={0.3}
                scale={50}
                blur={2}
                far={4}
              />

              <OrbitControls
                ref={controlsRef}
                enablePan={false}
                enableZoom={true}
                enableRotate={true}
                maxPolarAngle={Math.PI * 0.5}
                minPolarAngle={Math.PI * 0.02}
                minDistance={2}
                maxDistance={21.5}
                minAzimuthAngle={-Infinity}
                maxAzimuthAngle={Infinity}
                target={controlTargets[currentRoom]}
                enableDamping={true}
                dampingFactor={0.1}
                rotateSpeed={0.4}
                zoomSpeed={0.8}
                autoRotate={false}
                makeDefault
              />
            </Canvas>

            <MuseumGuide
              onOverlay={handleGuideOverlay}
              onOpenSettings={handleOpenSettings}
              onCustomizeAvatar={() => setShowAvatarGridDesktop(true)}
              currentAvatar={currentAvatar}
            />

            {/* Show AvatarGridSelector on desktop when customizing avatar */}
            {!isMobile && showAvatarGridDesktop && (
              <AvatarGridSelector
                isOpen={showAvatarGridDesktop}
                onAvatarSelect={(avatarKey) => {
                  setCurrentAvatar(avatarKey);
                  setShowAvatarGridDesktop(false);
                }}
                onClose={() => setShowAvatarGridDesktop(false)}
                currentAvatar={currentAvatar}
                transitionsEnabled={true}
              />
            )}

            <SettingsModal
              isOpen={showSettingsModal}
              onClose={handleCloseSettings}
            />

            <TooltipContainer />
            <AutoTooltipManager currentRoom={currentRoom} />
          </div>
        </WebGLErrorFallback>
      </TooltipProvider>
    </TranslationProvider>
  );
}

export default App;
