import { useEffect, useState } from "react";

const WebGLErrorFallback = ({ children }) => {
  const [webglSupported, setWebglSupported] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Debug info
    console.log("WebGL Check - User Agent:", navigator.userAgent);
    console.log(
      "WebGL Check - Screen size:",
      window.screen.width,
      "x",
      window.screen.height
    );
    console.log(
      "WebGL Check - Viewport:",
      window.innerWidth,
      "x",
      window.innerHeight
    );

    // Detectar soporte de WebGL
    const canvas = document.createElement("canvas");
    const gl =
      canvas.getContext("webgl") || canvas.getContext("experimental-webgl");

    if (!gl) {
      console.error("WebGL no detectado");
      setWebglSupported(false);
      setError("WebGL no está disponible en este dispositivo");
      return;
    }

    console.log("WebGL detectado correctamente");

    // Verificar extensiones básicas
    const debugInfo = gl.getExtension("WEBGL_debug_renderer_info");
    if (debugInfo) {
      const renderer = gl.getParameter(debugInfo.UNMASKED_RENDERER_WEBGL);
      const vendor = gl.getParameter(debugInfo.UNMASKED_VENDOR_WEBGL);
      console.log("WebGL Renderer:", renderer);
      console.log("WebGL Vendor:", vendor);
    }

    // Listener para errores de WebGL
    const handleWebGLError = (event) => {
      console.error("Error WebGL:", event);
      setError("Error en la renderización 3D");
    };

    window.addEventListener("webglcontextlost", handleWebGLError);
    window.addEventListener("webglcontextcreationerror", handleWebGLError);

    return () => {
      window.removeEventListener("webglcontextlost", handleWebGLError);
      window.removeEventListener("webglcontextcreationerror", handleWebGLError);
    };
  }, []);

  if (!webglSupported || error) {
    return (
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          background: "linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          color: "#fff",
          fontFamily: "Arial, sans-serif",
          textAlign: "center",
          padding: "20px",
          zIndex: 1000,
        }}
      >
        <h2
          style={{
            color: "#ff6b6b",
            marginBottom: "20px",
            fontSize: "1.5rem",
          }}
        >
          🎸 Leiva'n Roll Hall of Fame
        </h2>
        <p
          style={{
            fontSize: "1.1rem",
            marginBottom: "10px",
            color: "#ffeb3b",
          }}
        >
          Error de Compatibilidad 3D
        </p>
        <p
          style={{
            fontSize: "0.9rem",
            opacity: 0.8,
            maxWidth: "400px",
            lineHeight: 1.5,
          }}
        >
          {error ||
            "Este dispositivo no soporta WebGL, necesario para la experiencia 3D del museo."}
        </p>
        <p
          style={{
            fontSize: "0.8rem",
            opacity: 0.6,
            marginTop: "20px",
          }}
        >
          Intenta usar un navegador más reciente o un dispositivo diferente.
        </p>
      </div>
    );
  }

  return children;
};

export default WebGLErrorFallback;
