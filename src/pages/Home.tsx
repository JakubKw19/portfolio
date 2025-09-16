import { Button } from "@/components/ui/button";
import frontendDeveloperSVG from "@/assets/developer.svg";
import { motion } from "framer-motion";
import { SiTypescript } from "react-icons/si";
import nodejsSVG from "@/assets/nodejs.svg";
import reactSVG from "@/assets/react.svg";

function Home() {
  const floatingIconVariants = {
    animate: {
      y: [0, 20, 0], // Animate up and down in px
      rotate: [0, 5, -5, 0], // Slight rotation
      transition: {
        y: {
          duration: 3,
          easeInOut: true,
          repeat: Infinity,
          repeatType: "reverse" as const,
        },
        rotate: {
          duration: 5,
          easeInOut: true,
          repeat: Infinity,
          repeatType: "reverse" as const,
        },
      },
    },
  };

  return (
    <div
      className="h-screen pt-1/8 w-full flex justify-center"
      id="home"
      style={{
        background:
          "linear-gradient(0deg,rgba(255, 0, 0, 0.05) 0%, rgba(255, 0, 0, 0.03) 10%, rgba(255, 0, 0, 0.01) 30%, rgba(255, 0, 0, 0) 100%)",
      }}
    >
      <div
        style={{ maxWidth: "1280px" }}
        className="w-full h-full relative p-10"
      >
        <div className="mt-10 w-full h-full py-20 flex justify-center max-md:flex-col">
          <div className="w-3/5 max-md:w-full max-md:h-full lg:w-1/2 flex flex-col justify-center items-start max-md:text-center">
            <p className="text-5xl max-sm:text-4xl pb-2 w-full max-md:text-center">
              Hi I'm{" "}
            </p>
            <span className="text-primary font-bold font-abhaya text-8xl max-sm:text-5xl w-full max-md:text-center">
              Kuba
            </span>
            <p className="max-sm:text-2xl text-3xl pb-6 w-full">
              A Fullstack Developer
            </p>
            <span className="text-xl max-sm:text-sm">
              I build scalable web applications using modern technologies.
              Passionate about clean code, user experience, and solving complex
              problems.
            </span>
            <div className="flex max-md:flex-col w-full">
              <Button className="mt-6 max-md:mt-8">View my work</Button>
              <Button
                className="mt-6 max-md:mt-4 ml-4 max-md:ml-0"
                variant="outline"
              >
                Download CV
              </Button>
            </div>
          </div>

          <div className="mt-6 md:mt-0 md:ml-10 lg:mr-10 lg:w-1/2 flex justify-center items-center">
            <div className="relative">
              <img
                src={frontendDeveloperSVG}
                alt="Frontend Developer"
                className="w-full h-auto relative"
              />

              {/* Floating Icons */}
              <motion.div
                className="absolute top-1/8 left-10 flex items-center justify-center text-white text-2xl"
                variants={floatingIconVariants}
                animate="animate"
                style={{ x: "-50%", y: "-50%" }}
              >
                <SiTypescript size={55} color="#007acc" />
              </motion.div>
              <motion.div
                className="absolute top-1/3 right-1/9 flex items-center justify-center text-white text-2xl"
                variants={floatingIconVariants}
                animate="animate"
                style={{ x: "50%", y: "50%", animationDelay: "0.5s" }}
              >
                <img src={reactSVG} className=" w-20" alt="react-icon" />
              </motion.div>
              <motion.div
                className="absolute top-0 right-1/8 flex items-center justify-center text-white text-2xl"
                variants={floatingIconVariants}
                animate="animate"
                style={{ x: "50%", y: "-40%", animationDelay: "1s" }}
              >
                <img src={nodejsSVG} className=" w-30" alt="nodejs-icon" />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
