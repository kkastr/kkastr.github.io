import { Link } from "@remix-run/react";
import { Button } from "./ui/button";
import { Badge } from "~/components/ui/badge";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
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
    preview_start: "sm:col-start-7",
    text_dirn: "sm:text-left",
    desc_span: "sm:col-span-7",
    preview_span: "sm:col-span-6",
  },
  {
    slant: "[transform:perspective(1080px)_rotateY(30deg)]",
    desc_start: "sm:col-start-7",
    preview_start: "sm:col-start-1",
    text_dirn: "sm:text-right",
    desc_span: "sm:col-span-6",
    preview_span: "sm:col-span-7",
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
  } = dirn_opts[direction];
  return (
    <div className="rounded-md group relative  sm:min-w-full sm:grid sm:grid-rows-auto sm:grid-cols-11 sm:transition-all sm:hover:!opacity-100 sm:group-hover/list:opacity-30">
      <div
        className={`w-full mb-2 self-center content-center sm:row-start-1 ${preview_span} ${preview_start}`}
      >
        <img
          src={preview}
          alt="card"
          className={`shadow shadow-white/20 rounded-md max-h-[300px] w-full sm:object-fill max-sm:transform-none ${slant}`}
        />
      </div>
      <div
        className={`self-center sm:row-start-1 ${desc_span} ${desc_start} ${text_dirn}`}
      >
        <h3 className="text-primary text-pretty font-semibold text-lg sm:text-xl md:text-foreground/85 md:group-hover:text-primary">
          {name}
        </h3>
        <Link to={url} target="_blank" rel="noopener noreferrer">
          <Button
            variant="link"
            className="mb-2 text-base text-accent-600/85 md:text-foreground/85 md:group-hover:text-accent-600/85"
          >
            <GitHubLogoIcon className="mr-2 h-5 w-5 text-foreground/85" />
            Github
          </Button>
        </Link>
        <div className="bg-background-200/80 rounded-md p-6 mb-4">
          <p className="text-pretty text-base sm:text-lg">{desc}</p>
        </div>
        <div className="mb-4">
          {tags.map((item, index) => (
            <Badge
              key={index}
              variant="outline"
              className="mx-2 text-foreground/70 sm:ring-1 rounded-full"
            >
              {item}
            </Badge>
          ))}
        </div>
      </div>
    </div>
  );
}
