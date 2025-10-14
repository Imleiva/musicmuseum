import React, { useRef } from "react";
import { useLoader, useFrame } from "@react-three/fiber";
import { TextureLoader } from "three";

export default function PickWithTexture({
  textureUrl = "/images/logoLRHF.png",
  position = [0, 0.25, 0],
  rotation = [-Math.PI / 2, 0, 0],
  scale = [3.5, 3.5, 3.5],
}) {
  const texture = useLoader(TextureLoader, textureUrl);
  const meshRef = useRef();

  // Animación de rotación continua
  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.z += delta * 0.5; // Gira suavemente
    }
  });

  return (
    <mesh
      ref={meshRef}
      position={position}
      rotation={rotation}
      scale={scale}
      castShadow
      receiveShadow
    >
      <planeGeometry args={[1, 1]} />
      <meshPhysicalMaterial
        map={texture}
        transparent={true}
        opacity={1}
        transmission={0}
        roughness={0.2}
        metalness={0.7}
        clearcoat={1}
        clearcoatRoughness={0.1}
        emissive="#ffffff"
        emissiveIntensity={0.3}
        emissiveMap={texture}
      />
    </mesh>
  );
}
