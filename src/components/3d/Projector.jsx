/*
 * Proyector de video 3D para ambientación
 * • Reproduce videos temáticos en cada sala
 * • Proyección sobre pantallas virtuales en el techo
 * • Manejo de errores y fallbacks para videos
 * • Animaciones sincronizadas con el contenido de video
 */
import React, {
  useState,
  useRef,
  useEffect,
  useMemo,
  useCallback,
} from "react";
import { useFrame } from "@react-three/fiber";
import { VideoTexture } from "three";

const VideoProjection = React.memo(function VideoProjection({
  videoUrl,
  genre,
  onVideoError,
}) {
  const videoRef = useRef();
  const [videoTexture, setVideoTexture] = useState(null);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    setVideoLoaded(false);
    setHasError(false);
    setVideoTexture(null);

    const video = document.createElement("video");
    video.src = videoUrl;
    video.crossOrigin = "anonymous";
    video.loop = true;
    video.muted = true;
    video.playsInline = true;
    video.autoplay = true;
    video.preload = "auto";
    video.width = 512;
    video.height = 288;

    const handleLoadedData = () => {
      setVideoLoaded(true);
      setHasError(false);

      try {
        const texture = new VideoTexture(video);
        texture.minFilter = 1003;
        texture.magFilter = 1003;
        texture.format = 1022;
        texture.flipY = false;
        texture.wrapS = 1000;
        texture.wrapT = 1000;
        texture.generateMipmaps = false;
        texture.needsUpdate = true;

        setVideoTexture(texture);

        video.play().catch((e) => {
          console.warn(`⚠️ Autoplay prevented: ${e.message}`);
        });
      } catch (error) {
        console.error(`❌ Error creating texture: ${error}`);
        setHasError(true);
      }
    };

    const handleError = () => {
      console.error(`❌ Video failed to load: ${videoUrl}`);
      setHasError(true);
      setVideoLoaded(false);
      if (onVideoError) onVideoError();
    };

    video.addEventListener("loadeddata", handleLoadedData);
    video.addEventListener("error", handleError);
    video.load();
    videoRef.current = video;

    return () => {
      if (video) {
        video.removeEventListener("loadeddata", handleLoadedData);
        video.removeEventListener("error", handleError);
        video.pause();
        video.src = "";
        video.load();
      }
    };
  }, [videoUrl, genre, onVideoError]);

  // Cleanup de textura cuando se desmonte el componente
  useEffect(() => {
    return () => {
      if (videoTexture) {
        videoTexture.dispose();
      }
    };
  }, [videoTexture]);

  const frameCount = useRef(0);
  useFrame(() => {
    frameCount.current++;
    if (
      frameCount.current % 2 === 0 &&
      videoTexture &&
      videoRef.current &&
      !videoRef.current.paused &&
      !videoRef.current.seeking
    ) {
      videoTexture.needsUpdate = true;
    }
  });

  // Renderizar el material basado en el estado
  if (videoTexture && videoLoaded && !hasError) {
    return <meshBasicMaterial map={videoTexture} side={2} />;
  }

  const fallbackColors = {
    metal: "#8B0000",
    rock: "#B8860B",
    punk: "#2F4F4F",
  };

  return (
    <meshStandardMaterial
      color={fallbackColors[genre] || "#8B0000"}
      emissive={fallbackColors[genre] || "#8B0000"}
      emissiveIntensity={0.15}
      transparent
      opacity={0.7}
    />
  );
});

const allVideos = [
  "/videos/video1.mp4",
  "/videos/video2.mp4",
  "/videos/video3.mp4",
];

const testVideoMapping = {
  metal:
    "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
  rock: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
  punk: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
};

