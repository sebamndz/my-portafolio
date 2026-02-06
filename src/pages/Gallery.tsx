import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import Reveal from "../components/Reveal"
import GalleryCard from "../components/GalleryCard.tsx"
import { gallery, type GalleryItem } from "../data/gallery.ts"

export default function Gallery() {
  const [selected, setSelected] = useState<GalleryItem | null>(null)

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelected(null)
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [])

  return (
    <section className="max-w-6xl mx-auto px-4 py-20">
      <Reveal>
        <header className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white">
            Galería
          </h1>
          <p className="mt-6 text-lg text-neutral-300 leading-relaxed">
            Una selección de trabajos de arte y diseño: ilustración, mockups y exploración visual.
          </p>
          <div className="mt-6 h-[2px] w-16 bg-red-500 rounded-full" />
        </header>
      </Reveal>

      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        transition={{ staggerChildren: 0.1 }}
        className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
      >
        {gallery.map((item) => (
          <GalleryCard key={item.id} item={item} onOpen={setSelected} />
        ))}
      </motion.div>

      {/* Lightbox */}
      {selected && (
        <div
          className="fixed inset-0 z-[999] bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setSelected(null)}
        >
          <div
            className="max-w-4xl w-full rounded-2xl border border-neutral-800 bg-black overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between px-5 py-4 border-b border-neutral-800">
              <div>
                <p className="text-white font-medium">{selected.title}</p>
                <p className="text-sm text-neutral-400">{selected.tags.join(" · ")}</p>
              </div>

              <button
                onClick={() => setSelected(null)}
                className="text-neutral-300 hover:text-red-500 transition"
              >
                Cerrar
              </button>
            </div>

            <div className="p-4">
              <img
                src={selected.imageUrl}
                alt={selected.title}
                className="w-full max-h-[70vh] object-contain rounded-xl"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
