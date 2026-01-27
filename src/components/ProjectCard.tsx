import type { Project } from '../data/projects'



interface Props {
  project: Project
}

function ProjectCard({ project }: Props) {
  return (
    <article className="group border border-neutral-800 rounded-2xl p-6 hover:border-white transition">
  <h3 className="text-2xl font-semibold mb-3">
    {project.title}
  </h3>

  <p className="text-neutral-400 mb-6 leading-relaxed">
    {project.description}
  </p>

  <ul className="flex flex-wrap gap-2 mb-6">
    {project.technologies.map((tech) => (
      <li
        key={tech}
        className="text-xs px-3 py-1 border border-neutral-700 rounded-full text-neutral-300"
      >
        {tech}
      </li>
    ))}
  </ul>

  <div className="flex gap-6 text-sm">
    <a
      href={project.githubUrl}
      target="_blank"
      className="underline underline-offset-4 hover:text-white"
    >
      Código
    </a>

    {project.liveUrl && (
      <a
        href={project.liveUrl}
        target="_blank"
        className="underline underline-offset-4 hover:text-white"
      >
        Demo
      </a>
    )}
  </div>
</article>

  )
}

export default ProjectCard
