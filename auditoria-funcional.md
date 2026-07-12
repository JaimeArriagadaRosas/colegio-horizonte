# Auditoría Funcional y Estratégica — Sitio Web Colegio Horizonte

**Fecha**: 2026-07-12
**Enfoque**: Equipo multidisciplinario (Directivo, Coordinación Académica, Admisiones, Docente, Estudiante, Apoderado, UX, Arquitecto, Staff SWE, Accesibilidad, Seguridad, Product Manager)
**Alcance**: Evaluación de si el sitio satisface las necesidades de una institución educativa moderna. NO es una auditoría de código (ver nota).
**Pregunta guía**: *¿Esto realmente ayuda a una escuela?*, no *¿esto funciona técnicamente?*

---

## 0. Nota metodológica importante (corrección del registro)

El repositorio ya contiene un `auditoria.md` técnico previo. Al revisar el código **actual**, ese documento está **desactualizado** y varias de sus afirmaciones ya no son ciertas:

| Afirmación del `auditoria.md` previo | Estado real en el código actual |
|---|---|
| "Sin lazy loading, todo se descarga en la carga inicial" | ✅ FALSO: `AppRouter.tsx` usa `React.lazy()` + `Suspense` por ruta. |
| "Sin Error Boundaries" | ✅ FALSO: existe `src/components/ErrorBoundary.tsx` y está montado. |
| "El formulario de contacto solo hace `console.log`" | ✅ FALSO: `src/utils/contact.ts` envía vía `mailto` (fallback) o a un endpoint configurable, con honeypot (`website`) y control anti-flood. |
| "SEO no se usa en ninguna página" | ✅ FALSO: cada página importa y usa `<SEO>` con title/description/OG/Twitter por ruta. |
| "Ausencia total de headers de seguridad" | ✅ FALSO: hay headers en `index.html`, `_headers` y `vercel.json` (CSP, HSTS, X-Frame-Options, etc.). |

Por esto, la presente auditoría **no repite lo técnico** y, donde hace falta, corrige el diagnóstico. A cambio, detecta un **bug nuevo y funcional**: la política CSP declarada (`style-src 'self'`) **bloquea la hoja de estilos de Google Fonts** cargada en `index.html`, por lo que las tipografías Inter/Poppins no se aplican y el sitio cae a fuentes del sistema (degradación de diseño). Ver sección de Riesgos.

---

## 1. Resumen Ejecutivo

El sitio es una **SPA de marketing institucional bien construida y visualmente cuidada** para un colegio ficticio. Cubre sólidamente la "carta de presentación" de la institución: identidad (misión, visión, valores, historia, equipo directivo), oferta académica por niveles, metodología, proceso de admisión (pasos, requisitos, fechas, arancel), noticias, galería, FAQ y contacto.

Sin embargo, **desde la lógica de una escuela real, el sitio es una "vitrina" incompleta**:

- Le falta el **calendario escolar anual** (hoy solo hay fechas de admisión).
- Le falta un **repositorio de documentos** descargables (reglamento de convivencia, uniforme, lista de útiles, formulario de postulación, mochila, circulares).
- Las **noticias no tienen ficha de detalle**: los botones "Leer más" son callejones sin salida.
- El **mapa de contacto es un placeholder** ("Mapa interactivo") sin ubicación real ni enlace a Google Maps.
- No hay **página de transparencia ni de convivencia escolar**, y los enlaces de "Política de Privacidad / Términos" del pie apuntan a la FAQ (engañosos).
- No existe diferenciación clara entre **comunicación institucional de fondo** (circulares, suspensión de clases, emergencias) y noticias de relato público.

En conjunto: **cumple muy bien el objetivo de "captación de nuevos alumnos y reputación", pero es débil como herramienta diaria de la comunidad educativa (familias, estudiantes, docentes)**.

**Puntuación funcional global: 60/100** (buen piso, huecos críticos de uso diario).

---

## 2. ¿Qué tan preparado está para representar a un colegio real?

Preparado para **representar y vender** la institución (60–70%). No preparado para **operar como centro de comunicación y gestión** de la comunidad (30–40%). Un apoderado real que busque el calendario del mes, la lista de útiles o el reglamento de convivencia **no los encontrará**. Un futuro alumno y su familia sí tendrán una buena primera impresión.

---

## 3–9. Puntuaciones

