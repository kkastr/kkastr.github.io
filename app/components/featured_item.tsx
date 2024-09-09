import { Link } from "@remix-run/react";
import { Button } from "~/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";

interface FeaturedItemProps {
  name: string;
  desc: string;
  url: string;
  preview: string;
}
export default function FeaturedItem({
  name,
  desc,
  url,
  preview,
}: FeaturedItemProps) {
  return (
    <Card className="border-0">
      <CardHeader className="justify-center items-center">
        <CardTitle className="text-xl md:text-2xl drop-shadow-lg">
          {name}
        </CardTitle>
        <CardDescription className="justify-center items-center">
          <Link to={url}>
            <Button variant="link">
              <p className="text-lg md:text-xl drop-shadow-lg text-red-500">
                Github
              </p>
            </Button>
          </Link>
        </CardDescription>
      </CardHeader>
      <CardContent className="md:p-0 flex flex-col items-center justify-center">
        <div className="w-full">
          <img
            src={preview}
            alt="Featured Figure"
            className="rounded-md w-full h-full"
          />
        </div>
        <div className="w-full">
          <div className="bg-zinc-700 rounded-md flex m-2">
            <p className="text-balance text-md md:text-lg drop-shadow-lg m-6">
              {desc}
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
