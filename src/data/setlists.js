/*
 * Base de datos de setlists históricos
 * • Listas de canciones de conciertos memorables
 * • Información sobre cada canción (duración, álbum, año)
 * • Datos sobre covers y canciones especiales
 * • Estadísticas de frecuencia de interpretación
 */

export const setlists = {
  "queen-live-aid-1985": {
    id: "queen-live-aid-1985",
    concertId: "queen-live-aid",
    bandKey: "queen",
    venue: "Wembley Stadium",
    date: "1985-07-13",
    duration: "20 minutes",
    description:
      "El setlist de 20 minutos que salvó Live Aid y es considerado la mejor actuación en vivo de la historia.",
    songs: [
      {
        title: "Bohemian Rhapsody",
        duration: "2:30",
        album: "A Night at the Opera",
        year: 1975,
        notes: "Solo la parte final, con el público cantando",
      },
      {
        title: "Radio Ga Ga",
        duration: "4:15",
        album: "The Works",
        year: 1984,
        notes: "El momento icónico de clap-clap con 72,000 personas",
      },
      {
        title: "Hammer to Fall",
        duration: "3:45",
        album: "The Works",
        year: 1984,
        notes: "Energía pura de principio a fin",
      },
      {
        title: "Crazy Little Thing Called Love",
        duration: "3:30",
        album: "The Game",
        year: 1980,
        notes: "Freddie cambió a guitarra acústica",
      },
      {
        title: "We Will Rock You",
        duration: "2:15",
        album: "News of the World",
        year: 1977,
        notes: "El estadio entero participando",
      },
      {
        title: "We Are the Champions",
        duration: "3:45",
        album: "News of the World",
        year: 1977,
        notes: "Final épico que cerró la actuación",
      },
    ],
    specialNotes: [
      "Freddie Mercury tenía dolor de garganta pero dio la actuación de su vida",
      "La actuación se considera un punto de inflexión en Live Aid",
      "72,000 personas en Wembley y 1.9 billones viendo por TV",
      "Duró exactamente 20 minutos como se había acordado",
    ],
  },

  "nirvana-mtv-unplugged-1993": {
    id: "nirvana-mtv-unplugged-1993",
    concertId: "nirvana-unplugged",
    bandKey: "nirvana",
    venue: "Sony Music Studios",
    date: "1993-11-18",
    duration: "53 minutes",
    description:
      "El concierto acústico más famoso de la historia del grunge, grabado 5 meses antes de la muerte de Kurt Cobain.",
    songs: [
      {
        title: "About a Girl",
        duration: "3:37",
        album: "Bleach",
        year: 1989,
        notes: "Versión acústica más melódica que el original",
      },
      {
        title: "Come as You Are",
        duration: "4:13",
        album: "Nevermind",
        year: 1991,
        notes: "Adaptación perfecta al formato acústico",
      },
      {
        title: "Jesus Doesn't Want Me for a Sunbeam",
        duration: "4:37",
        album: "Cover de The Vaselines",
        year: 1987,
        notes: "Cover de una banda escocesa favorita de Kurt",
      },
      {
        title: "The Man Who Sold the World",
        duration: "4:20",
        album: "Cover de David Bowie",
        year: 1970,
        notes: "Muchos pensaron que era una canción original de Nirvana",
      },
      {
        title: "Pennyroyal Tea",
        duration: "3:40",
        album: "In Utero",
        year: 1993,
        notes: "Iba a ser single pero se canceló tras la muerte de Kurt",
      },
      {
        title: "Polly",
        duration: "3:16",
        album: "Nevermind",
        year: 1991,
        notes: "La canción más íntima del repertorio de Nirvana",
      },
      {
        title: "On a Plain",
        duration: "3:44",
        album: "Nevermind",
        year: 1991,
        notes: "Versión más tranquila que el original",
      },
      {
        title: "Something in the Way",
        duration: "4:01",
        album: "Nevermind",
        year: 1991,
        notes: "Cierre perfecto, Kurt casi susurrando",
      },
      {
        title: "Plateau",
        duration: "3:38",
        album: "Cover de Meat Puppets",
        year: 1984,
        notes: "Con Cris y Curt Kirkwood de Meat Puppets como invitados",
      },
    ],
    specialNotes: [
      "Kurt insistió en no tocar los grandes hits como 'Smells Like Teen Spirit'",
      "Usó una guitarra Martin D-18E de 1959, la misma del video 'Come As You Are'",
      "Las flores en el escenario fueron idea de Kurt para crear ambiente funeral",
      "Fue el último gran concierto televisado de la banda",
    ],
  },

  "metallica-live-shit-1989": {
    id: "metallica-live-shit-1989",
    concertId: "metallica-seattle",
    bandKey: "metallica",
    venue: "Seattle Coliseum",
    date: "1989-08-29",
    duration: "2 hours 15 minutes",
    description:
      "Concierto durante la gira de '...And Justice for All', en la cima del thrash metal.",
    songs: [
      {
        title: "Blackened",
        duration: "6:42",
        album: "...And Justice for All",
        year: 1988,
        notes: "Apertura explosiva del concierto",
      },
      {
        title: "For Whom the Bell Tolls",
        duration: "5:15",
        album: "Ride the Lightning",
        year: 1984,
        notes: "Con el famoso intro de campanas",
      },
      {
        title: "Welcome Home (Sanitarium)",
        duration: "6:30",
        album: "Master of Puppets",
        year: 1986,
        notes: "Momento más emotivo del show",
      },
      {
        title: "Harvester of Sorrow",
        duration: "6:18",
        album: "...And Justice for All",
        year: 1988,
        notes: "Heavy groove que hizo mover a todo el público",
      },
      {
        title: "Fade to Black",
        duration: "7:23",
        album: "Ride the Lightning",
        year: 1984,
        notes: "Solo de guitarra de Kirk Hammett espectacular",
      },
      {
        title: "Master of Puppets",
        duration: "8:55",
        album: "Master of Puppets",
        year: 1986,
        notes: "La obra maestra del thrash metal en vivo",
      },
      {
        title: "One",
        duration: "8:08",
        album: "...And Justice for All",
        year: 1988,
        notes: "Con proyección del video de la guerra",
      },
      {
        title: "Seek & Destroy",
        duration: "7:40",
        album: "Kill 'Em All",
        year: 1983,
        notes: "Cierre clásico con participación masiva del público",
      },
    ],
    specialNotes: [
      "Último tour antes de grabar el Black Album",
      "Jason Newsted había estado en la banda solo 2 años",
      "La producción era mucho más elaborada que en tours anteriores",
      "Marcó el final de la era thrash pura de Metallica",
    ],
  },
};

