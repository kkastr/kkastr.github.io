import FeaturedItem from "./featured_item";
import sentiment_figure from "~/images/sentiment_percent_per_sub.png";
import stock_figure from "~/images/MSFT_pred.png";
import bdsim_figure from "~/images/bd_image.png";
import website_figure from "~/images/website_project_image.png";

const projects = [
  {
    name: "Sentiment Analysis",
    desc: `Extract insights from social media data and capture the impact of opinions on engagement. Collect data from the Reddit API, analyze comment sentiment based on keywords, and visualize trends over time.`,
    url: "https://github.com/kkastr/reddit-sentiment/",
    preview: sentiment_figure,
    tags: ["Python", "NLTK", "API", "Data Mining", "Visualization"],
    index: 0,
  },
  {
    name: "Stock Price Forecast",
    desc: `An implementation of LSTM (Long Short-Term Memory) networks to model the fluctuations of stock prices based on historical closing values.`,
    url: "https://github.com/kkastr/stock-price-predictions/",
    preview: stock_figure,
    tags: ["Python", "PyTorch", "LSTM Networks", "Deep Learning"],
    index: 1,
  },
  {
    name: "Brownian Dynamics Simulation",
    desc: `Simulate particle motion using CUDA for accelerated parallel processing. A practical application of GPU computing to simulations of physics systems.`,
    url: "https://github.com/kkastr/cuda-brownian-dynamics/",
    preview: bdsim_figure,
    tags: ["CUDA", "Stochastic Processes", "Physics", "Data Analysis"],
    index: 2,
  },
  {
    name: "kkastr.github.io",
    desc: `Personal portfolio website using GitHub Pages deployed with Github Actions CI/CD. Built using typescript, react, and tailwindcss, with a focus on responsive UX`,
    url: "https://github.com/kkastr/kkastr.github.io/",
    preview: website_figure,
    tags: ["Typescript", "React", "Remix", "Tailwindcss", "CI/CD"],
    index: 3,
  },
];

export default function ProjectSection() {
  return (
    <div className="flex flex-col sm:mx-4 max-sm:max-w-sm md:w-dvw md:max-w-[900px]">
      <h2 className="text-2xl text-center mb-4 lg:text-3xl drop-shadow-2xl border-b border-background-300">
        Featured Projects
      </h2>
      <ul className="group/list">
        {projects.map((args, index) => (
          <li className="mb-8" key={index}>
            <FeaturedItem {...args} />
          </li>
        ))}
      </ul>
    </div>
  );
}
