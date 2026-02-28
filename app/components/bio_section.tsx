import { Button } from "~/components/ui/button";
import profile from "~/images/profile_professional.jpg";

export default function BioSection() {
  const description =
    "I work at the intersection of machine learning and data science, from experimental modeling to deployed products. Recent work includes a production LLM analytics app, physics-informed ML systems, and end-to-end data pipelines with FastAPI and React.";

  const quickLinks = [
    {
      label: "Download Resume",
      href: "/kastritis_resume.pdf",
      newTab: true,
      variant: "default" as const,
    },
    {
      label: "Email Me",
      href: "mailto:konst.kastritis@gmail.com",
      newTab: false,
      variant: "outline" as const,
    },
    {
      label: "Code Samples (GitHub)",
      href: "https://github.com/kkastr",
      newTab: true,
      variant: "ghost" as const,
    },
  ];

  return (
    <section className="mb-8 grid w-full max-w-[900px] gap-4 px-4 sm:grid-cols-[auto_1fr] sm:items-center sm:gap-x-6 md:gap-x-8">
      <div>
        <img
          src={profile}
          alt="Portrait of Konstantinos Kastritis"
          className="size-36 rounded-lg object-cover sm:size-44"
          width={512}
          height={650}
          loading="eager"
          decoding="async"
        />
      </div>
      <div className="space-y-4">
        <p className="text-pretty text-base text-foreground/90 md:text-lg">
          {description}
        </p>
        <div className="flex flex-wrap gap-3">
          {quickLinks.map((link) => (
            <Button asChild key={link.label} variant={link.variant}>
              <a
                href={link.href}
                target={link.newTab ? "_blank" : undefined}
                rel={link.newTab ? "noopener noreferrer" : undefined}
                aria-label={link.label}
              >
                {link.label}
              </a>
            </Button>
          ))}
        </div>
      </div>
    </section>
  );
}
