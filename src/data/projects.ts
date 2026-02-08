export interface Project {
  id: number
  title: string
  year?: string
  description: string
  technologies: string[]
  highlights: string[]      // ✅ nuevo
  githubUrl: string
  liveUrl?: string
}

export const projects: Project[] = [
  {
    id: 1,
    title: "NOIR AURA",
    year: "2024",
    description:
      "Tienda digital headless enfocada en una estética dark premium. Backend en WordPress con GraphQL y frontend desacoplado.",
    technologies: ["WordPress", "GraphQL", "JavaScript", "Bootstrap"],
    highlights: [
      "Arquitectura headless con WordPress + GraphQL",
      "Frontend desacoplado con enfoque en UX",
      "Deploy y demo pública en Vercel",
    ],
    githubUrl: "https://github.com/sebamndz/noir-aura",
    liveUrl: "https://noir-aura-g6e3.vercel.app/",
  },
  {
    id: 2,
    title: "NOX Web",
    year: "2026",
    description:
      "Sitio web corporativo para marca tecnológica con enfoque minimalista, diseño dark y arquitectura moderna.",
    technologies: ["React", "Tailwind CSS", "Vite"],
    highlights: [
      "Componentes reutilizables y diseño consistente",
      "UI dark con enfoque minimalista",
      "Deploy y demo pública en Vercel",
    ],
    githubUrl: "https://github.com/sebamndz/nox-web",
    liveUrl: "https://nox-web.vercel.app/",
  },
  {
  id: 3,
  title: "HelpDesk System API",
  year: "2026",
  description:
    "API REST para un sistema de soporte técnico con autenticación JWT, autorización por roles y gestión completa de tickets, diseñada con enfoque en backend empresarial.",
  technologies: [
    "ASP.NET Core",
    ".NET 8",
    "Entity Framework Core",
    "SQL Server",
    "JWT",
    "Swagger",
  ],
  highlights: [
    "Autenticación segura con JWT y hashing de contraseñas",
    "Autorización basada en roles (Admin, Agent, Requester)",
    "Gestión completa de tickets: estados, prioridades, asignación y comentarios",
    "Arquitectura limpia con DTOs y separación de responsabilidades",
    "API documentada con Swagger y demo funcional",
  ],
  githubUrl: "https://github.com/sebamndz/HelpDesk",
}
]
