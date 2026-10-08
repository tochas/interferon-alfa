import type {ProteinConfig} from '../types';
export const interferon:ProteinConfig={
  "id": "interferon",
  "name": "Interferón alfa",
  "species": "Homo sapiens",
  "type": "Citocina · interferón tipo I (α2a)",
  "enabled": true,
  "pdb": "1ITF",
  "assembly": 1,
  "models": {
    "monomer": "/models/ifn-alpha2a.pdb",
    "binary": "/models/ifn-ifnar2.pdb",
    "complex": "/models/ifn-receptors.pdb"
  },
  "chains": [
    {
      "id": "A",
      "sequence": "CDLPQTHSLGSRRTLMLLAQMRKISLFSCLKDRHDFGFPQEEFGNQFQKAETIPVLHEMIQQIFNLFSTKDSSAAWDETLLDKFYTELYQQLNDLEACVIQGVGVTETPLMKEDSILAVRKYFQRITLYLKEKKYSPCAWEVVRAEIMRSFSLSTNLQESLRSKE",
      "color": "#ff998f"
    }
  ],
  "chainRoles": {
    "A": "A"
  },
  "secondaryAnnotations": [
    {
      "chains": [
        "A"
      ],
      "from": 10,
      "to": 21,
      "type": "h"
    },
    {
      "chains": [
        "A"
      ],
      "from": 40,
      "to": 43,
      "type": "h"
    },
    {
      "chains": [
        "A"
      ],
      "from": 53,
      "to": 68,
      "type": "h"
    },
    {
      "chains": [
        "A"
      ],
      "from": 70,
      "to": 75,
      "type": "h"
    },
    {
      "chains": [
        "A"
      ],
      "from": 78,
      "to": 100,
      "type": "h"
    },
    {
      "chains": [
        "A"
      ],
      "from": 110,
      "to": 132,
      "type": "h"
    },
    {
      "chains": [
        "A"
      ],
      "from": 137,
      "to": 157,
      "type": "h"
    }
  ],
  "levels": [
    {
      "id": "primary",
      "title": "Primaria",
      "text": "165 aminoácidos, numerados desde la proteína madura. Cys1, Cys29, Cys98 y Cys138 conectan secuencia y espacio.",
      "applicable": true,
      "selection": []
    },
    {
      "id": "secondary",
      "title": "Secundaria",
      "text": "Cinco regiones helicoidales principales A–E. Registros HELIX de 1ITF: α en 10–21, 53–68, 70–75, 78–100 y 137–157; clase 3₁₀ en 40–43 y 110–132. Las cintas agrupan visualmente ambas clases. Sin láminas β en IFN.",
      "applicable": true,
      "selection": []
    },
    {
      "id": "tertiary",
      "title": "Terciaria",
      "text": "Una sola cadena plegada; dos disulfuros enlazan regiones distantes. El modelo 1 de RMN es un conformero experimental, no una forma rígida única.",
      "applicable": true,
      "selection": []
    },
    {
      "id": "quaternary",
      "title": "Cuaternaria",
      "text": "No se atribuye un oligómero propio a la forma monomérica estudiada. El complejo heterólogo IFN–IFNAR1–IFNAR2 se presenta en Organización.",
      "applicable": false,
      "selection": []
    }
  ],
  "bridges": [
    [
      "A1",
      "A98"
    ],
    [
      "A29",
      "A138"
    ]
  ],
  "regions": [
    {
      "name": "Reconocimiento de IFNAR2",
      "residues": [
        "A33",
        "A149"
      ],
      "meaning": "Arg33 y Arg149: ejemplos sustentados por estructura y mutagénesis; no toda la interfaz.",
      "source": "receptor"
    },
    {
      "name": "Región relacionada con IFNAR1",
      "residues": [
        "A57",
        "A58",
        "A61"
      ],
      "meaning": "His57/Glu58/Gln61 en α2a; sustituciones YNS en el complejo 3SE3.",
      "source": "receptor"
    }
  ],
  "functionalGroups": [
    {
      "name": "Disulfuro",
      "residues": [
        "A1",
        "A29",
        "A98",
        "A138"
      ],
      "text": "El azufre de esta cisteína está enlazado al de otra: un puente S–S covalente intracadena."
    },
    {
      "name": "Guanidinio",
      "residues": [
        "A33",
        "A149"
      ],
      "text": "La cadena lateral de arginina aporta un grupo guanidinio. Los estudios de unión identifican esta posición como relevante para IFNAR2."
    },
    {
      "name": "Amina de lisina",
      "residues": [
        "A23"
      ],
      "text": "Lys23 muestra una amina lateral real. Es un ejemplo del grupo químico, no una asignación del sitio exacto de PEG del producto farmacéutico."
    }
  ],
  "function": "IFNAR → JAK1/TYK2 → STAT1/STAT2 + IRF9 → regulación de genes. Esquema canónico simplificado, no una película molecular.",
  "interactions": [
    "IFNAR1",
    "IFNAR2"
  ],
  "application": {
    "name": "Peginterferón alfa-2a",
    "steps": [
      {
        "title": "Proteína + PEG",
        "text": "Una proteína α2a recombinante se conjuga con PEG ramificado. El producto no es idéntico al IFN sin modificar de 1ITF.",
        "icon": "①"
      },
      {
        "title": "Formulación y jeringa",
        "text": "Una solución farmacéutica conserva el conjugado y un dispositivo permite administrarlo por vía subcutánea.",
        "icon": "②"
      },
      {
        "title": "Absorción y exposición",
        "text": "Desde el tejido subcutáneo se absorbe y distribuye. PEG modifica la exposición y eliminación; no se muestra una escisión obligatoria del polímero.",
        "icon": "③"
      },
      {
        "title": "Reconocimiento IFNAR",
        "text": "La parte proteica permite interacciones con IFNAR1 e IFNAR2. La PEGilación puede reducir la actividad específica in vitro.",
        "icon": "④"
      },
      {
        "title": "Señal JAK–STAT",
        "text": "Las cinasas asociadas transmiten la señal; STAT1, STAT2 e IRF9 integran la respuesta canónica.",
        "icon": "⑤"
      },
      {
        "title": "Respuesta celular",
        "text": "Cambia la expresión de genes. El efecto terapéutico depende de la enfermedad y el paciente; no se promete curación.",
        "icon": "⑥"
      }
    ],
    "sourceIds": [
      "drug",
      "peg",
      "hcv"
    ]
  },
  "stations": [
    {
      "id": "identity",
      "title": "Una señal.\nMuchas defensas.",
      "kicker": "01 / IDENTIDAD",
      "text": "El interferón alfa es una familia de citocinas de tipo I. Aquí exploramos IFN-α2a humano: una cadena que comunica un estado de alerta a otras células.",
      "detail": "No es un anticuerpo ni una enzima antiviral. La sala utiliza IFN-α2a, correspondiente a la proteína madura del gen IFNA2 (UniProt P01563). El precursor tiene 188 aminoácidos y pierde un péptido señal de 23. El modelo 1ITF es una proteína recombinante humana estudiada por RMN.",
      "sources": [
        "sheet",
        "structure"
      ],
      "focus": "",
      "organization": "monomer",
      "audio": "intro"
    },
    {
      "id": "chain",
      "title": "165 posiciones.\nUna sola cadena.",
      "kicker": "02 / SECUENCIA",
      "text": "Cada posición aporta un grupo químico al plegamiento. Recorre la secuencia y busca las cuatro cisteínas: 1, 29, 98 y 138.",
      "detail": "La numeración corresponde a la proteína madura, no al precursor. La secuencia de 1ITF tiene Lys23, característica de α2a; α2b tiene Arg23. Seleccionar una posición resalta sus átomos reales y conecta la lista de letras con el espacio.",
      "sources": [
        "sheet",
        "structure"
      ],
      "focus": "A",
      "organization": "monomer",
      "audio": "chains"
    },
    {
      "id": "structure",
      "title": "De la secuencia\na la estructura",
      "kicker": "03 / NIVELES ESTRUCTURALES",
      "text": "El plegamiento reúne regiones distantes. Sus hélices y dos enlaces disulfuro sostienen superficies capaces de reconocer receptores.",
      "detail": "La literatura describe cinco regiones helicoidales principales A–E. Los registros HELIX de 1ITF subdividen algunos segmentos y contienen clases alfa y 3₁₀. El visor dibuja cintas helicoidales para ambos y el panel distingue su anotación. No se asignan láminas beta al interferón. La forma aislada estudiada es monomérica; el complejo receptor se explora por separado.",
      "sources": [
        "structure"
      ],
      "focus": "secondary",
      "organization": "monomer",
      "audio": "chains"
    },
    {
      "id": "bridges",
      "title": "Encuentra sus\ndos conexiones.",
      "kicker": "04 / PUENTES DISULFURO",
      "text": "Cuatro cisteínas se emparejan dentro de la misma cadena. ¿Puedes identificar los enlaces que estabilizan su forma?",
      "detail": "Cys1–Cys98 y Cys29–Cys138 enlazan átomos de azufre SG. En el conformero 1 de 1ITF, ambas distancias S–S son aproximadamente 2,02 Å. Son enlaces covalentes intracadena: no unen dos moléculas de interferón. El reto oculta los enlaces, pero conserva las coordenadas experimentales.",
      "sources": [
        "structure",
        "sheet"
      ],
      "focus": "bridges",
      "organization": "monomer",
      "audio": "bridges"
    },
    {
      "id": "organization",
      "title": "Una señal necesita\ndos receptores.",
      "kicker": "05 / ORGANIZACIÓN",
      "text": "Una molécula de IFN y dos receptores distintos forman un complejo 1:1:1. Compara la citocina aislada con el complejo y completa sus componentes.",
      "detail": "IFNAR1 e IFNAR2 son proteínas diferentes que reconocen superficies de la citocina. La imagen del complejo procede de 3SE3, una variante experimental α2b YNS de mayor afinidad por IFNAR1. No representa una transformación de 1ITF ni un trímero de interferones. La vista de IFNAR2 es un subconjunto del mismo complejo.",
      "sources": [
        "complex",
        "receptor"
      ],
      "focus": "",
      "organization": "monomer",
      "audio": "organization"
    },
    {
      "id": "interaction",
      "title": "¿Dónde\ninteractúa?",
      "kicker": "06 / SUPERFICIES DE UNIÓN",
      "text": "Reconocer al receptor requiere una superficie, no un punto mágico. Explora Arg33 y Arg149, relevantes para IFNAR2, y la región 57–61 relacionada con IFNAR1.",
      "detail": "Los ejemplos proceden de estudios estructurales y de mutagénesis. En 1ITF, 57/58/61 son His/Glu/Gln; en 3SE3 son Tyr/Asn/Ser (YNS). El complejo contiene regiones extracelulares y zonas sin coordenadas. Una cercanía en un cristal a 4 Å no permite atribuir toda la energía de unión a un contacto individual. El IFN no tiene un sitio activo catalítico; JAK1 y TYK2 son enzimas asociadas a los receptores.",
      "sources": [
        "receptor",
        "complex",
        "structure"
      ],
      "focus": "receptor",
      "organization": "monomer",
      "audio": ""
    },
    {
      "id": "function",
      "title": "Del receptor\na los genes",
      "kicker": "07 / FUNCIÓN",
      "text": "El IFN no destruye directamente al virus: activa señales que cambian la expresión de genes y ayudan a establecer un estado antiviral.",
      "detail": "La vía canónica vincula IFNAR2 con JAK1 e IFNAR1 con TYK2. STAT1 y STAT2 activados se asocian con IRF9 para formar ISGF3, que regula genes estimulados por interferón. La respuesta depende de la célula y del contexto; no es exclusiva de hepatocitos ni garantiza eliminar una infección. El esquema de esta estación es explicativo, no coordenadas de 1ITF o 3SE3.",
      "sources": [
        "sheet",
        "receptor",
        "drug"
      ],
      "focus": "",
      "organization": "monomer",
      "audio": ""
    },
    {
      "id": "application",
      "title": "De la molécula\nal tratamiento",
      "kicker": "08 / INGENIERÍA BIOMÉDICA",
      "text": "Peginterferón alfa-2a combina una proteína con un polímero: PEG modifica su permanencia en el organismo. Ordena el recorrido desde la formulación hasta la respuesta celular.",
      "detail": "PEGASYS es una aplicación concreta en hepatitis B crónica para determinados pacientes. La formulación se administra por vía subcutánea y se absorbe; no requiere desarmar un hexámero. PEG está unido covalentemente y no se presenta como una cubierta que se desprende obligatoriamente. La PEGilación cambia distribución, eliminación y actividad específica. La ingeniería debe equilibrar exposición, actividad, estabilidad y calidad de fabricación. La imagen 1ITF no incluye PEG. La referencia a hepatitis C en la ficha es histórica: hoy se emplean antivirales de acción directa. Explicación académica sin dosis ni recomendaciones individuales.",
      "sources": [
        "drug",
        "peg",
        "hcv"
      ],
      "focus": "",
      "organization": "monomer",
      "audio": "application"
    }
  ],
  "questions": [
    {
      "q": "¿Por qué se muestran 165 aminoácidos y no 188?",
      "answers": [
        "Proteína madura",
        "Precursor completo"
      ],
      "correct": 0,
      "explanation": "El precursor de 188 aminoácidos pierde un péptido señal de 23; la cadena madura de α2a tiene 165."
    },
    {
      "q": "¿Qué conectan los disulfuros?",
      "answers": [
        "Una misma cadena",
        "Dos interferones"
      ],
      "correct": 0,
      "explanation": "Cys1–Cys98 y Cys29–Cys138 son dos enlaces intracadena."
    },
    {
      "q": "¿Qué componentes completan el complejo de señalización?",
      "answers": [
        "Un IFN + IFNAR1 + IFNAR2",
        "Tres moléculas de IFN",
        "Un IFN + zinc"
      ],
      "correct": 0,
      "explanation": "La citocina y dos receptores distintos forman un complejo 1:1:1. Los receptores transmiten la señal con cinasas asociadas."
    },
    {
      "q": "¿Tiene el IFN un sitio activo catalítico?",
      "answers": [
        "No, tiene superficies de unión",
        "Sí, degrada al virus"
      ],
      "correct": 0,
      "explanation": "Es una citocina señalizadora. JAK1 y TYK2 son enzimas asociadas a los receptores; el IFN no cataliza su acción."
    },
    {
      "q": "¿PEG conserva sin cambios toda la actividad?",
      "answers": [
        "No, modifica exposición y actividad",
        "Sí, solo cambia el tamaño"
      ],
      "correct": 0,
      "explanation": "PEG modifica la exposición y puede reducir actividad específica in vitro. El diseño equilibra farmacocinética y función; no garantiza curación."
    }
  ],
  "activities": [
    {
      "id": "bridges",
      "kind": "bridges",
      "title": "Conecta el interferón"
    },
    {
      "id": "receptors",
      "kind": "organization",
      "title": "Completa el complejo"
    },
    {
      "id": "treatment",
      "kind": "pathway",
      "title": "De la molécula al tratamiento"
    }
  ],
  "audios": {
    "intro": {
      "text": "Bienvenido a la sala del interferón alfa. Explora una señal de defensa formada por ciento sesenta y cinco aminoácidos. Descubre cómo su estructura permite reconocer dos receptores y activar la respuesta antiviral de la célula.",
      "file": "/audio/intro.mp3"
    },
    "chains": {
      "text": "Este modelo representa interferón alfa dos a humano. Su forma madura tiene una sola cadena de ciento sesenta y cinco aminoácidos. Selecciona una posición para encontrarla en el espacio. Las cuatro cisteínas forman dos puentes dentro de la misma cadena.",
      "file": "/audio/chains.mp3"
    },
    "bridges": {
      "text": "Las cisteínas uno y noventa y ocho forman un puente disulfuro. Las posiciones veintinueve y ciento treinta y ocho forman el segundo. Estos enlaces estabilizan la estructura. El reto es identificarlos, no simular cómo se produce la proteína en la célula.",
      "file": "/audio/bridges.mp3"
    },
    "organization": {
      "text": "Una molécula de interferón reconoce dos receptores distintos: IFNAR uno e IFNAR dos. Juntos forman un complejo de señalización. El modelo complementario muestra una variante experimental del interferón alfa dos be. No es un trímero de interferones.",
      "file": "/audio/organization.mp3"
    },
    "application": {
      "text": "Peginterferón alfa dos a es una aplicación de ingeniería molecular. Un polímero llamado PEG modifica la permanencia de la proteína en el organismo. Se administra por vía subcutánea y puede utilizarse en determinados casos de hepatitis B crónica. La modificación también afecta la actividad: diseñar una terapia exige equilibrar exposición, estabilidad y función.",
      "file": "/audio/application.mp3"
    },
    "complete": {
      "text": "¡Reto completado! Identificaste los dos puentes disulfuro del interferón alfa dos a. Ambos estabilizan el plegamiento de una sola cadena.",
      "file": "/audio/complete.mp3"
    },
    "tour-0": {
      "text": "Una señal pequeña puede movilizar grandes respuestas. Conoce el interferón alfa dos a humano.",
      "file": "/audio/tour-0.mp3"
    },
    "tour-1": {
      "text": "Su forma madura tiene ciento sesenta y cinco aminoácidos en una sola cadena.",
      "file": "/audio/tour-1.mp3"
    },
    "tour-2": {
      "text": "Cada letra ocupa un lugar en el espacio. Selecciona un residuo para encontrarlo.",
      "file": "/audio/tour-2.mp3"
    },
    "tour-3": {
      "text": "Las regiones helicoidales organizan el plegamiento y sostienen superficies de reconocimiento.",
      "file": "/audio/tour-3.mp3"
    },
    "tour-4": {
      "text": "Cuatro cisteínas forman dos puentes disulfuro, ambos dentro de la misma cadena.",
      "file": "/audio/tour-4.mp3"
    },
    "tour-5": {
      "text": "El interferón aislado es un monómero. Para señalizar, reconoce dos receptores diferentes.",
      "file": "/audio/tour-5.mp3"
    },
    "tour-6": {
      "text": "Este complejo experimental reúne un interferón modificado, IFNAR uno e IFNAR dos.",
      "file": "/audio/tour-6.mp3"
    },
    "tour-7": {
      "text": "La interacción depende de varias regiones. No existe un sitio activo enzimático en el interferón.",
      "file": "/audio/tour-7.mp3"
    },
    "tour-8": {
      "text": "La señal llega a la expresión de genes mediante la vía JAK STAT.",
      "file": "/audio/tour-8.mp3"
    },
    "tour-9": {
      "text": "La unión a PEG cambia la exposición de una proteína terapéutica. Su estructura sigue importando.",
      "file": "/audio/tour-9.mp3"
    },
    "tour-10": {
      "text": "Toma el control. Explora la secuencia, identifica los puentes y completa el recorrido terapéutico.",
      "file": "/audio/tour-10.mp3"
    }
  },
  "tour": {
    "durationSeconds": 88,
    "idleSeconds": 20,
    "steps": [
      {
        "station": 0,
        "label": "Una señal de defensa"
      },
      {
        "station": 1,
        "label": "165 aminoácidos"
      },
      {
        "station": 1,
        "label": "Secuencia y espacio"
      },
      {
        "station": 2,
        "label": "Regiones helicoidales"
      },
      {
        "station": 3,
        "label": "Dos puentes disulfuro"
      },
      {
        "station": 4,
        "label": "Monómero y complejo"
      },
      {
        "station": 4,
        "label": "IFNAR1 e IFNAR2",
        "organization": "complex"
      },
      {
        "station": 5,
        "label": "Superficies de unión"
      },
      {
        "station": 6,
        "label": "Una respuesta celular"
      },
      {
        "station": 7,
        "label": "Ingeniería molecular"
      },
      {
        "station": 0,
        "label": "Toma el control"
      }
    ]
  },
  "sources": [
    {
      "id": "structure",
      "title": "RCSB · 1ITF / Klaus et al., 1997",
      "url": "https://www.rcsb.org/structure/1ITF",
      "evidence": "IFN-α2a humano, 165 residuos; estructura por RMN. Se muestra el conformero 1 de 24, no 24 subunidades. DOI: 10.1006/jmbi.1997.1396."
    },
    {
      "id": "complex",
      "title": "RCSB · 3SE3",
      "url": "https://www.rcsb.org/structure/3SE3",
      "evidence": "Complejo cristalográfico a 4,0 Å, ensamblaje 1. IFN-α2b YNS con H57Y/E58N/Q61S, IFNAR1 e IFNAR2 extracelulares. No contiene membrana, PEG ni JAK/STAT."
    },
    {
      "id": "receptor",
      "title": "Thomas et al. · Cell, 2011",
      "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC3166218/",
      "evidence": "Estructuras y mutagénesis relacionan reconocimiento de IFNAR1/2, afinidad y señalización. Arg33 y Arg149 son ejemplos de residuos relevantes para IFNAR2; no representan toda la interfaz."
    },
    {
      "id": "drug",
      "title": "DailyMed · PEGASYS",
      "url": "https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=de61685e-2b8c-4e22-84bb-869e13600440",
      "evidence": "Peginterferón alfa-2a: proteína unida a PEG ramificado de aproximadamente 40 kDa por enlace amida a lisina. Administración subcutánea; uso en hepatitis B crónica en pacientes seleccionados."
    },
    {
      "id": "peg",
      "title": "EMA · Evaluación científica de Pegasys",
      "url": "https://www.ema.europa.eu/en/documents/scientific-discussion/pegasys-epar-scientific-discussion_en.pdf",
      "evidence": "La PEGilación modifica la exposición y reduce la actividad específica medida in vitro respecto al interferón sin PEG; no implica conservar intacta toda interacción molecular."
    },
    {
      "id": "hcv",
      "title": "CDC · Atención de hepatitis C",
      "url": "https://www.cdc.gov/hepatitis-c/hcp/clinical-care/index.html",
      "evidence": "La hepatitis C se trata actualmente con antivirales de acción directa; los regímenes de interferón y ribavirina no son el tratamiento actual recomendado."
    },
    {
      "id": "sheet",
      "title": "Ficha técnica · Equipo",
      "url": "/docs/Interferon-Alfa.pdf",
      "evidence": "Documento académico aportado por el equipo. Se precisa el subtipo α2a, el alcance del complejo receptor y las limitaciones de las afirmaciones terapéuticas en REVISION_CIENTIFICA.md."
    }
  ],
  "printedSheet": "/docs/Interferon-Alfa.pdf",
  "evaluationCriteria": [],
  "presenterScript": "Esta sala presenta el interferón alfa dos a, un miembro de la familia de interferones de tipo uno. Es una citocina humana que comunica señales de defensa. Su forma madura tiene ciento sesenta y cinco aminoácidos en una sola cadena. La secuencia se pliega en regiones helicoidales, estabilizadas por dos puentes disulfuro: uno con noventa y ocho, y veintinueve con ciento treinta y ocho. El interferón no destruye al virus directamente ni tiene un sitio activo enzimático. Reconoce dos proteínas diferentes, IFNAR uno e IFNAR dos. Ese complejo activa señales que modifican la expresión de genes. Para verlo usamos una segunda estructura experimental que contiene una variante modificada; no debemos confundirla con nuestro modelo principal. Una aplicación concreta es peginterferón alfa dos a en determinados casos de hepatitis B crónica. La unión a PEG modifica la exposición de la proteína y también puede cambiar su actividad. La Ingeniería Biomédica conecta estructura, formulación, estabilidad y administración. Ahora, selecciona una cisteína y encuentra su pareja.",
  "cautions": [
    "IFN-α es una familia; aquí se estudia α2a. α2b cambia Lys23 por Arg23.",
    "165 aa maduros; 188 en el precursor. Una cadena y dos disulfuros intracadena.",
    "1ITF: 24 conformeros de RMN, no 24 subunidades. Se muestra el primero.",
    "3SE3: variante α2b YNS, no α2a natural; regiones extracelulares, sin membrana ni cinasas.",
    "Una superficie de unión no equivale a un sitio activo catalítico.",
    "La respuesta no es exclusiva de hepatocitos. PEG no es una cubierta que deba desprenderse.",
    "No se promete curación. En hepatitis C, el uso de interferón es histórico frente a los antivirales de acción directa actuales."
  ]
};
