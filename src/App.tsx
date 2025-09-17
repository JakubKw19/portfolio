import { motion } from "framer-motion";
import { ThemeProvider, useTheme } from "./components/theme-provider";
import Navbar from "./components/ui/Navbar";
import AboutMe from "./pages/AboutMe";
import Home from "./pages/Home";
import LinesBackground from "./components/ui/LinesBackground";
import Technologies from "./pages/Technologies";
import Projects from "./pages/Projects";
import Experience from "./pages/Experience";
import ContactMe from "./pages/ContactMe";
import ThemedBackGround from "./components/ThemedBackGround";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Navbar />
      <Navbar variant="sticky" />
      <motion.div className="h-fit w-full relative">
        <ThemedBackGround />
        <Home />
      </motion.div>

      <motion.div
        // style={{ y: y2 }}
        className="h-fit w-full relative"
      >
        <AboutMe />
      </motion.div>
      <motion.div
        id="technologies"
        className="h-fit w-full flex justify-center bg-transparent relative pb-22"
        style={{
          background:
            "linear-gradient(180deg,rgba(255, 0, 0, 0.05) 0%, rgba(255, 0, 0, 0.03) 10%, rgba(255, 0, 0, 0.01) 30%, rgba(255, 0, 0, 0) 100%)",
        }}
      >
        <ThemedBackGround />
        <Technologies />
      </motion.div>
      <motion.div
        id="experience"
        className="h-fit w-full flex justify-center bg-background relative p-10"
      >
        <Experience />
      </motion.div>
      <motion.div
        id="projects"
        className="h-fit w-full flex justify-center bg-card relative"
      >
        <Projects />
      </motion.div>
      <motion.div
        id="contact"
        className="h-fit w-full flex justify-center bg-background relative"
      >
        <ContactMe />
      </motion.div>
    </ThemeProvider>
  );
}

export default App;
