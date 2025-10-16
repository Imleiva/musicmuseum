/*
 * Sala 3D del museo con elementos arquitectónicos
 * • Genera salas temáticas (Metal, Rock, Punk) con colores específicos
 * • Paredes, suelo, techo con vigas y luces LED
 * • Iluminación ambiental adaptada al tema de cada sala
 */

function lightenColor(hex, percent) {
  var r = parseInt(hex.slice(1, 3), 16);
  var g = parseInt(hex.slice(3, 5), 16);
  var b = parseInt(hex.slice(5, 7), 16);
  r = Math.round(r + (255 - r) * percent);
  g = Math.round(g + (255 - g) * percent);
  b = Math.round(b + (255 - b) * percent);
  return `#${r.toString(16).padStart(2, "0")}${g
    .toString(16)
    .padStart(2, "0")}${b.toString(16).padStart(2, "0")}`;
}

const CeilingBeamsAndLEDs = () => {
  // Cargar textura de madera
  const woodTexture = useLoader(TextureLoader, "/images/wood.jpg");
  woodTexture.wrapS = RepeatWrapping;
  woodTexture.wrapT = RepeatWrapping;
  woodTexture.repeat.set(2, 8); // Más repeticiones para que la textura sea más visible
  woodTexture.minFilter = LinearFilter;
  woodTexture.magFilter = LinearFilter;

  // Posiciones de las vigas (6 vigas delgadas, simulando cuerdas de guitarra, eje X)
  const numBeams = 6;
  const beamSpacing = 9; // Separación entre vigas
  const startX = -22.5;
  const beamX = Array.from(
    { length: numBeams },
    (_, i) => startX + i * beamSpacing
  );

  return (
    <group>
      {/* 6 vigas delgadas tipo cuerdas de guitarra */}
      {beamX.map((x, i) => (
        <mesh key={`beam-x-${i}`} position={[x, 17.5, 0]}>
          <boxGeometry args={[0.5, 0.5, 60]} />
          <meshStandardMaterial
            map={woodTexture}
            color="#b08a57"
            roughness={0.45}
            metalness={0.45}
            emissive="#a88a5a"
            emissiveIntensity={0.015}
          />
        </mesh>
      ))}
      {/* Sin tiras LED */}
    </group>
  );
};

import React, { Suspense, useEffect } from "react";
import PickWithTexture from "./PickWithTexture";
import { useLoader, useThree, useFrame } from "@react-three/fiber";
import {
  TextureLoader,
  LinearFilter,
  ClampToEdgeWrapping,
  RepeatWrapping,
} from "three";
import { MeshReflectorMaterial } from "@react-three/drei";

// Componente para el suelo con textura wood.jpg
function FloorWithTexture({ theme }) {
  const floorTexture = useLoader(TextureLoader, "/images/wood.jpg");

  // Configuración para que la textura se vea realista y elegante
  floorTexture.wrapS = RepeatWrapping;
  floorTexture.wrapT = RepeatWrapping;
  floorTexture.repeat.set(3, 3); // Ajusta según el tamaño visual
  floorTexture.rotation = Math.PI / 2; // Rota la textura 90 grados
  floorTexture.center.set(0.5, 0.5); // Centra la rotación
  floorTexture.minFilter = LinearFilter;
  floorTexture.magFilter = LinearFilter;

  // Color base neutro para que la textura destaque pero siga oscura

  // Colores más claros para el suelo
  const themes = {
    metal: { floor: lightenColor("#999999", 0.55) },
    rock: { floor: lightenColor("#999999", 0.55) },
    punk: { floor: lightenColor("#999999", 0.55) },
  };
  const roomTheme = themes[theme] || themes.metal;

  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -4, 0]} receiveShadow>
      <planeGeometry args={[100, 100]} />
      <meshStandardMaterial
        map={floorTexture}
        color={roomTheme.floor}
        roughness={0.55}
        metalness={0.45}
        normalScale={[0.1, 0.1]}
        envMapIntensity={0.5}
        emissive="#555555"
        emissiveIntensity={0.08}
      />
    </mesh>
  );
}

