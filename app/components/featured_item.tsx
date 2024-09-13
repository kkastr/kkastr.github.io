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
  let text_start_col = direction ? "sm:col-start-6" : "sm:col-start-1";
  let preview_start_col = direction ? "sm:col-start-1" : "sm:col-end-13";
  return (
    <div className=" rounded-md group relative grid sm:grid-rows-auto sm:grid-cols-12 sm:gap-2 sm:min-w-full h-[300px] border-0 transition-all md:hover:!opacity-100 md:group-hover/list:opacity-30">
      <div
        className={`sm:row-start-1 ${text_start_col} sm:col-span-7 self-center relative`}
      >
        <h3 className=" mb-2 text-justify text-pretty font-semibold text-lg sm:text-xl">
          {name}
        </h3>
        <Link to={url} target="_blank" rel="noopener noreferrer">
          <Button variant="link" className="mb-2">
            <GitHubLogoIcon className="mr-2 h-6 w-6" /> Github
          </Button>
        </Link>
        <div className="bg-background-200/80 rounded-md p-6 mb-4">
          <p className="text-justify text-pretty text-base sm:text-lg y">
            {desc}
          </p>
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

      <div
        className={`sm:col-span-6 sm:row-start-1  ${preview_start_col} self-center`}
      >
        <img
          src={preview}
          alt="card"
          onLoad={ScaleImage}
          className="shadow shadow-white/20 rounded-md max-h-[300px]"
        />
      </div>
    </div>
  );
}
