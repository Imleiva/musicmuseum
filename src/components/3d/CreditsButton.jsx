/*
 * Botón de Créditos 3D interactivo
 * • Diseño realista con efectos de hover y clic
 * • Animaciones suaves de pulsación
 * • Activa el video de créditos del museo
 * • Retroalimentación visual y de consola
 */
import React, { useState, useRef, useCallback } from "react";
import { useFrame } from "@react-three/fiber";
import { useTooltipContext } from "../tooltips/useTooltipContext";

export default function CreditsButton({
  position = [0, 0, 0],
  onCreditsToggle = null,
  creditsActive = false,
  scale = 1,
}) {
  const [isButtonPressed, setIsButtonPressed] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [glowIntensity, setGlowIntensity] = useState(0.2);

  const buttonRef = useRef();
  const baseRef = useRef();
  const reflectionRef = useRef();

  const { showTooltip, hideTooltip } = useTooltipContext();

  // Funciones del botón de créditos
  const handleCreditsClick = useCallback(() => {
    setIsButtonPressed(true);

    if (creditsActive) {
      console.log("🎬 Credits deactivated - returning to normal rotation!");
    } else {
      console.log("🎬 Credits activated!");
    }

    // Ejecutar callback de toggle si existe
    if (onCreditsToggle) {
      onCreditsToggle(!creditsActive);
    }

    // Simular que el botón se mantiene pulsado por un momento
    setTimeout(() => {
      setIsButtonPressed(false);
    }, 200);
  }, [onCreditsToggle, creditsActive]);

  const handleCreditsHover = useCallback((hovering) => {
    setIsHovered(hovering);
  }, []);

  // Animación del brillo emisivo del botón
  useFrame((state) => {
    const time = state.clock.elapsedTime;

    if (isButtonPressed) {
      // Brillo más intenso cuando está pulsado
      setGlowIntensity(0.8);
    } else {
      // Parpadeo suave dorado del cuerpo del botón
      const pulseIntensity = Math.abs(Math.sin(time * 1.2)) * 0.4 + 0.2;
      setGlowIntensity(pulseIntensity);
    }

    // Actualizar materiales en tiempo real
    if (buttonRef.current?.material) {
      buttonRef.current.material.emissiveIntensity = isHovered
        ? glowIntensity + 0.2
        : glowIntensity;
    }

    if (baseRef.current?.material) {
      baseRef.current.material.emissiveIntensity = glowIntensity * 0.3;
    }

    if (reflectionRef.current?.material) {
      reflectionRef.current.material.emissiveIntensity = glowIntensity * 0.7;
    }
  });

  return (
    <group position={position} scale={scale}>
      {/* Base del botón */}
      <mesh ref={baseRef}>
        <cylinderGeometry args={[0.8, 0.8, 0.2, 32]} />
        <meshStandardMaterial
          color="#8B0000"
          metalness={0.6}
          roughness={0.2}
          emissive="#FF0000"
          emissiveIntensity={glowIntensity * 0.3}
        />
      </mesh>

      {/* Botón principal visual (sin eventos) */}
      <mesh ref={buttonRef} position={[0, isButtonPressed ? 0.1 : 0.15, 0]}>
        <cylinderGeometry args={[0.5, 0.5, 0.2, 32]} />
        <meshStandardMaterial
          color={isHovered ? "#FF1744" : "#DC143C"}
          metalness={0.2}
          roughness={0.1}
          emissive="#FF0000"
          emissiveIntensity={isHovered ? glowIntensity + 0.2 : glowIntensity}
        />
      </mesh>

      {/* Área de hover expandida (invisible) */}
      <mesh
        position={[0, isButtonPressed ? 0.1 : 0.15, 0]}
        onClick={handleCreditsClick}
        onPointerEnter={() => {
          handleCreditsHover(true);
          // Aplicar cursor con !important para evitar solapamientos
          document.body.style.setProperty(
            "cursor",
            "url('/images/pointers/hand.png'), pointer",
            "important"
          );
          // También en el canvas específicamente
          const canvas = document.querySelector("canvas");
          if (canvas) {
            canvas.style.setProperty(
              "cursor",
              "url('/images/pointers/hand.png'), pointer",
              "important"
            );
          }
          // Mostrar tooltip del sistema con estado dinámico
          const tooltipMessage = creditsActive
            ? "Desactiva los créditos y vuelve a la rotación normal"
            : "Activa el video de créditos del museo";
          const tooltipTitle = creditsActive
            ? "🔄 Desactivar Créditos"
            : "🎬 Activar Créditos";
          showTooltip(tooltipMessage, tooltipTitle);
        }}
        onPointerLeave={() => {
          handleCreditsHover(false);
          // Restaurar cursor normal
          document.body.style.removeProperty("cursor");
          const canvas = document.querySelector("canvas");
          if (canvas) {
            canvas.style.removeProperty("cursor");
          }
          // Ocultar tooltip
          hideTooltip();
        }}
      >
        <cylinderGeometry args={[1.2, 1.2, 0.8, 32]} />
        <meshBasicMaterial transparent opacity={0} />
      </mesh>

      {/* Anillo metálico exterior */}
      <mesh position={[0, 0.05, 0]}>
        <cylinderGeometry args={[0.7, 0.7, 0.1, 32]} />
        <meshStandardMaterial color="#2F4F4F" metalness={0.9} roughness={0.1} />
      </mesh>

      {/* Reflejo superior del botón luminoso */}
      <mesh
        ref={reflectionRef}
        position={[0, isButtonPressed ? 0.23 : 0.28, 0]}
      >
        <cylinderGeometry args={[0.35, 0.35, 0.015, 32]} />
        <meshStandardMaterial
          color="#FF6B6B"
          metalness={0.8}
          roughness={0.05}
          emissive="#FF4444"
          emissiveIntensity={glowIntensity * 0.7}
        />
      </mesh>

      {/* Luz ambiental roja suave emanando del botón - solo hacia arriba */}
      <spotLight
        position={[0, 0.2, 0]}
        target-position={[0, 5, 0]}
        angle={Math.PI / 3}
        penumbra={0.5}
        intensity={glowIntensity * 0.3}
        color="#FF0000"
        distance={6}
        decay={2}
      />
    </group>
  );
}
