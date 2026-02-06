import { Link } from "react-router-dom"
import Reveal from "../components/Reveal"

const skills = [
  "React",
  "TypeScript",
  "Tailwind CSS",
  "Vite",
  "Framer Motion",
  "Git / GitHub",
  "WordPress (themes / ACF)",
  "REST APIs",
]

const services = [
  {
    title: "Frontend moderno",
    desc: "Interfaces rápidas, limpias y mantenibles con React + TypeScript.",
  },
  {
    title: "UI y detalle visual",
    desc: "Jerarquía, espaciado, consistencia y micro-interacciones sin exagerar.",
  },
  {
    title: "Mantenimiento web",
    desc: "Seguridad, actualizaciones, backups, rendimiento y soporte continuo.",
  },
]

export default function About() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-20">
      <Reveal>
        <header className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white">
            Sobre mí
          </h1>

          <p className="mt-6 text-lg text-neutral-300 leading-relaxed">
            Soy Sebastián, desarrollador frontend con foco en{" "}
            <span className="text-red-500 font-medium">React</span> y{" "}
            <span className="text-red-500 font-medium">TypeScript</span>. Me gusta construir
            productos con una estética sólida, buena estructura de código y una experiencia
            fluida para el usuario.
          </p>

          <p className="mt-4 text-neutral-400 leading-relaxed">
            Mi objetivo es trabajar en proyectos donde pueda aportar tanto en implementación
            técnica como en detalle visual y consistencia del sistema.
          </p>
        </header>
      </Reveal>

      {/* Skills */}
      <Reveal>
        <div className="mt-14">
          <h2 className="text-2xl font-semibold text-white">Stack y herramientas</h2>

          <ul className="mt-6 flex flex-wrap gap-2">
            {skills.map((s) => (
              <li
                key={s}
                className="text-sm px-3 py-1 rounded-full border border-neutral-800 text-neutral-200"
              >
                {s}
              </li>
            ))}
          </ul>
        </div>
      </Reveal>

      {/* What I do */}
      <Reveal>
        <div className="mt-14">
          <h2 className="text-2xl font-semibold text-white">Qué aporto</h2>

          <div className="mt-6 grid gap-6 md:grid-cols-3">
            {services.map((card) => (
              <article
                key={card.title}
                className="rounded-2xl border border-neutral-800 p-6 bg-black"
              >
                <h3 className="text-lg font-semibold text-white">{card.title}</h3>
                <p className="mt-3 text-neutral-400 leading-relaxed">{card.desc}</p>

                <div className="mt-5 h-[2px] w-12 bg-red-500 rounded-full" />
              </article>
            ))}
          </div>
        </div>
      </Reveal>

      {/* CTA */}
      <Reveal>
        <div className="mt-16 flex flex-col sm:flex-row gap-4">
          <Link
            to="/contacto"
            className="inline-flex items-center justify-center px-7 py-3 rounded-xl bg-red-500 text-white font-medium hover:bg-red-600 transition"
          >
            Contactarme
          </Link>

          <a
            href="https://github.com/sebamndz"
            target="_blank"
            className="inline-flex items-center justify-center px-7 py-3 rounded-xl border border-red-500 text-white hover:bg-red-500/10 transition"
          >
            Ver GitHub
          </a>
        </div>
      </Reveal>
    </section>
  )
}
