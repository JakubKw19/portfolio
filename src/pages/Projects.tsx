// import LinesBackground from "@/components/ui/LinesBackground";

import { Card, CardFooter } from "@/components/ui/card";
import { motion, useInView } from "framer-motion";
import React from "react";
import hotelImage from "@/assets/hotel1.png";
import { FaGithub } from "react-icons/fa";
import { FaExternalLinkAlt } from "react-icons/fa";
import { Badge } from "@/components/ui/badge";

const projectData = [
    {
        title: "Hotel Project",
        description: "A full-featured hotel management app with booking, admin panel, and payment integration.",
        image: hotelImage,
        tech: ["React", "TypeScript", "Tailwind CSS"],
        github: "https://github.com/your-username/hotel-project",
        live: "https://hotel-app.example.com"
    },
    {
        title: "Weather App",
        description: "Check current weather and forecasts using OpenWeather API.",
        image: hotelImage,
        tech: ["React", "Vite", "API"],
        github: "https://github.com/your-username/weather-app",
        live: "https://weather-app.example.com"
    },
    {
        title: "Todo Manager",
        description: "Manage tasks and track productivity with drag-and-drop support.",
        image: hotelImage,
        tech: ["Next.js", "TypeScript", "Tailwind CSS"],
        github: "https://github.com/your-username/todo-manager",
        live: "https://todo-manager.example.com"
    }
];


function Projects() {
    const ref = React.useRef(null);
    const inView = useInView(ref);
    const variants = {
        visible: { opacity: 1, scale: 1, y: 0 },
        hidden: {
            opacity: 0,
            scale: 0.65,
            y: 50
        }
    };
    return (
        <div
            className="h-screen pt-36 w-full flex justify-center">
            {/* <LinesBackground size={150} red={100} green={0} blue={0} /> */}
            <div style={{ maxWidth: '1280px' }} className="w-full h-full">
                <motion.div
                    ref={ref}
                    animate={inView ? 'visible' : 'hidden'}
                    variants={variants}
                    transition={{ duration: 2, ease: 'easeOut' }}
                    className="w-full h-full flex items-center flex-col pt-50">
                    <h1 className="text-5xl mb-4">My Projects</h1>
                    <div className="flex justify-between w-full mt-10 gap-8">
                        {projectData.map((project, index) => (
                            <div key={index} className="w-full max-w-md mx-auto">
                                <Card className="rounded-lg shadow-lg overflow-hidden p-0">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                    />
                                    <div className="space-y-2 ml-6">
                                        <h3 className="text-xl font-semibold">{project.title}</h3>
                                        <p className="text-gray-500 dark:text-gray-400">{project.description}</p>
                                        <ul className="flex flex-wrap gap-2 -ml-1">
                                            {project.tech.map((tech, idx) => (
                                                <li key={idx}>
                                                    <Badge variant={'outline'} className="text-sm">{tech}</Badge>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    <CardFooter>
                                        <span className="text-2xl font-bold flex pb-6">
                                            <a href={project.github} className="pr-4" target="_blank" rel="noopener noreferrer">
                                                <FaGithub />
                                            </a>
                                            <a href={project.live
                                            } target="_blank" rel="noopener noreferrer">
                                                <FaExternalLinkAlt />
                                            </a>
                                        </span>
                                    </CardFooter>
                                </Card>
                            </div>
                        ))}
                    </div>
                </motion.div>

            </div>
        </div>
    );
}

export default Projects;