import { Timeline } from "@/components/ui/timeline";
import {
  Typography,
  TypographyH1,
  TypographyH2,
} from "@/components/ui/typography/Typography";

const data = [
  {
    title: "03.2025 – 06.2025",
    content: (
      <section>
        <TypographyH2>Intern Fullstack Developer</TypographyH2>
        <TypographyH2 className="italic font-medium">UnitUnicorn</TypographyH2>
        <Typography>
          Developing a web application using React.js and Django. Implementing
          components with TypeScript and Styled Components. Using Material UI
          library for design. Creating and integrating with REST API.
          Collaborating in a team using Jira and Git.
        </Typography>
      </section>
    ),
  },
  {
    title: "11.2020 – 12.2020",
    content: (
      <section>
        <TypographyH2>Intern IT service manager</TypographyH2>
        <TypographyH2 className="italic font-medium">
          EXPANDER Integrator IT Sp. z o.o
        </TypographyH2>
        <Typography>Assisted with network infrastructure tasks.</Typography>
      </section>
    ),
  },
  {
    title: "03.2020 – 04.2020",
    content: (
      <section>
        <TypographyH2>Intern IT service manager</TypographyH2>
        <TypographyH2 className="italic font-medium">
          EXPANDER Integrator IT Sp. z o.o
        </TypographyH2>
        <Typography>Assisted with network infrastructure tasks.</Typography>
      </section>
    ),
  },
];

function Experience() {
  return (
    <div className="py-60 px-10" style={{ maxWidth: "1280px" }}>
      <TypographyH1 className="mb-10 flex justify-center">
        Work Experience
      </TypographyH1>
      <Timeline data={data} />
    </div>
  );
}

export default Experience;
