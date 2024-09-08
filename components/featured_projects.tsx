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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import plot from "../public/images/sentiment_percent_per_sub.png";
import plot2 from "../public/images/MSFT_pred.png";
import plot3 from "../public/images/bd_anim.gif";
export default function ProjectSection() {
  const section_name = "Featured Projects";
  const gscholarLink = "https://scholar.google.ca/citations?hl=en&user=lVNtC6cAAAAJ";

  return (
    <div className="flex flex-col justify-between mx-10 mt-5 mb-10 max-sm:max-w-sm max-lg:max-w-lg xl:max-w-7xl">
      <h2 className="text-2xl text-center md:text-3xl drop-shadow-2xl border-b mb-3">
        Featured Projects
      </h2>
      <div>
        <Tabs defaultValue="tab0" className="max-w-4xl flex flex-col">
          <TabsList>
            <TabsTrigger value="tab0">Sentiment Analysis</TabsTrigger>
            <TabsTrigger value="tab1">Stock Price Forecast</TabsTrigger>
            <TabsTrigger value="tab2">Brownian Dynamics</TabsTrigger>
          </TabsList>
          <TabsContent value="tab0">
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
            </Card>
          </TabsContent>
          <TabsContent value="tab1">
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
          </TabsContent>
          <TabsContent value="tab2">
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
              <CardContent>
                <div className="min-w-[900px]">
                  <div className="bg-slate-700 rounded-md min-w-[700px] max-h-60 flex flex-row items-center">
                    <Image
                      src={plot3}
                      alt="Profile Picture"
                      className="overflow-hidden h-72 w-72 rounded-md shadow-2xl shadow-grey-900 shad"
                    />

                    <div className="pl-10 w-2/3">
                      <CardHeader className="p-3 justify-center items-center">
                        <CardTitle className="text-xl md:text-2xl drop-shadow-lg">
                          Brownian Dynamics
                          <span className="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-pink-500 relative inline-block">
                            <span className="relative text-white">annoyed</span>
                          </span>
                        </CardTitle>
                        <CardDescription className="justify-center items-center">
                          <Link href="https://github.com/kkastr/cuda-brownian-dynamics/" passHref>
                            <Button variant="link">
                              <p className="text-lg md:text-xl drop-shadow-lg text-red-500">
                                {" "}
                                Github{" "}
                              </p>
                            </Button>
                          </Link>
                        </CardDescription>
                      </CardHeader>
                      <p className="text-balance text-md md:text-lg drop-shadow-lg m-6">
                        Brownian dynamics written for gpus, making it easy to scale to tens of
                        thousands of particles for faster results and better statistics on whatever
                        physical system you wish to investigate.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter></CardFooter>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
