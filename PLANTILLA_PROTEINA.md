# Plantilla para la siguiente sala

No se asignan nombres a las dos proteínas pendientes. Mantener modalidad uniforme: bienvenida, visor, secuencia, nueve estaciones adaptables, tres retos, controles, museo, expositor y ficha impresa.

Crear `src/data/nueva.ts` usando el contrato `ProteinConfig`: id, nombre, especie, tipo, PDB auténtico local, modelos y ensamblaje verificado, cadenas y secuencias, colores, anotaciones secundarias, niveles aplicables, enlaces relevantes, regiones, grupos funcionales, función, interacciones, aplicación concreta y sus pasos, estaciones, preguntas, actividades, guiones/archivos, recorrido, fuentes, ficha, guion del expositor y errores a evitar.

Cada selección debe verificarse contra átomos existentes; documentar cadenas, numeración, mutaciones, ausencias y derivaciones. No inventar sitios activos, oligómeros, metales ni secuencias para reutilizar el reto anterior. Cambiar la configuración no sustituye adaptar las actividades y las selecciones del visor cuando la biología sea diferente.

Copiar los controles y el diseño estructural; personalizar paleta sin alterar navegación. Registrar la nueva sala en proteins.ts, sustituir su espacio pendiente, preparar recursos offline y repetir pruebas moleculares/funcionales. `evaluationCriteria` está reservado; `officialRubric` permanece null hasta recibir la rúbrica real.