// Componente del escenario giratorio tipo vinilo
function RotatingVinylStage({ roomTheme, rotationDirection = 1 }) {
  const groupRef = React.useRef();

  useFrame((state, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.2; // Gira como un vinilo
    }
  });

  return (
    <group ref={groupRef} position={[0, -4, 0]}>
      {/* LED Underglow Bottom Layer */}
      <mesh position={[0, 0.07, 0]} receiveShadow>
        <cylinderGeometry args={[6.1, 6.2, 0.05, 100]} />
        <meshStandardMaterial
          color="#555555"
          emissive={roomTheme.accent}
          emissiveIntensity={0.3}
          metalness={0.7}
          roughness={0.3}
        />
      </mesh>

      {/* Transparent Top Layer (Glass) */}
      <mesh position={[0, 0.1, 0]} receiveShadow>
        <cylinderGeometry args={[6.1, 5, 0.09, 70]} />
        <meshPhysicalMaterial
          transparent={true}
          opacity={0.1}
          transmission={0.9}
          roughness={0.1}
          metalness={0.1}
          color="#dddddd"
        />
      </mesh>

      {/* Logo de la púa: plano con efecto cristal sobre el círculo central */}
      <Suspense fallback={null}>
        <PickWithTexture
          position={[0, 0.15, 0]}
          scale={[8, 8, 1]}
          rotationDirection={rotationDirection}
        />
      </Suspense>

      {/* Neon light ring around the stage base */}
      <mesh position={[0, 0.1, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <ringGeometry args={[5.8, 6.2, 100]} />
        <meshStandardMaterial
          emissive={roomTheme.accent}
          emissiveIntensity={0.8}
          color={roomTheme.accent}
          transparent
          opacity={0.9}
          roughness={0.1}
          metalness={0.8}
        />
      </mesh>
    </group>
  );
}

export default function VenueRoom({
  position = [0, 0, 0],
  theme = "metal",
  shouldResetCamera = false,
  children,
  rotationDirection = 1,
  heightScale = 1.3, // scale room vertically to appear taller
}) {
  const themes = {
    metal: {
      floor: "#0a0000", // Rojo oscuro para metal
      walls: "#1a0000",
      ceiling: "#050000",
      accent: "#8B0000",
      lighting: "#cc4444", // Rojo equilibrado
    },
    rock: {
      floor: "#000a1a",
      walls: "#001a2e",
      ceiling: "#000510",
      accent: "#2F4F4F",
      lighting: "#3388aa", // Turquesa oscuro, menos cian
    },
    punk: {
      floor: "#0a001a", // Más equilibrado con los otros temas
      walls: "#1a0030", // Más intenso pero equilibrado
      ceiling: "#050015",
      accent: "#4A2F6B", // Púrpura más intenso pero equilibrado
      lighting: "#7755bb", // Púrpura equilibrado
    },
  };
  const roomTheme = themes[theme] || themes.metal;
  const { camera } = useThree();
  useEffect(() => {
    if (shouldResetCamera) {
      // Ajustar la posición y rotación de la cámara relativa a la sala SOLO si se pide
      const [offsetX, offsetY, offsetZ] = position;
      camera.position.set(
        -10.838843178101142 + offsetX,
        3.976157067401239 + offsetY,
        -12.116253632894397 + offsetZ
      );
      camera.rotation.set(
        -2.9202782112420023,
        -0.80754105141237,
        -2.98042022870276,
        "XYZ"
      );
    }
  }, [camera, position, shouldResetCamera]);

  return (
    <group position={position} scale={[1, heightScale, 1]}>
      {/* Rodapié en las cuatro paredes, color igual al suelo */}
      {/* Pared norte (atrás) */}
      <mesh position={[0, -3.6, -29.7]}>
        <boxGeometry args={[60, 0.6, 1.2]} />
        <meshStandardMaterial
          color={lightenColor(roomTheme.floor, 0.2)}
          roughness={0.32}
          metalness={0.1}
        />
      </mesh>
      {/* Tira LED norte */}
      <mesh position={[0, -3.88, -29.1]}>
        <boxGeometry args={[60, 0.28, 0.48]} />
        <meshStandardMaterial
          color={roomTheme.lighting}
          emissive={roomTheme.lighting}
          emissiveIntensity={0.16}
          metalness={0.08}
          roughness={0.6}
          transparent
          opacity={0.18}
        />
      </mesh>
      {/* Pared sur (frente) */}
      <mesh position={[0, -3.6, 29.7]}>
        <boxGeometry args={[60, 0.6, 1.2]} />
        <meshStandardMaterial
          color={lightenColor(roomTheme.floor, 0.3)}
          roughness={0.32}
          metalness={0.01}
        />
      </mesh>
      {/* Tira LED sur */}
      <mesh position={[0, -3.88, 29.1]}>
        <boxGeometry args={[60, 0.28, 0.48]} />
        <meshStandardMaterial
          color={roomTheme.lighting}
          emissive={roomTheme.lighting}
          emissiveIntensity={0.16}
          metalness={0.08}
          roughness={0.6}
          transparent
          opacity={0.18}
        />
      </mesh>
      {/* Pared oeste (izquierda) */}
      <mesh position={[-29.7, -3.6, 0]}>
        <boxGeometry args={[1.2, 0.6, 60]} />
        <meshStandardMaterial
          color={lightenColor(roomTheme.floor, 0.2)}
          roughness={0.32}
          metalness={0.1}
        />
      </mesh>
      {/* Tira LED oeste */}
      <mesh position={[-29.1, -3.88, 0]} rotation={[0, Math.PI / 2, 0]}>
        <boxGeometry args={[60, 0.28, 0.48]} />
        <meshStandardMaterial
          color={roomTheme.lighting}
          emissive={roomTheme.lighting}
          emissiveIntensity={0.16}
          metalness={0.08}
          roughness={0.6}
          transparent
          opacity={0.18}
        />
      </mesh>
      {/* Pared este (derecha) */}
      <mesh position={[29.7, -3.6, 0]}>
        <boxGeometry args={[1.2, 0.6, 60]} />
        <meshStandardMaterial
          color={lightenColor(roomTheme.floor, 0.2)}
          roughness={0.32}
          metalness={0.1}
        />
      </mesh>
      {/* Tira LED este */}
      <mesh position={[29.1, -3.88, 0]} rotation={[0, Math.PI / 2, 0]}>
        <boxGeometry args={[60, 0.28, 0.48]} />
        <meshStandardMaterial
          color={roomTheme.lighting}
          emissive={roomTheme.lighting}
          emissiveIntensity={0.16}
          metalness={0.08}
          roughness={0.6}
          transparent
          opacity={0.18}
        />
      </mesh>

      {/* Invisible floor barrier */}
      <mesh
        rotation={[-Math.PI / 2, 0, 0]}
        position={[0, -4.5, 0]}
        visible={false}
      >
        <planeGeometry args={[70, 70]} />
        <meshBasicMaterial transparent opacity={0} />
      </mesh>

      {/* Floor physical barrier */}
      <mesh position={[0, 0, 0]} visible={false}>
        {/* <boxGeometry args={[70, 2, 70]} /> */}
        <meshBasicMaterial transparent opacity={0} />
      </mesh>

      {/* Invisible wall barriers */}
      <mesh position={[0, 0, -40]} visible={false}>
        <boxGeometry args={[80, 30, 1]} />
        <meshBasicMaterial transparent opacity={0} />
      </mesh>
      <mesh position={[0, 0, 40]} visible={false}>
        <boxGeometry args={[80, 30, 1]} />
        <meshBasicMaterial transparent opacity={0} />
      </mesh>
      <mesh position={[-40, 0, 0]} visible={false}>
        <boxGeometry args={[1, 30, 80]} />
        <meshBasicMaterial transparent opacity={0} />
      </mesh>
      <mesh position={[40, 0, 0]} visible={false}>
        <boxGeometry args={[1, 30, 80]} />
        <meshBasicMaterial transparent opacity={0} />
      </mesh>

      {Array.from({ length: 8 }, (_, i) => (
        <mesh
          key={`floor-line-z-${i}`}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
          position={[0, -3.99, -28 + i * 8]}
        >
          <planeGeometry args={[0.02, 60]} />
          <meshStandardMaterial
            color={roomTheme.floor}
            transparent
            opacity={0.3}
            roughness={0.8}
            metalness={0.1}
          />
        </mesh>
      ))}

      {/* Central stage area highlight */}
      <mesh
        rotation={[-Math.PI / 2, 0, 0]}
        position={[0, -3.9, 0]}
        receiveShadow
      >
        <ringGeometry args={[6.2, 12, 68]} />
        <meshStandardMaterial
          color={roomTheme.floor}
          roughness={0.3}
          metalness={0.1}
          transparent
          opacity={0.9}
        />
      </mesh>

      {/* Central Stage - Two Layer Design */}
      <RotatingVinylStage
        roomTheme={roomTheme}
        rotationDirection={rotationDirection}
      />

      {/* Luz para la pared izquierda (west) */}

      <pointLight
        position={[-25, 8, 0]}
        intensity={3.5}
        color="#ffffff"
        distance={80}
        decay={1.2}
        castShadow={false}
      />

      {/* Luz para la pared derecha (east) */}
      <pointLight
        position={[25, 8, 0]}
        intensity={3.5}
        color="#ffffff"
        distance={80}
        decay={1.2}
        castShadow={false}
      />

      {/* Luz para la pared frontal (south, donde hay posters) */}
      <pointLight
        position={[0, 8, 25]}
        intensity={2.5}
        color="#ffffff"
        distance={70}
        decay={1.2}
        castShadow={false}
      />

      {/* WALLS AND ARCHITECTURE */}
      {/* North Wall (back/screen) */}
      <mesh position={[0, 7, -30]} receiveShadow castShadow>
        <boxGeometry args={[60, 22, 0.3]} />
        <meshStandardMaterial
          color={roomTheme.walls}
          roughness={0.8}
          metalness={0.1}
        />
      </mesh>

      {/* South Wall (front) */}
      <mesh position={[0, 7, 30]} receiveShadow castShadow>
        <boxGeometry args={[60, 22, 0.3]} />
        <meshStandardMaterial
          color={roomTheme.walls}
          roughness={0.8}
          metalness={0.1}
        />
      </mesh>

      {/* West Wall (left) */}
      <mesh position={[-30, 7, 0]} receiveShadow castShadow>
        <boxGeometry args={[0.3, 22, 60]} />
        <meshStandardMaterial
          color={roomTheme.walls}
          roughness={0.8}
          metalness={0.1}
        />
      </mesh>

      {/* East Wall (right) */}
      <mesh position={[30, 7, 0]} receiveShadow castShadow>
        <boxGeometry args={[0.3, 22, 60]} />
        <meshStandardMaterial
          color={roomTheme.walls}
          roughness={0.8}
          metalness={0.1}
        />
      </mesh>

      {/* CORNER COLUMNS (ahora del color de la pared, no rojo) */}
      {[
        [-30, 7, -30],
        [30, 7, -30],
        [-30, 7, 30],
        [30, 7, 30],
      ].map((pos, index) => (
        <mesh key={`column-${index}`} position={pos} castShadow>
          <boxGeometry args={[0.8, 22, 0.8]} />
          <meshStandardMaterial
            color={roomTheme.walls}
            roughness={0.6}
            metalness={0.3}
          />
        </mesh>
      ))}

      {/* CEILING (bajado para que los paneles queden por encima) */}
      <mesh
        position={[0, 17.8, 0]}
        rotation={[Math.PI / 2, 0, 0]}
        receiveShadow
      >
        <boxGeometry args={[60, 60, 0.2]} />
        <meshStandardMaterial
          color={roomTheme.ceiling}
          roughness={0.4}
          metalness={0.2}
        />
      </mesh>

      {/* Screen lighting */}
      <spotLight
        position={[0, 8, 24]}
        target-position={[0, -3.7, 0]}
        angle={Math.PI / 3}
        penumbra={0.6}
        intensity={0.8}
        color="#f0f0f0"
        distance={25}
        decay={1.2}
        castShadow={false}
      />

      {/* Reflejo sutil justo debajo de la pantalla y el proyector */}
      <mesh
        rotation={[-Math.PI / 2, 0, 0]}
        position={[0, -3.98, -26]}
        receiveShadow
      >
        <planeGeometry args={[60, 8]} />
        <MeshReflectorMaterial
          blur={[40, 40]}
          resolution={256}
          mixBlur={0.5}
          mixStrength={1.2}
          roughness={0.12}
          depthScale={0.2}
          minDepthThreshold={0.7}
          maxDepthThreshold={1}
          color="#cccccc"
          metalness={0.95}
          mirror={0.95}
          transparent={true}
          opacity={0.3}
        />
      </mesh>

      {/* Children for posters and projectors */}
      {children}
    </group>
  );
}
