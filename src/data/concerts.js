/*
 * Base de datos de conciertos del museo
 * • Información detallada de eventos por sala (Metal, Rock, Punk)
 * • Posiciones 3D para colocación de posters en las paredes
 * • Datos completos: banda, venue, fecha, setlist, asistencia
 * • Enlaces a plataformas de música para cada concierto
 */
const concerts = [
  // ============ METAL HALL ============
  {
    id: 1,
    band: "Metallica",
    venue: "Wembley Stadium",
    date: "2023-07-15",
    description:
      "Historic concert from the M72 World Tour. James Hetfield and company proved why they are the kings of thrash metal with an explosive 2.5-hour performance.",
    imageUrl: null,
    position: [-15, 5, -23.5],
    genre: "metal",
    attendance: "90,000",
    setlist: [
      "Enter Sandman",
      "Master of Puppets",
      "One",
      "Nothing Else Matters",
    ],
  },
  {
    id: 2,
    band: "Iron Maiden",
    venue: "Download Festival",
    date: "2023-06-10",
    description:
      "Bruce Dickinson in full form at 64 years old. A masterclass in classic heavy metal with Eddie making spectacular appearances throughout the show.",
    imageUrl: null,
    position: [-5, 5, -23.5], // Pared trasera centro-izq - colgado en la pared
    genre: "metal",
    attendance: "85,000",
    setlist: [
      "The Number of the Beast",
      "Run to the Hills",
      "Fear of the Dark",
      "Hallowed Be Thy Name",
    ],
  },
  {
    id: 3,
    band: "Black Sabbath",
    venue: "Birmingham Arena",
    date: "2017-02-04",
    description:
      "The final concert of the band that invented heavy metal. Ozzy, Tony Iommi and Geezer Butler closed 49 years of musical history with an emotional farewell.",
    imageUrl: null,

    position: [5, 5, -23.5], // Pared trasera centro-der - colgado en la pared
    genre: "metal",
    attendance: "15,000",
    setlist: ["War Pigs", "Iron Man", "Paranoid", "Children of the Grave"],
  },
  {
    id: 4,
    band: "Slayer",
    venue: "Forum LA",
    date: "2019-11-30",
    description:
      "The final farewell tour of the extreme thrash metal pioneers. 37 years of musical brutality came to an end with this legendary performance.",
    imageUrl: null,

    position: [15, 5, -23.5], // Pared trasera derecha - colgado en la pared
    genre: "metal",
    attendance: "18,000",
    setlist: [
      "Angel of Death",
      "Raining Blood",
      "South of Heaven",
      "Seasons in the Abyss",
    ],
  },

  // Pared izquierda - Metal moderno y extremo
  {
    id: 5,
    band: "Judas Priest",
    venue: "Bloodstock Festival",
    date: "2023-08-12",
    description:
      "Rob Halford proved he is still the Metal God at 72 years old. Leather, studs and pure metal in a performance that defied time itself.",
    imageUrl: null,

    position: [-23.5, 5, -18], // Pared izquierda arriba - espaciado aumentado
    genre: "metal",
    attendance: "25,000",
    setlist: [
      "Breaking the Law",
      "Painkiller",
      "Living After Midnight",
      "You've Got Another Thing Comin'",
    ],
  },
  {
    id: 6,
    band: "Megadeth",
    venue: "Hellfest",
    date: "2022-06-24",
    description:
      "Dave Mustaine's legendary thrash metal machine in full force. Technical precision and raw aggression in a perfect balance of musical brutality.",
    imageUrl: null,

    position: [-23.5, 5, -6], // Pared izquierda centro - espaciado aumentado
    genre: "metal",
    attendance: "60,000",
    setlist: [
      "Holy Wars",
      "Peace Sells",
      "Symphony of Destruction",
      "Hangar 18",
    ],
  },
  {
    id: 7,
    band: "Pantera",
    venue: "Download Festival",
    date: "2023-06-11",
    description:
      "The legendary reunion with Phil Anselmo and Rex Brown, plus Zakk Wylde and Charlie Benante. Raw power and groove metal at its finest.",
    imageUrl: null,
    position: [-23.5, 5, 6], // Pared izquierda centro-abajo - espaciado aumentado
    genre: "metal",
    attendance: "85,000",
    setlist: ["Cowboys from Hell", "Walk", "Cemetery Gates", "Domination"],
  },
  {
    id: 8,
    band: "Tool",
    venue: "Madison Square Garden",
    date: "2022-01-16",
    description:
      "Progressive metal perfection. Maynard James Keenan and the band delivered a transcendental experience combining complex rhythms with mystical visuals.",
    imageUrl: null,
    position: [-23.5, 5, 18], // Pared izquierda abajo - espaciado aumentado
    genre: "metal",
    attendance: "20,000",
    setlist: ["Schism", "Forty Six & 2", "Sober", "Pneuma"],
  },

  // Pared derecha - Metal internacional y death metal
  {
    id: 9,
    band: "Rammstein",
    venue: "Berlin Stadium",
    date: "2023-07-15",
    description:
      "Pyrotechnic madness and industrial metal perfection. Till Lindemann and company turned the stadium into a blazing inferno of German precision.",
    imageUrl: null,
    position: [23.5, 5, -18], // Pared derecha arriba - espaciado aumentado
    genre: "metal",
    attendance: "75,000",
    setlist: ["Du Hast", "Sonne", "Ich Will", "Engel"],
  },
  {
    id: 10,
    band: "Opeth",
    venue: "Royal Albert Hall",
    date: "2022-10-08",
    description:
      "Mikael Åkerfeldt's progressive death metal masterpiece in one of the world's most prestigious venues. Beauty and brutality in perfect harmony.",
    imageUrl: null,
    position: [23.5, 5, -6], // Pared derecha centro - espaciado aumentado
    genre: "metal",
    attendance: "5,000",
    setlist: [
      "Ghost of Perdition",
      "Blackwater Park",
      "Deliverance",
      "Drapery Falls",
    ],
  },
  {
    id: 11,
    band: "Gojira",
    venue: "Paris La Défense Arena",
    date: "2023-04-22",
    description:
      "French progressive death metal at its peak. Environmental consciousness meets crushing riffs in a performance that redefined modern metal.",
    imageUrl: null,
    position: [23.5, 5, 6], // Pared derecha centro-abajo - espaciado aumentado
    genre: "metal",
    attendance: "40,000",
    setlist: ["Flying Whales", "Stranded", "The Art of Dying", "Silvera"],
  },
  {
    id: 12,
    band: "Mastodon",
    venue: "Red Rocks",
    date: "2021-10-12",
    description:
      "Progressive sludge metal in the most beautiful venue in America. Troy Sanders and the band delivered crushing riffs under the Colorado stars.",
    imageUrl: null,
    position: [23.5, 5, 18], // Pared derecha abajo - espaciado aumentado
    genre: "metal",
    attendance: "9,500",
    setlist: [
      "Blood and Thunder",
      "Oblivion",
      "The Motherload",
      "Sultan's Curse",
    ],
  },

  // ============ CLASSIC ROCK ROOM ============
  // Pared trasera - Los dioses del rock clásico
  {
    id: 13,
    band: "Led Zeppelin",
    venue: "Madison Square Garden",
    date: "1973-07-28",
    description:
      "One of the greatest rock concerts in history. Plant, Page, Jones and Bonham at their absolute peak, defining what rock and roll could be.",
    imageUrl: null,
    position: [85, 5, -23.5], // Rock room - pared trasera izquierda - colgado en la pared
    genre: "rock",
    attendance: "20,000",
    setlist: ["Stairway to Heaven", "Black Dog", "Kashmir", "Whole Lotta Love"],
  },
  {
    id: 14,
    band: "Queen",
    venue: "Wembley Stadium",
    date: "1986-07-12",
    description:
      "Freddie Mercury's last major performance with Queen. 'Who Wants to Live Forever' took on prophetic meaning in this emotional farewell.",
    imageUrl: null,
    position: [95, 5, -23.5], // Rock room - pared trasera centro-izq - colgado en la pared
    genre: "rock",
    attendance: "72,000",
    setlist: [
      "Bohemian Rhapsody",
      "We Will Rock You",
      "We Are the Champions",
      "Radio Ga Ga",
    ],
  },
  {
    id: 15,
    band: "The Rolling Stones",
    venue: "Hyde Park",
    date: "2022-06-25",
    description:
      "At 60 years as a band, Mick Jagger proved age is just a number. Raw rock and roll energy that hasn't diminished with time.",
    imageUrl: null,
    position: [105, 5, -23.5], // Rock room - pared trasera centro-der - colgado en la pared
    genre: "rock",
    attendance: "65,000",
    setlist: ["Start Me Up", "Paint It Black", "Satisfaction", "Gimme Shelter"],
  },
  {
    id: 16,
    band: "The Who",
    venue: "Woodstock 50th Anniversary",
    date: "2019-08-15",
    description:
      "Roger Daltrey and Pete Townshend celebrating 50 years since Woodstock. The power of rock and roll transcending generations.",
    imageUrl: null,
    position: [115, 5, -23.5], // Rock room - pared trasera derecha - colgado en la pared
    genre: "rock",
    attendance: "50,000",
    setlist: [
      "Baba O'Riley",
      "Behind Blue Eyes",
      "Won't Get Fooled Again",
      "My Generation",
    ],
  },

  // Pared izquierda - Rock progresivo y espacial
  {
    id: 17,
    band: "Pink Floyd",
    venue: "Earls Court",
    date: "1994-10-20",
    description:
      "The Division Bell tour brought Pink Floyd's atmospheric rock to perfection. David Gilmour's guitar soared through cosmic soundscapes.",
    imageUrl: null,
    position: [76.5, 5, -18], // Rock room - pared izquierda arriba - espaciado aumentado
    genre: "rock",
    attendance: "17,000",
    setlist: ["Comfortably Numb", "Wish You Were Here", "Time", "Money"],
  },
  {
    id: 18,
    band: "Genesis",
    venue: "Madison Square Garden",
    date: "2021-12-17",
    description:
      "Phil Collins' final tour with Genesis. The Last Domino tour marked the end of an era for progressive rock legends.",
    imageUrl: null,
    position: [76.5, 5, -6], // Rock room - pared izquierda centro - espaciado aumentado
    genre: "rock",
    attendance: "20,000",
    setlist: [
      "In the Air Tonight",
      "Invisible Touch",
      "Land of Confusion",
      "I Can't Dance",
    ],
  },
  {
    id: 19,
    band: "Rush",
    venue: "Forum LA",
    date: "2015-08-01",
    description:
      "The R40 farewell tour. Geddy Lee, Alex Lifeson and Neil Peart's final bow as the greatest progressive rock power trio.",
    imageUrl: null,
    position: [76.5, 5, 6], // Rock room - pared izquierda centro-abajo - espaciado aumentado
    genre: "rock",
    attendance: "17,500",
    setlist: ["Tom Sawyer", "Freewill", "The Spirit of Radio", "Working Man"],
  },
  {
    id: 20,
    band: "Yes",
    venue: "Royal Albert Hall",
    date: "2023-05-21",
    description:
      "Steve Howe leading the progressive rock legends through their 55th anniversary tour. Complex compositions and virtuoso musicianship.",
    imageUrl: null,
    position: [76.5, 5, 18], // Rock room - pared izquierda abajo - espaciado aumentado
    genre: "rock",
    attendance: "5,000",
    setlist: [
      "Roundabout",
      "Owner of a Lonely Heart",
      "Close to the Edge",
      "Starship Trooper",
    ],
  },

  // Pared derecha - Rock clásico estadounidense
  {
    id: 34,
    band: "Aerosmith",
    venue: "Boston Garden",
    date: "1978-12-31",
    description:
      "Steven Tyler and Joe Perry at their drug-fueled peak. 'Rocks' era Aerosmith delivering American hard rock with blues swagger and attitude.",
    imageUrl: null,
    position: [123.5, 5, -18], // Rock room - pared derecha arriba - espaciado aumentado
    genre: "rock",
    attendance: "15,000",
    setlist: [
      "Walk This Way",
      "Sweet Emotion",
      "Dream On",
      "Back in the Saddle",
    ],
  },
  {
    id: 35,
    band: "Fleetwood Mac",
    venue: "The Forum LA",
    date: "1977-08-29",
    description:
      "The 'Rumours' tour at the height of the band's internal drama. Lindsey Buckingham and Stevie Nicks' tension creating musical magic.",
    imageUrl: null,
    position: [123.5, 5, -6], // Rock room - pared derecha centro - espaciado aumentado
    genre: "rock",
    attendance: "17,500",
    setlist: ["Go Your Own Way", "Don't Stop", "Dreams", "The Chain"],
  },
  {
    id: 36,
    band: "Eagles",
    venue: "The Forum LA",
    date: "1976-12-31",
    description:
      "The 'Hotel California' tour New Year's Eve show. Don Henley and Glenn Frey delivering California rock perfection with country influences.",
    imageUrl: null,
    position: [123.5, 5, 6], // Rock room - pared derecha centro-abajo - espaciado aumentado
    genre: "rock",
    attendance: "17,500",
    setlist: [
      "Hotel California",
      "Take It Easy",
      "Life in the Fast Lane",
      "Desperado",
    ],
  },
  {
    id: 37,
    band: "Boston",
    venue: "Boston Garden",
    date: "1978-03-15",
    description:
      "Tom Scholz's arena rock masterpiece. Studio-perfect sound reproduced live with precision and power, defining American rock sound.",
    imageUrl: null,
    position: [123.5, 5, 18], // Rock room - pared derecha abajo - espaciado aumentado
    genre: "rock",
    attendance: "15,000",
    setlist: [
      "More Than a Feeling",
      "Peace of Mind",
      "Foreplay/Long Time",
      "Rock & Roll Band",
    ],
  },

  // ============ PUNK SPACE ============
  // Pared trasera - Punk clásico y hardcore
  {
    id: 21,
    band: "The Ramones",
    venue: "CBGB",
    date: "1976-08-16",
    description:
      "The night that changed music forever. Four chords, three minutes, and the birth of punk rock in New York's most legendary venue.",
    imageUrl: null,
    position: [185, 5, -23.5], // Punk space - pared trasera izquierda - colgado en la pared
    genre: "punk",
    attendance: "300",
    setlist: [
      "Blitzkrieg Bop",
      "I Wanna Be Sedated",
      "Pet Sematary",
      "Sheena Is a Punk Rocker",
    ],
  },
  {
    id: 22,
    band: "Sex Pistols",
    venue: "Manchester Lesser Free Trade Hall",
    date: "1976-06-04",
    description:
      "The concert that inspired a generation. Only 40 people attended, but they all started bands. Punk rock's most influential gig.",
    imageUrl: null,
    position: [195, 5, -23.5], // Punk space - pared trasera centro-izq - colgado en la pared
    genre: "punk",
    attendance: "40",
    setlist: [
      "Anarchy in the UK",
      "God Save the Queen",
      "Pretty Vacant",
      "No Feelings",
    ],
  },
  {
    id: 23,
    band: "The Clash",
    venue: "Bonds NYC",
    date: "1981-06-11",
    description:
      "The only band that matters at their creative peak. Punk energy meeting reggae and ska influences in a genre-defining performance.",
    imageUrl: null,
    position: [205, 5, -23.5], // Punk space - pared trasera centro-der - colgado en la pared
    genre: "punk",
    attendance: "1,500",
    setlist: [
      "London Calling",
      "Should I Stay or Should I Go",
      "Rock the Casbah",
      "White Man In Hammersmith Palais",
    ],
  },
  {
    id: 24,
    band: "Dead Kennedys",
    venue: "Mabuhay Gardens",
    date: "1979-10-31",
    description:
      "Jello Biafra and the DKs on Halloween night in San Francisco. Political punk at its most confrontational and musically tight.",
    imageUrl: null,
    position: [215, 5, -23.5], // Punk space - pared trasera derecha - colgado en la pared
    genre: "punk",
    attendance: "200",
    setlist: [
      "Holiday in Cambodia",
      "California Über Alles",
      "Kill the Poor",
      "Too Drunk to Fuck",
    ],
  },

  // Pared izquierda - Punk moderno y hardcore
  {
    id: 25,
    band: "Black Flag",
    venue: "SST Records Show",
    date: "1981-12-03",
    description:
      "Henry Rollins at his most intense. Hardcore punk in its purest form with raw aggression and uncompromising attitude.",
    imageUrl: null,
    position: [176.5, 5, -18], // Punk space - pared izquierda arriba - espaciado aumentado
    genre: "punk",
    attendance: "500",
    setlist: ["Rise Above", "Nervous Breakdown", "TV Party", "My War"],
  },
  {
    id: 26,
    band: "NOFX",
    venue: "Fat Wreck 25th Anniversary",
    date: "2015-05-30",
    description:
      "Fat Mike's farewell tour celebrating 25 years of Fat Wreck Chords. Melodic punk rock with social commentary and self-deprecating humor.",
    imageUrl: null,
    position: [176.5, 5, -6], // Punk space - pared izquierda centro - espaciado aumentado
    genre: "punk",
    attendance: "8,000",
    setlist: ["Linoleum", "The Decline", "Bob", "Franco Un-American"],
  },
  {
    id: 27,
    band: "Bad Religion",
    venue: "Palladium Hollywood",
    date: "1994-05-17",
    description:
      "Greg Graffin's intellectual punk rock with Brett Gurewitz's melodic songwriting. 'Stranger Than Fiction' era at their creative peak.",
    imageUrl: null,
    position: [176.5, 5, 6], // Punk space - pared izquierda centro-abajo - espaciado aumentado
    genre: "punk",
    attendance: "3,500",
    setlist: ["21st Century Digital Boy", "Infected", "Generator", "You"],
  },
  {
    id: 28,
    band: "Green Day",
    venue: "Woodstock 94",
    date: "1994-08-14",
    description:
      "The moment punk went mainstream. Billie Joe Armstrong's mud fight with the audience became punk rock legend at the muddy festival.",
    imageUrl: null,
    position: [176.5, 5, 18], // Punk space - pared izquierda abajo - espaciado aumentado
    genre: "punk",
    attendance: "350,000",
    setlist: [
      "Longview",
      "Basket Case",
      "When I Come Around",
      "Welcome to Paradise",
    ],
  },

  // Pared derecha - Punk internacional y nuevo
  {
    id: 29,
    band: "The Baboon Show",
    venue: "Paral·lel 62, Barcelona",
    date: "2025-03-20",
    description:
      "Celebración del 20 aniversario de la banda sueca. Cecilia Boström demostró por qué es considerada un auténtico animal de escenario, haciendo crowdsurfing, escalando al primer piso y saltando en plancha al vacío. Una explosión de energía punk con el lema 'Girls to the front' como bandera.",
    imageUrl: "/images/posters/BaboonShow.jpg",
    additionalImages: [
      "/images/posters/BaboonShow.jpg",
      "/images/logoLRHF.png",
    ],
    position: [223.5, 5, -18], // Punk space - pared derecha arriba - espaciado aumentado
    genre: "punk",
    attendance: "Sold Out",
    setlist: [
      "Have a Party With Me",
      "God Bless You All",
      "Forward In Reverse",
      "You Got a Problem Without Knowing It",
      "Rolling",
      "Playing With Fire",
      "Radio Rebelde",
    ],
  },
  {
    id: 30,
    band: "The Offspring",
    venue: "Warped Tour",
    date: "1999-07-08",
    description:
      "Dexter Holland and the band at their commercial peak. 'Americana' era punk rock with mainstream appeal but underground attitude.",
    imageUrl: null,
    position: [223.5, 5, -6], // Punk space - pared derecha centro - espaciado aumentado
    genre: "punk",
    attendance: "20,000",
    setlist: [
      "Come Out and Play",
      "Self Esteem",
      "The Kids Aren't Alright",
      "Pretty Fly (For a White Guy)",
    ],
  },
  {
    id: 31,
    band: "Anti-Flag",
    venue: "Warped Tour",
    date: "2017-07-15",
    description:
      "Political punk rock at its most direct. Pat Thetic and Justin Sane delivering anti-establishment anthems with uncompromising energy.",
    imageUrl: null,
    position: [223.5, 5, 6], // Punk space - pared derecha centro-abajo - espaciado aumentado
    genre: "punk",
    attendance: "15,000",
    setlist: [
      "Die for the Government",
      "Turncoat",
      "The Press Corpse",
      "Kill the Rich",
    ],
  },
  {
    id: 33,
    band: "Rise Against",
    venue: "House of Blues",
    date: "2006-09-12",
    description:
      "Tim McIlrath's socially conscious punk rock with melodic hardcore edge. 'The Sufferer & The Witness' tour brought punk to the mainstream.",
    imageUrl: null,
    position: [223.5, 5, 18], // Punk space - pared derecha abajo - espaciado aumentado
    genre: "punk",
    attendance: "1,200",
    setlist: [
      "Give It All",
      "Swing Life Away",
      "Prayer of the Refugee",
      "Ready to Fall",
    ],
  },
];

export default concerts;
