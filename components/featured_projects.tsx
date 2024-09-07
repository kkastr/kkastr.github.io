import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import plot from "../public/images/sentiment_percent_per_sub.png";
import plot2 from "../public/images/MSFT_pred.png";
import plot3 from "../public/images/bd_anim.gif";
export default function ProjectSection() {
  const section_name = "Featured Projects";
  const gscholarLink = "https://scholar.google.ca/citations?hl=en&user=lVNtC6cAAAAJ";

  return (
    <div className="flex flex-col justify-between mx-10 mt-5 mb-10 max-sm:max-w-sm max-lg:max-w-lg xl:max-w-8xl">
      <h2 className="text-2xl text-center md:text-3xl drop-shadow-2xl border-b">
        Featured Projects
      </h2>
      <div>
        <Carousel>
          <CarouselContent>
            <CarouselItem className="w-full lg:basis-1/3">
              <Card className="border-0">
                <CardHeader className="justify-center items-center">
                  <CardTitle className="text-xl md:text-2xl drop-shadow-lg">
                    Sentiment Analysis
                  </CardTitle>
                  <CardDescription className="justify-center items-center">
                    <Link href="https://github.com/kkastr/reddit-sentiment/" passHref>
                      <Button variant="link">
                        <p className="text-lg md:text-xl drop-shadow-lg text-red-500"> Github </p>
                      </Button>
                    </Link>
                  </CardDescription>
                </CardHeader>
                <CardContent className="md:p-0 flex flex-col items-center justify-center">
                  <div className="w-full">
                    <Image src={plot} alt="Profile Picture" className="rounded-md w-full h-full" />
                  </div>
                  <div className="w-full">
                    <div className="bg-zinc-700 rounded-md flex m-2">
                      <p className="text-balance text-md md:text-lg drop-shadow-lg m-6">
                        Scrape data from reddit using the reddit api and analyze the comment
                        sentiment. Obtain information such as the sentiment breakdown, average
                        sentiment per post, and more.
                      </p>
                    </div>
                  </div>
                </CardContent>
                <CardFooter></CardFooter>
              </Card>
            </CarouselItem>
            <CarouselItem className="lg:basis-1/3">
              <Card className="border-0">
                <CardHeader className="justify-center items-center">
                  <CardTitle className="text-xl md:text-2xl drop-shadow-lg">
                    Stock Price Forecast
                  </CardTitle>
                  <CardDescription className="justify-center items-center">
                    <Link href="https://github.com/kkastr/stock-price-predictions/" passHref>
                      <Button variant="link">
                        <p className="text-lg md:text-xl drop-shadow-lg text-red-500"> Github </p>
                      </Button>
                    </Link>
                  </CardDescription>
                </CardHeader>
                <CardContent className="md:p-0 flex flex-col items-center justify-center">
                  <div className="w-full">
                    <Image src={plot2} alt="Profile Picture" className="rounded-md w-full h-full" />
                  </div>
                  <div className="w-full">
                    <div className="bg-zinc-700 rounded-md flex m-2 ">
                      <p className="text-balance text-md md:text-lg drop-shadow-lg m-6">
                        Generate predictions for the closing value of securities by using Long Short
                        Term Memory (LSTM) neural networks to model the time series of the stock
                        price.
                      </p>
                    </div>
                  </div>
                </CardContent>
                <CardFooter></CardFooter>
              </Card>
            </CarouselItem>
            <CarouselItem className="lg:basis-1/3">
              <Card className="border-0">
                <CardHeader className="justify-center items-center">
                  <CardTitle className="text-xl md:text-2xl drop-shadow-lg">
                    Brownian Dynamics
                  </CardTitle>
                  <CardDescription className="justify-center items-center">
                    <Link href="https://github.com/kkastr/cuda-brownian-dynamics/" passHref>
                      <Button variant="link">
                        <p className="text-lg md:text-xl drop-shadow-lg text-red-500"> Github </p>
                      </Button>
                    </Link>
                  </CardDescription>
                </CardHeader>
                <CardContent className="md:p-0 flex flex-col items-center justify-center">
                  <div className="w-full">
                    <Image src={plot3} alt="Profile Picture" className="rounded-md w-full h-full" />
                  </div>
                  <div className="w-full">
                    <div className="bg-zinc-700 rounded-md flex m-2">
                      <p className="text-balance text-md md:text-lg drop-shadow-lg m-6">
                        Brownian dynamics written for gpus, making it easy to scale to tens of
                        thousands of particles for faster results and better statistics on whatever
                        physical system you wish to investigate.
                      </p>
                    </div>
                  </div>
                </CardContent>
                <CardFooter></CardFooter>
              </Card>
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </div>
  );
}
