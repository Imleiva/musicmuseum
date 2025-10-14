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
    band: "Scorpions",
    venue: "Barcelona Rock Fest",
    date: "2023-07-08",
    description:
      "Scorpions pusieron el festival patas arriba con sus clásicos y una puesta en escena espectacular. Rock alemán de alto voltaje.",
    imageUrl: "/images/posters/Scorpions BRF/Scorpions BRF0_resultado.jpg",
    additionalImages: [
      "/images/posters/Scorpions BRF/Scorpions BRF1_resultado.jpg",
      "/images/posters/Scorpions BRF/Scorpions BRF2_resultado.jpg",
    ],
    position: [-15, 5, -23.5],
    genre: "metal",
    attendance: "30,000",
    setlist: [
      "Rock You Like a Hurricane",
      "Still Loving You",
      "Big City Nights",
      "Wind of Change",
    ],
  },
  {
    id: 2,
    band: "Iron Maiden",
    venue: "Download Festival",
    date: "2023-06-10",
    description:
      "Bruce Dickinson in full form at 64 years old. A masterclass in classic heavy metal with Eddie making spectacular appearances throughout the show.",
    imageUrl: "/images/posters/IronMaiden/1691365827878_resultado.jpg",
    additionalImages: [
      "/images/posters/IronMaiden/1691365828889_resultado.jpg",
      "/images/posters/IronMaiden/1691365829992_resultado.jpg",
    ],
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
    id: 6,
    band: "Avantasia",
    venue: "Wacken Open Air",
    date: "2019-08-02",
    description:
      "Avantasia deslumbró con su ópera metal y un elenco de estrellas invitadas en un show épico y teatral.",
    imageUrl: "/images/posters/Avantasia/Avantasia 0_resultado.jpg",
    additionalImages: [
      "/images/posters/Avantasia/Avantasia 1_resultado.jpg",
      "/images/posters/Avantasia/Avantasia 2_resultado.jpg",
      "/images/posters/Avantasia/Avantasia 3_resultado.jpg",
    ],
    position: [-23.5, 5, -6], // Pared izquierda centro - espaciado aumentado
    genre: "metal",
    attendance: "40,000",
    setlist: [
      "The Scarecrow",
      "Dying for an Angel",
      "Lost in Space",
      "Sign of the Cross",
    ],
  },
  {
    id: 3,
    band: "Helloween",
    venue: "Wacken Open Air",
    date: "2018-08-03",
    description:
      "Helloween ofreció un show épico de power metal con todos sus miembros históricos reunidos en el escenario.",
    imageUrl: "/images/posters/Helloween/Helloween 0_resultado.jpg",
    additionalImages: [
      "/images/posters/Helloween/Helloween 1_resultado.jpg",
      "/images/posters/Helloween/Helloween 2_resultado.jpg",
    ],
    position: [5, 5, -23.5], // Pared trasera centro-der - colgado en la pared
    genre: "metal",
    attendance: "75,000",
    setlist: [
      "Eagle Fly Free",
      "Future World",
      "I Want Out",
      "Keeper of the Seven Keys",
    ],
  },
  {
    id: 4,
    band: "Michael Schenker",
    venue: "Sweden Rock Festival",
    date: "2016-06-10",
    description:
      "Michael Schenker Group deslumbró con solos virtuosos y clásicos del heavy metal en un show memorable.",
    imageUrl:
      "/images/posters/Michael Schenker/Michael Schenker 0_resultado.jpg",
    additionalImages: [
      "/images/posters/Michael Schenker/Michael Schenker 1_resultado.jpg",
      "/images/posters/Michael Schenker/Michael Schenker 2_resultado.jpg",
    ],
    position: [15, 5, -23.5], // Pared trasera derecha - colgado en la pared
    genre: "metal",
    attendance: "20,000",
    setlist: [
      "Armed and Ready",
      "Into the Arena",
      "Rock Bottom",
      "Doctor Doctor",
    ],
  },

  // Pared izquierda - Metal moderno y extremo
  {
    id: 5,
    band: "Judas Priest",
    venue: "Rock Fest Barcelona",
    date: "2022-07-02",
    description:
      "Judas Priest arrasó con un show lleno de clásicos, cuero y actitud, demostrando por qué son leyendas del heavy metal.",
    imageUrl: "/images/posters/Judas Priest/Judas Priest RF0_resultado.jpg",
    additionalImages: [
      "/images/posters/Judas Priest/Judas Priest RF1_resultado.jpg",
      "/images/posters/Judas Priest/Judas Priest RF2_resultado.jpg",
      "/images/posters/Judas Priest/Judas Priest RF3_resultado.jpg",
    ],
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
    id: 7,
    band: "Apocalyptica",
    venue: "Tuska Open Air",
    date: "2019-06-28",
    description:
      "Apocalyptica fusionó el metal sinfónico con cellos en un espectáculo único y potente.",
    imageUrl: "/images/posters/Apocalyptica/Apocalyptica 0_resultado.jpg",
    additionalImages: [
      "/images/posters/Apocalyptica/Apocalyptica 1_resultado.jpg",
      "/images/posters/Apocalyptica/Apocalyptica 2_resultado.jpg",
    ],
    position: [-23.5, 5, 6], // Pared izquierda centro-abajo - espaciado aumentado
    genre: "metal",
    attendance: "30,000",
    setlist: ["Path", "I Don't Care", "Hall of the Mountain King", "Seemann"],
  },
  {
    id: 8,
    band: "Axel Rudi Pell",
    venue: "Bang Your Head!!! Festival",
    date: "2017-07-14",
    description:
      "Axel Rudi Pell ofreció un show de heavy metal melódico con solos de guitarra y grandes himnos.",
    imageUrl: "/images/posters/Axel Rudi Pell/Axel Rudi Pell 0_resultado.jpg",
    additionalImages: [
      "/images/posters/Axel Rudi Pell/Axel Rudi Pell 1_resultado.jpg",
      "/images/posters/Axel Rudi Pell/Axel Rudi Pell 2_resultado.jpg",
    ],
    position: [-23.5, 5, 18], // Pared izquierda abajo - espaciado aumentado
    genre: "metal",
    attendance: "15,000",
    setlist: [
      "Mystica",
      "Oceans of Time",
      "The Masquerade Ball",
      "Rock the Nation",
    ],
  },

  // Pared derecha - Metal internacional y death metal
  {
    id: 9,
    band: "Rammstein",
    venue: "Berlin Stadium",
    date: "2023-07-15",
    description:
      "Pyrotechnic madness and industrial metal perfection. Till Lindemann and company turned the stadium into a blazing inferno of German precision.",
    imageUrl: "/images/posters/Rammstein/Rammstein 0_resultado.jpg",
    additionalImages: [
      "/images/posters/Rammstein/Rammstein 1_resultado.jpg",
      "/images/posters/Rammstein/Rammstein 2_resultado.jpg",
      "/images/posters/Rammstein/Rammstein 3_resultado.jpg",
    ],
    position: [23.5, 5, -18], // Pared derecha arriba - espaciado aumentado
    genre: "metal",
    attendance: "75,000",
    setlist: ["Du Hast", "Sonne", "Ich Will", "Engel"],
  },
  {
    id: 10,
    band: "Babymetal",
    venue: "Tokyo Dome",
    date: "2016-09-19",
    description:
      "Babymetal fusionó el metal con el pop japonés en un espectáculo visual y sonoro único, con miles de fans enloquecidos.",
    imageUrl: "/images/posters/Babymetal/Babymetal 0_resultado.jpg",
    additionalImages: [
      "/images/posters/Babymetal/Babymetal 1_resultado.jpg",
      "/images/posters/Babymetal/Babymetal 2_resultado.jpg",
      "/images/posters/Babymetal/Babymetal 3_resultado.jpg",
    ],
    position: [23.5, 5, -6], // Pared derecha centro - espaciado aumentado
    genre: "metal",
    attendance: "55,000",
    setlist: ["Gimme Chocolate!!", "Megitsune", "Karate", "Road of Resistance"],
  },
  {
    id: 11,
    band: "Halestorm",
    venue: "Download Festival",
    date: "2022-06-10",
    description:
      "Halestorm mezcló el hard rock y el metal alternativo con la poderosa voz de Lzzy Hale en un show explosivo.",
    imageUrl: "/images/posters/Halestorm/Halestorm 0_resultado.jpg",
    additionalImages: [
      "/images/posters/Halestorm/Halestorm 1_resultado.jpg",
      "/images/posters/Halestorm/Halestorm 2_resultado.jpg",
    ],
    position: [23.5, 5, 6], // Pared derecha centro-abajo - espaciado aumentado
    genre: "metal",
    attendance: "25,000",
    setlist: [
      "Love Bites",
      "I Miss the Misery",
      "Freak Like Me",
      "Uncomfortable",
    ],
  },
  {
    id: 12,
    band: "Graveyard",
    venue: "Sweden Rock Festival",
    date: "2019-06-08",
    description:
      "Graveyard fusionó el hard rock y el stoner metal en un concierto lleno de riffs pesados y atmósfera retro.",
    imageUrl: "/images/posters/Graveyard/Graveyard 0_resultado.jpg",
    additionalImages: [
      "/images/posters/Graveyard/Graveyard 1_resultado.jpg",
      "/images/posters/Graveyard/Graveyard 2_resultado.jpg",
    ],
    position: [23.5, 5, 18], // Pared derecha abajo - espaciado aumentado
    genre: "metal",
    attendance: "12,000",
    setlist: ["Uncomfortably Numb", "The Fox", "Hisingen Blues", "Cold Love"],
  },

  // ============ CLASSIC ROCK ROOM ============
  // Pared trasera - Los dioses del rock clásico
  {
    id: 13,
    band: "The Warning",
    venue: "Mexico City Arena",
    date: "2024-03-15",
    description:
      "The Warning arrasó con su energía y potencia en directo, demostrando por qué son la nueva revelación del rock internacional.",
    imageUrl: "/images/posters/The Warning/The Warning 0_resultado.jpg",
    additionalImages: [
      "/images/posters/The Warning/The Warning 1_resultado.jpg",
      "/images/posters/The Warning/The Warning 2_resultado.jpg",
    ],
    position: [85, 5, -23.5], // Rock room - pared trasera izquierda - colgado en la pared
    genre: "rock",
    attendance: "10,000",
    setlist: ["CHOKE", "DISCIPLE", "EVOLVE", "Narcisista"],
  },
  {
    id: 14,
    band: "Greta Van Fleet",
    venue: "Madison Square Garden",
    date: "2024-05-10",
    description:
      "Greta Van Fleet electrified the crowd with their modern take on classic rock, delivering una actuación poderosa y vibrante.",
    imageUrl: "/images/posters/Greta Van Fleet/Greta Van Fleet 0_resultado.jpg",
    additionalImages: [
      "/images/posters/Greta Van Fleet/Greta Van Fleet 1_resultado.jpg",
      "/images/posters/Greta Van Fleet/Greta Van Fleet 2_resultado.jpg",
      "/images/posters/Greta Van Fleet/Greta Van Fleet 3_resultado.jpg",
      "/images/posters/Greta Van Fleet/Greta Van Fleet 4_resultado.jpg",
    ],
    position: [95, 5, -23.5], // Rock room - pared trasera centro-izq - colgado en la pared
    genre: "rock",
    attendance: "20,000",
    setlist: [
      "Highway Tune",
      "Safari Song",
      "Black Smoke Rising",
      "Age of Man",
    ],
  },
  {
    id: 15,
    band: "Bruce Springsteen",
    venue: "Madison Square Garden",
    date: "2023-06-18",
    description:
      "Bruce Springsteen y la E Street Band ofrecieron un show épico de rock americano clásico y energía inagotable.",
    imageUrl: "/images/posters/BruceSpringsteen/1719110893978_resultado.jpg",
    additionalImages: [
      "/images/posters/BruceSpringsteen/1719151630875_resultado.jpg",
    ],
    position: [105, 5, -23.5],
    genre: "rock",
    attendance: "18,000",
    setlist: ["Born to Run", "Dancing in the Dark", "The River", "Glory Days"],
  },
  {
    id: 16,
    band: "The Who",
    venue: "Woodstock 50th Anniversary",
    date: "2019-08-15",
    description:
      "Roger Daltrey and Pete Townshend celebrating 50 years since Woodstock. The power of rock and roll transcending generations.",
    imageUrl: "/images/posters/The Who/The Who 0_resultado.jpg",
    additionalImages: [
      "/images/posters/The Who/The Who 1_resultado.jpg",
      "/images/posters/The Who/The Who 2_resultado.jpg",
      "/images/posters/The Who/The Who 3_resultado.jpg",
    ],
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
    band: "Blues Pills",
    venue: "Sweden Rock Festival",
    date: "2022-06-10",
    description:
      "Blues Pills ofrecieron un show de rock psicodélico y soul con la potente voz de Elin Larsson.",
    imageUrl: "/images/posters/Blues Pills/Blues Pills 0_resultado.jpg",
    additionalImages: [
      "/images/posters/Blues Pills/Blues Pills 1_resultado.jpg",
      "/images/posters/Blues Pills/Blues Pills 2_resultado.jpg",
    ],
    position: [76.5, 5, -18],
    genre: "rock",
    attendance: "8,000",
    setlist: [
      "High Class Woman",
      "Devil Man",
      "Little Sun",
      "No Hope Left For Me",
    ],
  },
  {
    id: 18,
    band: "Alice Cooper",
    venue: "Wembley Arena",
    date: "2011-10-28",
    description:
      "Alice Cooper ofreció un show teatral y electrizante, con clásicos del shock rock y una puesta en escena inolvidable.",
    imageUrl: "/images/posters/Alice Cooper/Alice Cooper 0_resultado.jpg",
    additionalImages: [
      "/images/posters/Alice Cooper/Alice Cooper 1_resultado.jpg",
      "/images/posters/Alice Cooper/Alice Cooper 2_resultado.jpg",
      "/images/posters/Alice Cooper/Alice Cooper 3_resultado.jpg",
    ],
    position: [76.5, 5, -6], // Rock room - pared izquierda centro - espaciado aumentado
    genre: "rock",
    attendance: "12,000",
    setlist: [
      "School's Out",
      "Poison",
      "No More Mr. Nice Guy",
      "Feed My Frankenstein",
    ],
  },
  {
    id: 19,
    band: "John Mayer",
    venue: "Madison Square Garden",
    date: "2023-04-15",
    description:
      "John Mayer deslumbró con su virtuosismo en la guitarra y su mezcla de rock, blues y pop.",
    imageUrl: "/images/posters/John Mayer/John Mayer 0_resultado.jpg",
    additionalImages: [
      "/images/posters/John Mayer/John Mayer 1_resultado.jpg",
      "/images/posters/John Mayer/John Mayer 2_resultado.jpg",
    ],
    position: [76.5, 5, 6],
    genre: "rock",
    attendance: "12,000",
    setlist: [
      "Gravity",
      "Slow Dancing in a Burning Room",
      "New Light",
      "Waiting on the World to Change",
    ],
  },
  {
    id: 20,
    band: "Lynyrd Skynyrd",
    venue: "Sweet Home Festival",
    date: "2022-09-10",
    description:
      "Lynyrd Skynyrd ofrecieron un show de rock sureño y clásicos atemporales.",
    imageUrl: "/images/posters/Lynyrd Skynyrd/Lynyrd Skynyrd 0_resultado.jpg",
    additionalImages: [
      "/images/posters/Lynyrd Skynyrd/Lynyrd Skynyrd 1_resultado.jpg",
      "/images/posters/Lynyrd Skynyrd/Lynyrd Skynyrd 2_resultado.jpg",
    ],
    position: [76.5, 5, 18],
    genre: "rock",
    attendance: "10,000",
    setlist: [
      "Sweet Home Alabama",
      "Free Bird",
      "Simple Man",
      "Gimme Three Steps",
    ],
  },

  // Pared derecha - Rock clásico estadounidense
  {
    id: 34,
    band: "Scorpions BRF",
    venue: "Barcelona Rock Fest",
    date: "2023-07-08",
    description:
      "Scorpions pusieron el festival patas arriba con sus clásicos y una puesta en escena espectacular. Rock alemán de alto voltaje.",
    imageUrl: "/images/posters/Scorpions BRF/Scorpions BRF0_resultado.jpg",
    additionalImages: [
      "/images/posters/Scorpions BRF/Scorpions BRF1_resultado.jpg",
      "/images/posters/Scorpions BRF/Scorpions BRF2_resultado.jpg",
    ],
    position: [123.5, 5, -18],
    genre: "rock",
    attendance: "30,000",
    setlist: [
      "Rock You Like a Hurricane",
      "Still Loving You",
      "Big City Nights",
      "Wind of Change",
    ],
  },
  {
    id: 35,
    band: "Angus & Julia Stone",
    venue: "Sydney Opera House",
    date: "2023-03-20",
    description:
      "Angus & Julia Stone cautivaron con su folk rock y armonías emotivas en un show íntimo y elegante.",
    imageUrl:
      "/images/posters/Angus & Julia Stone/Angus & Julia Stone 0_resultado.jpg",
    additionalImages: [
      "/images/posters/Angus & Julia Stone/Angus & Julia Stone 1_resultado.jpg",
      "/images/posters/Angus & Julia Stone/Angus & Julia Stone 2_resultado.jpg",
    ],
    position: [123.5, 5, -6],
    genre: "rock",
    attendance: "5,000",
    setlist: ["Chateau", "Big Jet Plane", "Snow", "Grizzly Bear"],
  },
  {
    id: 36,
    band: "Ben Poole",
    venue: "London Blues Night",
    date: "2024-05-18",
    description:
      "Ben Poole ofreció un show de blues rock moderno con gran técnica y feeling.",
    imageUrl: "/images/posters/Ben Poole/Ben Poole0_resultado.jpg",
    additionalImages: [
      "/images/posters/Ben Poole/Ben Poole1_resultado.jpg",
      "/images/posters/Ben Poole/Ben Poole2_resultado.jpg",
    ],
    position: [123.5, 5, 6],
    genre: "rock",
    attendance: "2,000",
    setlist: [
      "Time Might Never Come",
      "Let Me Be",
      "Stay at Mine",
      "Start the Car",
    ],
  },
  {
    id: 37,
    band: "John Mayer",
    venue: "London Arena",
    date: "2024-07-10",
    description:
      "John Mayer volvió a sorprender con su mezcla de rock, blues y pop en un show lleno de matices.",
    imageUrl: "/images/posters/John Mayer/John Mayer 10_resultado.jpg",
    additionalImages: [
      "/images/posters/John Mayer/John Mayer 11_resultado.jpg",
      "/images/posters/John Mayer/John Mayer 12_resultado.jpg",
    ],
    position: [123.5, 5, 18],
    genre: "rock",
    attendance: "10,000",
    setlist: ["Heartbreak Warfare", "Vultures", "Belief", "Edge of Desire"],
  },

  // ============ PUNK SPACE ============
  // Pared trasera - Punk clásico y hardcore
  {
    id: 21,
    band: "The Black Halos",
    venue: "Punk Fest",
    date: "2024-05-10",
    description:
      "The Black Halos encendieron el escenario con su punk rock canadiense y actitud rebelde.",
    imageUrl: "/images/posters/the black halos/the black halos0_resultado.jpg",
    additionalImages: [
      "/images/posters/the black halos/the black halos1_resultado.jpg",
      "/images/posters/the black halos/the black halos2_resultado.jpg",
    ],
    position: [185, 5, -23.5],
    genre: "punk",
    attendance: "2,000",
    setlist: [
      "Ain't No Good Time to Say Goodbye",
      "Fossil Fuel",
      "Mirrorman",
      "Third World USA",
    ],
  },
  {
    id: 22,
    band: "The Hellacopters",
    venue: "Sweden Rock",
    date: "2023-06-15",
    description:
      "The Hellacopters ofrecieron un show explosivo de garage punk y rock escandinavo.",
    imageUrl:
      "/images/posters/The Hellacopters/The Hellacopters 0_resultado.jpg",
    additionalImages: [
      "/images/posters/The Hellacopters/The Hellacopters 1_resultado.jpg",
      "/images/posters/The Hellacopters/The Hellacopters 2_resultado.jpg",
    ],
    position: [195, 5, -23.5],
    genre: "punk",
    attendance: "5,000",
    setlist: [
      "Hopeless Case of a Kid in Denial",
      "Toys and Flavors",
      "By the Grace of God",
      "Carry Me Home",
    ],
  },
  {
    id: 23,
    band: "The Gems",
    venue: "Garage Fest",
    date: "2025-03-20",
    description:
      "The Gems fusionan punk y hard rock con actitud y riffs potentes.",
    imageUrl: "/images/posters/The Gems/The Gems0_resultado.jpg",
    additionalImages: [
      "/images/posters/The Gems/The Gems1_resultado.jpg",
      "/images/posters/The Gems/The Gems2_resultado.jpg",
    ],
    position: [205, 5, -23.5],
    genre: "punk",
    attendance: "1,200",
    setlist: [
      "Send Me to the Wolves",
      "Domino",
      "Like a Phoenix",
      "Fruits of My Labor",
    ],
  },
  {
    id: 24,
    band: "The Georgia Thunderbolts",
    venue: "Thunder Fest",
    date: "2024-09-10",
    description:
      "The Georgia Thunderbolts mezclan punk sureño y rock con mucha energía.",
    imageUrl:
      "/images/posters/The Georgia Thunderbolts/The Georgia Thunderbolts 0_resultado.jpg",
    additionalImages: [
      "/images/posters/The Georgia Thunderbolts/The Georgia Thunderbolts 1_resultado.jpg",
      "/images/posters/The Georgia Thunderbolts/The Georgia Thunderbolts 2_resultado.jpg",
    ],
    position: [215, 5, -23.5],
    genre: "punk",
    attendance: "1,000",
    setlist: [
      "Be Good to Yourself",
      "Can I Get a Witness",
      "Lend a Hand",
      "Looking for an Old Friend",
    ],
  },

  // Pared izquierda - Punk moderno y hardcore
  {
    id: 25,
    band: "The Hu",
    venue: "Mongol Rock Fest",
    date: "2023-07-22",
    description:
      "The Hu fusionan punk, rock y música tradicional mongola en un show único y potente.",
    imageUrl: "/images/posters/The Hu/The Hu 0_resultado.jpg",
    additionalImages: [
      "/images/posters/The Hu/The Hu 1_resultado.jpg",
      "/images/posters/The Hu/The Hu 2_resultado.jpg",
    ],
    position: [176.5, 5, -18],
    genre: "punk",
    attendance: "3,000",
    setlist: ["Wolf Totem", "Yuve Yuve Yu", "The Gereg", "Song of Women"],
  },
  {
    id: 26,
    band: "The Mothercrow",
    venue: "Barcelona Garage Night",
    date: "2024-11-05",
    description:
      "The Mothercrow mezclan garage, punk y psicodelia en un directo arrollador.",
    imageUrl: "/images/posters/The Mothercrow/The Mothercrow 0_resultado.jpg",
    additionalImages: [
      "/images/posters/The Mothercrow/The Mothercrow 1_resultado.jpg",
      "/images/posters/The Mothercrow/The Mothercrow 2_resultado.jpg",
    ],
    position: [176.5, 5, -6],
    genre: "punk",
    attendance: "1,500",
    setlist: ["Revolution", "Black Waves", "The Seed", "The Escape"],
  },
  {
    id: 27,
    band: "The Picturebooks",
    venue: "Berlin Punk Night",
    date: "2025-02-18",
    description:
      "The Picturebooks fusionan punk, blues y garage en un show visceral y energético.",
    imageUrl:
      "/images/posters/The Picturebooks/The Picturebooks 0_resultado.jpg",
    additionalImages: [
      "/images/posters/The Picturebooks/The Picturebooks 1_resultado.jpg",
      "/images/posters/The Picturebooks/The Picturebooks 2_resultado.jpg",
    ],
    position: [176.5, 5, 6],
    genre: "punk",
    attendance: "2,000",
    setlist: [
      "Your Kisses Burn Like Fire",
      "The Hands of Time",
      "Zero Fucks Given",
      "PCH Diamond",
    ],
  },
  {
    id: 28,
    band: "The Sheepdogs",
    venue: "Canadian Punk Fest",
    date: "2023-08-12",
    description:
      "The Sheepdogs mezclan punk, rock y psicodelia con gran energía en directo.",
    imageUrl: "/images/posters/The Sheepdogs/The Sheepdogs 0_resultado.jpg",
    additionalImages: [
      "/images/posters/The Sheepdogs/The Sheepdogs 1_resultado.jpg",
      "/images/posters/The Sheepdogs/The Sheepdogs 2_resultado.jpg",
    ],
    position: [176.5, 5, 18],
    genre: "punk",
    attendance: "2,500",
    setlist: [
      "Feeling Good",
      "I Don't Know",
      "Southern Dreaming",
      "The Way It Is",
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
    band: "Pixies",
    venue: "Alternative Punk Night",
    date: "2024-10-05",
    description:
      "Pixies mezclan punk alternativo y rock indie en un show icónico y rupturista.",
    imageUrl: "/images/posters/Pixies/Pixies0_resultado.jpg",
    additionalImages: [
      "/images/posters/Pixies/Pixies1_resultado.jpg",
      "/images/posters/Pixies/Pixies2_resultado.jpg",
    ],
    position: [223.5, 5, -6],
    genre: "punk",
    attendance: "4,000",
    setlist: [
      "Where Is My Mind?",
      "Debaser",
      "Gigantic",
      "Monkey Gone to Heaven",
    ],
  },
  {
    id: 31,
    band: "Simple Plan",
    venue: "Pop Punk Fest",
    date: "2025-01-22",
    description:
      "Simple Plan ofrecieron un show de pop punk energético y divertido, con grandes himnos generacionales.",
    imageUrl: "/images/posters/Simple Plan/Simple Plan0_resultado.jpg",
    additionalImages: [
      "/images/posters/Simple Plan/Simple Plan1_resultado.jpg",
      "/images/posters/Simple Plan/Simple Plan2_resultado.jpg",
    ],
    position: [223.5, 5, 6],
    genre: "punk",
    attendance: "6,000",
    setlist: ["Welcome to My Life", "Perfect", "I'm Just a Kid", "Shut Up!"],
  },
  {
    id: 33,
    band: "Skunk Anansie",
    venue: "London Punk Night",
    date: "2024-12-10",
    description:
      "Skunk Anansie fusionan punk, rock alternativo y energía brutal en directo.",
    imageUrl: "/images/posters/Skunk Anansie/Skunk Anansie 0_resultado.jpg",
    additionalImages: [
      "/images/posters/Skunk Anansie/Skunk Anansie 1_resultado.jpg",
      "/images/posters/Skunk Anansie/Skunk Anansie 2_resultado.jpg",
    ],
    position: [223.5, 5, 18],
    genre: "punk",
    attendance: "3,500",
    setlist: [
      "Weak",
      "Hedonism",
      "Charlie Big Potato",
      "Twisted (Everyday Hurts)",
    ],
  },
];

export default concerts;
