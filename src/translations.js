// Archivo de traducciones para el museo
export const translations = {
  es: {
    // Títulos principales
    museumTitle: "Museo del Rock",

    // Controles de navegación
    controls: {
      title: "🎮 Controles",
      drag: "Arrastrar para vista 360°",
      scroll: "Desplazar para zoom +/-",
      posters: "Hacer clic en posters para info detallada",
    },

    // Nombres de salas
    rooms: {
      metal: "Sala Metal",
      rock: "Sala Rock",
      punk: "Sala Punk",
    },

    // Navegador
    navigator: {
      title: "Leiva'n Roll Hall of Fame",
      mobileTitle: "Elegir sala",
      descriptions: {
        metal: "Heavy Metal, Thrash, Death Metal",
        rock: "Classic Rock, Hard Rock, Progressive",
        punk: "Punk Rock, Hardcore, Alternative",
      },
    },

    // Toolbar del guía
    toolbar: {
      curiosities: "Curiosidades",
      customize: "Caracterizar avatar",
      settings: "Ajustes",
    },

    //Grid de avatares
    avatarGridSelector: {
      searchPlaceholder: "Buscar grupo...",
      genrePlaceholder: "Género",
      decadePlaceholder: "Época",
      allGenres: "Todos",
      allDecades: "Todas",
      selectPrompt: "Selecciona un grupo o avatar para ver su información",
      animationsOn: "Animaciones ON",
      animationsOff: "Animaciones OFF",
      transitionsToggle: "Transiciones",
      ok: "OK",
      cancel: "Cancelar",
    },

    // Modal de poster
    posterModal: {
      concertDetails: "Detalles del Concierto",
      soldOut: "Sold Out",
      setlistHighlights: "Setlist Highlights",
    },

    // Modal de ajustes
    settings: {
      title: "Ajustes del Museo",
      language: "Idioma",
      languageLabel: "Idioma de la interfaz",
      spanish: "Español",
      english: "English",
      audio: "Audio",
      audioLabel: "Efectos de sonido",
      enabled: "Activadas",
      disabled: "Desactivadas",
      // TODO: Implementar estas configuraciones más adelante
      // animations: "Animaciones",
      // animationsLabel: "Velocidad de animaciones",
      // slow: "Lento",
      // normal: "Normal",
      // fast: "Rápido",
      // performance: "Rendimiento",
      // qualityLabel: "Calidad de imágenes",
      // low: "Baja",
      // medium: "Media",
      // high: "Alta",
      help: "Ayuda",
      tooltipsLabel: "Mostrar tooltips",
      reset: "Restaurar valores predeterminados",
      save: "Guardar Cambios",
      cancel: "❌ Cancelar",
    },

    // Avatares
    avatars: {
      // Maese Leiva - Guía del museo
      leiva: {
        name: "Maese Leiva",
        persona: "Guía del museo",
        greeting:
          "¡Hola! Soy Maese Leiva, tu guía del museo y autor de las reseñas. Haz clic en mí para descubrir curiosidades del mundo del rock.",
        fact1:
          "Maese Leiva es el curador y guía experto de este museo virtual del rock.",
        fact2:
          "Ha dedicado años a recopilar memorabilia y curiosidades del mundo del rock.",
        fact3:
          "Su pasión por la música rock comenzó escuchando los clásicos de los 70s y 80s.",
        fact4:
          "Es el autor de todas las reseñas y descripciones de conciertos del museo.",
        fact5:
          "Su conocimiento abarca desde el rock clásico hasta las bandas más modernas.",
        fact6:
          "Siempre está dispuesto a compartir anécdotas fascinantes del rock.",
      },

      // Tete - Avatar personalizable
      tete: {
        name: "Tete",
        persona: "Avatar personalizable",
        greeting:
          "¡Hola! Soy Tete, tu avatar personalizable. ¿Listo para explorar el museo a tu manera?",
        fact1:
          "Tete es el avatar más versátil del museo, se adapta a tu estilo.",
        fact2:
          "Puedes personalizar a Tete según tus gustos musicales favoritos.",
        fact3:
          "Es el compañero perfecto para una experiencia museística única.",
        fact4: "Tete conoce todos los rincones secretos del museo.",
        fact5: "Su personalidad cambia según la música que más te guste.",
        fact6: "Es el avatar ideal para principiantes en el mundo del rock.",
      },

      // AC/DC - Angus Young
      angusacdc: {
        name: "AC/DC",
        persona: "Angus Young",
        greeting:
          "¡G'day mate! Soy Angus Young, ponte el uniforme y prepárate para un 'Highway to Hell' de riffs.",
        fact1:
          "Angus Young es famoso por tocar en uniforme escolar y su enérgico 'duckwalk' en el escenario.",
        fact2: "AC/DC fue fundada en 1973 en Australia por los hermanos Young.",
        fact3:
          "El álbum 'Back in Black' es uno de los más vendidos de la historia, con más de 50 millones de copias.",
        fact4:
          "Su sonido se basa en riffs potentes, ritmos sencillos y letras directas.",
        fact5:
          "El nombre AC/DC hace referencia a la corriente alterna/continua, simbolizando energía pura.",
        fact6:
          "Han superado la pérdida de miembros clave y siguen siendo una de las bandas más influyentes del rock.",
      },

      // Ghost
      ghost: {
        name: "Ghost",
        persona: "Papa Emeritus V",
        greeting:
          "Saludos terrenales, soy Papa Emeritus V. ¿Preparado para un 'Dance Macabre' entre reliquias del rock?",
        fact1:
          "Ghost es una banda sueca formada en 2006, famosa por su teatralidad y misterio.",
        fact2:
          "El líder, Papa Emeritus, cambia de 'encarnación' en cada etapa, ¡ya van cinco!",
        fact3:
          "Sus músicos acompañantes son conocidos como los 'Nameless Ghouls' y siempre llevan máscaras.",
        fact4:
          "La trama de Ghost mezcla sátira religiosa, ocultismo y humor negro en sus letras y shows.",
        fact5:
          "Ganaron el Grammy a Mejor Interpretación de Metal en 2016 por 'Cirice'.",
        fact6:
          "Su estética mezcla el rock clásico, el metal y el pop, con influencias de Blue Öyster Cult y ABBA.",
      },

      // Iron Maiden
      ironmaiden: {
        name: "Iron Maiden",
        persona: "Eddie",
        greeting:
          "¡Up the Irons! Soy Eddie, tu guía en este 'Run to the Hills' de historia y heavy metal.",
        fact1:
          "Eddie es la icónica mascota de Iron Maiden, apareciendo en todas sus portadas y conciertos.",
        fact2:
          "Iron Maiden se formó en 1975 en Londres y es una de las bandas más influyentes del heavy metal.",
        fact3: "Sus letras exploran historia, literatura, cine y temas épicos.",
        fact4:
          "El álbum 'The Number of the Beast' marcó un antes y un después en el género.",
        fact5:
          "Iron Maiden es famosa por sus conciertos con escenografía espectacular y marionetas gigantes de Eddie.",
        fact6:
          "La banda ha mantenido su independencia creativa y una base de fans leal durante décadas.",
      },

      // KISS
      kiss: {
        name: "KISS",
        persona: "Gene Simmons",
        greeting:
          "¡Rock and roll all nite! Soy Gene Simmons, prepárate para el espectáculo más salvaje del rock.",
        fact1:
          "KISS es famosa por su maquillaje teatral y espectáculos pirotécnicos espectaculares.",
        fact2:
          "Gene Simmons escupe fuego y sangre falsa durante las presentaciones en vivo.",
        fact3:
          "Paul Stanley, The Starchild, nació con microtia pero nunca dejó que eso lo detuviera.",
        fact4:
          "Su mercadotecnia es legendaria: desde ataúdes hasta condones con la marca KISS.",
        fact5:
          "Fueron los primeros en lanzar cómics con tinta mezclada con su propia sangre.",
        fact6:
          "Han vendido más de 75 millones de álbumes solo en Estados Unidos.",
      },

      // Pink Floyd
      pinkfloyd: {
        name: "Pink Floyd",
        persona: "David Gilmour",
        greeting:
          "Welcome to the machine. Soy David Gilmour, prepárate para un viaje psicodélico por el 'Dark Side'.",
        fact1:
          "Pink Floyd es pionera del rock progresivo y los efectos visuales en conciertos.",
        fact2:
          "'The Dark Side of the Moon' estuvo 14 años consecutivos en las listas de Billboard.",
        fact3:
          "Sus conciertos son famosos por la tecnología innovadora y efectos láser espectaculares.",
        fact4:
          "Roger Waters escribió la mayoría de las letras conceptuales más profundas de la banda.",
        fact5:
          "David Gilmour es considerado uno de los mejores guitarristas de todos los tiempos.",
        fact6:
          "El álbum 'The Wall' se convirtió en una ópera rock y película aclamada.",
      },

      // Bruce Springsteen
      brucespringsteen: {
        name: "Bruce Springsteen",
        persona: "The Boss",
        greeting:
          "¡Hey there! Soy Bruce Springsteen, 'The Boss'. ¿Listo para un viaje por las calles de América?",
        fact1:
          "Bruce Springsteen es conocido como 'The Boss' y 'The Working Man's Poet'.",
        fact2:
          "Sus conciertos pueden durar más de 4 horas sin descanso, pura energía en estado puro.",
        fact3:
          "'Born to Run' lo catapultó a la fama y se convirtió en un himno generacional.",
        fact4:
          "Ha ganado 20 premios Grammy y un Oscar por 'Streets of Philadelphia'.",
        fact5:
          "Su álbum 'Born in the U.S.A.' fue malinterpretado como himno patriótico siendo una crítica social.",
        fact6:
          "Es famoso por sus letras que retratan la vida de la clase trabajadora americana.",
      },

      // The Warning
      thewarning: {
        name: "The Warning",
        persona: "Daniela, Paulina y Alejandra",
        greeting:
          "¡Hey! Somos The Warning, listas para electrificar el museo. 'Choke' de emoción garantizado.",
        fact1:
          "The Warning es una banda mexicana formada por tres hermanas: Daniela, Paulina y Alejandra.",
        fact2:
          "Saltaron a la fama tras viralizarse su cover de 'Enter Sandman' de Metallica cuando eran niñas.",
        fact3:
          "Han abierto conciertos para bandas como Muse, Foo Fighters y Guns N' Roses.",
        fact4:
          "Su música mezcla hard rock, metal alternativo y letras sobre empoderamiento y emociones intensas.",
        fact5: "El álbum 'ERROR' fue nominado a los Latin Grammy en 2022.",
        fact6:
          "Son conocidas por su energía en vivo y por romper estereotipos en el rock latino.",
      },

      // Aerosmith
      aerosmith: {
        name: "Aerosmith",
        persona: "Steven Tyler",
        greeting:
          "¡Dream on! Soy Steven Tyler, el demonio del grito. ¿Preparado para una 'Sweet Emotion'?",
        fact1:
          "Steven Tyler es conocido como 'The Demon of Screamin' por su increíble rango vocal.",
        fact2:
          "Aerosmith se formó en Boston en 1970 y es considerada 'America's Greatest Rock and Roll Band'.",
        fact3:
          "'Dream On' fue escrita por Steven Tyler cuando tenía solo 17 años.",
        fact4: "Han vendido más de 150 millones de discos en todo el mundo.",
        fact5:
          "Steven Tyler y Joe Perry son conocidos como 'The Toxic Twins' por su legendaria amistad.",
        fact6:
          "Su álbum 'Toys in the Attic' los catapultó al estrellato internacional en 1975.",
      },

      // Metallica
      metallica: {
        name: "Metallica",
        persona: "James Hetfield",
        greeting:
          "¡Yeah! Soy James Hetfield, master of puppets. ¿Preparado para entrar en territorio del sandman?",
        fact1:
          "Metallica se formó en Los Ángeles en 1981 por James Hetfield y Lars Ulrich.",
        fact2:
          "Su álbum 'Master of Puppets' es considerado una obra maestra del thrash metal.",
        fact3:
          "Cliff Burton murió trágicamente en un accidente de autobús en Suecia en 1986.",
        fact4:
          "Fueron la primera banda de metal occidental en tocar en Rusia (1991).",
        fact5:
          "Su álbum negro (The Black Album) los llevó al mainstream en 1991.",
        fact6:
          "James Hetfield sufrió quemaduras graves por pirotecnia durante un concierto en 1992.",
      },

      // Queen
      queen: {
        name: "Queen",
        persona: "Freddie Mercury",
        greeting:
          "¡Darling! Soy Freddie Mercury, el espectáculo está a punto de comenzar. ¿Listo para un 'Bohemian Rhapsody' de emociones?",
        fact1:
          "Queen es una de las bandas más icónicas de la historia del rock, formada en 1970 en Londres.",
        fact2:
          "Su vocalista, Freddie Mercury, es considerado uno de los mejores frontmen de todos los tiempos.",
        fact3:
          "El tema 'Bohemian Rhapsody' es uno de los himnos más reconocibles del rock.",
        fact4:
          "Freddie Mercury tenía 4 incisivos extra que nunca se quitó porque temía afectar su voz.",
        fact5:
          "Queen ha experimentado con diversos estilos musicales, desde el rock hasta la ópera.",
        fact6:
          "Sus conciertos son espectáculos visuales con fuego, efectos especiales y escenografía teatral.",
      },

      // Ozzy Osbourne
      ozzy: {
        name: "Ozzy Osbourne",
        persona: "The Prince of Darkness",
        greeting:
          "¡All aboard! Soy Ozzy Osbourne, el Príncipe de las Tinieblas. ¡Crazy train hacia la locura del rock!",
        fact1:
          "Ozzy mordió la cabeza de un murciélago real durante un concierto pensando que era de goma.",
        fact2:
          "Fue expulsado de Black Sabbath en 1979 por problemas de drogas y alcohol.",
        fact3:
          "Su reality show 'The Osbournes' fue pionero de la televisión de celebridades.",
        fact4:
          "Sobrevivió a un coma de 8 días después de un accidente de ATV en 2003.",
        fact5:
          "Sharon Osbourne, su esposa, es también su mánager desde los años 80.",
        fact6:
          "Fue diagnosticado con Parkinson en 2019 pero continúa haciendo música.",
      },

      // Jinjer
      jinjer: {
        name: "Jinjer",
        persona: "Tatiana Shmayluk",
        greeting:
          "Привіт! Soy Tatiana Shmayluk de Jinjer. Prepárate para el metal progresivo más brutal de Ucrania.",
        fact1:
          "Jinjer es una banda ucraniana que mezcla metal progresivo, groove metal y metalcore.",
        fact2:
          "Tatiana Shmayluk es famosa por su capacidad de cambiar entre growls brutales y voz melódica.",
        fact3:
          "Su video de 'Pisces' se viralizó por la impresionante técnica vocal de Tatiana.",
        fact4:
          "La banda continuó haciendo música incluso durante el conflicto en Ucrania.",
        fact5:
          "Son pioneros del metal moderno con letras profundas sobre filosofía y sociedad.",
        fact6: "Han tocado en festivales como Wacken, Download y Bloodstock.",
      },

      // Oasis
      oasis: {
        name: "Oasis",
        persona: "Liam Gallagher",
        greeting:
          "Right, our kid. Soy Liam Gallagher, y definitivamente maybe esto va a ser biblical. ¿Alright?",
        fact1:
          "Oasis fue la banda más importante del movimiento Britpop de los años 90.",
        fact2:
          "Los hermanos Gallagher, Liam y Noel, tenían peleas legendarias que terminaron con la banda.",
        fact3:
          "'Wonderwall' se convirtió en el himno generacional más reconocible de los 90s.",
        fact4:
          "Su álbum debut 'Definitely Maybe' fue el más vendido en Reino Unido hasta entonces.",
        fact5:
          "Se separaron en 2009 justo antes de un festival porque Noel se hartó de Liam.",
        fact6:
          "Liam continúa con la música mientras que Noel formó Noel Gallagher's High Flying Birds.",
      },

      // Opeth
      opeth: {
        name: "Opeth",
        persona: "Mikael Åkerfeldt",
        greeting:
          "Hej! Soy Mikael Åkerfeldt de Opeth. Prepárate para un viaje progresivo por las profundidades del metal sueco.",
        fact1:
          "Opeth es pionera del death metal progresivo con influencias de rock clásico.",
        fact2:
          "Mikael Åkerfeldt puede cambiar entre growls brutales y voz limpia melódica sin esfuerzo.",
        fact3:
          "Sus álbumes son conceptuales y pueden durar más de 70 minutos con canciones de 10+ minutos.",
        fact4:
          "Han evolucionado del death metal puro hacia un sonido más progresivo y experimental.",
        fact5:
          "Son considerados una de las bandas más técnicas e influyentes del metal moderno.",
        fact6:
          "Sus conciertos son experiencias cinematográficas con cambios dinámicos constantes.",
      },

      // Pain of Salvation
      painofsalvation: {
        name: "Pain of Salvation",
        persona: "Daniel Gildenlöw",
        greeting:
          "Hej! Soy Daniel Gildenlöw de Pain of Salvation. ¿Preparado para explorar el dolor y la salvación a través del prog metal?",
        fact1:
          "Pain of Salvation es una banda progresiva sueca conocida por sus álbumes conceptuales profundos.",
        fact2:
          "Daniel Gildenlöw es compositor, vocalista y el cerebro creativo detrás de la banda.",
        fact3:
          "Sus álbumes exploran temas filosóficos, espirituales y existenciales complejos.",
        fact4:
          "Son pioneros del metal progresivo con influencias de jazz, música clásica y world music.",
        fact5:
          "Daniel casi muere por una enfermedad grave que lo alejó de la música por años.",
        fact6:
          "Sus conciertos son experiencias teatrales con narrativas complejas y emotivas.",
      },

      // Muse
      muse: {
        name: "Muse",
        persona: "Matthew Bellamy",
        greeting:
          "Welcome! Soy Matt Bellamy de Muse. ¿Preparado para una conspiración sónica de proporciones épicas?",
        fact1:
          "Muse combina rock alternativo, progresivo y electrónica con letras sobre conspiracies.",
        fact2:
          "Matthew Bellamy es famoso por sus solos de guitarra y piano virtuosos.",
        fact3:
          "Sus conciertos incluyen escenografías futuristas con torres de LED y efectos láser.",
        fact4:
          "Han ganado dos premios Grammy y vendido más de 30 millones de álbumes.",
        fact5:
          "'Bohemian Rhapsody' de Queen es una gran influencia en su estilo teatral.",
        fact6:
          "Sus álbumes son conceptuales y abordan temas de resistencia política y teorías conspirativas.",
      },

      // Michael Jackson
      michaeljackson: {
        name: "Michael Jackson",
        persona: "The King of Pop",
        greeting:
          "¡Shamone! Soy Michael Jackson, el Rey del Pop. ¿Preparado para un 'Thriller' de música y baile?",
        fact1:
          "Michael Jackson es el artista musical más exitoso de todos los tiempos.",
        fact2:
          "Inventó el 'moonwalk' y revolucionó la industria de los videoclips musicales.",
        fact3:
          "'Thriller' es el álbum más vendido de la historia con más de 66 millones de copias.",
        fact4: "Transformó el pop, R&B y la cultura popular para siempre.",
        fact5:
          "Sus coreografías y actuaciones en vivo son estudiadas hasta el día de hoy.",
        fact6:
          "A pesar de ser pop, su influencia en el rock y otros géneros es innegable.",
      },

      // Gojira
      gojira: {
        name: "Gojira",
        persona: "Joe Duplantier",
        greeting:
          "Salut! Soy Joe Duplantier de Gojira. Prepárate para metal progresivo francés con conciencia ambiental.",
        fact1:
          "Gojira es una banda francesa de metal progresivo con letras sobre ecología y espiritualidad.",
        fact2:
          "Joe Duplantier es vocalista, guitarrista y activista ambiental comprometido.",
        fact3:
          "Su álbum 'From Mars to Sirius' los catapultó al reconocimiento internacional.",
        fact4: "Combinan metal técnico con groove y atmosferas etéreas únicas.",
        fact5:
          "Tocaron en los Juegos Olímpicos de París 2024, llevando el metal a las masas.",
        fact6:
          "Son considerados una de las bandas de metal más importantes de la década actual.",
      },

      // Extreme
      extreme: {
        name: "Extreme",
        persona: "Gary Cherone",
        greeting:
          "¡Hey! Soy Gary Cherone de Extreme. ¿Preparado para un 'More Than Words' de rock funky?",
        fact1:
          "Extreme mezcla funk rock, hard rock y baladas acústicas de manera única.",
        fact2:
          "'More Than Words' fue su mayor éxito comercial, una balada acústica inesperada.",
        fact3:
          "Nuno Bettencourt es considerado uno de los guitarristas más técnicos de los 90s.",
        fact4:
          "Gary Cherone fue vocalista de Van Halen por un breve período tras la salida de David Lee Roth.",
        fact5:
          "Su álbum 'Pornograffitti' combina virtuosismo técnico con humor y funk.",
        fact6:
          "Son pioneros del funk metal junto con bandas como Red Hot Chili Peppers.",
      },

      // Dream Theater
      dreamtheater: {
        name: "Dream Theater",
        persona: "James LaBrie",
        greeting:
          "¡Welcome! Soy James LaBrie de Dream Theater. ¿Preparado para un 'Pull Me Under' progresivo épico?",
        fact1:
          "Dream Theater es la banda de metal progresivo más influyente de los últimos 30 años.",
        fact2:
          "John Petrucci es considerado uno de los guitarristas más técnicos del mundo.",
        fact3:
          "Sus canciones pueden durar más de 20 minutos con cambios de tiempo complejos.",
        fact4:
          "Mike Portnoy fue su baterista por 25 años antes de dejar la banda en 2010.",
        fact5:
          "Han influenciado a toda una generación de bandas de metal progresivo.",
        fact6:
          "Sus álbumes conceptuales exploran temas profundos de psicología y filosofía.",
      },

      // David Bowie
      davidbowie: {
        name: "David Bowie",
        persona: "Ziggy Stardust",
        greeting:
          "¡Ground Control to Major Tom! Soy David Bowie, el Camaleón del Rock. ¿Preparado para un viaje espacial?",
        fact1:
          "David Bowie fue el camaleón del rock, reinventándose constantemente durante 5 décadas.",
        fact2:
          "Ziggy Stardust es su alter ego más famoso, una estrella de rock alienígena andrógina.",
        fact3:
          "Influyó no solo en la música sino en la moda, el arte y la cultura LGBTQ+.",
        fact4:
          "Sus álbumes de Berlín ('Low', 'Heroes', 'Lodger') experimentaron with ambient y electrónica.",
        fact5:
          "Fue actor, pintor, y pionero en el uso de nuevas tecnologías musicales.",
        fact6:
          "Su muerte en 2016 conmocionó al mundo entero, dejando un legado imborrable.",
      },

      // Alice in Chains
      aliceinchains: {
        name: "Alice in Chains",
        persona: "Layne Staley",
        greeting:
          "¡Hey man! Soy Layne Staley de Alice in Chains. ¿Preparado para un 'Man in the Box' grunge?",
        fact1:
          "Alice in Chains fue una de las bandas pioneras del grunge de Seattle junto con Nirvana.",
        fact2:
          "Layne Staley tenía una voz única que combinaba melodía con intensidad oscura.",
        fact3:
          "Sus armonías vocales entre Layne Staley y Jerry Cantrell eran incomparables.",
        fact4:
          "Exploraron temas oscuros como adicción, depresión y alienación social.",
        fact5:
          "Su álbum 'Dirt' es considerado una obra maestra del grunge y metal alternativo.",
        fact6:
          "Layne Staley murió en 2002, pero la banda continuó con William DuVall como vocalista.",
      },

      // Slash
      slash: {
        name: "Slash",
        persona: "Saul Hudson",
        greeting:
          "¡Hey dude! Soy Slash, el guitarrista de los sombreros de copa. ¿Preparado para algunos riffs 'Sweet Child O' Mine'?",
        fact1:
          "Slash es uno de los guitarristas más reconocibles por su sombrero de copa y pelo rizado.",
        fact2:
          "Su solo en 'Sweet Child O' Mine' de Guns N' Roses es uno de los más famosos del rock.",
        fact3:
          "Ha tocado con Guns N' Roses, Velvet Revolver y su banda solista Slash feat. Myles Kennedy.",
        fact4:
          "Su estilo combina blues rock clásico con hard rock y elementos de rock alternativo.",
        fact5:
          "Fue incluido en el puesto #65 de los mejores guitarristas de todos los tiempos por Rolling Stone.",
        fact6:
          "Se reconcilió con Axl Rose en 2016 y Guns N' Roses se reunió para giras masivas.",
      },

      // Bryan Adams
      bryanadams: {
        name: "Bryan Adams",
        persona: "Bryan Adams",
        greeting:
          "¡Hey there! Soy Bryan Adams desde Canadá. ¿Preparado para el 'Summer of '69' más rockeante?",
        fact1:
          "Bryan Adams es uno de los rockeros canadienses más exitosos de todos los tiempos.",
        fact2:
          "'Summer of '69' se convirtió en un himno generacional sobre la nostalgia juvenil.",
        fact3: "Ha vendido más de 100 millones de discos en todo el mundo.",
        fact4:
          "También es fotógrafo profesional y ha retratado a celebridades para revistas importantes.",
        fact5:
          "Su canción '(Everything I Do) I Do It for You' fue #1 por 16 semanas consecutivas.",
        fact6:
          "Es activista por los derechos de los animales y causas ambientales.",
      },

      // John Mayer
      johnmayer: {
        name: "John Mayer",
        persona: "John Mayer",
        greeting:
          "¡Hey! Soy John Mayer, donde el blues meets pop rock. ¿Preparado para algunas 'Gravity' guitarras?",
        fact1:
          "John Mayer combina pop rock, blues y R&B con habilidades guitarrísticas excepcionales.",
        fact2:
          "Ha ganado 7 premios Grammy y es considerado uno de los mejores guitarristas modernos.",
        fact3:
          "Formó el trío de blues John Mayer Trio para explorar su lado más bluesy.",
        fact4:
          "Sus letras son introspectivas y han evolucionado desde pop hasta blues más maduro.",
        fact5:
          "Ha colaborado con artistas desde Taylor Swift hasta B.B. King y Eric Clapton.",
        fact6:
          "También toca con Dead & Company, continuando el legado de Grateful Dead.",
      },

      // Jimi Hendrix
      jimihendrix: {
        name: "Jimi Hendrix",
        persona: "Jimi Hendrix",
        greeting:
          "¡Hey Joe! Soy Jimi Hendrix, ¿preparado para un 'Purple Haze' de guitarra psicodélica?",
        fact1:
          "Jimi Hendrix revolucionó la guitarra eléctrica y es considerado el mejor guitarrista de todos los tiempos.",
        fact2:
          "Su interpretación de 'The Star-Spangled Banner' en Woodstock 1969 es icónica.",
        fact3:
          "Tocaba la guitarra con los dientes, detrás de la cabeza y hasta le prendía fuego.",
        fact4: "Murió a los 27 años, uniéndose al trágico 'Club de los 27'.",
        fact5:
          "Era zurdo pero tocaba guitarras para diestros volteadas, creando su sonido único.",
        fact6: "En solo 4 años de carrera cambió la música rock para siempre.",
      },

      // Prince
      prince: {
        name: "Prince",
        persona: "Prince",
        greeting:
          "¡Dearly beloved! Soy Prince, el Artista Anteriormente Conocido Como. ¿Preparado para 'Purple Rain'?",
        fact1:
          "Prince era un genio musical que tocaba más de 20 instrumentos y escribía todas sus canciones.",
        fact2:
          "Su álbum 'Purple Rain' y la película del mismo nombre lo catapultaron al superstardom.",
        fact3: "Fue pionero en la fusión de rock, pop, funk, R&B y new wave.",
        fact4:
          "Se cambió el nombre por un símbolo impronunciable durante los años 90s.",
        fact5:
          "Sus conciertos duraban horas y eran famosos por sus solos de guitarra improvisados.",
        fact6:
          "Murió en 2016, dejando un legado de más de 40 álbumes y influencia inmensa.",
      },

      // Steven Wilson
      stevenwilson: {
        name: "Steven Wilson",
        persona: "Steven Wilson",
        greeting:
          "¡Hello! Soy Steven Wilson, el maestro del rock progresivo moderno. ¿Preparado para un viaje sónico intelectual?",
        fact1:
          "Steven Wilson es considerado el heredero del rock progresivo de los 70s en el siglo XXI.",
        fact2:
          "Fundó Porcupine Tree, una de las bandas prog más influyentes de los 2000s.",
        fact3:
          "Su carrera solista explora desde ambient hasta metal progresivo con producciones impecables.",
        fact4:
          "Ha remezclado álbumes clásicos de King Crimson, Yes y Jethro Tull en surround sound.",
        fact5:
          "Sus conciertos son experiencias audiovisuales con proyecciones y sonido envolvente.",
        fact6:
          "Es perfeccionista extremo en la producción y considera cada detalle sónico importante.",
      },

      // Steve Vai
      stevevai: {
        name: "Steve Vai",
        persona: "Steve Vai",
        greeting:
          "¡For the Love of God! Soy Steve Vai, el alien de la guitarra. ¿Preparado para pasión y precisión?",
        fact1:
          "Steve Vai es uno de los guitarristas más técnicos y creativos de todos los tiempos.",
        fact2:
          "Tocó con Frank Zappa, David Lee Roth, y Whitesnake antes de su carrera solista.",
        fact3:
          "Su álbum 'Passion and Warfare' redefinió lo que podía hacer una guitarra eléctrica.",
        fact4:
          "Usa guitarras de 7 cuerdas y desarrolló técnicas que parecen imposibles.",
        fact5:
          "Sus composiciones combinan virtuosismo técnico con emotividad profunda.",
        fact6:
          "Es también compositor de bandas sonoras y mentor de nuevos guitarristas.",
      },
    },

    // Curiosidades
    curiosities: [
      "Ozzy Osbourne mordió un murciélago vivo en 1982 creyendo que era de goma.",
      "En 2016, Iron Maiden usó su avión Ed Force One para transportar toneladas de su propia cerveza Trooper.",
      "Keith Richards (Rolling Stones) asegura que se cayó de un cocotero en 2006… y sobrevivió sin problemas.",
      "Dave Grohl (Foo Fighters) terminó un concierto en Suecia en 2015 con la pierna rota, mientras médicos lo atendían en el escenario.",
      "Joey Jordison (Slipknot) tenía una batería que se elevaba y giraba 360º en los conciertos.",
      "KISS fue la primera banda en lanzar cómics con tinta mezclada con su propia sangre.",
    ],

    // Guía del museo
    museumGuide: {
      greeting:
        "¡Hola! Soy Maese Leiva, tu guía del museo y autor de las reseñas. Haz clic en mí para descubrir curiosidades del mundo del rock.",
      clickForMore: "Haz clic para ver más",
      curiosities: {
        ozzy: "Ozzy Osbourne mordió un murciélago vivo en 1982 creyendo que era de goma.",
        ironMaiden:
          "En 2016, Iron Maiden usó su avión Ed Force One para transportar toneladas de su propia cerveza Trooper.",
        keithRichards:
          "Keith Richards (Rolling Stones) asegura que se cayó de un cocotero en 2006… y sobrevivió sin problemas.",
        daveGrohl:
          "Dave Grohl (Foo Fighters) terminó un concierto en Suecia en 2015 con la pierna rota, mientras médicos lo atendían en el escenario.",
        joeyJordison:
          "Joey Jordison (Slipknot) tenía una batería que se elevaba y giraba 360º en los conciertos.",
        kiss: "KISS fue la primera banda en lanzar cómics con tinta mezclada con su propia sangre.",
      },
      avatars: {
        thewarning: {
          greeting:
            "¡Hey! Somos Daniela, Paulina y Alejandra de The Warning, listas para electrificar el museo. 'Choke' de emoción garantizado.",
          fact1:
            "The Warning es una banda mexicana formada por tres hermanas: Daniela, Paulina y Alejandra.",
          fact2:
            "Saltaron a la fama tras viralizarse su cover de 'Enter Sandman' de Metallica cuando eran niñas.",
          fact3:
            "Han abierto conciertos para bandas como Muse, Foo Fighters y Guns N' Roses.",
          fact4:
            "Su música mezcla hard rock, metal alternativo y letras sobre empoderamiento y emociones intensas.",
          fact5: "El álbum 'ERROR' fue nominado a los Latin Grammy en 2022.",
          fact6:
            "Son conocidas por su energía en vivo y por romper estereotipos en el rock latino.",
        },
        ghost: {
          greeting:
            "Saludos terrenales, soy Papa Emeritus V. ¿Preparado para un 'Dance Macabre' entre reliquias del rock?",
          fact1:
            "Ghost es una banda sueca formada en 2006, famosa por su teatralidad y misterio.",
          fact2:
            "El líder, Papa Emeritus, cambia de 'encarnación' en cada etapa, ¡ya van cinco!",
          fact3:
            "Sus músicos acompañantes son conocidos como los 'Nameless Ghouls' y siempre llevan máscaras.",
          fact4:
            "La trama de Ghost mezcla sátira religiosa, ocultismo y humor negro en sus letras y shows.",
          fact5:
            "Ganaron el Grammy a Mejor Interpretación de Metal en 2016 por 'Cirice'.",
          fact6:
            "Su estética mezcla el rock clásico, el metal y el pop, con influencias de Blue Öyster Cult y ABBA.",
        },
        acdc: {
          greeting:
            "¡Bienvenido! Soy Angus Young, ponte el uniforme y prepárate para un 'Highway to Hell' de riffs.",
          fact1:
            "Angus Young es famoso por tocar en uniforme escolar y su enérgico 'duckwalk' en el escenario.",
          fact2:
            "AC/DC fue fundada en 1973 en Australia por los hermanos Young.",
          fact3:
            "El álbum 'Back in Black' es uno de los más vendidos de la historia, con más de 50 millones de copias.",
          fact4:
            "Su sonido se basa en riffs potentes, ritmos sencillos y letras directas.",
          fact5:
            "El nombre AC/DC hace referencia a la corriente alterna/continua, simbolizando energía pura.",
          fact6:
            "Han superado la pérdida de miembros clave y siguen siendo una de las bandas más influyentes del rock.",
        },
        queen: {
          greeting:
            "¡Hola! Soy Freddie Mercury, el espectáculo está a punto de comenzar. ¿Listo para un 'Bohemian Rhapsody' de emociones?",
          fact1:
            "Queen es una de las bandas más icónicas de la historia del rock, formada en 1970 en Londres.",
          fact2:
            "Su vocalista, Freddie Mercury, es considerado uno de los mejores frontmen de todos los tiempos.",
          fact3:
            "El tema 'Bohemian Rhapsody' es uno de los himnos más reconocibles del rock.",
          fact4: "Freddie Mercury, el vocalista, es también poeta y escritor.",
          fact5:
            "Queen ha experimentado con diversos estilos musicales, desde el rock hasta la ópera.",
          fact6:
            "Sus conciertos son espectáculos visuales con fuego, efectos especiales y escenografía teatral.",
        },
        ironmaiden: {
          greeting:
            "¡Up the Irons! Soy Eddie, tu guía en este 'Run to the Hills' de historia y heavy metal.",
          fact1:
            "Eddie es la icónica mascota de Iron Maiden, apareciendo en todas sus portadas y conciertos.",
          fact2:
            "Iron Maiden se formó en 1975 en Londres y es una de las bandas más influyentes del heavy metal.",
          fact3:
            "Sus letras exploran historia, literatura, cine y temas épicos.",
          fact4:
            "El álbum 'The Number of the Beast' marcó un antes y un después en el género.",
          fact5:
            "Iron Maiden es famosa por sus conciertos con escenografía espectacular y marionetas gigantes de Eddie.",
          fact6:
            "La banda ha mantenido su independencia creativa y una base de fans leal durante décadas.",
        },
      },
    },

    // Mensajes comunes
    common: {
      clickForMore: "Haz clic para ver más",
      close: "Cerrar",
      loading: "Cargando...",
      error: "Error",
      success: "Éxito",
    },

    // Tooltips
    tooltips: {
      navigation: {
        metal: "Explora la colección de Heavy Metal, Thrash y Death Metal",
        rock: "Descubre clásicos del Rock, Hard Rock y Progressive",
        punk: "Sumérgete en Punk Rock, Hardcore y Alternative",
      },
      controls: {
        settings: "Abre la configuración del museo. Haz clic para personalizar tu experiencia",
        customize: "Personaliza tu avatar de banda. Haz clic para abrir el selector",
        curiosities: "Descubre datos curiosos sobre las bandas. Haz clic para activar/desactivar",
        curiositiesEnabled: "Descubre datos curiosos sobre las bandas. Haz clic para desactivar",
        curiositiesDisabled: "Las curiosidades están desactivadas. Haz clic para activarlas",
        search: "Busca bandas por nombre o género",
        filters: "Filtra por género o década",
      },
      interactions: {
        poster: "Haz clic para ver información detallada del concierto",
        avatar: "Selecciona este avatar para tu perfil",
        playAudio: "Reproduce audio relacionado con este concierto",
        carousel: "Navega por las imágenes del concierto",
      },
      actions: {
        save: "Guardar cambios realizados",
        cancel: "Cancelar y descartar cambios",
        reset: "Restaurar valores predeterminados",
        apply: "Aplicar configuración seleccionada",
      },
      avatars: {
        selection: "Cambia tu avatar para descubrir curiosidades únicas de cada banda",
        newBand: "¡Nuevo avatar seleccionado! Ahora puedes explorar datos exclusivos de esta banda",
        leiva: "Maestro Leiva te guía por el museo con su sabiduría musical",
        interactive: "Cada avatar tiene curiosidades diferentes. ¡Pruébalos todos!",
      },
      autoTips: {
        avatarChange: "💡 Tip: Cambia tu avatar para descubrir datos únicos de cada banda",
        exploration: "🎸 ¿Sabías que cada sala tiene proyectores con videos temáticos?",
        interaction: "✨ Haz clic en los pósters para ver información detallada de cada concierto",
        navigation: "🎵 Usa las flechas del teclado o el mouse para navegar por las salas",
        settings: "⚙️ Personaliza tu experiencia en el menú de configuración",
        curiosities: "🤘 El botón de curiosidades revela datos fascinantes sobre las bandas",
        hidden: "🔍 Explora cada rincón del museo, hay sorpresas ocultas",
      },
      museum: {
        projector: "Proyector mostrando videos temáticos de la sala actual",
        floor: "Suelo de madera vintage que evoca los clásicos estudios de grabación",
        poster: "Póster de concierto histórico - Haz clic para más información",
        guide: "Tu guía personal del museo, siempre listo para ayudar",
      },
    },
  },

  en: {
    // Main titles
    museumTitle: "Rock Museum",

    // Navigation controls
    controls: {
      title: "🎮 Controls",
      drag: "Drag for 360° view",
      scroll: "Scroll to zoom in/out",
      posters: "Click posters for detailed info",
    },

    // Room names
    rooms: {
      metal: "Metal Room",
      rock: "Rock Room",
      punk: "Punk Room",
    },

    // Navigator
    navigator: {
      title: "Leiva'n Roll Hall of Fame",
      mobileTitle: "Choose room",
      descriptions: {
        metal: "Heavy Metal, Thrash, Death Metal",
        rock: "Classic Rock, Hard Rock, Progressive",
        punk: "Punk Rock, Hardcore, Alternative",
      },
    },

    // Guide toolbar
    toolbar: {
      curiosities: "Curiosities",
      customize: "Customize Avatar",
      settings: "Settings",
    },

    // Avatar grid selector
    avatarGridSelector: {
      searchPlaceholder: "Search band...",
      genrePlaceholder: "Genre",
      decadePlaceholder: "Era",
      allGenres: "All",
      allDecades: "All",
      selectPrompt: "Select a band or avatar to see information",
      animationsOn: "Animations ON",
      animationsOff: "Animations OFF",
      transitionsToggle: "Transitions",
      ok: "OK",
      cancel: "Cancel",
      confirm: "Done!",
    },

    // Poster modal
    posterModal: {
      concertDetails: "Concert Details",
      soldOut: "Sold Out",
      setlistHighlights: "Setlist Highlights",
    },

    // Settings modal
    settings: {
      title: "Museum Settings",
      language: "Language",
      languageLabel: "Interface language",
      spanish: "Español",
      english: "English",
      audio: "Audio",
      audioLabel: "Sound effects",
      enabled: "Enabled",
      disabled: "Disabled",
      // TODO: Implement these settings later
      // animations: "Animations",
      // animationsLabel: "Animation speed",
      // slow: "Slow",
      // normal: "Normal",
      // fast: "Fast",
      // performance: "Performance",
      // qualityLabel: "Image quality",
      // low: "Low",
      // medium: "Medium",
      // high: "High",
      help: "Help",
      tooltipsLabel: "Show tooltips",
      reset: "Reset to defaults",
      save: "Save Changes",
      cancel: "Cancel",
    },

    // Avatars
    avatars: {
      // Maese Leiva - Museum Guide
      leiva: {
        name: "Maese Leiva",
        persona: "Museum Guide",
        greeting:
          "Hello! I'm Maese Leiva, your museum guide and review author. Click on me to discover rock world curiosities.",
        fact1:
          "Maese Leiva is the curator and expert guide of this virtual rock museum.",
        fact2:
          "He has dedicated years to collecting rock memorabilia and curiosities.",
        fact3:
          "His passion for rock music started listening to 70s and 80s classics.",
        fact4:
          "He's the author of all concert reviews and descriptions in the museum.",
        fact5:
          "His knowledge spans from classic rock to the most modern bands.",
        fact6: "Always ready to share fascinating rock anecdotes.",
      },

      // Tete - Customizable Avatar
      tete: {
        name: "Tete",
        persona: "Customizable Avatar",
        greeting:
          "Hello! I'm Tete, your customizable avatar. Ready to explore the museum your way?",
        fact1:
          "Tete is the most versatile avatar in the museum, adapts to your style.",
        fact2:
          "You can customize Tete according to your favorite musical tastes.",
        fact3: "Perfect companion for a unique museum experience.",
        fact4: "Tete knows all the secret corners of the museum.",
        fact5: "His personality changes based on the music you like most.",
        fact6: "Ideal avatar for rock world beginners.",
      },

      // AC/DC - Angus Young
      angusacdc: {
        name: "AC/DC",
        persona: "Angus Young",
        greeting:
          "G'day mate! I'm Angus Young, put on the uniform and get ready for 'Highway to Hell' riffs.",
        fact1:
          "Angus Young is famous for playing in school uniform and his energetic 'duckwalk' on stage.",
        fact2: "AC/DC was founded in 1973 in Australia by the Young brothers.",
        fact3:
          "The album 'Back in Black' is one of the best-selling albums in history, with more than 50 million copies.",
        fact4:
          "Their sound is based on powerful riffs, simple rhythms and direct lyrics.",
        fact5:
          "The name AC/DC refers to alternating/direct current, symbolizing pure energy.",
        fact6:
          "They have overcome the loss of key members and remain one of the most influential rock bands.",
      },

      // Ghost
      ghost: {
        name: "Ghost",
        persona: "Papa Emeritus V",
        greeting:
          "Earthly greetings, I am Papa Emeritus V. Ready for a 'Dance Macabre' among rock relics?",
        fact1:
          "Ghost is a Swedish band formed in 2006, famous for their theatricality and mystery.",
        fact2:
          "The leader, Papa Emeritus, changes 'incarnation' in each stage, there are already five!",
        fact3:
          "Their accompanying musicians are known as 'Nameless Ghouls' and always wear masks.",
        fact4:
          "Ghost's plot mixes religious satire, occultism and black humor in their lyrics and shows.",
        fact5:
          "They won the Grammy for Best Metal Performance in 2016 for 'Cirice'.",
        fact6:
          "Their aesthetic mixes classic rock, metal and pop, with influences from Blue Öyster Cult and ABBA.",
      },

      // Iron Maiden
      ironmaiden: {
        name: "Iron Maiden",
        persona: "Eddie",
        greeting:
          "Up the Irons! I'm Eddie, your guide in this 'Run to the Hills' of history and heavy metal.",
        fact1:
          "Eddie is Iron Maiden's iconic mascot, appearing on all their album covers and concerts.",
        fact2:
          "Iron Maiden was formed in 1975 in London and is one of the most influential heavy metal bands.",
        fact3:
          "Their lyrics explore history, literature, cinema and epic themes.",
        fact4:
          "The album 'The Number of the Beast' marked a before and after in the genre.",
        fact5:
          "Iron Maiden is famous for their spectacular stage shows with giant Eddie puppets.",
        fact6:
          "The band has maintained their creative independence and loyal fan base for decades.",
      },

      // KISS
      kiss: {
        name: "KISS",
        persona: "Gene Simmons",
        greeting:
          "Rock and roll all nite! I'm Gene Simmons, get ready for the wildest rock show ever.",
        fact1:
          "KISS is famous for their theatrical makeup and spectacular pyrotechnic shows.",
        fact2:
          "Gene Simmons spits fire and fake blood during live performances.",
        fact3:
          "Paul Stanley, The Starchild, was born with microtia but never let that stop him.",
        fact4:
          "Their marketing is legendary: from coffins to condoms with the KISS brand.",
        fact5:
          "They were the first to release comics with ink mixed with their own blood.",
        fact6:
          "They have sold over 75 million albums in the United States alone.",
      },

      // Pink Floyd
      pinkfloyd: {
        name: "Pink Floyd",
        persona: "David Gilmour",
        greeting:
          "Welcome to the machine. I'm David Gilmour, get ready for a psychedelic journey through the 'Dark Side'.",
        fact1:
          "Pink Floyd is a pioneer of progressive rock and concert visual effects.",
        fact2:
          "'The Dark Side of the Moon' was on Billboard charts for 14 consecutive years.",
        fact3:
          "Their concerts are famous for innovative technology and spectacular laser effects.",
        fact4:
          "Roger Waters wrote most of the band's deepest conceptual lyrics.",
        fact5:
          "David Gilmour is considered one of the greatest guitarists of all time.",
        fact6: "The album 'The Wall' became a rock opera and acclaimed film.",
      },

      // Bruce Springsteen
      brucespringsteen: {
        name: "Bruce Springsteen",
        persona: "The Boss",
        greeting:
          "Hey there! I'm Bruce Springsteen, 'The Boss'. Ready for a journey through the streets of America?",
        fact1:
          "Bruce Springsteen is known as 'The Boss' and 'The Working Man's Poet'.",
        fact2:
          "His concerts can last over 4 hours without breaks, pure energy in its purest form.",
        fact3:
          "'Born to Run' catapulted him to fame and became a generational anthem.",
        fact4:
          "He has won 20 Grammy Awards and an Oscar for 'Streets of Philadelphia'.",
        fact5:
          "His album 'Born in the U.S.A.' was misinterpreted as a patriotic anthem when it was social criticism.",
        fact6:
          "He's famous for his lyrics that portray American working-class life.",
      },

      // The Warning
      thewarning: {
        name: "The Warning",
        persona: "Daniela, Paulina y Alejandra",
        greeting:
          "Hey! We are The Warning, ready to electrify the museum. 'Choke' of emotion guaranteed.",
        fact1:
          "The Warning is a Mexican band formed by three sisters: Daniela, Paulina and Alejandra.",
        fact2:
          "They became famous after their cover of Metallica's 'Enter Sandman' went viral when they were children.",
        fact3:
          "They have opened concerts for bands like Muse, Foo Fighters and Guns N' Roses.",
        fact4:
          "Their music mixes hard rock, alternative metal and lyrics about empowerment and intense emotions.",
        fact5: "The album 'ERROR' was nominated for Latin Grammy in 2022.",
        fact6:
          "They are known for their live energy and breaking stereotypes in Latin rock.",
      },

      // Aerosmith
      aerosmith: {
        name: "Aerosmith",
        persona: "Steven Tyler",
        greeting:
          "Dream on! I'm Steven Tyler, the screaming demon. Ready for some 'Sweet Emotion'?",
        fact1:
          "Steven Tyler is known as 'The Demon of Screamin' for his incredible vocal range.",
        fact2:
          "Aerosmith formed in Boston in 1970 and is considered 'America's Greatest Rock and Roll Band'.",
        fact3:
          "'Dream On' was written by Steven Tyler when he was only 17 years old.",
        fact4: "They have sold over 150 million records worldwide.",
        fact5:
          "Steven Tyler and Joe Perry are known as 'The Toxic Twins' for their legendary friendship.",
        fact6:
          "Their album 'Toys in the Attic' launched them to international stardom in 1975.",
      },

      // Metallica
      metallica: {
        name: "Metallica",
        persona: "James Hetfield",
        greeting:
          "Yeah! I'm James Hetfield, master of puppets. Ready to enter sandman territory?",
        fact1:
          "Metallica formed in Los Angeles in 1981 by James Hetfield and Lars Ulrich.",
        fact2:
          "Their album 'Master of Puppets' is considered a thrash metal masterpiece.",
        fact3:
          "Cliff Burton died tragically in a bus accident in Sweden in 1986.",
        fact4:
          "They were the first Western metal band to play in Russia (1991).",
        fact5: "Their Black Album took them mainstream in 1991.",
        fact6:
          "James Hetfield suffered severe burns from pyrotechnics during a 1992 concert.",
      },

      // Queen
      queen: {
        name: "Queen",
        persona: "Freddie Mercury",
        greeting:
          "Darling! I'm Freddie Mercury, the show is about to begin. Ready for a 'Bohemian Rhapsody' of emotions?",
        fact1:
          "Queen is one of the most iconic bands in rock history, formed in 1970 in London.",
        fact2:
          "Their vocalist, Freddie Mercury, is considered one of the greatest frontmen of all time.",
        fact3:
          "'Bohemian Rhapsody' is one of the most recognizable anthems in rock.",
        fact4:
          "Freddie Mercury had 4 extra incisors that he never removed because he feared it would affect his voice.",
        fact5:
          "Queen experimented with many musical styles, from rock to opera.",
        fact6:
          "Their concerts are visual spectacles with fire, special effects, and theatrical scenery.",
      },

      // Ozzy Osbourne
      ozzy: {
        name: "Ozzy Osbourne",
        persona: "The Prince of Darkness",
        greeting:
          "All aboard! I'm Ozzy Osbourne, the Prince of Darkness. Crazy train to rock madness!",
        fact1:
          "Ozzy bit the head of a real bat during a concert thinking it was rubber.",
        fact2:
          "He was kicked out of Black Sabbath in 1979 due to drug and alcohol problems.",
        fact3:
          "His reality show 'The Osbournes' pioneered celebrity television.",
        fact4: "He survived an 8-day coma after an ATV accident in 2003.",
        fact5:
          "Sharon Osbourne, his wife, has also been his manager since the 80s.",
        fact6:
          "He was diagnosed with Parkinson's in 2019 but continues making music.",
      },

      // Jinjer
      jinjer: {
        name: "Jinjer",
        persona: "Tatiana Shmayluk",
        greeting:
          "Привіт! I'm Tatiana Shmayluk from Jinjer. Get ready for the most brutal progressive metal from Ukraine.",
        fact1:
          "Jinjer is a Ukrainian band that mixes progressive metal, groove metal and metalcore.",
        fact2:
          "Tatiana Shmayluk is famous for her ability to switch between brutal growls and melodic voice.",
        fact3:
          "Their 'Pisces' video went viral due to Tatiana's impressive vocal technique.",
        fact4:
          "The band continued making music even during the conflict in Ukraine.",
        fact5:
          "They are pioneers of modern metal with deep lyrics about philosophy and society.",
        fact6:
          "They have played at festivals like Wacken, Download and Bloodstock.",
      },

      // Oasis
      oasis: {
        name: "Oasis",
        persona: "Liam Gallagher",
        greeting:
          "Right, our kid. I'm Liam Gallagher, and definitely maybe this is gonna be biblical. Alright?",
        fact1: "Oasis was the most important band of the 90s Britpop movement.",
        fact2:
          "The Gallagher brothers, Liam and Noel, had legendary fights that ended the band.",
        fact3:
          "'Wonderwall' became the most recognizable generational anthem of the 90s.",
        fact4:
          "Their debut album 'Definitely Maybe' was the best-selling in the UK until then.",
        fact5:
          "They broke up in 2009 just before a festival because Noel got fed up with Liam.",
        fact6:
          "Liam continues with music while Noel formed Noel Gallagher's High Flying Birds.",
      },

      // Opeth
      opeth: {
        name: "Opeth",
        persona: "Mikael Åkerfeldt",
        greeting:
          "Hej! I'm Mikael Åkerfeldt from Opeth. Get ready for a progressive journey through the depths of Swedish metal.",
        fact1:
          "Opeth is a pioneer of progressive death metal with classic rock influences.",
        fact2:
          "Mikael Åkerfeldt can switch between brutal growls and clean melodic vocals effortlessly.",
        fact3:
          "Their albums are conceptual and can last over 70 minutes with 10+ minute songs.",
        fact4:
          "They have evolved from pure death metal to a more progressive and experimental sound.",
        fact5:
          "They are considered one of the most technical and influential bands in modern metal.",
        fact6:
          "Their concerts are cinematic experiences with constant dynamic changes.",
      },

      // Pain of Salvation
      painofsalvation: {
        name: "Pain of Salvation",
        persona: "Daniel Gildenlöw",
        greeting:
          "Hej! I'm Daniel Gildenlöw from Pain of Salvation. Ready to explore pain and salvation through prog metal?",
        fact1:
          "Pain of Salvation is a Swedish progressive band known for their deep conceptual albums.",
        fact2:
          "Daniel Gildenlöw is composer, vocalist and the creative brain behind the band.",
        fact3:
          "Their albums explore complex philosophical, spiritual and existential themes.",
        fact4:
          "They are pioneers of progressive metal with influences from jazz, classical and world music.",
        fact5:
          "Daniel nearly died from a serious illness that kept him away from music for years.",
        fact6:
          "Their concerts are theatrical experiences with complex and emotional narratives.",
      },

      // Muse
      muse: {
        name: "Muse",
        persona: "Matthew Bellamy",
        greeting:
          "Welcome! I'm Matt Bellamy from Muse. Ready for a sonic conspiracy of epic proportions?",
        fact1:
          "Muse combines alternative rock, progressive and electronic with lyrics about conspiracies.",
        fact2:
          "Matthew Bellamy is famous for his virtuoso guitar and piano solos.",
        fact3:
          "Their concerts include futuristic stage designs with LED towers and laser effects.",
        fact4:
          "They have won two Grammy Awards and sold over 30 million albums.",
        fact5:
          "Queen's 'Bohemian Rhapsody' is a major influence on their theatrical style.",
        fact6:
          "Their albums are conceptual and address themes of political resistance and conspiracy theories.",
      },

      // Michael Jackson
      michaeljackson: {
        name: "Michael Jackson",
        persona: "The King of Pop",
        greeting:
          "Shamone! I'm Michael Jackson, the King of Pop. Ready for a 'Thriller' of music and dance?",
        fact1:
          "Michael Jackson is the most successful musical artist of all time.",
        fact2:
          "He invented the 'moonwalk' and revolutionized the music video industry.",
        fact3:
          "'Thriller' is the best-selling album in history with over 66 million copies.",
        fact4: "He transformed pop, R&B and popular culture forever.",
        fact5:
          "His choreographies and live performances are studied to this day.",
        fact6:
          "Despite being pop, his influence on rock and other genres is undeniable.",
      },

      // Gojira
      gojira: {
        name: "Gojira",
        persona: "Joe Duplantier",
        greeting:
          "Salut! I'm Joe Duplantier from Gojira. Get ready for French progressive metal with environmental consciousness.",
        fact1:
          "Gojira is a French progressive metal band with lyrics about ecology and spirituality.",
        fact2:
          "Joe Duplantier is vocalist, guitarist and committed environmental activist.",
        fact3:
          "Their album 'From Mars to Sirius' catapulted them to international recognition.",
        fact4:
          "They combine technical metal with groove and unique ethereal atmospheres.",
        fact5:
          "They played at the 2024 Paris Olympics, bringing metal to the masses.",
        fact6:
          "They are considered one of the most important metal bands of the current decade.",
      },

      // Extreme
      extreme: {
        name: "Extreme",
        persona: "Gary Cherone",
        greeting:
          "Hey! I'm Gary Cherone from Extreme. Ready for 'More Than Words' of funky rock?",
        fact1:
          "Extreme mixes funk rock, hard rock and acoustic ballads in a unique way.",
        fact2:
          "'More Than Words' was their biggest commercial hit, an unexpected acoustic ballad.",
        fact3:
          "Nuno Bettencourt is considered one of the most technical guitarists of the 90s.",
        fact4:
          "Gary Cherone was Van Halen's vocalist for a brief period after David Lee Roth's departure.",
        fact5:
          "Their album 'Pornograffitti' combines technical virtuosity with humor and funk.",
        fact6:
          "They are pioneers of funk metal alongside bands like Red Hot Chili Peppers.",
      },

      // Dream Theater
      dreamtheater: {
        name: "Dream Theater",
        persona: "James LaBrie",
        greeting:
          "Welcome! I'm James LaBrie from Dream Theater. Ready for an epic progressive 'Pull Me Under'?",
        fact1:
          "Dream Theater is the most influential progressive metal band of the last 30 years.",
        fact2:
          "John Petrucci is considered one of the most technical guitarists in the world.",
        fact3:
          "Their songs can last over 20 minutes with complex time changes.",
        fact4:
          "Mike Portnoy was their drummer for 25 years before leaving the band in 2010.",
        fact5:
          "They have influenced an entire generation of progressive metal bands.",
        fact6:
          "Their conceptual albums explore deep themes of psychology and philosophy.",
      },

      // David Bowie
      davidbowie: {
        name: "David Bowie",
        persona: "Ziggy Stardust",
        greeting:
          "Ground Control to Major Tom! I'm David Bowie, the Rock Chameleon. Ready for a space journey?",
        fact1:
          "David Bowie was rock's chameleon, constantly reinventing himself for 5 decades.",
        fact2:
          "Ziggy Stardust is his most famous alter ego, an androgynous alien rock star.",
        fact3:
          "He influenced not only music but fashion, art and LGBTQ+ culture.",
        fact4:
          "His Berlin albums ('Low', 'Heroes', 'Lodger') experimented with ambient and electronic.",
        fact5:
          "He was an actor, painter, and pioneer in the use of new musical technologies.",
        fact6:
          "His death in 2016 shocked the entire world, leaving an indelible legacy.",
      },

      // Alice in Chains
      aliceinchains: {
        name: "Alice in Chains",
        persona: "Layne Staley",
        greeting:
          "Hey man! I'm Layne Staley from Alice in Chains. Ready for a grunge 'Man in the Box'?",
        fact1:
          "Alice in Chains was one of the pioneer grunge bands from Seattle alongside Nirvana.",
        fact2:
          "Layne Staley had a unique voice that combined melody with dark intensity.",
        fact3:
          "Their vocal harmonies between Layne Staley and Jerry Cantrell were incomparable.",
        fact4:
          "They explored dark themes like addiction, depression and social alienation.",
        fact5:
          "Their album 'Dirt' is considered a masterpiece of grunge and alternative metal.",
        fact6:
          "Layne Staley died in 2002, but the band continued with William DuVall as vocalist.",
      },

      // Slash
      slash: {
        name: "Slash",
        persona: "Saul Hudson",
        greeting:
          "Hey dude! I'm Slash, the top hat guitarist. Ready for some 'Sweet Child O' Mine' riffs?",
        fact1:
          "Slash is one of the most recognizable guitarists for his top hat and curly hair.",
        fact2:
          "His solo in Guns N' Roses' 'Sweet Child O' Mine' is one of the most famous in rock.",
        fact3:
          "He has played with Guns N' Roses, Velvet Revolver and his solo band Slash feat. Myles Kennedy.",
        fact4:
          "His style combines classic blues rock with hard rock and alternative rock elements.",
        fact5:
          "He was ranked #65 on Rolling Stone's list of greatest guitarists of all time.",
        fact6:
          "He reconciled with Axl Rose in 2016 and Guns N' Roses reunited for massive tours.",
      },

      // Bryan Adams
      bryanadams: {
        name: "Bryan Adams",
        persona: "Bryan Adams",
        greeting:
          "Hey there! I'm Bryan Adams from Canada. Ready for the most rocking 'Summer of '69'?",
        fact1:
          "Bryan Adams is one of the most successful Canadian rockers of all time.",
        fact2:
          "'Summer of '69' became a generational anthem about youthful nostalgia.",
        fact3: "He has sold over 100 million records worldwide.",
        fact4:
          "He's also a professional photographer and has portrayed celebrities for major magazines.",
        fact5:
          "His song '(Everything I Do) I Do It for You' was #1 for 16 consecutive weeks.",
        fact6: "He's an activist for animal rights and environmental causes.",
      },

      // John Mayer
      johnmayer: {
        name: "John Mayer",
        persona: "John Mayer",
        greeting:
          "Hey! I'm John Mayer, where blues meets pop rock. Ready for some 'Gravity' guitars?",
        fact1:
          "John Mayer combines pop rock, blues and R&B with exceptional guitar skills.",
        fact2:
          "He has won 7 Grammy Awards and is considered one of the best modern guitarists.",
        fact3: "He formed the John Mayer Trio to explore his bluesier side.",
        fact4:
          "His lyrics are introspective and have evolved from pop to more mature blues.",
        fact5:
          "He has collaborated with artists from Taylor Swift to B.B. King and Eric Clapton.",
        fact6:
          "He also plays with Dead & Company, continuing the Grateful Dead legacy.",
      },

      // Jimi Hendrix
      jimihendrix: {
        name: "Jimi Hendrix",
        persona: "Jimi Hendrix",
        greeting:
          "Hey Joe! I'm Jimi Hendrix, ready for a psychedelic 'Purple Haze' guitar trip?",
        fact1:
          "Jimi Hendrix revolutionized the electric guitar and is considered the greatest guitarist of all time.",
        fact2:
          "His interpretation of 'The Star-Spangled Banner' at Woodstock 1969 is iconic.",
        fact3:
          "He played guitar with his teeth, behind his head and even set it on fire.",
        fact4: "He died at 27, joining the tragic 'Club of 27'.",
        fact5:
          "He was left-handed but played right-handed guitars flipped, creating his unique sound.",
        fact6: "In just 4 years of career he changed rock music forever.",
      },

      // Prince
      prince: {
        name: "Prince",
        persona: "Prince",
        greeting:
          "Dearly beloved! I'm Prince, the Artist Formerly Known As. Ready for 'Purple Rain'?",
        fact1:
          "Prince was a musical genius who played over 20 instruments and wrote all his songs.",
        fact2:
          "His album 'Purple Rain' and the film of the same name catapulted him to superstardom.",
        fact3: "He was a pioneer in fusing rock, pop, funk, R&B and new wave.",
        fact4:
          "He changed his name to an unpronounceable symbol during the 90s.",
        fact5:
          "His concerts lasted hours and were famous for his improvised guitar solos.",
        fact6:
          "He died in 2016, leaving a legacy of over 40 albums and immense influence.",
      },

      // Steven Wilson
      stevenwilson: {
        name: "Steven Wilson",
        persona: "Steven Wilson",
        greeting:
          "Hello! I'm Steven Wilson, the master of modern progressive rock. Ready for an intellectual sonic journey?",
        fact1:
          "Steven Wilson is considered the heir to 70s progressive rock in the 21st century.",
        fact2:
          "He founded Porcupine Tree, one of the most influential prog bands of the 2000s.",
        fact3:
          "His solo career explores from ambient to progressive metal with impeccable productions.",
        fact4:
          "He has remixed classic albums by King Crimson, Yes and Jethro Tull in surround sound.",
        fact5:
          "His concerts are audiovisual experiences with projections and surround sound.",
        fact6:
          "He's an extreme perfectionist in production and considers every sonic detail important.",
      },

      // Steve Vai
      stevevai: {
        name: "Steve Vai",
        persona: "Steve Vai",
        greeting:
          "For the Love of God! I'm Steve Vai, the guitar alien. Ready for passion and precision?",
        fact1:
          "Steve Vai is one of the most technical and creative guitarists of all time.",
        fact2:
          "He played with Frank Zappa, David Lee Roth, and Whitesnake before his solo career.",
        fact3:
          "His album 'Passion and Warfare' redefined what an electric guitar could do.",
        fact4:
          "He uses 7-string guitars and developed techniques that seem impossible.",
        fact5:
          "His compositions combine technical virtuosity with deep emotivity.",
        fact6: "He's also a soundtrack composer and mentor to new guitarists.",
      },
    },

    // Curiosities
    curiosities: [
      "Ozzy Osbourne bit a live bat in 1982 thinking it was rubber.",
      "In 2016, Iron Maiden used their Ed Force One plane to transport tons of their own Trooper beer.",
      "Keith Richards (Rolling Stones) claims he fell from a coconut tree in 2006… and survived without problems.",
      "Dave Grohl (Foo Fighters) finished a concert in Sweden in 2015 with a broken leg, while doctors treated him on stage.",
      "Joey Jordison (Slipknot) had a drum set that rose and rotated 360° during concerts.",
      "KISS was the first band to release comics with ink mixed with their own blood.",
    ],

    // Museum Guide
    museumGuide: {
      greeting:
        "Hello! I'm Maese Leiva, your museum guide and review author. Click on me to discover rock world curiosities.",
      clickForMore: "Click for more",
      curiosities: {
        ozzy: "Ozzy Osbourne bit a live bat in 1982 thinking it was rubber.",
        ironMaiden:
          "In 2016, Iron Maiden used their Ed Force One plane to transport tons of their own Trooper beer.",
        keithRichards:
          "Keith Richards (Rolling Stones) claims he fell from a coconut tree in 2006… and survived without problems.",
        daveGrohl:
          "Dave Grohl (Foo Fighters) finished a concert in Sweden in 2015 with a broken leg, while doctors treated him on stage.",
        joeyJordison:
          "Joey Jordison (Slipknot) had a drum set that rose and rotated 360° during concerts.",
        kiss: "KISS was the first band to release comics with ink mixed with their own blood.",
      },
      avatars: {
        thewarning: {
          greeting:
            "Hey! I'm Daniela from The Warning, ready to electrify the museum. 'Choke' of emotion guaranteed.",
          fact1:
            "The Warning is a Mexican band formed by three sisters: Daniela, Paulina and Alejandra.",
          fact2:
            "They became famous after their cover of Metallica's 'Enter Sandman' went viral when they were children.",
          fact3:
            "They have opened concerts for bands like Muse, Foo Fighters and Guns N' Roses.",
          fact4:
            "Their music mixes hard rock, alternative metal and lyrics about empowerment and intense emotions.",
          fact5: "The album 'ERROR' was nominated for Latin Grammy in 2022.",
          fact6:
            "They are known for their live energy and breaking stereotypes in Latin rock.",
        },
        ghost: {
          greeting:
            "Earthly greetings, I am Papa Emeritus V. Ready for a 'Dance Macabre' among rock relics?",
          fact1:
            "Ghost is a Swedish band formed in 2006, famous for their theatricality and mystery.",
          fact2:
            "The leader, Papa Emeritus, changes 'incarnation' in each stage, there are already five!",
          fact3:
            "Their accompanying musicians are known as 'Nameless Ghouls' and always wear masks.",
          fact4:
            "Ghost's plot mixes religious satire, occultism and black humor in their lyrics and shows.",
          fact5:
            "They won the Grammy for Best Metal Performance in 2016 for 'Cirice'.",
          fact6:
            "Their aesthetic mixes classic rock, metal and pop, with influences from Blue Öyster Cult and ABBA.",
        },
        acdc: {
          greeting:
            "Welcome! I'm Angus Young, put on the uniform and get ready for 'Highway to Hell' riffs.",
          fact1:
            "Angus Young is famous for playing in school uniform and his energetic 'duckwalk' on stage.",
          fact2:
            "AC/DC was founded in 1973 in Australia by the Young brothers.",
          fact3:
            "The album 'Back in Black' is one of the best-selling albums in history, with more than 50 million copies.",
          fact4:
            "Their sound is based on powerful riffs, simple rhythms and direct lyrics.",
          fact5:
            "The name AC/DC refers to alternating/direct current, symbolizing pure energy.",
          fact6:
            "They have overcome the loss of key members and remain one of the most influential rock bands.",
        },
        queen: {
          greeting:
            "Hello! I'm Freddie Mercury, the show is about to begin. Ready for a 'Bohemian Rhapsody' of emotions?",
          fact1:
            "Queen is one of the most iconic bands in rock history, formed in 1970 in London.",
          fact2:
            "Their vocalist, Freddie Mercury, is considered one of the greatest frontmen of all time.",
          fact3:
            "'Bohemian Rhapsody' is one of the most recognizable anthems in rock.",
          fact4: "Freddie Mercury, the vocalist, was also a poet and writer.",
          fact5:
            "Queen experimented with many musical styles, from rock to opera.",
          fact6:
            "Their concerts are visual spectacles with fire, special effects, and theatrical scenery.",
        },
        ironmaiden: {
          greeting:
            "Up the Irons! I'm Eddie, your guide in this 'Run to the Hills' of history and heavy metal.",
          fact1:
            "Eddie is Iron Maiden's iconic mascot, appearing on all their album covers and concerts.",
          fact2:
            "Iron Maiden was formed in 1975 in London and is one of the most influential heavy metal bands.",
          fact3:
            "Their lyrics explore history, literature, cinema and epic themes.",
          fact4:
            "The album 'The Number of the Beast' marked a before and after in the genre.",
          fact5:
            "Iron Maiden is famous for their spectacular stage shows with giant Eddie puppets.",
          fact6:
            "The band has maintained their creative independence and loyal fan base for decades.",
        },
      },
    },

    // Common messages
    common: {
      clickForMore: "Click for more",
      close: "Close",
      loading: "Loading...",
      error: "Error",
      success: "Success",
    },

    // Tooltips
    tooltips: {
      navigation: {
        metal: "Explore the Heavy Metal, Thrash and Death Metal collection",
        rock: "Discover Rock, Hard Rock and Progressive classics",
        punk: "Dive into Punk Rock, Hardcore and Alternative",
      },
      controls: {
        settings: "Open museum settings. Click to customize your experience",
        customize: "Customize your band avatar. Click to open selector",
        curiosities: "Discover fun facts about the bands. Click to enable/disable",
        curiositiesEnabled: "Discover fun facts about the bands. Click to disable",
        curiositiesDisabled: "Curiosities are disabled. Click to enable them",
        search: "Search bands by name or genre",
        filters: "Filter by genre or decade",
      },
      interactions: {
        poster: "Click to see detailed concert information",
        avatar: "Select this avatar for your profile",
        playAudio: "Play audio related to this concert",
        carousel: "Browse through concert images",
      },
      actions: {
        save: "Save changes",
        cancel: "Cancel and discard changes",
        reset: "Restore default values",
        apply: "Apply selected settings",
      },
      avatars: {
        selection: "Change your avatar to discover unique facts about each band",
        newBand: "New avatar selected! Now you can explore exclusive data about this band",
        leiva: "Master Leiva guides you through the museum with his musical wisdom",
        interactive: "Each avatar has different fun facts. Try them all!",
      },
      autoTips: {
        avatarChange: "💡 Tip: Change your avatar to discover unique facts about each band",
        exploration: "🎸 Did you know each room has projectors with themed videos?",
        interaction: "✨ Click on posters to see detailed information about each concert",
        navigation: "🎵 Use keyboard arrows or mouse to navigate through rooms",
        settings: "⚙️ Customize your experience in the settings menu",
        curiosities: "🤘 The curiosities button reveals fascinating band facts",
        hidden: "🔍 Explore every corner of the museum, there are hidden surprises",
      },
      museum: {
        projector: "Projector showing themed videos from the current room",
        floor: "Vintage wooden floor evoking classic recording studios",
        poster: "Historic concert poster - Click for more information",
        guide: "Your personal museum guide, always ready to help",
      },
    },
  },
};

