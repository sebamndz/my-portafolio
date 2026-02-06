import { motion, type Variants } from "framer-motion"
import type { Project } from "../data/projects"


const cardVariants: Variants = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
  },
}

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.article
      variants={cardVariants}
      className="rounded-2xl border border-neutral-800 bg-black p-6 hover:border-red-500/60 transition"
      whileHover={{ y: -4 }}
    >
      <header className="flex items-start justify-between gap-4">
        <h3 className="text-2xl font-semibold text-white">{project.title}</h3>
        <span className="h-2 w-2 rounded-full bg-red-500 mt-3" />
      </header>

      {project.year && (
        <p className="mt-2 text-sm text-neutral-500">{project.year}</p>
      )}

      <p className="mt-3 text-neutral-400 leading-relaxed">{project.description}</p>

      <ul className="mt-5 space-y-2">
        {project.highlights.map((h) => (
          <li key={h} className="text-sm text-neutral-300">
            <span className="text-red-500">•</span> {h}
          </li>
        ))}
      </ul>


      <ul className="mt-6 flex flex-wrap gap-2">
        {project.technologies.map((tech) => (
          <li
            key={tech}
            className="text-xs px-3 py-1 rounded-full border border-neutral-800 text-neutral-200"
          >
            {tech}
          </li>
        ))}
      </ul>

      <div className="mt-8 flex flex-wrap gap-3">
  {/* GitHub */}
  <a
    href={project.githubUrl}
    target="_blank"
    rel="noreferrer"
    className="group inline-flex items-center gap-2 rounded-xl border border-neutral-800 bg-black px-4 py-2 text-sm text-white transition
               hover:border-red-500/60 hover:bg-red-500/5"
  >
    <span className="relative">
      Código
      <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-red-500 transition-all duration-300 group-hover:w-full" />
    </span>

    <svg
      className="h-4 w-4 text-neutral-400 transition group-hover:text-red-500"
      fill="currentColor"
      viewBox="0 0 24 24"
      aria-hidden
    >
      <path d="M12 .5C5.7.5.5 5.7.5 12c0 5.1 3.3 9.4 7.9 10.9.6.1.8-.2.8-.5v-2c-3.2.7-3.9-1.4-3.9-1.4-.5-1.2-1.2-1.5-1.2-1.5-1-.7.1-.7.1-.7 1.1.1 1.7 1.1 1.7 1.1 1 .1.8-.6 1.9-.9.1-.7.4-1.2.7-1.5-2.5-.3-5.1-1.2-5.1-5.5 0-1.2.4-2.2 1.1-3-.1-.3-.5-1.4.1-2.9 0 0 .9-.3 3 .1.9-.2 1.8-.4 2.7-.4.9 0 1.8.1 2.7.4 2.1-.4 3-.1 3-.1.6 1.5.2 2.6.1 2.9.7.8 1.1 1.8 1.1 3 0 4.3-2.6 5.2-5.1 5.5.4.3.8.9.8 1.8v2.6c0 .3.2.6.8.5C20.7 21.4 24 17.1 24 12 24 5.7 18.8.5 12 .5z" />
    </svg>
  </a>

  {/* Demo */}
  {project.liveUrl && (
    <a
      href={project.liveUrl}
      target="_blank"
      rel="noreferrer"
      className="group inline-flex items-center gap-2 rounded-xl bg-red-500 px-4 py-2 text-sm font-medium text-white transition
                 hover:bg-red-600"
    >
      Ver Sitio
      <svg
        className="h-4 w-4 transition-transform group-hover:translate-x-1"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
        aria-hidden
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
      </svg>
    </a>
  )}
</div>

    </motion.article>
  )
}
