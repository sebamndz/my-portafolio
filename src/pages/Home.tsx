import { Link } from 'react-router-dom'

function Home() {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center px-10">
      <h1 className="text-5xl md:text-6xl font-bold mb-6">
        Hola, soy Sebastián 👋
      </h1>

      <p className="text-xl text-neutral-400 max-w-2xl mb-8">
        Frontend Developer especializado en React y TypeScript.
        Me enfoco en crear interfaces limpias, escalables y pensadas para usuarios reales.
      </p>

      <div className="flex gap-6">
        <Link
          to="/proyectos"
          className="px-6 py-3 bg-white text-black font-medium rounded-lg hover:bg-neutral-200 transition"
        >
          Ver proyectos
        </Link>

        <a
          href="https://github.com/tu-usuario"
          target="_blank"
          className="px-6 py-3 border border-neutral-700 rounded-lg hover:border-white transition"
        >
          GitHub
        </a>
      </div>
    </section>
  )
}

export default Home
