# Museo Interactivo de Proteínas · Interferón alfa

Segunda sala independiente, con la misma modalidad de la insulina: exploración molecular, secuencia, tres retos, mando Xbox, recorrido automático, modo expositor y ficha local. Tema ciruela, coral y dorado. La aplicación de insulina no fue modificada. Los cuatro espacios reservan dos proteínas aún desconocidas. La tarjeta de insulina identifica una sala entregada por separado; este paquete contiene únicamente interferón.

## Uso inmediato en Windows

1. Extrae el ZIP completo en una carpeta local; no ejecutes dentro del ZIP.
2. Abre `INICIAR_MUSEO.bat`. Se incluye Node portátil, por lo que no necesitas instalar dependencias ni escribir comandos para exponer.
3. Edge o Chrome abre `http://localhost:4175` en ventana de aplicación. Pulsa **INICIAR EXPERIENCIA**. F activa pantalla completa.
4. Al terminar, usa `CERRAR_MUSEO.bat` y cierra la ventana con Alt+F4. Solo detiene el servidor identificado de esta carpeta.

El puerto 4175 evita interferir con la aplicación de insulina. El archivo `.server.pid` es estado temporal, no se distribuye.

## Desarrollo y compilación

Requisitos de desarrollo: Node 22 o superior, pnpm. Ejecuta desde esta carpeta:

```text
pnpm install --frozen-lockfile
pnpm dev
pnpm test
pnpm audit:models
pnpm build
pnpm preview
```

El servidor de desarrollo usa 5175; producción 4175. `dist/` es la compilación estática. `scripts/e2e.cjs` usa Playwright y Edge; define PLAYWRIGHT_MODULE con la ruta a Playwright si cambia el equipo. No se necesita Playwright para usar la app.

## Arquitectura y cuatro salas

- `src/data/interferon.ts`: identidad, secuencia, niveles, puentes, regiones, grupos funcionales, aplicación, estaciones, preguntas, audios, recorrido y fuentes.
- `src/types.ts`: contrato de la sala. `src/proteins.ts`: registro y aminoácidos.
- `src/molecule.ts`: visor 3Dmol.js 2.5.3, coordenadas reales, selección y cámara.
- `src/main.ts`: interfaz, retos, Gamepad API, museo y expositor.
- `src/core.ts`: funciones verificables de selección, puentes, mando y temporizador.
- `public/models/`: archivos PDB originales, ensamblaje mmCIF y derivados de visualización. `evidence/model-audit.json` conserva la procedencia.
- `public/vendor/`: visor local; ningún CDN. Tipografía del sistema, sin descarga de fuentes.
- `scripts/build-sw.mjs`: caché con versión basada en contenido. `scripts/server.mjs`: servidor estático local y cierre protegido por token.

Para otra proteína, parte de `PLANTILLA_PROTEINA.md`, crea su configuración y regístrala. Mantén la estructura de estaciones y controles; adapta los retos y selecciones a su biología. No fuerces oligómeros, disulfuros o catálisis donde no correspondan. Esta versión adapta la interfaz de la sala al IFN; incorporar proteínas muy distintas también requiere revisar las actividades de `main.ts` y colores/selecciones del visor, no solo cambiar un nombre. No hay rúbrica ni porcentajes inventados.

## Modelos y límites científicos

1ITF: IFN-α2a humano, una cadena de 165 aa, conformero 1 de un conjunto RMN de 24. Cys1–98 y Cys29–138 son intracadena. Se conservan coordenadas y numeración maduras; se omiten hidrógenos para visualizar.

3SE3: complejo experimental IFN-α2b YNS + regiones extracelulares de IFNAR1 e IFNAR2, 4,0 Å. No es α2a natural ni una simulación de su acoplamiento. Ensamblaje 1 con operación identidad. Cadenas originales B/A/C se renombran A/R/S (IFN/IFNAR1/IFNAR2). La vista binaria es un subconjunto del ternario. No se reconstruyen regiones sin coordenadas.

La secuencia inferior siempre corresponde a 1ITF; seleccionarla desde el complejo regresa explícitamente al modelo α2a para evitar atribuirle las sustituciones YNS. Las cintas del receptor pueden contener láminas beta; las del IFN no se etiquetan como beta. La representación farmacológica y JAK–STAT es un esquema, no un modelo atómico observado.

## PWA, Vercel y offline

Manifest standalone, iconos y orientación horizontal. La PWA puede instalarse desde Edge/Chrome en localhost o desde un alojamiento HTTPS. No se ha publicado esta sala ni se ha creado una URL nueva. Para Vercel sube `src`, `public`, `scripts/build-sw.mjs`, `scripts/scan-audio.mjs`, `package.json`, lockfile, `pnpm-workspace.yaml`, `tsconfig.json`, `index.html` y `vercel.json`; build `pnpm build`, salida `dist`. No subas `node_modules`, runtime portátil, logs o archivos de estado.

Abre una vez y espera **OFFLINE PREPARADO**. Los recursos esenciales se almacenan y los originales/PDF se intentan guardar como recursos complementarios. Antes de exponer verifica también la ficha con el diagnóstico y el botón local. Sin internet puedes usar el servidor portátil o una PWA con caché ya completa. La instalación real de PWA depende del navegador; el manifest y service worker se verifican automatizadamente. No se requieren fuentes, modelos, APIs ni narración en línea durante la exposición.

