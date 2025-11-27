import "./NeonSign.css";
import { useRef } from "react";
import { useFrame, useLoader } from "@react-three/fiber";
import * as THREE from "three";

export default function NeonSign({ position = [0, 10, -9.5] }) {
  const groupRef = useRef();

  // Cargar la textura de la imagen
  const texture = useLoader(THREE.TextureLoader, "./images/neon/neon.png");

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    const flicker = Math.sin(time * 2) * 0.1 + 0.9; // Efecto de parpadeo más suave y lento

    if (groupRef.current) {
      groupRef.current.children.forEach((child) => {
        if (child.material && child.material.opacity !== undefined) {
          child.material.opacity = flicker; // Ajustar la opacidad para un parpadeo elegante
        }
        if (child.type === "PointLight") {
          child.intensity = 2.0 * flicker; // Reducir la intensidad de la luz
        }
      });
    }
  });

  return (
    <group position={position} ref={groupRef}>
      {/* Plano con la textura de la imagen */}
      <mesh>
        <planeGeometry args={[15, 9]} />
        <meshBasicMaterial map={texture} transparent={true} opacity={1} />
      </mesh>

      {/* Luz ambiental roja emanando del neón */}
      <pointLight
        color="#cc3333" // Rojo más granate
        intensity={1.5} // Ajustar la intensidad base
        distance={15}
        decay={2}
        position={[0, 0, 0.3]}
      />
    </group>
  );
}
