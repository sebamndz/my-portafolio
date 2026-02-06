import { useMemo, useState } from "react"
import Reveal from "../components/Reveal"

const EMAIL = "sebamndz@gmail.com"
const GITHUB = "https://github.com/sebamndz"
const LINKEDIN = "https://www.linkedin.com/in/sebamndz/" // cámbialo

export default function Contact() {
  const [name, setName] = useState("")
  const [message, setMessage] = useState("")

  const mailtoHref = useMemo(() => {
    const subject = encodeURIComponent(`Contacto desde tu portafolio — ${name || "Sin nombre"}`)
    const body = encodeURIComponent(message || "Hola Sebastián, quiero hablar contigo.")
    return `mailto:${EMAIL}?subject=${subject}&body=${body}`
  }, [name, message])

  return (
    <section className="max-w-6xl mx-auto px-4 py-20">
      <Reveal>
        <header className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white">
            Contacto
          </h1>
          <p className="mt-6 text-lg text-neutral-300 leading-relaxed">
            Si quieres trabajar conmigo o tienes una propuesta, escríbeme. Respondo lo antes posible.
          </p>
        </header>
      </Reveal>

      <div className="mt-12 grid gap-8 md:grid-cols-2">
        {/* Card info */}
        <Reveal>
          <div className="rounded-2xl border border-neutral-800 p-6 bg-black">
            <h2 className="text-2xl font-semibold text-white">Datos</h2>

            <div className="mt-6 space-y-4 text-neutral-300">
              <div className="flex items-center justify-between gap-4">
                <span className="text-neutral-400">Email</span>
                <a
                  href={`mailto:${EMAIL}`}
                  className="text-white hover:text-red-500 transition underline underline-offset-4"
                >
                  {EMAIL}
                </a>
              </div>

              <div className="flex items-center justify-between gap-4">
                <span className="text-neutral-400">GitHub</span>
                <a
                  href={GITHUB}
                  target="https://github.com/sebamndz"
                  className="text-white hover:text-red-500 transition underline underline-offset-4"
                >
                  sebamndz
                </a>
              </div>

              <div className="flex items-center justify-between gap-4">
                <span className="text-neutral-400">LinkedIn</span>
                <a
                  href={LINKEDIN}
                  target="https://www.linkedin.com/in/sebamndz/"
                  className="text-white hover:text-red-500 transition underline underline-offset-4"
                >
                  Abrir perfil
                </a>
              </div>
            </div>

            <div className="mt-8 h-[2px] w-16 bg-red-500 rounded-full" />

            <p className="mt-6 text-neutral-400 leading-relaxed">
              También puedo ayudarte con{" "}
              <span className="text-white">mantenimiento web</span>: seguridad, actualizaciones,
              backups, rendimiento y soporte continuo.
            </p>
          </div>
        </Reveal>

        {/* Form */}
        <Reveal>
          <div className="rounded-2xl border border-neutral-800 p-6 bg-black">
            <h2 className="text-2xl font-semibold text-white">Envíame un mensaje</h2>

            <form
              className="mt-6 space-y-4"
              onSubmit={(e) => {
                e.preventDefault()
                window.location.href = mailtoHref
              }}
            >
              <div>
                <label className="block text-sm text-neutral-400 mb-2">Tu nombre</label>
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full rounded-xl border border-neutral-800 bg-black px-4 py-3 text-white placeholder:text-neutral-600 focus:outline-none focus:ring-2 focus:ring-red-500/40"
                  placeholder="Ej: Sebastián / Reclutador / Cliente"
                />
              </div>

              <div>
                <label className="block text-sm text-neutral-400 mb-2">Mensaje</label>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows={6}
                  className="w-full rounded-xl border border-neutral-800 bg-black px-4 py-3 text-white placeholder:text-neutral-600 focus:outline-none focus:ring-2 focus:ring-red-500/40"
                  placeholder="Cuéntame sobre tu proyecto o propuesta..."
                />
              </div>

              <button
                type="submit"
                className="w-full rounded-xl bg-red-500 text-white font-medium px-6 py-3 hover:bg-red-600 transition"
              >
                Enviar (abre tu correo)
              </button>

              <a
                href={mailtoHref}
                className="block text-center text-sm text-neutral-400 hover:text-white transition underline underline-offset-4"
              >
                Prefiero abrir el correo manualmente
              </a>
            </form>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
