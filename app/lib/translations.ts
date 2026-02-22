export type Locale = "es" | "en";

export interface Translations {
  nav: {
    home: string;
    experience: string;
    stack: string;
    projects: string;
    blog: string;
    contact: string;
  };
  hero: {
    greeting: string;
    subtitles: string[];
    description: string;
    viewProjects: string;
    contact: string;
    downloadCV: string;
    availableForOpportunities: string;
  };
  experience: {
    title: string;
    titleHighlight: string;
    subtitle: string;
    entries: {
      company: string;
      role: string;
      period: string;
      description: string[];
      tech: string[];
    }[];
  };
  techStack: {
    title: string;
    titleHighlight: string;
    subtitle: string;
    categoryBackend: string;
    categoryCloud: string;
    categoryDatabases: string;
    categoryFrontend: string;
    categoryDevOps: string;
    categoryLanguages: string;
    englishLevel: string;
    spanishLevel: string;
  };
  projects: {
    title: string;
    titleHighlight: string;
    subtitle: string;
    entries: {
      id: string;
      title: string;
      subtitle: string;
      description: string;
      highlights: string[];
      status: string;
      category: string;
      tech: string[];
      websiteUrl?: string;
      image?: string;
      features: {
        icon: string;
        title: string;
        description: string;
      }[];
    }[];
  };
  bento: {
    about: string;
    quickOverview: string;
    currentlyAt: string;
    location: string;
    status: string;
    timezone: string;
    fullTimeRoles: string;
    selectiveFreelance: string;
    remoteHybrid: string;
  };
  projectModal: {
    technologies: string;
    keyFeatures: string;
    highlights: string;
    visitWebsite: string;
    previewNotAvailable: string;
    hoverToScroll: string;
    closeModal: string;
  };
  common: {
    toggleLanguage: string;
    toggleTheme: string;
    toggleMenu: string;
    github: string;
    linkedin: string;
    email: string;
    shareOn: string;
    copyLink: string;
    clickToViewDetails: string;
  };
  contact: {
    title: string;
    subtitle: string;
    nameLabel: string;
    namePlaceholder: string;
    emailLabel: string;
    emailPlaceholder: string;
    subjectLabel: string;
    subjectPlaceholder: string;
    messageLabel: string;
    messagePlaceholder: string;
    sendButton: string;
    sending: string;
    successMessage: string;
    errorRequired: string;
    errorEmail: string;
    locationLabel: string;
    locationValue: string;
  };
  stats: {
    title: string;
    titleHighlight: string;
    items: {
      value: number;
      suffix: string;
      label: string;
    }[];
  };
  services: {
    title: string;
    titleHighlight: string;
    subtitle: string;
    entries: {
      title: string;
      description: string;
      highlights: string[];
    }[];
  };
  blog: {
    title: string;
    titleHighlight: string;
    subtitle: string;
    searchPlaceholder: string;
    allCategories: string;
    minRead: string;
    publishedOn: string;
    backToBlog: string;
    sharePost: string;
    noPosts: string;
    noResults: string;
    tags: string;
  };
  footer: {
    builtWith: string;
  };
}

