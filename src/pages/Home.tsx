import { Button } from "@/components/ui/button";
import GlassPaper from "@/components/ui/GlassPaper";
import frontendDDeveloper from "@/assets/frontend-developer.png";
// import LinesBackground from "@/components/ui/LinesBackground";

// import { motion } from "framer-motion";
// import myImage from "@/assets/myImage.png";

function Home() {
  return (
    <div
      className="h-screen pt-1/8 w-full flex justify-center"
      id="home"
      style={{
        background:
          "linear-gradient(0deg,rgba(255, 0, 0, 0.05) 0%, rgba(255, 0, 0, 0.03) 10%, rgba(255, 0, 0, 0.01) 30%, rgba(255, 0, 0, 0) 100%)",
      }}
    >
      <div style={{ maxWidth: "1280px" }} className="w-full h-full relative">
        <div className="mt-10 m-4 w-full h-full flex flex-col md:flex-row items-center justify-between">
          <GlassPaper className="w-full md:w-1/2 py-15 flex flex-col items-center">
            <p className="text-4xl md:text-5xl pb-2">
              Hi I'm{" "}
              <span className="text-primary font-abhaya text-5xl md:text-6xl">
                Kuba
              </span>
            </p>
            <p className="text-2xl md:text-4xl pb-6">A Fullstack Developer</p>
            <span className="text-base md:text-xl text-center">
              I build scalable web applications using modern technologies.
              Passionate about clean code, user experience, and solving complex
              problems.
            </span>
            <div className="flex flex-col sm:flex-row">
              <Button className="mt-6 sm:mt-8">View my work</Button>
              <Button className="mt-4 sm:mt-8 sm:ml-4" variant="outline">
                Download CV
              </Button>
            </div>
          </GlassPaper>

          <img
            src={frontendDDeveloper}
            alt="frontend developer illustration"
            className="mt-6 md:mt-0 md:ml-10 w-3/4 md:w-1/2 max-w-sm"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
