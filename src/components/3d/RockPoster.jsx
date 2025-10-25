/*
 * Posters interactivos 3D de conciertos
 * • Posters clickeables posicionados en las paredes
 * • Efectos de hover con animaciones de escala y brillo
 * • Cursor personalizado al pasar sobre ellos
 * • Carga optimizada de texturas para imágenes cuadradas
 */
import { useState, useRef, useCallback, useEffect, Suspense } from "react";
import { Html } from "@react-three/drei";
import { useLoader, useFrame } from "@react-three/fiber";
import { TextureLoader, ClampToEdgeWrapping, LinearFilter } from "three";

// Componente para manejar texturas de imágenes - optimizado para formato 1:1 (cuadradas)
function PosterTexture({ imageUrl }) {
  const texture = useLoader(TextureLoader, imageUrl);

  useEffect(() => {
    if (texture) {
      // Configurar textura para imágenes cuadradas 1:1 - usando constantes correctas
      texture.flipY = true;
      texture.wrapS = texture.wrapT = ClampToEdgeWrapping;
      texture.generateMipmaps = false;
      texture.minFilter = LinearFilter;
      texture.magFilter = LinearFilter;
      texture.needsUpdate = true;
    }
  }, [texture, imageUrl]);

  // Usar meshBasicMaterial para que la imagen se vea igual que en el carrusel (sin influencia de luces)
  return <meshBasicMaterial map={texture} toneMapped={false} />;
}

// Componente fallback mejorado con gradientes y efectos
function FallbackMaterial({ color }) {
  return (
    <meshStandardMaterial
      color={color}
      roughness={0.2}
      metalness={0.1}
      emissive={color}
      emissiveIntensity={0.15}
      envMapIntensity={0.8}
    />
  );
}

