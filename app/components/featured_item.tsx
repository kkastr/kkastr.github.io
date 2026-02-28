import { Badge } from "~/components/ui/badge";
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

  return (
    <article className="group rounded-md border border-background-300 bg-background/80 p-3 transition-all duration-200 hover:-translate-y-0.5 hover:border-accent/45 hover:bg-background-100/80 hover:shadow-lg sm:p-4">
      <div className="grid gap-4 md:grid-cols-2 md:items-start">
        <div className={cn("space-y-3", detailsOrder)}>
          <h3 className="text-lg font-semibold text-foreground/95 transition-colors group-hover:text-primary md:text-xl">
            {name}
          </h3>
          <p className="text-balance text-sm leading-relaxed text-foreground/90 md:text-base">
            {desc}
          </p>
          <p className="text-sm leading-relaxed text-foreground/75 md:text-base">{impact}</p>
          <div className="flex flex-wrap gap-2">
            {tags.map((item) => (
              <Badge
                key={`${name}-${item}`}
                variant="outline"
                className="rounded-full text-xs text-foreground/80"
              >
                {item}
              </Badge>
            ))}
          </div>
          <div className="flex flex-wrap gap-3 pt-1 text-sm">
            {liveUrl ? (
              <a
                href={liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center rounded-md bg-primary px-3 py-1.5 text-primary-foreground transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              >
                Live Demo
              </a>
            ) : null}
            {sourceUrl ? (
              <a
                href={sourceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center rounded-md ring-1 ring-border px-3 py-1.5 transition-colors hover:bg-background-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              >
                Source Code
              </a>
            ) : null}
            {!sourceUrl && sourcePrivate ? (
              <span
                className="inline-flex items-center rounded-md ring-1 ring-border px-3 py-1.5 text-foreground/70"
                title="Source repository is private"
              >
                Private Source
              </span>
            ) : null}
          </div>
        </div>
        <div
          className={cn(
            "overflow-hidden rounded-md border border-background-300 transition-colors group-hover:border-accent/35",
            imageOrder
          )}
        >
          <img
            src={preview}
            alt={`${name} project preview`}
            className="w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
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
