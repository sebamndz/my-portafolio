import { motion, type Variants } from "framer-motion"
import type { GalleryItem } from "../data/gallery"

const card: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } },
}

export default function GalleryCard({
  item,
  onOpen,
}: {
  item: GalleryItem
  onOpen: (item: GalleryItem) => void
}) {
  return (
    <motion.button
      variants={card}
      type="button"
      onClick={() => onOpen(item)}
      className="text-left rounded-2xl border border-neutral-800 bg-black overflow-hidden hover:border-red-500/60 transition"
      whileHover={{ y: -4 }}
    >
      <div className="aspect-[4/3] overflow-hidden">
        <img
          src={item.imageUrl}
          alt={item.title}
          loading="lazy"
          className="h-full w-full object-cover opacity-90 hover:opacity-100 transition"
        />
      </div>

      <div className="p-5">
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-base font-semibold text-white">{item.title}</h3>
          <span className="text-xs text-neutral-500">{item.year}</span>
        </div>

        <div className="mt-3 flex flex-wrap gap-2">
          {item.tags.slice(0, 3).map((t) => (
            <span
              key={t}
              className="text-xs px-2.5 py-1 rounded-full border border-neutral-800 text-neutral-200"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </motion.button>
  )
}
