import { Link } from "@remix-run/react";
import { Button } from "~/components/ui/button";
import FeaturedItem from "./featured_item";
import sentiment_figure from "~/images/sentiment_percent_per_sub.png";
import stock_figure from "~/images/MSFT_pred.png";
import bdsim_figure from "~/images/bd_anim.gif";

const projects = [
  {
    name: "Sentiment Analysis",
    desc: `Scrape data from reddit using the reddit api and analyze
    the comment sentiment. Obtain information such as the sentiment breakdown, average sentiment per post, and more.`,
    url: "https://github.com/kkastr/reddit-sentiment/",
    preview: sentiment_figure,
    tags: ["python", "machine-learning", "pandas", "sklearn", "pytorch"],
  },
  {
    name: "Stock Price Forecast",
    desc: `Generate predictions for the closing value of securities by using Long Short Term Memory (LSTM) neural networks to model the time series of the stock price.`,
    url: "https://github.com/kkastr/stock-price-predictions/",
    preview: stock_figure,
    tags: ["python", "machine-learning", "pandas", "sklearn", "pytorch"],
  },
  {
    name: "Brownian Dynamics Simulation",
    desc: `Brownian dynamics written for gpus, making it easy to
  scale to tens of thousands of particles for faster results and better statistics on whatever physical system you wish to investigate.`,
    url: "https://github.com/kkastr/cuda-brownian-dynamics/",
    preview: bdsim_figure,
    tags: ["python", "machine-learning", "pandas", "sklearn", "pytorch"],
  },
];

// TODO: inf scroll? replicate the slide pagination? what to do.
export default function ProjectSection() {
  return (
    <div className="flex flex-col mx-10 mt-5 mb-10 max-sm:max-w-sm md:w-dvw md:max-w-4xl">
      <h2 className="text-2xl text-center md:text-3xl drop-shadow-2xl border-b border-background-300 mb-8">
        Featured Work
      </h2>
      <ul className="group/list">
        {projects.map((args, index) => (
          <li className="mb-12" key={index}>
            <FeaturedItem {...args} />
          </li>
        ))}
      </ul>
    </div>
  );
}
