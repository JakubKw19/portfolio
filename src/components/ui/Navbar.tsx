import { motion } from "motion/react";
import { ModeToggle } from "../mode-toggle";
import { Button } from "./button";

function Navbar() {
    const routes = [
        { name: "About me", href: "#about" },
        { name: "Technologies", href: "#technologies" },
        { name: "Experience", href: "#experience" },
        { name: "Projects", href: "#projects" },
    ]
    return (
        <nav className="flex justify-center items-center p-8 fixed w-full overflow-hidden z-2 shadow-lg border-1"
            style={{
                backdropFilter: 'blur(10px)',

            }}>
            <div style={{ maxWidth: '1280px' }} className="flex justify-between items-center w-full">
                <a href="#home" className="text-6xl text-primary font-abhaya">Portfolio</a>
                <div className="flex items-center gap-14">
                    <ul className="flex items-center space-x-8 text-xl">
                        {
                            routes.map((route) => (
                                <motion.li key={route.name} whileHover={{ scale: 1.05, color: 'white' }}><a href={route.href}>{route.name}</a></motion.li>
                            ))
                        }
                    </ul>
                    <div className="flex items-center gap-4">
                        <ModeToggle />
                        <Button>Contact me</Button>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;