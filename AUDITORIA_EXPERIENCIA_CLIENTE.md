# Auditoría de Experiencia del Cliente — Administración y Gestión del Sitio Web

**Proyecto:** Sitio web institucional "Colegio Horizonte"
**Enfoque:** Experiencia de administración para el personal del colegio (NO técnica, NO funcional)
**Fecha:** 2026-07-12

---

## Hallazgo central (lo que define toda la auditoría)

El sitio es un **SPA estático de React** cuyo **100 % del contenido vive en código fuente**, concretamente en `src/data/content.ts` y `src/data/navigation.ts`. No existe:

- ningún panel de administración (CMS) ni área `/admin`;
- ningún backend, base de datos ni API;
- ningún sistema de usuarios, login, roles o permisos (Directora, Profesor, Secretaría, etc.);
- ninguna funcionalidad de subir imágenes, documentos, ni crear contenido desde la web;
- ninguna previsualización, borrador, deshacer, historial ni versiones.

Para cambiar **cualquier** texto, noticia, foto o fecha, el colegio debe:
1. abrir y editar un archivo `.ts` en un editor de código;
2. ejecutar `npm run build`;
3. ejecutar `deploy.ps1 -Push` (git push a Vercel);
4. esperar el despliegue.

Esa es la única "interfaz de administración" disponible. No hay otra.

> Dato objetivo adicional: las imágenes referenciadas (`/images/gallery/img1.jpg`, `/images/team/director.jpg`, etc.) **no existen** en `public/images/` (la carpeta está vacía). Hoy la galería y el equipo muestran placeholders rotos.

---

## 1. Resumen ejecutivo

El sitio web es visualmente completo y profesional para el **visitante**, pero **no es administrable por el colegio**. Desde la perspectiva del personal, es un producto "de vidrio": se ve bien, pero no se puede tocar. Cualquier mantención cotidiana (publicar una noticia, cambiar un horario, reemplazar una foto) requiere intervención de un desarrollador, conocimientos de programación y un proceso de compilación/despliegue.

**Veredicto de administrabilidad: Crítica / Nula para personal no técnico.**

---

## 2. Nivel de facilidad de uso para el personal

**Nivel: Inexistente para el personal.** No hay interfaz. La "facilidad de uso" es irrelevante porque no existe punto de entrada. Lo único que el personal podría hacer solo es llenar el formulario de contacto (que igual depende de un correo o de un endpoint externo).

---

## 3. Nivel de independencia respecto del desarrollador

**Nivel: 0 %. Dependencia total y permanente.** Cada uno de los ejemplos del prompt —modificar textos, cambiar imágenes, agregar páginas, cambiar horarios, actualizar información, agregar un curso, cambiar profesores— exige hoy un desarrollador. No hay excepción.

---

## 4. Tiempo estimado de aprendizaje

No aplica en el sentido pedido. Para *usar* la web como visitante: inmediato. Para *administrarla*: **requiere capacitación como desarrollador** (TypeScript, React, Vite, Git, despliegue en Vercel). Para un profesor o secretaria: **varios días a semanas** de formación técnica, y aun así con alto riesgo de romper el sitio.

Clasificación del sistema actual: **"requiere capacitación"** —pero la capacitación necesaria es de programador, no de usuario.

---

## 5. Tareas más fáciles de realizar

Honestamente, **ninguna tarea de administración de contenido es fácil** porque ninguna es autogestionable. Lo más cercano a "fácil":

- Llenar el formulario de contacto (solo envía un mail; no guarda nada en el sitio).
- Leer/ver el sitio como visitante.

---

## 6. Tareas más difíciles de realizar

Todas las del prompt son difíciles en la misma medida, porque comparten el mismo cuello de botella (editar código + rebuild + deploy). Las más frágiles:

- **Publicar noticia con imagen** (editar array `newsData`, crear archivo de imagen, referenciarlo, rebuild).
- **Cargar fotos a la galería en masa** (no hay carga; hay que añadir objetos al array `galleryData` a mano y subir archivos al repo).
- **Cambiar el director o docentes** (editar `aboutData.team` y `schoolData.principal`).
- **Actualizar fechas de admisión** (`admissionData.dates`).
- **Reemplazar un documento/reglamento** (no hay gestión de documentos; ni siquiera hay esa sección).

