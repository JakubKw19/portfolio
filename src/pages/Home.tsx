import { Button } from "@/components/ui/button";
import GlassPaper from "@/components/ui/GlassPaper";
// import LinesBackground from "@/components/ui/LinesBackground";

// import { motion } from "framer-motion";
// import myImage from "@/assets/myImage.png";

function Home() {

    return (
        <div
            className="h-screen pt-36 w-full flex justify-center"
            style={{ background: 'linear-gradient(0deg,rgba(255, 0, 0, 0.05) 0%, rgba(255, 0, 0, 0.03) 10%, rgba(255, 0, 0, 0.01) 30%, rgba(255, 0, 0, 0) 100%)' }}
        >
            <div style={{ maxWidth: '1280px' }} className="w-full h-full">
                <div className="w-full h-full">
                    <div className="mt-50">
                        <GlassPaper style={{ height: '100%', width: '60%', padding: '4rem' }}>
                            <p className="text-5xl pb-2">Hi I'm <span className="text-primary font-abhaya text-6xl">Kuba</span> </p>
                            <p className="text-4xl pb-6">A Fullstack Developer</p>
                            <span className="text-xl">I build scalable web applications using modern technologies. Passionate about clean code, user experience, and solving complex problems.
                            </span>
                            <div className="flex">
                                <Button className="mt-8">View my work</Button>
                                <Button className="mt-8 ml-4" variant="outline">Download CV</Button>
                            </div>
                            {/* <img src={myImage} alt="My Image" className="h-auto object-cover rounded-lg shadow-lg" /> */}
                        </GlassPaper>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;