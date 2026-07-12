export const schoolData = {
  name: 'Colegio Horizonte',
  motto: 'Formando líderes con valores',
  founded: 1985,
  location: 'Av. Providencia 1234, Santiago, Chile',
  phone: '+56 2 2345 6789',
  email: 'info@colegiohorizonte.cl',
  principal: 'María Elena González',
  students: 1200,
  teachers: 85,
  programs: 4,
  yearsExperience: 39,
}

export const aboutData = {
  mission:
    'Proporcionar una educación integral de excelencia que forme líderes con valores éticos, capacidad crítica y compromiso social.',
  vision:
    'Ser reconocidos como el referente educativo en formación de personas íntegras, capaces de transformar positivamente su entorno.',
  values: [
    {
      title: 'Excelencia',
      description: 'Buscamos la mejora continua en todos los ámbitos de la formación educativa.',
      icon: 'Award',
    },
    {
      title: 'Integridad',
      description: 'Actuamos con honestidad, transparencia y coherencia entre lo que decimos y hacemos.',
      icon: 'Heart',
    },
    {
      title: 'Respeto',
      description: 'Valoramos la diversidad y promovemos un ambiente de convivencia armónica.',
      icon: 'Users',
    },
    {
      title: 'Innovación',
      description: 'Adoptamos metodologías innovadoras para preparar a nuestros estudiantes para el futuro.',
      icon: 'Lightbulb',
    },
    {
      title: 'Compromiso',
      description: 'Nos dedicamos con pasión a la formación de cada uno de nuestros estudiantes.',
      icon: 'Target',
    },
    {
      title: 'Solidaridad',
      description: 'Fomentamos la empatía y el apoyo mutuo en nuestra comunidad educativa.',
      icon: 'HandHeart',
    },
  ],
  milestones: [
    { year: 1985, event: 'Fundación del colegio con 3 cursos y 45 alumnos' },
    { year: 1990, event: 'Primera generación de graduados' },
    { year: 1998, event: 'Ampliación de infraestructura: laboratorios y biblioteca' },
    { year: 2005, event: 'Certificación ISO 9001 en gestión educativa' },
    { year: 2012, event: 'Implementación de programa de bilingüismo' },
    { year: 2018, event: 'Inauguración del centro de innovación tecnológica' },
    { year: 2023, event: 'Reconocimiento como Mejor Colegio de la Región' },
  ],
  team: [
    { name: 'María Elena González', role: 'Directora General', image: '/images/team/director.jpg' },
    { name: 'Carlos Rodríguez', role: 'Director Académico', image: '/images/team/academic.jpg' },
    { name: 'Ana Martínez', role: 'Jefa de Admisiones', image: '/images/team/admissions.jpg' },
    { name: 'Pedro Sánchez', role: 'Coordinador de Tecnología', image: '/images/team/tech.jpg' },
  ],
}

