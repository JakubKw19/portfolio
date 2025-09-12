import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { TypographyH1 } from "@/components/ui/typography/Typography";
import { FaGithub } from "react-icons/fa6";
import { CiMail } from "react-icons/ci";
import { FaLinkedin } from "react-icons/fa";

function ContactMe() {
  return (
    <div
      className="py-60 px-10 w-full flex justify-center items-center flex-col"
      style={{ maxWidth: "1280px" }}
    >
      <TypographyH1 className="flex justify-center">Contact Me</TypographyH1>
      <div className="m-10 flex justify-between w-1/4">
        <a
          href="https://github.com/JakubKw19"
          className="transition-all duration-300 hover:scale-110 hover:-translate-y-1"
        >
          <FaGithub size={40} />
        </a>
        <a
          href="mailto:kkwiecie19@gmail.com"
          className="transition-all duration-300 hover:scale-110 hover:-translate-y-1"
        >
          <CiMail size={40} />
        </a>
        <a
          href="https://www.linkedin.com/in/jakubkw19/"
          className="transition-all duration-300 hover:scale-110 hover:-translate-y-1"
        >
          <FaLinkedin size={40} />
        </a>
      </div>
      <Card className="p-10 bg-card flex flex-col items-center w-3/5">
        <Input
          type="email"
          placeholder="Your email"
          className="w-full py-5 mx-auto"
        />
        <Input
          type="text"
          placeholder="Subject"
          className="w-full py-5 mx-auto"
        />
        <Textarea
          placeholder="Your message"
          className="w-full py-3 h-40 mx-auto"
        />
        <button className="bg-primary text-primary-foreground px-4 py-2 rounded-md hover:bg-primary/90 transition w-full">
          Send
        </button>
      </Card>
    </div>
  );
}

export default ContactMe;