---

## 7. Procesos que deberían simplificarse

Casi todo el flujo de trabajo. Prioridad:

1. Pasar de "editar código + deploy" a una **interfaz web de edición de contenido**.
2. Permitir **subida de imágenes/documentos desde el navegador**.
3. Separar **contenido de código** (un CMS o archivos de datos editables sin compilar).
4. Que las publicaciones se vean **sin tener que reconstruir todo el sitio**.

---

## 8. Riesgos de uso detectados

- **Riesgo altísimo de error humano:** un profesor/secretaria editando `content.ts` puede romper la sintaxis y dejar el sitio caído o en blanco. El build (`tsc -b`) fallaría y nada se publicaría.
- **Sin confirmaciones ni deshacer:** borrar o sobreescribir es inmediato y permanente en el archivo.
- **Sin control de versiones amigable:** el "historial" es Git, incomprensible para no desarrolladores.
- **Imágenes rotas desde el inicio:** los paths no existen; la galería y el equipo no se ven.
- **Sin previsualización:** no hay forma de ver cómo quedará antes de publicar.
- **Cuello de botella de un solo desarrollador:** si el dev no está disponible, el sitio queda congelado (por ejemplo, ante una suspensión de clases urgente).
- **Escalabilidad administrativa nula:** con 200→1200 alumnos crece el volumen de noticias/fotos, pero el esfuerzo por publicarlas no baja; al contrario, se vuelve insostenible.
- **Datos ficticios mezclados con reales:** el sitio trae "María Elena González", "1200 alumnos", "1985" como placeholders; si el colegio real no los cambia, publica información falsa.

---

## 9. Recomendaciones priorizadas

### Imprescindible
1. **CMS / panel de administración** accesible desde el navegador, con login por rol (Directora, Secretaría, Profesor, Comunicaciones). Sin esto, nada de lo demás es viable para el personal.
2. **Editor de noticias/eventos/anuncios** con formulario (título, texto, imagen, categoría, fecha, programación), previsualización y botón "Publicar".
3. **Gestor de medios**: subir imágenes/videos desde el navegador, con optimización automática y reutilización.
4. **Separar contenido del código**: el contenido debe vivir en una base de datos o CMS, no en `content.ts`.

### Muy recomendable
5. **Gestor de documentos** (reglamentos, circulares, formularios) con reemplazo y conservación de versiones anteriores.
6. **Calendario escolar** editable (vacaciones, evaluaciones, actos) con vista mensual.
7. **Anuncios destacados / comunicados urgentes** con prioridad visual (banner superior) y edición rápida.
8. **Borradores + autoguardado + previsualización** antes de publicar.

### Recomendable
9. Categorías y etiquetas gestionables desde la interfaz.
10. Plantillas y "duplicar noticia/comunicado" para ahorrar tiempo.
11. Publicación programada (fecha/hora).
12. Búsqueda interna en el panel de administración.

### Opcional
13. Estadísticas básicas de visitas a noticias (no analítica avanzada).
14. Multiidioma, si aplica.

---

## 10. Automatizaciones con mayor retorno de inversión

1. **Subida masiva de fotos a galería** (arrastrar y soltar varias → se crean las entradas solas). ROI altísimo: el colegio hace actividades semanales.
2. **Optimización automática de imágenes** al subir (redimensionar/comprimir). Evita fotos pesadas y rotas.
3. **Plantillas de comunicados** (suspensión de clases, reunión de apoderados) → solo rellenar fecha/motivo.
4. **Duplicar noticia/evento** para reposiciones o eventos recurrentes.
5. **Publicación programada** (escribir ahora, salir el lunes 8:00).
6. **Reemplazo sencillo de documentos** conservando el histórico (útil para reglamentos/horarios).

---

## 11. Funcionalidades que aportarían más valor al colegio

- Panel web donde **cualquier profesor** publica una noticia en 5 minutos sin tocar código.
- **Banner de comunicado urgente** (suspensión de clases) editable en segundos.
- **Galería self-service** para la encargada de comunicaciones.
- **Calendario** que la secretaría mantenga sola.
- **Directorio de docentes/equipo** editable (cambio de director, nuevos profes).
- **FAQ editable** para actualizar preguntas frecuentes.

---

## 12. Funcionalidades innecesarias para este contexto