export const programsData = [
  {
    id: 'nursery',
    title: 'Nursery',
    subtitle: '2 a 3 años',
    description:
      'Un espacio seguro y estimulante donde los más pequeños desarrollan sus primeras habilidades sociales, motoras y cognitivas a través del juego y la exploración.',
    features: [
      'Grupos reducidos (máx. 15 alumnos)',
      'Ambiente estimulante y seguro',
      'Juego como herramienta de aprendizaje',
      'Seguimiento personalizado del desarrollo',
      'Comunicación constante con familias',
    ],
    schedule: 'Lunes a Viernes, 8:00 - 14:00',
    icon: 'Baby',
  },
  {
    id: 'preschool',
    title: 'Preschool',
    subtitle: '3 a 5 años',
    description:
      'Educación inicial que desarrolla la curiosidad natural de los niños, fomentando la autonomía, creatividad y habilidades sociales en un ambiente de confianza.',
    features: [
      'Metodología constructivista',
      'Desarrollo del lenguaje oral y escrito',
      'Introducción al pensamiento lógico-matemático',
      'Expresión artística y musical',
      'Preparación para educación primaria',
    ],
    schedule: 'Lunes a Viernes, 8:00 - 15:00',
    icon: 'Sparkles',
  },
  {
    id: 'primary',
    title: 'Educación Primaria',
    subtitle: '1° a 6° básico',
    description:
      'Formación académica sólida con desarrollo de habilidades cognitivas, sociales y emocionales. Preparación integral para los desafíos de la educación media.',
    features: [
      'Programa académico fortalecido',
      'Inglés intensivo desde 1° básico',
      'Programa de robótica y programación',
      'Deportes y actividades extracurriculares',
      'Tutorías personalizadas',
    ],
    schedule: 'Lunes a Viernes, 8:00 - 16:00',
    icon: 'BookOpen',
  },
  {
    id: 'secondary',
    title: 'Educación Media',
    subtitle: '7° básico a 4° medio',
    description:
      'Preparación para la educación superior con formación académica de excelencia, desarrollo de liderazgo y orientación vocacional personalizada.',
    features: [
      'Preparación para PAES',
      'Orientación vocacional y universitaria',
      'Programa de liderazgo estudiantil',
      'Certificaciones internacionales',
      'Intercambios estudiantiles',
    ],
    schedule: 'Lunes a Viernes, 8:00 - 17:00',
    icon: 'GraduationCap',
  },
]

export const methodologyData = {
  approach: 'Constructivista',
  description:
    'Nuestra metodología se basa en la teoría constructivista, donde los estudiantes construyen su propio conocimiento a través de la experiencia, la reflexión y la interacción con su entorno.',
  pillars: [
    {
      title: 'Aprendizaje Activo',
      description: 'Los estudiantes participan activamente en su proceso de aprendizaje.',
    },
    {
      title: 'Pensamiento Crítico',
      description: 'Desarrollamos la capacidad de analizar, cuestionar y reflexionar.',
    },
    {
      title: 'Trabajo Colaborativo',
      description: 'Fomentamos el trabajo en equipo y la comunicación efectiva.',
    },
    {
      title: 'Tecnología Educativa',
      description: 'Integramos herramientas digitales para potenciar el aprendizaje.',
    },
  ],
}

export const admissionData = {
  steps: [
    {
      step: 1,
      title: 'Solicitud de Información',
      description: 'Completa el formulario en línea o contáctanos para recibir información detallada.',
    },
    {
      step: 2,
      title: 'Visita al Colegio',
      description: 'Agenda una visita guiada para conocer nuestras instalaciones y metodología.',
    },
    {
      step: 3,
      title: 'Entrega de Documentación',
      description: 'Presenta los documentos requeridos: certificados, fotografías, formularios.',
    },
    {
      step: 4,
      title: 'Evaluación',
      description: 'Evaluación académica y entrevista familiar según el nivel de postulación.',
    },
    {
      step: 5,
      title: 'Notificación',
      description: 'Recibirás la respuesta de admisión en un plazo máximo de 15 días hábiles.',
    },
    {
      step: 6,
      title: 'Matrícula',
      description: 'Confirma tu cupo y completa el proceso de matrícula.',
    },
  ],
  requirements: [
    'Certificado de nacimiento del alumno/a',
    'Certificado de escolaridad anterior',
    'Cédula de identidad del apoderado',
    'Certificado de residencia',
    '2 fotografías tamaño carné',
    'Formulario de postulación completo',
  ],
  dates: [
    { date: '1 de Marzo', event: 'Apertura de postulaciones' },
    { date: '30 de Abril', event: 'Cierre de postulaciones' },
    { date: '1-15 de Mayo', event: 'Período de evaluaciones' },
    { date: '30 de Mayo', event: 'Publicación de resultados' },
    { date: '1-15 de Junio', event: 'Período de matrículas' },
    { date: '10 de Marzo', event: 'Inicio de clases' },
  ],
  tuition: {
    description: 'Ofrecemos planes de financiamiento flexibles y becas basadas en mérito académico y necesidad socioeconómica.',
    plans: [
      {
        name: 'Plan Anual',
        description: 'Pago único con 10% de descuento',
        price: '$4.500.000',
      },
      {
        name: 'Plan Semestral',
        description: '2 pagos con 5% de descuento',
        price: '$2.400.000',
      },
      {
        name: 'Plan Mensual',
        description: '11 cuotas de $430.000',
        price: '$430.000/mes',
      },
    ],
  },
}

