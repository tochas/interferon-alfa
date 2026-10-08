# Revisión científica y procedencia

La ficha aportada es la fuente académica inicial; sus enunciados se verificaron y precisaron antes de incorporarlos. Los documentos de clase contienen instrucciones de formato, no evidencia científica sobre IFN. Se conservaron únicamente indicaciones recuperables y no se inventaron fecha, ponderación ni rúbrica.

| Tema | Criterio aplicado en la sala |
|---|---|
| IFN alfa | Es una familia. La secuencia/modelo principal es α2a humano, 1ITF, relacionado con IFNA2/P01563. |
| Secuencia | 165 aa maduros; 188 en precursor menos 23 de señal. Lys23 en α2a, Arg23 en α2b. |
| Disulfuros | 1–98 y 29–138. Cuatro Cys, dos enlaces intracadena, distancia SG–SG ~2,02 Å en modelo 1. |
| Secundaria | Cinco regiones helicoidales A–E según publicación. Se declaran los siete registros HELIX de 1ITF y sus clases; no se rotula toda cinta como alfa pura. No SHEET en el IFN. |
| RMN | 24 conformeros experimentales. El visor carga el primero, no los representa como subunidades. |
| Organización | IFN aislado monomérico; complejo heterólogo 1 IFN:1 IFNAR1:1 IFNAR2. No hexámero ni zinc de almacenamiento. |
| Complejo | 3SE3 es α2b YNS: H57Y, E58N, Q61S. A original = IFNAR1; B = IFN; C = IFNAR2. En archivo derivado R/A/S respectivamente, sin cambiar coordenadas. |
| Resolución/ausencias | 3SE3, rayos X 4,0 Å. Ligando con residuos sin coordenadas, incluido Cys1. No se inventan esos átomos ni el disulfuro ausente. |
| Sitios de unión | Arg33/Arg149 son ejemplos de reconocimiento IFNAR2 respaldados por estudios. 57/58/61 contextualizan la ingeniería de la interfaz IFNAR1. No se atribuye toda la afinidad a un único residuo. |
| Células blanco | IFNAR se expresa en múltiples tipos celulares; no solo hepatocitos. |
| Acción | Señalización JAK–STAT, no destrucción directa del virus. El esquema simplifica y no promete resultados universales. |
| PEG | PEGASYS tiene PEG covalente; no se muestra desprendimiento obligatorio. Cambia exposición y actividad específica, que puede ser menor in vitro. |
| Uso biomédico | Ejemplo: peginterferón alfa-2a en determinados pacientes con hepatitis B crónica. No garantiza eliminar infección. Hepatitis C se contextualiza históricamente; actualmente predominan antivirales de acción directa. |
| Modelo terapéutico | 1ITF no tiene PEG ni representa exactamente el medicamento. El recorrido es explicativo, no farmacocinética calculada. |

Los scripts auditan coordenadas, secuencia y disulfuros; la proximidad geométrica de contactos a 5 Å documentada en `evidence/model-audit.json` no constituye por sí sola una medición de afinidad.

## Fuentes consultadas

- [RCSB · 1ITF / Klaus et al., 1997](https://www.rcsb.org/structure/1ITF): IFN-α2a humano, 165 residuos; estructura por RMN. Se muestra el conformero 1 de 24, no 24 subunidades. DOI: 10.1006/jmbi.1997.1396.
- [RCSB · 3SE3](https://www.rcsb.org/structure/3SE3): Complejo cristalográfico a 4,0 Å, ensamblaje 1. IFN-α2b YNS con H57Y/E58N/Q61S, IFNAR1 e IFNAR2 extracelulares. No contiene membrana, PEG ni JAK/STAT.
- [Thomas et al. · Cell, 2011](https://pmc.ncbi.nlm.nih.gov/articles/PMC3166218/): Estructuras y mutagénesis relacionan reconocimiento de IFNAR1/2, afinidad y señalización. Arg33 y Arg149 son ejemplos de residuos relevantes para IFNAR2; no representan toda la interfaz.
- [DailyMed · PEGASYS](https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=de61685e-2b8c-4e22-84bb-869e13600440): Peginterferón alfa-2a: proteína unida a PEG ramificado de aproximadamente 40 kDa por enlace amida a lisina. Administración subcutánea; uso en hepatitis B crónica en pacientes seleccionados.
- [EMA · Evaluación científica de Pegasys](https://www.ema.europa.eu/en/documents/scientific-discussion/pegasys-epar-scientific-discussion_en.pdf): La PEGilación modifica la exposición y reduce la actividad específica medida in vitro respecto al interferón sin PEG; no implica conservar intacta toda interacción molecular.
- [CDC · Atención de hepatitis C](https://www.cdc.gov/hepatitis-c/hcp/clinical-care/index.html): La hepatitis C se trata actualmente con antivirales de acción directa; los regímenes de interferón y ribavirina no son el tratamiento actual recomendado.
- [Ficha técnica · Equipo](/docs/Interferon-Alfa.pdf): Documento académico aportado por el equipo. Se precisa el subtipo α2a, el alcance del complejo receptor y las limitaciones de las afirmaciones terapéuticas en REVISION_CIENTIFICA.md.
