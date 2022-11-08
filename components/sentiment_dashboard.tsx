
import { Container, Box, SimpleGrid, Image, Text } from '@chakra-ui/react'
import React from 'react'

export default function SentimentDashboard() {

    return(

        <Container maxW='8xl'>
            <SimpleGrid w='100%' columns={1} spacing='1%'>
                <Image src='./images/sentiment_dashboard.png'  alt='dashboard' />
                <Image src='./images/metrics_display.png' alt='metrics' />
            </SimpleGrid>
        </Container>
    )
}