- **Flujos BPM / workflows de aprobación por múltiples niveles:** excesivo para un colegio pequeño/mediano. Un flujo simple "borrador → publicar" basta.
- **Sistema avanzado de permisos por curso/asignatura:** sobreingeniería. Roles básicos (admin, editor, autor) son suficientes.
- **Panel analítico sofisticado** (funnels, cohortes, mapas de calor): nadie del colegio lo usará. Métricas mínimas opcionales, no obligatorias.
- **Arquitectura administrativa multi-tenant / multi-sede:** innecesaria salvo que tengan varias sedes reales.
- **Automatizaciones tipo "IA generadora de contenido" o integraciones con muchos sistemas externos:** aportan poco y añaden complejidad y dependencia.
- **Editor visual tipo constructor de páginas (drag & drop de bloques)** para rebuild completo de secciones: riesgo de romper el diseño de marca; no justificado para contenido estándar.

*Justificación general:* el colegio necesita **hacer lo de siempre, más rápido y sin desarrollador**, no una plataforma enterprise. La sobreingeniería aquí es costo y riesgo sin beneficio.

---

## 13. Checklist final de experiencia administrativa

| Ítem | Estado hoy | Objetivo recomendado |
|---|---|---|
| Publicar noticia | ❌ Editar código + deploy | ✅ Formulario web en < 5 min |
| Subir fotos | ❌ Subir archivos al repo a mano | ✅ Arrastrar y soltar desde navegador |
| Editar texto de página | ❌ Editar `.ts` | ✅ Editor inline/CMS |
| Cambiar director/docentes | ❌ Editar `content.ts` | ✅ Directorio editable |
| Comunicado urgente | ❌ Imposible rápido | ✅ Banner editable en segundos |
| Calendario escolar | ❌ No existe | ✅ Calendario editable |
| Gestión de documentos | ❌ No existe | ✅ Gestor con versiones |
| Previsualizar antes de publicar | ❌ No existe | ✅ Sí |
| Deshacer / historial | ❌ Solo Git (dev) | ✅ Borradores + versiones |
| Confirmación al eliminar | ❌ No existe | ✅ Sí |
| Autoguardado | ❌ No existe | ✅ Sí |
| Login / roles | ❌ No existe | ✅ Sí (roles básicos) |
| Independencia del desarrollador | ❌ 0 % | ✅ > 90 % de tareas cotidianas |
| Imágenes funcionando | ❌ Rotas (paths inexistentes) | ✅ Subidas y verificadas |

---

## 14. Conclusión: ¿diseñado para el colegio o para los desarrolladores?

**El sistema está diseñado para los desarrolladores, no para el colegio.** Justificación objetiva:

1. **El contenido está en código fuente** (`content.ts`), no en una herramienta del colegio. Quien administra es quien programa.
2. **El proceso de actualización es de ingeniería de software** (editar TS → `npm run build` → `deploy.ps1 -Push` → Vercel), no un flujo de usuario.
3. **No hay usuario, ni rol, ni pantalla de edición**: los roles del prompt (Directora, Profesor, Secretaría) simplemente no existen en el sistema.
4. **Las imágenes ni siquiera se cargan** (paths rotos) porque nadie pensó el flujo de "subir una foto" —se asumió que el dev las pondría.
5. **El README y los scripts (`iniciar.bat`, `deploy.ps1`) están escritos para un programador**, no para el personal del colegio.
6. **El sitio nace como "proyecto de portafolio"** (según el propio README), es decir, hecho para demostrar habilidades técnicas, no para ser operado por un cliente sin conocimientos.

### Veredicto
Como **vitrina pública estática** el sitio cumple. Como **herramienta de gestión del colegio**, hoy **no sirve**: es una caja cerrada que solo el desarrollador puede abrir. Para que el colegio sea dueño de su web en los próximos años, la prioridad única e imprescindible es **incorporar un CMS/panel de administración con login, editor de contenidos y gestor de medios** que separe el contenido del código. Hasta entonces, cada pequeña corrección seguirá costando una intervención de desarrollo.

---

*Nota metodológica:* esta auditoría asume como ya resueltos los aspectos de código, arquitectura, seguridad y necesidades generales del colegio (según lo indicado). Se centró exclusivamente en la **experiencia de administración** por parte del personal no técnico.
