# Resultados de pruebas · Interferón alfa

Actualización del 8 de octubre de 2026: v1.2 elimina la estación Química, renumera las ocho estaciones y corrige los destinos del recorrido sin cambiar sus audios. Validación específica: evidence/stations-v1.2.json.

Historial de verificación de la base:

- Actualización v1.1: 17 narraciones MP3 aportadas por el usuario; nombres normalizados y hashes conservados en evidence/audio-import-interferon.json.
- Audio: verificación actual de las 17 decodificaciones, seis situaciones de reproducción de estación/reto, recorrido completo sin cortes, volumen, silencio, interrupción, subtítulos y reproducción offline. Informe: evidence/audio-e2e-results.json.
- Las 47 comprobaciones generales y 13 adicionales corresponden a la base v1.0; esta actualización añade pruebas específicas de audio y temporización.
- TypeScript y compilación Vite: correctos.
- Vitest: 12 pruebas aprobadas (mando, zona muerta, suavizado, selección, puentes, duplicados, progreso, organización, temporizador, configuración y recursos ausentes).
- Navegador Edge automatizado: 47 comprobaciones principales aprobadas; errores de consola: 0.
- Comprobaciones adicionales: 13 aprobadas (táctil emulado, mouse, accesibilidad, modo permanente, manifest y encuadre móvil).
- Auditoría molecular: 165 residuos, 4 cisteínas, 2 enlaces S–S ~2,02 Å; 24 conformeros RMN originales. El visor usa el primero. Las 4448 coordenadas del complejo coinciden tanto con el PDB original como con el ensamblaje mmCIF descargado. Se comprobaron las sustituciones YNS.
- Inicio y cierre: ejecutados CERRAR_MUSEO.bat e INICIAR_MUSEO.bat reales; servidor local reiniciado y respuesta de salud museo-interferon en 4175. Node portátil incluido.
- PWA: manifest standalone, iconos, caché y service worker activos. Recarga con red deshabilitada por Playwright, carga de monómero/complejo y ficha PDF correctas. Sin solicitudes externas obligatorias.
- Tres reinicios consecutivos limpiaron el progreso. Inactividad real de 20 s inició el recorrido; interrupción por acción correcta. La prueba inicial sin audios usó un recorrido acelerado a 33 s. La versión con audio verifica 88 s completos y once eventos de fin de narración; los tiempos se ponderan para evitar cortes.
- Importador de audio: probado en carpeta aislada con un MP3 de prueba existente; normalizó extensión doble, conservó bytes, detectó 16 ausentes, copió a producción y regeneró caché. Ese audio de prueba NO se incorporó a esta sala.
- Pantallas inspeccionadas: 1366×768, 1920×1080 y 390×844; sin desbordamiento horizontal. En móvil, 100% de los CA dentro del visor tras ajustar encuadre.
- Bucle durante rotación simulada: 165 actualizaciones/s en Edge headless de este equipo. Es una medida del bucle, no certificación de FPS de GPU ni garantía para otras laptops. Probar físicamente en la laptop del stand.

## Limitaciones pendientes reales

1. No hubo mando físico disponible: se verificaron mapeo, simulador, calibración y lógica; conectividad Bluetooth/USB y vibración requieren prueba física.
2. Los 17 MP3 del usuario están integrados y verificados por decodificación, reproducción y caché offline. No se usa Windows TTS. La evaluación humana de pronunciación y volumen en los altavoces del stand queda a cargo del equipo.
3. La instalación PWA se validó mediante manifest y service worker; no se modificó la lista de aplicaciones instaladas del usuario. El BAT sí abrió la ventana de aplicación.
4. Se emuló red deshabilitada en el navegador, no se activó el modo avión del sistema. Repetir la prueba física del stand.
5. La vista 3SE3 representa una variante YNS α2b, con regiones extracelulares y residuos sin coordenadas; no una simulación de α2a natural. PEG y vía JAK–STAT son esquemas explicativos.
6. No se ha publicado una URL de interferón ni generado un QR público ficticio. Se incluye el paquete de código para GitHub/Vercel.

## Evidencias

`evidence/e2e-results.json`, `extra-results.json`, `model-audit.json`, `audio-import-test.json` y diez capturas PNG. Reproducir con `pnpm test`, `pnpm audit:models`, `node scripts/e2e.cjs` y `node scripts/extra-checks.cjs` con el servidor de producción activo.