## Audio ElevenLabs integrado

Los 17 MP3 proporcionados por el usuario están integrados, con reproducción local y caché offline. No se utiliza Windows TTS ni un servicio de voz en línea. Los guiones se conservan en `GUIONES_ELEVENLABS.md` y `public/audio/scripts.json`. El recorrido de 88 segundos distribuye los intervalos según la duración real de cada narración, con margen para las transiciones. Se limita la duración mínima para evitar recortes.

Para reemplazar las narraciones en el futuro, abre `IMPORTAR_AUDIOS.bat` y pega la ruta de su carpeta. Acepta nombres como `intro.mp3` o `intro.mp3.mp3`, conserva archivos ya importados, actualiza `public/audio`, la compilación local y la caché. También puedes reemplazarlos directamente y ejecutar `pnpm build`. Para Vercel vuelve a publicar los archivos de `public/audio`. Cada JSON de subtítulos contiene la transcripción completa durante la toma; no se finge alineación palabra por palabra. Recomendación: una toma por archivo con la voz previamente elegida FA1FBP9TKxnBiw45fHmS. Después de importar, verifica duración, volumen, pronunciación y reproducción offline antes de exponer.

## Controles

Mouse: arrastrar rota; rueda acerca; botón derecho desplaza. Táctil: arrastrar/pinza. Teclado: WASD/flechas rota; +/− zoom; R centra; M alterna monómero/complejo; X etiquetas; I información; F pantalla completa; Espacio pausa; Escape cierra; Tab y Enter navegan. Ctrl+Mayús+E abre expositor.

Xbox estándar: palanca izquierda rota; derecha desplaza; LT/RT aleja/acerca; cruceta izquierda/derecha cambia estación; arriba/abajo opciones; A confirma; B regresa; X etiquetas; Y organización; LB/RB representación; Menu pausa; View centra. Ajustes → Diagnóstico incluye zona muerta, calibración, ejes y simulador. El simulador no sustituye una prueba con mando físico. Vibración opcional si el navegador y mando la admiten.

## Solución de problemas

- Pantalla vacía: recarga, comprueba aceleración gráfica de Edge/Chrome y ejecuta desde el BAT, no desde `file://`.
- Puerto ocupado: cierra otra copia IFN con su BAT. No cierres la insulina por error.
- Caché antigua: con servidor abierto recarga y vuelve a abrir. Tras reemplazar audios, espera la actualización de caché.
- Audio ausente: consulta el estado anterior; un guion no es un MP3. No se llama a Windows TTS.
- Mando sin respuesta: pulsa A para que el navegador lo detecte; comprueba `standard` en Diagnóstico. Usa mouse/teclado como respaldo.
- Rendimiento: usa Cintas, cierra la comparación y activa Reducir animaciones. Superficies y dos visores cuestan más recursos.
- Texto grande: configurable en Ajustes; los paneles informativos desplazan intencionalmente su contenido.

## Fuentes

- [RCSB · 1ITF / Klaus et al., 1997](https://www.rcsb.org/structure/1ITF): IFN-α2a humano, 165 residuos; estructura por RMN. Se muestra el conformero 1 de 24, no 24 subunidades. DOI: 10.1006/jmbi.1997.1396.
- [RCSB · 3SE3](https://www.rcsb.org/structure/3SE3): Complejo cristalográfico a 4,0 Å, ensamblaje 1. IFN-α2b YNS con H57Y/E58N/Q61S, IFNAR1 e IFNAR2 extracelulares. No contiene membrana, PEG ni JAK/STAT.
- [Thomas et al. · Cell, 2011](https://pmc.ncbi.nlm.nih.gov/articles/PMC3166218/): Estructuras y mutagénesis relacionan reconocimiento de IFNAR1/2, afinidad y señalización. Arg33 y Arg149 son ejemplos de residuos relevantes para IFNAR2; no representan toda la interfaz.
- [DailyMed · PEGASYS](https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=de61685e-2b8c-4e22-84bb-869e13600440): Peginterferón alfa-2a: proteína unida a PEG ramificado de aproximadamente 40 kDa por enlace amida a lisina. Administración subcutánea; uso en hepatitis B crónica en pacientes seleccionados.
- [EMA · Evaluación científica de Pegasys](https://www.ema.europa.eu/en/documents/scientific-discussion/pegasys-epar-scientific-discussion_en.pdf): La PEGilación modifica la exposición y reduce la actividad específica medida in vitro respecto al interferón sin PEG; no implica conservar intacta toda interacción molecular.
- [CDC · Atención de hepatitis C](https://www.cdc.gov/hepatitis-c/hcp/clinical-care/index.html): La hepatitis C se trata actualmente con antivirales de acción directa; los regímenes de interferón y ribavirina no son el tratamiento actual recomendado.
- [Ficha técnica · Equipo](/docs/Interferon-Alfa.pdf): Documento académico aportado por el equipo. Se precisa el subtipo α2a, el alcance del complejo receptor y las limitaciones de las afirmaciones terapéuticas en REVISION_CIENTIFICA.md.
