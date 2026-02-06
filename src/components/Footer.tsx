export default function Footer() {
  return (
    <footer className="border-t border-neutral-800 bg-black">
      <div className="max-w-6xl mx-auto px-4 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
        <p className="text-sm text-neutral-400">
          © {new Date().getFullYear()} Sebastián Méndez · Frontend Developer
        </p>

        <div className="flex gap-6 text-sm">
          <a
            href="https://github.com/sebamndz"
            target="_blank"
            className="text-neutral-400 hover:text-red-500 transition"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/sebamndz/"
            target="_blank"
            className="text-neutral-400 hover:text-red-500 transition"
          >
            LinkedIn
          </a>

          <a
            href="mailto:sebamndz@gmail.com"
            className="text-neutral-400 hover:text-red-500 transition"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  )
}