export const newsData = [
  {
    id: 1,
    title: 'Jornada de Puertas Abiertas 2025',
    excerpt:
      'Te invitamos a conocer nuestras instalaciones y metodología educativa en nuestra próxima jornada de puertas abiertas.',
    content:
      'El Colegio Horizonte invita a todas las familias interesadas a nuestra Jornada de Puertas Abiertas el próximo 15 de marzo. Podrán recorrer nuestras instalaciones, conocer a nuestros docentes y experimentar nuestra metodología educativa en vivo.',
    date: '2025-01-15',
    category: 'Eventos',
    image: '/images/news/puertas-abiertas.jpg',
    featured: true,
  },
  {
    id: 2,
    title: 'Nuestros estudiantes destacan en Olimpiadas de Matemáticas',
    excerpt:
      'Ocho estudiantes de Educación Media obtuvieron medallas en la competencia regional de matemáticas.',
    content:
      'Con gran orgullo anunciamos que nuestros estudiantes de 2° y 3° medio obtuvieron 3 medallas de oro, 3 de plata y 2 de bronce en las Olimpiadas Regionales de Matemáticas.',
    date: '2025-01-10',
    category: 'Logros',
    image: '/images/news/matematicas.jpg',
    featured: false,
  },
  {
    id: 3,
    title: 'Inauguración del nuevo laboratorio de ciencias',
    excerpt:
      'Contamos con un moderno laboratorio equipado con tecnología de punta para la experimentación científica.',
    content:
      'El nuevo laboratorio de ciencias cuenta con equipos de última generación, estaciones de trabajo colaborativo y herramientas digitales para potenciar el aprendizaje científico.',
    date: '2024-12-20',
    category: 'Infraestructura',
    image: '/images/news/laboratorio.jpg',
    featured: false,
  },
  {
    id: 4,
    title: 'Programa de Intercambio Internacional',
    excerpt:
      'Abre la convocatoria para el programa de intercambio con escuelas de Estados Unidos y España.',
    content:
      'Los estudiantes de 3° y 4° medio pueden postular al programa de intercambio internacional. Una experiencia transformadora para desarrollar competencias globales.',
    date: '2024-12-15',
    category: 'Oportunidades',
    image: '/images/news/intercambio.jpg',
    featured: false,
  },
  {
    id: 5,
    title: 'Festival de Arte y Cultura',
    excerpt:
      'Celebramos la creatividad de nuestros estudiantes con presentaciones de teatro, música y danza.',
    content:
      'El Festival Anual de Arte reunió a más de 500 personas para disfrutar de las presentaciones de nuestros estudiantes en música, teatro, danza y artes visuales.',
    date: '2024-11-30',
    category: 'Eventos',
    image: '/images/news/festival.jpg',
    featured: false,
  },
  {
    id: 6,
    title: 'Resultados PAES 2024',
    excerpt:
      'Nuestros estudiantes obtuvieron resultados sobresalientes en la prueba de acceso a la educación superior.',
    content:
      'Con un puntaje promedio de 650 puntos, nuestros egresados se ubican entre el 10% superior a nivel nacional, destacando especialmente en Matemáticas y Ciencias.',
    date: '2024-11-15',
    category: 'Logros',
    image: '/images/news/paes.jpg',
    featured: false,
  },
]

