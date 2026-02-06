export type GalleryItem = {
  id: number
  title: string
  year?: string
  tags: string[]
  imageUrl: string
}

export const gallery: GalleryItem[] = [
    {
    id: 4,
    title: "Trabajo de diseño - Marca Japonésa",
    year: "2025",
    tags: ["Diseño", "Marca", "Japonés"],
    imageUrl: "https://i.ibb.co/PZVcWc7k/Modelo-Kanji-Samurai.png",
  },
]
