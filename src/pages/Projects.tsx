import ProjectCard from '../components/ProjectCard'
import { projects } from '../data/projects'

function Projects() {
  return (
    <section className="px-10 py-14">
      <header className="mb-10 max-w-2xl">
        <h2 className="text-4xl font-bold mb-4">
          Proyectos destacados
        </h2>
        <p className="text-neutral-400">
          Una selección de proyectos donde aplico React, TypeScript y buenas prácticas
          de desarrollo frontend.
        </p>
      </header>

      <div className="grid gap-8 md:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  )
}

export default Projects
