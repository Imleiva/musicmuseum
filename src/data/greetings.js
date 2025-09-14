/**
 * Saludos y frases características de cada banda/avatar
 * • Cada banda tiene múltiples saludos para variedad
 * • Separados por idioma: español (es) e inglés (en)
 * • Personalizado según el estilo y personalidad de cada banda
 */

export const greetings = {
  es: {
    // Maese Leiva - Guía del museo
    leiva: [
      "¡Hola! Soy Maese Leiva, tu guía del museo y autor de las reseñas. Haz clic en mí para descubrir curiosidades del mundo del rock.",
      "¡Bienvenido al Rock Museum! Soy tu anfitrión, Maese Leiva. ¿Listo para un viaje por la historia del rock?",
      "¡Salud, rockero! Maese Leiva aquí. ¿Qué tal si exploramos juntos estas reliquias musicales?",
      "¡Rock and roll! Soy Maese Leiva, el curador de este templo del rock. ¿Empezamos el tour?",
    ],

    // Aerosmith - Steven Tyler
    aerosmith: [
      "¡Hey! Soy Steven Tyler de Aerosmith. ¿Preparado para un 'Sweet Emotion' de rock clásico?",
      "¡Dude looks like a lady! Steven Tyler aquí, listo para llevarte en un 'Dream On' musical.",
      "¡Crazy! Soy el demonio del grito de Aerosmith. ¿Listos para caminar por este lado salvaje?",
      "¡Amazing! Steven Tyler desde Boston, preparado para hacer algo de 'Love in an Elevator' rock!",
    ],

    // Arch Enemy - Alissa White-Gluz
    archenemy: [
      "¡Somos la revolución! Alissa de Arch Enemy, lista para conquistar!",
      "¡Guerra eterna! Arch Enemy trayendo death metal melódico a las masas!",
      "¡El águila vuela sola! Arch Enemy surcando la historia del metal!",
      "¡Sin dioses, sin maestros! Solo la dominancia brutal del metal de Arch Enemy!",
    ],

    // The Warning - Hermanas mexicanas
    thewarning: [
      "¡Hola! Somos The Warning, hermanas mexicanas llevando el rock al futuro. ¿Listos para rockear?",
      "¡Somos The Warning! Tres hermanas, una pasión: el rock. ¡Vamos a hacer ruido!",
      "¡Saludos desde Monterrey! The Warning aquí para electrificar el museo.",
      "¡Warning! Hermanas del rock mexicano listas para conquistar el mundo.",
    ],

    // Ghost - Papa Emeritus
    ghost: [
      "Saludos terrenales, soy Papa Emeritus V. ¿Preparado para un 'Dance Macabre' entre reliquias del rock?",
      "Bendiciones, mortal. Soy Papa Emeritus, tu guía profano por estos artefactos sagrados del rock.",
      "Salve Satán, y bienvenido a este templo del rock. Papa Emeritus a tu servicio.",
      "Saludos desde las profundidades del infierno del rock. Papa Emeritus te da la bienvenida a esta celebración oscura.",
    ],

    // AC/DC - Angus Young
    acdc: [
      "¡Hola, compañero! Soy Angus Young de AC/DC. ¡Vamos a rockear toda la noche y festejar todos los días!",
      "¡Ey! Angus aquí. ¡AC/DC está a punto de volar tu maldita mente con rock thunderstruck!",
      "¡Se acabó la escuela! Es hora de rock and roll de alto voltaje con AC/DC!",
      "¡Highway to Hell, amigo! Angus Young listo para rockear hasta sacarte los calcetines!",
    ],

    // Queen - Freddie Mercury
    queen: [
      "¡Darling! Soy Freddie Mercury. El espectáculo está a punto de comenzar. ¿Listo para un 'Bohemian Rhapsody' de emociones?",
      "¡We are the champions! Freddie aquí, preparado para un 'Radio Ga Ga' de historia del rock.",
      "¡Another one bites the dust! Freddie Mercury listo para llevarte en un viaje real.",
      "¡Don't stop me now! Soy Freddie, teniendo un buen momento en este museo del rock.",
    ],

    // Iron Maiden - Bruce Dickinson/Eddie
    ironmaiden: [
      "¡Up the Irons! Soy Eddie, tu guía en este 'Run to the Hills' de historia y heavy metal.",
      "¡Grita por mí! Bruce Dickinson aquí, listo para llevarte en un vuelo de Ícaro!",
      "¡Fear of the Dark! Eddie desde Iron Maiden, explorando las sombras del metal.",
      "¡Aces High! Preparado para volar con Iron Maiden por los cielos del heavy metal.",
    ],

    // Metallica - James Hetfield
    metallica: [
      "¡Hola! James Hetfield de Metallica. ¿Listo para entrar al territorio del sandman?",
      "¡Qué pasa, metaleros! Es hora de justicia heavy metal con Metallica!",
      "¡Saludos! Master of puppets James Hetfield aquí. ¡Vamos a cabalgar el rayo!",
      "¡Nothing else matters cuando Metallica está en la casa! James aquí, listo para rockear!",
    ],

    // David Bowie - Ziggy Stardust
    davidbowie: [
      "¡Ground Control to Major Tom! Soy David Bowie, el Camaleón del Rock. ¿Preparado para un viaje espacial?",
      "¡Hola! Ziggy Stardust aquí. ¿Preparado para explorar los límites exteriores de la creatividad y el estilo?",
      "¡Saludos desde Starman! David Bowie, listo para llevarte en un viaje por la evolución musical.",
      "¡There's a Starman waiting in the sky! David Bowie aquí, vamos a bailar y cambiar el mundo.",
    ],

    // KISS - Gene Simmons
    kiss: [
      "¡Soy Gene Simmons! El show más grande del rock está aquí. ¿Preparado para una noche de rock and roll?",
      "¡You wanted the best, you got the best! KISS te da la bienvenida al museo más rockeero.",
      "¡Soy el Demon del bajo! Gene Simmons listo para escupir fuego y rock en este museo.",
      "¡Rock and roll all nite! KISS está aquí para hacer de este museo una fiesta épica.",
    ],

    // Pink Floyd - David Gilmour
    pinkfloyd: [
      "Bienvenido, soy David Gilmour. Prepárate para un viaje psicodélico por la historia del rock.",
      "¡Hey! Roger Waters aquí. ¿Preparado para una experiencia visual y sonora única?",
      "¡Saludos! Pink Floyd te lleva en un viaje por 'The Dark Side of the Moon' del museo.",
      "¡Welcome to the machine! David Gilmour listo para una odisea progresiva por el rock.",
    ],

    // Bruce Springsteen - The Boss
    brucespringsteen: [
      "¡Hola! Soy Bruce Springsteen, el 'Boss'. Prepárate para un viaje por la América del rock.",
      "¡Born to run! The Boss está aquí para llevarte por las historias del rock americano.",
      "¡Hey! Bruce Springsteen, listo para un marathon de historias y rock and roll auténtico.",
      "¡Thunder Road! Soy el Boss, preparado para mostrarte el corazón del rock estadounidense.",
    ],

    // Ozzy Osbourne - Prince of Darkness
    ozzy: [
      "¡Soy Ozzy Osbourne! Bienvenido al lado más oscuro y divertido del museo.",
      "¡Sharon! ¿Dónde está Sharon? Ozzy aquí, listo para un viaje por el heavy metal.",
      "¡All aboard! Crazy Train hacia las profundidades del rock más pesado conmigo, Ozzy.",
      "¡Bark at the moon! El Príncipe de las Tinieblas te da la bienvenida al museo.",
    ],

    // Jinjer - Tatiana Shmayluk
    jinjer: [
      "¡Hola! Soy Tatiana Shmayluk de Jinjer, lista para romper esquemas con metal progresivo.",
      "¡Pisces! Tatiana aquí, preparada para mostrarte el poder del metal ucraniano moderno.",
      "¡Macro! Soy Tatiana de Jinjer, lista para cambios vocales extremos y metal progresivo.",
      "¡Home back! Tatiana Shmayluk aquí, representando el futuro del metal desde Ucrania.",
    ],

    // Oasis - Liam Gallagher
    oasis: [
      "¡Mad fer it! Soy Liam Gallagher de Oasis. ¿Preparado para un 'Wonderwall' de rock británico?",
      "¡Definitely maybe! Liam aquí, listo para llevarte por el mejor Britpop de Manchester.",
      "¡Don't look back in anger! Oasis te da la bienvenida al museo más biblically cool.",
      "¡Rock 'n' roll star! Liam Gallagher aquí, ¿preparado para ser supersonic?",
    ],

    // Opeth - Mikael Åkerfeldt
    opeth: [
      "¡Hej! Soy Mikael Åkerfeldt de Opeth. Prepárate para un viaje progresivo por las profundidades del metal sueco.",
      "¡Blackwater Park! Mikael aquí, listo para death metal progresivo de la más alta calidad.",
      "¡Ghost of perdition! Opeth te lleva por un viaje brutal y melódico a la vez.",
      "¡Deliverance! Soy Mikael, preparado para mostrarte la evolución del metal progresivo.",
    ],

    // Pain of Salvation - Daniel Gildenlöw
    painofsalvation: [
      "¡Hej! Soy Daniel Gildenlöw de Pain of Salvation. ¿Preparado para explorar el dolor y la salvación a través del prog metal?",
      "¡The Perfect Element! Daniel aquí, listo para álbumes conceptuales profundos y emotivos.",
      "¡Remedy Lane! Pain of Salvation te lleva por un viaje filosófico y musical único.",
      "¡BE! Soy Daniel, preparado para prog metal que desafía tanto al corazón como a la mente.",
    ],

    // Muse - Matthew Bellamy
    muse: [
      "Welcome! Soy Matt Bellamy de Muse. ¿Preparado para una conspiración sónica de proporciones épicas?",
      "¡Origin of Symmetry! Matt aquí, listo para rock progresivo con teorías conspirativas.",
      "¡Supermassive black hole! Muse te lleva por un viaje espacial y rockero a la vez.",
      "¡Uprising! Matthew Bellamy preparado para revolución musical y solos de guitarra épicos.",
    ],

    // Michael Jackson - King of Pop
    michaeljackson: [
      "¡Shamone! Soy Michael Jackson, el Rey del Pop. ¿Preparado para un 'Thriller' de música y baile?",
      "¡Hee-hee! The King of Pop está aquí para un 'Smooth Criminal' tour del museo.",
      "¡Beat it! Michael Jackson listo para mostrarte por qué soy el artista más grande de todos los tiempos.",
      "¡Billie Jean! MJ aquí, preparado para moonwalk por la historia de la música popular.",
    ],

    // Gojira - Joe Duplantier
    gojira: [
      "Salut! Soy Joe Duplantier de Gojira. Prepárate para metal progresivo francés con conciencia ambiental.",
      "¡Flying whales! Joe aquí, listo para death metal técnico con mensaje ecológico.",
      "¡Stranded! Gojira te lleva por un viaje de metal consciente y brutalmente técnico.",
      "¡The art of dying! Soy Joe, preparado para metal que conecta la brutalidad con la espiritualidad.",
    ],

    // Extreme - Gary Cherone
    extreme: [
      "¡Hey! Soy Gary Cherone de Extreme. ¿Preparado para un 'More Than Words' de rock funky?",
      "¡Get the funk out! Gary aquí, listo para funk rock y virtuosismo guitarrístico.",
      "¡Pornograffitti! Extreme te da la bienvenida al museo con funk metal y baladas acústicas.",
      "¡Hole hearted! Soy Gary, preparado para mostrarte la versatilidad del rock de los 90s.",
    ],

    // Dream Theater - James LaBrie
    dreamtheater: [
      "¡Hello! Soy James LaBrie de Dream Theater. ¿Preparado para prog metal técnico de otro nivel?",
      "¡Images and words! James aquí, listo para metal progresivo que desafía tus límites musicales.",
      "¡Pull me under! Dream Theater te lleva por un viaje de virtuosismo y complejidad.",
      "¡Metropolis! Soy James, preparado para óperas rock progresivas épicas.",
    ],

    // Alice in Chains - Jerry Cantrell
    aliceinchains: [
      "¡Hey man! Soy Jerry Cantrell de Alice in Chains. ¿Preparado para grunge siniestro de Seattle?",
      "¡Dirt! Jerry aquí, listo para armonías oscuras y metal alternativo de los 90s.",
      "¡Man in the box! Alice in Chains te da la bienvenida al lado más pesado del grunge.",
      "¡Them bones! Soy Jerry, preparado para grunge que influenced al metal moderno.",
    ],

    // Slash - Slash
    slash: [
      "¡Hey! Soy Slash, el guitarrista del sombrero de copa. ¿Preparado para solos épicos?",
      "¡Sweet child o' mine! Slash aquí, listo para riffs que definieron una generación.",
      "¡November rain! El mejor guitarrista de rock está aquí para solos cinematográficos.",
      "¡Paradise city! Soy Slash, preparado para llevar el rock and roll a otro nivel.",
    ],

    // Steven Wilson - Steven Wilson
    stevenwilson: [
      "¡Hello! Soy Steven Wilson, el maestro del prog moderno. ¿Preparado para un viaje sónico progresivo?",
      "¡Porcupine Tree! Steven aquí, listo para prog rock que evolved de los 70s al siglo XXI.",
      "¡In absentia! El prog moderno tiene su lugar en este museo conmigo como guía.",
      "¡Fear of a blank planet! Soy Steven, preparado para prog metal atmosférico y conceptual.",
    ],

    // Steve Vai - Steve Vai
    stevevai: [
      "¡Greetings! Soy Steve Vai, el guitarrista alienígena. ¿Preparado para virtuosismo sobrenatural?",
      "¡For the love of God! Steve aquí, listo para técnicas guitarrísticas de otro planeta.",
      "¡Passion and warfare! El alien de la guitarra está preparado para sonar imposible.",
      "¡Tender surrender! Soy Steve, preparado para emocionar y técnica en perfecta armonía.",
    ],

    // Bryan Adams - Canadian Rock Icon
    bryanadams: [
      "¡Hola! Soy Bryan Adams, desde Canadá con amor y rock clásico.",
      "¡Summer of '69! Bryan Adams aquí, listo para llevarte a los mejores días del rock.",
      "¡Everything I do! Soy Bryan Adams, preparado para baladas épicas y rock auténtico.",
      "¡Please forgive me! Bryan Adams presente, desde Vancouver con música del corazón.",
    ],

    // John Mayer - Modern Blues Master
    johnmayer: [
      "¡Hola! Soy John Mayer, fusionando blues clásico con sonidos modernos.",
      "¡Gravity! John Mayer aquí, listo para explorar el alma del blues contemporáneo.",
      "¡Your body is a wonderland! Soy John Mayer, preparado para guitarras emotivas.",
      "¡Slow dancing! John Mayer presente, mezclando técnica y sentimiento puro.",
    ],

    // Jimi Hendrix - Guitar God
    jimihendrix: [
      "¡Hey Joe! Soy Jimi Hendrix, el dios de la guitarra eléctrica.",
      "¡Purple haze! Jimi Hendrix aquí, preparado para revolucionar tu percepción musical.",
      "¡Are you experienced? Soy Jimi Hendrix, listo para expandir los límites del rock.",
      "¡All along the watchtower! Jimi presente, transformando la música para siempre.",
    ],

    // Prince - The Purple One
    prince: [
      "¡Dearly beloved! Soy Prince, el genio púrpura de Minneapolis.",
      "¡Purple rain! Prince aquí, listo para fusionar funk, rock y pura creatividad.",
      "¡1999! Soy Prince, preparado para llevarte a una fiesta musical sin límites.",
      "¡Kiss! Prince presente, el artista que cambió las reglas del juego para siempre.",
    ],

    // Van Halen - Eddie Van Halen & David Lee Roth
    vanhalen: [
      "¡Jump! Soy Eddie Van Halen, el maestro del tapping y los solos épicos.",
      "¡Runnin' with the devil! Van Halen aquí, listo para rock clásico americano.",
      "¡Panama! Eddie Van Halen presente, revolucionando la guitarra eléctrica.",
      "¡Hot for teacher! Van Halen listo para llevar el hard rock al siguiente nivel.",
    ],

    // Alice Cooper - The Godfather of Shock Rock
    alicecooper: [
      "¡Welcome to my nightmare! Soy Alice Cooper, el padrino del shock rock.",
      "¡School's out forever! Alice Cooper aquí, listo para teatro y rock macabro.",
      "¡Poison! Soy Alice Cooper, el maestro del espectáculo teatral rockero.",
      "¡No more Mr. Nice Guy! Alice Cooper presente, pionero del rock gótico.",
    ],

    // Blondie - Debbie Harry
    blondie: [
      "¡Heart of glass! Soy Debbie Harry de Blondie, reina del new wave y punk.",
      "¡Call me! Blondie aquí, fusionando punk, disco y pop con actitud neoyorquina.",
      "¡One way or another! Debbie Harry presente, pionera del rock femenino.",
      "¡Rapture! Blondie listo para llevar el new wave a nuevas dimensiones.",
    ],

    // Blue Oyster Cult - Don't Fear the Reaper
    blueoystercult: [
      "¡Don't fear the reaper! Blue Öyster Cult aquí, maestros del hard rock misterioso.",
      "¡Burnin' for you! BOC presente, listo para rock pesado con letras enigmáticas.",
      "¡Godzilla! Blue Öyster Cult aquí, combinando metal y ciencia ficción.",
      "¡Cities on flame! BOC listo para rock cósmico y riffs demoledores.",
    ],

    // Bon Jovi - Livin' on a Prayer
    bonjovi: [
      "¡Livin' on a prayer! Soy Jon Bon Jovi, listo para rock anthémico y épico.",
      "¡You give love a bad name! Bon Jovi aquí, desde New Jersey con puro rock.",
      "¡It's my life! Jon Bon Jovi presente, maestro de baladas y himnos rockeros.",
      "¡Wanted dead or alive! Bon Jovi listo para rock que llega al corazón.",
    ],

    // Elton John - Rocket Man
    eltonjohn: [
      "¡Rocket man! Soy Elton John, el pianista más extravagante del rock.",
      "¡Your song! Elton John aquí, fusionando pop, rock y teatralidad única.",
      "¡Crocodile rock! Sir Elton presente, maestro de melodías atemporales.",
      "¡Candle in the wind! Elton John listo para emocionar con piano y voz.",
    ],

    // Greta Van Fleet - Modern Led Zeppelin
    gretavanfleet: [
      "¡Highway tune! Somos Greta Van Fleet, llevando el rock clásico al siglo XXI.",
      "¡Safari song! Greta Van Fleet aquí, reviviendo el espíritu del rock de los 70.",
      "¡When the curtain falls! Josh Kiszka presente, con voz que evoca Plant.",
      "¡Black smoke rising! Greta Van Fleet listo para rock auténtico y poderoso.",
    ],

    // Jeff Scott Soto - Yngwie's Voice
    jeffscottsoto: [
      "¡Hola! Soy Jeff Scott Soto, la voz detrás de Yngwie Malmsteen y Talisman.",
      "¡Rising force! Jeff Scott Soto aquí, maestro del rock melódico y power metal.",
      "¡Far beyond the sun! JSS presente, fusionando técnica y melodía perfectas.",
      "¡Black star! Jeff Scott Soto listo para voz potente y rock neoclásico.",
    ],

    // Judas Priest - Metal Gods
    judaspriest: [
      "¡Breaking the law! Soy Rob Halford de Judas Priest, el Metal God.",
      "¡Painkiller! Judas Priest aquí, definiendo el sonido del heavy metal.",
      "¡Living after midnight! Rob Halford presente, pionero del metal extremo.",
      "¡You've got another thing comin'! Judas Priest listo para metal puro.",
    ],

    // Manowar - Kings of Metal
    manowar: [
      "¡Hail and kill! Somos Manowar, los reyes del metal más épico y poderoso.",
      "¡Warriors of the world! Manowar aquí, defendiendo el metal verdadero.",
      "¡Battle hymns! Eric Adams presente, con la voz más potente del metal.",
      "¡Kings of metal! Manowar listo para guerra musical y poder absoluto.",
    ],

    // Megadeth - Dave Mustaine
    megadeth: [
      "¡Peace sells! Soy Dave Mustaine de Megadeth, maestro del thrash metal técnico.",
      "¡Symphony of destruction! Megadeth aquí, combinando velocidad y precisión.",
      "¡Holy wars! Dave Mustaine presente, pionero del metal progresivo y agresivo.",
      "¡Hangar 18! Megadeth listo para thrash metal de nivel sobrehumano.",
    ],

    // Motley Crue - Wild Side
    motleycrue: [
      "¡Girls, girls, girls! Somos Mötley Crüe, los reyes del glam metal salvaje.",
      "¡Kickstart my heart! Mötley Crüe aquí, viviendo la vida loca del rock.",
      "¡Dr. Feelgood! Vince Neil presente, con actitud rebelde y rock sin límites.",
      "¡Wild side! Mötley Crüe listo para fiesta, drogas y rock 'n' roll.",
    ],

    // Motorhead - Lemmy Kilmister
    motorhead: [
      "¡Ace of spades! Soy Lemmy de Motörhead, el más duro del rock 'n' roll.",
      "¡Overkill! Motörhead aquí, más rápido, más fuerte, más ruidoso que nadie.",
      "¡Killed by death! Lemmy presente, viviendo al límite del rock extremo.",
      "¡Born to raise hell! Motörhead listo para rock sucio y sin compromiso.",
    ],

    // Nirvana - Kurt Cobain
    nirvana: [
      "¡Smells like teen spirit! Soy Kurt Cobain de Nirvana, voz del grunge.",
      "¡Come as you are! Nirvana aquí, definiendo la música de una generación.",
      "¡Lithium! Kurt Cobain presente, llevando el punk al mainstream.",
      "¡In bloom! Nirvana listo para grunge auténtico desde Seattle.",
    ],

    // Pantera - Phil Anselmo & Dimebag Darrell
    pantera: [
      "¡Walk! Soy Phil Anselmo de Pantera, llevando el metal al extremo más pesado.",
      "¡Cowboys from hell! Pantera aquí, revolucionando el heavy metal con groove.",
      "¡Cemetery gates! Dimebag Darrell presente, maestro de riffs demoledores.",
      "¡Fucking hostile! Pantera listo para metal agresivo y sin concesiones.",
    ],

    // Poison - Bret Michaels
    poison: [
      "¡Every rose has its thorn! Soy Bret Michaels de Poison, rey del glam metal.",
      "¡Talk dirty to me! Poison aquí, desde Sunset Strip con rock y glamour.",
      "¡Nothin' but a good time! Bret Michaels presente, fiesta y rock sin parar.",
      "¡Unskinny bop! Poison listo para glam metal auténtico de los 80.",
    ],

    // Radiohead - Thom Yorke
    radiohead: [
      "¡Creep! Soy Thom Yorke de Radiohead, explorando los límites del rock alternativo.",
      "¡OK Computer! Radiohead aquí, fusionando rock con experimentación electrónica.",
      "¡Paranoid android! Thom Yorke presente, redefiniendo la música moderna.",
      "¡Karma police! Radiohead listo para rock cerebral y emotivo.",
    ],

    // Rage Against The Machine - Zack de la Rocha
    ratm: [
      "¡Killing in the name! Soy Zack de la Rocha, fusionando rap, metal y revolución.",
      "¡Bulls on parade! Rage Against The Machine aquí, música como protesta social.",
      "¡Wake up! RATM presente, despertando conciencias con metal político.",
      "¡Guerrilla radio! Rage listo para música rebelde y cambio social.",
    ],

    // Scorpions - Klaus Meine
    scorpions: [
      "¡Rock you like a hurricane! Soy Klaus Meine de Scorpions, desde Alemania con poder.",
      "¡Wind of change! Scorpions aquí, banda que derribó el muro de Berlín con música.",
      "¡Still loving you! Klaus Meine presente, maestro de baladas épicas.",
      "¡Big city nights! Scorpions listo para hard rock alemán y mundial.",
    ],

    // The Baboon Show - Cecilia Boström
    thebaboonshow: [
      "¡Hola! Somos The Baboon Show, llevando el punk rock sueco al mundo.",
      "¡Punk rock from Sweden! The Baboon Show aquí, energía pura y rebelde.",
      "¡Stockholm punk! Cecilia presente, actitud punk sin concesiones.",
      "¡Swedish rebellion! The Baboon Show listo para punk rock auténtico.",
    ],

    // Black Sabbath - Ozzy Osbourne & Tony Iommi
    blacksabbath: [
      "¡Iron man! Somos Black Sabbath, los padres fundadores del heavy metal.",
      "¡Paranoid! Black Sabbath aquí, inventando el sonido más pesado del rock.",
      "¡War pigs! Ozzy y Tony Iommi presentes, creadores del metal original.",
      "¡Sweet leaf! Black Sabbath listo para el metal más oscuro y pesado.",
    ],

    // The Beatles - Fab Four
    beatles: [
      "¡Hey Jude! Somos The Beatles, la banda que cambió la música para siempre.",
      "¡Come together! The Beatles aquí, desde Liverpool conquistando el mundo.",
      "¡Let it be! Los Fab Four presentes, revolución musical y cultural.",
      "¡Yesterday! The Beatles listos para melodías que trascienden generaciones.",
    ],

    // The Cure - Robert Smith
    thecure: [
      "¡Just like heaven! Soy Robert Smith de The Cure, maestro del post-punk gótico.",
      "¡Boys don't cry! The Cure aquí, fusionando melancolía con melodías perfectas.",
      "¡Friday I'm in love! Robert Smith presente, poeta del rock alternativo.",
      "¡Close to me! The Cure listo para emociones profundas y sonidos únicos.",
    ],

    // The Rolling Stones - Mick Jagger
    rollingstones: [
      "¡Start me up! Soy Mick Jagger de The Rolling Stones, rock'n'roll sin límites.",
      "¡Satisfaction! The Rolling Stones aquí, los reyes del rock rebelde.",
      "¡Paint it black! Mick Jagger presente, actitud y rock desde 1962.",
      "¡Gimme shelter! The Rolling Stones listos para rock eterno y salvaje.",
    ],

    // The Verve - Richard Ashcroft
    theverve: [
      "¡Bitter sweet symphony! Soy Richard Ashcroft de The Verve, rock británico épico.",
      "¡Lucky man! The Verve aquí, desde Inglaterra con rock alternativo profundo.",
      "¡The drugs don't work! Richard Ashcroft presente, introspección musical.",
      "¡Urban hymns! The Verve listo para rock atmosférico y emocional.",
    ],

    // Whitesnake - David Coverdale
    whitesnake: [
      "¡Here I go again! Soy David Coverdale de Whitesnake, hard rock con blues.",
      "¡Is this love! Whitesnake aquí, power ballads y riffs poderosos.",
      "¡Still of the night! David Coverdale presente, voz potente del hard rock.",
      "¡Fool for your loving! Whitesnake listo para rock melódico y pasional.",
    ],
  },

  en: {
    // Maese Leiva - Museum guide
    leiva: [
      "Hello! I'm Maese Leiva, your museum guide and review author. Click on me to discover rock world curiosities.",
      "Welcome to the Rock Museum! I'm your host, Maese Leiva. Ready for a journey through rock history?",
      "Greetings, rocker! Maese Leiva here. How about we explore these musical relics together?",
      "Rock and roll! I'm Maese Leiva, the curator of this rock temple. Shall we start the tour?",
    ],

    // Aerosmith - Steven Tyler
    aerosmith: [
      "Hey! I'm Steven Tyler from Aerosmith. Ready for some 'Sweet Emotion' of classic rock?",
      "Dude looks like a lady! Steven Tyler here, ready to take you on a musical 'Dream On'.",
      "Crazy! I'm the screaming demon from Aerosmith. Ready to walk on the wild side?",
      "Amazing! Steven Tyler from Boston, prepared to make some 'Love in an Elevator' rock!",
    ],

    // Arch Enemy - Alissa White-Gluz
    archenemy: [
      "We are the revolution! Alissa from Arch Enemy, ready to conquer!",
      "War eternal! Arch Enemy bringing melodic death metal to the masses!",
      "Eagle flies alone! Arch Enemy soaring through metal history!",
      "No gods, no masters! Only Arch Enemy's brutal metal dominance!",
    ],

    // The Warning - Mexican sisters
    thewarning: [
      "Hey! We are The Warning, Mexican sisters taking rock to the future. Ready to rock?",
      "We are The Warning! Three sisters, one passion: rock. Let's make some noise!",
      "Greetings from Monterrey! The Warning here to electrify the museum.",
      "Warning! Mexican rock sisters ready to conquer the world.",
    ],

    // Ghost - Papa Emeritus
    ghost: [
      "Earthly greetings, I am Papa Emeritus V. Ready for a 'Dance Macabre' among rock relics?",
      "Blessings, mortal. I am Papa Emeritus, your unholy guide through these sacred rock artifacts.",
      "Hail Satan, and welcome to this temple of rock. Papa Emeritus at your service.",
      "Greetings from the depths of rock hell. Papa Emeritus welcomes you to this dark celebration.",
    ],

    // AC/DC - Angus Young
    acdc: [
      "G'day mate! I'm Angus Young from AC/DC. Let's rock and roll all night and party every day!",
      "Oi! Angus here. AC/DC's about to blow your bloody mind with some thunderstruck rock!",
      "School's out! Time for some high voltage rock and roll with AC/DC!",
      "Highway to Hell, mate! Angus Young ready to rock your socks off!",
    ],

    // Queen - Freddie Mercury
    queen: [
      "Darling! I'm Freddie Mercury. The show is about to begin. Ready for a 'Bohemian Rhapsody' of emotions?",
      "We are the champions! Freddie here, prepared for a 'Radio Ga Ga' of rock history.",
      "Another one bites the dust! Freddie Mercury ready to take you on a royal journey.",
      "Don't stop me now! I'm Freddie, having a good time in this rock museum.",
    ],

    // Iron Maiden - Bruce Dickinson/Eddie
    ironmaiden: [
      "Up the Irons! I'm Eddie, your guide in this 'Run to the Hills' of history and heavy metal.",
      "Scream for me! Bruce Dickinson here, ready to take you on a flight of Icarus!",
      "Fear of the Dark! Eddie from Iron Maiden, exploring the shadows of metal.",
      "Aces High! Ready to fly with Iron Maiden through the skies of heavy metal.",
    ],

    // Metallica - James Hetfield
    metallica: [
      "Hey there! James Hetfield from Metallica. Ready to enter sandman territory?",
      "What's up, metalheads! Time for some heavy metal justice with Metallica!",
      "Greetings! Master of puppets James Hetfield here. Let's ride the lightning!",
      "Nothing else matters when Metallica's in the house! James here, ready to rock!",
    ],

    // David Bowie - Ziggy Stardust
    davidbowie: [
      "Ground Control to Major Tom! I'm David Bowie, the Chameleon of Rock. Ready for a space journey?",
      "Hello! Ziggy Stardust here. Ready to explore the outer limits of creativity and style?",
      "Greetings from Starman! David Bowie, ready to take you on a journey through musical evolution.",
      "There's a Starman waiting in the sky! David Bowie here, let's dance and change the world.",
    ],

    // KISS - Rock and Roll All Nite
    kiss: [
      "Rock and roll all nite! KISS here, ready to party every day!",
      "I wanna rock and roll all nite! KISS bringing the ultimate rock show!",
      "Detroit rock city! KISS ready to make you rock and roll all over!",
      "Love gun! KISS here with makeup, fire, and pure rock energy!",
    ],

    // Pink Floyd - Progressive Masters
    pinkfloyd: [
      "Welcome to the machine! Pink Floyd here, ready for a psychedelic journey.",
      "We don't need no education! Pink Floyd bringing progressive rock wisdom.",
      "Shine on you crazy diamond! Pink Floyd illuminating the dark side of music.",
      "Comfortably numb! Pink Floyd ready to take you on a sonic adventure.",
    ],

    // Bruce Springsteen - The Boss
    brucespringsteen: [
      "Born to run! I'm Bruce Springsteen, The Boss, ready for American rock stories.",
      "Born in the USA! Bruce Springsteen here with heartland rock anthems.",
      "Thunder road! The Boss is ready to take you on a journey through America.",
      "Dancing in the dark! Bruce Springsteen bringing working-class rock heroes.",
    ],

    // Ozzy Osbourne - Prince of Darkness
    ozzy: [
      "I'm Ozzy Osbourne! Welcome to the darker and funnier side of the museum.",
      "Sharon! Where's Sharon? Ozzy here, ready for a heavy metal journey.",
      "All aboard! Crazy Train to the depths of the heaviest rock with me, Ozzy.",
      "Bark at the moon! The Prince of Darkness welcomes you to the museum.",
    ],

    // Jinjer - Tatiana Shmayluk
    jinjer: [
      "Hello! I'm Tatiana Shmayluk from Jinjer, ready to break schemes with progressive metal.",
      "Pisces! Tatiana here, prepared to show you the power of modern Ukrainian metal.",
      "Macro! I'm Tatiana from Jinjer, ready for extreme vocal changes and progressive metal.",
      "Home back! Tatiana Shmayluk here, representing the future of metal from Ukraine.",
    ],

    // Oasis - Liam Gallagher
    oasis: [
      "Wonderwall! Liam Gallagher here, ready to take you back to Britpop glory days.",
      "Don't look back in anger! Oasis bringing Manchester rock attitude.",
      "Champagne supernova! Liam ready to show you what real rock and roll is about.",
      "Live forever! Oasis here with the anthems that defined a generation.",
    ],

    // Opeth - Mikael Åkerfeldt
    opeth: [
      "Ghost reveries! Mikael from Opeth, ready for progressive death metal mastery.",
      "Blackwater park! Opeth bringing Swedish progressive metal evolution.",
      "Deliverance! Mikael Åkerfeldt here with complex compositions and brutal beauty.",
      "Heritage! Opeth ready to take you through the darkest musical landscapes.",
    ],

    // Pain of Salvation - Daniel Gildenlöw
    painofsalvation: [
      "The perfect element! Daniel from Pain of Salvation, ready for conceptual metal journeys.",
      "Remedy lane! Pain of Salvation bringing Swedish progressive metal storytelling.",
      "Be! Daniel Gildenlöw here with philosophical metal compositions.",
      "Road salt! Pain of Salvation ready to explore the human condition through music.",
    ],

    // Muse - Matthew Bellamy
    muse: [
      "Uprising! Matt Bellamy from Muse, ready for alternative rock revolution.",
      "Supermassive black hole! Muse bringing space rock and political anthems.",
      "Knights of Cydonia! Matthew here with epic progressive rock compositions.",
      "Starlight! Muse ready to take you on an interstellar musical journey.",
    ],

    // Michael Jackson - King of Pop
    michaeljackson: [
      "Just beat it! I'm Michael Jackson, the King of Pop, ready to moonwalk through music history.",
      "Thriller! Michael Jackson here, bringing the ultimate pop and rock fusion.",
      "Smooth criminal! The King of Pop ready to show you how music transcends genres.",
      "Don't stop 'til you get enough! Michael Jackson with pop perfection and rock energy.",
    ],

    // Gojira - Joe Duplantier
    gojira: [
      "Flying whales! Joe from Gojira, ready for environmental metal consciousness.",
      "Stranded! Gojira bringing French progressive death metal mastery.",
      "The heaviest matter of the universe! Joe Duplantier here with cosmic metal.",
      "Silvera! Gojira ready to explore the depths of technical death metal.",
    ],

    // Extreme - Gary Cherone & Nuno Bettencourt
    extreme: [
      "More than words! Gary and Nuno from Extreme, ready for funk metal adventures.",
      "Hole hearted! Extreme bringing the perfect blend of metal and melody.",
      "Play with me! Nuno's guitar wizardry and Gary's vocals ready to amaze.",
      "Get the funk out! Extreme here with the most innovative rock compositions.",
    ],

    // Dream Theater - James LaBrie & John Petrucci
    dreamtheater: [
      "Pull me under! James and John from Dream Theater, ready for progressive metal epics.",
      "Metropolis! Dream Theater bringing the ultimate in technical progressive rock.",
      "Train of thought! The masters of progressive metal ready to blow your mind.",
      "Images and words! Dream Theater here with the most complex rock compositions.",
    ],

    // Alice in Chains - Layne Staley & Jerry Cantrell
    aliceinchains: [
      "Man in the box! Alice in Chains here, ready for grunge metal darkness.",
      "Them bones! The masters of dark harmonies and heavy grunge ready to haunt.",
      "Rooster! Alice in Chains bringing the heaviest side of Seattle grunge.",
      "Would? The godfathers of grunge metal ready to show you real darkness.",
    ],

    // Slash - Guitar Hero
    slash: [
      "Sweet child o' mine! I'm Slash, ready to melt faces with epic guitar solos.",
      "November rain! Slash here with the most iconic guitar work in rock history.",
      "Paradise city! The top hat and guitar god ready to take you to guitar paradise.",
      "Welcome to the jungle! Slash bringing the wildest guitar adventures.",
    ],

    // Steven Wilson - Progressive Mastermind
    stevenwilson: [
      "The raven! Steven Wilson here, ready for progressive rock sophistication.",
      "Hand cannot erase! The mastermind of modern progressive music ready to inspire.",
      "Drive home! Steven Wilson bringing emotional depth and musical complexity.",
      "Insurgentes! The king of atmospheric progressive rock ready to transport you.",
    ],

    // Steve Vai - Guitar Virtuoso
    stevevai: [
      "Greetings! I'm Steve Vai, the alien guitarist. Ready for supernatural virtuosity?",
      "For the love of God! Steve here, ready for otherworldly guitar techniques.",
      "Passion and warfare! The guitar alien prepared to sound impossible.",
      "Tender surrender! I'm Steve, ready for emotion and technique in perfect harmony.",
    ],

    // Bryan Adams - Canadian Rock Icon
    bryanadams: [
      "Hello! I'm Bryan Adams, from Canada with love and classic rock.",
      "Summer of '69! Bryan Adams here, ready to take you to rock's golden days.",
      "Everything I do! I'm Bryan Adams, prepared for epic ballads and authentic rock.",
      "Please forgive me! Bryan Adams from Vancouver with music from the heart.",
    ],

    // John Mayer - Modern Blues Master
    johnmayer: [
      "Hello! I'm John Mayer, fusing classic blues with modern sounds.",
      "Gravity! John Mayer here, ready to explore the soul of contemporary blues.",
      "Your body is a wonderland! I'm John Mayer, prepared for emotional guitars.",
      "Slow dancing! John Mayer here, mixing technique and pure feeling.",
    ],

    // Jimi Hendrix - Guitar God
    jimihendrix: [
      "Hey Joe! I'm Jimi Hendrix, the electric guitar god.",
      "Purple haze! Jimi Hendrix here, ready to revolutionize your musical perception.",
      "Are you experienced? I'm Jimi Hendrix, ready to expand the limits of rock.",
      "All along the watchtower! Jimi here, transforming music forever.",
    ],

    // Prince - The Purple One
    prince: [
      "Dearly beloved! I'm Prince, the purple genius from Minneapolis.",
      "Purple rain! Prince here, ready to fuse funk, rock, and pure creativity.",
      "1999! I'm Prince, prepared to take you to an unlimited musical party.",
      "Kiss! Prince here, the artist who changed the rules of the game forever.",
    ],

    // Van Halen - Eddie Van Halen & David Lee Roth
    vanhalen: [
      "Jump! I'm Eddie Van Halen, the master of tapping and epic solos.",
      "Runnin' with the devil! Van Halen here, ready for classic American rock.",
      "Panama! Eddie Van Halen present, revolutionizing the electric guitar.",
      "Hot for teacher! Van Halen ready to take hard rock to the next level.",
    ],

    // Alice Cooper - The Godfather of Shock Rock
    alicecooper: [
      "Welcome to my nightmare! I'm Alice Cooper, the godfather of shock rock.",
      "School's out forever! Alice Cooper here, ready for theatrical and macabre rock.",
      "Poison! I'm Alice Cooper, the master of theatrical rock performance.",
      "No more Mr. Nice Guy! Alice Cooper present, pioneer of gothic rock.",
    ],

    // Blondie - Debbie Harry
    blondie: [
      "Heart of glass! I'm Debbie Harry from Blondie, queen of new wave and punk.",
      "Call me! Blondie here, fusing punk, disco, and pop with New York attitude.",
      "One way or another! Debbie Harry present, pioneer of female rock.",
      "Rapture! Blondie ready to take new wave to new dimensions.",
    ],

    // Blue Oyster Cult - Don't Fear the Reaper
    blueoystercult: [
      "Don't fear the reaper! Blue Öyster Cult here, masters of mysterious hard rock.",
      "Burnin' for you! BOC present, ready for heavy rock with enigmatic lyrics.",
      "Godzilla! Blue Öyster Cult here, combining metal and science fiction.",
      "Cities on flame! BOC ready for cosmic rock and demolishing riffs.",
    ],

    // Bon Jovi - Livin' on a Prayer
    bonjovi: [
      "Livin' on a prayer! I'm Jon Bon Jovi, ready for anthemic and epic rock.",
      "You give love a bad name! Bon Jovi here, from New Jersey with pure rock.",
      "It's my life! Jon Bon Jovi present, master of ballads and rock anthems.",
      "Wanted dead or alive! Bon Jovi ready for rock that reaches the heart.",
    ],

    // Elton John - Rocket Man
    eltonjohn: [
      "Rocket man! I'm Elton John, the most extravagant pianist in rock.",
      "Your song! Elton John here, fusing pop, rock, and unique theatricality.",
      "Crocodile rock! Sir Elton present, master of timeless melodies.",
      "Candle in the wind! Elton John ready to move hearts with piano and voice.",
    ],

    // Greta Van Fleet - Modern Led Zeppelin
    gretavanfleet: [
      "Highway tune! We are Greta Van Fleet, bringing classic rock to the 21st century.",
      "Safari song! Greta Van Fleet here, reviving the spirit of 70s rock.",
      "When the curtain falls! Josh Kiszka present, with a voice that evokes Plant.",
      "Black smoke rising! Greta Van Fleet ready for authentic and powerful rock.",
    ],

    // Jeff Scott Soto - Yngwie's Voice
    jeffscottsoto: [
      "Hello! I'm Jeff Scott Soto, the voice behind Yngwie Malmsteen and Talisman.",
      "Rising force! Jeff Scott Soto here, master of melodic rock and power metal.",
      "Far beyond the sun! JSS present, fusing technique and perfect melody.",
      "Black star! Jeff Scott Soto ready for powerful voice and neoclassical rock.",
    ],

    // Judas Priest - Metal Gods
    judaspriest: [
      "Breaking the law! I'm Rob Halford from Judas Priest, the Metal God.",
      "Painkiller! Judas Priest here, defining the sound of heavy metal.",
      "Living after midnight! Rob Halford present, pioneer of extreme metal.",
      "You've got another thing comin'! Judas Priest ready for pure metal.",
    ],

    // Manowar - Kings of Metal
    manowar: [
      "Hail and kill! We are Manowar, the kings of the most epic and powerful metal.",
      "Warriors of the world! Manowar here, defending true metal.",
      "Battle hymns! Eric Adams present, with the most powerful voice in metal.",
      "Kings of metal! Manowar ready for musical warfare and absolute power.",
    ],

    // Megadeth - Dave Mustaine
    megadeth: [
      "Peace sells! I'm Dave Mustaine from Megadeth, master of technical thrash metal.",
      "Symphony of destruction! Megadeth here, combining speed and precision.",
      "Holy wars! Dave Mustaine present, pioneer of progressive and aggressive metal.",
      "Hangar 18! Megadeth ready for superhuman-level thrash metal.",
    ],

    // Motley Crue - Wild Side
    motleycrue: [
      "Girls, girls, girls! We are Mötley Crüe, the kings of wild glam metal.",
      "Kickstart my heart! Mötley Crüe here, living the crazy life of rock.",
      "Dr. Feelgood! Vince Neil present, with rebellious attitude and limitless rock.",
      "Wild side! Mötley Crüe ready for party, drugs, and rock 'n' roll.",
    ],

    // Motorhead - Lemmy Kilmister
    motorhead: [
      "Ace of spades! I'm Lemmy from Motörhead, the toughest in rock 'n' roll.",
      "Overkill! Motörhead here, faster, stronger, louder than anyone.",
      "Killed by death! Lemmy present, living on the edge of extreme rock.",
      "Born to raise hell! Motörhead ready for dirty, uncompromising rock.",
    ],

    // Nirvana - Kurt Cobain
    nirvana: [
      "Smells like teen spirit! I'm Kurt Cobain from Nirvana, voice of grunge.",
      "Come as you are! Nirvana here, defining the music of a generation.",
      "Lithium! Kurt Cobain present, bringing punk to the mainstream.",
      "In bloom! Nirvana ready for authentic grunge from Seattle.",
    ],

    // Pantera - Phil Anselmo & Dimebag Darrell
    pantera: [
      "Walk! I'm Phil Anselmo from Pantera, taking metal to the heaviest extreme.",
      "Cowboys from hell! Pantera here, revolutionizing heavy metal with groove.",
      "Cemetery gates! Dimebag Darrell present, master of demolishing riffs.",
      "Fucking hostile! Pantera ready for aggressive, uncompromising metal.",
    ],

    // Poison - Bret Michaels
    poison: [
      "Every rose has its thorn! I'm Bret Michaels from Poison, king of glam metal.",
      "Talk dirty to me! Poison here, from Sunset Strip with rock and glamour.",
      "Nothin' but a good time! Bret Michaels present, non-stop party and rock.",
      "Unskinny bop! Poison ready for authentic 80s glam metal.",
    ],

    // Radiohead - Thom Yorke
    radiohead: [
      "Creep! I'm Thom Yorke from Radiohead, exploring the limits of alternative rock.",
      "OK Computer! Radiohead here, fusing rock with electronic experimentation.",
      "Paranoid android! Thom Yorke present, redefining modern music.",
      "Karma police! Radiohead ready for cerebral and emotional rock.",
    ],

    // Rage Against The Machine - Zack de la Rocha
    ratm: [
      "Killing in the name! I'm Zack de la Rocha, fusing rap, metal, and revolution.",
      "Bulls on parade! Rage Against The Machine here, music as social protest.",
      "Wake up! RATM present, awakening consciousness with political metal.",
      "Guerrilla radio! Rage ready for rebellious music and social change.",
    ],

    // Scorpions - Klaus Meine
    scorpions: [
      "Rock you like a hurricane! I'm Klaus Meine from Scorpions, from Germany with power.",
      "Wind of change! Scorpions here, the band that brought down the Berlin Wall with music.",
      "Still loving you! Klaus Meine present, master of epic ballads.",
      "Big city nights! Scorpions ready for German and worldwide hard rock.",
    ],

    // The Baboon Show - Cecilia Boström
    thebaboonshow: [
      "Hello! We are The Baboon Show, bringing Swedish punk rock to the world.",
      "Punk rock from Sweden! The Baboon Show here, pure and rebellious energy.",
      "Stockholm punk! Cecilia present, uncompromising punk attitude.",
      "Swedish rebellion! The Baboon Show ready for authentic punk rock.",
    ],

    // Black Sabbath - Ozzy Osbourne & Tony Iommi
    blacksabbath: [
      "Iron man! We are Black Sabbath, the founding fathers of heavy metal.",
      "Paranoid! Black Sabbath here, inventing the heaviest sound in rock.",
      "War pigs! Ozzy and Tony Iommi present, creators of original metal.",
      "Sweet leaf! Black Sabbath ready for the darkest and heaviest metal.",
    ],

    // The Beatles - Fab Four
    beatles: [
      "Hey Jude! We are The Beatles, the band that changed music forever.",
      "Come together! The Beatles here, from Liverpool conquering the world.",
      "Let it be! The Fab Four present, musical and cultural revolution.",
      "Yesterday! The Beatles ready for melodies that transcend generations.",
    ],

    // The Cure - Robert Smith
    thecure: [
      "Just like heaven! I'm Robert Smith from The Cure, master of gothic post-punk.",
      "Boys don't cry! The Cure here, fusing melancholy with perfect melodies.",
      "Friday I'm in love! Robert Smith present, poet of alternative rock.",
      "Close to me! The Cure ready for deep emotions and unique sounds.",
    ],

    // The Rolling Stones - Mick Jagger
    rollingstones: [
      "Start me up! I'm Mick Jagger from The Rolling Stones, limitless rock'n'roll.",
      "Satisfaction! The Rolling Stones here, the kings of rebellious rock.",
      "Paint it black! Mick Jagger present, attitude and rock since 1962.",
      "Gimme shelter! The Rolling Stones ready for eternal and wild rock.",
    ],

    // The Verve - Richard Ashcroft
    theverve: [
      "Bitter sweet symphony! I'm Richard Ashcroft from The Verve, epic British rock.",
      "Lucky man! The Verve here, from England with deep alternative rock.",
      "The drugs don't work! Richard Ashcroft present, musical introspection.",
      "Urban hymns! The Verve ready for atmospheric and emotional rock.",
    ],

    // Whitesnake - David Coverdale
    whitesnake: [
      "Here I go again! I'm David Coverdale from Whitesnake, hard rock with blues.",
      "Is this love! Whitesnake here, power ballads and powerful riffs.",
      "Still of the night! David Coverdale present, powerful voice of hard rock.",
      "Fool for your loving! Whitesnake ready for melodic and passionate rock.",
    ],
  },
};

// Función helper para obtener saludo aleatorio
export const getRandomGreeting = (bandKey, language = "es") => {
  const bandGreetings = greetings[language]?.[bandKey];
  if (!bandGreetings || bandGreetings.length === 0) {
    return language === "es"
      ? "¡Hola! ¡Bienvenido al Rock Museum!"
      : "Hello! Welcome to the Rock Museum!";
  }
  const randomIndex = Math.floor(Math.random() * bandGreetings.length);
  return bandGreetings[randomIndex];
};

// Función helper para obtener todos los saludos de una banda
export const getAllGreetings = (bandKey, language = "es") => {
  return greetings[language]?.[bandKey] || [];
};
