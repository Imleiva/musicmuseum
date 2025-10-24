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
import { Html } from "@react-three/drei";
import { VideoTexture } from "three";
import CreditsButton from "./CreditsButton";

const VideoProjection = React.memo(function VideoProjection({
  videoUrl,
  genre,
  onVideoError,
  onVideoLoaded,
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

        // Notificar duración real del video si está disponible
        if (onVideoLoaded && video.duration && !isNaN(video.duration)) {
          const realDuration = Math.round(video.duration * 1000); // Convertir a ms
          console.log(
            `📺 Video loaded: ${videoUrl} - Duration: ${realDuration}ms`
          );
          onVideoLoaded(realDuration);
        }

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
  }, [videoUrl, genre, onVideoError, onVideoLoaded]);

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

// Videos con sus duraciones específicas (en milisegundos)
const videoPlaylist = [
  {
    url: "https://cdn.pixabay.com/video/2015/11/07/1275-145116912_medium.mp4",
    duration: 30000, // 30 segundos - Rotting Christ concert
    name: "Rock Concert",
  },
  {
    url: "https://cdn.pixabay.com/video/2020/07/24/45444-443133750_large.mp4",
    duration: 25000, // 25 segundos - Drums
    name: "Drums Performance",
  },
  {
    url: "/videos/creditos.mp4",
    duration: 60000, // 60 segundos - Video de créditos (tiempo generoso)
    name: "Museum Credits",
  },
];

const testVideoMapping = {
  metal: "https://cdn.pixabay.com/video/2015/11/07/1275-145116912_medium.mp4", // Rotting Christ rock concert
  rock: "https://cdn.pixabay.com/video/2015/11/07/1275-145116912_medium.mp4", // Rotting Christ rock concert
  punk: "https://cdn.pixabay.com/video/2020/07/24/45444-443133750_large.mp4", // Drums music instrument
};

export default function Projector({ position, genre = "metal" }) {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [fallbackToTest, setFallbackToTest] = useState(true); // Empezar con playlist directamente
  const [currentVideoDuration, setCurrentVideoDuration] = useState(30000); // Duración por defecto
  const [creditsActivated, setCreditsActivated] = useState(false);

  const lightRef = useRef();
  const lensRef = useRef();

  // Debug log para verificar que el componente se monta
  useEffect(() => {
    console.log(
      `🎬 Projector component mounted at position:`,
      position,
      `genre: ${genre}`
    );
  }, [position, genre]);

  // Función para alternar el video de créditos
  const toggleCreditsVideo = useCallback((shouldActivate) => {
    if (shouldActivate) {
      console.log("🎬 Activating credits video!");
      setCreditsActivated(true);
      // Ir directamente al video de créditos (índice 2 en la playlist)
      setCurrentVideoIndex(2);
      setFallbackToTest(true);
      setCurrentVideoDuration(videoPlaylist[2].duration);
    } else {
      console.log("🔄 Deactivating credits - returning to normal rotation");
      setCreditsActivated(false);
      // Volver al primer video de la playlist para reiniciar la rotación
      setCurrentVideoIndex(0);
      setFallbackToTest(true);
      setCurrentVideoDuration(videoPlaylist[0].duration);
    }
  }, []);

  const videoUrl = useMemo(() => {
    if (creditsActivated) {
      // Si se activaron los créditos, mostrar solo el video de créditos
      return videoPlaylist[2].url; // Video de créditos
    }

    if (fallbackToTest) {
      // Usar la playlist con videos reales
      const currentVideo = videoPlaylist[currentVideoIndex] || videoPlaylist[0];
      setCurrentVideoDuration(currentVideo.duration);
      return currentVideo.url;
    }

    // Fallback al testVideoMapping si hay error
    return testVideoMapping[genre] || testVideoMapping.metal;
  }, [currentVideoIndex, fallbackToTest, genre, creditsActivated]);

  const handleVideoError = useCallback(() => {
    console.warn(`⚠️ Video error, using genre fallback for ${genre}`);
    setFallbackToTest(false); // Solo cambiar a mapping si hay error
  }, [genre]);

  // Callback para actualizar duración cuando el video se carga
  const handleVideoLoaded = useCallback(
    (realDuration) => {
      if (fallbackToTest && realDuration > 5000) {
        // Solo si es mayor a 5 segundos
        setCurrentVideoDuration(realDuration);
        console.log(`⏱️ Updated video duration to: ${realDuration}ms`);
      }
    },
    [fallbackToTest]
  );

  // Sistema de rotación inteligente con duraciones dinámicas
  useEffect(() => {
    if (!fallbackToTest || creditsActivated) return; // No rotar si estamos en fallback o créditos activados

    const interval = setInterval(() => {
      setCurrentVideoIndex((prevIndex) => {
        const newIndex = (prevIndex + 1) % videoPlaylist.length;
        console.log(
          `🎬 Switching to video: ${videoPlaylist[newIndex]?.name || "Unknown"}`
        );
        return newIndex;
      });
    }, currentVideoDuration);

    return () => clearInterval(interval);
  }, [currentVideoDuration, fallbackToTest, creditsActivated]);

  const animationFrame = useRef();

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
      <group position={[0, 6, 29.5]} rotation={[0, 0, Math.PI]}>
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
            onVideoLoaded={handleVideoLoaded}
          />
        </mesh>
      </group>

      {/* Botón para alternar video de créditos */}
      <CreditsButton
        position={[0, -5, 25.5]}
        onCreditsToggle={toggleCreditsVideo}
        creditsActive={creditsActivated}
      />

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