export const galleryData = {
  categories: ['Instalaciones', 'Eventos', 'Actividades', 'Graduaciones'],
  images: [
    { id: 1, src: '/images/gallery/img1.jpg', alt: 'Patio principal del colegio', category: 'Instalaciones', seed: 'school1' },
    { id: 2, src: '/images/gallery/img2.jpg', alt: 'Aula de clases', category: 'Instalaciones', seed: 'school2' },
    { id: 3, src: '/images/gallery/img3.jpg', alt: 'Laboratorio de ciencias', category: 'Instalaciones', seed: 'school3' },
    { id: 4, src: '/images/gallery/img4.jpg', alt: 'Biblioteca', category: 'Instalaciones', seed: 'school4' },
    { id: 5, src: '/images/gallery/img5.jpg', alt: 'Cancha de fútbol', category: 'Instalaciones', seed: 'school5' },
    { id: 6, src: '/images/gallery/img6.jpg', alt: 'Gimnasio', category: 'Instalaciones', seed: 'school6' },
    { id: 7, src: '/images/gallery/img7.jpg', alt: 'Festival de arte', category: 'Eventos', seed: 'event1' },
    { id: 8, src: '/images/gallery/img8.jpg', alt: 'Ceremonia de graduación', category: 'Eventos', seed: 'event2' },
    { id: 9, src: '/images/gallery/img9.jpg', alt: 'Día de la familia', category: 'Eventos', seed: 'event3' },
    { id: 10, src: '/images/gallery/img10.jpg', alt: 'Actividad deportiva', category: 'Actividades', seed: 'activity1' },
    { id: 11, src: '/images/gallery/img11.jpg', alt: 'Taller de robótica', category: 'Actividades', seed: 'activity2' },
    { id: 12, src: '/images/gallery/img12.jpg', alt: 'Salida pedagógica', category: 'Actividades', seed: 'activity3' },
    { id: 13, src: '/images/gallery/img13.jpg', alt: 'Graduación 2023', category: 'Graduaciones', seed: 'grad1' },
    { id: 14, src: '/images/gallery/img14.jpg', alt: 'Graduación 2022', category: 'Graduaciones', seed: 'grad2' },
    { id: 15, src: '/images/gallery/img15.jpg', alt: 'Entrega de diplomas', category: 'Graduaciones', seed: 'grad3' },
    { id: 16, src: '/images/gallery/img16.jpg', alt: 'Jardín infantil', category: 'Actividades', seed: 'activity4' },
  ],
}

export const faqData = [
  {
    category: 'Admisión',
    questions: [
      {
        question: '¿Cuándo comienza el período de postulación?',
        answer:
          'El período de postulación para el año académico comienza el 1 de marzo de cada año. Recomendamos iniciar el proceso con anticipación para asegurar cupo.',
      },
      {
        question: '¿Qué documentos necesito para postular?',
        answer:
          'Los documentos requeridos son: certificado de nacimiento, certificado de escolaridad anterior, cédula de identidad del apoderado, certificado de residencia, 2 fotografías tamaño carné y el formulario de postulación completo.',
      },
      {
        question: '¿El colegio ofrece becas o beneficios?',
        answer:
          'Sí, contamos con un programa de becas basadas en mérito académico y necesidad socioeconómica. Puedes solicitar información específica en nuestra oficina de admisiones.',
      },
    ],
  },
  {
    category: 'Académico',
    questions: [
      {
        question: '¿Cuál es el tamaño de los cursos?',
        answer:
          'Nuestros cursos tienen un máximo de 30 estudiantes en Educación Media y 25 en Educación Básica. En Nursery, el máximo es de 15 estudiantes.',
      },
      {
        question: '¿Qué metodología educativa utilizan?',
        answer:
          'Utilizamos una metodología constructivista que promueve el aprendizaje activo, el pensamiento crítico y el trabajo colaborativo, complementada con herramientas tecnológicas.',
      },
      {
        question: '¿Ofrecen educación bilingüe?',
        answer:
          'Sí, nuestro programa incluye inglés intensivo desde Nursery hasta 4° medio. También ofrecemos la oportunidad de rendir exámenes internacionales de inglés.',
      },
    ],
  },
  {
    category: 'Servicios',
    questions: [
      {
        question: '¿El colegio cuenta con servicio de alimentación?',
        answer:
          'Sí, ofrecemos servicio de casino con mención nutricional preparado por profesionales. Contamos con opciones para diferentes necesidades alimenticias.',
      },
      {
        question: '¿Hay servicio de transporte escolar?',
        answer:
          'Sí, contamos con rutas de transporte escolar que cubren las principales zonas de Santiago. El servicio incluye supervisión durante el trayecto.',
      },
      {
        question: '¿Qué actividades extracurriculares hay disponibles?',
        answer:
          'Ofrecemos más de 20 actividades extracurriculares: deportes (fútbol, básquetbol, natación), artes (música, teatro, danza), robótica, debate, idiomas y más.',
      },
    ],
  },
]

