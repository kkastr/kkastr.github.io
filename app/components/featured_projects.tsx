import FeaturedItem from "./featured_item";
import sentiment_figure from "~/images/sentiment_percent_per_sub.png";
import stock_figure from "~/images/MSFT_pred.png";
import bdsim_figure from "~/images/bd_anim.gif";
import website_figure from "~/images/website_project_image.png";

const projects = [
  {
    name: "Sentiment Analysis",
    desc: `Use sentiment analysis models to extract insights from social media data. Visualize the impact of opinions on engagement. The repository includes data collection from the Reddit API, preprocessing, sentiment classification, and visualization of trends over time.`,
    url: "https://github.com/kkastr/reddit-sentiment/",
    preview: sentiment_figure,
    tags: ["Python", "NLTK", "API", "Data Mining", "Visualization"],
    index: 0,
  },
  {
    name: "Stock Price Forecast",
    desc: `An implementation of LSTM (Long Short-Term Memory) networks to guess potential future stock prices based on historical closing values. The repository includes data preprocessing steps, model training, and predictions.`,
    url: "https://github.com/kkastr/stock-price-predictions/",
    preview: stock_figure,
    tags: ["Python", "PyTorch", "LSTM Networks", "Deep Learning"],
    index: 1,
  },
  {
    name: "Brownian Dynamics Simulation",
    desc: `Simulate particle motion using CUDA for accelerated parallel processing. A practical application of GPU computing to physics-based simulations, demonstrating both computational efficiency and accuracy.`,
    url: "https://github.com/kkastr/cuda-brownian-dynamics/",
    preview: bdsim_figure,
    tags: ["CUDA", "Stochastic Processes", "Physics", "Data Analysis"],
    index: 2,
  },
  {
    name: "kkastr.github.io",
    desc: `Personal portfolio website using GitHub Pages deployed through Github Actions with CI/CD. The website is designed to showcase various projects and skills, acting as a digital portfolio. Aiming for a responsive user experience the site is built using typescript, react, and tailwindcss.`,
    url: "https://github.com/kkastr/kkastr.github.io/",
    preview: website_figure,
    tags: ["Typescript", "React", "Remix", "Tailwindcss", "CI/CD"],
    index: 3,
  },
];

export default function ProjectSection() {
  return (
    <div className="flex flex-col mx-10 mt-5 mb-10 max-sm:max-w-sm md:w-dvw md:max-w-[900px]">
      <h2 className="text-2xl text-center md:text-3xl drop-shadow-2xl border-b border-background-300 mb-8">
        Featured Projects
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
