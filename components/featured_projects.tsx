import NextLink from "next/link";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Container, Heading, Link } from "@chakra-ui/react";

import FeaturedItem from "./featured_item";

export default function ProjectSection() {
  const section_name = "Featured Projects";
  const gscholarLink = "https://scholar.google.ca/citations?hl=en&user=lVNtC6cAAAAJ";

  return (
    <Container mt={10} maxW="4xl">
      <Heading mb={10}> {section_name} </Heading>

      <FeaturedItem
        title="Sentiment Analysis"
        longDescription={`Scrape data from reddit using the reddit api and analyze the comment sentiment. Obtain information such as the sentiment breakdown, average sentiment per post, and more.`}
        contentLink="https://github.com/kkastr/reddit-sentiment/"
        previewImage={"./images/sentiment_percent_per_sub.png"}
        imageLocationLeft={true}
        imgHeight={346}
        imgAspect={1.32075471698}
      />

      <FeaturedItem
        title="Stock predictions"
        longDescription={`Generate predictions for the closing value of securities by using Long Short Term Memory (LSTM) neural networks to model the time series of the stock price.`}
        contentLink="https://github.com/kkastr/stock-price-predictions/"
        previewImage={"./images/MSFT_pred.png"}
        imageLocationLeft={false}
        imgHeight={242}
        imgAspect={2.32365145228}
      />

      <FeaturedItem
        title="Brownian dynamics"
        longDescription={`Brownian dynamics written for gpus, making it easy to scale to tens of thousands of particles for faster results and better statistics on whatever physical system you wish to investigate.`}
        contentLink="https://github.com/kkastr/cuda-brownian-dynamics/"
        previewImage={"./images/bd_anim.gif"}
        imageLocationLeft={true}
        imgHeight={346}
        imgAspect={1}
      />
      <FeaturedItem
        title="Command Line Music Recommender"
        longDescription={`Music recommendation program to find new songs. Interfaces with the Spotify dev API, and gives recommendations based on a typical cosine
                distance algorithm.`}
        contentLink="https://github.com/kkastr/music-recommendation"
        previewImage={"./images/music_recommender_output.png"}
        imageLocationLeft={false}
        imgHeight={300}
        imgAspect={1.2}
      />

      <Container display={{ md: "flex" }} centerContent>
        <Heading> Research </Heading>
        <NextLink href={gscholarLink} passHref>
          <Link color="portfolio.pink">
            Google Scholar
            <ExternalLinkIcon mx="2px" />{" "}
          </Link>
        </NextLink>
      </Container>

      {/* <FeaturedItem
                title='Research'
                longDescription={`Journal publications during my time in the de Haan Lab, including my MSc thesis.`}
                contentLink='https://scholar.google.ca/citations?hl=en&user=lVNtC6cAAAAJ'
                previewImage={null}
                imageLocationLeft={false}
            /> */}
    </Container>
  );
}
