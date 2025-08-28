import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { Card, CardFooter } from './ui/card';
import CustomCarousel from './ui/CustomCarousel';
import { motion } from 'motion/react';
import type { Project } from '@/pages/Projects';
import { Badge } from './ui/badge';
import React from 'react';

function SliderPopup({ project, index, handlePopupClose }: { project: Project, index: number, handlePopupClose: () => void }) {
    const [isHovered, setIsHovered] = React.useState(false);
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="fixed top-0 left-0 w-screen h-screen z-20 bg-black/90 flex justify-center items-center"
            onClick={() => {
                if (!isHovered) handlePopupClose();
            }}
        >
            <motion.div
                initial={{ y: 50 }}
                animate={{ y: 0 }}
                exit={{ y: -50 }}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="relative w-full max-w-3xl h-fit"
            >
                <Card className="rounded-lg shadow-lg overflow-hidden p-0">
                    <div className="aspect-[16/9] w-full overflow-hidden">
                        <CustomCarousel index={index} variant="popup">
                            {project.images.map((img, idx) => (
                                <img
                                    key={idx}
                                    src={img}
                                    alt={`${project.title} screenshot ${idx + 1}`}
                                    className="w-full h-full object-contain bg-background"
                                />
                            ))}
                        </CustomCarousel>
                    </div>
                    <div className="space-y-2 ml-6">
                        <h3 className="text-xl font-semibold">
                            {project.title}
                        </h3>
                        <p className="text-gray-500 dark:text-gray-400">
                            {project.description}
                        </p>
                        <ul className="flex flex-wrap gap-2 -ml-1">
                            {project.tech.map((tech, idx) => (
                                <li key={idx}>
                                    <Badge
                                        variant="outline"
                                        className="text-sm"
                                    >
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
    )
}

export default SliderPopup;