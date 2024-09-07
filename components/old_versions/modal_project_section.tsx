import { Container, SimpleGrid, Heading } from '@chakra-ui/react'
import ModalGridItem from './modal_grid_item'


export default function ProjectSection() {

    const section_name='Featured Projects'

    return (
        <Container>
            <Heading as="h3" variant="section-title"> {section_name} </Heading>
            <SimpleGrid mt={6} columns={[2, 2]} spacing={4}>

                <ModalGridItem
                    thumb='./images/stock_thumb.png'
                    title='Stock predictions'
                    shortDescription='Modelling the closing values of securities with LSTMs.'
                    longDescription={`Generate predictions for the closing value of securities by using Long Short Term Memory (LSTM) neural networks to model the time series of the stock price.`}
                    contentLink='https://github.com/kkastr/stock-price-predictions/'
                    contentType='GitHub'
                    previewImages={['./images/MSFT_pred.png', './images/AMZN_pred.png']}
                />

                <ModalGridItem
                    thumb='./images/sentiment_thumb.png'
                    title='Sentiment Analysis'
                    shortDescription='NLP sentiment analysis on reddit comments.'
                    longDescription={`Scrape data from reddit using the reddit api, and conduct sentiment analysis on the comments. In addition, obtain information such as the best time of day to post to maximize score, how the sentiment of the post affects the score etc.`}
                    contentLink='https://github.com/kkastr/reddit-sentiment/'
                    contentType='GitHub'
                    previewImages={['./images/sentiment_percent_per_sub.png']}

                />

                <ModalGridItem
                    thumb='./images/bd_thumb3.png'
                    title='Brownian dynamics'
                    shortDescription='Brownian dynamics simulations written in CUDA for GPUs.'
                    longDescription={`Brownian dynamics written entirely on the gpu so that it is easy to scale to tens of thousands of particles for faster results and better statistics on whatever physical system you wish to investigate.`}
                    contentLink='https://github.com/kkastr/cuda-brownian-dynamics/'
                    contentType='GitHub'
                    previewImages={['./images/bd_vis.gif']}
                />

                <ModalGridItem
                    thumb='./images/research_thumb.png'
                    title='Research'
                    shortDescription='Research publications.'
                    longDescription={`Journal publications during my time in the de Haan Lab, including my MSc thesis.`}
                    contentLink='https://scholar.google.ca/citations?hl=en&user=lVNtC6cAAAAJ'
                    contentType='Google Scholar'
                    previewImages={[null]}
                />

            </SimpleGrid>
        </Container>
    )
}
