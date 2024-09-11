import { Link } from "@remix-run/react";
import { Badge } from "~/components/ui/badge";
interface FeaturedItemProps {
  name: string;
  desc: string;
  url: string;
  preview: string;
  tags: string[];
}
export default function FeaturedItem({
  name,
  desc,
  url,
  preview,
  tags,
}: FeaturedItemProps) {
  return (
    <Link to={url}>
      <div className="group relative grid sm:grid-cols-8 sm:gap-6 sm: min-w-full h-full border-0 transition-all md:hover:!opacity-100 md:group-hover/list:opacity-30 rounded-md">
        <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:block md:group-hover:bg-background-200 md:group-hover:shadow-white/10 md:group-hover:drop-shadow-lg"></div>
        <img
          src={preview}
          alt="BD sim"
          className="z-10 sm:col-span-4 rounded-md border-background-200 justify-self-center place-self-center"
        />
        <div className="sm:col-span-4 flex flex-col h-full z-10">
          <div className="w-full my-6 p-0 flex flex-col justify-center items-center">
            <h3 className="group-hover:before:block group-hover:before:absolute group-hover:before:-inset-1 group-hover:before:-skew-y-3 before:bg-primary group-hover:before:bg-secondary-500/60 relative inline-block">
              <span className="text-xl md:text-2xl relative">{name}</span>
            </h3>
          </div>
          <p className="w-full my-6 text-pretty text-md tracking-tight md:text-lg drop-shadow-lg">
            {desc}
          </p>
          <div className="my-3 flex items-center justify-around">
            {tags.map((item, index) => (
              <Badge
                key={index}
                className="mx-1 bg-background-200 group-hover:bg-secondary-500/60 px-3 py-1 rounded-full"
              >
                {item}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
}
