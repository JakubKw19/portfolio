// import LinesBackground from "@/components/ui/LinesBackground";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { motion, useInView } from "framer-motion";
import { FaCode } from "react-icons/fa";
import { LuServer } from "react-icons/lu";
import { CiMobile1 } from "react-icons/ci";
import React from "react";
import { TypographyH2 } from "@/components/ui/typography/Typography";

function AboutMe() {
  const ref = React.useRef(null);
  const inView = useInView(ref);
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
          <div className="flex flex-col justify-between mt-10">
            <Card className="w-full p-5 m-10">
              <CardHeader className="p-4">
                <Card className="w-fit p-3">
                  <FaCode color={"#FF3333"} size={20} />
                </Card>
                <TypographyH2>Frontend Developer</TypographyH2>
              </CardHeader>
              <CardContent className="text-sm pb-4 -mt-8 -ml-1">
                I create responsive and user-friendly interfaces using React,
                TypeScript, and modern CSS frameworks.
              </CardContent>
            </Card>
            <Card className="w-full p-5 m-10">
              <CardHeader className="p-4">
                <Card className="w-fit p-3">
                  <LuServer color={"#FF3333"} size={20} />
                </Card>
                <TypographyH2>Backend Developer</TypographyH2>
              </CardHeader>
              <CardContent className="text-sm pb-4 -mt-8 -ml-1">
                I create responsive and user-friendly interfaces using React,
                TypeScript, and modern CSS frameworks.
              </CardContent>
            </Card>
            <Card className="w-full p-5 m-10">
              <CardHeader className="p-4">
                <Card className="w-fit p-3">
                  <CiMobile1 color={"#FF3333"} size={20} />
                </Card>
                <TypographyH2>Mobile Developer</TypographyH2>
              </CardHeader>
              <CardContent className="text-sm pb-4 -mt-8 -ml-1">
                I create responsive and user-friendly interfaces using React,
                TypeScript, and modern CSS frameworks.
              </CardContent>
            </Card>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default AboutMe;
