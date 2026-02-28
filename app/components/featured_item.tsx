import { cn } from "~/lib/utils";

const dirn_opts = [
  {
    detailsOrder: "md:order-1",
    imageOrder: "md:order-2",
  },
  {
    detailsOrder: "md:order-2",
    imageOrder: "md:order-1",
  },
];

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
  const { detailsOrder, imageOrder } = dirn_opts[index % 2];
  const projectNumber = String(index + 1).padStart(2, "0");

  return (
    <article className="group">
      <div className="grid gap-5 md:grid-cols-2 md:items-start">
        <div className={cn("space-y-3", detailsOrder)}>
          <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-foreground/55">
            Project {projectNumber}
          </p>
          <h3 className="font-editorial text-2xl/tight text-foreground/95 transition-colors group-hover:text-primary md:text-3xl/tight">
            {name}
          </h3>
          <p className="text-balance text-sm leading-relaxed text-foreground/90 md:text-base">
            {desc}
          </p>
          <p className="text-sm leading-relaxed text-foreground/75 md:text-base">{impact}</p>
          <div className="font-mono text-[11px] uppercase tracking-[0.08em] text-foreground/60">
            {tags.join(" / ")}
          </div>
          <div className="flex flex-wrap gap-x-5 gap-y-2 pt-1 text-sm md:text-base">
            {liveUrl ? (
              <a
                href={liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary underline decoration-primary/45 underline-offset-4 transition-colors hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              >
                Live
              </a>
            ) : null}
            {sourceUrl ? (
              <a
                href={sourceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground/80 underline decoration-foreground/35 underline-offset-4 transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              >
                GitHub
              </a>
            ) : null}
            {!sourceUrl && sourcePrivate ? (
              <span
                className="text-foreground/65"
                title="Source repository is private"
              >
                Private
              </span>
            ) : null}
          </div>
        </div>
        <div
          className={cn(
            "overflow-hidden rounded-sm border border-background-300/80 bg-background-200/10 transition-colors group-hover:border-primary/35",
            imageOrder
          )}
        >
          <img
            src={preview}
            alt={`${name} project preview`}
            className="w-full object-cover transition-transform duration-300 group-hover:scale-[1.01]"
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
