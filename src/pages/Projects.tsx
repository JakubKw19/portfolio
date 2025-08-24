// import LinesBackground from "@/components/ui/LinesBackground";

import { Card, CardFooter } from "@/components/ui/card";
import { motion, useInView, type MotionProps } from "framer-motion";
import React from "react";
import hotelImage from "@/assets/hotel1.png";
import vicevigilImage from "@/assets/vicevigil.png";
import { FaGithub } from "react-icons/fa";
import { FaExternalLinkAlt } from "react-icons/fa";
import { Badge } from "@/components/ui/badge";
import CustomCarousel from "@/components/ui/CustomCarousel";

const projectData = [
  {
    title: "Hotel Project",
    description:
      "A hotel management app with booking, admin panel, and user dashboard.",
    images: [hotelImage, hotelImage, vicevigilImage],
    tech: ["PHP", "JavaSript", "CSS"],
    github: "https://github.com/your-username/hotel-project",
    live: "https://hotel-app.example.com",
  },
  {
    title: "ViceVigil App",
    description:
      "App for tracking your health and helping to overcome addiction.",
    images: [vicevigilImage, hotelImage, vicevigilImage],
    tech: ["Next.js", "SCSS", "TypeScript"],
    github: "https://github.com/Truly-Depressed-Developers/ViceVigil",
    live: "https://weather-app.example.com",
  },
  {
    title: "Todo Manager",
    description:
      "Manage tasks and track productivity with drag-and-drop support.",
    images: [hotelImage, vicevigilImage, hotelImage],
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    github: "https://github.com/your-username/todo-manager",
    live: "https://todo-manager.example.com",
  },
];

function Projects() {
  const ref = React.useRef(null);
  const inView = useInView(ref);
  const [focusedIndex, setFocusedIndex] = React.useState<number | null>(null);
  const [hoveredIndex, setHoveredIndex] = React.useState<number | null>(null);
  const variants = {
    visible: { opacity: 1, scale: 1, y: 0 },
    hidden: {
      opacity: 0,
      scale: 0.65,
      y: 50,
    },
  };
  const cardVariants: MotionProps["variants"] = {
    rest: {
      //   flex: 1,
      width: "100%",
      z: 1,
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
    hover: {
      // scale: 1.05,
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
      cursor: "pointer",
    },
    focused: {
      width: "200%",
      height: "150%",
      position: "absolute",
      zIndex: 20,
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
  };
  return (
    <div className="h-screen pt-1/8 w-full flex justify-center">
      {/* <LinesBackground size={150} red={100} green={0} blue={0} /> */}
      <div style={{ maxWidth: "1280px" }} className="w-full h-full">
        <motion.div
          ref={ref}
          animate={inView ? "visible" : "hidden"}
          variants={variants}
          transition={{ duration: 2, ease: "easeOut" }}
          className="w-full h-full flex items-center flex-col pt-50"
        >
          <h1 className="text-5xl mb-4">My Projects</h1>
          <div className="flex justify-between w-full mt-10 gap-8 grow">
            {projectData.map((project, index) => (
              <motion.div
                initial="rest"
                // whileHover="hover"
                // whileFocus="focused"
                animate={
                  focusedIndex === index
                    ? "focused"
                    : focusedIndex === null
                      ? hoveredIndex === index
                        ? "hover"
                        : "rest"
                      : "rest"
                }
                onClick={() =>
                  setFocusedIndex(focusedIndex === index ? null : index)
                }
                onMouseEnter={() => {
                  setHoveredIndex(index);
                }}
                onMouseLeave={() => { setHoveredIndex(null); }}
                key={index}
                className="relative z-10 hover:z-20 transition-all duration-300 w-full h-fit"
              >
                <motion.div variants={cardVariants}>
                  <Card className="rounded-lg shadow-lg overflow-hidden p-0">
                    <div className="aspect-[16/9] w-full overflow-hidden">
                      <CustomCarousel index={index}>
                        {
                          project.images.map((img, idx) => (
                            <img
                              key={idx}
                              src={img}
                              alt={`${project.title} screenshot ${idx + 1}`}
                              className="w-full h-full object-contain bg-background"
                            />
                          ))
                        }
                      </CustomCarousel>
                    </div>
                    <div className="space-y-2 ml-6">
                      <h3 className="text-xl font-semibold">{project.title}</h3>
                      <p className="text-gray-500 dark:text-gray-400">
                        {project.description}
                      </p>
                      <ul className="flex flex-wrap gap-2 -ml-1">
                        {project.tech.map((tech, idx) => (
                          <li key={idx}>
                            <Badge variant={"outline"} className="text-sm">
                              {tech}
                            </Badge>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <CardFooter>
                      <span className="text-2xl font-bold flex pb-6">
                        <a
                          href={project.github}
                          className="pr-4"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <FaGithub />
                        </a>
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <FaExternalLinkAlt />
                        </a>
                      </span>
                    </CardFooter>
                  </Card>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Projects;
