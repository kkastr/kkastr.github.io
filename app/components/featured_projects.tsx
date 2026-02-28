import FeaturedItem from "./featured_item";
import sentiment_figure from "~/images/sentiment_percent_per_sub.webp";
import stock_figure from "~/images/MSFT_pred.webp";
import bdsim_figure from "~/images/bd_image.webp";
import website_figure from "~/images/website_project_image.webp";
import synecho_figure from "~/images/synecho_portfolio_image.webp";
import alysides_figure from "~/images/alysides_portfolio_image.webp";

const projects = [
  {
    name: "Synecho",
    desc: "Built a SaaS app to measure LLM output variability across repeated prompts.",
    impact:
      "Enabled side-by-side model evaluation with parallel calls, websocket streaming, and judge-based summaries.",
    liveUrl: "https://synecho.app",
    sourcePrivate: true,
    preview: synecho_figure,
    previewWidth: 1914,
    previewHeight: 912,
    tags: ["LLM Evaluation", "FastAPI", "React", "WebSockets", "Docker"],
  },
  {
    name: "Alysides",
    desc: "Built a web app to sample near-equilibrated polymer conformations from a transformer trained on molecular dynamics trajectories.",
    impact:
      "Enabled on-demand generation with quick visual inspection and configuration statistics.",
    liveUrl: "https://alysides.kastritis.dev",
    sourcePrivate: true,
    preview: alysides_figure,
    previewWidth: 1872,
    previewHeight: 865,
    tags: ["PyTorch", "Transformers", "FastAPI", "React", "Scientific ML"],
  },
  {
    name: "Portfolio Website",
    desc: "Built a portfolio site with React Router and Tailwind, deployed on GitHub Pages.",
    impact: "Automated commit-to-production deploys with CI/CD.",
    liveUrl: "https://kastritis.dev",
    sourceUrl: "https://github.com/kkastr/kkastr.github.io/",
    preview: website_figure,
    previewWidth: 560,
    previewHeight: 360,
    tags: ["TypeScript", "React", "Tailwind", "CI/CD", "GitHub Pages"],
  },
  {
    name: "Social Media Sentiment Analysis",
    desc: "Built a Reddit sentiment pipeline for scraping, labeling, model training, and visualization.",
    impact:
      "Processed 25,000+ comments and reached 86% held-out accuracy.",
    sourceUrl: "https://github.com/kkastr/reddit-sentiment/",
    preview: sentiment_figure,
    previewWidth: 400,
    previewHeight: 300,
    tags: ["Python", "scikit-learn", "NLP", "Plotly", "Data Pipeline"],
  },
  {
    name: "Stock Price Forecast",
    desc: "Built an LSTM time-series model for short-horizon stock price forecasting.",
    impact:
      "Implemented end-to-end data preparation, training, and evaluation for sequence modeling.",
    sourceUrl: "https://github.com/kkastr/stock-price-predictions/",
    preview: stock_figure,
    previewWidth: 560,
    previewHeight: 240,
    tags: ["Python", "PyTorch", "LSTM", "Time Series"],
  },
  {
    name: "Brownian Dynamics Simulation",
    desc: "Built a CUDA toolkit for Brownian dynamics and stochastic particle simulations.",
    impact:
      "Accelerated simulation-heavy experiments with GPU-parallel kernels.",
    sourceUrl: "https://github.com/kkastr/cuda-brownian-dynamics/",
    preview: bdsim_figure,
    previewWidth: 1196,
    previewHeight: 670,
    tags: ["CUDA", "C++", "Simulation", "Physics", "Numerical Methods"],
  },
];

export default function ProjectSection() {
  return (
    <section className="flex w-full max-w-[900px] flex-col px-4">
      <div className="mb-6 border-b border-background-300/70 pb-3">
        <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-foreground/60">
          Selected Work
        </p>
        <h2 className="font-editorial mt-2 text-3xl/tight md:text-4xl/tight">
          Projects
        </h2>
        <p className="mt-2 text-sm text-foreground/70 md:text-base">
          Production-focused ML and data work, from research prototypes to
          deployed apps.
        </p>
      </div>
      <ul className="divide-y divide-background-300/65 border-y border-background-300/65">
        {projects.map((project, index) => (
          <li key={project.name} className="py-6">
            <FeaturedItem {...project} index={index} />
          </li>
        ))}
      </ul>
    </section>
  );
}