export const translations: Record<Locale, Translations> = {
  es: {
    nav: {
      home: "Inicio",
      experience: "Experiencia",
      stack: "Stack",
      projects: "Proyectos",
      blog: "Blog",
      contact: "Contacto",
    },
    hero: {
      greeting: "Bienvenido a mi portfolio",
      subtitles: [
        "Backend Developer",
        "Python & AWS Serverless Specialist",
        "Cloud Architecture Enthusiast",
      ],
      description:
        "Especializado en arquitecturas serverless con AWS, DynamoDB y ArangoDB. Desarrollo de sistemas escalables y APIs de alto rendimiento para aplicaciones empresariales.",
      viewProjects: "Ver Proyectos",
      contact: "Contacto",
      downloadCV: "Descargar CV",
      availableForOpportunities: "Disponible para oportunidades",
    },
    experience: {
      title: "Experiencia",
      titleHighlight: "Laboral",
      subtitle:
        "Mi trayectoria profesional construyendo sistemas escalables y soluciones backend.",
      entries: [
        {
          company: "Neostella",
          role: "Backend Developer",
          period: "Abril 2024 - Presente",
          description: [
            "Arquitectura de sistemas serverless de automatización con Python, AWS Lambda, Step Functions y API Gateway",
            "Diseño e implementación de bases de datos escalables con DynamoDB y ArangoDB",
            "Diseño e implementación de APIs RESTful para flujos de automatización interna",
            "Implementación de sistemas resilientes con manejo de errores y monitoreo con Coralogix",
            "Optimización de consultas y rendimiento en DynamoDB y ArangoDB",
          ],
          tech: [
            "Python",
            "AWS Lambda",
            "Step Functions",
            "API Gateway",
            "DynamoDB",
            "ArangoDB",
            "SQS",
            "Coralogix",
          ],
        },
        {
          company: "Plusenergy",
          role: "Software Developer",
          period: "Julio 2023 - Abril 2025",
          description: [
            "Desarrollo full-stack de sistema de monitoreo de consumo energético (React Native + Python AWS serverless)",
            "Recolección y procesamiento de datos en tiempo real desde dispositivos IoT",
            "Diseño y optimización de endpoints con AWS Lambda para procesamiento eficiente de datos",
            "Sitio web corporativo con React integrando AWS Lambda y DynamoDB para contenido dinámico",
            "CI/CD pipelines con GitHub Actions y AWS Amplify (reducción de 40% en deployment time)",
            "Componentes de visualización de datos para el mercado energético colombiano (30% aumento en engagement)",
          ],
          tech: [
            "React Native",
            "Python",
            "AWS Lambda",
            "DynamoDB",
            "GitHub Actions",
            "Amplify",
          ],
        },
        {
          company: "Somos Gente Digital",
          role: "Freelance Software Developer",
          period: "Junio 2021 - Abril 2023",
          description: [
            "Desarrollo de aplicaciones web responsive con React (25% aumento en retención de usuarios)",
            "Implementación de APIs RESTful y servicios backend con Node.js (35% mejora en velocidad de recuperación de datos)",
            "Control de versiones con Git/GitHub en proyectos colaborativos (reducción de 50% en conflictos de código)",
            "Liderazgo de procesos Agile, logrando un 20% de aumento en eficiencia de entrega",
          ],
          tech: ["React", "Node.js", "JavaScript", "HTML5", "CSS3", "Git"],
        },
      ],
    },
    techStack: {
      title: "Tech",
      titleHighlight: "Stack",
      subtitle:
        "Las tecnologías y herramientas con las que trabajo día a día.",
      categoryBackend: "Backend",
      categoryCloud: "Cloud",
      categoryDatabases: "Bases de Datos",
      categoryFrontend: "Frontend",
      categoryDevOps: "DevOps",
      categoryLanguages: "Lenguajes",
      englishLevel: "Inglés (B2 - Intermedio Alto)",
      spanishLevel: "Español (Nativo)",
    },
    projects: {
      title: "Proyectos",
      titleHighlight: "Destacados",
      subtitle:
        "Una selección de proyectos web que he desarrollado, desde sitios corporativos hasta plataformas de monitoreo.",
      entries: [
        {
          id: "bexsoluciones",
          title: "Bex Soluciones",
          subtitle: "Plataforma de Logística Empresarial",
          description:
            "Sitio web corporativo moderno para empresa de soluciones logísticas, con diseño responsive y arquitectura optimizada para SEO.",
          category: "Next.js",
          tech: ["Next.js", "React", "Tailwind CSS", "Vercel"],
          highlights: [
            "Diseño responsive optimizado",
            "SEO avanzado",
            "Rendimiento superior",
          ],
          status: "Producción",
          websiteUrl: "https://www.bexsoluciones.com/",
          image: "/portfolio-long/bexsoluciones.png",
          features: [
            {
              icon: "⚛️",
              title: "Arquitectura React",
              description: "Componentes reutilizables y estado optimizado para mejor rendimiento",
            },
            {
              icon: "✏️",
              title: "CMS Integrado",
              description: "Sistema de gestión de contenido fácil de actualizar",
            },
            {
              icon: "📱",
              title: "Diseño Responsive",
              description: "Experiencia perfecta en todos los dispositivos",
            },
            {
              icon: "⚡",
              title: "Optimización SEO",
              description: "Mejores prácticas para posicionamiento en buscadores",
            },
          ],
        },
        {
          id: "cjbservice",
          title: "CJB Service",
          subtitle: "Sitio Web de Servicios Profesionales",
          description:
            "Plataforma web para empresa de servicios con WordPress, optimizada para conversiones y fácil gestión de contenido.",
          category: "WordPress",
          tech: ["WordPress", "PHP", "CSS3", "MySQL"],
          highlights: [
            "Gestión de contenido intuitiva",
            "Optimización de conversiones",
            "Diseño mobile-first",
          ],
          status: "Producción",
          websiteUrl: "https://cjbservice.com/",
          image: "/portfolio-long/cjbservice.png",
          features: [
            {
              icon: "🏗️",
              title: "WordPress Personalizado",
              description: "Tema custom adaptado a las necesidades del negocio",
            },
            {
              icon: "📈",
              title: "SEO Optimizado",
              description: "Configuración avanzada para mejor visibilidad online",
            },
            {
              icon: "📱",
              title: "Mobile First",
              description: "Diseño priorizado para dispositivos móviles",
            },
            {
              icon: "🎯",
              title: "Conversión Optimizada",
              description: "Llamadas a la acción estratégicamente ubicadas",
            },
          ],
        },
        {
          id: "plusenergy",
          title: "Plusenergy",
          subtitle: "Plataforma de Monitoreo Energético",
          description:
            "Sitio web corporativo y plataforma de monitoreo para empresa del sector energético, con integración de apps móviles (disponibles en App Store y Google Play).",
          category: "React",
          tech: ["React", "Python", "AWS Lambda", "DynamoDB", "React Native"],
          highlights: [
            "Integración con apps móviles",
            "Visualización de datos en tiempo real",
            "Aumento del 30% en engagement",
          ],
          status: "Producción",
          websiteUrl: "https://plusenergy.com.co/",
          image: "/portfolio-long/plusenergy-co.png",
          features: [
            {
              icon: "⚛️",
              title: "React Moderno",
              description: "Interfaz dinámica con hooks y context API",
            },
            {
              icon: "🎨",
              title: "UI/UX Profesional",
              description: "Diseño intuitivo enfocado en la experiencia del usuario",
            },
            {
              icon: "📱",
              title: "Apps Móviles",
              description: "Apps complementarias en iOS y Android (Plusenergy & Plusenergy Consumidores)",
            },
            {
              icon: "⚡",
              title: "Backend Serverless",
              description: "AWS Lambda y DynamoDB para escalabilidad",
            },
          ],
        },
        {
          id: "porterparts",
          title: "Porter Parts",
          subtitle: "E-commerce de Repuestos Automotrices",
          description:
            "Tienda online completa para venta de repuestos automotrices, con catálogo extenso, carrito de compras y gestión de inventario.",
          category: "Next.js",
          tech: ["Next.js", "TypeScript", "Tailwind CSS", "Stripe"],
          highlights: [
            "Catálogo de productos robusto",
            "Integración de pagos segura",
            "Panel de administración",
          ],
          status: "Producción",
          websiteUrl: "https://www.porterparts.com/",
          image: "/portfolio-long/porterparts.png",
          features: [
            {
              icon: "☁️",
              title: "E-commerce Escalable",
              description: "Arquitectura preparada para alto volumen de transacciones",
            },
            {
              icon: "🛒",
              title: "Carrito Avanzado",
              description: "Sistema de compras intuitivo con gestión de inventario",
            },
            {
              icon: "📱",
              title: "Experiencia Mobile",
              description: "Compras optimizadas desde cualquier dispositivo",
            },
            {
              icon: "🔒",
              title: "Pagos Seguros",
              description: "Integración con Stripe para transacciones protegidas",
            },
          ],
        },
        {
          id: "templeofgroom",
          title: "Temple of Groom Barbershop",
          subtitle: "Sitio Web de Barbería Premium",
          description:
            "Sitio web elegante para barbería de alto nivel, con sistema de reservas integrado y galería de servicios.",
          category: "WordPress",
          tech: ["WordPress", "PHP", "CSS3", "JavaScript"],
          highlights: [
            "Diseño elegante y moderno",
            "Sistema de reservas online",
            "Galería de servicios",
          ],
          status: "Producción",
          websiteUrl: "https://www.templeofgroombarbershop.com/",
          image: "/portfolio-long/templeofgroombarbershop.png",
          features: [
            {
              icon: "💈",
              title: "Diseño Único",
              description: "Identidad visual que refleja la marca premium",
            },
            {
              icon: "📅",
              title: "Reservas Online",
              description: "Sistema integrado de agendamiento de citas",
            },
            {
              icon: "📱",
              title: "Mobile Optimizado",
              description: "Navegación fluida en smartphones",
            },
            {
              icon: "🎨",
              title: "Galería Visual",
              description: "Showcase de servicios y trabajos realizados",
            },
          ],
        },
      ],
    },
    contact: {
      title: "Contacto",
      subtitle: "¿Tienes un proyecto en mente? ¡Hablemos!",
      nameLabel: "Nombre *",
      namePlaceholder: "Tu nombre completo",
      emailLabel: "Email *",
      emailPlaceholder: "tu@email.com",
      subjectLabel: "Asunto",
      subjectPlaceholder: "¿De qué quieres hablar?",
      messageLabel: "Mensaje *",
      messagePlaceholder: "Cuéntame sobre tu proyecto...",
      sendButton: "Enviar Mensaje",
      sending: "Enviando...",
      successMessage: "¡Se abrió tu cliente de email! Envía el mensaje desde ahí.",
      errorRequired: "Por favor completa los campos requeridos.",
      errorEmail: "Por favor ingresa un email válido.",
      locationLabel: "Ubicación",
      locationValue: "Medellín, Colombia",
    },
    stats: {
      title: "Impacto en",
      titleHighlight: "Números",
      items: [
        { value: 4, suffix: "+", label: "Años de experiencia" },
        { value: 5, suffix: "+", label: "Proyectos en producción" },
        { value: 3, suffix: "", label: "Empresas" },
        { value: 40, suffix: "%", label: "Reducción en deploy time" },
      ],
    },
    services: {
      title: "Lo que",
      titleHighlight: "Hago",
      subtitle:
        "Servicios especializados en desarrollo backend y arquitectura cloud para llevar tu producto al siguiente nivel.",
      entries: [
        {
          title: "Arquitectura Serverless",
          description:
            "Diseño e implementación de sistemas serverless escalables con AWS Lambda, Step Functions y API Gateway.",
          highlights: ["AWS Lambda", "Step Functions", "Alta disponibilidad"],
        },
        {
          title: "Desarrollo de APIs",
          description:
            "APIs RESTful de alto rendimiento, diseñadas para escalar y con documentación clara.",
          highlights: ["RESTful", "Python", "Node.js"],
        },
        {
          title: "Infraestructura Cloud",
          description:
            "Configuración y gestión de servicios AWS: bases de datos, colas, almacenamiento y monitoreo.",
          highlights: ["DynamoDB", "SQS", "S3"],
        },
        {
          title: "Automatización de Procesos",
          description:
            "Flujos de trabajo automatizados que eliminan tareas manuales y reducen errores operativos.",
          highlights: ["CI/CD", "GitHub Actions", "Workflows"],
        },
      ],
    },
    blog: {
      title: "Mi",
      titleHighlight: "Blog",
      subtitle:
        "Reflexiones y aprendizajes sobre desarrollo backend, arquitectura cloud y tecnología.",
      searchPlaceholder: "Buscar artículos...",
      allCategories: "Todas",
      minRead: "min de lectura",
      publishedOn: "Publicado el",
      backToBlog: "Volver al Blog",
      sharePost: "Compartir",
      noPosts: "No hay artículos publicados aún.",
      noResults: "No se encontraron artículos con esos criterios.",
      tags: "Etiquetas",
    },
    bento: {
      about: "Acerca de",
      quickOverview: "Resumen Rápido",
      currentlyAt: "Trabajo actual",
      location: "Ubicación",
      status: "Estado",
      timezone: "GMT-5 · Disponible para trabajo remoto",
      fullTimeRoles: "Roles a tiempo completo",
      selectiveFreelance: "Freelance selectivo",
      remoteHybrid: "Remoto e híbrido",
    },
    projectModal: {
      technologies: "Tecnologías",
      keyFeatures: "Características Principales",
      highlights: "Destacados",
      visitWebsite: "Visitar Sitio Web",
      previewNotAvailable: "Vista previa no disponible",
      hoverToScroll: "Pasar el ratón para desplazarse",
      closeModal: "Cerrar modal",
    },
    common: {
      toggleLanguage: "Cambiar idioma",
      toggleTheme: "Cambiar tema",
      toggleMenu: "Cambiar menú",
      github: "GitHub",
      linkedin: "LinkedIn",
      email: "Email",
      shareOn: "Compartir en",
      copyLink: "Copiar enlace",
      clickToViewDetails: "Haz clic para ver detalles →",
    },
    footer: {
      builtWith: "Built with Next.js, Tailwind CSS & Framer Motion.",
    },
  },
  en: {
    nav: {
      home: "Home",
      experience: "Experience",
      stack: "Stack",
      projects: "Projects",
      blog: "Blog",
      contact: "Contact",
    },
    hero: {
      greeting: "Welcome to my portfolio",
      subtitles: [
        "Backend Developer",
        "Python & AWS Serverless Specialist",
        "Cloud Architecture Enthusiast",
      ],
      description:
        "Specialized in serverless architectures with AWS, DynamoDB, and ArangoDB. Building scalable systems and high-performance APIs for enterprise applications.",
      viewProjects: "View Projects",
      contact: "Contact",
      downloadCV: "Download CV",
      availableForOpportunities: "Available for opportunities",
    },
    experience: {
      title: "Work",
      titleHighlight: "Experience",
      subtitle:
        "My professional journey building scalable systems and backend solutions.",
      entries: [
        {
          company: "Neostella",
          role: "Backend Developer",
          period: "April 2024 - Present",
          description: [
            "Architecture of serverless automation systems with Python, AWS Lambda, Step Functions, and API Gateway",
            "Design and implementation of scalable databases with DynamoDB and ArangoDB",
            "Design and implementation of RESTful APIs for internal automation workflows",
            "Implementation of resilient systems with error handling and monitoring via Coralogix",
            "Query optimization and performance tuning in DynamoDB and ArangoDB",
          ],
          tech: [
            "Python",
            "AWS Lambda",
            "Step Functions",
            "API Gateway",
            "DynamoDB",
            "ArangoDB",
            "SQS",
            "Coralogix",
          ],
        },
        {
          company: "Plusenergy",
          role: "Software Developer",
          period: "July 2023 - April 2025",
          description: [
            "Full-stack development of energy consumption monitoring system (React Native + Python AWS serverless)",
            "Real-time data collection and processing from IoT devices",
            "Design and optimization of API endpoints with AWS Lambda for efficient data retrieval and processing",
            "Corporate website built with React, integrating AWS Lambda and DynamoDB for dynamic content management",
            "CI/CD pipelines with GitHub Actions and AWS Amplify (40% reduction in deployment time)",
            "Data visualization components for the Colombian energy market (30% increase in user engagement)",
          ],
          tech: [
            "React Native",
            "Python",
            "AWS Lambda",
            "DynamoDB",
            "GitHub Actions",
            "Amplify",
          ],
        },
        {
          company: "Somos Gente Digital",
          role: "Freelance Software Developer",
          period: "June 2021 - April 2023",
          description: [
            "Developed responsive web applications with React, achieving a 25% increase in user retention",
            "Implemented RESTful APIs and backend services using Node.js (35% improvement in data retrieval speed)",
            "Utilized Git and GitHub for version control, reducing code conflicts by 50% in collaborative projects",
            "Led Agile development processes, resulting in a 20% increase in project delivery efficiency",
          ],
          tech: ["React", "Node.js", "JavaScript", "HTML5", "CSS3", "Git"],
        },
      ],
    },
    techStack: {
      title: "Tech",
      titleHighlight: "Stack",
      subtitle: "The technologies and tools I work with every day.",
      categoryBackend: "Backend",
      categoryCloud: "Cloud",
      categoryDatabases: "Databases",
      categoryFrontend: "Frontend",
      categoryDevOps: "DevOps",
      categoryLanguages: "Languages",
      englishLevel: "English (B2 - Upper Intermediate)",
      spanishLevel: "Spanish (Native)",
    },
    projects: {
      title: "Featured",
      titleHighlight: "Projects",
      subtitle:
        "A selection of web projects I've developed, from corporate websites to monitoring platforms.",
      entries: [
        {
          id: "bexsoluciones",
          title: "Bex Soluciones",
          subtitle: "Enterprise Logistics Platform",
          description:
            "Modern corporate website for logistics solutions company, with responsive design and SEO-optimized architecture.",
          category: "Next.js",
          tech: ["Next.js", "React", "Tailwind CSS", "Vercel"],
          highlights: [
            "Optimized responsive design",
            "Advanced SEO",
            "Superior performance",
          ],
          status: "Production",
          websiteUrl: "https://www.bexsoluciones.com/",
          image: "/portfolio-long/bexsoluciones.png",
          features: [
            {
              icon: "⚛️",
              title: "React Architecture",
              description: "Reusable components and optimized state for better performance",
            },
            {
              icon: "✏️",
              title: "Integrated CMS",
              description: "Easy-to-update content management system",
            },
            {
              icon: "📱",
              title: "Responsive Design",
              description: "Perfect experience across all devices",
            },
            {
              icon: "⚡",
              title: "SEO Optimization",
              description: "Best practices for search engine ranking",
            },
          ],
        },
        {
          id: "cjbservice",
          title: "CJB Service",
          subtitle: "Professional Services Website",
          description:
            "Web platform for service company with WordPress, optimized for conversions and easy content management.",
          category: "WordPress",
          tech: ["WordPress", "PHP", "CSS3", "MySQL"],
          highlights: [
            "Intuitive content management",
            "Conversion optimization",
            "Mobile-first design",
          ],
          status: "Production",
          websiteUrl: "https://cjbservice.com/",
          image: "/portfolio-long/cjbservice.png",
          features: [
            {
              icon: "🏗️",
              title: "Custom WordPress",
              description: "Custom theme adapted to business needs",
            },
            {
              icon: "📈",
              title: "SEO Optimized",
              description: "Advanced configuration for better online visibility",
            },
            {
              icon: "📱",
              title: "Mobile First",
              description: "Design prioritized for mobile devices",
            },
            {
              icon: "🎯",
              title: "Conversion Optimized",
              description: "Strategically placed calls to action",
            },
          ],
        },
        {
          id: "plusenergy",
          title: "Plusenergy",
          subtitle: "Energy Monitoring Platform",
          description:
            "Corporate website and monitoring platform for energy sector company, with mobile app integration (available on App Store and Google Play).",
          category: "React",
          tech: ["React", "Python", "AWS Lambda", "DynamoDB", "React Native"],
          highlights: [
            "Mobile app integration",
            "Real-time data visualization",
            "30% engagement increase",
          ],
          status: "Production",
          websiteUrl: "https://plusenergy.com.co/",
          image: "/portfolio-long/plusenergy-co.png",
          features: [
            {
              icon: "⚛️",
              title: "Modern React",
              description: "Dynamic interface with hooks and context API",
            },
            {
              icon: "🎨",
              title: "Professional UI/UX",
              description: "Intuitive design focused on user experience",
            },
            {
              icon: "📱",
              title: "Mobile Apps",
              description: "Complementary apps on iOS and Android (Plusenergy & Plusenergy Consumidores)",
            },
            {
              icon: "⚡",
              title: "Serverless Backend",
              description: "AWS Lambda and DynamoDB for scalability",
            },
          ],
        },
        {
          id: "porterparts",
          title: "Porter Parts",
          subtitle: "Automotive Parts E-commerce",
          description:
            "Complete online store for automotive parts sales, with extensive catalog, shopping cart, and inventory management.",
          category: "Next.js",
          tech: ["Next.js", "TypeScript", "Tailwind CSS", "Stripe"],
          highlights: [
            "Robust product catalog",
            "Secure payment integration",
            "Admin panel",
          ],
          status: "Production",
          websiteUrl: "https://www.porterparts.com/",
          image: "/portfolio-long/porterparts.png",
          features: [
            {
              icon: "☁️",
              title: "Scalable E-commerce",
              description: "Architecture ready for high transaction volume",
            },
            {
              icon: "🛒",
              title: "Advanced Cart",
              description: "Intuitive shopping system with inventory management",
            },
            {
              icon: "📱",
              title: "Mobile Experience",
              description: "Optimized shopping from any device",
            },
            {
              icon: "🔒",
              title: "Secure Payments",
              description: "Stripe integration for protected transactions",
            },
          ],
        },
        {
          id: "templeofgroom",
          title: "Temple of Groom Barbershop",
          subtitle: "Premium Barbershop Website",
          description:
            "Elegant website for high-end barbershop, with integrated booking system and service gallery.",
          category: "WordPress",
          tech: ["WordPress", "PHP", "CSS3", "JavaScript"],
          highlights: [
            "Elegant and modern design",
            "Online booking system",
            "Service gallery",
          ],
          status: "Production",
          websiteUrl: "https://www.templeofgroombarbershop.com/",
          image: "/portfolio-long/templeofgroombarbershop.png",
          features: [
            {
              icon: "💈",
              title: "Unique Design",
              description: "Visual identity reflecting the premium brand",
            },
            {
              icon: "📅",
              title: "Online Booking",
              description: "Integrated appointment scheduling system",
            },
            {
              icon: "📱",
              title: "Mobile Optimized",
              description: "Smooth navigation on smartphones",
            },
            {
              icon: "🎨",
              title: "Visual Gallery",
              description: "Showcase of services and completed work",
            },
          ],
        },
      ],
    },
    contact: {
      title: "Contact",
      subtitle: "Have a project in mind? Let's talk!",
      nameLabel: "Name *",
      namePlaceholder: "Your full name",
      emailLabel: "Email *",
      emailPlaceholder: "you@email.com",
      subjectLabel: "Subject",
      subjectPlaceholder: "What do you want to talk about?",
      messageLabel: "Message *",
      messagePlaceholder: "Tell me about your project...",
      sendButton: "Send Message",
      sending: "Sending...",
      successMessage: "Your email client has been opened! Send the message from there.",
      errorRequired: "Please fill in the required fields.",
      errorEmail: "Please enter a valid email address.",
      locationLabel: "Location",
      locationValue: "Medellín, Colombia",
    },
    stats: {
      title: "Impact in",
      titleHighlight: "Numbers",
      items: [
        { value: 4, suffix: "+", label: "Years of experience" },
        { value: 5, suffix: "+", label: "Projects in production" },
        { value: 3, suffix: "", label: "Companies" },
        { value: 40, suffix: "%", label: "Deploy time reduction" },
      ],
    },
    services: {
      title: "What I",
      titleHighlight: "Do",
      subtitle:
        "Specialized services in backend development and cloud architecture to take your product to the next level.",
      entries: [
        {
          title: "Serverless Architecture",
          description:
            "Design and implementation of scalable serverless systems with AWS Lambda, Step Functions, and API Gateway.",
          highlights: ["AWS Lambda", "Step Functions", "High availability"],
        },
        {
          title: "API Development",
          description:
            "High-performance RESTful APIs, designed to scale with clear documentation.",
          highlights: ["RESTful", "Python", "Node.js"],
        },
        {
          title: "Cloud Infrastructure",
          description:
            "Setup and management of AWS services: databases, queues, storage, and monitoring.",
          highlights: ["DynamoDB", "SQS", "S3"],
        },
        {
          title: "Process Automation",
          description:
            "Automated workflows that eliminate manual tasks and reduce operational errors.",
          highlights: ["CI/CD", "GitHub Actions", "Workflows"],
        },
      ],
    },
    blog: {
      title: "My",
      titleHighlight: "Blog",
      subtitle:
        "Thoughts and learnings about backend development, cloud architecture and technology.",
      searchPlaceholder: "Search articles...",
      allCategories: "All",
      minRead: "min read",
      publishedOn: "Published on",
      backToBlog: "Back to Blog",
      sharePost: "Share",
      noPosts: "No articles published yet.",
      noResults: "No articles found matching your criteria.",
      tags: "Tags",
    },
    bento: {
      about: "About",
      quickOverview: "Quick Overview",
      currentlyAt: "Currently at",
      location: "Location",
      status: "Status",
      timezone: "GMT-5 · Open to remote",
      fullTimeRoles: "Full-time roles",
      selectiveFreelance: "Selective freelance",
      remoteHybrid: "Remote & hybrid",
    },
    projectModal: {
      technologies: "Technologies",
      keyFeatures: "Key Features",
      highlights: "Highlights",
      visitWebsite: "Visit Website",
      previewNotAvailable: "Preview not available",
      hoverToScroll: "Hover to scroll preview",
      closeModal: "Close modal",
    },
    common: {
      toggleLanguage: "Toggle language",
      toggleTheme: "Toggle theme",
      toggleMenu: "Toggle menu",
      github: "GitHub",
      linkedin: "LinkedIn",
      email: "Email",
      shareOn: "Share on",
      copyLink: "Copy link",
      clickToViewDetails: "Click to view details →",
    },
    footer: {
      builtWith: "Built with Next.js, Tailwind CSS & Framer Motion.",
    },
  },
};
