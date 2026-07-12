# Bibliografía - Auditoría Integral Colegio Horizonte

## Seguridad

### OWASP ASVS
- **Título**: OWASP Application Security Verification Standard (ASVS)
- **Organización**: OWASP Foundation
- **URL**: https://owasp.org/www-project-application-security-verification-standard/
- **Descripción**: Estándar de verificación de seguridad de aplicaciones que define requisitos técnicos para desarrollar, mantener y verificar aplicaciones seguras.
- **Relevancia**: Marco de referencia fundamental para evaluar controles de seguridad en la aplicación SPA.

### OWASP Top 10
- **Título**: OWASP Top 10 - 2021
- **Organización**: OWASP Foundation
- **URL**: https://owasp.org/Top10/
- **Descripción**: Lista de los 10 riesgos de seguridad más críticos en aplicaciones web, referencia estándar en la industria.
- **Relevancia**: Base para la auditoría de seguridad realizada (XSS, CSRF, Broken Access Control, etc.).

### OWASP Developer Guide
- **Título**: OWASP Developer Guide
- **Organización**: OWASP Foundation
- **URL**: https://owasp.org/www-project-developer-guide/
- **Descripción**: Guía integral para desarrolladores sobre prácticas seguras de codificación.
- **Relevancia**: Referencia para evaluar prácticas de desarrollo seguro en React/TypeScript.

### OWASP Cheat Sheet Series
- **Título**: OWASP Cheat Sheet Series
- **Organización**: OWASP Foundation
- **URL**: https://cheatsheetseries.owasp.org/
- **Descripción**: Serie de hojas de referencia concisas sobre temas específicos de seguridad (XSS, CSP, CORS, JWT, Authentication, etc.).
- **Relevancia**: Referencia práctica para implementar controles específicos en el proyecto.

### OWASP Secure Coding Practices
- **Título**: OWASP Secure Coding Practices - Quick Reference Guide
- **Organización**: OWASP Foundation
- **URL**: https://owasp.org/www-project-secure-coding-practices-quick-reference-guide/
- **Descripción**: Guía de referencia rápida de prácticas de codificación segura.
- **Relevancia**: Estándar para evaluar la seguridad del código fuente del proyecto.

### NIST Secure Software Development Framework (SSDF)
- **Título**: NIST Secure Software Development Framework (SSDF) SP 800-218
- **Organización**: NIST (National Institute of Standards and Technology)
- **URL**: https://csrc.nist.gov/publications/detail/sp/800-218/final
- **Descripción**: Framework para mejorar la seguridad del software mediante prácticas de desarrollo seguro.
- **Relevancia**: Marco para evaluar procesos de desarrollo, gestión de dependencias y pipeline de seguridad.

## Estándares Web y Accesibilidad

### WCAG 2.1
- **Título**: Web Content Accessibility Guidelines (WCAG) 2.1
- **Organización**: W3C (World Wide Web Consortium)
- **URL**: https://www.w3.org/TR/WCAG21/
- **Descripción**: Estándar internacional de accesibilidad web con directrices para hacer el contenido accesible a personas con discapacidades.
- **Relevancia**: Evaluación de accesibilidad (WCAG) en el frontend del proyecto.

### MDN Web Docs
- **Título**: MDN Web Docs
- **Organización**: Mozilla Developer Network
- **URL**: https://developer.mozilla.org/
- **Descripción**: Documentación definitiva para tecnologías web (HTML, CSS, JavaScript, React, TypeScript, etc.).
- **Relevancia**: Referencia técnica para evaluar implementaciones de APIs web, seguridad y mejores prácticas.

### W3C
- **Título**: W3C Web Platform Documentation
- **Organización**: W3C
- **URL**: https://www.w3.org/standards/
- **Descripción**: Estándares y especificaciones oficiales de la web.
- **Relevancia**: Referencia para evaluar conformidad con estándares web.

