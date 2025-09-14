import { motion, useScroll } from "framer-motion";
import { ModeToggle } from "../mode-toggle";
import { Button } from "./button";
import { useEffect, useState } from "react";
import { Link } from "react-scroll";

type NavbarProps = {
  variant?: "default" | "sticky";
};

function Navbar({ variant = "default" }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const { scrollYProgress } = useScroll();
  const navHeight = "6rem";
  const lineHeight = "5px";

  useEffect(() => {
    const handleScroll = () => {
      const scrollThreshold = window.innerHeight - 100;
      const isScrolled = window.scrollY > scrollThreshold;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const routes = [
    { name: "About me", href: "about" },
    { name: "Technologies", href: "technologies" },
    { name: "Experience", href: "experience" },
    { name: "Projects", href: "projects" },
  ];

  return (
    <motion.div
      className={`w-full z-20 ${
        variant === "sticky" ? "fixed top-0" : "absolute top-0"
      }`}
      initial={
        variant === "sticky"
          ? { y: `calc(-${navHeight} + ${lineHeight})`, opacity: 0 }
          : { y: 0, opacity: 1 }
      }
      animate={
        variant === "sticky"
          ? scrolled
            ? { y: 0, opacity: 1, backdropFilter: "blur(48px)" }
            : { y: `calc(-${navHeight} + ${lineHeight})`, opacity: 1 }
          : { y: 0, opacity: 1 }
      }
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
    >
      <nav
        className={`flex justify-center relative items-center p-8 w-full overflow-hidden transition-all duration-900 ${
          scrolled ? " backdrop-blur-xl bg-glass" : ""
        }`}
        style={{ height: navHeight }}
      >
        <div
          style={{ maxWidth: "1280px" }}
          className="flex justify-between items-center w-full"
        >
          <Link
            to="home"
            spy={true}
            smooth={true}
            className="text-6xl text-primary font-abhaya hover:cursor-pointer"
          >
            Portfolio
          </Link>
          <div className="flex items-center gap-14">
            <ul className="flex items-center space-x-8 text-xl">
              {routes.map((route) => (
                <motion.li
                  key={route.name}
                  whileHover={{ scale: 1.05, color: "#ff3333" }}
                >
                  <Link
                    to={route.href}
                    spy={true}
                    smooth={true}
                    className="hover:cursor-pointer"
                  >
                    {route.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
            <div className="flex items-center gap-4">
              <ModeToggle />
              <Link
                to={"contact"}
                spy={true}
                smooth={true}
                className="no-underline text-inherit hover:text-inherit"
              >
                <Button>Contact me</Button>
              </Link>
            </div>
          </div>
        </div>
        <motion.div
          id="scroll-indicator"
          style={{
            scaleX: scrollYProgress,
            position: "fixed",
            bottom: 0,
            left: 0,
            right: 0,
            height: lineHeight,
            originX: 0,
            background: "linear-gradient(to right, transparent, #ff3333)",
          }}
        />
      </nav>
    </motion.div>
  );
}

export default Navbar;