| # | Dimensión | Puntuación | Justificación breve |
|---|---|---|---|
| 3 | Funcional | **60** | Cobertura de "carta" amplia; faltan calendario escolar, documentos, detalle de noticias, mapa real, transparencia. |
| 4 | Técnica | **70** | Stack moderno, lazy loading, error boundary, headers, SEO por página. Pero CSP rompe fuentes, contenido hardcodeado, sin tests. |
| 5 | Experiencia familias | **55** | Navegación clara y mobile OK, pero no hay calendario escolar, documentos descargables, ni portal. Mapa y "Leer más" vacíos. |
| 6 | Experiencia estudiantes | **25** | El sitio es público; no hay recursos, biblioteca, clubes, plataformas (LMS). Es un portal ausente, no un fallo grave para el alcance. |
| 7 | Experiencia docentes | **15** | No aplica: no existe intranet ni recursos internos. Debe declararse fuera de alcance explícitamente. |
| 8 | Accesibilidad | **65** | Skip link, labels asociados, honeypot, roles ARIA en FAQ. Gaps: CSP vs fuentes, contraste de `text-gray-500`, lightbox sin `Escape`, foco en menú móvil. |
| 9 | Mantenibilidad | **68** | Componentes limpios y legibles; pero contenido quemado en `content.ts` (440 líns), `iconMap` duplicado en 3 páginas, sin tests, sin CMS. |

---

## 10. Funcionalidades imprescindibles faltantes

Estas son las que **un colegio real necesita sí o sí** y hoy no existen:

1. **Calendario escolar anual** (inicio/fin de clases, feriados legales, reuniones de apoderados, pruebas, días de convivencia). Hoy solo hay fechas de admisión.
2. **Repositorio de documentos descargables** (reglamento de convivencia escolar, uniforme, lista de útiles por curso, formulario de postulación PDF, calendario imprimible, circulares tipo).
3. **Ficha de detalle de cada noticia/comunicado** (el botón "Leer más" no navega a ningún lado).
4. **Mapa real / ubicación** con enlace a Google Maps y ruta (el "Mapa interactivo" es un placeholder).
5. **Página de Transparencia y Convivencia Escolar** (sostenedor, régimen, reglamento interno, protocolos de convivencia) — clave en contexto chileno (Ley de Convivencia Escolar 20.536).
6. **Política de Privacidad real** (tratamiento de datos de menores, Ley 19.628) en lugar de enlaces que apuntan a la FAQ.

---

## 11. Funcionalidades recomendables

- **Buscador interno** (el sitio crecerá; hoy 8 secciones es manejable sin búsqueda, pero un colegio mediano/grande lo requiere).
- **Sección de comunicados urgentes** (suspensión de clases, emergencias) visualmente distinguida de noticias institucionales.
- **Formulario de admisión real** (descarga de ficha + envío, o integración simple tipo Formspree/Google Forms) en vez de solo mailto.
- **Página de "Vida escolar / Extracurriculares"** (clubes, talleres, deportes, bienestar) como destino de la FAQ que los menciona.
- **Recorrido virtual / video institucional** real (hoy la galería usa imágenes aleatorias de picsum, no del colegio).
- **Enlaces a plataformas externas** (LMS, correo, portal de notas) aunque sea como accesos directos.
- **Sitemap.xml + robots.txt + imagen OG real** (hoy `og-image.jpg` referenciada no existe → la tarjeta de WhatsApp/Facebook se rompe).
- **Aviso de cookies / consentimiento** mínimo si se agregan analíticas.

---

## 12. Elementos innecesarios o sobreingeniería (para un colegio ficticio)

Desde la ingeniería, aplicando los filtros **Recomendado / Opcional / Excesivo**:

- **Excesivo**: Migrar a un headless CMS (Sanity/Contentful) para 8 páginas estáticas. Un archivo `content.ts` o markdown basta.
- **Excesivo**: SSR/SSG con Next.js/Remix solo por SEO. Para este tráfico, la SPA con `react-helmet-async` y `sitemap.xml` es suficiente.
- **Excesivo**: Kubernetes, microservicios, arquitectura hexagonal/feature-first completa. Desproporcionado.
- **Excesivo**: Stack de observabilidad (Sentry + Web Vitals + OpenTelemetry) para un sitio estático de portafolio.
- **Excesivo**: PWA con service worker y manifest (útil para apps de notas, no para vitrina).
- **Opcional**: reCAPTCHA. El honeypot + anti-flood actual ya son razonables para un colegio pequeño/mediano.
- **Recomendado**: mantener el code-splitting y los headers de seguridad ya implementados; corregir la CSP para no bloquear fuentes.

---

## 13. Riesgos detectados