export type CalendarEventType =
  | 'clases'
  | 'feriado'
  | 'reunion'
  | 'evaluacion'
  | 'evento'

export const calendarLegend: { type: CalendarEventType; label: string }[] = [
  { type: 'clases', label: 'Jornada de clases' },
  { type: 'feriado', label: 'Feriado / sin clases' },
  { type: 'reunion', label: 'Reunión de apoderados' },
  { type: 'evaluacion', label: 'Evaluaciones / pruebas' },
  { type: 'evento', label: 'Evento escolar' },
]

export const calendarData = [
  {
    month: 'Marzo',
    events: [
      { day: 10, title: 'Inicio de clases 2025', type: 'clases' as CalendarEventType },
      { day: 21, title: 'Ceremonia de bienvenida', type: 'evento' as CalendarEventType },
      { day: 28, title: 'Reunión de apoderados (1° reunión)', type: 'reunion' as CalendarEventType },
    ],
  },
  {
    month: 'Abril',
    events: [
      { day: 18, title: 'Vacaciones de Semana Santa', type: 'feriado' as CalendarEventType },
      { day: 25, title: 'Cierre primer trimestre (primaria)', type: 'evaluacion' as CalendarEventType },
    ],
  },
  {
    month: 'Mayo',
    events: [
      { day: 1, title: 'Día del trabajo (sin clases)', type: 'feriado' as CalendarEventType },
      { day: 21, title: 'Cientifico: Batalla de las artes', type: 'evento' as CalendarEventType },
    ],
  },
  {
    month: 'Junio',
    events: [
      { day: 9, title: 'Periodo de matrículas 2026', type: 'reunion' as CalendarEventType },
      { day: 29, title: 'San Pedro y San Pablo (sin clases)', type: 'feriado' as CalendarEventType },
    ],
  },
  {
    month: 'Julio',
    events: [
      { day: 14, title: 'Inicio vacaciones de invierno', type: 'feriado' as CalendarEventType },
      { day: 28, title: 'Retorno a clases', type: 'clases' as CalendarEventType },
    ],
  },
  {
    month: 'Agosto',
    events: [
      { day: 15, title: 'Asueto regional (sin clases)', type: 'feriado' as CalendarEventType },
      { day: 22, title: 'Día del estudiante', type: 'evento' as CalendarEventType },
    ],
  },
  {
    month: 'Septiembre',
    events: [
      { day: 17, title: 'Fiestas patrias (sin clases)', type: 'feriado' as CalendarEventType },
      { day: 19, title: 'Acto cívico y ramadas escolares', type: 'evento' as CalendarEventType },
    ],
  },
  {
    month: 'Octubre',
    events: [
      { day: 10, title: 'Día de la raza (sin clases)', type: 'feriado' as CalendarEventType },
      { day: 24, title: 'Reunión de apoderados (2° reunión)', type: 'reunion' as CalendarEventType },
    ],
  },
  {
    month: 'Noviembre',
    events: [
      { day: 1, title: 'Día de todos los santos (sin clases)', type: 'feriado' as CalendarEventType },
      { day: 15, title: 'Resultados PAES egresados', type: 'evaluacion' as CalendarEventType },
    ],
  },
  {
    month: 'Diciembre',
    events: [
      { day: 12, title: 'Ceremonia de graduación 4° medio', type: 'evento' as CalendarEventType },
      { day: 19, title: 'Cierre de año escolar', type: 'clases' as CalendarEventType },
    ],
  },
]

