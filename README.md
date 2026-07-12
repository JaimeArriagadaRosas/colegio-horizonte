# 🏫 Sitio Web - Colegio Horizonte

> [!NOTE]
> **Proyecto para Portafolio (Ficticio)**  
> Este es un proyecto de demostración creado con fines de portafolio profesional. El "Colegio Horizonte" y toda la información expuesta son ficticios. Al ser la primera versión subida del sitio web, se encuentra en fase inicial y abierto a cambios, mejoras y modificaciones constantes, por lo que puede no reflejar aún todos los estándares o la calidad final de un sitio web empresarial en producción.

Este repositorio contiene la plataforma web desarrollada utilizando tecnologías modernas para ofrecer una experiencia rápida, interactiva y accesible.

La plataforma cuenta con un diseño responsivo, animaciones fluidas y optimización SEO para asegurar que el contenido escolar se presente de manera intuitiva.

---

## 🚀 Tecnologías Principales

El proyecto está construido sobre el siguiente stack tecnológico:

- **Frontend Core**: [React 19](https://react.dev/) y [TypeScript](https://www.typescriptlang.org/)
- **Herramienta de Construcción**: [Vite 8](https://vite.dev/)
- **Estilos**: [Tailwind CSS 4](https://tailwindcss.com/) para una estilización moderna y fluida.
- **Animaciones**: [Framer Motion 12](https://www.framer.com/motion/) para transiciones suaves y efectos interactivos.
- **Enrutamiento**: [React Router Dom 7](https://reactrouter.com/)
- **Iconografía**: [Lucide React](https://lucide.dev/)
- **Validación de Formularios**: Validación nativa con HTML5 y manejo de estado local en React.
- **SEO**: [React Helmet Async](https://github.com/staylor/react-helmet-async)
- **Linter**: [Oxlint](https://oxc.rs/docs/guide/usage/linter/intro.html) para un análisis estático de código ultra rápido.

---

## 📂 Estructura del Proyecto

A continuación se detalla la estructura principal del código fuente dentro de la carpeta `src/`:

```text
src/
├── assets/             # Recursos estáticos (imágenes, logos, etc.)
├── components/         # Componentes reutilizables de la interfaz
│   ├── layout/         # Componentes globales de estructura (Navbar, Footer, SEO, ScrollToTop)
│   └── ui/             # Componentes de interfaz de usuario comunes
├── data/               # Información estática del sitio
│   ├── content.ts      # Datos y textos principales de las secciones del colegio
│   └── navigation.ts   # Rutas y enlaces de navegación
├── pages/              # Vistas principales correspondientes a cada ruta
│   ├── Home.tsx        # Página de inicio
│   ├── About.tsx       # Sección "Nosotros" (Historia, Misión, Visión, Equipo de liderazgo)
│   ├── Academic.tsx    # Sección "Oferta Académica" (Niveles educativos, Talleres)
│   ├── Admission.tsx   # Sección "Admisión" (Proceso de postulación, Requisitos, Vacantes)
│   ├── News.tsx        # Sección de "Noticias" y eventos escolares
│   ├── Gallery.tsx     # Galería de fotos del colegio
│   ├── FAQ.tsx         # Sección de Preguntas Frecuentes
│   └── Contact.tsx     # Formulario de contacto y datos de ubicación
├── AppRouter.tsx       # Definición de rutas principales con React Router
└── main.tsx            # Punto de entrada de la aplicación
```

---

## ⚙️ Scripts Disponibles

En el directorio del proyecto, puedes ejecutar los siguientes comandos utilizando `npm`:

### `npm run dev`
Inicia el servidor de desarrollo local.  
Abre [http://localhost:5173](http://localhost:5173) en tu navegador para ver la aplicación en tiempo real.

### `npm run build`
Compila la aplicación para producción.  
Genera archivos optimizados y minificados listos para desplegar en la carpeta `dist/`.

### `npm run lint`
Ejecuta el linter **Oxlint** para analizar y asegurar la calidad del código TypeScript y React de forma instantánea.

### `npm run preview`
Inicia un servidor local para previsualizar la compilación de producción generada por `npm run build`.

---

## 🛠️ Scripts de Automatización (Windows)

El proyecto incluye dos scripts `.bat` y `.ps1` en la raíz para facilitar tareas comunes de desarrollo y despliegue:

### 1. `iniciar.bat`
Este script automatiza el arranque del entorno de desarrollo.
- **Función**: Verifica si la carpeta `node_modules` existe; de no ser así, instala las dependencias mediante `npm install` de forma automática. Luego inicia el servidor de desarrollo de Vite.
- **Uso**: Ejecutar desde la raíz del proyecto: `iniciar.bat`

### 2. `deploy.bat` / `deploy.ps1`
Este script automatiza el control de versiones y el envío del código a GitHub.
- **Uso básico**: Ejecutar `deploy.bat` para realizar un **Preview** de la información del commit y estado actual del repositorio.
- **Despliegue real**: Ejecutar `deploy.bat push` para confirmar los cambios y hacer `push` a la rama del repositorio remoto (realiza una validación de seguridad de la cuenta de GitHub de destino).

---

## 🎨 Características Destacadas del Sitio

1. **Diseño Premium y Responsivo**: Adaptado perfectamente para dispositivos móviles, tablets y computadoras de escritorio.
2. **Interactividad Dinámica**: Uso de animaciones de entrada, efectos hover elegantes y carga diferida visual integrada con Framer Motion.
3. **Formularios Validados**: Formulario de contacto con validación HTML5, manejo de errores por campo y feedback de envío.
4. **Optimización SEO**: Cada vista tiene meta-etiquetas descriptivas, títulos personalizados y etiquetas canónicas administradas a través de `react-helmet-async` e implementadas en el componente `SEO`.