| Riesgo | Perfil afectado | Gravedad | Detalle |
|---|---|---|---|
| **CSP bloquea Google Fonts** (`style-src 'self'`) | UX / Marca | Media | Las tipografías no cargan; el sitio cae a fuentes del sistema y pierde identidad visual. Bug real. |
| Enlaces "Privacidad/Términos" apuntan a FAQ | Legal / Apoderado | Media | Engañosos; un colegio debe tener política de privacidad real (datos de menores, Ley 19.628). |
| Imagen OG inexistente (`/og-image.jpg`) | Comunicación | Media | Al compartir en redes, la tarjeta se muestra rota. |
| Galería usa `picsum.photos` (random) | Reputación | Media | No son fotos del colegio; en producción real deben ser propias y con **autorización de padres** para menores. |
| Contenido estático hardcodeado | Mantenibilidad | Baja | Cada cambio (fechas, precios, noticias) exige deploy. Aceptable para ficticio; revisar si pasa a real. |
| "Admisiones 2025 Abiertas" fijo en hero | Comunicación | Baja | Se vuelve obsoleto; falta dinámica de año. |
| Fotos de menores (futuro) sin consentimiento | Seguridad/Privacidad | Alta (potencial) | Hoy no hay fotos reales, pero el diseño debe planear autorización escrita antes de publicar rostros de alumnos. |
| Formulario sin doble opt-in / aviso de tratamiento de datos | Privacidad | Baja | El mailto no almacena, pero falta aviso de para qué se usan los datos. |

---

## 14. Análisis por perfil (¿qué necesita cada uno?)

| Perfil | ¿Qué necesita? | ¿Lo encuentra hoy? | Huecos |
|---|---|---|---|
| **Director/a** | Representación, transparencia, reputación | Parcial | Falta página de transparencia y convivencia; resultados (PAES) solo en una noticia. |
| **Coordinador académico** | Mostrar niveles, programas, metodología | ✅ Sí | Falta mallas/curriculúm y planes de estudio por nivel. |
| **Admisiones** | Proceso, requisitos, fechas, formulario | ✅ Muy bien | Falta formulario de admisión real y recorrido virtual. |
| **Profesor** | Recursos internos, intranet | ❌ N/A | Fuera de alcance; debe declararse. |
| **Estudiante** | Recursos, biblioteca, clubes, plataformas | ❌ No | Portal inexistente; el sitio es solo vitrina. |
| **Apoderado** | Calendario, horarios, noticias, documentos, uniforme, útiles, transporte, comedor, pagos, becas, FAQ | Parcial | ❌ Calendario escolar, ❌ documentos, ❌ uniforme/útiles, ❌ mapa real. FAQ y contacto ✅. |
| **Diseñador UX** | Navegación intuitiva, mobile | ✅ Bien | Callejones sin salida ("Leer más"), mapa placeholder, imágenes rotas esperadas. |
| **Arquitecto SW** | Estructura coherente | ✅ Aceptable | `iconMap` duplicado; contenido en un solo archivo. |
| **Staff SWE** | Calidad, despliegue | ✅ Buen piso | Sin tests; CSP rota fuentes. |
| **Accesibilidad** | WCAG, teclado, contraste | ⚠️ Parcial | Ver sección 8 y riesgos. |
| **Seguridad** | Datos de menores, consentimiento | ⚠️ | Ver riesgos (potencial alto al usar fotos reales). |
| **Product Manager** | Objetivos de captación y comunicación | ✅ Cumplidos parcialmente | Priorizar calendario + documentos + transparencia. |

---

## 15. Comunicación, Admisiones, Información institucional, Contenido

**Comunicación**: Existen noticias (6) y eventos, con filtro por categoría. ✅ Pero faltan: circulares, comunicados urgentes (suspensión/emergencias), calendario escolar, boletín. La distinción "noticia de relato" vs "comunicado operativo" no existe.

**Admisiones**: Muy completo para una primera visita — pasos, requisitos, fechas, arancel, CTA a contacto. ✅ Falta: formulario de admisión real, recorrido virtual, galería propia, video. Responde "¿cómo postular?" y "¿qué documentos?". ✅

**Información institucional**: Misión, visión, valores, historia (hitos), equipo directivo, niveles, metodología. ✅ Falta: reglamentos, convivencia escolar, infraestructura detallada (solo mencionada), horarios por nivel (sí están), proyecto educativo explícito.

**Contenido vs preguntas frecuentes**: Responde bien "¿por qué elegirnos?", "¿qué ofrece?", "¿cómo se enseña?", "¿cómo postular?", "¿dónde está?". ❌ No responde "¿qué actividades hay?" (solo FAQ lasLista), "¿cómo es la convivencia?" (solo valores), "¿qué nivel ofrece?" (sí, implícito).

---

## 16. Roadmap priorizado

### Imprescindible (corto plazo, 1–3 semanas)
1. Corregir CSP para permitir Google Fonts (`style-src 'self' https://fonts.googleapis.com 'unsafe-inline'` o mover fuentes a `font-src`/self-host) — *bug funcional*.
2. Agregar **calendario escolar anual** (página o sección).
3. Agregar **repositorio de documentos** descargables (reglamento, uniforme, útiles, formulario).
4. Crear **ficha de detalle de noticias** (o quitar el botón "Leer más" muerto).
5. Reemplazar el placeholder de mapa por **mapa real + enlace Google Maps**.
6. Crear **Política de Privacidad real** y corregir los enlaces del footer.

