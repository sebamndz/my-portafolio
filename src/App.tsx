import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom"
import { AnimatePresence, motion } from "framer-motion"

import Navbar from "./components/Navbar"
import Footer from "./components/Footer"

import Home from "./pages/Home"
import Projects from "./pages/Projects"
import About from "./pages/About"
import Contact from "./pages/Contact"

// Wrapper para animar cada página
function PageWrapper({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="flex-grow"
    >
      {children}
    </motion.div>
  )
}

// Rutas animadas
function AnimatedRoutes() {
  const location = useLocation()

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <PageWrapper>
              <Home />
            </PageWrapper>
          }
        />
        <Route
          path="/proyectos"
          element={
            <PageWrapper>
              <Projects />
            </PageWrapper>
          }
        />
        <Route
          path="/sobre-mi"
          element={
            <PageWrapper>
              <About />
            </PageWrapper>
          }
        />
        <Route
          path="/contacto"
          element={
            <PageWrapper>
              <Contact />
            </PageWrapper>
          }
        />
      </Routes>
    </AnimatePresence>
  )
}

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-neutral-950 text-white flex flex-col">
        <Navbar />

        <main className="flex-grow">
          <AnimatedRoutes />
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
