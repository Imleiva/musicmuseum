/**
 * Helper para manejar rutas de assets que funcione tanto en desarrollo como en producción
 * En desarrollo: /images/... funciona directamente
 * En producción (GitHub Pages): necesita /musicmuseum/images/...
 */

// Obtener la base URL desde Vite
const getBasePath = () => {
  // En desarrollo, import.meta.env.BASE_URL será '/'
  // En producción (GitHub Pages), será '/musicmuseum/'
  return import.meta.env.BASE_URL;
};

/**
 * Convierte una ruta de asset a la ruta correcta según el entorno
 * @param {string} path - Ruta relativa del asset (ej: 'images/logo.png')
 * @returns {string} - Ruta completa correcta
 */
export const getAssetPath = (path) => {
  // Remover slash inicial si existe
  const cleanPath = path.startsWith("/") ? path.slice(1) : path;
  const basePath = getBasePath();

  // Si basePath ya termina en '/', no agregar otro
  const separator = basePath.endsWith("/") ? "" : "/";

  return `${basePath}${separator}${cleanPath}`;
};

/**
 * Alias específico para imágenes
 */
export const getImagePath = (imagePath) => {
  const cleanPath = imagePath.startsWith("/images/")
    ? imagePath.slice(1) // Remover el '/' inicial
    : imagePath.startsWith("images/")
    ? imagePath
    : `images/${imagePath}`;

  return getAssetPath(cleanPath);
};

export default getAssetPath;
