import { NavLink } from "react-router-dom"
import { motion } from "framer-motion"

const links = [
  { to: "/", label: "Inicio" },
  { to: "/proyectos", label: "Proyectos" },
  { to: "/galeria", label: "Galería" },
  { to: "/sobre-mi", label: "Sobre mí" },
  { to: "/contacto", label: "Contacto" },
]

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-black/80 backdrop-blur border-b border-neutral-800">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-center">
        <ul className="flex gap-10">
          {links.map((link) => (
            <NavItem key={link.to} to={link.to}>
              {link.label}
            </NavItem>
          ))}
        </ul>
      </div>
    </nav>
  )
}

function NavItem({
  to,
  children,
}: {
  to: string
  children: React.ReactNode
}) {
  return (
    <NavLink to={to} className="relative">
      {({ isActive }) => (
        <div className="relative flex flex-col items-center">
          <span
            className={`text-sm font-medium transition-colors ${
              isActive ? "text-white" : "text-neutral-400 hover:text-white"
            }`}
          >
            {children}
          </span>

          <motion.span
            layoutId="navbar-underline"
            className="mt-2 h-[2px] w-full rounded-full bg-red-500"
            initial={false}
            animate={{ opacity: isActive ? 1 : 0 }}
            transition={{ duration: 0.25 }}
          />
        </div>
      )}
    </NavLink>
  )
}