// Base de datos de canciones icónicas
export const iconicSongs = {
  "stairway-to-heaven": {
    title: "Stairway to Heaven",
    artist: "Led Zeppelin",
    album: "Led Zeppelin IV",
    year: 1971,
    duration: "8:02",
    genre: "Hard Rock / Folk Rock",
    description:
      "Considerada por muchos la mejor canción de rock de todos los tiempos.",
    facts: [
      "Nunca fue lanzada como single en Reino Unido por decisión de la banda",
      "La parte acústica fue escrita por Jimmy Page en una cabaña en Gales",
      "Robert Plant escribió la letra de una sola vez",
      "El solo de guitarra está considerado entre los mejores de la historia",
      "Dura más de 8 minutos pero nunca aburre",
    ],
    liveVersions: [
      "Madison Square Garden 1973 - considerada la versión definitiva",
      "Led Zeppelin DVD 2003 - última actuación juntos",
      "Kennedy Center Honors 2012 - versión de Heart",
    ],
  },

  "bohemian-rhapsody": {
    title: "Bohemian Rhapsody",
    artist: "Queen",
    album: "A Night at the Opera",
    year: 1975,
    duration: "5:55",
    genre: "Progressive Rock / Opera Rock",
    description:
      "La canción que redefinió lo que podía ser una canción de rock.",
    facts: [
      "Freddie Mercury nunca explicó el significado de la letra",
      "Fue la canción más cara de grabar en su época (£40,000)",
      "No tiene coro tradicional, es una ópera rock en miniatura",
      "El video musical es considerado uno de los primeros videos conceptuales",
      "Estuvo 9 semanas consecutivas en #1 en Reino Unido",
    ],
    liveVersions: [
      "Live Aid 1985 - solo la parte final pero icónica",
      "Rock Montreal 1981 - versión completa magistral",
      "Wembley 1986 - última gran actuación de Freddie",
    ],
  },
};

// Funciones helper
export const getSetlistByBand = (bandKey) => {
  return Object.values(setlists).filter(
    (setlist) => setlist.bandKey === bandKey
  );
};

export const getSetlistByVenue = (venue) => {
  return Object.values(setlists).filter((setlist) => setlist.venue === venue);
};

export const getSongsByAlbum = (album) => {
  const songs = [];
  Object.values(setlists).forEach((setlist) => {
    setlist.songs.forEach((song) => {
      if (song.album === album) {
        songs.push(song);
      }
    });
  });
  return songs;
};
