import { Link } from "@remix-run/react";
import profile from "~/images/profile.jpg";
import { FaGithub, FaLinkedin, FaGoogleScholar } from "react-icons/fa6";
import { TbFileCv } from "react-icons/tb";

export default function BioSection() {
  const description = `I'm a physicist turned data scientist with a deep interest in using data to solve practical problems. I enjoy working with complex datasets and using my analytical background along with coding and machine learning to uncover meaningful insights. I'm always learning and exploring new tools to improve my skills.`;
  const contentLinks = {
    Resume: { icon: TbFileCv, url: "./kastritis_resume.pdf" },
    Github: { icon: FaGithub, url: "https://github.com/kkastr" },
    Linkedin: {
      icon: FaLinkedin,
      url: "https://www.linkedin.com/in/konstantinos-kastritis-269366232/",
    },
    Research: {
      icon: FaGoogleScholar,
      url: "https://scholar.google.ca/citations?hl=en&user=lVNtC6cAAAAJ",
    },
  };

  return (
    <div className="mb-4 p-2 grid gap-y-2 justify-items-center max-sm:max-w-sm sm:gap-x-4 md:w-dvw md:max-w-[900px]  md:gap-y-0 lg:gap-x-8 md:grid-flow-row md:grid-col-flow sm:items-center">
      <div className="sm:ml-2 md:ml-4 lg:ml-8 md:col-start-1 sm:row-start-1 sm:row-span-2">
        <img
          src={profile}
          alt="Profile"
          className="rounded-md size-36 sm:size-48"
        />
      </div>
      <div className="sm:mr-2 md:mr-4 lg:mr-8 sm:col-start-2 sm:row-start-1">
        <p className="text-pretty text-justify text-base md:text-lg">
          {description}
        </p>
      </div>
      <div className="space-x-8 md:mr-4 lg:mr-8 sm:col-start-2 sm:row-start-2">
        {Object.entries(contentLinks).map(([name, items], index) => (
          <Link
            to={items.url}
            target="_blank"
            rel="noopener noreferrer"
            key={name}
            className="inline-flex h-9"
          >
            {/* className={`h-8 px-3 sm:px-8 inline-flex items-center justify-center whitespace-nowrap rounded-md text-md sm:text-base drop-shadow-lg transition-colors bg-primary/40 shadow ring-0 ring-white/10 md:ring-1 md:bg-background md:hover:text-foreground md:hover:bg-primary/70 hover:text-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50`} */}
            {/* {name} */}
            <items.icon className="h-full w-full self-center text-primary sm:text-foreground/85 sm:hover:text-primary" />
            {/* <ExternalLinkIcon className="h-5 w-5 text-sky-400 md:text-foreground/85 md:group-hover:text-sky-400" /> */}
          </Link>
        ))}
      </div>
    </div>
  );
}
