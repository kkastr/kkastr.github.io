import { Link } from "@remix-run/react";

import { Button } from "~/components/ui/button";
import profile from "~/images/profile.jpg";

export default function BioSection() {
  const description = `I'm a physicist turned data scientist with a deep interest in using data to solve practical problems. I enjoy working with complex datasets and using my analytical background along with coding and machine learning to uncover meaningful insights. I'm always learning and exploring new tools to improve my skills.`;
  const contentLinks = {
    Resume: "./kastritis_resume.pdf",
    Github: "https://github.com/kkastr",
    Linkedin: "https://www.linkedin.com/in/konstantinos-kastritis-269366232/",
    Research: "https://scholar.google.ca/citations?hl=en&user=lVNtC6cAAAAJ",
  };

  return (
    <div className="flex flex-col items-center mx-10 my-5 md:flex-row md:max-w-4xl">
      <div className="flex justify-center w-full md:w-1/3">
        <img
          src={profile}
          alt="Profile"
          className="overflow-hidden rounded-md aspect-square object-cover size-36 md:size-64"
        />
      </div>
      <div className="w-full my-2 md:w-2/3  md:flex-col m-2">
        <div className="h-full md:h-5/6 lg:h-4/5 flex">
          <div className="rounded-md shadow">
            <p className="text-pretty text-justify text-base sm:text-lg m-3">
              {description}
            </p>
          </div>
        </div>
        <div className="h-full my-1 flex md:h-1/6 lg:h-1/5 items-center">
          {Object.entries(contentLinks).map(([name, url]) => (
            <Link
              to={url}
              target="_blank"
              rel="noopener noreferrer"
              className="w-1/4 mx-2"
              key={name}
            >
              <Button
                variant="outline"
                className="w-full bg-primary/60 ring-0 sm:ring-1 sm:bg-background hover:text-foreground hover:bg-primary/70"
              >
                <p className="text-md sm:text-base drop-shadow-lg"> {name} </p>
              </Button>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