### Muy recomendable (1–2 meses)
7. Página de **Transparencia y Convivencia Escolar**.
8. **Sitemap.xml + robots.txt + og-image real**.
9. Sección **Vida escolar / Extracurriculares**.
10. **Formulario de admisión real** (descarga + envío simple).
11. Separar **comunicados urgentes** de noticias institucionales.

### Recomendable (2–4 meses)
12. Buscador interno.
13. Recorrido virtual / video institucional con imágenes propias.
14. Enlaces a plataformas externas (LMS, notas, correo).
15. Tests mínimos (al menos formulario y navegación).

### Opcional / Sobreingeniería (evitar para este alcance)
16. Headless CMS, SSR/Next.js, Kubernetes, Sentry, PWA, i18n, reCAPTCHA. Solo si el proyecto deja de ser ficticio y escala a colegio mediano/grande con equipo de comunicación dedicado.

---

## 17. Checklist final (cumple / no cumple)

| Criterio funcional | Estado | Nota |
|---|---|---|
| Misión / Visión / Valores | ✅ Cumple | Completos y claros. |
| Historia institucional | ✅ Cumple | Hitos desde 1985. |
| Equipo directivo | ✅ Cumple | 4 cargos; fotos placeholder (iniciales). |
| Niveles educativos | ✅ Cumple | Nursery→Media. |
| Metodología | ✅ Cumple | Constructivista + pilares. |
| Proceso de admisión | ✅ Cumple | Pasos, requisitos, fechas, arancel. |
| Formulario de contacto funcional | ✅ Cumple | mailto + endpoint + honeypot. |
| Noticias / eventos | ✅ Cumple (parcial) | Sin ficha de detalle. |
| Galería | ⚠️ Parcial | Usa imágenes aleatorias (picsum), no del colegio. |
| FAQ | ✅ Cumple | 3 categorías, acordeón accesible. |
| **Calendario escolar anual** | ❌ No cumple | Solo fechas de admisión. |
| **Documentos descargables** | ❌ No cumple | Ninguno. |
| **Mapa / ubicación real** | ❌ No cumple | Placeholder. |
| **Transparencia / Convivencia** | ❌ No cumple | Ausente. |
| **Política de Privacidad real** | ❌ No cumple | Enlaces apuntan a FAQ. |
| Comunicados urgentes | ❌ No cumple | No diferenciado. |
| Buscador interno | ❌ No cumple | Ausente. |
| Acceso a plataformas externas | ❌ No cumple | Fuera de alcance. |
| Portal estudiante / docente | ❌ No aplica | Declarar fuera de alcance. |
| SEO por página | ✅ Cumple | Title/desc/OG/Twitter. |
| Sitemap / robots.txt | ❌ No cumple | Ausentes. |
| Imagen OG | ❌ No cumple | Referenciada pero inexistente. |
| Headers de seguridad | ✅ Cumple | Pero CSP rompe fuentes (bug). |
| Accesibilidad base | ⚠️ Parcial | Skip link + labels OK; contraste y lightbox mejorables. |
| Mobile / responsivo | ✅ Cumple | Menú hamburguesa y layout OK. |

---

## 18. Adaptación por tamaño del colegio

- **Pequeño (≤300 alumnos)**: El sitio actual es **suficiente como vitrina**. Priorizar solo lo Imprescindible (calendario, documentos, mapa, privacidad). El mailto del contacto es adecuado; reCAPTCHA y CMS son sobreingeniería.
- **Mediano (300–1000 alumnos)**: Necesita calendario escolar, repositorio de documentos y comunicados urgentes **sí o sí** (volumen de apoderados). Buscador interno y formulario de admisión real pasan a Recomendable. CMS opcional.
- **Grande (≥1000 alumnos)**: Requiere portal de apoderados/estudiantes (LMS, notas), comunicados masivos, transparencia reforzada y analíticas. Aquí SSG/SSR y un CMS empiezan a tener sentido, pero microservicios/Kubernetes siguen siendo excesivos.

---

## Veredicto

El Colegio Horizonte tiene una **muy buena base de "sitio vitrina"** con identidad clara y alto potencial de captación. Para ser un sitio que **realmente ayuda a una escuela día a día**, debe dejar de ser solo una carta de presentación y sumar: **calendario escolar, documentos descargables, mapa real, transparencia/convivencia y privacidad real**. Esas cinco piezas son el puente entre "se ve profesional" y "sirve a la comunidad".
