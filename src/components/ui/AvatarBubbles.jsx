import React from "react";

// Datos de saludos y burbujas para cada avatar
const avatarData = {
  leiva: {
    saludo:
      "¡Hola! Soy Leiva, bienvenido al museo donde el rock y la poesía se encuentran.",
    burbujas: [
      "Leiva es uno de los referentes del rock español contemporáneo.",
      "Fue parte de Pereza antes de su exitosa carrera en solitario.",
      "Su estilo mezcla rock clásico, pop y letras introspectivas.",
      "Ha colaborado con artistas como Joaquín Sabina y Bunbury.",
      "Ganador de varios premios de la música en España.",
      "Su álbum 'Nuclear' fue nominado a los Latin Grammy.",
    ],
  },
  thewarning: {
    saludo:
      "¡Hey! Somos Daniela, Paulina y Alejandra de The Warning, listas para electrificar el museo. ‘Choke’ de emoción garantizado.",
    burbujas: [
      "The Warning es una banda mexicana formada por tres hermanas: Daniela, Paulina y Alejandra.",
      "Saltaron a la fama tras viralizarse su cover de ‘Enter Sandman’ de Metallica cuando eran niñas.",
      "Han abierto conciertos para bandas como Muse, Foo Fighters y Guns N’ Roses.",
      "Su música mezcla hard rock, metal alternativo y letras sobre empoderamiento y emociones intensas.",
      "El álbum ‘ERROR’ fue nominado a los Latin Grammy en 2022.",
      "Son conocidas por su energía en vivo y por romper estereotipos en el rock latino.",
    ],
  },
  ghost: {
    saludo:
      "Saludos terrenales, soy Papa Emeritus V. ¿Preparado para un ‘Dance Macabre’ entre reliquias del rock?",
    burbujas: [
      "Ghost es una banda sueca formada en 2006, famosa por su teatralidad y misterio.",
      "El líder, Papa Emeritus, cambia de ‘encarnación’ en cada etapa, ¡ya van cinco!",
      "Sus músicos acompañantes son conocidos como los ‘Nameless Ghouls’ y siempre llevan máscaras.",
      "La trama de Ghost mezcla sátira religiosa, ocultismo y humor negro en sus letras y shows.",
      "Ganaron el Grammy a Mejor Interpretación de Metal en 2016 por ‘Cirice’.",
      "Su estética mezcla el rock clásico, el metal y el pop, con influencias de Blue Öyster Cult y ABBA.",
    ],
  },
  acdc: {
    saludo:
      "¡Bienvenido! Soy Angus Young, ponte el uniforme y prepárate para un ‘Highway to Hell’ de riffs.",
    burbujas: [
      "Angus Young es famoso por tocar en uniforme escolar y su enérgico ‘duckwalk’ en el escenario.",
      "AC/DC fue fundada en 1973 en Australia por los hermanos Young.",
      "El álbum ‘Back in Black’ es uno de los más vendidos de la historia, con más de 50 millones de copias.",
      "Su sonido se basa en riffs potentes, ritmos sencillos y letras directas.",
      "El nombre AC/DC hace referencia a la corriente alterna/continua, simbolizando energía pura.",
      "Han superado la pérdida de miembros clave y siguen siendo una de las bandas más influyentes del rock.",
    ],
  },
  queen: {
    saludo:
      "¡Hola! Soy Freddie Mercury, y este museo será testigo de una rapsodia inolvidable.",
    burbujas: [
      "Queen revolucionó el rock con su fusión de géneros y teatralidad.",
      "Freddie Mercury es considerado uno de los mejores frontman de la historia.",
      "'Bohemian Rhapsody' es una de las canciones más icónicas del siglo XX.",
      "Brian May, guitarrista, es doctor en astrofísica.",
      "Queen fue pionera en el uso de videoclips musicales.",
      "Su concierto en Live Aid 1985 es legendario.",
    ],
  },
  ironmaiden: {
    saludo:
      "¡Up the Irons! Soy Eddie, tu guía en este ‘Run to the Hills’ de historia y heavy metal.",
    burbujas: [
      "Eddie es la icónica mascota de Iron Maiden, apareciendo en todas sus portadas y conciertos.",
      "Iron Maiden se formó en 1975 en Londres y es una de las bandas más influyentes del heavy metal.",
      "Sus letras exploran historia, literatura, cine y temas épicos.",
      "El álbum ‘The Number of the Beast’ marcó un antes y un después en el género.",
      "Iron Maiden es famosa por sus conciertos con escenografía espectacular y marionetas gigantes de Eddie.",
      "La banda ha mantenido su independencia creativa y una base de fans leal durante décadas.",
    ],
  },
  pinkfloyd: {
    saludo:
      "Bienvenido, soy David Gilmour. Prepárate para un viaje psicodélico por la historia del rock.",
    burbujas: [
      "Pink Floyd es pionero del rock progresivo y psicodélico.",
      "'The Dark Side of the Moon' estuvo más de 900 semanas en las listas de éxitos.",
      "Sus conciertos son famosos por sus efectos visuales y conceptuales.",
      "Roger Waters y David Gilmour son los principales compositores.",
      "'The Wall' es una de las óperas rock más influyentes.",
      "Su cerdo inflable es un ícono del rock.",
    ],
  },
  aerosmith: {
    saludo:
      "¡Hey! Soy Steven Tyler, y este museo está listo para un 'Walk This Way' inolvidable.",
    burbujas: [
      "Aerosmith es conocida como 'la banda de rock and roll más grande de América'.",
      "Steven Tyler es famoso por su voz y su estilo extravagante.",
      "Han vendido más de 150 millones de discos en todo el mundo.",
      "Su colaboración con Run-D.M.C. en 'Walk This Way' unió el rap y el rock.",
      "Fueron incluidos en el Salón de la Fama del Rock and Roll en 2001.",
      "Su logo con alas es uno de los más reconocibles del rock.",
    ],
  },
  ozzy: {
    saludo:
      "¡Soy Ozzy Osbourne! Bienvenido al lado más oscuro y divertido del museo.",
    burbujas: [
      "Ozzy fue vocalista de Black Sabbath antes de su carrera solista.",
      "Es conocido como el 'Príncipe de las Tinieblas'.",
      "Protagonizó un reality show familiar: 'The Osbournes'.",
      "Mordió la cabeza de un murciélago en un concierto (¡sin querer!).",
      "Ha sido influyente en el metal y el hard rock por más de 50 años.",
      "Fue incluido en el Salón de la Fama del Rock and Roll en 2006.",
    ],
  },
  brucespringsteen: {
    saludo:
      "¡Hola! Soy Bruce Springsteen, el 'Boss'. Prepárate para un viaje por la América del rock.",
    burbujas: [
      "Bruce es conocido por sus maratónicos conciertos de más de 3 horas.",
      "'Born to Run' es uno de los himnos del rock estadounidense.",
      "Ha ganado 20 premios Grammy y un Oscar.",
      "Su banda, la E Street Band, es legendaria.",
      "Sus letras retratan la vida de la clase trabajadora.",
      "Fue incluido en el Salón de la Fama del Rock and Roll en 1999.",
    ],
  },
  pantera: {
    saludo:
      "¡Soy Dimebag Darrell! Prepárate para un ataque de riffs y energía texana.",
    burbujas: [
      "Pantera revolucionó el groove metal en los 90.",
      "Dimebag Darrell es considerado uno de los mejores guitarristas del metal.",
      "'Cowboys from Hell' es su álbum más icónico.",
      "Su sonido es agresivo, técnico y potente.",
      "La banda se separó en 2003 tras la muerte de Dimebag.",
      "Su legado sigue vivo en el metal moderno.",
    ],
  },
  blondie: {
    saludo:
      "¡Hola! Soy Debbie Harry, lista para mezclar punk, pop y new wave en este museo.",
    burbujas: [
      "Blondie fue pionera en fusionar punk, disco y rap.",
      "Debbie Harry es un ícono de la moda y la música.",
      "'Heart of Glass' y 'Call Me' son éxitos mundiales.",
      "Fueron incluidos en el Salón de la Fama del Rock and Roll en 2006.",
      "Su estilo influyó en el pop y el indie de los 80 y 90.",
      "Blondie sigue activa y lanzando música nueva.",
    ],
  },
  jinger: {
    saludo:
      "¡Hola! Soy Tatiana Shmayluk de Jinjer, lista para romper esquemas con metal progresivo.",
    burbujas: [
      "Jinjer es una banda ucraniana de metal progresivo y groove.",
      "Tatiana es famosa por su rango vocal extremo.",
      "Su tema 'Pisces' se hizo viral por los cambios de voz.",
      "Han girado por todo el mundo representando el metal moderno.",
      "Su música mezcla metal, jazz y reggae.",
      "Son embajadores del metal del este europeo.",
    ],
  },
  blacksabbath: {
    saludo:
      "¡Bienvenido! Soy Tony Iommi, y aquí empieza la historia del heavy metal.",
    burbujas: [
      "Black Sabbath es considerada la banda fundadora del heavy metal.",
      "Ozzy Osbourne fue su vocalista original.",
      "Tony Iommi perdió la punta de dos dedos y aun así creó riffs legendarios.",
      "'Paranoid' es uno de sus discos más influyentes.",
      "Su música inspiró a generaciones de bandas de metal.",
      "Fueron incluidos en el Salón de la Fama del Rock and Roll en 2006.",
    ],
  },
  radiohead: {
    saludo:
      "Soy Thom Yorke. Prepárate para una experiencia musical única y experimental.",
    burbujas: [
      "Radiohead es pionera en el rock alternativo y experimental.",
      "'OK Computer' es considerado uno de los mejores discos de la historia.",
      "Su música explora temas de tecnología, alienación y sociedad.",
      "Han innovado en la distribución digital de música.",
      "Thom Yorke es conocido por su voz y presencia escénica.",
      "Radiohead ha influido en artistas de todos los géneros.",
    ],
  },
  nirvana: {
    saludo:
      "¡Hey! Soy Kurt Cobain. Bienvenido al grunge y a la revolución de los 90.",
    burbujas: [
      "Nirvana popularizó el grunge a nivel mundial.",
      "'Smells Like Teen Spirit' es un himno generacional.",
      "Kurt Cobain es un ícono de la música alternativa.",
      "El álbum 'Nevermind' cambió la industria musical.",
      "Su MTV Unplugged es uno de los más recordados.",
      "La banda se disolvió tras la muerte de Cobain en 1994.",
    ],
  },
  ratm: {
    saludo:
      "¡Soy Zack de la Rocha! Prepárate para un museo lleno de energía y protesta.",
    burbujas: [
      "Rage Against the Machine fusiona rap, rock y activismo político.",
      "Tom Morello es famoso por sus efectos de guitarra innovadores.",
      "Sus letras abordan temas sociales y políticos.",
      "'Killing in the Name' es su canción más emblemática.",
      "La banda se ha reunido varias veces para giras especiales.",
      "Su música sigue siendo un himno de rebeldía.",
    ],
  },
  slayer: {
    saludo: "¡Soy Tom Araya! Bienvenido al lado más extremo del thrash metal.",
    burbujas: [
      "Slayer es una de las 'Big Four' del thrash metal.",
      "'Reign in Blood' es considerado uno de los discos más rápidos y pesados.",
      "Sus letras exploran temas oscuros y controversiales.",
      "Kerry King es conocido por sus solos agresivos.",
      "La banda se retiró en 2019 tras una gira mundial.",
      "Su logo y tipografía son icónicos en el metal.",
    ],
  },
  archenemy: {
    saludo:
      "¡Soy Alissa White-Gluz! El metal melódico tiene su lugar en este museo.",
    burbujas: [
      "Arch Enemy es pionera del death metal melódico.",
      "Alissa es reconocida por su voz gutural y presencia escénica.",
      "Michael Amott fundó la banda tras dejar Carcass.",
      "'Nemesis' es uno de sus temas más populares.",
      "La banda promueve mensajes de empoderamiento y libertad.",
      "Han girado por todo el mundo con gran éxito.",
    ],
  },
  judaspriest: {
    saludo:
      "¡Soy Rob Halford! El 'Metal God' te da la bienvenida al templo del metal.",
    burbujas: [
      "Judas Priest definió el sonido y la estética del heavy metal.",
      "Rob Halford es famoso por su voz aguda y su look de cuero.",
      "'Painkiller' es uno de sus discos más influyentes.",
      "Fueron pioneros en el uso de motocicletas en el escenario.",
      "La banda sigue activa tras más de 50 años.",
      "Fueron incluidos en el Salón de la Fama del Rock and Roll en 2022.",
    ],
  },
  gretavanfleet: {
    saludo:
      "¡Hola! Soy Josh Kiszka, y traigo el espíritu del rock clásico al presente.",
    burbujas: [
      "Greta Van Fleet es conocida por su sonido similar a Led Zeppelin.",
      "La banda está formada por tres hermanos y un amigo.",
      "Ganaron el Grammy a Mejor Álbum de Rock en 2019.",
      "Su álbum debut fue un éxito internacional.",
      "Son parte del resurgimiento del rock clásico en la actualidad.",
      "Han sido criticados y elogiados por su estilo retro.",
    ],
  },
  motorhead: {
    saludo:
      "¡Soy Lemmy Kilmister! Aquí solo hay velocidad, actitud y mucho rock and roll.",
    burbujas: [
      "Motörhead fusionó punk y metal con actitud única.",
      "Lemmy es un ícono del bajo y la voz rasposa.",
      "'Ace of Spades' es su tema más famoso.",
      "La banda fue pionera del speed metal.",
      "Motörhead nunca cambió su estilo a lo largo de 40 años.",
      "Lemmy es una leyenda del rock fallecida en 2015.",
    ],
  },
  manowar: {
    saludo: "¡Soy Joey DeMaio! El verdadero metal retumba en este museo.",
    burbujas: [
      "Manowar es famosa por su temática épica y vikinga.",
      "Se autoproclaman la banda más ruidosa del mundo.",
      "'Warriors of the World' es su himno más conocido.",
      "Sus conciertos incluyen espadas, fuego y cuero.",
      "Tienen una base de fans muy leal.",
      "Han influido en el power metal y el metal épico.",
    ],
  },
  blueoystercult: {
    saludo:
      "¡Bienvenido! Soy Buck Dharma, y aquí hay más cowbell del que imaginas.",
    burbujas: [
      "Blue Öyster Cult es pionera del hard rock y el metal.",
      "'Don't Fear the Reaper' es su mayor éxito.",
      "Su logo del gancho es un símbolo ocultista.",
      "Han influido en bandas como Metallica y Ghost.",
      "Fueron pioneros en el uso de láseres en conciertos.",
      "Su música mezcla ciencia ficción y misterio.",
    ],
  },
  scorpions: {
    saludo: "¡Soy Klaus Meine! Prepárate para un 'Wind of Change' en el museo.",
    burbujas: [
      "Scorpions es la banda de rock más famosa de Alemania.",
      "'Wind of Change' se convirtió en himno de la caída del Muro de Berlín.",
      "Han vendido más de 100 millones de discos.",
      "Su guitarrista Rudolf Schenker es fundador y líder.",
      "Son conocidos por sus baladas y su hard rock.",
      "Siguen activos tras más de 50 años de carrera.",
    ],
  },
  kiss: {
    saludo: "¡Soy Gene Simmons! El show más grande del rock está aquí.",
    burbujas: [
      "KISS es famosa por su maquillaje y shows pirotécnicos.",
      "Gene Simmons es conocido por su lengua larga y su bajo hacha.",
      "Han vendido más de 100 millones de discos.",
      "Su logo y merchandising son legendarios.",
      "Fueron incluidos en el Salón de la Fama del Rock and Roll en 2014.",
      "Su lema: 'You wanted the best, you got the best!'.",
    ],
  },
  metallica: {
    saludo:
      "¡Soy James Hetfield! Prepárate para un 'Enter Sandman' de historias y riffs.",
    burbujas: [
      "Metallica es la banda de metal más exitosa de la historia.",
      "'Master of Puppets' es considerado un disco fundamental del metal.",
      "Han ganado 9 premios Grammy.",
      "Su bajista Cliff Burton es una leyenda del instrumento.",
      "Fueron pioneros en el thrash metal.",
      "Su logo es uno de los más reconocibles del género.",
    ],
  },
  megadeth: {
    saludo: "¡Soy Dave Mustaine! Aquí la técnica y la velocidad mandan.",
    burbujas: [
      "Megadeth es una de las 'Big Four' del thrash metal.",
      "Dave Mustaine fue miembro original de Metallica.",
      "'Rust in Peace' es su disco más aclamado.",
      "Sus letras abordan política y sociedad.",
      "Han vendido más de 50 millones de discos.",
      "Su mascota Vic Rattlehead aparece en todas las portadas.",
    ],
  },
  gnr: {
    saludo: "¡Soy Axl Rose! Bienvenido a la jungla del rock.",
    burbujas: [
      "Guns N' Roses revolucionó el hard rock en los 80 y 90.",
      "'Sweet Child O' Mine' tiene uno de los riffs más famosos.",
      "Slash es un ícono de la guitarra y el sombrero de copa.",
      "Su álbum 'Appetite for Destruction' es uno de los más vendidos.",
      "La banda es famosa por sus conciertos impredecibles.",
      "Han tenido múltiples reuniones y cambios de formación.",
    ],
  },
  bonjovi: {
    saludo: "¡Hola! Soy Jon Bon Jovi, y este museo está 'Livin' on a Prayer'.",
    burbujas: [
      "Bon Jovi es una de las bandas más exitosas del rock pop.",
      "'Livin' on a Prayer' es un himno de los 80.",
      "Han vendido más de 130 millones de discos.",
      "Su logo del corazón con daga es icónico.",
      "Jon Bon Jovi también es actor y filántropo.",
      "La banda sigue activa tras más de 35 años.",
    ],
  },
  defleppard: {
    saludo: "¡Soy Joe Elliott! El glam y el hard rock tienen su espacio aquí.",
    burbujas: [
      "Def Leppard es pionera del glam metal británico.",
      "'Hysteria' es uno de los discos más vendidos de los 80.",
      "Su baterista Rick Allen toca con un solo brazo.",
      "Han vendido más de 100 millones de discos.",
      "Su sonido mezcla melodía y potencia.",
      "Fueron incluidos en el Salón de la Fama del Rock and Roll en 2019.",
    ],
  },
  poison: {
    saludo:
      "¡Soy Bret Michaels! El glam, el color y la fiesta no faltan en este museo.",
    burbujas: [
      "Poison es símbolo del glam metal de los 80.",
      "'Every Rose Has Its Thorn' es su balada más famosa.",
      "Bret Michaels es conocido por su look y carisma.",
      "La banda es famosa por sus shows llenos de energía.",
      "Han vendido más de 45 millones de discos.",
      "Siguen girando y lanzando música nueva.",
    ],
  },
  motleycrue: {
    saludo: "¡Soy Nikki Sixx! El exceso y el rock and roll son la norma aquí.",
    burbujas: [
      "Mötley Crüe es sinónimo de excesos y fiestas legendarias.",
      "'Dr. Feelgood' es su disco más exitoso.",
      "Tommy Lee es famoso por su batería giratoria.",
      "La banda inspiró la película 'The Dirt'.",
      "Han sobrevivido a múltiples separaciones y reuniones.",
      "Su logo y estética son íconos del glam metal.",
    ],
  },
  alicecooper: {
    saludo: "¡Soy Alice Cooper! El shock rock y el teatro macabro te esperan.",
    burbujas: [
      "Alice Cooper es pionero del shock rock.",
      "Sus conciertos incluyen guillotinas, serpientes y sangre falsa.",
      "'School's Out' es su mayor éxito.",
      "Ha influido en artistas como Marilyn Manson y Rob Zombie.",
      "Fue incluido en el Salón de la Fama del Rock and Roll en 2011.",
      "Su maquillaje y personaje son legendarios.",
    ],
  },
  whitesnake: {
    saludo:
      "¡Soy David Coverdale! El hard rock británico tiene su lugar en este museo.",
    burbujas: [
      "Whitesnake fue fundada por el ex Deep Purple David Coverdale.",
      "'Here I Go Again' es su mayor éxito internacional.",
      "Su sonido mezcla blues, hard rock y glam.",
      "Han vendido más de 30 millones de discos.",
      "Su logo de serpiente es muy reconocible.",
      "Siguen activos y girando por el mundo.",
    ],
  },
  vanhalen: {
    saludo: "¡Soy Eddie Van Halen! Prepárate para solos y saltos imposibles.",
    burbujas: [
      "Van Halen revolucionó la guitarra eléctrica con el 'tapping'.",
      "Eddie Van Halen es considerado uno de los mejores guitarristas.",
      "'Jump' es su mayor éxito comercial.",
      "La banda fue pionera en el hard rock de los 80.",
      "Han vendido más de 80 millones de discos.",
      "Su logo y rayas rojas son icónicos.",
    ],
  },
  extreme: {
    saludo: "¡Soy Gary Cherone! El funk, el rock y la balada se mezclan aquí.",
    burbujas: [
      "Extreme es famosa por su hit 'More Than Words'.",
      "Nuno Bettencourt es un guitarrista virtuoso.",
      "Su estilo mezcla funk, hard rock y balada.",
      "Han girado con Queen y Van Halen.",
      "La banda sigue activa y lanzando discos.",
      "Son referentes del rock de los 90.",
    ],
  },
  davidbowie: {
    saludo:
      "¡Ground Control to Major Tom! Soy David Bowie, el Camaleón del Rock. ¿Preparado para un viaje espacial?",
    burbujas: [
      "David Bowie fue el camaleón del rock, reinventándose constantemente durante 5 décadas.",
      "Ziggy Stardust es su alter ego más famoso, una estrella de rock alienígena andrógina.",
      "Influyó no solo en la música sino en la moda, el arte y la cultura LGBTQ+.",
      "Sus álbumes de Berlín ('Low', 'Heroes', 'Lodger') experimentaron con ambient y electrónica.",
      "Fue actor, pintor, y pionero en el uso de nuevas tecnologías musicales.",
      "Su muerte en 2016 conmocionó al mundo entero, dejando un legado imborrable.",
    ],
  },
};

export default function AvatarBubbles({ avatarKey }) {
  const data = avatarData[avatarKey];
  if (!data) return null;
  return (
    <div className="museum-guide-avatar-bubble-container">
      <div className="museum-guide-bubble">{data.saludo}</div>
      {data.burbujas.map((txt, i) => (
        <div className="museum-guide-bubble" key={i}>
          {txt}
        </div>
      ))}
    </div>
  );
}
