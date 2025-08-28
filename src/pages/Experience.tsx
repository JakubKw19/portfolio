import { Typography, TypographyH1, TypographyH2 } from "@/components/ui/typography/Typography"

function Experience() {
    return (
        <div className="py-60 px-10" style={{ maxWidth: "1280px" }}>
            <TypographyH1 className="mb-10 flex justify-center">Work Experience</TypographyH1>
            <ul className="space-y-7 w-4/5 mx-auto">
                <li>
                    <p className="flex justify-between">
                        <TypographyH2>Intern Fullstack Developer</TypographyH2><TypographyH2 className="font-light">03.2025 – 06.2025</TypographyH2>
                    </p>
                    <TypographyH2 className="italic font-medium">UnitUnicorn</TypographyH2>
                    <Typography>
                        Developing a web application using React.js and
                        Django. Implementing components with TypeScript and Styled Components.
                        Using Material UI library for design.
                        Creating and integrating with REST API.
                        Collaborating in a team using Jira and Git.
                    </Typography>
                </li>
                <li>
                    <p className="flex justify-between">
                        <TypographyH2>Intern IT service manager</TypographyH2><TypographyH2 className="font-light">11.2020 – 12.2020</TypographyH2>
                    </p>
                    <TypographyH2 className="italic font-medium">EXPANDER Integrator IT Sp. z o.o</TypographyH2>
                    <Typography>
                        Assisted with network infrastructure tasks
                    </Typography>
                </li>
                <li>
                    <p className="flex justify-between">
                        <TypographyH2>Intern IT service manager</TypographyH2><TypographyH2 className="font-light">03.2020 – 04.2020</TypographyH2>
                    </p>
                    <TypographyH2 className="italic font-medium">EXPANDER Integrator IT Sp. z o.o</TypographyH2>
                    <Typography>
                        Assisted with network infrastructure tasks
                    </Typography>
                </li>
            </ul>
        </div>
    )
}

export default Experience