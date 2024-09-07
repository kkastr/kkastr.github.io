"use client";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import pfp from "../public/images/profile.jpg";

export default function BioSection() {
  const section_name = "Bio";
  const description = `Konstantinos is a physicist turned data scientist with a passion for solving complex problems through data-driven insights. Combining his analytical background with expertise in coding and machine learning, he transforms diverse datasets into actionable outcomes. Konstantinos specializes in applying machine learning, statistical methods, and algorithmic techniques to real-world problems.`;

  const resumepdf = "./kastritis_resume.pdf";
  const githubLink = "https://github.com/kkastr";
  const linkedinLink = "https://www.linkedin.com/in/konstantinos-kastritis-269366232/";
  const email = "dinokastritis@gmail.com";

  const imgSize = "256px";

  return (
    <div className="flex flex-col justify-between mx-10 my-5 md:flex-row md:max-w-4xl">
      <div className="flex justify-center w-full md:w-1/3">
        <Image
          src={pfp}
          alt="Profile Picture"
          className="overflow-hidden rounded-md aspect-square object-cover size-36 md:size-64"
        />
      </div>
      <div className="w-full my-2 md:w-2/3  md:flex-col m-2">
        <div className="h-full md:h-5/6 lg:h-4/5 flex">
          <div className="bg-zinc-700 rounded-md">
            <p className="text-balance text-base md:text-lg lg:text-lg drop-shadow-lg m-3">
              {description}
            </p>
          </div>
        </div>
        <div className="h-full my-1 flex md:h-1/6 lg:h-1/5 items-center">
          <Link href={resumepdf} passHref className="w-1/3 mx-2">
            <Button variant="outline" className="w-full">
              <p className="text-md md:text-lg drop-shadow-lg"> Resume </p>
            </Button>
          </Link>
          <Link href={githubLink} passHref className="w-1/3 mx-2">
            <Button variant="outline" className="w-full">
              <p className="text-md md:text-lg drop-shadow-lg"> Github </p>
            </Button>
          </Link>
          <Link href={linkedinLink} passHref className="w-1/3 mx-2">
            <Button variant="outline" className="w-full">
              <p className="text-md md:text-lg drop-shadow-lg"> LinkedIn </p>
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
