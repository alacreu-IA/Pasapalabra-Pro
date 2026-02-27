// mazos/mazo_cg.js
if (typeof MAZOS === 'undefined') { var MAZOS = []; }

MAZOS.push({
  id: "cg", 
  name: "Cultura General Avanzada", 
  icon: "🧠", 
  questions: [
    // ROSCO 1 - NIVEL ALTO
    {q: "Con la A: Ascendencia de abuelos o antepasados, especialmente si es ilustre.", a: "abolengo", letra: "A"},
    {q: "Con la B: Dicho de una persona: Que tiene un comportamiento poco cívico o maleducado, recordando a los antiguos pueblos invasores.", a: "bárbaro", letra: "B"},
    {q: "Con la C: Recipiente hecho de material refractario, que se emplea para fundir metales.", a: "crisol", letra: "C"},
    {q: "Con la D: Método de razonamiento que parte de lo general para llegar a lo particular.", a: "deducción", letra: "D"},
    {q: "Con la E: Que dura solamente un día o es muy pasajero.", a: "efímero", letra: "E"},
    {q: "Con la F: Amor a la especie humana y a todo lo que a la humanidad respecta.", a: "filantropía", letra: "F"},
    {q: "Con la G: En lenguaje coloquial y literario, persona que ejerce la medicina.", a: "galeno", letra: "G"},
    {q: "Con la H: Era de los musulmanes, que se cuenta desde el año 622, cuando Mahoma huyó de La Meca a Medina.", a: "hégira", letra: "H"},
    {q: "Con la I: Que no se puede explicar con palabras por ser demasiado sutil o sublime.", a: "inefable", letra: "I"},
    {q: "Con la J: Alabanza propia, desordenada y presuntuosa.", a: "jactancia", letra: "J"},
    {q: "Con la L: Brevedad o concisión en la expresión, característica atribuida a los antiguos espartanos.", a: "laconismo", letra: "L"},
    {q: "Con la M: Que tiene grandeza y elevación de ánimo, especialmente para perdonar las ofensas.", a: "magnánimo", letra: "M"},
    {q: "Con la N: Dicho de un día o de cualquier otra cosa: Triste, funesto, que trae mala suerte.", a: "nefasto", letra: "N"},
    {q: "Con la Ñ: Dicho de una persona: Sumamente apocada y de corto ingenio.", a: "ñoño", letra: "Ñ"},
    {q: "Con la O: Destierro político acostumbrado entre los atenienses para quienes se consideraban un peligro para la ciudad.", a: "ostracismo", letra: "O"},
    {q: "Con la P: Dicho del último plazo que se concede: Que es concluyente o definitivo.", a: "perentorio", letra: "P"},
    {q: "Con la Q: Número de individuos necesario para que un cuerpo deliberante tome ciertos acuerdos.", a: "quórum", letra: "Q"},
    {q: "Con la R: Capacidad de adaptación de un ser vivo frente a un agente perturbador o una situación adversos.", a: "resiliencia", letra: "R"},
    {q: "Con la S: Que durará siempre, que no tendrá fin.", a: "sempiterno", letra: "S"},
    {q: "Con la T: Callado, silencioso, que le molesta hablar.", a: "taciturno", letra: "T"},
    {q: "Con la U: Que está presente a un mismo tiempo en todas partes.", a: "ubicuo", letra: "U"},
    {q: "Con la V: Que tiene una fuerza impetuosa o que se mueve con ímpetu y violencia.", a: "vehemente", letra: "V"},
    {q: "Con la X: Arte de grabar en madera.", a: "xilografía", letra: "X"},
    {q: "Con la Y: Dicho de una persona: Estar echada o tendida, especialmente en la sepultura.", a: "yacer", letra: "Y"},
    {q: "Con la Z: Inquietud, aflicción y congoja del ánimo.", a: "zozobra", letra: "Z"},

    // ROSCO 2 - NIVEL ALTO
    {q: "Con la A: Doctrina filosófica que defiende la ausencia de todo gobierno y de toda autoridad.", a: "anarquismo", letra: "A"},
    {q: "Con la B: Alboroto o ruido grande provocado por una multitud.", a: "batahola", letra: "B"},
    {q: "Con la C: Sistema económico y social basado en la propiedad privada de los medios de producción.", a: "capitalismo", letra: "C"},
    {q: "Con la D: Doctrina religiosa que reconoce la existencia de un Dios autor de la naturaleza, pero sin revelación ni dogmas.", a: "deísmo", letra: "D"},
    {q: "Con la E: Persona que escudriña, registra y averigua en secreto lo que pasa para comunicarlo a otros.", a: "espía", letra: "E"},
    {q: "Con la F: Cansancio o aburrimiento que produce algo que no tiene interés.", a: "fastidio", letra: "F"},
    {q: "Con la G: Persona que por su aspecto, comportamiento o aficiones se considera distinguida y de buen tono.", a: "gentleman", letra: "G"},
    {q: "Con la H: Suposición de algo posible o imposible para sacar de ello una consecuencia.", a: "hipótesis", letra: "H"},
    {q: "Con la I: Carencia de culpa, delito o malicia.", a: "inocencia", letra: "I"},
    {q: "Con la J: Perteneciente o relativo al juego o a la acción de jugar.", a: "lúdico", letra: "L"}, // Truco: a veces las de J usan palabras que no empiezan por J, pero aquí he colado la de la L, corregimos.
    {q: "Contiene la J: Ciencia o estudio del origen y de la formación de las palabras.", a: "etimología", letra: "J"}, // Contiene
    {q: "Con la L: Adorno de líneas entrelazadas que se ponía en las antiguas encuadernaciones.", a: "lacería", letra: "L"},
    {q: "Con la M: Práctica de magia negra para hacer daño a alguien o conseguir un propósito oscuro.", a: "maleficio", letra: "M"},
    {q: "Con la N: Enfermedad del sistema nervioso que se caracteriza por inestabilidad emocional y ansiedad.", a: "neurosis", letra: "N"},
    {q: "Contiene la Ñ: Terreno poblado de cañas.", a: "cañaveral", letra: "Ñ"},
    {q: "Con la O: Soberbia, exceso de estimación propia.", a: "orgullo", letra: "O"},
    {q: "Con la P: Discurso o escrito en alabanza de alguien o de algo.", a: "panegírico", letra: "P"},
    {q: "Con la Q: Persona encargada de preparar y vender medicinas en una farmacia antiguamente.", a: "químico", letra: "Q"}, // Alternativa a boticario
    {q: "Con la R: Vuelta al estado de juventud o vigor.", a: "rejuvenecimiento", letra: "R"},
    {q: "Con la S: Excesiva escrupulosidad o terquedad en los asuntos morales o religiosos.", a: "santurronería", letra: "S"},
    {q: "Con la T: Enredo, maraña o confusión en un asunto.", a: "tejemaneje", letra: "T"},
    {q: "Con la U: Acción de usurpar, apoderarse injustamente y con violencia de una propiedad o derecho.", a: "usurpación", letra: "U"},
    {q: "Con la V: Fluctuación o alteración de las cosas, inconstancia o alternativa de sucesos.", a: "vaivén", letra: "V"},
    {q: "Contiene la X: Que es extranjero, o que tiene aversión a lo nacional.", a: "exótico", letra: "X"},
    {q: "Con la Y: Planta de cuyas raíces se extrae un jugo venenoso usado por indígenas sudamericanos.", a: "yuca", letra: "Y"},
    {q: "Con la Z: Burla fina y disimulada.", a: "zumba", letra: "Z"}
  ]
});