export interface Project {
  id: number
  title: string
  description: string
  technologies: string[]
  githubUrl: string
  liveUrl?: string
}

export const projects: Project[] = [
  {
    id: 1,
    title: 'NOIR AURA',
    description: 'Tienda digital headless con WordPress, GraphQL y frontend en JavaScript.',
    technologies: ['WordPress', 'GraphQL', 'JavaScript', 'Bootstrap'],
    githubUrl: 'https://github.com/sebamndz/noir-aura',
  },
  {
    id: 2,
    title: 'NOX Web',
    description: 'Sitio web corporativo para una empresa de tecnología, desarrollado con React y Tailwind CSS.',
    technologies: ['React', 'Tailwind CSS', 'Vite'],
    githubUrl: 'https://github.com/sebamndz/nox-web',
    liveUrl: 'https://nox-web.vercel.app/',
  },
    
]
