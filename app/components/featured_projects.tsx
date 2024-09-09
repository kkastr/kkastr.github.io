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
import { ScrollArea } from "~/components/ui/scroll-area";
import sentiment_figure from "~/images/sentiment_percent_per_sub.png";
import stock_figure from "~/images/MSFT_pred.png";
import bdsim_figure from "~/images/bd_anim.gif";

const projects = {
  0: {
    name: "Sentiment Analysis",
    description: `Scrape data from reddit using the reddit api and analyze
    the comment sentiment. Obtain information such as the sentiment breakdown, average sentiment per post, and more.`,
    url: "https://github.com/kkastr/reddit-sentiment/",
    figure: sentiment_figure,
  },
  1: {
    name: "Stock Price Forecast",
    description: `Generate predictions for the closing value of securities by using Long Short Term Memory (LSTM) neural networks to model the time series of the stock price.`,
    url: "https://github.com/kkastr/stock-price-predictions/",
    figure: stock_figure,
  },
  2: {
    name: "Brownian Dynamics Simulation",
    description: `Brownian dynamics written for gpus, making it easy to
  scale to tens of thousands of particles for faster results and better statistics on whatever physical system you wish to investigate.`,
    url: "https://github.com/kkastr/cuda-brownian-dynamics/",
    figure: bdsim_figure,
  },
};

export default function ProjectSection() {
  return (
    <div className="flex flex-col mx-10 mt-5 mb-10 max-sm:max-w-sm md:w-dvw md:max-w-4xl">
      <h2 className="text-2xl text-center md:text-3xl drop-shadow-2xl border-b border-background-300 mb-3">
        Featured Work
      </h2>
      <ScrollArea>
        <Card className="min-w-full h-full border-0">
          <div className="w-[45%] pl-6  float-left">
            <img
              src={bdsim_figure}
              alt="BD sim"
              className="overflow-visible h-80 w-80 rounded-md shadow shadow-black"
            />
          </div>
          <CardContent className="h-80 w-full">
            <div className="h-full bg-background-200 rounded-md shadow shadow-white/10">
              <div className="flex flex-col w-[50%] h-full">
                <CardHeader className="w-full mt-6 p-0 justify-center items-center">
                  <CardTitle className="text-xl md:text-2xl">
                    <div className="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-indigo-500 relative inline-block">
                      <span className="relative">Brownian Dynamics</span>
                    </div>
                  </CardTitle>
                  <CardDescription className="justify-center">
                    <Link to="https://github.com/kkastr/cuda-brownian-dynamics/">
                      <Button variant="link" className="text-lg md:text-xl">
                        Github
                      </Button>
                    </Link>
                  </CardDescription>
                </CardHeader>
                <div className="w-full mt-6 flex justify-center items-center">
                  <div className="w-full text-pretty text-md tracking-tight md:text-lg drop-shadow-lg">
                    Brownian dynamics written for gpus, making it easy to scale
                    to tens of thousands of particles for faster results and
                    better statistics on whatever physical system you wish to
                    investigate.
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </ScrollArea>
    </div>
  );
}
