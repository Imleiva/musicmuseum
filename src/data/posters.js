/*
 * Información detallada de posters del museo
 * • Información organizada por bandas y eventos
 * • Fácil de mantener y expandir sin base de datos
 */

import { getImagePath } from "../utils/assetPaths";

export const posters = [
  {
    id: "baboon-show-001",
    bandKey: "thebaboonshow",
    image: getImagePath("$1"),
    title: "The Baboon Show - Live at Debaser",
    date: "2019-03-15",
    venue: "Debaser, Stockholm",
    description:
      "Concierto épico de The Baboon Show en uno de los venues más icónicos de Stockholm. Una noche llena de energía punk rock sueca.",
    details: {
      price: "350 SEK",
      doors: "19:00",
      showTime: "20:30",
      supportActs: ["Local Heroes", "Stockholm Punks"],
      specialNotes: "Último concierto antes de su gira europea",
    },
    year: 2019,
    tags: ["punk", "sweden", "live", "debaser"],
  },
  // Plantilla para futuros posters
  {
    id: "metallica-001",
    bandKey: "metallica",
    image: getImagePath("/images/posters/BaboonShow.jpg"),
    title: "Metallica - Master of Puppets Tour",
    date: "1986-09-20",
    venue: "Hammersmith Odeon, London",
    description:
      "Tour histórico de Master of Puppets, uno de los álbumes más influyentes del metal. Último tour con Cliff Burton.",
    details: {
      price: "£8.50",
      doors: "19:00",
      showTime: "20:00",
      supportActs: ["Anthrax"],
      specialNotes: "Último concierto con Cliff Burton en Europa",
    },
    year: 1986,
    tags: ["metal", "thrash", "master-of-puppets", "cliff-burton"],
  },
  {
    id: "iron-maiden-001",
    bandKey: "ironmaiden",
    image: getImagePath("/images/posters/iron-maiden.jpg"),
    title: "Iron Maiden - Powerslave World Tour",
    date: "1984-12-15",
    venue: "Long Beach Arena, California",
    description:
      "El tour Powerslave llevó a Iron Maiden a su máximo esplendor. Escenografía egipcia espectacular con la momia de Eddie.",
    details: {
      price: "$12.50",
      doors: "19:30",
      showTime: "20:30",
      supportActs: ["Twisted Sister"],
      specialNotes: "Debut del stage design egipcio más famoso del metal",
    },
    rarity: "rare",
    year: 1984,
    tags: ["metal", "nwobhm", "powerslave", "eddie"],
  },
  {
    id: "queen-001",
    bandKey: "queen",
    image: getImagePath("/images/posters/queen.jpg"),
    title: "Queen - A Night at the Opera Tour",
    date: "1975-11-28",
    venue: "Hammersmith Odeon, London",
    description:
      "Tour promocional de 'A Night at the Opera', presentando por primera vez 'Bohemian Rhapsody' en vivo.",
    details: {
      price: "£2.50",
      doors: "19:00",
      showTime: "20:00",
      supportActs: ["Mr. Big"],
      specialNotes: "Primera actuación en vivo de Bohemian Rhapsody",
    },
    rarity: "legendary",
    year: 1975,
    tags: ["rock", "opera", "bohemian-rhapsody", "freddie"],
  },
  {
    id: "nirvana-001",
    bandKey: "nirvana",
    image: getImagePath("/images/posters/nirvana.jpg"),
    title: "Nirvana - MTV Unplugged in New York",
    date: "1993-11-18",
    venue: "Sony Music Studios, New York",
    description:
      "El concierto acústico más famoso de la historia del grunge. Kurt Cobain en su faceta más íntima y melancólica.",
    details: {
      price: "Invitación únicamente",
      doors: "14:00",
      showTime: "14:30",
      supportActs: [],
      specialNotes:
        "Última gran actuación de Kurt Cobain, emitida póstumamente",
    },
    rarity: "legendary",
    year: 1993,
    tags: ["grunge", "acoustic", "mtv", "unplugged", "kurt-cobain"],
  },
  {
    id: "pink-floyd-001",
    bandKey: "pinkfloyd",
    image: getImagePath("/images/posters/pink-floyd.jpg"),
    title: "Pink Floyd - The Wall Live",
    date: "1980-02-07",
    venue: "Nassau Coliseum, New York",
    description:
      "La puesta en escena más ambiciosa del rock progresivo. Roger Waters construyendo literalmente un muro en el escenario.",
    details: {
      price: "$12.50",
      doors: "19:00",
      showTime: "20:00",
      supportActs: [],
      specialNotes:
        "Única gira con la construcción completa del muro en escena",
    },
    rarity: "legendary",
    year: 1980,
    tags: ["progressive", "concept-album", "theatrical", "the-wall"],
  },
  {
    id: "led-zeppelin-001",
    bandKey: "ledzeppelin",
    image: getImagePath("/images/posters/led-zeppelin.jpg"),
    title: "Led Zeppelin - Stairway to Heaven Tour",
    date: "1971-11-20",
    venue: "Empire Pool, Wembley",
    description:
      "La primera actuación en vivo de 'Stairway to Heaven', la canción que definiría el rock para siempre.",
    details: {
      price: "£1.50",
      doors: "19:30",
      showTime: "20:30",
      supportActs: ["Stone the Crows"],
      specialNotes: "Debut mundial de Stairway to Heaven",
    },
    rarity: "legendary",
    year: 1971,
    tags: ["hard-rock", "stairway", "debut", "wembley"],
  },
  {
    id: "kiss-001",
    bandKey: "kiss",
    image: getImagePath("/images/posters/kiss.jpg"),
    title: "KISS - Dynasty Tour",
    date: "1979-07-25",
    venue: "Madison Square Garden, New York",
    description:
      "El espectáculo más grande del rock. Fuego, sangre y maquillaje en una producción que marcó estándares.",
    details: {
      price: "$8.50",
      doors: "19:00",
      showTime: "20:00",
      supportActs: ["Judas Priest"],
      specialNotes: "Producción con presupuesto récord para la época",
    },
    rarity: "rare",
    year: 1979,
    tags: ["glam", "theatrical", "makeup", "fire"],
  },
  {
    id: "black-sabbath-001",
    bandKey: "blacksabbath",
    image: getImagePath("/images/posters/black-sabbath.jpg"),
    title: "Black Sabbath - Paranoid Tour",
    date: "1970-10-31",
    venue: "Town Hall, Birmingham",
    description:
      "La banda que inventó el heavy metal en su ciudad natal. Halloween con los pioneros del metal.",
    details: {
      price: "£0.75",
      doors: "19:00",
      showTime: "20:00",
      supportActs: ["Audience"],
      specialNotes: "Concierto de Halloween en su Birmingham natal",
    },
    rarity: "legendary",
    year: 1970,
    tags: ["heavy-metal", "paranoid", "halloween", "birmingham"],
  },
  {
    id: "ramones-001",
    bandKey: "ramones",
    image: getImagePath("/images/posters/ramones.jpg"),
    title: "Ramones - CBGB Opening Night",
    date: "1974-08-16",
    venue: "CBGB, New York",
    description:
      "La noche que nació el punk rock. Cuatro acordes, tres minutos y una revolución musical.",
    details: {
      price: "$3.00",
      doors: "20:00",
      showTime: "21:00",
      supportActs: ["Television"],
      specialNotes: "Concierto que definió el punk rock americano",
    },
    rarity: "legendary",
    year: 1974,
    tags: ["punk", "cbgb", "debut", "revolution"],
  },
  {
    id: "the-clash-001",
    bandKey: "theclash",
    image: getImagePath("/images/posters/the-clash.jpg"),
    title: "The Clash - London Calling Tour",
    date: "1979-12-15",
    venue: "The Lyceum, London",
    description:
      "La única banda que importa en su momento de gloria. Punk rock evolucionando hacia algo más grande.",
    details: {
      price: "£2.00",
      doors: "19:30",
      showTime: "20:30",
      supportActs: ["The Members"],
      specialNotes: "Tour de presentación del álbum London Calling",
    },
    rarity: "rare",
    year: 1979,
    tags: ["punk", "london-calling", "evolution", "ska"],
  },
];

// Función helper para buscar posters por banda
export const getPostersByBand = (bandKey) => {
  return posters.filter((poster) => poster.bandKey === bandKey);
};

// Función helper para buscar por año
export const getPostersByYear = (year) => {
  return posters.filter((poster) => poster.year === year);
};
