/*
 * Migración y combinación de sistemas de posters
 * • Convierte datos de concerts.js al formato de posters.js
 * • Mantiene compatibilidad con RockPoster.jsx existente
 * • Añade información detallada a los conciertos existentes
 */

import concerts from "./concerts.js";

// Función para migrar concerts.js a formato de posters.js
export const migrateToPostersFormat = () => {
  return concerts.map((concert) => ({
    id: `concert-${concert.id}`,
    bandKey: concert.band.toLowerCase().replace(/\s+/g, ""), // "Iron Maiden" -> "ironmaiden"
    image:
      concert.imageUrl ||
      `/images/posters/${concert.band
        .toLowerCase()
        .replace(/\s+/g, "")
        .replace(/^the/, "")}.jpg`,
    title: `${concert.band} - Live at ${concert.venue}`,
    date: concert.date,
    venue: concert.venue,
    description: concert.description,
    details: {
      attendance: concert.attendance,
      setlist: concert.setlist,
      specialNotes: `Concierto histórico del ${concert.genre} con ${concert.attendance} asistentes`,
    },
    year: new Date(concert.date).getFullYear(),
    tags: generateTags(concert),
  }));
};

// Generar tags automáticamente basados en datos del concierto
const generateTags = (concert) => {
  const tags = [];

  // Añadir género
  if (concert.genre) {
    tags.push(concert.genre.toLowerCase());
  }

  // Añadir década
  const year = new Date(concert.date).getFullYear();
  const decade = `${Math.floor(year / 10) * 10}s`;
  tags.push(decade);

  // Añadir tipo de venue basado en patrones comunes
  const venue = concert.venue.toLowerCase();
  if (venue.includes("stadium")) tags.push("stadium");
  else if (venue.includes("festival")) tags.push("festival");
  else if (venue.includes("garden") || venue.includes("arena"))
    tags.push("arena");
  else if (venue.includes("hall")) tags.push("hall");
  else tags.push("club");

  return tags;
};

// Combinar datos existentes con información adicional
export const enhancedPosters = migrateToPostersFormat();
