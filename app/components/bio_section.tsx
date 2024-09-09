import { Link } from "@remix-run/react";

import { Button } from "~/components/ui/button";
import profile from "~/images/profile.jpg";

export default function BioSection() {
  const description = `Konstantinos is a physicist turned data scientist with a passion for solving complex problems through data-driven insights. Combining his analytical background with expertise in coding and machine learning, he transforms diverse datasets into actionable outcomes. Konstantinos specializes in applying statistical methods, and algorithmic techniques to real-world problems.`;

  const resumepdf = "./kastritis_resume.pdf";
  const githubLink = "https://github.com/kkastr";
  const linkedinLink =
    "https://www.linkedin.com/in/konstantinos-kastritis-269366232/";
  const gscholarLink =
    "https://scholar.google.ca/citations?hl=en&user=lVNtC6cAAAAJ";

  return (
    <div className="flex flex-col justify-between mx-10 my-5 md:flex-row md:max-w-4xl">
      <div className="flex justify-center w-full md:w-1/3">
        <img
          src={profile}
          alt="Profile"
          className="overflow-hidden rounded-md aspect-square object-cover size-36 md:size-64"
        />
      </div>
      <div className="w-full my-2 md:w-2/3  md:flex-col m-2">
        <div className="h-full md:h-5/6 lg:h-4/5 flex">
          <div className="bg-background-200 rounded-md shadow">
            <p className="text-balance text-base md:text-lg lg:text-lg drop-shadow-lg m-3">
              {description}
            </p>
          </div>
        </div>
        <div className="h-full my-1 flex md:h-1/6 lg:h-1/5 items-center">
          <Link to={resumepdf} className="w-1/4 mx-2">
            <Button variant="outline" className="w-full">
              <p className="text-md md:text-lg drop-shadow-lg"> Resume </p>
            </Button>
          </Link>
          <Link to={githubLink} className="w-1/4 mx-2">
            <Button variant="outline" className="w-full">
              <p className="text-md md:text-lg drop-shadow-lg"> Github </p>
            </Button>
          </Link>
          <Link to={linkedinLink} className="w-1/4 mx-2">
            <Button variant="outline" className="w-full">
              <p className="text-md md:text-lg drop-shadow-lg"> LinkedIn </p>
            </Button>
          </Link>
          <Link to={gscholarLink} className="w-1/4 mx-2">
            <Button variant="outline" className="w-full">
              <p className="text-md md:text-lg drop-shadow-lg"> Research </p>
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
