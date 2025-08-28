import GlassPaper from "@/components/ui/GlassPaper";
import { TypographyH1, TypographyH2 } from "@/components/ui/typography/Typography";
import { motion, useInView } from "framer-motion";
import React from "react";

interface Skill {
    name: string;
    value: number;
}

const frontendSkills: Skill[] = [
    { name: "React", value: 90 },
    { name: "TailwindCSS", value: 70 },
    { name: "React (Redux)", value: 90 },
];

const backendSkills: Skill[] = [
    { name: "Node.js", value: 80 },
    { name: "Express.js", value: 75 },
    { name: "MongoDB", value: 70 },
];

const databaseSkills: Skill[] = [
    { name: "PostgreSQL", value: 80 },
    { name: "MySQL", value: 70 },
    { name: "MongoDB", value: 60 },
];

const toolsSkills: Skill[] = [
    { name: "Git", value: 85 },
    { name: "Docker", value: 60 },
    { name: "CI/CD", value: 50 },
];



const Technologies = () => {
    const ref = React.useRef(null);
    const inView = useInView(ref);
    const variants = {
        visible: { opacity: 1, scale: 1, y: 0 },
        hidden: {
            opacity: 0,
            scale: 0.65,
            y: 50,

        }
    };

    const animatedProgressVariants = (skillValue: number) => ({
        initial: { width: "0%" },
        animated: { width: `${skillValue}%` }
    });

    const AnimatedProgress = (skillValue: number) => (
        <div className="relative w-2/5 h-2 rounded bg-card overflow-hidden m-4">
            <motion.div
                initial={{ width: "0%" }}
                animate={inView ? "animated" : "initial"}
                variants={animatedProgressVariants(skillValue)}
                transition={{ duration: 2, ease: "easeOut" }}
                className="h-full bg-primary"
            />
        </div>
    );

    const renderSkills = (title: string, skills: Skill[]) => (
        <div className="flex flex-col w-1/4 pr-4">
            <TypographyH2 className="flex justify-center">{title}</TypographyH2>
            <ul>
                {skills.map(skill => (
                    <li key={skill.name} className="m-2 flex justify-between items-center">
                        {skill.name}
                        {AnimatedProgress(skill.value)}
                    </li>
                ))}
            </ul>
        </div>
    );



    return (
        <motion.div ref={ref} animate={inView ? 'visible' : 'hidden'} variants={variants} transition={{ duration: 2, ease: 'easeOut' }}
            className="py-60 w-full flex items-center justify-center flex-col"
            style={{ maxWidth: '1280px' }}>
            <GlassPaper className="w-full flex flex-col">
                <TypographyH1 className="w-full flex justify-center  pb-8">Technologies</TypographyH1>
                <div className="flex w-full">
                    {renderSkills("Frontend", frontendSkills)}
                    {renderSkills("Backend", backendSkills)}
                    {renderSkills("Database", databaseSkills)}
                    {renderSkills("Tools", toolsSkills)}
                </div>
            </GlassPaper>
        </motion.div>
    );
};

export default Technologies;
