import { motion } from "framer-motion"
import type { Project } from "../data/projects"

type Props = {
  project: Project
}

export default function ProjectCard({ project }: Props) {
  return (
    <motion.article
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className="bg-zinc-900 rounded-2xl p-6 shadow-lg"
    >
      <h3 className="text-xl font-semibold">{project.title}</h3>
      <p className="text-zinc-400 mt-2">{project.description}</p>

       {project.githubUrl && (
    <motion.a
      whileHover={{ x: 4 }}
      transition={{ type: "spring", stiffness: 300 }}
      href={project.githubUrl}
      target="_blank"
      className="inline-block mt-4 text-sm text-indigo-400 hover:underline"
    >
      Código
    </motion.a>
  )}
<br />
  {project.liveUrl && (
    <motion.a
      whileHover={{ x: 4 }}
      transition={{ type: "spring", stiffness: 300 }}
      href={project.liveUrl}
      target="_blank"
      className="inline-block mt-4 text-sm text-indigo-400 hover:underline"
    >
      Ver Sitio Web
    </motion.a>
  )}

    </motion.article>
  )
}