// Funciones helper para obtener contenido aleatorio
export const getRandomGreeting = (avatarKey, language = "es") => {
  const avatar = translations[language]?.avatars?.[avatarKey];
  if (!avatar?.greeting) {
    return language === "es"
      ? "¡Hola! ¡Bienvenido al Rock Museum!"
      : "Hello! Welcome to the Rock Museum!";
  }
  return avatar.greeting;
};

export const getRandomFact = (avatarKey, language = "es") => {
  const avatar = translations[language]?.avatars?.[avatarKey];
  if (!avatar) {
    return language === "es"
      ? "¡Esta banda tiene una historia fascinante por descubrir!"
      : "This band has a fascinating history to discover!";
  }

  // Recopilar todos los facts disponibles
  const facts = [];
  for (let i = 1; i <= 6; i++) {
    const fact = avatar[`fact${i}`];
    if (fact) facts.push(fact);
  }

  if (facts.length === 0) {
    return language === "es"
      ? "¡Esta banda tiene una historia fascinante por descubrir!"
      : "This band has a fascinating history to discover!";
  }

  // Retornar fact aleatorio
  const randomIndex = Math.floor(Math.random() * facts.length);
  return facts[randomIndex];
};

export const getAllFacts = (avatarKey, language = "es") => {
  const avatar = translations[language]?.avatars?.[avatarKey];
  if (!avatar) return [];

  const facts = [];
  for (let i = 1; i <= 6; i++) {
    const fact = avatar[`fact${i}`];
    if (fact) facts.push(fact);
  }
  return facts;
};

export const getAvatarName = (avatarKey, language = "es") => {
  const avatar = translations[language]?.avatars?.[avatarKey];
  return avatar?.name || avatarKey;
};

export const getAvatarPersona = (avatarKey, language = "es") => {
  const avatar = translations[language]?.avatars?.[avatarKey];
  return avatar?.persona || "";
};

// Función para obtener curiosidad aleatoria del museo
export const getRandomCuriosity = (language = "es") => {
  const curiosities = translations[language]?.curiosities || [];
  if (curiosities.length === 0) {
    return language === "es"
      ? "¡El rock está lleno de historias increíbles!"
      : "Rock is full of incredible stories!";
  }
  const randomIndex = Math.floor(Math.random() * curiosities.length);
  return curiosities[randomIndex];
};
