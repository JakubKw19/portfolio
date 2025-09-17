import { motion, useScroll } from "framer-motion";
import { Button } from "./button";
import { useEffect, useState } from "react";
import { Link } from "react-scroll";
import { Popover, PopoverContent, PopoverTrigger } from "./popover";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "./navigation-menu";
import { DayNightSwitch } from "./shsfui/day-night-switch";
import { useTheme } from "../theme-provider";

type NavbarProps = {
  variant?: "default" | "sticky";
};

function Navbar({ variant = "default" }: NavbarProps) {
  const { setTheme, resolvedTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const { scrollYProgress } = useScroll();
  const [open, setOpen] = useState(false);
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
            className="text-4xl lg:text-6xl text-primary font-abhaya hover:cursor-pointer"
          >
            Portfolio
          </Link>

          <div className="flex items-center lg:gap-12 gap-6">
            <ul className="flex items-center lg:space-x-8 space-x-6 text-sm lg:text-xl max-md:hidden">
              {routes.map((route) => (
                <motion.li key={route.name} whileHover={{ scale: 1.05 }}>
                  <Link
                    to={route.href}
                    smooth={true}
                    className="hover:cursor-pointer block text-foreground hover:text-primary"
                  >
                    {route.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
            <div className="flex items-center gap-4">
              <div className="flex items-center md:hidden">
                {/* Mobile menu trigger */}
                <Popover open={open} onOpenChange={setOpen}>
                  <PopoverTrigger asChild>
                    <Button
                      className="group scale-140 overflow-visible"
                      variant="ghost"
                      size="icon"
                    >
                      <svg
                        className="pointer-events-none w-30 h-30"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M4 12L20 12"
                          className="origin-center -translate-y-[7px] transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.1)] group-aria-expanded:translate-x-0 group-aria-expanded:translate-y-0 group-aria-expanded:rotate-[315deg]"
                        />
                        <path
                          d="M4 12H20"
                          className="origin-center transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.8)] group-aria-expanded:rotate-45"
                        />
                        <path
                          d="M4 12H20"
                          className="origin-center translate-y-[7px] transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.1)] group-aria-expanded:translate-y-0 group-aria-expanded:rotate-[135deg]"
                        />
                      </svg>
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent align="start" className="w-36 p-1 md:hidden">
                    <NavigationMenu className="max-w-none *:w-full">
                      <NavigationMenuList className="flex-col items-start gap-0 md:gap-2">
                        {routes.map((link, index) => (
                          <NavigationMenuItem key={index} className="w-full">
                            <motion.li
                              key={link.name}
                              className="w-full h-full "
                              whileHover={{ scale: 1.05 }}
                            >
                              <Link
                                to={link.href}
                                spy={true}
                                smooth={true}
                                className="block py-1.5 w-full h-full cursor-pointer px-2 hover:text-primary hover:bg-black/10 rounded-md"
                                onClick={() => setOpen(false)}
                              >
                                {link.name}
                              </Link>
                            </motion.li>
                          </NavigationMenuItem>
                        ))}
                      </NavigationMenuList>
                    </NavigationMenu>
                  </PopoverContent>
                </Popover>
              </div>
              <DayNightSwitch
                checked={resolvedTheme === "dark" ? false : true}
                id="theme-toggle"
                aria-label="Toggle theme"
                onToggle={() => {
                  setTheme(resolvedTheme === "dark" ? "light" : "dark");
                }}
              />

              <Button className="hover:text-white">
                <Link
                  to={"contact"}
                  smooth={true}
                  className="block hover:text-white"
                >
                  Contact me
                </Link>
              </Button>
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