### RFC 7231 - HTTP/1.1 Semantics and Content
- **Título**: Hypertext Transfer Protocol (HTTP/1.1): Semantics and Content
- **Organización**: IETF
- **URL**: https://datatracker.ietf.org/doc/html/rfc7231
- **Descripción**: Especificación oficial de semántica HTTP para métodos, códigos de estado y headers.
- **Relevancia**: Evaluación de códigos HTTP, headers de seguridad y cache.

### RFC 6750 - OAuth 2.0 Bearer Token Usage
- **Título**: The OAuth 2.0 Authorization Framework: Bearer Token Usage
- **Organización**: IETF
- **URL**: https://datatracker.ietf.org/doc/html/rfc6750
- **Descripción**: Especificación del estándar Bearer Token para OAuth 2.0.
- **Relevancia**: Referencia si el proyecto incorpora autenticación/autorización en el futuro.

### RFC 7519 - JSON Web Token (JWT)
- **Título**: JSON Web Token (JWT)
- **Organización**: IETF
- **URL**: https://datatracker.ietf.org/doc/html/rfc7519
- **Descripción**: Estándar para tokens de acceso JSON.
- **Relevancia**: Evaluación de prácticas de autenticación cuando se implemente.

### RFC 7516 - JSON Web Encryption (JWE)
- **Título**: JSON Web Encryption (JWE)
- **Organización**: IETF
- **URL**: https://datatracker.ietf.org/doc/html/rfc7516
- **Descripción**: Estándar de cifrado para tokens JSON.
- **Relevancia**: Referencia de seguridad para autenticación.

### RFC 8941 - HTTP Structured Field Values
- **Título**: HTTP Structured Field Values
- **Organización**: IETF
- **URL**: https://datatracker.ietf.org/doc/html/rfc8941
- **Descripción**: Formato estructurado para campos de encabezado HTTP.
- **Relevancia**: Evaluación de CSP, Permissions-Policy y otros headers estructurados.

## Arquitectura y Diseño

### Twelve-Factor App
- **Título**: The Twelve-Factor App
- **Organización**: Heroku / Adam Wiggins
- **URL**: https://12factor.net/
- **Descripción**: Metodología para construir aplicaciones SaaS modernas, escalables y mantenibles.
- **Relevancia**: Evaluación de arquitectura, configuración, logging, portabilidad.

## Rendimiento Web

### Google Web Fundamentals
- **Título**: Web Fundamentals
- **Organización**: Google Developers
- **URL**: https://developers.google.com/web/fundamentals
- **Descripción**: Guía oficial de Google sobre mejores prácticas para construir experiencias web rápidas y accesibles.
- **Relevancia**: Referencia para evaluar performance, Core Web Vitals, PWA.

### Web.dev
- **Título**: web.dev
- **Organización**: Google Chrome Team
- **URL**: https://web.dev/
- **Descripción**: Recursos y guías sobre rendimiento, accesibilidad y mejores prácticas web.
- **Relevancia**: Evaluación de Core Web Vitals, optimización de carga, SEO técnico.

## Observabilidad

### OpenTelemetry
- **Título**: OpenTelemetry
- **Organización**: Cloud Native Computing Foundation (CNCF)
- **URL**: https://opentelemetry.io/
- **Descripción**: Framework abierto para observabilidad distribuida (traces, metrics, logs).
- **Relevancia**: Referencia para implementar tracing y observabilidad en arquitecturas de producción.

### Prometheus
- **Título**: Prometheus
- **Organización**: Cloud Native Computing Foundation (CNCF)
- **URL**: https://prometheus.io/
- **Descripción**: Sistema de monitoreo y alertas open source.
- **Relevancia**: Referencia para implementar métricas en entornos de producción.

## Contenedores y Orquestación

