import ProjectCard from "../components/ProjectCard"
import Reveal from "../components/Reveal"
import { projects } from "../data/projects"

export default function Projects() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-20">
      <Reveal>
        <header className="mb-10 max-w-2xl">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Proyectos destacados
          </h2>
          <p className="text-neutral-300 leading-relaxed">
            Una selección de proyectos donde aplico React, TypeScript y buenas prácticas
            de desarrollo frontend.
          </p>

          <div className="mt-6 h-[2px] w-16 bg-red-500 rounded-full" />
        </header>
      </Reveal>

      <div className="grid gap-8 md:grid-cols-2">
        {projects.map((project) => (
          <Reveal key={project.id}>
            <ProjectCard project={project} />
          </Reveal>
        ))}
      </div>
    </section>
  )
}
