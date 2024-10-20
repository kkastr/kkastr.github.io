import { Link } from "@remix-run/react";
import { Button } from "./ui/button";
import { Badge } from "~/components/ui/badge";
import { GitHubLogoIcon, ExternalLinkIcon } from "@radix-ui/react-icons";
import { SyntheticEvent } from "react";

function ScaleImage(event: SyntheticEvent<HTMLImageElement>) {
  let image = event.target as HTMLImageElement;

  const aspect_ratio = image.naturalWidth / image.naturalHeight;
  const nw = (6 * 900) / 12;
  const diff = nw / aspect_ratio / 300;
  const rescale = diff > 1 ? (1 / diff).toFixed(2) : 1;
  // const rotate_css =
  //   "[transform:_perspective(1080px)_scale()_rotateY(-30deg)]";

  image.style.setProperty(
    "transform",
    `perspective(1080px) scale(${rescale}) rotateY(-30deg)`
  );
}
const dirn_opts = [
  {
    slant: "[transform:perspective(1080px)_rotateY(-30deg)]",
    desc_start: "sm:col-start-1",
    preview_start: "sm:col-start-2",
    text_dirn: "sm:text-left",
    desc_span: "sm:ml-4",
    preview_span: "sm:col-span-1",
    txtbox_pad: "sm: pr-12",
  },
  {
    slant: "[transform:perspective(1080px)_rotateY(30deg)]",
    desc_start: "sm:col-start-2",
    preview_start: "sm:col-start-1",
    text_dirn: "sm:text-right",
    desc_span: "sm:mr-4",
    preview_span: "sm:col-span-6",
    txtbox_pad: "sm: pl-12",
  },
];

interface Params {
  name: string;
  desc: string;
  url: string;
  preview: string;
  tags: string[];
  index: number;
}
export default function FeaturedItem({
  name,
  desc,
  url,
  preview,
  tags,
  index,
}: Params) {
  let direction = index % 2;
  const {
    slant,
    desc_start,
    preview_start,
    text_dirn,
    desc_span,
    preview_span,
    txtbox_pad,
  } = dirn_opts[direction];
  return (
    <div
      className={`p-2 bg-gradient-to-t ${
        direction ? "sm:bg-gradient-to-l" : "sm:bg-gradient-to-r"
      } from-background-200 hover:from-primary/40 rounded-md group relative grid gap-y-2 sm:min-w-full sm:p-0 sm:gap-0 sm:grid-flow-row sm:auto-rows-fr sm:grid-col-flow sm:items-center sm:transition-all sm:hover:!opacity-100 sm:group-hover/list:opacity-30`}
    >
      <div className={` sm:row-start-1 sm:row-span-3 ${preview_start}`}>
        <img
          src={preview}
          alt="card"
          className={`border border-background-200 rounded-md max-sm:transform-none ${slant} group-hover:scale-100`}
        />
      </div>
      <div className={`sm:row-start-1 ${desc_span} ${desc_start} ${text_dirn}`}>
        <h3 className="text-primary text-pretty font-semibold text-lg sm:text-xl md:text-foreground/85 md:group-hover:text-accent">
          {name}
        </h3>
        <Link
          to={url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-base text-sky-400 md:text-foreground/85 md:group-hover:text-sky-400 underline-offset-4 hover:underline inline-flex items-center justify-center whitespace-nowrap transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
        >
          Github
          <ExternalLinkIcon className="h-5 w-5 text-sky-400 md:text-foreground/85 md:group-hover:text-sky-400" />
        </Link>
      </div>
      <div className={`sm:row-start-2 ${desc_span} ${desc_start} ${text_dirn}`}>
        <p className="text-pretty text-base sm:text-lg">{desc}</p>
      </div>
      <div
        className={`space-y-2 space-x-2 self-center sm:row-start-3 ${desc_span} ${desc_start} ${text_dirn}`}
      >
        {tags.map((item, index) => (
          <Badge
            key={index}
            variant="outline"
            className={`text-xs text-accent-600/85 rounded-full md:text-sm md:text-foreground/70 sm:ring-1 sm:group-hover:text-accent-600/85`}
          >
            {item}
          </Badge>
        ))}
      </div>
    </div>
  );
}
