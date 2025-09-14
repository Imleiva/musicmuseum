/*
 * Base de datos de álbumes icónicos del rock
 * • Historia de grabación y producción
 * • Información técnica y equipamiento usado
 * • Impacto cultural e influencia
 * • Anécdotas y historias detrás de cada álbum
 */

export const albums = {
  "led-zeppelin-iv": {
    id: "led-zeppelin-iv",
    bandKey: "ledzeppelin",
    title: "Led Zeppelin IV",
    alternativeTitles: ["Four Symbols", "Zoso", "Runes Album"],
    year: 1971,
    releaseDate: "1971-11-08",
    label: "Atlantic Records",
    producer: "Jimmy Page",
    engineer: "Andy Johns",
    studio: "Headley Grange (mobile studio)",
    duration: "42:34",
    genre: ["Hard Rock", "Heavy Metal", "Folk Rock"],
    description:
      "El álbum que definió el hard rock y estableció a Led Zeppelin como los reyes del rock.",

    tracks: [
      {
        title: "Black Dog",
        duration: "4:54",
        writer: "Page/Plant/Jones",
        facts: [
          "Named after a dog that hung around Headley Grange",
          "Riff compuesto en oddtime signature 7/8",
          "John Bonham tuvo que practicar mucho para seguir el ritmo",
        ],
      },
      {
        title: "Rock and Roll",
        duration: "3:40",
        writer: "Page/Plant/Jones/Bonham",
        facts: [
          "Surgió espontáneamente durante una jam session",
          "Bonham empezó tocando el intro de 'Keep A Knockin'",
          "Grabada en 15 minutos, primera toma",
        ],
      },
      {
        title: "The Battle of Evermore",
        duration: "5:51",
        writer: "Page/Plant",
        facts: [
          "Única canción donde Sandy Denny canta con Plant",
          "Inspirada en 'El Señor de los Anillos'",
          "Page toca mandolina en lugar de guitarra",
        ],
      },
      {
        title: "Stairway to Heaven",
        duration: "8:02",
        writer: "Page/Plant",
        facts: [
          "Nunca fue single en UK por decisión de la banda",
          "Considerada la mejor canción de rock de todos los tiempos",
          "El solo de guitarra fue improvisado en gran parte",
        ],
      },
      {
        title: "Misty Mountain Hop",
        duration: "4:38",
        writer: "Page/Plant/Jones",
        facts: [
          "Grabada con el piano eléctrico Fender Rhodes",
          "Letra sobre una redada policial en Hyde Park",
          "John Paul Jones en electric piano",
        ],
      },
      {
        title: "Four Sticks",
        duration: "4:44",
        writer: "Page/Plant",
        facts: [
          "Bonham tocó con 4 baquetas (de ahí el nombre)",
          "Una de las canciones más difíciles de tocar en vivo",
          "Tiempo irregular 7/8 y 9/8",
        ],
      },
      {
        title: "Going to California",
        duration: "3:31",
        writer: "Page/Plant",
        facts: [
          "Tributo a Joni Mitchell",
          "Solo guitarra acústica y mandolina",
          "Una de las favoritas de Robert Plant",
        ],
      },
      {
        title: "When the Levee Breaks",
        duration: "7:07",
        writer: "Page/Plant/Jones/Bonham/Memphis Minnie",
        facts: [
          "Versión de un blues de Memphis Minnie de 1929",
          "Bonham grabado en la escalera de Headley Grange",
          "Uno de los breaks de batería más sampleados de la historia",
        ],
      },
    ],

    recording: {
      location: "Headley Grange, Hampshire, England",
      mobileStudio: "Rolling Stones Mobile Studio",
      dates: "December 1970 - February 1971",
      additionalWork: "Island Studios, London (mixing)",
      equipment: {
        guitars: [
          "Gibson Les Paul Standard (Jimmy Page)",
          "Fender Telecaster (Jimmy Page)",
          "Martin D-28 acoustic (Page/Plant)",
        ],
        amps: [
          "Marshall 100W Super Lead",
          "Orange amplifiers",
          "Supro Delta King",
        ],
        drums: "Ludwig kit (John Bonham)",
        bass: "Fender Jazz Bass (John Paul Jones)",
      },
    },

    artwork: {
      cover: "Painting by an anonymous Victorian artist",
      symbols: {
        "jimmy-page": "Zoso symbol (meaning unknown)",
        "john-paul-jones": "Circle over three ovals (trinity)",
        "john-bonham": "Three circles intersecting (man/woman/child)",
        "robert-plant": "Feather in circle (justice and courage)",
      },
      designer: "Zacron (lettering)",
      gatefold: "The Hermit from Tarot deck",
    },

    impact: {
      sales: "37 million copies worldwide",
      certifications: [
        "23× Platinum (US)",
        "6× Platinum (UK)",
        "Diamond (Canada)",
      ],
      charts: {
        uk: "#1 (stayed 62 weeks)",
        us: "#2 (stayed 259 weeks on Billboard 200)",
        rolling_stone_500: "#66 Greatest Albums of All Time",
      },
      influence: [
        "Estableció el template del hard rock/heavy metal",
        "Influyó en generaciones de guitarristas",
        "'Stairway to Heaven' icono cultural mundial",
        "Inspiró el desarrollo del metal progresivo",
      ],
    },

    trivia: [
      "No tiene título oficial en la portada, solo los cuatro símbolos",
      "Headley Grange era una casa victoriana supuestamente embrujada",
      "El eco natural de la escalera le dio su sonido único a 'When the Levee Breaks'",
      "Jimmy Page quería alejarse de la imagen de 'heavy metal' de Led Zeppelin III",
      "Sandy Denny es la única mujer que aparece en un álbum de Led Zeppelin",
    ],
  },

  "pink-floyd-dark-side-moon": {
    id: "pink-floyd-dark-side-moon",
    bandKey: "pinkfloyd",
    title: "The Dark Side of the Moon",
    year: 1973,
    releaseDate: "1973-03-01",
    label: "Harvest Records",
    producer: "Pink Floyd",
    engineer: "Alan Parsons",
    studio: "Abbey Road Studios",
    duration: "43:09",
    genre: ["Progressive Rock", "Psychedelic Rock", "Art Rock"],
    description:
      "Una exploración sonora sobre la locura, el tiempo y la condición humana que se convirtió en el álbum más vendido de Pink Floyd.",

    concept: {
      theme: "Presiones de la vida moderna, paso del tiempo, locura, muerte",
      inspiration: [
        "Colapso mental de Syd Barrett",
        "Presiones de la industria musical",
        "Experiencias con drogas psicodélicas",
        "Filosofía existencial",
      ],
      structure: "Álbum conceptual con temas interconectados",
    },

    tracks: [
      {
        title: "Speak to Me",
        duration: "1:30",
        description: "Collage sonoro que introduce todos los temas del álbum",
        features: ["Heartbeat", "Clock ticking", "Cash register", "Airplane"],
      },
      {
        title: "Breathe (In the Air)",
        duration: "2:43",
        description: "Invitación a vivir la vida sin presiones externas",
        features: ["Guitarra slide de David Gilmour", "Harmonías vocales"],
      },
      {
        title: "On the Run",
        duration: "3:36",
        description: "Secuencia instrumental sobre el miedo y la paranoia",
        features: ["Sintetizador VCS3", "Efectos de sonido", "Loops"],
      },
      {
        title: "Time",
        duration: "6:53",
        description: "Sobre el paso inexorable del tiempo y el arrepentimiento",
        features: [
          "Relojes sincronizados",
          "Solo de guitarra icónico",
          "Campanas de alarma",
        ],
      },
      {
        title: "The Great Gig in the Sky",
        duration: "4:36",
        description: "Meditación instrumental sobre la muerte",
        features: ["Piano de Rick Wright", "Vocal improvisado de Clare Torry"],
      },
      {
        title: "Money",
        duration: "6:23",
        description: "Crítica al materialismo y la avaricia",
        features: ["Riff en 7/4", "Cash register loop", "Saxophone solo"],
      },
      {
        title: "Us and Them",
        duration: "7:49",
        description: "Sobre conflictos, guerra y división social",
        features: ["Saxophone de Dick Parry", "Armonías complejas"],
      },
      {
        title: "Any Colour You Like",
        duration: "3:26",
        description: "Instrumental sobre la ilusión de elección",
        features: ["Sintetizador VCS3", "Guitarra con efectos"],
      },
      {
        title: "Brain Damage",
        duration: "3:49",
        description: "Directamente sobre la locura mental",
        features: ["Referencia a Syd Barrett", "Risas inquietantes"],
      },
      {
        title: "Eclipse",
        duration: "2:03",
        description: "Final filosófico sobre la totalidad de la existencia",
        features: ["Heartbeat que conecta con el inicio", "Coro gospel"],
      },
    ],

    production: {
      innovations: [
        "Uso extensivo de multitrack recording (16-track)",
        "Técnicas de sampling primitivas",
        "Quadraphonic sound experiments",
        "Uso creativo de efectos y reverb",
      ],
      equipment: {
        mixing_desk: "Abbey Road custom console",
        tape_machines: "Studer 16-track",
        synthesizers: ["VCS3", "EMS Synthi A"],
        effects: ["EMT 140 plate reverb", "Kepex noise gates"],
      },
      techniques: [
        "Alan Parsons' innovative use of limiting and compression",
        "Careful stereo panning for immersive experience",
        "Use of found sounds and field recordings",
        "Precise editing and cross-fading between tracks",
      ],
    },

    artwork: {
      designer: "Storm Thorgerson (Hipgnosis)",
      concept: "Light refraction through prism",
      symbolism: [
        "Luz blanca = unidad/simplicidad",
        "Spectrum = complejidad de la vida",
        "Triángulo = Pink Floyd logo",
        "Fondo negro = misterio/vacío",
      ],
      photography: "Aubrey Powell",
      typography: "Futura font family",
    },

    legacy: {
      sales: "50+ million copies worldwide",
      chart_performance: {
        billboard_200: "14 years consecutive (736 weeks total)",
        uk_albums: "#2 peak, 301 weeks total",
        certifications: "15× Platinum (US), 14× Platinum (UK)",
      },
      cultural_impact: [
        "Sinónimo de música para audiophiles",
        "Fenómeno en planetariums mundialmente",
        "Inspiró el desarrollo del progressive rock",
        "Estableció Pink Floyd como artistas conceptuales",
      ],
      recognitions: [
        "Rolling Stone #55 Greatest Albums",
        "Grammy Hall of Fame (1999)",
        "Preserved in National Recording Registry (2013)",
      ],
    },

    trivia: [
      "Clare Torry fue pagada £30 por su vocal en 'The Great Gig in the Sky'",
      "Los relojes de 'Time' fueron grabados en una tienda de antigüedades",
      "Alan Parsons ganó Grammy como ingeniero por este álbum",
      "La tapa del prism fue la idea más simple entre 7 conceptos presentados",
      "Roger Waters inicialmente quería llamarlo 'Eclipse'",
    ],
  },

  "nirvana-nevermind": {
    id: "nirvana-nevermind",
    bandKey: "nirvana",
    title: "Nevermind",
    year: 1991,
    releaseDate: "1991-09-24",
    label: "DGC Records",
    producer: "Butch Vig",
    engineer: "Andy Wallace (mixing)",
    studio: "Sound City Studios, Van Nuys, CA",
    duration: "42:36",
    genre: ["Grunge", "Alternative Rock"],
    description:
      "El álbum que llevó el grunge al mainstream y cambió la música popular para siempre.",

    recording: {
      dates: "May-June 1991",
      budget: "$65,000",
      location: "Sound City Studios, Van Nuys, California",
      additional: "Devonshire Studios (mixing)",
      duration: "16 days recording, 8 days mixing",
    },

    tracks: [
      {
        title: "Smells Like Teen Spirit",
        duration: "5:01",
        single: "September 10, 1991",
        description: "El himno que definió la Generación X",
        writing: "Inspired by deodorant slogan, written in 5 minutes",
        impact: "Killed the hair metal era overnight",
      },
      {
        title: "In Bloom",
        duration: "4:14",
        single: "November 1992",
        description: "Ironía sobre fans que no entienden el mensaje",
        video: "Directed by Kevin Kerslake, parody of 60s TV shows",
      },
      {
        title: "Come as You Are",
        duration: "3:39",
        single: "March 1992",
        description: "Invitación a la autenticidad y aceptación",
        controversy: "Accused of copying Killing Joke's 'Eighties'",
      },
      {
        title: "Breed",
        duration: "3:03",
        original_title: "Immodium",
        description: "Agresión pura sobre relaciones tóxicas",
      },
      {
        title: "Lithium",
        duration: "4:17",
        single: "July 1992",
        description: "Sobre religión como escape de la depresión",
        performance: "Iconic MTV VMA 1992 performance",
      },
      {
        title: "Polly",
        duration: "2:57",
        description: "Narrative de un secuestro real en Washington",
        style: "Acoustic, minimalist arrangement",
      },
    ],

    production: {
      sound: "Clean, polished compared to 'Bleach'",
      techniques: [
        "Butch Vig's layered approach",
        "Andy Wallace's radio-friendly mix",
        "Kurt's multiple vocal takes for thickness",
        "Compression for punchy sound",
      ],
      equipment: {
        guitars: "Fender Mustang, Jaguar (Kurt Cobain)",
        amps: "Mesa Boogie, Marshall JCM800",
        effects: "Boss DS-1, EHX Small Clone chorus",
        drums: "Tama Artstar II (Dave Grohl)",
      },
    },

    artwork: {
      photographer: "Kirk Weddle",
      subject: "Spencer Elden (4 months old)",
      location: "Pasadena Aquatic Center pool",
      concept: "Innocent baby chasing money (corruption of innocence)",
      cost: "$200 photo shoot",
      controversy: "Spencer Elden sued band in 2021 for child exploitation",
    },

    cultural_impact: {
      sales: "30+ million copies worldwide",
      charts: {
        billboard: "#1 (knocked Michael Jackson's 'Dangerous' off top)",
        uk: "#7 peak",
        weeks_on_chart: "Billboard 200: 253 weeks",
      },
      significance: [
        "Marked the end of hair metal era",
        "Brought alternative rock to mainstream",
        "Made flannel shirts a fashion statement",
        "Established Seattle as music capital",
        "Changed radio programming nationwide",
      ],
      awards: [
        "Grammy nomination Best Alternative Music Album",
        "Rolling Stone #17 Greatest Albums",
        "NME #2 Greatest Albums of All Time",
      ],
    },

    aftermath: {
      band_impact: [
        "Catapulted Nirvana to superstardom overnight",
        "Put enormous pressure on Kurt Cobain",
        "Made them reluctant celebrities",
        "Led to conflicts within the band",
      ],
      industry_changes: [
        "Record labels started signing grunge/alternative bands",
        "Hair metal bands dropped by labels",
        "Alternative rock became commercially viable",
        "Changed MTV programming",
      ],
    },

    trivia: [
      "Kurt Cobain hated the polished sound initially",
      "DGC expected to sell 200,000 copies, sold 400,000 first week",
      "Title comes from a Teenage Fanclub song",
      "The guitar riff for 'Smells Like Teen Spirit' was written as a joke",
      "Dave Grohl recorded all drums in just a few days",
    ],
  },
};

// Funciones helper
export const getAlbumsByBand = (bandKey) => {
  return Object.values(albums).filter((album) => album.bandKey === bandKey);
};

export const getAlbumsByYear = (year) => {
  return Object.values(albums).filter((album) => album.year === year);
};

export const getAlbumsByGenre = (genre) => {
  return Object.values(albums).filter((album) =>
    album.genre.some((g) => g.toLowerCase().includes(genre.toLowerCase()))
  );
};

export const getAlbumsByProducer = (producer) => {
  return Object.values(albums).filter((album) =>
    album.producer.toLowerCase().includes(producer.toLowerCase())
  );
};