export type DocumentCategory = 'Admisión' | 'Convivencia' | 'Académico' | 'Familia'

export const documentsData: {
  id: string
  title: string
  description: string
  category: DocumentCategory
  updated: string
  content: string[]
}[] = [
  {
    id: 'reglamento-convivencia',
    title: 'Reglamento de Convivencia Escolar',
    description:
      'Normas de convivencia, deberes y derechos de estudiantes, y protocolos de resolución de conflictos (Ley 20.536).',
    category: 'Convivencia',
    updated: '2025-03-01',
    content: [
      'REGLAMENTO DE CONVIVENCIA ESCOLAR',
      'Colegio Horizonte',
      '',
      '1. OBJETO',
      'Este reglamento regula la convivencia escolar conforme a la Ley 20.536, promoviendo un ambiente de respeto, seguridad y participacion.',
      '',
      '2. DEBERES DE LOS ESTUDIANTES',
      '- Asistir puntualmente a clases y cumplir con sus tareas.',
      '- Respetar a sus pares, docentes y personal del colegio.',
      '- Cuidar las instalaciones y materiales de la comunidad.',
      '',
      '3. PROTOCOLO DE CONFLICTOS',
      'Los conflictos se resuelven mediante mediación del equipo de convivencia, priorizando la reparacion y no la exclusion.',
      '',
      '4. BUZON DE CONVIVENCIA',
      'La comunidad puede reportar situaciones a traves del formulario de contacto del sitio web.',
    ],
  },
  {
    id: 'uniforme-escolar',
    title: 'Guía de Uniforme Escolar',
    description:
      'Descripción del uniforme de diario, educación física y uso de agendina para cada nivel.',
    category: 'Familia',
    updated: '2025-02-20',
    content: [
      'GUIA DE UNIFORME ESCOLAR',
      'Colegio Horizonte',
      '',
      'UNIFORME DE DIARIO',
      '- Polera institucional (azul) con logo del colegio.',
      '- Pantalón piluso o falda escolar (gris).',
      '- Zapatos negros cerrados.',
      '',
      'EDUCACION FISICA',
      '- Polera deportiva institucional.',
      '- Short o pantalón deportivo (azul).',
      '- Zapatillas deportivas.',
      '',
      'USO OPCIONAL',
      '- Buzo institucional en invierno.',
      '- Gorro y delantal segun nivel.',
    ],
  },
  {
    id: 'lista-utiles',
    title: 'Lista de Útiles Escolares 2025',
    description:
      'Materiales sugeridos por nivel para el año académico 2025.',
    category: 'Académico',
    updated: '2025-02-15',
    content: [
      'LISTA DE UTILES ESCOLARES 2025',
      'Colegio Horizonte',
      '',
      'EDUCACION BASICA',
      '- 2 cuadernos college 100 hojas.',
      '- Set de lapices grafito y colores.',
      '- Caja de lápices de cera.',
      '- Tijera sin punta, pegamento y cartulina.',
      '',
      'EDUCACION MEDIA',
      '- Cuadernos de 200 hojas por asignatura.',
      '- Computador portatil segun norma del colegio.',
      '- Material de geometria.',
      '',
      'Nota: La lista completa por curso se entrega al matricularse.',
    ],
  },
  {
    id: 'formulario-postulacion',
    title: 'Formulario de Postulación',
    description:
      'Antecedentes y pasos para iniciar el proceso de admisión al Colegio Horizonte.',
    category: 'Admisión',
    updated: '2025-01-10',
    content: [
      'FORMULARIO DE POSTULACION',
      'Colegio Horizonte',
      '',
      'PASOS',
      '1. Solicitar informacion en el sitio web o telefonicamente.',
      '2. Agendar visita guiada a las instalaciones.',
      '3. Entregar documentacion requerida.',
      '4. Asistir a evaluacion y entrevista familiar.',
      '5. Esperar notificacion de admision (15 dias habiles).',
      '',
      'DOCUMENTOS',
      '- Certificado de nacimiento.',
      '- Certificado de escolaridad anterior.',
      '- Cedula de identidad del apoderado.',
      '- Certificado de residencia y 2 fotos carné.',
    ],
  },
  {
    id: 'autorizacion-imagen',
    title: 'Autorización de Uso de Imagen',
    description:
      'Consentimiento de apoderados para la publicación de fotografías de menores en medios del colegio (Ley 19.628).',
    category: 'Familia',
    updated: '2025-03-05',
    content: [
      'AUTORIZACION DE USO DE IMAGEN',
      'Colegio Horizonte',
      '',
      'El suscrito apoderado autoriza/nO autoriza la captacion y publicacion de la imagen del alumno(a) en:',
      '- Sitio web institucional.',
      '- Redes sociales oficiales del colegio.',
      '- Publicaciones internas y boletines.',
      '',
      'El colegio trata estos datos conforme a la Ley 19.628 de Proteccion de la Vida Privada y solo con fines educativos.',
      '',
      'Firma apoderado: ____________   Rut: ____________',
    ],
  },
  {
    id: 'calendario-escolar',
    title: 'Calendario Escolar 2025 (resumen)',
    description:
      'Resumen imprimible de fechas clave del año académico.',
    category: 'Académico',
    updated: '2025-01-05',
    content: [
      'CALENDARIO ESCOLAR 2025',
      'Colegio Horizonte',
      '',
      'MARZO: Inicio de clases 10, reunion de apoderados 28.',
      'ABRIL: Vacaciones Semana Santa 18.',
      'JULIO: Vacaciones de invierno 14 al 27.',
      'SEPTIEMBRE: Fiestas patrias 17 y 18.',
      'DICIEMBRE: Graduacion 4° medio 12, cierre de ano 19.',
      '',
      'El detalle completo esta disponible en la seccion Calendario del sitio.',
    ],
  },
]

