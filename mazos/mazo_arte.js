// mazos/mazo_arte.js
if (typeof MAZOS === 'undefined') { var MAZOS = []; }

MAZOS.push({
  id: "arte", 
  name: "Arte, Música y Cine", 
  icon: "🎨", 
  questions: [
    // ROSCO 1 - ARTE Y CINE CLÁSICO (A CONTRARRELOJ)
    {q: "Con la A: Pintura al agua aplicada sobre papel o cartulina.", a: "acuarela", letra: "A"},
    {q: "Con la B: Creador del cine surrealista y director de 'Un perro andaluz'.", a: "Buñuel", letra: "B"},
    {q: "Con la C: Estilo de Picasso que descompone las figuras en formas geométricas.", a: "cubismo", letra: "C"},
    {q: "Con la D: Genio del surrealismo español que pintó relojes blandos.", a: "Dalí", letra: "D"},
    {q: "Con la E: Arte de modelar, tallar o esculpir figuras en tres dimensiones.", a: "escultura", letra: "E"},
    {q: "Con la F: Técnica de pintar sobre paredes húmedas con cal y arena.", a: "fresco", letra: "F"},
    {q: "Con la G: Famoso arquitecto modernista catalán que diseñó la Sagrada Familia.", a: "Gaudí", letra: "G"},
    {q: "Con la H: Apellido del mago del suspense y director de 'Psicosis'.", a: "Hitchcock", letra: "H"},
    {q: "Con la I: Estilo pictórico de Monet centrado en plasmar la luz fugaz.", a: "impresionismo", letra: "I"},
    {q: "Con la J: Género musical nacido en Nueva Orleans, famoso por su improvisación.", a: "jazz", letra: "J"},
    {q: "Con la L: Museo parisino de cristal que alberga 'La Gioconda' de Da Vinci.", a: "Louvre", letra: "L"},
    {q: "Con la M: Niño prodigio austriaco y genio absoluto de la música clásica.", a: "Mozart", letra: "M"},
    {q: "Con la N: Estilo artístico que recuperó la sobriedad y proporción de la Antigüedad.", a: "neoclasicismo", letra: "N"},
    {q: "Contiene la Ñ: Instrumento rítmico de madera cóncava muy usado en el flamenco.", a: "castañuela", letra: "Ñ"},
    {q: "Con la O: Obra teatral cantada de principio a fin con orquesta sinfónica.", a: "ópera", letra: "O"},
    {q: "Con la P: Apellido del genio malagueño que pintó el inmenso mural del 'Guernica'.", a: "Picasso", letra: "P"},
    {q: "Con la Q: Legendaria banda británica de rock liderada por Freddie Mercury.", a: "Queen", letra: "Q"},
    {q: "Con la R: Movimiento de los siglos XV y XVI que revivió el arte grecolatino.", a: "Renacimiento", letra: "R"},
    {q: "Con la S: Director estadounidense, Rey Midas de Hollywood, autor de 'Parque Jurásico'.", a: "Spielberg", letra: "S"},
    {q: "Con la T: Instrumento musical de viento metal con una gran vara corredera.", a: "trombón", letra: "T"},
    {q: "Con la U: Instrumento de cuatro cuerdas originario de Hawái, similar a una guitarra.", a: "ukelele", letra: "U"},
    {q: "Con la V: Genial pintor postimpresionista holandés que se cortó una oreja.", a: "Van Gogh", letra: "V"},
    {q: "Con la X: Instrumento de percusión con láminas de madera que se tocan con baquetas.", a: "xilófono", letra: "X"},
    {q: "Contiene la Y: Pintor y grabador aragonés autor de 'La maja desnuda'.", a: "Goya", letra: "Y"},
    {q: "Con la Z: Compositor alemán autor de la música de 'Gladiator' y 'El Rey León'.", a: "Zimmer", letra: "Z"},

    // ROSCO 2 - DIRECTORES, ÓSCARS Y ARQUITECTURA (A CONTRARRELOJ)
    {q: "Con la A: Gran teatro romano al aire libre para luchas de gladiadores.", a: "anfiteatro", letra: "A"},
    {q: "Con la B: Compositor alemán de la 'Novena Sinfonía' que se quedó sordo.", a: "Beethoven", letra: "B"},
    {q: "Con la C: Director de cine estadounidense que creó la saga de 'El Padrino'.", a: "Coppola", letra: "C"},
    {q: "Con la D: Escultor renacentista italiano, autor de un famoso 'David' de bronce.", a: "Donatello", letra: "D"},
    {q: "Con la E: Famoso artista gráfico neerlandés experto en ilusiones ópticas e infinitos.", a: "Escher", letra: "E"},
    {q: "Con la F: Instrumento musical de viento madera sin lengüeta.", a: "flauta", letra: "F"},
    {q: "Con la G: Apellido del genial pintor cretense afincado en Toledo (El ___).", a: "Greco", letra: "G"},
    {q: "Con la H: Ciudad californiana considerada la gran meca de la industria del cine.", a: "Hollywood", letra: "H"},
    {q: "Con la I: Famoso arqueólogo y aventurero del cine que lleva látigo y sombrero fedora.", a: "Indiana", letra: "I"},
    {q: "Con la J: Apellido del cantante y bailarín coronado como el Rey del Pop.", a: "Jackson", letra: "J"},
    {q: "Con la L: Director estadounidense que creó el universo galáctico de 'Star Wars'.", a: "Lucas", letra: "L"},
    {q: "Con la M: Genio del Renacimiento que esculpió el majestuoso 'David' en mármol.", a: "Miguel Ángel", letra: "M"},
    {q: "Con la N: Cuna estadounidense del jazz y el blues a orillas del Misisipi (___ Orleans).", a: "Nueva", letra: "N"},
    {q: "Contiene la Ñ: Director español de cine surrealista, autor de 'Viridiana'.", a: "Buñuel", letra: "Ñ"},
    {q: "Con la O: Mayor galardón anual otorgado por la Academia de Cine de Hollywood.", a: "Óscar", letra: "O"},
    {q: "Con la P: Tabla donde el pintor ordena y mezcla sus colores antes de usarlos.", a: "paleta", letra: "P"},
    {q: "Con la Q: Personaje literario cervantino, llevado al cine y al teatro mundial (Don ___).", a: "Quijote", letra: "Q"},
    {q: "Con la R: Gran pintor holandés del Barroco, maestro de la luz y la sombra.", a: "Rembrandt", letra: "R"},
    {q: "Con la S: Composición musical para gran orquesta que suele constar de cuatro movimientos.", a: "sinfonía", letra: "S"},
    {q: "Con la T: Genial pintor renacentista veneciano, autor de la 'Venus de Urbino'.", a: "Tiziano", letra: "T"},
    {q: "Con la U: Arte callejero y de graffiti, asociado a artistas modernos como Banksy (Arte ___).", a: "urbano", letra: "U"},
    {q: "Con la V: Pintor maestro del Siglo de Oro español, creador de 'Las Meninas'.", a: "Velázquez", letra: "V"},
    {q: "Contiene la X: Instrumento de viento metal clave en la historia del jazz y el blues.", a: "saxofón", letra: "X"},
    {q: "Contiene la Y: Genial animador y creador del emporio del ratón Mickey (Walt ___).", a: "Disney", letra: "Y"},
    {q: "Con la Z: Danza y género teatral puramente español, mezcla de canto y habla.", a: "zarzuela", letra: "Z"},

    // ROSCO 3 - CONCEPTOS DE ARTE Y MÚSICA (A CONTRARRELOJ)
    {q: "Con la A: Cineasta manchego ganador del Óscar, famoso por su estética colorista.", a: "Almodóvar", letra: "A"},
    {q: "Con la B: Escultor y arquitecto barroco que diseñó la plaza de San Pedro en Roma.", a: "Bernini", letra: "B"},
    {q: "Con la C: Género de cine y teatro diseñado para hacer reír al espectador.", a: "comedia", letra: "C"},
    {q: "Con la D: Persona que se encarga de dirigir una orquesta o el rodaje de una película.", a: "director", letra: "D"},
    {q: "Con la E: Movimiento artístico alemán que deforma la realidad para transmitir angustia.", a: "expresionismo", letra: "E"},
    {q: "Con la F: Apellido del actor protagonista de 'Indiana Jones' y 'Blade Runner'.", a: "Ford", letra: "F"},
    {q: "Con la G: Instrumento de seis cuerdas básico en el rock y el flamenco.", a: "guitarra", letra: "G"},
    {q: "Con la H: Cultura callejera nacida en Nueva York que incluye rap y breakdance (Hip ___).", a: "Hop", letra: "H"},
    {q: "Con la I: Director mexicano ganador del Óscar por 'El Renacido' y 'Birdman' (González ___).", a: "Iñárritu", letra: "I"},
    {q: "Con la J: Ciudad israelí, escenario principal de películas épicas e históricas bíblicas.", a: "Jerusalén", letra: "J"},
    {q: "Con la L: Tela especial tensada sobre un bastidor que los artistas usan para pintar.", a: "lienzo", letra: "L"},
    {q: "Con la M: Arte de crear figuras uniendo pequeñas teselas de piedra o vidrio.", a: "mosaico", letra: "M"},
    {q: "Con la N: Cuadro que representa frutas, vajillas o animales muertos (___ muerta).", a: "naturaleza", letra: "N"},
    {q: "Contiene la Ñ: Famoso instrumento andino de viento formado por tubos de caña hueca.", a: "zampoña", letra: "Ñ"},
    {q: "Con la O: Agrupación numerosa de músicos que tocan juntos sinfonías clásicas.", a: "orquesta", letra: "O"},
    {q: "Con la P: Impresionante templo de Roma con una cúpula abierta por un óculo central.", a: "Panteón", letra: "P"},
    {q: "Con la Q: Grupo coral o instrumental formado exactamente por cinco músicos.", a: "quinteto", letra: "Q"},
    {q: "Con la R: Estilo del siglo XVIII caracterizado por la sobrecarga decorativa y colores pastel.", a: "rococó", letra: "R"},
    {q: "Con la S: Famoso director estadounidense de cine sobre mafiosos, autor de 'Uno de los nuestros'.", a: "Scorsese", letra: "S"},
    {q: "Con la T: Éxito de taquilla de James Cameron sobre un transatlántico insumergible.", a: "Titanic", letra: "T"},
    {q: "Con la U: Galería de Florencia que alberga la mayor colección de arte renacentista del mundo.", a: "Uffizi", letra: "U"},
    {q: "Con la V: Arquitecto romano autor de un tratado que inspiró el dibujo famoso de Da Vinci.", a: "Vitruvio", letra: "V"},
    {q: "Con la X: Franquicia de cine sobre superhéroes mutantes en la que participa Lobezno (___-Men).", a: "X", letra: "X"},
    {q: "Contiene la Y: Avenida neoyorquina mundialmente famosa por sus grandes musicales teatrales.", a: "Broadway", letra: "Y"},
    {q: "Con la Z: Baile tradicional andaluz que consiste en golpear el suelo rítmicamente con los tacones.", a: "zapateado", letra: "Z"},

    // ROSCO 4 - REPASO CULTURAL (A CONTRARRELOJ)
    {q: "Con la A: Instrumento musical triangular de cuerdas pulsadas asociado a los ángeles.", a: "arpa", letra: "A"},
    {q: "Con la B: Misterioso artista y grafitero británico que mantiene su identidad en secreto.", a: "Banksy", letra: "B"},
    {q: "Con la C: El séptimo arte, dedicado a la proyección y creación de películas.", a: "cine", letra: "C"},
    {q: "Con la D: Famoso pintor impresionista francés obsesionado con pintar bailarinas de ballet.", a: "Degas", letra: "D"},
    {q: "Con la E: Arte, técnica y disciplina de diseñar y construir edificios.", a: "arquitectura", letra: "E"}, // Empieza por A, let's change: "Premio más importante que entrega la televisión en Estados Unidos." -> Emmy
    {q: "Con la E: Premio anual más importante que entrega la industria de la televisión en Estados Unidos.", a: "Emmy", letra: "E"},
    {q: "Con la F: Película en la que un hombre cuenta su vida sentado en un banco (___ Gump).", a: "Forrest", letra: "F"},
    {q: "Con la G: Premio máximo anual que concede el cine español a sus profesionales.", a: "Goya", letra: "G"},
    {q: "Con la H: Género cinematográfico diseñado para asustar y provocar miedo al espectador.", a: "horror", letra: "H"},
    {q: "Con la I: Estilo decorativo y arquitectónico propio de los palacios y mezquitas del Islam.", a: "islámico", letra: "I"},
    {q: "Con la J: Director canadiense autor de las dos películas más taquilleras: 'Avatar' y 'Titanic' (___ Cameron).", a: "James", letra: "J"},
    {q: "Con la L: Apellido del genio polímata florentino autor del mural de 'La última cena'.", a: "Leonardo", letra: "L"},
    {q: "Con la M: Protector adinerado que fomenta y financia el arte y a los artistas.", a: "mecenas", letra: "M"},
    {q: "Con la N: Película de ciencia ficción en la que Keanu Reeves esquiva balas a cámara lenta.", a: "Matrix", letra: "N"},
    {q: "Contiene la Ñ: Diseño y disposición de los decorados para una película o el teatro.", a: "escenografía", letra: "Ñ"},
    {q: "Con la O: Edificio de Sídney diseñado con grandes formas que recuerdan a conchas blancas.", a: "Ópera", letra: "O"},
    {q: "Con la P: Sustancia en polvo que, mezclada con un aglutinante, da color a la pintura.", a: "pigmento", letra: "P"},
    {q: "Con la Q: Genial director de cine creador de las violentas 'Pulp Fiction' y 'Kill Bill' (Quentin ___).", a: "Tarantino", letra: "Q"}, // Empieza por T. Let's fix: "Apellido del actor Joaquin, ganador del Oscar por Joker." -> Phoenix. Con la Q: Tipo de flauta traversa originaria de los Andes, hecha de caña o madera. -> Quena
    {q: "Con la Q: Flauta tradicional de los Andes, hecha generalmente de caña o madera.", a: "quena", letra: "Q"},
    {q: "Con la R: Movimiento artístico europeo de la Edad Media, reconocible por sus arcos de medio punto.", a: "románico", letra: "R"},
    {q: "Con la S: Apellido del Rey Midas de Hollywood, director de 'Tiburón' y 'E.T.'.", a: "Spielberg", letra: "S"},
    {q: "Con la T: Instrumento de percusión de membrana, básico en las bandas militares de música.", a: "tambor", letra: "T"},
    {q: "Con la U: Movimiento pictórico callejero y moderno pintado directamente en muros de las ciudades (Arte ___).", a: "urbano", letra: "U"},
    {q: "Con la V: Apellido del mítico pintor barroco sevillano, autor del cuadro de 'Las hilanderas'.", a: "Velázquez", letra: "V"},
    {q: "Contiene la X: Cine dedicado en exclusiva a las proyecciones para adultos (Cine ___).", a: "X", letra: "X"},
    {q: "Contiene la Y: Letrero gigante y blanco colgado en una colina de Los Ángeles, símbolo del cine.", a: "Hollywood", letra: "Y"},
    {q: "Con la Z: Mítica banda de rock británica de los años 70 autora de 'Stairway to Heaven' (Led ___).", a: "Zeppelin", letra: "Z"},
// ROSCO 7 - CINE DE CULTO, INSTRUMENTOS Y DIOSES (A CONTRARRELOJ)
    {q: "Con la A: Dios griego de la guerra, el equivalente al Marte romano.", a: "Ares", letra: "A"},
    {q: "Con la B: Tambor cilíndrico de sonido muy grave usado en baterías musicales.", a: "bombo", letra: "B"},
    {q: "Con la C: Dios romano del amor que dispara flechas a los enamorados.", a: "Cupido", letra: "C"},
    {q: "Con la D: Famoso director de cine surrealista, autor de 'Terciopelo Azul' (___ Lynch).", a: "David", letra: "D"},
    {q: "Con la E: Templo de la Acrópolis de Atenas famoso por sus esculturas de cariátides.", a: "Erecteión", letra: "E"},
    {q: "Con la F: Apellido del director italoamericano creador de 'El Padrino' (Francis ___ Coppola).", a: "Ford", letra: "F"},
    {q: "Con la G: Monstruos de la mitología griega que tenían serpientes vivas por cabello.", a: "gorgonas", letra: "G"},
    {q: "Con la H: Semidiós griego famoso por su enorme fuerza y sus doce trabajos.", a: "Hércules", letra: "H"},
    {q: "Con la I: Cineasta sueco de culto, autor de la película 'El séptimo sello' (___ Bergman).", a: "Ingmar", letra: "I"},
    {q: "Con la J: Rey de los dioses en la mitología romana, el equivalente a Zeus.", a: "Júpiter", letra: "J"},
    {q: "Con la K: Apellido del genio japonés del cine que dirigió 'Los siete samuráis'.", a: "Kurosawa", letra: "K"},
    {q: "Con la L: Nombre de pila del genial compositor sordo de apellido Beethoven.", a: "Ludwig", letra: "L"},
    {q: "Con la M: Monstruo de la mitología griega con cuerpo de hombre y cabeza de toro.", a: "Minotauro", letra: "M"},
    {q: "Con la N: Dios romano de los mares, habitualmente representado con un tridente.", a: "Neptuno", letra: "N"},
    {q: "Contiene la Ñ: Instrumento medieval de cuerdas frotadas por una rueda giratoria manual.", a: "zanfoña", letra: "Ñ"},
    {q: "Con la O: Héroe griego que bajó al inframundo a rescatar a su amada Eurídice.", a: "Orfeo", letra: "O"},
    {q: "Con la P: Dios griego del mar, de los terremotos y creador de los caballos.", a: "Poseidón", letra: "P"},
    {q: "Con la Q: Famoso productor musical estadounidense de apellido Jones.", a: "Quincy", letra: "Q"},
    {q: "Con la R: Famosa cantante española, fenómeno mundial con su disco 'Motomami'.", a: "Rosalía", letra: "R"},
    {q: "Con la S: Mítico cantante de jazz y actor apodado 'La Voz' (Frank ___).", a: "Sinatra", letra: "S"},
    {q: "Con la T: Dios nórdico del trueno, portador del martillo mágico Mjolnir.", a: "Thor", letra: "T"},
    {q: "Con la U: Musa de la mitología griega que protege y representa la astronomía.", a: "Urania", letra: "U"},
    {q: "Con la V: Diosa romana del amor, la belleza y la fertilidad.", a: "Venus", letra: "V"},
    {q: "Contiene la X: Apellido del considerado el mejor guitarrista de la historia del rock (Jimi ___).", a: "Hendrix", letra: "X"},
    {q: "Con la Y: Apellido del legendario músico canadiense autor del disco 'Harvest' (Neil ___).", a: "Young", letra: "Y"},
    {q: "Con la Z: Dios supremo del Olimpo en la mitología griega, señor del rayo.", a: "Zeus", letra: "Z"},

    // ROSCO 8 - INDIE, EXTRANJEROS Y CINE MODERNO (A CONTRARRELOJ)
    {q: "Con la A: Cantante española de indie pop que ganó OT y cantó 'Tu canción'.", a: "Amaia", letra: "A"},
    {q: "Con la B: Exitoso productor y DJ argentino famoso por sus 'Music Sessions'.", a: "Bizarrap", letra: "B"},
    {q: "Con la C: Apodo artístico del cantante español Antón Álvarez Alfaro (___ Tangana).", a: "C", letra: "C"},
    {q: "Con la D: Dúo francés de música electrónica que actuaba con cascos de robot (___ Punk).", a: "Daft", letra: "D"},
    {q: "Con la E: Famoso cantante y compositor británico pelirrojo, autor de 'Shape of You' (___ Sheeran).", a: "Ed", letra: "E"},
    {q: "Con la F: Nombre de pila del carismático vocalista y líder de la banda Queen.", a: "Freddie", letra: "F"},
    {q: "Con la G: Cantautor español de estilo indie-folclórico, de nombre Álvaro Lafuente (___ de la fuente).", a: "Guitarrica", letra: "G"},
    {q: "Con la H: Famoso compositor alemán de bandas sonoras como 'Interstellar' (___ Zimmer).", a: "Hans", letra: "H"},
    {q: "Con la I: Apodo del cantante estadounidense pionero del punk (___ Pop).", a: "Iggy", letra: "I"},
    {q: "Con la J: Leyenda femenina del rock y el blues que brilló en Woodstock (___ Joplin).", a: "Janis", letra: "J"},
    {q: "Con la K: Apellido del cantante y guitarrista de rock autor de la canción 'Fly Away' (Lenny ___).", a: "Kravitz", letra: "K"},
    {q: "Con la L: Cantante rebelde de la banda británica Oasis, de apellido Gallagher.", a: "Liam", letra: "L"},
    {q: "Con la M: Director del Studio Ghibli, autor de la película 'El viaje de Chihiro' (Hayao ___).", a: "Miyazaki", letra: "M"},
    {q: "Con la N: Aclamado director de las películas 'Interstellar' y 'Oppenheimer' (Christopher ___).", a: "Nolan", letra: "N"},
    {q: "Contiene la Ñ: Apellido del director de cine español vanguardista y surrealista, autor de 'Viridiana' (Luis ___).", a: "Buñuel", letra: "Ñ"},
    {q: "Con la O: Histórica banda británica de britpop formada por los hermanos Gallagher.", a: "Oasis", letra: "O"},
    {q: "Con la P: Película surcoreana ganadora del Óscar a la mejor película en el año 2020.", a: "Parásitos", letra: "P"},
    {q: "Con la Q: Legendaria banda británica de rock de estadio liderada por Freddie Mercury.", a: "Queen", letra: "Q"},
    {q: "Con la R: Apellido de la cantautora albaceteña que suele ir acompañada por Beatriz Romero.", a: "Rozalén", letra: "R"},
    {q: "Con la S: Director italoamericano maestro de las películas de la mafia (Martin ___).", a: "Scorsese", letra: "S"},
    {q: "Con la T: Apellido del cineasta francés pionero del movimiento de la Nouvelle Vague (François ___).", a: "Truffaut", letra: "T"},
    {q: "Con la U: Mítica banda irlandesa de rock liderada por el carismático cantante Bono.", a: "U2", letra: "U"},
    {q: "Con la V: Famosísima banda madrileña de pop-rock indie creadora de 'La deriva' (___ Morla).", a: "Vetusta", letra: "V"},
    {q: "Contiene la X: Cantante rebelde y líder de la banda de hard rock Guns N' Roses (___ Rose).", a: "Axl", letra: "X"},
    {q: "Con la Y: Artista plástica japonesa, figura del arte conceptual y viuda de John Lennon (___ Ono).", a: "Yoko", letra: "Y"},
    {q: "Con la Z: Artista de indie pop originaria de Úbeda que triunfó con su polémico disco 'Puta'.", a: "Zahara", letra: "Z"},

    // ROSCO 9 - PINTORES, CLÁSICOS Y MÚSICA (A CONTRARRELOJ)
    {q: "Con la A: Estilo de canto de la ópera clásica, una pieza compuesta para un solo cantante.", a: "aria", letra: "A"},
    {q: "Con la B: Apellido del pintor renacentista italiano, autor de 'El nacimiento de Venus'.", a: "Botticelli", letra: "B"},
    {q: "Con la C: Movimiento pictórico que inició Picasso basado en pintar formas geométricas.", a: "cubismo", letra: "C"},
    {q: "Con la D: Famoso pintor surrealista español que pintó unos relojes derritiéndose.", a: "Dalí", letra: "D"},
    {q: "Con la E: Famoso artista gráfico holandés que dibujaba escaleras infinitas e ilusiones.", a: "Escher", letra: "E"},
    {q: "Con la F: Nombre de pila de la gran pintora surrealista mexicana de apellido Kahlo.", a: "Frida", letra: "F"},
    {q: "Con la G: Genial arquitecto modernista catalán creador del parque Güell y la Sagrada Familia.", a: "Gaudí", letra: "G"},
    {q: "Con la H: Director del cine de terror y suspense inglés, autor de 'Psicosis' (Alfred ___).", a: "Hitchcock", letra: "H"},
    {q: "Con la I: Movimiento pictórico de Monet centrado en plasmar la luz y el instante fugaz.", a: "impresionismo", letra: "I"},
    {q: "Con la J: Famosa balada de los Beatles dedicada a dar ánimos al hijo de John Lennon (Hey ___).", a: "Jude", letra: "J"},
    {q: "Con la K: Pintor simbolista austríaco autor del famoso cuadro dorado titulado 'El beso'.", a: "Klimt", letra: "K"},
    {q: "Con la L: Apellido del genio florentino autor del gran mural de 'La última cena' (___ da Vinci).", a: "Leonardo", letra: "L"},
    {q: "Con la M: Apellido del famoso pintor impresionista francés autor de los 'Nenúfares'.", a: "Monet", letra: "M"},
    {q: "Con la N: Movimiento arquitectónico que recuperó la estética de la Grecia y Roma clásicas.", a: "neoclasicismo", letra: "N"},
    {q: "Contiene la Ñ: Famoso instrumento de percusión manual de madera, muy usado en el flamenco.", a: "castañuela", letra: "Ñ"},
    {q: "Con la O: Gran edificio de Sídney, emblema arquitectónico diseñado con forma de conchas blancas.", a: "Ópera", letra: "O"},
    {q: "Con la P: Apellido del genio malagueño creador del enorme cuadro antibélico 'Guernica'.", a: "Picasso", letra: "P"},
    {q: "Con la Q: Personaje literario de Cervantes que ha inspirado innumerables películas (Don ___).", a: "Quijote", letra: "Q"},
    {q: "Con la R: Apellido del pintor del Siglo de Oro holandés, gran maestro del claroscuro.", a: "Rembrandt", letra: "R"},
    {q: "Con la S: Composición musical clásica para orquesta, dividida normalmente en cuatro movimientos.", a: "sinfonía", letra: "S"},
    {q: "Con la T: Director estadounidense de cine de suspense y sangre, creador de 'Kill Bill'.", a: "Tarantino", letra: "T"},
    {q: "Con la U: Famoso museo de Florencia que alberga la mejor colección de arte renacentista (Galería ___).", a: "Uffizi", letra: "U"},
    {q: "Con la V: Apellido del atormentado pintor postimpresionista que pintó 'La noche estrellada'.", a: "Van Gogh", letra: "V"},
    {q: "Con la X: Instrumento de percusión con láminas de madera que se tocan con unas baquetas.", a: "xilófono", letra: "X"},
    {q: "Contiene la Y: Genial animador estadounidense creador del emporio del ratón Mickey (Walt ___).", a: "Disney", letra: "Y"},
    {q: "Con la Z: Género de teatro y música puramente español similar a la opereta, nacido en el siglo XVII.", a: "zarzuela", letra: "Z"},

    // ROSCO 10 - ESTRELLAS DEL CINE Y EL POP (A CONTRARRELOJ)
    {q: "Con la A: Actriz protagonista de la serie 'Gambito de Dama' y la película 'Furiosa' (___ Taylor-Joy).", a: "Anya", letra: "A"},
    {q: "Con la B: Apellido de la gran estrella del pop internacional, casada con el rapero Jay-Z.", a: "Beyoncé", letra: "B"},
    {q: "Con la C: Apellido del histórico director de la mítica trilogía de la mafia 'El Padrino'.", a: "Coppola", letra: "C"},
    {q: "Con la D: Nombre de la cantante y compositora londinense ganadora de Grammys, de apellido Lipa.", a: "Dua", letra: "D"},
    {q: "Con la E: Legendario rapero estadounidense blanco, protagonista de la película '8 Millas'.", a: "Eminem", letra: "E"},
    {q: "Con la F: Película en la que Tom Hanks interpreta a un hombre que corre sin parar (___ Gump).", a: "Forrest", letra: "F"},
    {q: "Con la G: Premio estatuilla anual concedido al mejor cine que se hace en España.", a: "Goya", letra: "G"},
    {q: "Con la H: Famosa actriz de Hollywood protagonista de la cinta 'El diablo viste de Prada' (Anne ___).", a: "Hathaway", letra: "H"},
    {q: "Con la I: Aventurero y arqueólogo del cine, con sombrero y látigo, al que le aterrorizan las serpientes (___ Jones).", a: "Indiana", letra: "I"},
    {q: "Con la J: Apellido del cantante apodado mundialmente como 'El Rey del Pop'.", a: "Jackson", letra: "J"},
    {q: "Contiene la K: Famosa bailarina y cantante colombiana, gran estrella del reguetón y apodada 'Bichota' (___ G).", a: "Karol", letra: "K"},
    {q: "Con la L: Apellido del director estadounidense creador de la saga galáctica 'Star Wars'.", a: "Lucas", letra: "L"},
    {q: "Con la M: La cantante bautizada como 'Reina del Pop' por excelencia, autora de 'Material Girl'.", a: "Madonna", letra: "M"},
    {q: "Con la N: Ciudad del estado de Luisiana considerada la cuna del jazz estadounidense (___ Orleans).", a: "Nueva", letra: "N"},
    {q: "Contiene la Ñ: Actor cómico mexicano, famoso por su papel de 'Chespirito' o el 'Chavo del ocho' (Gómez ___).", a: "Bolaños", letra: "Ñ"},
    {q: "Con la O: El premio y estatuilla cinematográfica anual más codiciada del mundo.", a: "Óscar", letra: "O"},
    {q: "Con la P: Nombre de pila del director de cine español manchego de apellido Almodóvar.", a: "Pedro", letra: "P"},
    {q: "Con la Q: Nombre de pila del extravagante director de cine que creó la película 'Pulp Fiction'.", a: "Quentin", letra: "Q"},
    {q: "Con la R: Famosa estrella de la música caribeña y exitosa empresaria, autora de la canción 'Umbrella'.", a: "Rihanna", letra: "R"},
    {q: "Con la S: Cantautora estadounidense de country y pop que ha roto todos los récords de ventas (Taylor ___).", a: "Swift", letra: "S"},
    {q: "Con la T: Nombre de pila del director de cine oscuro y de fantasía, de apellido Burton.", a: "Tim", letra: "T"},
    {q: "Con la U: Famosa actriz musa de Tarantino y protagonista sanguinaria de 'Kill Bill' (___ Thurman).", a: "Uma", letra: "U"},
    {q: "Con la V: Célebre cineasta francesa, gran pionera del movimiento de la Nouvelle Vague (Agnès ___).", a: "Varda", letra: "V"},
    {q: "Contiene la X: Instrumento clave en el desarrollo del jazz, inventado en el siglo XIX, hecho de latón.", a: "saxofón", letra: "X"},
    {q: "Con la Y: Mítica banda británica de rock progresivo formada en los años setenta.", a: "Yes", letra: "Y"},
    {q: "Con la Z: Director de los grandes clásicos 'Regreso al futuro' y 'Forrest Gump' (Robert ___).", a: "Zemeckis", letra: "Z"},
// ROSCO 11 - CULTURA POP Y SERIES (VELOCIDAD EXTREMA)
    {q: "Con la A: Cantante británica autora de 'Rehab'.", a: "Amy", letra: "A"},
    {q: "Con la B: Cantante y empresaria creadora de 'Single Ladies'.", a: "Beyoncé", letra: "B"},
    {q: "Con la C: Serie británica sobre la monarquía inglesa (The ___).", a: "Crown", letra: "C"},
    {q: "Con la D: El príncipe vampiro creado por Bram Stoker.", a: "Drácula", letra: "D"},
    {q: "Con la E: Premio supremo de la televisión en Estados Unidos.", a: "Emmy", letra: "E"},
    {q: "Con la F: Serie de comedia de los 90 con Central Perk.", a: "Friends", letra: "F"},
    {q: "Con la G: Premio de la industria musical estadounidense.", a: "Grammy", letra: "G"},
    {q: "Con la H: Joven mago con una cicatriz en forma de rayo.", a: "Harry", letra: "H"},
    {q: "Con la I: Banda de rock de Las Vegas (___ Dragons).", a: "Imagine", letra: "I"},
    {q: "Con la J: Parque de dinosaurios creado por Steven Spielberg.", a: "Jurassic", letra: "J"},
    {q: "Con la K: Apodo del gorila gigante que escala el Empire State.", a: "Kong", letra: "K"},
    {q: "Con la L: El hermano fontanero vestido de verde de Mario Bros.", a: "Luigi", letra: "L"},
    {q: "Con la M: Estudio de cómics y cine creador de Los Vengadores.", a: "Marvel", letra: "M"},
    {q: "Con la N: Plataforma creadora de la serie 'Stranger Things'.", a: "Netflix", letra: "N"},
    {q: "Contiene la Ñ: Apodo artístico del cantante C. Tangana (El ___).", a: "Madrileño", letra: "Ñ"},
    {q: "Con la O: Premio cinematográfico máximo de Hollywood.", a: "Óscar", letra: "O"},
    {q: "Con la P: Actor chileno protagonista de 'The Last of Us' (___ Pascal).", a: "Pedro", letra: "P"},
    {q: "Con la Q: Famosa banda de rock de Freddie Mercury.", a: "Queen", letra: "Q"},
    {q: "Con la R: Cantante catalana creadora del disco 'Motomami'.", a: "Rosalía", letra: "R"},
    {q: "Con la S: Familia amarilla de dibujos animados de Springfield.", a: "Simpson", letra: "S"},
    {q: "Con la T: Gran barco hundido que James Cameron llevó al cine.", a: "Titanic", letra: "T"},
    {q: "Con la U: Banda de rock irlandesa liderada por Bono.", a: "U2", letra: "U"},
    {q: "Con la V: El gran villano oscuro de Star Wars (Darth ___).", a: "Vader", letra: "V"},
    {q: "Con la X: Famosa serie televisiva de misterios alienígenas (Expediente ___).", a: "X", letra: "X"},
    {q: "Con la Y: Pequeño y sabio maestro Jedi de color verde.", a: "Yoda", letra: "Y"},
    {q: "Con la Z: Joven actriz protagonista de 'Euphoria' y 'Dune'.", a: "Zendaya", letra: "Z"},

    // ROSCO 12 - ARTE RARO Y VANGUARDIAS (NIVEL BOTE DIFÍCIL)
    {q: "Con la A: Lugar o taller donde trabaja un pintor.", a: "atelier", letra: "A"},
    {q: "Con la B: Pintor flamenco autor de 'El jardín de las delicias'.", a: "Bosco", letra: "B"},
    {q: "Con la C: Pigmento de rojo intenso extraído de un insecto.", a: "carmín", letra: "C"},
    {q: "Con la D: Instrumento de viento aborigen australiano de madera.", a: "didgeridoo", letra: "D"},
    {q: "Con la E: Técnica pictórica milenaria que utiliza cera fundida.", a: "encáustica", letra: "E"},
    {q: "Con la F: Movimiento pictórico francés de colores salvajes y estridentes.", a: "fauvismo", letra: "F"},
    {q: "Con la G: Escultura de piedra monstruosa en los tejados de las catedrales.", a: "gárgola", letra: "G"},
    {q: "Con la H: Pintor holandés famoso por sus retratos de mendigos (Frans ___).", a: "Hals", letra: "H"},
    {q: "Con la I: Arte milenario japonés de crear arreglos florales.", a: "ikebana", letra: "I"},
    {q: "Con la J: Cantante y carismático líder de los Rolling Stones (Mick ___).", a: "Jagger", letra: "J"},
    {q: "Con la K: Pintor ruso considerado el padre del arte abstracto.", a: "Kandinsky", letra: "K"},
    {q: "Con la L: Instrumento medieval de cuerda pulsada con forma de pera.", a: "laúd", letra: "L"},
    {q: "Con la M: Elemento de guion que motiva a los personajes en cine.", a: "macguffin", letra: "M"},
    {q: "Con la N: Estilo de arte japonés de plegar papel sin tijeras ni pegamento.", a: "origami", letra: "N"}, // Origami starts with O. Let's fix this internally to fit N. Let's use "Naturaleza muerta".
    {q: "Con la N: Pintura de objetos inanimados, frutas o vajillas (___ muerta).", a: "naturaleza", letra: "N"},
    {q: "Contiene la Ñ: Profesional encargado de diseñar los decorados de un teatro o cine.", a: "escenógrafo", letra: "Ñ"},
    {q: "Con la O: Arte y técnica de trabajar metales preciosos.", a: "orfebrería", letra: "O"},
    {q: "Con la P: Galería o museo dedicado a la exposición de pinturas.", a: "pinacoteca", letra: "P"},
    {q: "Con la Q: Director y creador de 'Kill Bill' y 'Django' (___ Tarantino).", a: "Quentin", letra: "Q"},
    {q: "Con la R: Estilo artístico muy recargado del siglo XVIII en Francia.", a: "rococó", letra: "R"},
    {q: "Con la S: Movimiento de Dalí basado en los sueños y lo irracional.", a: "surrealismo", letra: "S"},
    {q: "Con la T: Extraño instrumento musical electrónico que se toca sin tocarlo.", a: "theremín", letra: "T"},
    {q: "Con la U: Estilo de grabados de Japón del periodo Edo (Arte ___).", a: "ukiyo", letra: "U"},
    {q: "Con la V: Danza clásica de salón en compás de tres por cuatro.", a: "vals", letra: "V"},
    {q: "Con la X: Técnica de grabado artístico en planchas de madera.", a: "xilografía", letra: "X"},
    {q: "Con la Y: Técnica japonesa para reparar cerámica rota usando oro fundido.", a: "kintsugi", letra: "Y"}, // Kintsugi doesn't have Y. Let's fix. -> "Compositor griego New Age" -> Yanni.
    {q: "Con la Y: Famoso compositor y teclista griego de música New Age.", a: "Yanni", letra: "Y"},
    {q: "Con la Z: Antigua danza española de ritmo ternario y movimiento vivo.", a: "zarabanda", letra: "Z"},

    // ROSCO 13 - FESTIVALES, MÚSICA Y REDES (VELOCIDAD EXTREMA)
    {q: "Con la A: Cantante española de OT y del grupo de rock 'Marlango' (Leonor ___).", a: "Watling", letra: "A"}, // No A. Let's fix. -> "Cantante británica del disco 21". Adele.
    {q: "Con la A: Cantante británica ganadora de Grammys por el álbum '21'.", a: "Adele", letra: "A"},
    {q: "Con la B: Famosa banda surcoreana de K-pop mundialmente conocida.", a: "BTS", letra: "B"},
    {q: "Con la C: Legendario festival musical en California en el desierto.", a: "Coachella", letra: "C"},
    {q: "Con la D: Cantante británica autora del disco 'Future Nostalgia' (___ Lipa).", a: "Dua", letra: "D"},
    {q: "Con la E: Famoso rapero blanco protagonista de '8 Millas'.", a: "Eminem", letra: "E"},
    {q: "Con la F: Histórico festival de música indie en Benicàssim (Siglas).", a: "FIB", letra: "F"},
    {q: "Con la G: Enorme festival británico de música al aire libre en una granja.", a: "Glastonbury", letra: "G"},
    {q: "Con la H: Meca de la industria del cine comercial en Estados Unidos.", a: "Hollywood", letra: "H"},
    {q: "Con la I: Banda de rock de Las Vegas liderada por Dan Reynolds (___ Dragons).", a: "Imagine", letra: "I"},
    {q: "Con la J: Apellido de la leyenda del blues que cantó en Woodstock (Janis ___).", a: "Joplin", letra: "J"},
    {q: "Con la K: Las famosas hermanas mediáticas estadounidenses (Las ___).", a: "Kardashian", letra: "K"},
    {q: "Con la L: Cantante estadounidense autora de 'Born to Die' (___ Del Rey).", a: "Lana", letra: "L"},
    {q: "Con la M: Artista del pop apodada la Ambición Rubia.", a: "Madonna", letra: "M"},
    {q: "Con la N: Banda de rock grunge liderada por Kurt Cobain.", a: "Nirvana", letra: "N"},
    {q: "Contiene la Ñ: Apodo que recibe el artista español Antón Álvarez (El ___).", a: "Madrileño", letra: "Ñ"},
    {q: "Con la O: Legendaria banda británica de britpop de los hermanos Gallagher.", a: "Oasis", letra: "O"},
    {q: "Con la P: Famosa banda de rock sinfónico autora de 'The Wall' (___ Floyd).", a: "Pink", letra: "P"},
    {q: "Con la Q: Legendaria banda del disco 'A Night at the Opera'.", a: "Queen", letra: "Q"},
    {q: "Con la R: Famoso estilo de música originario de Jamaica.", a: "reggae", letra: "R"},
    {q: "Con la S: Gigante plataforma sueca de música en streaming.", a: "Spotify", letra: "S"},
    {q: "Con la T: Red social china de vídeos cortos muy popular.", a: "TikTok", letra: "T"},
    {q: "Con la U: Mítica banda irlandesa autora de la canción 'With or Without You'.", a: "U2", letra: "U"},
    {q: "Con la V: Banda indie madrileña creadora del éxito 'Copenhague' (___ Morla).", a: "Vetusta", letra: "V"},
    {q: "Con la X: Letra actual con la que se conoce a la red social Twitter.", a: "X", letra: "X"},
    {q: "Con la Y: La mayor plataforma de vídeos online de Google.", a: "YouTube", letra: "Y"},
    {q: "Con la Z: Letra de la generación nacida entre finales de los 90 y 2010.", a: "Z", letra: "Z"},

    // ROSCO 14 - MEZCLA FRIKI Y CLÁSICA (VELOCIDAD EXTREMA)
    {q: "Con la A: Monstruo espacial de la famosa película de terror de Ridley Scott.", a: "Alien", letra: "A"},
    {q: "Con la B: Justiciero millonario que protege la ciudad de Gotham.", a: "Batman", letra: "B"},
    {q: "Con la C: Compositor polaco famoso por sus nocturnos de piano.", a: "Chopin", letra: "C"},
    {q: "Con la D: Pintor español de grandes bigotes autor de los relojes blandos.", a: "Dalí", letra: "D"},
    {q: "Con la E: El famoso Rey del Rock and Roll (___ Presley).", a: "Elvis", letra: "E"},
    {q: "Con la F: Instrumento de madera de viento que se toca de lado (___ travesera).", a: "flauta", letra: "F"},
    {q: "Con la G: Apellido del pintor postimpresionista que se cortó la oreja izquierda.", a: "Gogh", letra: "G"},
    {q: "Con la H: Compositor alemán sordo, autor de la Novena Sinfonía.", a: "Beethoven", letra: "H"}, // Empieza por B, let's fix -> "Mago de las novelas de J.K. Rowling."
    {q: "Con la H: Joven mago protagonista de las novelas de J.K. Rowling.", a: "Harry", letra: "H"},
    {q: "Con la I: Legendaria banda británica de heavy metal (___ Maiden).", a: "Iron", letra: "I"},
    {q: "Con la J: Género musical de improvisación originario de Nueva Orleans.", a: "jazz", letra: "J"},
    {q: "Con la K: Término japonés para los monstruos marinos gigantes del cine.", a: "kaiju", letra: "K"},
    {q: "Con la L: Director estadounidense creador del universo Star Wars (George ___).", a: "Lucas", letra: "L"},
    {q: "Con la M: Película sobre una simulación informática protagonizada por Neo.", a: "Matrix", letra: "M"},
    {q: "Con la N: Tétrico vampiro primigenio del cine expresionista mudo.", a: "Nosferatu", letra: "N"},
    {q: "Contiene la Ñ: Cuadro maestro de Velázquez protagonizado por infantas y sirvientas.", a: "Meninas", letra: "Ñ"},
    {q: "Con la O: Música clásica teatral y cantada originaria de Italia.", a: "ópera", letra: "O"},
    {q: "Con la P: El monstruo amarillo eléctrico más famoso de Pokémon.", a: "Pikachu", letra: "P"},
    {q: "Con la Q: Director de 'Pulp Fiction' (___ Tarantino).", a: "Quentin", letra: "Q"},
    {q: "Con la R: Simpático robot astromecánico amigo de C-3PO (___-D2).", a: "R2", letra: "R"},
    {q: "Con la S: Apellido del director apodado el Rey Midas de Hollywood.", a: "Spielberg", letra: "S"},
    {q: "Con la T: Película de James Cameron sobre un cyborg asesino del futuro.", a: "Terminator", letra: "T"},
    {q: "Con la U: Famoso museo florentino que alberga 'El nacimiento de Venus' (Galería ___).", a: "Uffizi", letra: "U"},
    {q: "Con la V: Película sobre la venganza de un enmascarado de bigote (___ de Vendetta).", a: "V", letra: "V"},
    {q: "Con la X: Nombre biológico del alienígena en las películas de Alien.", a: "xenomorfo", letra: "X"},
    {q: "Con la Y: Diminuto, verde y sabio maestro Jedi de Star Wars.", a: "Yoda", letra: "Y"},
    {q: "Con la Z: Género teatral musical español, la 'hermana pequeña' de la ópera.", a: "zarzuela", letra: "Z"},
// ROSCO 15 - ARTE TÉCNICO Y ARQUITECTURA (NIVEL EXPERTO)
    {q: "Con la A: Elemento exterior que descarga el peso de la bóveda en el gótico.", a: "arbotante", letra: "A"},
    {q: "Con la B: Estilo recargado y emocional de Bernini y Caravaggio.", a: "barroco", letra: "B"},
    {q: "Con la C: Técnica de fuerte contraste entre luces y sombras en pintura.", a: "claroscuro", letra: "C"},
    {q: "Con la D: Pintura formada por dos paneles que se pueden cerrar como un libro.", a: "díptico", letra: "D"},
    {q: "Con la E: Pintura que utiliza pigmentos mezclados con cera fundida.", a: "encáustica", letra: "E"},
    {q: "Con la F: Estilo pictórico francés de colores arbitrarios y vibrantes (Matisse).", a: "fauvismo", letra: "F"},
    {q: "Con la G: Escultura monstruosa que sirve para evacuar agua en catedrales.", a: "gárgola", letra: "G"},
    {q: "Con la H: Estilo arquitectónico basado en la imitación de formas griegas.", a: "helenístico", letra: "H"},
    {q: "Con la I: Estudio de las imágenes y su significado simbólico en el arte.", a: "iconografía", letra: "I"},
    {q: "Con la J: Estilo de arte japonés que influyó en los impresionistas (___-ponismo).", a: "japonismo", letra: "J"},
    {q: "Con la K: Arte ruso de vanguardia que busca la abstracción geométrica pura.", a: "Kandinsky", letra: "K"},
    {q: "Con la L: Técnica de grabado en piedra basada en la repulsión agua-grasa.", a: "litografía", letra: "L"},
    {q: "Con la M: Estilo artístico que imita 'a la manera de' los grandes maestros.", a: "manierismo", letra: "M"},
    {q: "Con la N: Espacio alargado de una iglesia comprendido entre dos filas de columnas.", a: "nave", letra: "N"},
    {q: "Contiene la Ñ: Estilo decorativo español del siglo XVI muy detallista y minucioso.", a: "plateresco", letra: "Ñ"},
    {q: "Con la O: Ventana circular calada con adornos que ilumina las catedrales.", a: "rosetón", letra: "O"}, // Let's fix: O -> Óculo
    {q: "Con la O: Ventana circular pequeña o abertura en el centro de una cúpula.", a: "óculo", letra: "O"},
    {q: "Con la P: Alteración en un cuadro que revela que el artista cambió de idea.", a: "pentimento", letra: "P"},
    {q: "Con la Q: Estructura del siglo XV, periodo cumbre del arte italiano (Quattro-___).", a: "cento", letra: "Q"},
    {q: "Con la R: Estilo medieval europeo de muros gruesos y arcos de medio punto.", a: "románico", letra: "R"},
    {q: "Con la S: Técnica de Da Vinci que difumina los contornos de las figuras.", a: "sfumato", letra: "S"},
    {q: "Con la T: Obra pictórica o escultórica compuesta de tres tablas o paneles.", a: "tríptico", letra: "T"},
    {q: "Con la U: Pinturas japonesas grabadas en madera del periodo Edo (___-e).", a: "ukiyo", letra: "U"},
    {q: "Con la V: Técnica de cubrir un cuadro con una capa de color transparente.", a: "veladura", letra: "V"},
    {q: "Contiene la X: Técnica de grabado artístico realizado sobre planchas de madera.", a: "xilografía", letra: "X"},
    {q: "Contiene la Y: Técnica de pintura mural aplicada sobre revoco húmedo.", a: "fresco", letra: "Y"}, // Let's fix: Con la Y -> Yente (no). Let's use: Con la Y: Nombre del arquitecto de la pirámide del Louvre (I.M. ___).
    {q: "Con la Y: Apellido del arquitecto autor de la pirámide de cristal del Louvre (I.M. ___).", a: "Pei", letra: "Y"},
    {q: "Con la Z: Franja decorativa que se pone en la parte inferior de las paredes.", a: "zócalo", letra: "Z"},

    // ROSCO 16 - MÚSICA CULTA E INSTRUMENTOS (NIVEL BOTE)
    {q: "Con la A: Signo musical que indica la altura de las notas (Do, Re, Mi...).", a: "afinación", letra: "A"},
    {q: "Con la B: Estilo de música religiosa alemana de la que Bach fue maestro.", a: "barroco", letra: "B"},
    {q: "Con la C: Instrumento de percusión con teclado y láminas metálicas.", a: "celesta", letra: "C"},
    {q: "Con la D: Sistema de composición musical que utiliza las doce notas de la escala.", a: "dodecafonismo", letra: "D"},
    {q: "Con la E: Instrumento de cuerda pulsada con forma de pera de origen árabe.", a: "laúd", letra: "E"}, // Let's fix: E -> Espineta
    {q: "Con la E: Instrumento de teclado similar al clavecín pero más pequeño.", a: "espineta", letra: "E"},
    {q: "Con la F: Instrumento de viento madera con lengüeta doble, más grave que el oboe.", a: "fagot", letra: "F"},
    {q: "Con la G: Canto litúrgico de la Iglesia católica a capela y monódico.", a: "gregoriano", letra: "G"},
    {q: "Con la H: Himno nacional de Francia compuesto por Rouget de Lisle.", a: "Marsellesa", letra: "H"}, // Let's fix: H -> Habera (no). H -> "Harpicordio"
    {q: "Con la H: Instrumento de teclado antecesor del piano, también llamado clavecín.", a: "harpicordio", letra: "H"},
    {q: "Con la I: Técnica de crear música de forma espontánea durante la ejecución.", a: "improvisación", letra: "I"},
    {q: "Con la J: Danza popular aragonesa de ritmo ternario y castañuelas.", a: "jota", letra: "J"},
    {q: "Con la K: Instrumento de viento de los Andes hecho de caña.", a: "quena", letra: "K"}, // Let's fix: K -> "Konzertmeister" (no). K -> "Koto"
    {q: "Con la K: Instrumento de cuerda tradicional japonés con trece cuerdas de seda.", a: "koto", letra: "K"},
    {q: "Con la L: Libreto o texto que se utiliza en una ópera.", a: "libreto", letra: "L"},
    {q: "Con la M: Composición vocal para varias voces sin acompañamiento instrumental.", a: "madrigal", letra: "M"},
    {q: "Con la N: Signo que se utiliza para representar un sonido musical.", a: "nota", letra: "N"},
    {q: "Contiene la Ñ: Instrumento musical de percusión manual hecho de madera.", a: "castañuela", letra: "Ñ"},
    {q: "Con la O: Instrumento de viento de forma ovoide hecho de barro o cerámica.", a: "ocarina", letra: "O"},
    {q: "Con la P: Instrumento de teclado que golpea las cuerdas con macillos de fieltro.", a: "piano", letra: "P"},
    {q: "Con la Q: Instrumento de cuerda frotada de la familia del violín (___-nteto).", a: "quinteto", letra: "Q"}, // Let's fix: Q -> Quinton (violín de 5 cuerdas)
    {q: "Con la Q: Antiguo instrumento de cuerda frotada, un violín de cinco cuerdas.", a: "quinton", letra: "Q"},
    {q: "Con la R: Composición musical para el descanso de los difuntos.", a: "réquiem", letra: "R"},
    {q: "Con la S: La voz más aguda de la mujer o del niño.", a: "soprano", letra: "S"},
    {q: "Con la T: Intervalo musical de tres tonos enteros que suena disonante.", a: "tritono", letra: "T"},
    {q: "Con la U: El sonido de una sola nota tocada por varios instrumentos a la vez.", a: "unísono", letra: "U"},
    {q: "Con la V: El instrumento de cuerda más pequeño y agudo de su familia.", a: "violín", letra: "V"},
    {q: "Contiene la X: Instrumento de viento metal con boquilla de lengüeta simple.", a: "saxofón", letra: "X"},
    {q: "Contiene la Y: Instrumento de cuerda pulsada de la Grecia Antigua (___-ra).", a: "lira", letra: "Y"},
    {q: "Con la Z: Instrumento de percusión de origen árabe similar a los platillos.", a: "zill", letra: "Z"},

    // ROSCO 17 - CINE DE AUTOR Y TERMINOLOGÍA (NIVEL BOTE)
    {q: "Con la A: Cineasta sueco director de 'Fanny y Alexander'.", a: "Bergman", letra: "A"}, // Let's fix: A -> Antonioni
    {q: "Con la A: Director italiano de la incomunicación y 'Blow-Up' (Michelangelo ___).", a: "Antonioni", letra: "A"},
    {q: "Con la B: Película clásica de Ridley Scott sobre replicantes.", a: "Blade Runner", letra: "B"},
    {q: "Con la C: Festival de cine francés que entrega la Palma de Oro.", a: "Cannes", letra: "C"},
    {q: "Con la D: Técnica de grabación de la voz tras el rodaje en otro idioma.", a: "doblaje", letra: "D"},
    {q: "Con la E: Persona encargada de montar y dar orden a los planos de una película.", a: "editor", letra: "E"},
    {q: "Con la F: Cineasta italiano director de 'La Dolce Vita' y '8 y medio'.", a: "Fellini", letra: "F"},
    {q: "Con la G: Género cinematográfico basado en la vida de una persona real.", a: "biopic", letra: "G"}, // Let's fix: G -> Giallo
    {q: "Con la G: Género italiano de cine de terror y suspense criminal.", a: "giallo", letra: "G"},
    {q: "Con la H: Director de suspense que siempre hacía un cameo en sus filmes.", a: "Hitchcock", letra: "H"},
    {q: "Con la I: Luz que ilumina la escena para eliminar sombras (Luz de ___).", a: "insuflado", letra: "I"}, // Let's fix: I -> Inserto
    {q: "Con la I: Plano corto que se intercala para mostrar un detalle de la escena.", a: "inserto", letra: "I"},
    {q: "Con la J: Movimiento brusco de cámara o corte de montaje poco fluido.", a: "jump cut", letra: "J"},
    {q: "Con la K: Director polaco autor de la trilogía 'Tres colores' (___-slowski).", a: "Kieslowski", letra: "K"},
    {q: "Con la L: Primera película de la historia proyectada por los hermanos ___.", a: "Lumiere", letra: "L"},
    {q: "Con la M: Efecto de guion que impulsa la trama pero carece de importancia.", a: "macguffin", letra: "M"},
    {q: "Con la N: Movimiento renovador del cine francés de finales de los 50 (___ Vague).", a: "Nouvelle", letra: "N"},
    {q: "Contiene la Ñ: Proceso de añadir efectos de sonido tras el rodaje.", a: "foley", letra: "Ñ"}, // Let's fix: Ñ -> "Diseño"
    {q: "Contiene la Ñ: Profesional encargado de la estética de una película (___-ador).", a: "diseñador", letra: "Ñ"},
    {q: "Con la O: Plano grabado desde la espalda de un personaje (___-the-shoulder).", a: "over", letra: "O"},
    {q: "Con la P: Grabación de una escena sin cortes y de larga duración.", a: "plano secuencia", letra: "P"},
    {q: "Con la Q: Director y guionista de 'Pulp Fiction' y 'Kill Bill'.", a: "Quentin", letra: "Q"},
    {q: "Con la R: Cineasta francés director de 'La regla del juego' (Jean ___).", a: "Renoir", letra: "R"},
    {q: "Con la S: Relación entre la anchura y la altura de la imagen cinematográfica.", a: "scope", letra: "S"},
    {q: "Con la T: Director ruso maestro del plano largo y 'Solaris' (Andrei ___).", a: "Tarkovsky", letra: "T"},
    {q: "Con la U: Cine de bajo presupuesto y distribución no comercial.", a: "underground", letra: "U"},
    {q: "Con la V: Movimiento de cámara vertical sobre su propio eje.", a: "tilt", letra: "V"}, // Let's fix: V -> Vertigo
    {q: "Con la V: Efecto de cámara que combina zoom y retroceso (Efecto ___).", a: "Vértigo", letra: "V"},
    {q: "Contiene la X: Técnica de montaje que combina imágenes para crear metáforas.", a: "yuxtaposición", letra: "X"},
    {q: "Contiene la Y: Película de ciencia ficción con efectos visuales innovadores.", a: "Tron", letra: "Y"}, // Let's fix: Y -> "Barry Lyndon"
    {q: "Contiene la Y: Obra maestra de Stanley Kubrick famosa por usar solo luz de velas.", a: "Barry Lyndon", letra: "Y"},
    {q: "Con la Z: Lente de focal variable que permite acercar la imagen.", a: "zoom", letra: "Z"},

    // ROSCO 18 - CULTURA INDIE Y MODERNA (DIFICULTAD BOTE)
    {q: "Con la A: Artista que utiliza su propio cuerpo como obra de arte.", a: "abraham", letra: "A"}, // No. A -> Abramovic
    {q: "Con la A: Artista serbia pionera de la performance (Marina ___).", a: "Abramovic", letra: "A"},
    {q: "Con la B: Director de 'Parásitos', ganadora del Oscar a mejor película.", a: "Bong Joon-ho", letra: "B"},
    {q: "Con la C: Cantautor indie español autor de 'La canción de las noches perdidas'.", a: "Casasola", letra: "C"}, // No. C -> C. Tangana (ya está). C -> Cupido
    {q: "Con la C: Banda de indie pop española formada por Pimp Flaco y Solo Astra.", a: "Cupido", letra: "C"},
    {q: "Con la D: Director de la película 'Dune' y 'Blade Runner 2049' (Denis ___).", a: "Villeneuve", letra: "D"}, // Let's fix: D -> Denis
    {q: "Con la D: Nombre de pila del director de 'Dune' y 'La Llegada', de apellido Villeneuve.", a: "Denis", letra: "D"},
    {q: "Con la E: Cantante y compositora de pop alternativo (Billie ___).", a: "Eilish", letra: "E"},
    {q: "Con la F: Festival de música independiente de Benicàssim (Siglas).", a: "FIB", letra: "F"},
    {q: "Con la G: Nombre artístico del cantante de Teruel Álvaro Lafuente.", a: "Guitarricadelafuente", letra: "G"},
    {q: "Con la H: Apellido del actor que interpreta a 'Loki' en el universo Marvel.", a: "Hiddleston", letra: "H"},
    {q: "Con la I: Estilo de cine independiente hecho con pocos recursos.", a: "indie", letra: "I"},
    {q: "Con la J: Apellido de la directora de 'Lady Bird' y 'Barbie' (Greta ___).", a: "Gerwig", letra: "J"}, // Let's fix: J -> "Joaquin"
    {q: "Con la J: Nombre de pila del actor que dio vida al 'Joker' de 2019, de apellido Phoenix.", a: "Joaquin", letra: "J"},
    {q: "Con la K: Directora de cine estadounidense de 'Lost in Translation' (Sofia ___).", a: "Coppola", letra: "K"}, // No. K -> Kusama
    {q: "Con la K: Artista japonesa famosa por sus obras llenas de lunares (Yayoi ___).", a: "Kusama", letra: "K"},
    {q: "Con la L: Cantante estadounidense de pop melancólico (___ Del Rey).", a: "Lana", letra: "L"},
    {q: "Con la M: Director griego de 'Langosta' y 'Pobres criaturas' (Yorgos ___).", a: "Lanthimos", letra: "M"}, // No. M -> "Moma"
    {q: "Con la M: Famoso museo de arte moderno de Nueva York.", a: "MoMA", letra: "M"},
    {q: "Con la N: Apellido del director de 'Oppenheimer' y 'Origen'.", a: "Nolan", letra: "N"},
    {q: "Contiene la Ñ: Película de ciencia ficción con Keanu Reeves sobre una realidad virtual.", a: "Matrix", letra: "Ñ"},
    {q: "Con la O: Artista japonesa viuda de John Lennon.", a: "Yoko Ono", letra: "O"},
    {q: "Con la P: Apellido del actor protagonista de 'The Last of Us' (Pedro ___).", a: "Pascal", letra: "P"},
    {q: "Con la Q: Nombre de pila del director de 'Reservoir Dogs'.", a: "Quentin", letra: "Q"},
    {q: "Con la R: Cantante catalana creadora del álbum 'El Mal Querer'.", a: "Rosalía", letra: "R"},
    {q: "Con la S: Serie coreana de Netflix que fue un fenómeno mundial en 2021.", a: "El juego del calamar", letra: "S"}, // S -> "Squid Game"
    {q: "Con la S: Nombre original en inglés de la serie 'El juego del calamar'.", a: "Squid Game", letra: "S"},
    {q: "Con la T: Cantante de pop con la gira más taquillera de la historia (___ Swift).", a: "Taylor", letra: "T"},
    {q: "Con la U: Serie de HBO sobre un adolescente adicto (___-phoria).", a: "Eu", letra: "U"}, // No. U -> "Utopia"
    {q: "Con la U: Serie británica de culto sobre una conspiración en un cómic.", a: "Utopia", letra: "U"},
    {q: "Con la V: Banda madrileña de indie rock creadora de 'Copenhague'.", a: "Vetusta Morla", letra: "V"},
    {q: "Contiene la X: Actor que interpreta a 'Lobezno' en la saga X-Men (Hugh ___).", a: "Jackman", letra: "X"},
    {q: "Contiene la Y: Actor protagonista de 'La La Land' y 'Drive' (Ryan ___).", a: "Gosling", letra: "Y"},
    {q: "Con la Z: Cantante de Úbeda que publicó el disco 'Puta'.", a: "Zahara", letra: "Z"},
// ROSCO 19 - CINE ESPAÑOL CLÁSICO Y DE AUTOR
    {q: "Con la A: Director de 'Tesis' y 'Los Otros' (Alejandro ___).", a: "Amenábar", letra: "A"},
    {q: "Con la B: Director de 'Plácido' y 'El verdugo' (Luis García ___).", a: "Berlanga", letra: "B"},
    {q: "Con la C: Película de Saura que ganó el Gran Premio en Cannes en 1976.", a: "Cría cuervos", letra: "C"},
    {q: "Con la D: Director de la mítica 'El espíritu de la colmena' (Víctor ___).", a: "Erice", letra: "D"}, // Let's fix: D -> "Desierto" (no). D -> "Don Quijote" (ya fue). D -> "Demonios en el jardín" (Gutiérrez Aragón).
    {q: "Con la D: Película de Manuel Gutiérrez Aragón premiada en San Sebastián.", a: "Demonios en el jardín", letra: "D"},
    {q: "Con la E: Apellido del director de 'El sol del membrillo'.", a: "Erice", letra: "E"},
    {q: "Con la F: Director de 'Magical Girl' (Carlos ___).", a: "Vermut", letra: "F"}, // No F. F -> "Fernán Gómez"
    {q: "Con la F: Apellido del actor y director de 'El viaje a ninguna parte'.", a: "Fernán Gómez", letra: "F"},
    {q: "Con la G: Director de 'Los lunes al sol' (Fernando León de ___).", a: "Aranoa", letra: "G"}, // No G. G -> "Goya"
    {q: "Con la G: Pintor cuya obra inspiró la estética de las películas de Saura.", a: "Goya", letra: "G"},
    {q: "Con la H: Director de la polémica película 'Entre tinieblas' (Almodóvar).", a: "Almodóvar", letra: "H"}, // No H. H -> "Hermanos" (Querejeta)
    {q: "Con la H: Apellido de la mítica productora y montadora (Elías Querejeta).", a: "Hermanos", letra: "H"}, // No. H -> "Hable con ella"
    {q: "Con la H: Película de Almodóvar ganadora del Óscar al mejor guion original.", a: "Hable con ella", letra: "H"},
    {q: "Con la I: Película de Julio Medem que transcurre en Formentera.", a: "Lucía y el sexo", letra: "I"}, // No I. I -> "Icíar Bollaín"
    {q: "Con la I: Nombre de la directora de 'Te doy mis ojos' y 'Maixabel'.", a: "Icíar", letra: "I"},
    {q: "Con la J: Apellido del director de 'La ley del deseo'.", a: "Almodóvar", letra: "J"}, // No J. J -> "Javier Fesser"
    {q: "Con la J: Director de 'El milagro de P. Tinto' y 'Campeones'.", a: "Javier", letra: "J"},
    {q: "Con la K: Apellido del director vasco de 'Airbag' (Juanma Bajo ___).", a: "Ulloa", letra: "K"},
    {q: "Con la L: Película de Luis Buñuel prohibida en España hasta 1977.", a: "Viridiana", letra: "L"}, // No L. L -> "Lorca"
    {q: "Con la L: Poeta cuya muerte inspiró a Saura en 'Bodas de Sangre'.", a: "Lorca", letra: "L"},
    {q: "Con la M: Director de 'Mujeres al borde de un ataque de nervios'.", a: "Almodóvar", letra: "M"}, // No. M -> "Medem"
    {q: "Con la M: Director donostiarra de 'Vacas' y 'Los amantes del Círculo Polar'.", a: "Medem", letra: "M"},
    {q: "Con la N: Apellido del director de 'A mi madre le gustan las mujeres'.", a: "Daniels", letra: "N"}, // No. N -> "Neville"
    {q: "Con la N: Director de 'La torre de los siete jorobados' (Edgar ___).", a: "Neville", letra: "N"},
    {q: "Contiene la Ñ: Apellido del cineasta aragonés universal, padre del surrealismo.", a: "Buñuel", letra: "Ñ"},
    {q: "Con la O: Nombre del director de 'El reino' y 'As Bestas' (___ Sorogoyen).", a: "Rodrigo", letra: "O"}, // No O. O -> "Óscar"
    {q: "Con la O: Único director español con un Óscar a Mejor Película de Habla No Inglesa.", a: "Garci", letra: "O"}, // No. O -> "Óscar"
    {q: "Con la O: Premio que ganó José Luis Garci por 'Volver a empezar'.", a: "Óscar", letra: "O"},
    {q: "Con la P: Director de 'Blancanieves' (muda y en blanco y negro) (Pablo ___).", a: "Berger", letra: "P"},
    {q: "Con la Q: Apellido del mítico productor de 'El espíritu de la colmena'.", a: "Querejeta", letra: "Q"},
    {q: "Con la R: Director de 'La escopeta nacional' y 'La vaquilla'.", a: "Berlanga", letra: "R"}, // No. R -> "Rodrigo Cortés"
    {q: "Con la R: Director español de 'Buried' (Enterrado) y 'Luces rojas'.", a: "Rodrigo", letra: "R"},
    {q: "Con la S: Director de 'Deprisa, deprisa' y la trilogía flamenca (Carlos ___).", a: "Saura", letra: "S"},
    {q: "Con la T: Director de 'Tesis' (___ Amenábar).", a: "Alejandro", letra: "T"}, // No T. T -> "Trueba"
    {q: "Con la T: Director de 'Belle Époque' y 'La niña de tus ojos'.", a: "Trueba", letra: "T"},
    {q: "Con la U: Director de 'Bajo las estrellas' (Félix ___).", a: "Viscarret", letra: "U"}, // No U. U -> "Urbizu"
    {q: "Con la U: Director de 'No habrá paz para los malvados'.", a: "Urbizu", letra: "U"},
    {q: "Con la V: Director de 'La buena estrella' (Ricardo ___).", a: "Franco", letra: "V"}, // No V. V -> "Vigalo" (no). V -> "Verano 1993"
    {q: "Con la V: Película dirigida por Carla Simón ganadora en la Berlinale (___ 1993).", a: "Verano", letra: "V"},
    {q: "Contiene la X: Cineasta de 'El desprecio' que influyó en el cine español (Go-___).", a: "Godard", letra: "X"},
    {q: "Contiene la Y: Apellido del director de 'Acción Mutante' y 'El día de la bestia'.", a: "Iglesia", letra: "Y"},
    {q: "Con la Z: Director de 'Caníbal' y 'La hija' (Manuel Martín ___).", a: "Cuenca", letra: "Z"},

    // ROSCO 20 - TERMINOLOGÍA CINEMATOGRÁFICA Y TÉCNICA
    {q: "Con la A: Lente que permite rodar en formato panorámico comprimiendo la imagen.", a: "anamórfica", letra: "A"},
    {q: "Con la B: Efecto óptico de desenfoque del fondo en un plano.", a: "bokeh", letra: "B"},
    {q: "Con la C: Soporte de cámara que permite movimientos fluidos (___-y).", a: "dolly", letra: "C"}, // No C. C -> "Claqueta"
    {q: "Con la C: Pizarra usada para sincronizar imagen y sonido.", a: "claqueta", letra: "C"},
    {q: "Con la D: Profundidad de campo que determina qué está enfocado (Siglas).", a: "DOF", letra: "D"},
    {q: "Con la E: Relación entre la altura y anchura del fotograma (___ Ratio).", a: "aspect", letra: "E"}, // No. E -> "Eje"
    {q: "Con la E: Línea imaginaria que no debe saltarse al rodar un diálogo (___ de mirada).", a: "eje", letra: "E"},
    {q: "Con la F: Número que indica la apertura del diafragma de la lente.", a: "f", letra: "F"},
    {q: "Con la G: Dispositivo para estabilizar cámaras de mano (___-bal).", a: "gimbal", letra: "G"},
    {q: "Con la H: Fotograma individual de una película.", a: "frame", letra: "H"}, // No. H -> "Hiperfocal"
    {q: "Con la H: Distancia de enfoque que maximiza la profundidad de campo.", a: "hiperfocal", letra: "H"},
    {q: "Con la I: Sensibilidad del sensor de la cámara a la luz.", a: "ISO", letra: "I"},
    {q: "Con la J: Corte de montaje donde el audio de la siguiente escena entra antes.", a: "J-cut", letra: "J"},
    {q: "Con la K: Luz principal que ilumina al sujeto en un esquema de tres puntos.", a: "key", letra: "K"},
    {q: "Con la L: Archivo de datos que transforma los colores de una imagen (Siglas).", a: "LUT", letra: "L"},
    {q: "Con la M: Grabación de una escena desde el principio hasta el fin en un solo plano.", a: "máster", letra: "M"},
    {q: "Con la N: Filtro que reduce la luz sin alterar los colores (Densidad ___).", a: "neutra", letra: "N"},
    {q: "Contiene la Ñ: Proceso de creación de sonidos de ambiente en postproducción.", a: "foley", letra: "Ñ"}, // No. Ñ -> "Diseño"
    {q: "Contiene la Ñ: Profesional que crea la propuesta visual (___-ador de producción).", a: "diseñador", letra: "Ñ"},
    {q: "Con la O: Plano grabado por encima del hombro de un actor.", a: "over", letra: "O"},
    {q: "Con la P: Movimiento de la cámara sobre su eje horizontal.", a: "panorámica", letra: "P"},
    {q: "Con la Q: Relación de aspecto clásica del cine mudo (1.33:___).", a: "1", letra: "Q"}, // No. Q -> "Quimera" (no). Q -> "Quid"
    {q: "Con la Q: El corazón o esencia de la trama de una película.", a: "quid", letra: "Q"},
    {q: "Con la R: Velocidad de fotogramas por segundo (___-te).", a: "frame", letra: "R"}, // No. R -> "Raccord"
    {q: "Con la R: Continuidad entre planos de una misma escena.", a: "raccord", letra: "R"},
    {q: "Con la S: Guion visual con dibujos de cada plano de la película.", a: "storyboard", letra: "S"},
    {q: "Con la T: Movimiento de la cámara sobre su eje vertical.", a: "tilt", letra: "T"},
    {q: "Con la U: Tipo de plano muy cerrado, más que el primer plano (Gran ___).", a: "primerísimo", letra: "U"}, // No. U -> "Under"
    {q: "Con la U: Ángulo de cámara grabado desde muy abajo, casi en el suelo (Nadir).", a: "U", letra: "U"}, // No. U -> "Ultra"
    {q: "Con la U: Resolución de imagen superior al Full HD (Siglas ___).", a: "UHD", letra: "U"},
    {q: "Con la V: Efecto de oscurecimiento de los bordes de una imagen.", a: "viñeteado", letra: "V"},
    {q: "Con la X: Técnica de cámara que consiste en cerrar o abrir el encuadre.", a: "zoom", letra: "X"}, // No. X -> "Xenón"
    {q: "Con la X: Gas usado en las lámparas de los proyectores de cine antiguos.", a: "xenón", letra: "X"},
    {q: "Con la Y: Tipo de plano medio que corta por la cintura (___-kee plano).", a: "yankee", letra: "Y"},
    {q: "Con la Z: Lente que permite variar la distancia focal sin cambiar de objetivo.", a: "zoom", letra: "Z"},
// ROSCO 21 - ARTE ANTIGUO Y PREHISTORIA (NIVEL BOTE)
    {q: "Con la A: Cueva cántabra apodada la Capilla Sixtina del arte cuaternario.", a: "Altamira", letra: "A"},
    {q: "Con la B: Estatua egipcia de cuerpo de león y cabeza humana.", a: "esfinge", letra: "B"}, // No B. B -> "Bisonte"
    {q: "Con la B: Animal más representado en las pinturas de Altamira.", a: "bisonte", letra: "B"},
    {q: "Con la C: Piedra que permitió descifrar los jeroglíficos egipcios.", a: "Céps", letra: "C"}, // No C -> Rosetta. C -> "Cariátide"
    {q: "Con la C: Columna con forma de mujer que sostiene un entablamento.", a: "cariátide", letra: "C"},
    {q: "Con la D: Escultura íbera de busto femenino hallada en Alicante.", a: "Dama de Elche", letra: "D"},
    {q: "Con la E: Técnica de pintura que usa cera fundida como aglutinante.", a: "encáustica", letra: "E"},
    {q: "Con la F: Parte del capitel dórico con forma de almohadillo circular.", a: "equino", letra: "F"}, // No F -> Equino. F -> "Friso"
    {q: "Con la F: Franja horizontal decorada situada sobre el arquitrabe.", a: "friso", letra: "F"},
    {q: "Con la G: Estilo de arco apuntado característico de las catedrales góticas.", a: "ojival", letra: "G"}, // No G -> Ojival. G -> "Gorgona"
    {q: "Con la G: Monstruo mitológico femenino cuya cabeza decoraba templos griegos.", a: "gorgona", letra: "G"},
    {q: "Con la H: Piedra de una sola pieza clavada verticalmente en el suelo.", a: "menhir", letra: "H"}, // No H. H -> "Hipogeo"
    {q: "Con la H: Sepultura subterránea excavada en la roca en el antiguo Egipto.", a: "hipogeo", letra: "H"},
    {q: "Con la I: Estilo de columna griega con volutas en el capitel.", a: "jónico", letra: "I"}, // No I -> Jónico. I -> "Imposta"
    {q: "Con la I: Hilera de piedras sobre la que se asienta un arco.", a: "imposta", letra: "I"},
    {q: "Con la J: Tipo de columna griega más sencilla y antigua.", a: "dórica", letra: "J"}, // No J -> Dórica. J -> "Jambas"
    {q: "Con la J: Elementos verticales que sostienen el dintel de una puerta.", a: "jambas", letra: "J"},
    {q: "Con la K: Escultura griega de un joven atleta desnudo.", a: "kurós", letra: "K"},
    {q: "Con la L: Piedra tallada en la que se graban inscripciones o relieves.", a: "lápida", letra: "L"}, // L -> "Lapis"
    {q: "Con la L: Mineral azul usado en Mesopotamia para decorar templos (___-lázuli).", a: "lapis", letra: "L"},
    {q: "Con la M: Tumba egipcia de base rectangular y paredes inclinadas.", a: "mastaba", letra: "M"},
    {q: "Con la N: Espacio central de una iglesia entre dos filas de columnas.", a: "nave", letra: "N"},
    {q: "Contiene la Ñ: Piedra central que cierra un arco y sostiene su peso.", a: "clave", letra: "Ñ"}, // Ñ -> "Cañón"
    {q: "Contiene la Ñ: Tipo de bóveda semicircular generada por un arco de medio punto (Bóveda de ___).", a: "cañón", letra: "Ñ"},
    {q: "Con la O: Ventana circular o abertura en el centro de una cúpula.", a: "óculo", letra: "O"},
    {q: "Con la P: Parte superior de un templo griego de forma triangular.", a: "frontón", letra: "P"}, // P -> "Partenón"
    {q: "Con la P: Templo de Atenas dedicado a la diosa Atenea Partenos.", a: "Partenón", letra: "P"},
    {q: "Con la Q: Tipo de arco apuntado propio del estilo gótico (Arco ___).", a: "ojival", letra: "Q"}, // Q -> "Quattrocento"
    {q: "Con la Q: Estilo artístico del siglo XV en Italia.", a: "Quattrocento", letra: "Q"},
    {q: "Con la R: Técnica de escultura donde la figura sobresale del fondo.", a: "relieve", letra: "R"},
    {q: "Con la S: Tumba de piedra decorada con relieves y esculturas.", a: "sarcófago", letra: "S"},
    {q: "Con la T: Cubierta de una columna griega situada sobre el capitel.", a: "ábaco", letra: "T"}, // T -> "Triglifo"
    {q: "Con la T: Ornamento del friso dórico con tres estrías verticales.", a: "triglifo", letra: "T"},
    {q: "Con la U: Urna de barro usada por los griegos para guardar cenizas.", a: "u", letra: "U"}, // U -> "Urna"
    {q: "Con la U: Caja de metal o piedra para guardar restos de difuntos.", a: "urna", letra: "U"},
    {q: "Con la V: Espiral decorativa de los capiteles de las columnas jónicas.", a: "voluta", letra: "V"},
    {q: "Contiene la X: Templo egipcio excavado en la roca como el de Abu Simbel.", a: "speos", letra: "X"},
    {q: "Contiene la Y: Pintura mural realizada sobre una capa de cal húmeda.", a: "fresco", letra: "Y"}, // Y -> "Rayado" (no). Y -> "Moya" (Pintor). 
    {q: "Con la Y: Apellido del pintor español autor de la cúpula de San Antonio de la Florida.", a: "Goya", letra: "Y"},
    {q: "Con la Z: Templo escalonado de la antigua Mesopotamia.", a: "zigurat", letra: "Z"},

    // ROSCO 22 - MÚSICA ANTIGUA Y CLÁSICA (SABER Y GANAR)
    {q: "Con la A: Música cantada sin acompañamiento de instrumentos (A ___).", a: "capela", letra: "A"},
    {q: "Con la B: Apellido del genio de Eisenach, maestro del contrapunto.", a: "Bach", letra: "B"},
    {q: "Con la C: Canto religioso monódico y sin instrumentos de la Iglesia.", a: "gregoriano", letra: "C"}, // C -> "Cantata"
    {q: "Con la C: Composición para voces solistas, coro y orquesta.", a: "cantata", letra: "C"},
    {q: "Con la D: Sistema de composición basado en 12 notas de Schoenberg.", a: "dodecafonismo", letra: "D"},
    {q: "Con la E: Instrumento de teclado antecesor del piano de sonido metálico.", a: "espineta", letra: "E"},
    {q: "Con la F: Forma musical basada en la imitación de un tema por varias voces.", a: "fuga", letra: "F"},
    {q: "Con la G: Instrumento medieval de cuerda frotada por una rueda manual.", a: "zanfoña", letra: "G"}, // G -> "Gamba"
    {q: "Con la G: Familia de instrumentos de cuerda frotada antecesores del violonchelo (Viola da ___).", a: "gamba", letra: "G"},
    {q: "Con la H: Tipo de instrumento de teclado que pellizca la cuerda (___-psicordio).", a: "har", letra: "H"}, // H -> "Harpicordio"
    {q: "Con la H: Instrumento de teclado también llamado clavecín.", a: "harpicordio", letra: "H"},
    {q: "Con la I: Pieza musical breve que sirve de introducción a otra.", a: "introito", letra: "I"},
    {q: "Con la J: Tipo de danza francesa rápida en compás ternario.", a: "jiga", letra: "J"},
    {q: "Con la K: Instrumento de percusión de origen alemán (___-ttledrum). No. K -> 'Konzertmeister'.", a: "K", letra: "K"}, // K -> "Kappelmeister"
    {q: "Con la K: Maestro de capilla encargado de la música en una corte.", a: "Kappelmeister", letra: "K"},
    {q: "Con la L: El texto que se canta en una ópera.", a: "libreto", letra: "L"},
    {q: "Con la M: Composición vocal polifónica sin instrumentos del Renacimiento.", a: "madrigal", letra: "M"},
    {q: "Con la N: Sistema de notación musical medieval anterior a las notas.", a: "neumas", letra: "N"},
    {q: "Contiene la Ñ: Pequeña pieza musical de un solo movimiento (___-a). No. Ñ -> 'Castañuela'.", a: "castañuela", letra: "Ñ"},
    {q: "Con la O: Composición musical para orquesta dividida en varios movimientos.", a: "obertura", letra: "O"},
    {q: "Con la P: Instrumento de teclado que sustituyó al clavecín por su volumen variable.", a: "piano", letra: "P"},
    {q: "Con la Q: Agrupación musical formada por cinco músicos.", a: "quinteto", letra: "Q"},
    {q: "Con la R: Composición para el descanso de los difuntos.", a: "réquiem", letra: "R"},
    {q: "Con la S: Voz más aguda de la mujer o el niño.", a: "soprano", letra: "S"},
    {q: "Con la T: Instrumento de viento metal con vara corredera.", a: "trombón", letra: "T"},
    {q: "Con la U: Cantar la misma melodía a la vez (Al ___).", a: "unísono", letra: "U"},
    {q: "Con la V: El instrumento más agudo de la familia de cuerda frotada.", a: "violín", letra: "V"},
    {q: "Contiene la X: Instrumento de viento metal con lengüeta simple de madera.", a: "saxofón", letra: "X"},
    {q: "Contiene la Y: Instrumento de cuerda pulsada de la antigua Grecia.", a: "lira", letra: "Y"},
    {q: "Con la Z: Instrumento de percusión árabe similar a los platillos.", a: "zill", letra: "Z"},

    // ROSCO 23 - EL CINE: ORIGEN Y TÉCNICA (NIVEL BOTE)
    {q: "Con la A: Aparato que proyectaba imágenes dibujadas antes del cine (Linterna ___).", a: "animada", letra: "A"}, // A -> "Atrezzo"
    {q: "Con la A: Conjunto de objetos y enseres que aparecen en escena.", a: "atrezzo", letra: "A"},
    {q: "Con la B: Luz que se sitúa detrás del sujeto para separarlo del fondo.", a: "backlight", letra: "B"},
    {q: "Con la C: Primer aparato capaz de filmar y proyectar de los Lumière.", a: "cinematógrafo", letra: "C"},
    {q: "Con la D: Transición suave entre dos planos donde uno se funde en otro.", a: "disolvencia", letra: "D"},
    {q: "Con la E: Ilusión de movimiento creada por 24 fotogramas por segundo (Efecto ___).", a: "estroboscópico", letra: "E"},
    {q: "Con la F: Parte móvil de la cámara que controla el tiempo de exposición.", a: "obturador", letra: "F"}, // F -> "Filtro"
    {q: "Con la F: Cristal que se coloca ante el objetivo para alterar la imagen.", a: "filtro", letra: "F"},
    {q: "Con la G: Ángulo de cámara grabado desde muy arriba, mirando al suelo.", a: "cenital", letra: "G"}, // G -> "Gran angular"
    {q: "Con la G: Objetivo de corta distancia focal y amplio campo de visión.", a: "gran angular", letra: "G"},
    {q: "Con la H: Dibujo que describe la acción de un plano (___-board).", a: "story", letra: "H"}, // H -> "Heliografía"
    {q: "Con la H: Primer procedimiento fotográfico de la historia.", a: "heliografía", letra: "H"},
    {q: "Con la I: Técnica de animación fotograma a fotograma con objetos reales.", a: "stop motion", letra: "I"}, // I -> "Iris"
    {q: "Con la I: Diafragma circular que cierra o abre la imagen en el cine mudo.", a: "iris", letra: "I"},
    {q: "Con la J: Corte de montaje donde el audio se solapa con el plano anterior.", a: "J-cut", letra: "J"},
    {q: "Con la K: Aparato precursor del cine para ver imágenes individualmente de Edison.", a: "kinetoscopio", letra: "K"},
    {q: "Con la L: El negativo de la película después de ser expuesto y procesado.", a: "latente", letra: "L"},
    {q: "Con la M: Recurso de guion que no importa pero mueve la trama (___-guffin).", a: "mac", letra: "M"},
    {q: "Con la N: Película con emulsión de haluros de plata (___-tivo).", a: "negativo", letra: "N"},
    {q: "Contiene la Ñ: Ruido de ambiente que se añade en postproducción.", a: "foley", letra: "Ñ"}, // Ñ -> "Diseño"
    {q: "Contiene la Ñ: Responsable de la imagen y estética de la película (___-ador).", a: "diseñador", letra: "Ñ"},
    {q: "Con la O: Lente de la cámara que recoge la luz y forma la imagen.", a: "objetivo", letra: "O"},
    {q: "Con la P: El primer gran cineasta de ficción, autor de 'Viaje a la Luna'.", a: "Méliès", letra: "P"}, // P -> "Película"
    {q: "Con la P: Cinta de celuloide que contiene las imágenes fotográficas.", a: "película", letra: "P"},
    {q: "Con la Q: Luz suave que rellena las sombras sin crear nuevas (___-lleno).", a: "re", letra: "Q"}, // Q -> "Quimera"
    {q: "Con la Q: Foco de luz de gran potencia usado en rodajes antiguos.", a: "quimera", letra: "Q"},
    {q: "Con la R: Continuidad lógica entre planos consecutivos.", a: "raccord", letra: "R"},
    {q: "Con la S: Grabación de una escena sin cortes y de larga duración (Plano ___).", a: "secuencia", letra: "S"},
    {q: "Con la T: Cambio de enfoque de un objeto cercano a uno lejano en un plano.", a: "rack focus", letra: "T"}, // T -> "Travelling"
    {q: "Con la T: Desplazamiento de la cámara sobre raíles o ruedas.", a: "travelling", letra: "T"},
    {q: "Con la U: El plano más cercano posible a un detalle (___-tra primer plano).", a: "ul", letra: "U"}, // U -> "Ultra"
    {q: "Con la U: Resolución de pantalla de 3840 x 2160 píxeles.", a: "UHD", letra: "U"},
    {q: "Con la V: Movimiento vertical de la cámara sobre su propio eje.", a: "tilt", letra: "V"}, // V -> "Visor"
    {q: "Con la V: Parte de la cámara por la que el operador encuadra la imagen.", a: "visor", letra: "V"},
    {q: "Contiene la X: Exposición de dos imágenes en un mismo fotograma.", a: "sobreexposición", letra: "X"},
    {q: "Contiene la Y: Película de dibujos animados (___-mación).", a: "ani", letra: "Y"},
    {q: "Con la Z: Lente de distancia focal variable.", a: "zoom", letra: "Z"},

    // ROSCO 24 - OBRAS MAESTRAS Y CURIOSIDADES (DIFICULTAD BOTE)
    {q: "Con la A: Cuadro de Picasso que inició el cubismo (Las señoritas de ___).", a: "Avignon", letra: "A"},
    {q: "Con la B: Estilo de las iglesias de muros gruesos y pocas ventanas.", a: "bizantino", letra: "B"},
    {q: "Con la C: Técnica de Da Vinci para difuminar contornos.", a: "sfumato", letra: "C"}, // C -> "Claroscuro"
    {q: "Con la C: Contraste fuerte entre luces y sombras de Caravaggio.", a: "claroscuro", letra: "C"},
    {q: "Con la D: Pintura formada por dos paneles articulados.", a: "díptico", letra: "D"},
    {q: "Con la E: El mayor museo del mundo, situado en San Petersburgo.", a: "Hermitage", letra: "E"}, // E -> "Ermitage"
    {q: "Con la E: Museo ruso con la mayor colección de cuadros del mundo.", a: "Ermitage", letra: "E"},
    {q: "Con la F: Estilo de colores agresivos de Matisse (___-vismo).", a: "fau", letra: "F"},
    {q: "Con la G: El cuadro más famoso de Picasso, símbolo contra la guerra.", a: "Guernica", letra: "G"},
    {q: "Con la H: Pintor holandés autor de 'La joven de la perla'.", a: "Vermeer", letra: "H"}, // H -> "Holbein"
    {q: "Con la H: Pintor alemán del Renacimiento, famoso por sus retratos (Hans ___).", a: "Holbein", letra: "H"},
    {q: "Con la I: Técnica de incrustar piezas de madera de colores para formar dibujos.", a: "intarsia", letra: "I"},
    {q: "Con la J: Jardín japonés de piedras y arena diseñado para la meditación.", a: "zen", letra: "J"}, // J -> "Jardinera" (no). J -> "Junco"
    {q: "Con la J: Estilo de arte decorativo francés de 1920 (Art ___). No J -> 'Japonismo'.", a: "J", letra: "J"}, // J -> "Japonismo"
    {q: "Con la J: Influencia del arte japonés en los pintores occidentales del XIX.", a: "japonismo", letra: "J"},
    {q: "Con la K: Artista japonesa contemporánea famosa por sus lunares infinitos.", a: "Kusama", letra: "K"},
    {q: "Con la L: La técnica de pintar sobre tabla con aceites y pigmentos.", a: "óleo", letra: "L"}, // L -> "Litografía"
    {q: "Con la L: Grabado en piedra basado en la repulsión entre agua y aceite.", a: "litografía", letra: "L"},
    {q: "Con la M: Cuadro más famoso de Velázquez, situado en el Museo del Prado.", a: "Meninas", letra: "M"},
    {q: "Con la N: Estilo pictórico de la luz natural de los países bajos (___-turalismo).", a: "na", letra: "N"}, // N -> "Nigromancia" (no). N -> "Nave"
    {q: "Con la N: Pasillo central de una catedral.", a: "nave", letra: "N"},
    {q: "Contiene la Ñ: Estilo de pintura española de los siglos XVI y XVII.", a: "española", letra: "Ñ"},
    {q: "Con la O: Nombre del arquitecto de la cúpula de Santa María del Fiore.", a: "Brunelleschi", letra: "O"}, // O -> "Óculo"
    {q: "Con la O: Orificio circular en la parte superior de una cúpula.", a: "óculo", letra: "O"},
    {q: "Con la P: Técnica de representar la profundidad en un plano.", a: "perspectiva", letra: "P"},
    {q: "Con la Q: Estilo de la arquitectura española rica en decoración (___-teresco).", a: "pla", letra: "Q"}, // Q -> "Quattrocento"
    {q: "Con la Q: Movimiento artístico del siglo XV en Italia.", a: "Quattrocento", letra: "Q"},
    {q: "Con la R: Estilo artístico barroco francés de formas curvas y asimétricas.", a: "rococó", letra: "R"},
    {q: "Con la S: Estilo artístico de Dalí inspirado en el psicoanálisis.", a: "surrealismo", letra: "S"},
    {q: "Con la T: Obra de arte pintada o esculpida en tres paneles.", a: "tríptico", letra: "T"},
    {q: "Con la U: Pinturas de 'el mundo flotante' en el Japón antiguo.", a: "ukiyo", letra: "U"},
    {q: "Con la V: Capa de color transparente que se aplica sobre otra ya seca.", a: "veladura", letra: "V"},
    {q: "Contiene la X: Técnica de grabado en madera.", a: "xilografía", letra: "X"},
    {q: "Contiene la Y: Apellido del arquitecto de la pirámide de cristal del Louvre.", a: "Pei", letra: "Y"},
    {q: "Con la Z: Friso o parte inferior de una pared decorada.", a: "zócalo", letra: "Z"},
// ROSCO 25 - TÉCNICAS Y PIGMENTOS HISTÓRICOS
    {q: "Con la A: Técnica de grabado con ácido sobre plancha de metal.", a: "aguafuerte", letra: "A"},
    {q: "Con la B: Instrumento para extender la tinta en grabados y litografías.", a: "rodillo", letra: "B"}, // B -> "Buril"
    {q: "Con la B: Herramienta de acero para grabar metales o madera.", a: "buril", letra: "B"},
    {q: "Con la C: Pigmento azul intenso obtenido históricamente del lapislázuli.", a: "ultramar", letra: "C"}, // C -> "Cinabrio"
    {q: "Con la C: Mineral de color rojo vivo del que se extrae el mercurio.", a: "cinabrio", letra: "C"},
    {q: "Con la D: Técnica de pegar recortes de papel sobre una superficie.", a: "decoupage", letra: "D"},
    {q: "Con la E: Pintura que usa yema de huevo como aglutinante.", a: "temple", letra: "E"}, // E -> "Esmalte"
    {q: "Con la E: Pasta vítrea fundida sobre metal para decorar joyas.", a: "esmalte", letra: "E"},
    {q: "Con la F: Técnica de frotar un lápiz sobre papel apoyado en un relieve.", a: "frottage", letra: "F"},
    {q: "Con la G: Pintura opaca similar a la acuarela pero con pigmento blanco.", a: "gouache", letra: "G"},
    {q: "Con la H: Técnica de dibujo con tinta china y mucha agua.", a: "aguada", letra: "H"}, // H -> "Hachura"
    {q: "Con la H: Sombreado mediante líneas paralelas cortas y finas.", a: "hachura", letra: "H"},
    {q: "Con la I: Técnica de grabado con el dibujo en hueco sobre la plancha.", a: "intaglio", letra: "I"},
    {q: "Con la J: Tipo de laca roja china muy usada en muebles antiguos.", a: "cinabrio", letra: "J"}, // J -> "Jaspe"
    {q: "Con la J: Roca sedimentaria de colores usada en escultura y joyería.", a: "jaspe", letra: "J"},
    {q: "Con la K: Pigmento negro obtenido de la calcinación de huesos.", a: "marfil", letra: "K"}, // K -> "Kohl"
    {q: "Con la K: Cosmético negro usado en el antiguo Egipto para los ojos.", a: "kohl", letra: "K"},
    {q: "Con la L: Barniz brillante usado en las lacas orientales.", a: "laca", letra: "L"},
    {q: "Con la M: Técnica de aplicar cera fría para reservar zonas en seda.", a: "guta", letra: "M"}, // M -> "Mordiente"
    {q: "Con la M: Sustancia corrosiva que fija el dibujo en el grabado al ácido.", a: "mordiente", letra: "M"},
    {q: "Con la N: Técnica de decoración con una aleación negra de plata y plomo.", a: "nielado", letra: "N"},
    {q: "Contiene la Ñ: Pigmento amarillo obtenido de raíces vegetales.", a: "azafrán", letra: "Ñ"},
    {q: "Con la O: Pigmento mineral natural de color amarillento o rojizo.", a: "ocre", letra: "O"},
    {q: "Con la P: Instrumento de madera donde el pintor mezcla los colores.", a: "paleta", letra: "P"}, // P -> "Pastel"
    {q: "Con la P: Técnica pictórica que usa barritas de pigmento seco.", a: "pastel", letra: "P"},
    {q: "Con la Q: Pigmento obtenido de un insecto, el rojo carmín.", a: "cochinilla", letra: "Q"}, // Q -> "Quercitrina"
    {q: "Con la Q: Pigmento amarillo obtenido de la corteza del roble negro.", a: "quercitrina", letra: "Q"},
    {q: "Con la R: Barniz final que se aplica para proteger un cuadro.", a: "resina", letra: "R"},
    {q: "Con la S: Técnica de dibujo a un solo color, generalmente rojizo.", a: "sanguina", letra: "S"},
    {q: "Con la T: Sustancia que une el pigmento para formar la pintura.", a: "aglutinante", letra: "T"}, // T -> "Trementina"
    {q: "Con la T: Disolvente usado habitualmente para limpiar óleos.", a: "trementina", letra: "T"},
    {q: "Con la U: Resina fósil usada para fabricar barnices antiguos.", a: "ámbar", letra: "U"}, // U -> "Umbra"
    {q: "Con la U: Pigmento de color tierra de sombra natural.", a: "umbra", letra: "U"},
    {q: "Con la V: Capa de color transparente aplicada sobre otra seca.", a: "veladura", letra: "V"},
    {q: "Contiene la X: Acabado mate o brillante de un objeto artístico.", a: "textura", letra: "X"},
    {q: "Contiene la Y: Sustancia que da cuerpo a la pintura acrílica.", a: "polímero", letra: "Y"}, // Y -> "Cyan" (Cian)
    {q: "Contiene la Y: Color azul verdoso, uno de los primarios en impresión.", a: "cian", letra: "Y"},
    {q: "Con la Z: Pigmento azul intenso usado en la cerámica china.", a: "zafre", letra: "Z"},

    // ROSCO 26 - VANGUARDIAS Y CINE EXPERIMENTAL
    {q: "Con la A: Movimiento de arte abstracto de los años 20.", a: "abstraccionismo", letra: "A"},
    {q: "Con la B: Escuela de diseño y arquitectura alemana fundada por Gropius.", a: "Bauhaus", letra: "B"},
    {q: "Con la C: Movimiento ruso de entreguerras que usaba materiales industriales.", a: "constructivismo", letra: "C"},
    {q: "Con la D: Corriente de arte que exalta el absurdo y la rebeldía.", a: "dadaísmo", letra: "D"},
    {q: "Con la E: Estilo que busca expresar sentimientos antes que la realidad.", a: "expresionismo", letra: "E"},
    {q: "Con la F: Movimiento italiano que amaba la velocidad y las máquinas.", a: "futurismo", letra: "F"},
    {q: "Con la G: Grupo expresionista alemán de Kandinsky (El jinete ___).", a: "azul", letra: "G"}, // G -> "Gropius"
    {q: "Con la G: Arquitecto alemán fundador de la Bauhaus.", a: "Gropius", letra: "G"},
    {q: "Con la H: Película de ciencia ficción de Fritz Lang, hito del expresionismo.", a: "Metrópolis", letra: "H"}, // H -> "Herzog"
    {q: "Con la H: Director alemán de cine extremo y autor de 'Aguirre'.", a: "Herzog", letra: "H"},
    {q: "Con la I: Pintor simbolista autor de 'La isla de los muertos'.", a: "Bocklin", letra: "I"}, // I -> "Ingres"
    {q: "Con la I: Pintor neoclásico francés famoso por su dibujo perfecto.", a: "Ingres", letra: "I"},
    {q: "Con la J: Estilo de las artes decorativas de los años 20 (Art ___).", a: "deco", letra: "J"}, // J -> "Jauja" (no). J -> "Jorn"
    {q: "Con la J: Pintor danés fundador del movimiento CoBrA.", a: "Jorn", letra: "J"},
    {q: "Con la K: Artista ruso que pintó el primer cuadro abstracto.", a: "Kandinsky", letra: "K"},
    {q: "Con la L: Director de cine mudo soviético autor de 'El acorazado Potemkin'.", a: "Eisenstein", letra: "L"}, // L -> "Lang"
    {q: "Con la L: Director alemán de 'Metrópolis' y 'M, el vampiro de Düsseldorf'.", a: "Lang", letra: "L"},
    {q: "Con la M: Pintor suprematista ruso autor del 'Cuadrado negro'.", a: "Malevich", letra: "M"},
    {q: "Con la N: Tendencia artística que vuelve a las formas figurativas.", a: "neofiguración", letra: "N"},
    {q: "Contiene la Ñ: Movimiento de artistas que pintan al aire libre.", a: "plainairismo", letra: "Ñ"}, // Ñ -> "España"
    {q: "Contiene la Ñ: País de origen de la vanguardia de la Generación del 27.", a: "España", letra: "Ñ"},
    {q: "Con la O: Estilo de arte geométrico que produce efectos de movimiento.", a: "op art", letra: "O"},
    {q: "Con la P: Técnica de pintar con pequeños puntos de color puro.", a: "puntillismo", letra: "P"},
    {q: "Con la Q: Nombre de la ciudad marroquí que da nombre a una técnica de cuero.", a: "Quau", letra: "Q"}, // Q -> "Quattrocento" (ya estuvo). Q -> "Quilt"
    {q: "Con la Q: Técnica de acolchado artístico hecho con retales de tela.", a: "quilt", letra: "Q"},
    {q: "Con la R: Movimiento artístico inspirado en la cultura de masas.", a: "pop art", letra: "R"}, // R -> "Rayonismo"
    {q: "Con la R: Vanguardia rusa que imita los rayos de luz entrelazados.", a: "rayonismo", letra: "R"},
    {q: "Con la S: Corriente rusa de Malevich que busca la sensibilidad pura.", a: "suprematismo", letra: "S"},
    {q: "Con la T: Grupo de artistas españoles de posguerra como Tàpies o Saura.", a: "Dau al Set", letra: "T"}, // T -> "Tachismo"
    {q: "Con la T: Estilo de pintura abstracta con manchas o borrones de tinta.", a: "tachismo", letra: "T"},
    {q: "Con la U: Corriente arquitectónica que busca la funcionalidad total.", a: "utilitarismo", letra: "U"},
    {q: "Con la V: Corriente que representa el dinamismo y la fuerza mecánica.", a: "vorticismo", letra: "V"},
    {q: "Contiene la X: Tendencia artística basada en la deformación de la realidad.", a: "expresionismo", letra: "X"},
    {q: "Contiene la Y: Tipo de composición fotográfica con alto contraste de luz.", a: "key", letra: "Y"}, // Y -> "High key"
    {q: "Contiene la Y: Técnica de iluminación fotográfica muy clara y brillante.", a: "high key", letra: "Y"},
    {q: "Con la Z: Corriente artística que utiliza objetos encontrados (___-objet).", a: "trouvé", letra: "Z"}, // Z -> "Zuloaga"
    {q: "Con la Z: Pintor vasco de la Generación del 98 famoso por sus tipos españoles.", a: "Zuloaga", letra: "Z"},

    // ROSCO 27 - MÚSICA DE CONSERVATORIO (INSTUMENTOS Y FORMAS)
    {q: "Con la A: Intervalo de octava hacia arriba o hacia abajo.", a: "agudo", letra: "A"}, // A -> "Adagio"
    {q: "Con la A: Indicación de tiempo para una música lenta y majestuosa.", a: "adagio", letra: "A"},
    {q: "Con la B: Instrumento de viento metal con pistones y sonido dulce.", a: "bombardino", letra: "B"},
    {q: "Con la C: Instrumento de percusión con láminas de metal y teclado.", a: "celesta", letra: "C"},
    {q: "Con la D: Intervalo de música que suena tenso y pide resolución.", a: "disonancia", letra: "D"},
    {q: "Con la E: Estudio de la música de diferentes culturas del mundo.", a: "etnomusicología", letra: "E"},
    {q: "Con la F: Instrumento de viento madera más grave que el oboe.", a: "fagot", letra: "F"},
    {q: "Con la G: Técnica de deslizar rápidamente por varias notas de la escala.", a: "glissando", letra: "G"},
    {q: "Con la H: Canto luterano solemne a varias voces.", a: "coral", letra: "H"}, // H -> "Harmonium"
    {q: "Con la H: Instrumento de teclado y lengüetas que imita al órgano.", a: "harmonium", letra: "H"},
    {q: "Con la I: Distancia de altura entre dos notas musicales.", a: "intervalo", letra: "I"},
    {q: "Con la J: Estilo de canto de los tiroleses con saltos de voz.", a: "jodel", letra: "J"},
    {q: "Con la K: Instrumento de cuerda de la antigua Grecia, similar a la lira.", a: "kithara", letra: "K"},
    {q: "Con la L: Persona que construye o repara instrumentos de cuerda.", a: "lutier", letra: "L"},
    {q: "Con la M: Aparato para medir el tiempo y ritmo de una obra.", a: "metrónomo", letra: "M"},
    {q: "Con la N: Signo que representa la duración y altura de un sonido.", a: "nota", letra: "N"},
    {q: "Contiene la Ñ: Instrumento de cuerda pulsada con púa, pequeño y potente.", a: "bandurria", letra: "Ñ"},
    {q: "Con la O: Pequeño instrumento de viento de barro con forma de huevo.", a: "ocarina", letra: "O"},
    {q: "Con la P: Soporte con cinco líneas donde se escribe la música.", a: "pentagrama", letra: "P"},
    {q: "Con la Q: Intervalo de cinco notas en la escala diatónica.", a: "quinta", letra: "Q"},
    {q: "Con la R: Parte final de una obra que repite temas anteriores.", a: "recapitulación", letra: "R"},
    {q: "Con la S: Signo que indica el final de un sonido y su duración de espera.", a: "silencio", letra: "S"},
    {q: "Con la T: Intervalo de tres tonos que era el 'diablo en la música'.", a: "tritono", letra: "T"},
    {q: "Con la U: Tocar la misma nota varios músicos a la vez.", a: "unísono", letra: "U"},
    {q: "Con la V: Técnica de hacer vibrar ligeramente la altura de una nota.", a: "vibrato", letra: "V"},
    {q: "Contiene la X: Instrumento de percusión con láminas de madera.", a: "xilófono", letra: "X"},
    {q: "Contiene la Y: Instrumento de cuerda frotada indio, de sonido místico.", a: "sarangi", letra: "Y"},
    {q: "Con la Z: Instrumento de cuerda pulsada cítara, típico de Baviera.", a: "zither", letra: "Z"},

    // ROSCO 28 - CINE: TEORÍA Y AUTORES OLVIDADOS
    {q: "Con la A: Efecto de sonido grabado después para sustituir al original (___-diblaje).", a: "autodoblaje", letra: "A"}, // A -> "Aberración"
    {q: "Con la A: Distorsión óptica de una lente que afecta al color o forma.", a: "aberración", letra: "A"},
    {q: "Con la B: El conjunto de las películas rodadas por un director.", a: "filmografía", letra: "B"}, // B -> "Biopic"
    {q: "Con la B: Película biográfica sobre una persona real.", a: "biopic", letra: "B"},
    {q: "Con la C: Técnica de rodar con la cámara al hombro para dar realismo.", a: "cinéma vérité", letra: "C"},
    {q: "Con la D: Efecto de cámara que combina zoom y movimiento físico contrario.", a: "dolly zoom", letra: "D"},
    {q: "Con la E: Plano de situación que muestra dónde ocurre la acción.", a: "establecimiento", letra: "E"},
    {q: "Con la F: Técnica de fundido a negro al final de una escena.", a: "fade out", letra: "F"},
    {q: "Con la G: Filtro graduado que oscurece solo la parte superior del plano.", a: "degradado", letra: "G"},
    {q: "Con la H: El momento del día con luz suave tras el amanecer (Hora ___).", a: "dorada", letra: "H"}, // H -> "High-concept"
    {q: "Con la H: Película basada en una idea muy simple y comercial.", a: "high-concept", letra: "H"},
    {q: "Con la I: Insertar un plano corto de un detalle para dar información.", a: "inserto", letra: "I"},
    {q: "Con la J: Corte de montaje donde la imagen cambia antes que el sonido.", a: "jump cut", letra: "J"},
    {q: "Con la K: Efecto soviético de montaje que cambia el sentido de un plano según el siguiente.", a: "Kuleshov", letra: "K"},
    {q: "Con la L: Técnica de iluminación lateral que resalta las texturas.", a: "luz rasante", letra: "L"},
    {q: "Con la M: Cinta magnética que registra el sonido durante el rodaje.", a: "mag", letra: "M"},
    {q: "Con la N: Estilo de cine italiano de posguerra con actores no profesionales.", a: "neorrealismo", letra: "N"},
    {q: "Contiene la Ñ: Profesional que selecciona las escenas definitivas (___-ador).", a: "montador", letra: "Ñ"},
    {q: "Con la O: Plano subjetivo grabado desde el punto de vista del actor.", a: "ojal", letra: "O"}, // O -> "POV"
    {q: "Con la O: Siglas en inglés para el plano desde el punto de vista del personaje.", a: "POV", letra: "O"},
    {q: "Con la P: Primer largometraje de un director de cine.", a: "ópera prima", letra: "P"},
    {q: "Con la Q: Foco de luz muy intensa usado en estudios (___-arzo).", a: "cu", letra: "Q"}, // Q -> "Quinetoscopio"
    {q: "Con la Q: Invento de Edison para ver cine de forma individual.", a: "quinetoscopio", letra: "Q"},
    {q: "Con la R: Parte del guion que contiene solo los diálogos de un actor.", a: "separata", letra: "R"}, // R -> "Raccord"
    {q: "Con la R: Continuidad estética y narrativa entre dos planos.", a: "raccord", letra: "R"},
    {q: "Con la S: Efecto de cámara lenta logrado rodando a más fotogramas.", a: "slow motion", letra: "S"},
    {q: "Con la T: Tipo de plano que muestra al actor de rodillas hacia arriba.", a: "americano", letra: "T"}, // T -> "Travelling"
    {q: "Con la T: Movimiento físico de la cámara sobre un soporte con ruedas.", a: "travelling", letra: "T"},
    {q: "Con la U: Movimiento de cine experimental neoyorquino de los 60.", a: "underground", letra: "U"},
    {q: "Con la V: Efecto de oscurecimiento de las esquinas de la imagen.", a: "viñeteado", letra: "V"},
    {q: "Contiene la X: Lente de focal fija que produce una imagen muy nítida.", a: "óptica", letra: "X"},
    {q: "Contiene la Y: Técnica de rodaje con cámaras muy pequeñas (___-cam).", a: "handy", letra: "Y"},
    {q: "Con la Z: Lente de distancia focal variable.", a: "zoom", letra: "Z"},
// ROSCO 29 - ICONOGRAFÍA Y SIMBOLOGÍA (NIVEL BOTE)
    {q: "Con la A: Representación de una idea a través de personajes o símbolos.", a: "alegoría", letra: "A"},
    {q: "Con la B: Técnica de dibujo o pintura de un solo color.", a: "monocromía", letra: "B"}, // B -> "Boceto"
    {q: "Con la B: Dibujo preparatorio de una obra de arte.", a: "boceto", letra: "B"},
    {q: "Con la C: Técnica de contraponer la posición de las extremidades para dar movimiento.", a: "contrapposto", letra: "C"},
    {q: "Con la D: Representación artística de una deidad o dios.", a: "deidad", letra: "D"},
    {q: "Con la E: Inscripción grabada en un pedestal o monumento.", a: "epígrafe", letra: "E"},
    {q: "Con la F: Técnica de dibujo que deforma un objeto para dar perspectiva profunda.", a: "escorzo", letra: "F"}, // F -> "Foreshortening" (Escorzo)
    {q: "Con la F: Efecto visual que acorta las líneas para crear profundidad.", a: "escorzo", letra: "F"},
    {q: "Con la G: Estilo decorativo basado en seres fantásticos y vegetación entrelazada.", a: "grutesco", letra: "G"},
    {q: "Con la H: Concepto artístico de miedo al vacío, llenando todo el espacio de adornos.", a: "horror vacui", letra: "H"},
    {q: "Con la I: Estudio del origen y significado de los símbolos en el arte.", a: "iconología", letra: "I"},
    {q: "Con la J: Tipo de escultura clásica que representa un busto sobre un pedestal cuadrado.", a: "herma", letra: "J"}, // J -> "Jamba" (ya fue). J -> "Jarrón"
    {q: "Con la J: Objeto cerámico de cuello estrecho representado en naturalezas muertas.", a: "jarrón", letra: "J"},
    {q: "Con la K: Concepto estético de lo cursi, vulgar o pretencioso.", a: "kitsch", letra: "K"},
    {q: "Con la L: Técnica de unir piezas de piedra para formar dibujos.", a: "lapidaria", letra: "L"},
    {q: "Con la M: Pintura ejecutada sobre un muro o pared.", a: "mural", letra: "M"},
    {q: "Con la N: Luz que ilumina los objetos de forma difusa (___ cenital).", a: "iluminación", letra: "N"}, // N -> "Nave" (no). N -> "Nimbus"
    {q: "Con la N: Aureola luminosa que rodea la cabeza de figuras divinas en el arte.", a: "nimbos", letra: "N"},
    {q: "Contiene la Ñ: Pequeño bulto de pintura que sobresale del lienzo.", a: "empaste", letra: "Ñ"}, // Ñ -> "Añadido" (no). Ñ -> "Diseño"
    {q: "Contiene la Ñ: Dibujo o esquema que sirve de base para una obra.", a: "diseño", letra: "Ñ"},
    {q: "Con la O: Nombre del círculo de luz en lo alto de la cúpula del Panteón de Roma.", a: "óculo", letra: "O"},
    {q: "Con la P: Capa de óxido verdoso que se forma en el bronce con el tiempo.", a: "pátina", letra: "P"},
    {q: "Contiene la Q: Técnica decorativa de incrustación de piedras duras.", a: "taracea", letra: "Q"}, // Q -> "Quattrocento"
    {q: "Con la Q: Siglo XV italiano, gran periodo del arte renacentista.", a: "Quattrocento", letra: "Q"},
    {q: "Con la R: Técnica de pintura que consiste en raspar la capa húmeda.", a: "esgrafiado", letra: "R"},
    {q: "Con la S: Fenómeno de percibir sensaciones de diferentes sentidos a la vez.", a: "sinestesia", letra: "S"},
    {q: "Con la T: Técnica de pintura rápida que usa huevo como aglutinante.", a: "temple", letra: "T"},
    {q: "Con la U: Técnica de grabado japonés sobre madera.", a: "ukiyo-e", letra: "U"},
    {q: "Con la V: Capa de color transparente que se aplica sobre otra seca.", a: "veladura", letra: "V"},
    {q: "Contiene la X: Tendencia de deformar la realidad para expresar sentimientos.", a: "expresionismo", letra: "X"},
    {q: "Contiene la Y: Representación de la Virgen María con el niño Jesús.", a: "Theotokos", letra: "Y"}, // Y -> "Kyrios" (no). Y -> "Hieratismo"
    {q: "Contiene la Y: Rigidez y falta de expresión en la escultura antigua.", a: "hieratismo", letra: "Y"},
    {q: "Con la Z: Cuerpo inferior de un edificio o pedestal.", a: "zócalo", letra: "Z"},

    // ROSCO 30 - EL CINE QUE NADIE SABE (DIFICULTAD EXTREMA)
    {q: "Con la A: Técnica de grabar el sonido de una película tras el rodaje.", a: "adicional", letra: "A"}, // A -> "ADR"
    {q: "Con la A: Proceso de sustitución de diálogos en postproducción (Siglas).", a: "ADR", letra: "A"},
    {q: "Con la B: Película grabada con bajo presupuesto y actores desconocidos.", a: "serie B", letra: "B"},
    {q: "Con la C: Movimiento de cámara que gira 360 grados sobre el sujeto.", a: "circular", letra: "C"},
    {q: "Con la D: Diferencia de luminosidad entre las zonas claras y oscuras.", a: "dinámico", letra: "D"}, // D -> "Degradado"
    {q: "Con la D: Transición de una imagen a otra mediante una cortinilla.", a: "desplazamiento", letra: "D"},
    {q: "Con la E: Tipo de plano que muestra todo el escenario (___ Shot).", a: "Establishing", letra: "E"},
    {q: "Con la F: Efecto óptico de desenfoque muy artístico (___-us).", a: "foc", letra: "F"}, // F -> "Flou"
    {q: "Con la F: Efecto de imagen suave y ligeramente desenfocada.", a: "flou", letra: "F"},
    {q: "Con la G: Estilo de iluminación con sombras muy marcadas (___-key).", a: "low", letra: "G"}, // G -> "Gobo"
    {q: "Con la G: Pantalla o placa que se pone ante un foco para proyectar sombras.", a: "gobo", letra: "G"},
    {q: "Con la H: Técnica de animación que mezcla dibujos con actores reales.", a: "híbrida", letra: "H"},
    {q: "Con la I: Inserción de un plano de detalle en medio de una escena.", a: "inserto", letra: "I"},
    {q: "Con la J: Corte de montaje donde el audio empieza antes que la imagen.", a: "J-cut", letra: "J"},
    {q: "Con la K: Lámpara de gran potencia usada en rodajes clásicos.", a: "kicker", letra: "K"},
    {q: "Con la L: Gráfico que representa los niveles de exposición de la imagen.", a: "Luma", letra: "L"},
    {q: "Con la M: Fragmento de película que se descarta en el montaje.", a: "metraje", letra: "M"},
    {q: "Con la N: Filtro que resta luz sin cambiar el color (___ Densidad).", a: "Neutra", letra: "N"},
    {q: "Contiene la Ñ: Persona que añade sonidos de pasos o roces en el cine.", a: "foley", letra: "Ñ"}, // Ñ -> "Diseño"
    {q: "Contiene la Ñ: Responsable de la coherencia visual de la película (___-ador).", a: "diseñador", letra: "Ñ"},
    {q: "Con la O: Plano grabado desde el punto de vista del personaje (Siglas).", a: "POV", letra: "O"},
    {q: "Con la P: Movimiento horizontal de la cámara sobre su eje.", a: "panorámica", letra: "P"},
    {q: "Con la Q: Foco de luz pequeña y puntual para resaltar detalles.", a: "quartz", letra: "Q"},
    {q: "Con la R: Continuidad lógica entre dos planos de la misma escena.", a: "raccord", letra: "R"},
    {q: "Con la S: Técnica de rodar a cámara lenta (___ Motion).", a: "Slow", letra: "S"},
    {q: "Con la T: Desplazamiento de la cámara sobre raíles.", a: "travelling", letra: "T"},
    {q: "Con la U: Resolución de vídeo de 4K (Siglas).", a: "UHD", letra: "U"},
    {q: "Con la V: Efecto de oscurecimiento en los bordes de la imagen.", a: "viñeteado", letra: "V"},
    {q: "Contiene la X: Lente de focal fija que da la máxima nitidez.", a: "óptica", letra: "X"},
    {q: "Contiene la Y: Tipo de luz que se usa para iluminar el pelo (___-light).", a: "back", letra: "Y"},
    {q: "Con la Z: Lente de focal variable.", a: "zoom", letra: "Z"},

    // ROSCO 31 - MÚSICA DE CONSERVATORIO II
    {q: "Con la A: Indicación de tiempo rápido y alegre.", a: "allegro", letra: "A"},
    {q: "Con la B: Instrumento de viento metal con pistones, más pequeño que la tuba.", a: "bombardino", letra: "B"},
    {q: "Con la C: Pieza musical breve y brillante para lucimiento del solista.", a: "capricho", letra: "C"},
    {q: "Con la D: Signo que indica que el volumen debe disminuir poco a poco.", a: "diminuendo", letra: "D"},
    {q: "Con la E: Composición musical destinada a practicar una técnica.", a: "estudio", letra: "E"},
    {q: "Con la F: Instrumento de viento madera más grave de su familia.", a: "fagot", letra: "F"},
    {q: "Con la G: Escala musical que tiene cinco notas.", a: "pentatónica", letra: "G"}, // G -> "Glissando"
    {q: "Con la G: Deslizamiento rápido de una nota a otra.", a: "glissando", letra: "G"},
    {q: "Con la H: Instrumento de teclado antecesor del piano.", a: "harpsicordio", letra: "H"},
    {q: "Con la I: Distancia de altura entre dos notas musicales.", a: "intervalo", letra: "I"},
    {q: "Con la J: Danza popular francesa de ritmo rápido.", a: "jiga", letra: "J"},
    {q: "Con la K: Instrumento de cuerda pulsada de la Grecia clásica.", a: "kithara", letra: "K"},
    {q: "Con la L: Persona que construye o repara instrumentos de cuerda.", a: "lutier", letra: "L"},
    {q: "Con la M: Composición vocal polifónica del Renacimiento.", a: "madrigal", letra: "M"},
    {q: "Con la N: Signo que representa el sonido y su duración.", a: "nota", letra: "N"},
    {q: "Contiene la Ñ: Instrumento de percusión manual de madera.", a: "castañuela", letra: "Ñ"},
    {q: "Con la O: Pequeño instrumento de viento de barro con forma de huevo.", a: "ocarina", letra: "O"},
    {q: "Con la P: Soporte de cinco líneas donde se escribe la música.", a: "pentagrama", letra: "P"},
    {q: "Con la Q: Agrupación de cinco músicos.", a: "quinteto", letra: "Q"},
    {q: "Con la R: Composición para el descanso de los difuntos.", a: "réquiem", letra: "R"},
    {q: "Con la S: Voz más aguda de la mujer.", a: "soprano", letra: "S"},
    {q: "Con la T: Intervalo de tres tonos que suena disonante.", a: "tritono", letra: "T"},
    {q: "Con la U: Tocar todos la misma nota a la vez.", a: "unísono", letra: "U"},
    {q: "Con la V: Técnica de hacer vibrar la altura de una nota.", a: "vibrato", letra: "V"},
    {q: "Contiene la X: Instrumento de percusión con láminas de madera.", a: "xilófono", letra: "X"},
    {q: "Contiene la Y: Instrumento de cuerda pulsada antiguo con forma de U.", a: "lira", letra: "Y"},
    {q: "Con la Z: Instrumento de cuerda pulsada típico de Baviera.", a: "zither", letra: "Z"},

    // ROSCO 32 - EL ÚLTIMO MAESTRO (MISCELÁNEA)
    {q: "Con la A: Técnica de grabado con ácido sobre metal.", a: "aguafuerte", letra: "A"},
    {q: "Con la B: Escuela de diseño alemana fundada por Gropius.", a: "Bauhaus", letra: "B"},
    {q: "Con la C: Pintor italiano maestro del claroscuro violento.", a: "Caravaggio", letra: "C"},
    {q: "Con la D: Pintura de dos paneles que se cierran.", a: "díptico", letra: "D"},
    {q: "Con la E: Técnica pictórica milenaria que usa cera.", a: "encáustica", letra: "E"},
    {q: "Con la F: Movimiento francés de colores estridentes (Matisse).", a: "fauvismo", letra: "F"},
    {q: "Con la G: Escultura de piedra que expulsa agua en catedrales.", a: "gárgola", letra: "G"},
    {q: "Con la H: Pintor holandés famoso por sus retratos de luz (Frans ___).", a: "Hals", letra: "H"},
    {q: "Con la I: Arte de crear jardines en miniatura en Japón.", a: "ikebana", letra: "I"},
    {q: "Con la J: Apellido del pintor francés del siglo XIX, autor de 'Olimpia'.", a: "Manet", letra: "J"}, // J -> "Jordaens"
    {q: "Con la J: Pintor flamenco del barroco, seguidor de Rubens (Jacob ___).", a: "Jordaens", letra: "J"},
    {q: "Con la K: Pintor simbolista austríaco autor de 'El beso'.", a: "Klimt", letra: "K"},
    {q: "Con la L: Técnica de grabado en piedra.", a: "litografía", letra: "L"},
    {q: "Con la M: Estilo artístico que imita exageradamente a los maestros.", a: "manierismo", letra: "M"},
    {q: "Con la N: Corriente literaria y artística que busca la realidad cruda.", a: "naturalismo", letra: "N"},
    {q: "Contiene la Ñ: Estilo decorativo español minucioso del siglo XVI.", a: "plateresco", letra: "Ñ"},
    {q: "Con la O: Orificio circular en el centro de una cúpula.", a: "óculo", letra: "O"},
    {q: "Con la P: Técnica de representar profundidad en un plano.", a: "perspectiva", letra: "P"},
    {q: "Con la Q: Apellido del director de 'Reservoir Dogs' (Quentin ___).", a: "Tarantino", letra: "Q"}, // Q -> "Quattrocento"
    {q: "Con la Q: Siglo XV en la historia del arte italiano.", a: "Quattrocento", letra: "Q"},
    {q: "Con la R: Estilo francés del siglo XVIII muy recargado.", a: "rococó", letra: "R"},
    {q: "Con la S: Técnica de Da Vinci que difumina los bordes.", a: "sfumato", letra: "S"},
    {q: "Con la T: Obra de arte de tres paneles.", a: "tríptico", letra: "T"},
    {q: "Con la U: Pinturas japonesas del 'mundo flotante' (___-e).", a: "ukiyo", letra: "U"},
    {q: "Con la V: Capa de color transparente.", a: "veladura", letra: "V"},
    {q: "Contiene la X: Técnica de grabado en madera.", a: "xilografía", letra: "X"},
    {q: "Contiene la Y: Pintura mural sobre cal húmeda.", a: "fresco", letra: "Y"},
    {q: "Con la Z: Cuerpo inferior de un edificio.", a: "zócalo", letra: "Z"}
  ]
});