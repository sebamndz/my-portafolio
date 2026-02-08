import { motion, type Variants } from "framer-motion"
import { Link } from "react-router-dom"
import { projects } from "../data/projects"
import { gallery } from "../data/gallery"

const container: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.18 },
  },
}

const item: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  },
}

const card: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
  },
}

export default function Hero() {
  const featuredProjects = projects.slice(0, 2)
  const featuredGallery = gallery.slice(0, 3)

  return (
    <section className="relative overflow-hidden bg-black">
      {/* glow rojo */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-[-140px] -translate-x-1/2 h-[460px] w-[460px] rounded-full bg-red-500/15 blur-3xl" />
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative mx-auto max-w-6xl px-4 pt-20 pb-12"
      >
        {/* ================= HERO TOP ================= */}
        <div className="grid items-center gap-14 md:grid-cols-2">
          {/* TEXTO */}
          <div>
            <motion.p variants={item} className="text-sm text-neutral-400 tracking-wide">
              Frontend Developer · React · TypeScript
            </motion.p>

            <motion.h1
              variants={item}
              className="mt-3 text-4xl md:text-6xl font-bold tracking-tight text-white"
            >
              Hola, soy <span className="text-red-500">Sebastián</span>
            </motion.h1>

            <motion.p
              variants={item}
              className="mt-6 max-w-xl text-lg md:text-xl text-neutral-300 leading-relaxed"
            >
              Construyo interfaces modernas, rápidas y mantenibles con una estética dark premium.
              Me enfoco en UI sólida, buen código y detalles que se sienten producto real.
            </motion.p>

            <motion.div variants={item} className="mt-6 flex flex-wrap gap-2">
              {["React", "TypeScript", "Tailwind", "Framer Motion"].map((t) => (
                <span
                  key={t}
                  className="text-xs px-3 py-1 rounded-full border border-neutral-800 text-neutral-200"
                >
                  {t}
                </span>
              ))}
            </motion.div>

            <motion.div variants={item} className="mt-7 h-[2px] w-16 bg-red-500 rounded-full" />

            {/* BOTONES HERO */}
            <motion.div variants={item} className="mt-10 flex flex-col sm:flex-row gap-4">
              {/* Primary */}
              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
                <Link
                  to="/proyectos"
                  className="group relative inline-flex items-center justify-center overflow-hidden rounded-xl bg-red-500 px-7 py-3 font-medium text-white transition hover:bg-red-600"
                >
                  <span className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition">
                    <span className="absolute -left-1/2 top-0 h-full w-1/2 rotate-12 bg-white/15 blur-xl" />
                  </span>
                  <span className="relative flex items-center gap-2">
                    Ver proyectos
                    <svg
                      className="h-4 w-4 transition-transform group-hover:translate-x-1"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </Link>
              </motion.div>

              {/* Secondary */}
              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
                <Link
                  to="/galeria"
                  className="inline-flex items-center justify-center rounded-xl border border-red-500 px-7 py-3 text-white transition hover:bg-red-500/10"
                >
                  Ver galería
                </Link>
              </motion.div>
            </motion.div>

            <motion.p variants={item} className="mt-5 text-sm text-neutral-400">
              También ofrezco mantenimiento web: seguridad, updates, backups y rendimiento.
            </motion.p>
          </div>

          {/* FOTO */}
          <motion.div variants={item} className="flex justify-center md:justify-end">
            <div className="relative">
              <div className="absolute -inset-3 rounded-[28px] border border-red-500/20" />
              <div className="absolute -inset-6 rounded-[34px] bg-red-500/10 blur-2xl" />

              <div className="relative overflow-hidden rounded-3xl border border-neutral-800 bg-black shadow-2xl">
                <img
                  src="https://i.ibb.co/1GQ430Z3/Mi-foto-pro.png"
                  alt="Mi foto profesional"
                  className="h-[420px] w-[340px] md:h-[460px] md:w-[360px] object-cover saturate-90 contrast-105"
                  loading="eager"
                />
              </div>
            </div>
          </motion.div>
        </div>

        {/* ================= FEATURED ================= */}
        <motion.section
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-20"
        >
          <motion.div variants={item} className="flex items-end justify-between gap-6 flex-wrap">
            <div>
              <h2 className="text-xl md:text-2xl font-semibold text-white">Destacado</h2>
              <p className="mt-2 text-sm text-neutral-400">
                Proyectos seleccionados + trabajos visuales recientes.
              </p>
            </div>
            <div className="flex gap-3">
              <Link to="/proyectos" className="text-sm text-neutral-300 hover:text-red-500 transition underline underline-offset-4">
                Ver proyectos
              </Link>
              <Link to="/galeria" className="text-sm text-neutral-300 hover:text-red-500 transition underline underline-offset-4">
                Ver galería
              </Link>
            </div>
          </motion.div>

          <div className="mt-8 grid gap-8 lg:grid-cols-3">
            {/* PROYECTOS */}
            <div className="lg:col-span-2 grid gap-6 md:grid-cols-2">
              {featuredProjects.map((p) => (
                <motion.article
                  key={p.id}
                  variants={card}
                  className="rounded-2xl border border-neutral-800 bg-black p-6 hover:border-red-500/60 transition"
                >
                  <h3 className="text-lg font-semibold text-white">{p.title}</h3>
                  <p className="mt-3 text-sm text-neutral-400">{p.description}</p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {p.technologies.slice(0, 4).map((t) => (
                      <span key={t} className="text-xs px-2.5 py-1 rounded-full border border-neutral-800 text-neutral-200">
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="mt-6 flex gap-4 text-sm">
                    <a href={p.githubUrl} target="_blank" rel="noreferrer" className="text-neutral-300 hover:text-red-500 underline underline-offset-4">
                      Código
                    </a>
                    {p.liveUrl && (
                      <a href={p.liveUrl} target="_blank" rel="noreferrer" className="text-neutral-300 hover:text-red-500 underline underline-offset-4">
                        Sitio web
                      </a>
                    )}
                  </div>
                </motion.article>
              ))}
            </div>

            {/* GALERÍA */}
            <motion.div variants={card} className="rounded-2xl border border-neutral-800 bg-black p-6">
              <h3 className="text-lg font-semibold text-white">Galería</h3>

              <div className="mt-5 grid grid-cols-3 gap-3">
                {featuredGallery.map((g) => (
                  <Link key={g.id} to="/galeria" className="group overflow-hidden rounded-xl border border-neutral-800 hover:border-red-500/50 transition">
                    <img
                      src={g.imageUrl}
                      alt={g.title}
                      className="h-20 w-full object-cover transition group-hover:scale-105"
                    />
                  </Link>
                ))}
              </div>

              <Link to="/galeria" className="mt-5 inline-flex text-sm text-neutral-300 hover:text-red-500 underline underline-offset-4">
                Abrir galería
              </Link>
            </motion.div>
          </div>
        </motion.section>
      </motion.div>
    </section>
  )
}
          