export const testimonialsData = [
  {
    name: 'Carolina Mendoza',
    role: 'Madre de alumno de 3° básico',
    content:
      'La dedicación de los profesores y el ambiente acogedor hacen que nuestros hijos estén felices de venir al colegio cada día.',
    avatar: '/images/testimonials/avatar1.jpg',
  },
  {
    name: 'Roberto Silva',
    role: 'Padre de alumna de 1° medio',
    content:
      'Excelente formación académica y valores. Mi hija ha crecido enormemente desde que ingresó a Horizonte.',
    avatar: '/images/testimonials/avatar2.jpg',
  },
  {
    name: 'Francisca Torres',
    role: 'Egresada 2023',
    content:
      'Los años en Horizonte me prepararon perfectamente para la universidad. Los valores que me enseñaron me acompañan hoy.',
    avatar: '/images/testimonials/avatar3.jpg',
  },
]

export const featuresData = [
  {
    icon: 'Award',
    title: 'Excelencia Académica',
    description:
      'Resultados sobresalientes en evaluaciones nacionales e internacionales. Nuestros egresados acceden a las mejores universidades.',
  },
  {
    icon: 'Heart',
    title: 'Formación en Valores',
    description:
      'Educación integral que combina excelencia académica con formación ética y compromiso social.',
  },
  {
    icon: 'MonitorSmartphone',
    title: 'Tecnología Educativa',
    description:
      'Aula digital, plataforma de aprendizaje virtual y laboratorios de innovación para una educación moderna.',
  },
  {
    icon: 'Users',
    title: 'Comunidad Unida',
    description:
      'Una comunidad educativa comprometida donde familias, docentes y estudiantes crecen juntos.',
  },
]
