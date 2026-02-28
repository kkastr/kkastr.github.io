import profile from "~/images/profile_professional.jpg";

export default function BioSection() {
  const description =
    "I work at the intersection of machine learning and data science, from experimental modeling to deployed products. Recent work includes a production LLM analytics app, physics-informed ML systems, and end-to-end data pipelines with FastAPI and React.";

  const quickLinks = [
    {
      label: "Download Resume",
      href: "/kastritis_resume.pdf",
      newTab: true,
      primary: true,
    },
    {
      label: "Email Me",
      href: "mailto:konst.kastritis@gmail.com",
      newTab: false,
      primary: false,
    },
    {
      label: "Code Samples (GitHub)",
      href: "https://github.com/kkastr",
      newTab: true,
      primary: false,
    },
  ];

  return (
    <section className="mb-10 w-full max-w-[900px] px-4">
      <div className="grid gap-5 rounded-md border border-background-300/70 bg-background/50 p-4 sm:grid-cols-[1fr_auto] sm:items-center sm:gap-x-8 sm:p-5">
        <div className="space-y-4 sm:order-1">
          <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-foreground/60">
            Context
          </p>
          <p className="text-pretty text-base text-foreground/88 md:text-lg">
            {description}
          </p>
          <p className="text-sm text-foreground/70 md:text-base">
            Focus areas: production LLM tooling, scientific ML, and end-to-end
            data systems.
          </p>
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm md:text-base">
            {quickLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.newTab ? "_blank" : undefined}
                rel={link.newTab ? "noopener noreferrer" : undefined}
                aria-label={link.label}
                className={
                  link.primary
                    ? "font-semibold text-primary underline decoration-primary/50 underline-offset-4 transition-colors hover:text-accent"
                    : "text-foreground/80 underline decoration-foreground/35 underline-offset-4 transition-colors hover:text-foreground"
                }
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
        <div className="sm:order-2">
          <img
            src={profile}
            alt="Portrait of Konstantinos Kastritis"
            className="size-40 rounded-sm border border-background-300 object-cover sm:size-48"
            width={512}
            height={650}
            loading="eager"
            decoding="async"
          />
        </div>
      </div>
    </section>
  );
}