### Docker Best Practices
- **Título**: Docker Best Practices
- **Organización**: Docker Inc.
- **URL**: https://docs.docker.com/develop/develop-images/dockerfile_best-practices/
- **Descripción**: Guía oficial de mejores prácticas para escribir Dockerfiles y construir imágenes.
- **Relevancia**: Referencia para evaluar contenedores cuando se implemente despliegue en contenedores.

### Kubernetes Best Practices
- **Título**: Kubernetes Best Practices
- **Organización**: CNCF / Cloud Native Computing Foundation
- **URL**: https://kubernetes.io/docs/concepts/security/security-checklist/
- **Descripción**: Guías oficiales de mejores prácticas de seguridad y operación en Kubernetes.
- **Relevancia**: Referencia cuando se considere orquestación del despliegue.

## Bases de Datos

### PostgreSQL Documentation
- **Título**: PostgreSQL Documentation
- **Organización**: PostgreSQL Global Development Group
- **URL**: https://www.postgresql.org/docs/
- **Descripción**: Documentación oficial de PostgreSQL.
- **Relevancia**: Referencia para evaluar diseño de base de datos cuando se implemente persistencia backend.

## Frameworks y Librerías

### React Documentation
- **Título**: React Documentation
- **Organización**: Meta (Facebook)
- **URL**: https://react.dev/
- **Descripción**: Documentación oficial de React 19.
- **Relevancia**: Referencia para evaluar patrones de uso de React, hooks, Server Components, rendimiento.

### TypeScript Documentation
- **Título**: TypeScript Documentation
- **Organización**: Microsoft
- **URL**: https://www.typescriptlang.org/docs/
- **Descripción**: Documentación oficial de TypeScript.
- **Relevancia**: Referencia para evaluar configuración de TypeScript, tipos, seguridad de tipos.

### Vite Documentation
- **Título**: Vite Documentation
- **Organización**: Evan You / Vite Team
- **URL**: https://vitejs.dev/
- **Descripción**: Documentación oficial de Vite.
- **Relevancia**: Referencia para evaluar configuración de bundler, optimizaciones de build y despliegue.

### Tailwind CSS Documentation
- **Título**: Tailwind CSS Documentation
- **Organización**: Tailwind Labs
- **URL**: https://tailwindcss.com/docs
- **Descripción**: Documentación oficial de Tailwind CSS.
- **Relevancia**: Referencia para evaluar configuración de estilos, optimización de CSS y diseño responsivo.

### Framer Motion Documentation
- **Título**: Framer Motion Documentation
- **Organización**: Framer
- **URL**: https://www.framer.com/motion/
- **Descripción**: Documentación oficial de Framer Motion.
- **Relevancia**: Referencia para evaluar implementaciones de animaciones y su impacto en rendimiento.

### React Router Documentation
- **Título**: React Router Documentation
- **Organización**: Remix / React Router Team
- **URL**: https://reactrouter.com/
- **Descripción**: Documentación oficial de React Router.
- **Relevancia**: Referencia para evaluar enrutamiento, navegación y Server Rendering.

### React Hook Form Documentation
- **Título**: React Hook Form Documentation
- **Organización**: React Hook Form
- **URL**: https://react-hook-form.com/
- **Descripción**: Documentación oficial de React Hook Form para manejo de formularios.
- **Relevancia**: Referencia para evaluar validaciones y manejo de estado de formularios.

### Zod Documentation
- **Título**: Zod Documentation
- **Organización**: Colin McDonnell
- **URL**: https://zod.dev/
- **Descripción**: Documentación oficial de Zod para validación de esquemas TypeScript.
- **Relevancia**: Referencia para evaluar esquemas de validación y type safety.

### Oxlint Documentation
- **Título**: Oxlint Documentation
- **Organización**: OXC (Oxidation Compiler)
- **URL**: https://oxc.rs/docs/guide/usage/linter/intro.html
- **Descripción**: Documentación oficial de Oxlint, linter rápido para JavaScript/TypeScript.
- **Relevancia**: Referencia para evaluar configuración de linting y calidad de código.