export default function Projector({ position, genre = "metal" }) {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [fallbackToTest, setFallbackToTest] = useState(false);

  const lightRef = useRef();
  const lensRef = useRef();

  const videoUrl = useMemo(() => {
    const url = fallbackToTest
      ? testVideoMapping[genre] || testVideoMapping.metal
      : allVideos[currentVideoIndex] || allVideos[0];

    return url;
  }, [currentVideoIndex, fallbackToTest, genre]);

  const handleVideoError = useCallback(() => {
    if (!fallbackToTest) {
      setFallbackToTest(true);
    }
  }, [fallbackToTest]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentVideoIndex((prevIndex) => {
        const newIndex = (prevIndex + 1) % allVideos.length;
        return newIndex;
      });
    }, 15000);
    return () => clearInterval(interval);
  }, []);

  const animationFrame = useRef(0);
  useFrame((state) => {
    animationFrame.current++;
    const time = state.clock.elapsedTime;

    if (animationFrame.current % 10 === 0 && lightRef.current) {
      const flickerVariation = Math.sin(time * 3) * 0.008;
      lightRef.current.intensity = 0.12 + flickerVariation;
    }

    if (animationFrame.current % 15 === 0 && lensRef.current) {
      const lensGlow = 0.08 + Math.sin(time * 10) * 0.02;
      lensRef.current.material.emissiveIntensity = lensGlow;
    }
  });

  return (
    <group position={position}>
      <group position={[0, 15, 8]}>
        {/* Cuerpo principal del proyector */}
        <mesh castShadow>
          <boxGeometry args={[2, 1, 3]} />
          <meshStandardMaterial
            color="#2a2a2a"
            metalness={0.8}
            roughness={0.2}
          />
        </mesh>

        {/* LEDs de estado */}
        <mesh position={[-0.4, 0.65, -0.8]}>
          <sphereGeometry args={[0.03, 8, 8]} />
          <meshStandardMaterial
            color="#228B22"
            emissive="#228B22"
            emissiveIntensity={0.6}
          />
        </mesh>
        <mesh position={[0, 0.65, -0.8]}>
          <sphereGeometry args={[0.03, 8, 8]} />
          <meshStandardMaterial
            color="#0066ff"
            emissive="#0066ff"
            emissiveIntensity={0.6}
          />
        </mesh>
        <mesh position={[0.4, 0.65, -0.8]}>
          <sphereGeometry args={[0.03, 8, 8]} />
          <meshStandardMaterial
            color="#CC4400"
            emissive="#CC4400"
            emissiveIntensity={0.3}
          />
        </mesh>

        {/* Lente del proyector */}
        <mesh ref={lensRef} position={[0, -0.6, 1.6]} castShadow>
          <cylinderGeometry args={[0.4, 0.4, 0.2, 16]} />
          <meshStandardMaterial
            color="#000000"
            metalness={0.9}
            roughness={0.1}
            emissive="#ffffff"
            emissiveIntensity={0.1}
          />
        </mesh>

        {/* Luz principal del proyector */}
        <spotLight
          ref={lightRef}
          position={[0, -0.6, 1.8]}
          target-position={[0, 5, 24.8]}
          angle={Math.PI / 5}
          penumbra={0.4}
          intensity={0.15}
          color="#ffffff"
          castShadow
          shadow-mapSize={[1024, 1024]}
        />

        {/* Luz ambiental suave */}
        <pointLight
          position={[0, 0, 0]}
          intensity={0.05}
          color="#ffffff"
          distance={15}
          decay={2}
        />
      </group>

      {/* Pantalla de proyección */}
      <group position={[0, 6, 24.8]} rotation={[0, 0, Math.PI]}>
        <mesh>
          <boxGeometry args={[20, 12, 0.2]} />
          <meshStandardMaterial
            color="#1a1a1a"
            metalness={0.9}
            roughness={0.1}
          />
        </mesh>
        <mesh position={[0, 0, -0.11]}>
          <planeGeometry args={[19, 11]} />
          <meshStandardMaterial
            color="#f5f5f5"
            roughness={0.9}
            metalness={0.0}
          />
        </mesh>
        <mesh position={[0, 0, -0.12]}>
          <planeGeometry args={[19, 11]} />
          <VideoProjection
            videoUrl={videoUrl}
            genre={`video-${currentVideoIndex + 1}`}
            onVideoError={handleVideoError}
          />
        </mesh>
      </group>

      {/* Soporte básico del proyector */}
      <group position={[0, 15, 8]}>
        <mesh position={[0, 1, 0]}>
          <cylinderGeometry args={[0.15, 0.15, 2, 8]} />
          <meshStandardMaterial
            color="#444444"
            metalness={0.8}
            roughness={0.2}
          />
        </mesh>
      </group>
    </group>
  );
}
