import { motion } from "framer-motion"
import { Link } from "react-router-dom"

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
}

const item = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
}

export default function Hero() {
  return (
    <section className="min-h-[80vh] flex items-center justify-center">
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="max-w-3xl text-center px-4"
      >
        <motion.h1
          variants={item}
          className="text-4xl md:text-6xl font-bold tracking-tight"
        >
          Hola, soy{" "}
          <span className="text-neutral-400">Sebastián</span>
        </motion.h1>

        <motion.p
          variants={item}
          className="mt-6 text-lg text-neutral-400"
        >
          Desarrollador Frontend especializado en React, TypeScript y
          experiencias web modernas.
        </motion.p>

        <motion.div
          variants={item}
          className="mt-10 flex justify-center gap-6"
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
            <Link
              to="/proyectos"
              className="px-6 py-3 rounded-xl bg-white text-black font-medium"
            >
              Ver proyectos
            </Link>
          </motion.div>

          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
            <Link
              to="/contacto"
              className="px-6 py-3 rounded-xl border border-neutral-700 text-white"
            >
              Contacto
            </Link>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  )
}
