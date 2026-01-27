function Footer() {
  return (
    <footer className="border-t border-neutral-800 mt-20">
      <div className="px-10 py-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <span className="text-sm text-neutral-500">
          © {new Date().getFullYear()} Sebastián Méndez. Todos los derechos reservados.
        </span>

        <div className="flex gap-6 text-sm text-neutral-400">
          <a
            href="https://github.com/tu-usuario"
            target="_blank"
            className="hover:text-white transition"
          >
            GitHub
          </a>

          <a
            href="https://linkedin.com/in/tu-usuario"
            target="_blank"
            className="hover:text-white transition"
          >
            LinkedIn
          </a>

          <a
            href="mailto:tuemail@gmail.com"
            className="hover:text-white transition"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
