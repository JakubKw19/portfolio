import { motion } from "framer-motion"
import { ThemeProvider } from "./components/theme-provider"
import Navbar from "./components/ui/Navbar"
import AboutMe from "./pages/AboutMe"
import Home from "./pages/Home"
import LinesBackground from "./components/ui/LinesBackground"
import Technologies from "./pages/Technologies"
import Projects from "./pages/Projects"

function App() {
  // const { scrollY } = useScroll();
  // const y2 = useTransform(scrollY, [0, 500], [0, -100]);
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Navbar />
      <motion.div
        className="h-screen w-full relative"
      >
        <LinesBackground size={150} red={100} green={0} blue={0} />
        <Home />
      </motion.div>

      <motion.div
        // style={{ y: y2 }}
        className="h-screen w-full relative"
      >

        <AboutMe />
      </motion.div>
      <motion.div
        className="h-screen w-full flex justify-center bg-transparent relative"
        style={{ background: 'linear-gradient(180deg,rgba(255, 0, 0, 0.05) 0%, rgba(255, 0, 0, 0.03) 10%, rgba(255, 0, 0, 0.01) 30%, rgba(255, 0, 0, 0) 100%)' }}
      >
        <LinesBackground size={150} red={100} green={0} blue={0} />
        <Technologies />
      </motion.div>
      <motion.div
        className="h-screen w-full flex justify-center bg-card relative"
      >
        <Projects />
      </motion.div>
    </ThemeProvider>
  )
}

export default App
