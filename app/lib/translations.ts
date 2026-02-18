export type Locale = "es" | "en";

export interface Translations {
  nav: {
    home: string;
    experience: string;
    stack: string;
    projects: string;
    contact: string;
  };
  hero: {
    greeting: string;
    subtitles: string[];
    description: string;
    viewProjects: string;
    contact: string;
    downloadCV: string;
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
  };
  projects: {
    title: string;
    titleHighlight: string;
    subtitle: string;
    entries: {
      title: string;
      description: string;
      highlights: string[];
      status: string;
      tech: string[];
    }[];
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
    },
    projects: {
      title: "Proyectos",
      titleHighlight: "Destacados",
      subtitle:
        "Una selección de proyectos que demuestran mi experiencia en desarrollo backend y serverless.",
      entries: [
        {
          title: "Serverless Automation Platform",
          description:
            "Sistema de automatización empresarial con AWS serverless para gestión de workflows complejos.",
          tech: ["Python", "AWS Lambda", "Step Functions", "DynamoDB", "ArangoDB"],
          highlights: [
            "Dynamic execution engine",
            "Context management",
            "Comprehensive error handling",
          ],
          status: "Production (Neostella)",
        },
        {
          title: "Energy Monitoring Platform",
          description:
            "Plataforma full-stack para monitoreo de consumo energético en tiempo real.",
          tech: ["React Native", "Python", "AWS Lambda", "DynamoDB"],
          highlights: [
            "Real-time data visualization",
            "CI/CD automation",
            "30% user engagement increase",
          ],
          status: "Production (Plusenergy)",
        },
        {
          title: "E-commerce Platform",
          description:
            "Plataforma de e-commerce custom con integraciones de pago y gestión de inventario.",
          tech: ["Next.js", "TypeScript", "Stripe", "PostgreSQL", "AWS"],
          highlights: [
            "Custom checkout flows",
            "Admin dashboard",
            "SEO optimization",
          ],
          status: "Proyecto Freelance",
        },
        {
          title: "Spa Booking System",
          description:
            "Sistema de reservas con calendario interactivo y gestión de servicios.",
          tech: ["Next.js", "Calendar API", "AWS Lambda", "DynamoDB"],
          highlights: [
            "Real-time availability",
            "Automated notifications",
            "Payment integration",
          ],
          status: "Proyecto Freelance",
        },
        {
          title: "RESTful API Optimization",
          description:
            "APIs de alto rendimiento con AWS serverless y optimización de queries.",
          tech: ["Python", "AWS Lambda", "API Gateway", "DynamoDB"],
          highlights: [
            "Sub-100ms response times",
            "Efficient query patterns",
            "Scalable architecture",
          ],
          status: "Producción",
        },
        {
          title: "Business Analytics Dashboard",
          description:
            "Dashboard de analytics con visualizaciones interactivas para métricas de negocio.",
          tech: ["React", "D3.js", "Python", "AWS Lambda"],
          highlights: [
            "Real-time charts",
            "Data aggregation",
            "Export capabilities",
          ],
          status: "Producción",
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
    },
    projects: {
      title: "Featured",
      titleHighlight: "Projects",
      subtitle:
        "A selection of projects showcasing my experience in backend and serverless development.",
      entries: [
        {
          title: "Serverless Automation Platform",
          description:
            "Enterprise automation system with AWS serverless for complex workflow management.",
          tech: ["Python", "AWS Lambda", "Step Functions", "DynamoDB", "ArangoDB"],
          highlights: [
            "Dynamic execution engine",
            "Context management",
            "Comprehensive error handling",
          ],
          status: "Production (Neostella)",
        },
        {
          title: "Energy Monitoring Platform",
          description:
            "Full-stack platform for real-time energy consumption monitoring.",
          tech: ["React Native", "Python", "AWS Lambda", "DynamoDB"],
          highlights: [
            "Real-time data visualization",
            "CI/CD automation",
            "30% user engagement increase",
          ],
          status: "Production (Plusenergy)",
        },
        {
          title: "E-commerce Platform",
          description:
            "Custom e-commerce platform with payment integrations and inventory management.",
          tech: ["Next.js", "TypeScript", "Stripe", "PostgreSQL", "AWS"],
          highlights: [
            "Custom checkout flows",
            "Admin dashboard",
            "SEO optimization",
          ],
          status: "Freelance Project",
        },
        {
          title: "Spa Booking System",
          description:
            "Booking system with interactive calendar and service management.",
          tech: ["Next.js", "Calendar API", "AWS Lambda", "DynamoDB"],
          highlights: [
            "Real-time availability",
            "Automated notifications",
            "Payment integration",
          ],
          status: "Freelance Project",
        },
        {
          title: "RESTful API Optimization",
          description:
            "High-performance APIs with AWS serverless and query optimization.",
          tech: ["Python", "AWS Lambda", "API Gateway", "DynamoDB"],
          highlights: [
            "Sub-100ms response times",
            "Efficient query patterns",
            "Scalable architecture",
          ],
          status: "Production",
        },
        {
          title: "Business Analytics Dashboard",
          description:
            "Analytics dashboard with interactive visualizations for business metrics.",
          tech: ["React", "D3.js", "Python", "AWS Lambda"],
          highlights: [
            "Real-time charts",
            "Data aggregation",
            "Export capabilities",
          ],
          status: "Production",
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
    footer: {
      builtWith: "Built with Next.js, Tailwind CSS & Framer Motion.",
    },
  },
};