export default function RockPoster({ concert, onSelect }) {
  const [hovered, setHovered] = useState(false);
  const frameRef = useRef();
  const hoverTimeoutRef = useRef();

  // Asegurar cursor rock hand en canvas
  useEffect(() => {
    // Usar clases en body en lugar de estilos inline para mayor consistencia
    const canvas = document.querySelector("canvas");
    if (canvas) {
      document.body.classList.add("cursor-rock");

      const handleMouseDown = () => {
        document.body.classList.add("cursor-rock");
      };

      const handleMouseUp = () => {
        document.body.classList.add("cursor-rock");
      };

      canvas.addEventListener("mousedown", handleMouseDown);
      document.addEventListener("mouseup", handleMouseUp);
      canvas.addEventListener("mouseleave", handleMouseUp);

      return () => {
        canvas.removeEventListener("mousedown", handleMouseDown);
        document.removeEventListener("mouseup", handleMouseUp);
        canvas.removeEventListener("mouseleave", handleMouseUp);
        // Limpiar clases al desmontar
        document.body.classList.remove("cursor-rock");
        document.body.classList.remove("cursor-hand");
        document.body.classList.remove("cursor-eye");
      };
    }
  }, []);

  // Detectar si tiene imagen local (ahora puede ser cualquier banda con imageUrl)
  const hasImage = concert.imageUrl && concert.imageUrl !== null;

  // Determinar el color de backlight según el género de la sala
  const getThemeBacklightColor = (genre) => {
    const themeColors = {
      metal: "#8B0000", // Rojo oscuro sutil
      rock: "#2F4F4F", // Azul grisáceo sutil
      punk: "#3B2F62", // Púrpura suavizado
    };
    return themeColors[genre] || "#444444";
  };

  const backlightColor = getThemeBacklightColor(concert.genre);

  // Color unificado para pósters sin imagen - tono gris neutro que combina con el museo
  const getUnifiedPosterColor = () => {
    return "#3a3a3a"; // Gris oscuro neutro que combina bien con el ambiente del museo
  };

  // Efecto de hover con cursor de ojo
  const handlePointerOver = useCallback((event) => {
    event.stopPropagation();
    setHovered(true);

    // Aplicar cursor de ojo usando clase en body
    document.body.classList.add("cursor-eye");
    document.body.classList.remove("cursor-rock");
    document.body.classList.remove("cursor-hand");

    // Limpiar timeout anterior
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
    }
  }, []);

  const handlePointerOut = useCallback((event) => {
    event.stopPropagation();
    setHovered(false);

    // Restaurar cursor rock hand explícitamente usando clases
    document.body.classList.remove("cursor-eye");
    document.body.classList.remove("cursor-hand");
    document.body.classList.add("cursor-rock");
  }, []);

  const handleClick = useCallback(
    (event) => {
      event.stopPropagation();
      if (onSelect && concert) {
        onSelect(concert);
      }
    },
    [onSelect, concert]
  );

  // Animación sutil de hover
  useFrame((state) => {
    if (frameRef.current && hovered) {
      frameRef.current.scale.setScalar(
        1.02 + Math.sin(state.clock.elapsedTime * 3) * 0.01
      );
    } else if (frameRef.current) {
      frameRef.current.scale.setScalar(1.0);
    }
  });

  // Validación de seguridad
  if (!concert || !concert.position) {
    console.warn("RockPoster: Invalid concert data", concert);
    return null;
  }

  // Debug log para verificar renderizado de etiquetas
  // Todas las imágenes son cuadradas 1:1, por lo tanto todos los pósters son cuadrados
  const posterWidth = 4.0;
  const posterHeight = 4.0;

  // Marcos más estrechos para pósters cuadrados
  const frameWidth = posterWidth + 0.4;
  const frameHeight = posterHeight + 0.4;
  const outerFrameWidth = frameWidth + 0.15;
  const outerFrameHeight = frameHeight + 0.15;

  // Cálculo automático de rotación basado en la posición para que el póster quede pegado a la pared
  const getWallRotation = (position) => {
    const [x, , z] = position;

    // Determinar el centro de la sala basándose en la coordenada X
    let roomCenterX = 0;
    if (x >= 50 && x < 150) roomCenterX = 100; // Classic Rock Room
    else if (x >= 150) roomCenterX = 200; // Punk Space
    // Metal Hall permanece en 0

    // Coordenadas relativas al centro de la sala
    const relativeX = x - roomCenterX;
    const relativeZ = z;

    // Detectar a qué pared pertenece basándose en las coordenadas relativas
    if (relativeZ < -20) {
      // Pared trasera (norte) - no rotación
      return [0, 0, 0];
    } else if (relativeZ > 20) {
      // Pared frontal (sur) - rotar 180°
      return [0, Math.PI, 0];
    } else if (relativeX < -20) {
      // Pared izquierda (oeste) - rotar 90°
      return [0, Math.PI / 2, 0];
    } else if (relativeX > 20) {
      // Pared derecha (este) - rotar -90°
      return [0, -Math.PI / 2, 0];
    }

    // Si no está en ninguna pared principal, determinar por proximidad relativa
    if (Math.abs(relativeZ) > Math.abs(relativeX)) {
      // Más cerca de pared frontal/trasera
      return relativeZ < 0 ? [0, 0, 0] : [0, Math.PI, 0];
    } else {
      // Más cerca de pared izquierda/derecha
      return relativeX < 0 ? [0, Math.PI / 2, 0] : [0, -Math.PI / 2, 0];
    }
  };

  const wallRotation = getWallRotation(concert.position);

  return (
    <group position={concert.position} rotation={wallRotation} scale={1.35}>
      {/* Marco metálico exterior - adaptativo al tipo de póster */}
      <mesh ref={frameRef} position={[0, 0, -0.08]} castShadow receiveShadow>
        <boxGeometry args={[outerFrameWidth, outerFrameHeight, 0.15]} />
        <meshStandardMaterial
          color="#1a1a1a"
          metalness={0.95}
          roughness={0.05}
          envMapIntensity={2.0}
          emissive="#0a0a0a"
          emissiveIntensity={0.1}
        />
      </mesh>

      {/* Marco metálico interior - adaptativo */}
      <mesh position={[0, 0, -0.04]} castShadow receiveShadow>
        <boxGeometry args={[frameWidth, frameHeight, 0.08]} />
        <meshStandardMaterial
          color="#4a0000"
          metalness={0.9}
          roughness={0.1}
          emissive="#2a0000"
          emissiveIntensity={0.05}
        />
      </mesh>

      {/* Bisel interior del marco - posicionado para evitar z-fighting */}
      <mesh position={[0, 0, -0.02]} castShadow>
        <boxGeometry args={[frameWidth - 0.15, frameHeight - 0.15, 0.01]} />
        <meshStandardMaterial
          color="#2a2a2a"
          metalness={0.6}
          roughness={0.4}
          emissive="#1a1a1a"
          emissiveIntensity={0.02}
        />
      </mesh>

      {/* Póster del concierto - ajustado para cubrir completamente el bisel */}
      <mesh
        position={[0, 0, 0.01]}
        castShadow
        receiveShadow
        onPointerOver={handlePointerOver}
        onPointerOut={handlePointerOut}
        onClick={handleClick}
      >
        <planeGeometry args={[frameWidth - 0.14, frameHeight - 0.14]} />
        {hasImage ? (
          <Suspense
            fallback={<FallbackMaterial color={getUnifiedPosterColor()} />}
          >
            <PosterTexture imageUrl={concert.imageUrl} />
          </Suspense>
        ) : (
          <FallbackMaterial color={getUnifiedPosterColor()} />
        )}
      </mesh>

      {/* Cristal protector simplificado - ajustado al tamaño del poster */}
      <mesh position={[0, 0, 0.02]}>
        <planeGeometry args={[frameWidth - 0.14, frameHeight - 0.14]} />
        <meshBasicMaterial
          transparent
          opacity={0.03}
          color="#ffffff"
          blending={1}
        />
      </mesh>

      {/* Placa de información más baja y discreta - sin competir con los pósters */}
      <mesh position={[0, -3.2, 0.04]} castShadow receiveShadow>
        <boxGeometry args={[2.2, 0.35, 0.02]} />
        <meshStandardMaterial
          color="#0f0f0f"
          metalness={0.7}
          roughness={0.3}
          emissive="#050505"
          emissiveIntensity={0.05}
        />
      </mesh>

      {/* Bisel de la placa más discreto */}
      <mesh position={[0, -3.2, 0.045]} castShadow>
        <boxGeometry args={[2.1, 0.25, 0.005]} />
        <meshStandardMaterial color="#2a2a2a" metalness={0.6} roughness={0.4} />
      </mesh>

      {/* Placa de texto más visible y más grande para mejor legibilidad */}
      <Html
        position={[0, -3.15, 0.08]}
        center
        style={{
          pointerEvents: "none",
          zIndex: 1000,
        }}
        transform
        distanceFactor={4}
      >
        <div
          className="poster-label"
          style={{
            display: "block",
            visibility: "visible",
          }}
        >
          {concert.band ? concert.band.toUpperCase() : "UNKNOWN BAND"}
        </div>
      </Html>

      {/* Efecto bias lighting con transición ultra suave - múltiples capas para gradiente perfecto */}

      {/* Capas de transición suave - de intenso a difuso sin bordes visibles */}
      {[
        { size: 0.6, opacity: 0.18, z: -0.25 },
        { size: 0.8, opacity: 0.16, z: -0.251 },
        { size: 1.0, opacity: 0.14, z: -0.252 },
        { size: 1.2, opacity: 0.12, z: -0.253 },
        { size: 1.4, opacity: 0.1, z: -0.254 },
        { size: 1.6, opacity: 0.08, z: -0.255 },
        { size: 1.8, opacity: 0.06, z: -0.256 },
        { size: 2.0, opacity: 0.05, z: -0.257 },
        { size: 2.2, opacity: 0.04, z: -0.258 },
        { size: 2.4, opacity: 0.03, z: -0.259 },
        { size: 2.6, opacity: 0.025, z: -0.26 },
        { size: 2.8, opacity: 0.02, z: -0.261 },
        { size: 3.0, opacity: 0.015, z: -0.262 },
        { size: 3.2, opacity: 0.012, z: -0.263 },
        { size: 3.4, opacity: 0.01, z: -0.264 },
        { size: 3.6, opacity: 0.01, z: -0.265 }, // Borde exterior nunca desaparece del todo
      ].map((layer, index) => (
        <mesh key={index} position={[0, 0, layer.z]}>
          <planeGeometry
            args={[posterWidth + layer.size, posterHeight + layer.size]}
          />
          <meshBasicMaterial
            transparent
            opacity={layer.opacity}
            color={backlightColor}
            fog={false}
            blending={1}
            side={2} // DoubleSide
          />
        </mesh>
      ))}

      {/* Luz puntual que simula los LEDs traseros proyectando en la pared */}
      <pointLight
        position={[0, 0, -0.18]}
        intensity={0.22}
        distance={18}
        decay={1.2}
        color={backlightColor}
      />

      {/* Indicador de hover - fijo para pósters cuadrados */}
      {hovered && (
        <mesh position={[0, 0, 0.04]}>
          <planeGeometry args={[4.1, 4.1]} />
          <meshStandardMaterial
            transparent
            opacity={0.2}
            color="#ff4444"
            emissive="#ff4444"
            emissiveIntensity={0.1}
          />
        </mesh>
      )}
    </group>
  );
}
