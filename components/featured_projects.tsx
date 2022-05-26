import NextLink from 'next/link'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Container, Heading, Link,} from '@chakra-ui/react'

import FeaturedItem from './featured_item'

export default function ProjectSection() {

    const section_name='Featured Projects'
    const gscholarLink='https://scholar.google.ca/citations?hl=en&user=lVNtC6cAAAAJ'

    return (
        <Container mt={10} maxW='4xl'>
            <Heading mb={10}> {section_name} </Heading>

            <FeaturedItem
                title='Stock predictions'
                longDescription={`Generate predictions for the closing value of securities by using Long Short Term Memory (LSTM) neural networks to model the time series of the stock price.`}
                contentLink='https://github.com/kkastr/stock-price-predictions/'
                previewImage={'./images/MSFT_pred.png'}
                imageLocationLeft={true}
                imgHeight={242}
                imgAspect = {2.32365145228}
            />


            <FeaturedItem
                title='Sentiment Analysis'
                longDescription={`Scrape data from reddit using the reddit api and conduct sentiment analysis on the comments. Obtain information such as the average sentiment per post, the best time of day to post to maximize score, and more.`}
                contentLink='https://github.com/kkastr/reddit-sentiment/'
                previewImage={'./images/sentiment_percent_per_sub.png'}
                imageLocationLeft={false}
                imgHeight={346}
                imgAspect= {1.32075471698}
            />


            <FeaturedItem
                title='Brownian dynamics'
                longDescription={`Brownian dynamics written for gpus, making it easy to scale to tens of thousands of particles for faster results and better statistics on whatever physical system you wish to investigate.`}
                contentLink='https://github.com/kkastr/cuda-brownian-dynamics/'
                previewImage={'./images/bd_anim.gif'}
                imageLocationLeft={true}
                imgHeight={346}
                imgAspect= {1}
            />


            <Container display={{md: 'flex'}} centerContent>
                <Heading> Research </Heading>
                <NextLink href={gscholarLink }passHref>
                <Link>Google Scholar<ExternalLinkIcon mx='2px'/> </Link>
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
    )
}
