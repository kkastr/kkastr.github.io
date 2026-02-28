interface FeaturedItemProps {
  name: string;
  desc: string;
  impact: string;
  liveUrl?: string;
  sourceUrl?: string;
  sourcePrivate?: boolean;
  preview: string;
  previewWidth: number;
  previewHeight: number;
  tags: string[];
  index: number;
}

export default function FeaturedItem({
  name,
  desc,
  impact,
  liveUrl,
  sourceUrl,
  sourcePrivate = false,
  preview,
  previewWidth,
  previewHeight,
  tags,
  index,
}: FeaturedItemProps) {
  const projectNumber = String(index + 1).padStart(2, "0");

  return (
    <article className="rounded-md border border-background-300/75 bg-background/55 p-4 sm:p-5">
      <div className="mb-4 flex items-start justify-between gap-3 border-b border-background-300/70 pb-3">
        <div>
          <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-foreground/60">
            Case {projectNumber}
          </p>
          <h3 className="mt-1 text-2xl/tight font-semibold text-foreground/95 md:text-3xl/tight">
            {name}
          </h3>
        </div>
        <span className="shrink-0 rounded-sm border border-background-300/70 px-2 py-1 font-mono text-[10px] uppercase tracking-[0.08em] text-foreground/65">
          {sourcePrivate && !sourceUrl ? "Private Source" : "Public Source"}
        </span>
      </div>

      <div className="grid gap-4 md:grid-cols-[1.25fr_1fr] md:gap-5">
        <div className="space-y-4">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-foreground/58">
              Summary
            </p>
            <p className="mt-1 text-sm leading-relaxed text-foreground/90 md:text-base">
              {desc}
            </p>
          </div>

          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-foreground/58">
              Result
            </p>
            <p className="mt-1 text-sm leading-relaxed text-foreground/80 md:text-base">
              {impact}
            </p>
          </div>

          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-foreground/58">
              Stack
            </p>
            <p className="mt-1 font-mono text-[11px] uppercase tracking-[0.06em] text-foreground/68 md:text-xs">
              {tags.join(" • ")}
            </p>
          </div>

          <div className="flex flex-wrap gap-x-5 gap-y-2 pt-1 text-sm md:text-base">
            {liveUrl ? (
              <a
                href={liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary underline decoration-primary/45 underline-offset-4 transition-colors hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              >
                Live Demo
              </a>
            ) : null}
            {sourceUrl ? (
              <a
                href={sourceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground/80 underline decoration-foreground/35 underline-offset-4 transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              >
                Source Code
              </a>
            ) : null}
          </div>
        </div>

        <div className="overflow-hidden rounded-sm border border-background-300/80 bg-background-200/10">
          <img
            src={preview}
            alt={`${name} project preview`}
            className="w-full object-cover"
            width={previewWidth}
            height={previewHeight}
            loading="lazy"
            decoding="async"
          />
        </div>
      </div>
    </article>
  );
}
