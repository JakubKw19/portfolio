// import LinesBackground from "@/components/ui/LinesBackground";

import { Card } from "@/components/ui/card";
import {
  AnimatePresence,
  motion,
  useInView,
  useScroll,
  useTransform,
} from "framer-motion";
import { FaCode } from "react-icons/fa";
import { LuServer } from "react-icons/lu";
import { CiMobile1 } from "react-icons/ci";
import React, { useEffect, useRef, useState } from "react";
import { TypographyH2 } from "@/components/ui/typography/Typography";
import frontendDesignSvg from "@/assets/frontend-design.svg";
import backendDesignSvg from "@/assets/backend-design.svg";
import mobileDesignSvg from "@/assets/mobile-design.svg";
import { cn } from "@/lib/utils";
import GlassPaper from "@/components/ui/GlassPaper";

const content = [
  {
    title: "Frontend developer",
    text: "I create responsive and user-friendly interfaces using React, TypeScript, and modern CSS frameworks.",
    image: frontendDesignSvg,
  },
  {
    title: "Backend developer",
    text: "I create responsive and user-friendly interfaces using React, TypeScript, and modern CSS frameworks.",
    image: backendDesignSvg,
  },
  {
    title: "Mobile developer",
    text: "I create responsive and user-friendly interfaces using React, TypeScript, and modern CSS frameworks.",
    image: mobileDesignSvg,
  },
];

type ItemProps = {
  item: { title: string; text: string; image: string };
  idx: number;
  setCurrent: (idx: number) => void;
  currentScrolledItem: number;
};

function Item({ item, idx, setCurrent, currentScrolledItem }: ItemProps) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const rotateX = useTransform(
    scrollYProgress,
    [0, 0.4, 0.6, 1],
    [-50, 0, 0, 50]
  );
  const zPosition = useTransform(
    scrollYProgress,
    [0, 0.4, 0.6, 1],
    [-400, 0, 0, -400]
  );
  const opacity = useTransform(scrollYProgress, [0, 0.4, 0.6, 1], [0, 1, 1, 0]);

  useEffect(() => {
    return scrollYProgress.on("change", (v) => {
      if (v > 0.4 && v <= 0.6 && currentScrolledItem !== idx) {
        setCurrent(idx);
      }
    });
  }, [scrollYProgress, setCurrent, idx, currentScrolledItem]);

  return (
    <motion.div
      ref={ref}
      style={{
        rotateX: rotateX,
        z: zPosition,
        opacity: opacity,
      }}
      className={cn(
        "w-130 h-fit p-5 m-10",
        currentScrolledItem != idx ? "" : " "
      )}
      key={idx}
    >
      <GlassPaper className="px-2">
        {/* <CardHeader className="p-4"> */}
        <Card className="w-fit p-3">
          {idx === 0 && <FaCode color={"#FF3333"} size={20} />}
          {idx === 1 && <LuServer color={"#FF3333"} size={20} />}
          {idx === 2 && <CiMobile1 color={"#FF3333"} size={20} />}
        </Card>
        <TypographyH2 className="pt-4 pb-2 -ml-1">{item.title}</TypographyH2>
        {/* </CardHeader> */}
        <span className="text-sm pb-4">{item.text}</span>
      </GlassPaper>
    </motion.div>
  );
}

function AboutMe() {
  const [currentScrolledItem, setCurrentScrolledItem] = useState(0);
  const ref = React.useRef(null);
  const imgRef = useRef(null);
  const inView = useInView(ref);
  // const { scrollYProgress } = useScroll({
  //   target: imgRef,
  //   offset: ["start center", "end end"],
  // });
  const imgInView = useInView(ref, { margin: "20%" });

  const variants = {
    visible: { opacity: 1, scale: 1, y: 0 },
    hidden: {
      opacity: 0,
      scale: 0.65,
      y: 50,
    },
  };
  return (
    <div id="about" className="w-full flex justify-center py-60">
      {/* <LinesBackground size={150} red={100} green={0} blue={0} /> */}
      <div style={{ maxWidth: "1280px" }} className="w-full h-full ">
        <motion.div
          ref={ref}
          animate={inView ? "visible" : "hidden"}
          variants={variants}
          transition={{ duration: 2, ease: "easeOut" }}
          className="w-full h-full flex items-center flex-col"
        >
          <h1 className="text-5xl mb-4">About Me</h1>
          <p className="text-xl text-center">
            With years of education and individual experience in full-stack
            development, I specialize in creating robust, scalable applications
            that deliver exceptional user experiences.
          </p>
          <div ref={imgRef} className="w-full flex">
            <motion.div className="w-1/2 flex justify-center relative">
              <motion.div
                className={cn(
                  "h-1/4 w-2/3 my-40 flex items-center top-1/3 ",
                  imgInView ? "sticky" : "fixed"
                )}
                // style={{ y: imageY }}
              >
                <motion.div
                  className="absolute w-[300px] h-[300px] rounded-full blur-[150px]
              bg-[radial-gradient(circle_at_center,rgba(255,0,0,0.5))]
              from-rose-500/50 via-pink-500/50 to-purple-500/50
              -z-10 top-1/2 left-[200%] -translate-x-1/2 -translate-y-1/2"
                />
                <AnimatePresence mode="wait">
                  <motion.img
                    className="w-full h-full"
                    key={content[currentScrolledItem].image}
                    src={content[currentScrolledItem].image}
                    alt="design"
                    loading="lazy"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.1 }}
                  />
                </AnimatePresence>
              </motion.div>
            </motion.div>
            <div className="flex flex-col mt-10 relative">
              <div className="w-full h-2/3 gap-y-40 flex flex-col my-40 perspective-midrange perspective-origin-center">
                {content.map((item, idx) => (
                  <Item
                    item={item}
                    idx={idx}
                    setCurrent={setCurrentScrolledItem}
                    currentScrolledItem={currentScrolledItem}
                  />
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default AboutMe;
