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
    githubUrl: 'https://github.com/tu-usuario/noir-aura',
  },
]
