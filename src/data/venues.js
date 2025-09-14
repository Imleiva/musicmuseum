/*
 * Base de datos de venues históricos del rock
 * • Información detallada sobre los lugares más icónicos
 * • Historia, capacidad, conciertos memorables
 * • Datos geográficos y arquitectónicos
 * • Anécdotas y curiosidades de cada venue
 */

export const venues = {
  cbgb: {
    id: "cbgb",
    name: "CBGB",
    fullName:
      "Country, Bluegrass, Blues & Other Music For Uplifting Gormandizers",
    city: "New York",
    country: "USA",
    address: "315 Bowery, Manhattan",
    capacity: 300,
    opened: 1973,
    closed: 2006,
    type: "club",
    description:
      "El club que dio origen al punk rock americano. Un lugar pequeño y sucio que cambió la música para siempre.",
    significance: "Birthplace of American punk rock",
    memorableConcerts: [
      "Ramones debut (1974)",
      "Television residency (1974-1975)",
      "Patti Smith Group breakthrough (1975)",
      "Blondie early shows (1975-1976)",
      "Talking Heads debut (1975)",
    ],
    facts: [
      "Las paredes estaban cubiertas de stickers y graffiti de bandas",
      "El olor a cerveza rancia y cigarrillos era su seña de identidad",
      "Hilly Kristal, el dueño, nunca limpió los baños intencionalmente",
      "El escenario medía solo 10x10 pies",
      "Muchas bandas famosas tocaron allí antes de ser conocidas",
    ],
    currentStatus: "Cerrado (convertido en tienda de ropa)",
    legacy: "Considerado el lugar más importante en la historia del punk rock",
  },

  "wembley-stadium": {
    id: "wembley-stadium",
    name: "Wembley Stadium",
    fullName: "Wembley Stadium (Old)",
    city: "London",
    country: "UK",
    address: "Wembley, London",
    capacity: 72000,
    opened: 1923,
    closed: 2000,
    rebuilt: 2007,
    type: "stadium",
    description:
      "El estadio más icónico de Inglaterra, hogar de los conciertos de rock más memorables.",
    significance: "Home of legendary rock concerts",
    memorableConcerts: [
      "Live Aid (1985) - Queen's legendary performance",
      "Queen Magic Tour (1986) - Freddie's last major performance",
      "Led Zeppelin (1971, 1975)",
      "The Who (1979)",
      "Michael Jackson Bad Tour (1988)",
    ],
    facts: [
      "Las 'Torres Gemelas' de Wembley eran su característica más reconocible",
      "Live Aid fue visto por 1.9 billones de personas mundialmente",
      "Queen's performance en Live Aid es considerada la mejor actuación en vivo de la historia",
      "El estadio fue demolido en 2003 y reconstruido",
      "Era conocido como 'The Home of Football' pero también del rock",
    ],
    currentStatus: "Reconstruido como nuevo Wembley Stadium",
    legacy: "Sinónimo de los grandes momentos del rock británico",
  },

  "madison-square-garden": {
    id: "madison-square-garden",
    name: "Madison Square Garden",
    fullName: "Madison Square Garden",
    city: "New York",
    country: "USA",
    address: "4 Pennsylvania Plaza, Manhattan",
    capacity: 20000,
    opened: 1968,
    type: "arena",
    description:
      "El venue más famoso del mundo, autodenominado 'The World's Most Famous Arena'.",
    significance: "The World's Most Famous Arena",
    memorableConcerts: [
      "Led Zeppelin legendary residencies (1973, 1975)",
      "Elvis Presley (1972) - comeback special",
      "John Lennon's last concert (1974)",
      "Metallica S&M2 (2019)",
      "Billy Joel monthly residency (2014-presente)",
    ],
    facts: [
      "Es el cuarto Madison Square Garden, los anteriores estaban en diferentes ubicaciones",
      "Billy Joel tiene el récord de más shows en el venue (más de 150)",
      "Está construido sobre Penn Station",
      "Ha sido renovado múltiples veces pero mantiene su esencia",
      "Es considerado la prueba definitiva para cualquier artista",
    ],
    currentStatus: "Activo",
    legacy: "El venue definitivo para cualquier artista que se precie",
  },

  "red-rocks": {
    id: "red-rocks",
    name: "Red Rocks Amphitheatre",
    fullName: "Red Rocks Park and Amphitheatre",
    city: "Morrison, Colorado",
    country: "USA",
    address: "18300 W Alameda Pkwy, Morrison, CO",
    capacity: 9525,
    opened: 1941,
    type: "amphitheatre",
    description:
      "El anfiteatro natural más hermoso del mundo, esculpido entre formaciones rocosas rojas.",
    significance: "Most beautiful concert venue in the world",
    memorableConcerts: [
      "U2 Under a Blood Red Sky (1983) - filmed here",
      "The Beatles (1964) - one of their most scenic concerts",
      "Jimi Hendrix (1968, 1970)",
      "Neil Young (multiple years)",
      "String Cheese Incident annual shows",
    ],
    facts: [
      "La acústica natural es perfecta sin necesidad de amplificación adicional",
      "Está a 6,450 pies sobre el nivel del mar",
      "Las formaciones rocosas tienen 300 millones de años",
      "Es un hito natural registrado",
      "Muchos artistas consideran tocar aquí como el pináculo de su carrera",
    ],
    currentStatus: "Activo",
    legacy: "El venue más espectacular visualmente del mundo del rock",
  },

  "royal-albert-hall": {
    id: "royal-albert-hall",
    name: "Royal Albert Hall",
    fullName: "Royal Albert Hall of Arts and Sciences",
    city: "London",
    country: "UK",
    address: "Kensington Gore, South Kensington",
    capacity: 5272,
    opened: 1871,
    type: "concert-hall",
    description:
      "El venue más prestigioso de Londres, donde lo clásico se encuentra con el rock.",
    significance: "Britain's most prestigious venue",
    memorableConcerts: [
      "Led Zeppelin (1970) - acoustic set",
      "Deep Purple with Royal Philharmonic (1969, 1999)",
      "Frank Zappa (1969, 1971)",
      "Eric Clapton annual residencies",
      "Adele (2011) - Live at the Royal Albert Hall",
    ],
    facts: [
      "Fue construido en memoria del Príncipe Alberto",
      "Tiene un famoso 'eco' que ha sido parcialmente controlado con discos colgantes",
      "La reina Victoria nunca quiso entrar porque le recordaba a su difunto esposo",
      "Muchos artistas rock han grabado álbumes en vivo aquí",
      "Es el único venue donde puedes comprar tu propio asiento permanentemente",
    ],
    currentStatus: "Activo",
    legacy: "El venue que añade prestigio y clase a cualquier actuación rock",
  },
};

// Funciones helper
export const getVenuesByCountry = (country) => {
  return Object.values(venues).filter((venue) => venue.country === country);
};

export const getVenuesByType = (type) => {
  return Object.values(venues).filter((venue) => venue.type === type);
};

export const getVenuesByCapacity = (minCapacity, maxCapacity) => {
  return Object.values(venues).filter(
    (venue) => venue.capacity >= minCapacity && venue.capacity <= maxCapacity
  );
};
