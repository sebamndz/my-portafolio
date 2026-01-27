import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <nav className="flex items-center justify-between px-10 py-6 border-b border-neutral-800">
      <span className="font-bold text-xl">
        Sebastián Méndez
      </span>

      <div className="flex gap-6 text-neutral-400">
        <NavLink to="/" className={({ isActive }) =>
          isActive ? 'text-white' : 'hover:text-white'
        }>
          Inicio
        </NavLink>

        <NavLink to="/proyectos" className={({ isActive }) =>
          isActive ? 'text-white' : 'hover:text-white'
        }>
          Proyectos
        </NavLink>

        <NavLink to="/sobre-mi" className={({ isActive }) =>
          isActive ? 'text-white' : 'hover:text-white'
        }>
          Sobre mí
        </NavLink>

        <NavLink to="/contacto" className={({ isActive }) =>
          isActive ? 'text-white' : 'hover:text-white'
        }>
          Contacto
        </NavLink>
      </div>
    </nav>
  )
}

export default Navbar
