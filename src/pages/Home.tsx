import { Button } from "@/components/ui/button";
import frontDeveloperBackGround from "@/assets/developer-background.svg";
import frontDeveloperForeground from "@/assets/developer-foreground.svg";
import frontDeveloperLight from "@/assets/developer-light.svg";
import { motion } from "framer-motion";
import { SiTypescript } from "react-icons/si";
import nodejsSVG from "@/assets/nodejs.svg";
import reactSVG from "@/assets/react.svg";
import { useState } from "react";
import { Link } from "react-scroll";

function Home() {
  const [isHovered, setIsHovered] = useState(false);
  const floatingIconVariants = {
    animate: {
      y: [0, 20, 0],
      rotate: [0, 5, -5, 0],
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

  const lightVariants = {
    hover: {
      opacity: 1,
      transition: {
        type: "tween" as const,
        duration: 0.5,
      },
    },
  };

  return (
    <div className="h-screen pt-1/8 w-full flex justify-center" id="home">
      <div
        style={{ maxWidth: "1280px" }}
        className="w-full h-full relative p-10"
      >
        <div className="mt-10 w-full h-full py-20 flex justify-center max-md:flex-col ">
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
              <div
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                <Button className="mt-6 max-md:mt-8 w-full">
                  <Link
                    to={"projects"}
                    smooth={true}
                    className="block hover:text-white"
                  >
                    View my work
                  </Link>
                </Button>
              </div>
              <Button
                className="mt-6 max-md:mt-4 ml-4 max-md:ml-0"
                variant="outline"
              >
                Download CV
              </Button>
            </div>
          </div>

          <div className="mt-6 md:mt-0 md:ml-10 lg:mr-10 lg:w-1/2 flex justify-center items-center">
            <div className="relative w-full">
              <motion.div className="w-full" whileHover="hover">
                <img
                  src={frontDeveloperForeground}
                  alt="Frontend Developer"
                  className="relative w-full h-auto z-10"
                />
                <motion.img
                  style={{ opacity: 0.1 }}
                  src={frontDeveloperLight}
                  alt="Frontend Developer Light"
                  color="black"
                  className="absolute top-0 left-0 w-full h-auto z-5 transform translate-x-[-14%] translate-y-[10%]"
                  animate={isHovered ? "hover" : undefined}
                  variants={lightVariants}
                />
                <img
                  src={frontDeveloperBackGround}
                  alt="Frontend Developer Background"
                  className="absolute top-0 left-0 w-full h-auto z-1 transform translate-x-[-6%] translate-y-[9%]"
                />
              </motion.div>
              {/* <div className="absolute top-40 left-13 rounded-full w-50 h-40 bg-white z-1"></div> */}
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
