import { Container, Button, ButtonGroup } from '@chakra-ui/react'
import NextLink from 'next/link'


export default function DashboardBar() {
    return (
        <Container maxW='5xl' mt={10} mb={10} display='flex' centerContent>
            <ButtonGroup spacing={4} variant='outline'>
            <NextLink href='/reddit-sentiment' passHref>
                <Button fontFamily='Helvetica' fontWeight='semibold'>
                Sentiment Analysis Dashboard
                </Button>
            </NextLink>
            <NextLink href='/stock-predictions' passHref>
                <Button fontFamily='Helvetica' fontWeight='semibold'>
                Stock Prediction Dashboard
                </Button>
            </NextLink>

            {/* <NextLink href='/eidosmd' passHref>
                <Button fontFamily='Helvetica' fontWeight='semibold'>
                EidosMD
                </Button>
            </NextLink> */}
            </ButtonGroup>
        </Container>
    )
}
