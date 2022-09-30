import { Container, Heading, Text, Button } from '@chakra-ui/react'
import NextLink from 'next/link'


export default function DashboardBar() {
    return (
        <Container maxW='5xl' mt={10} mb={10} display='flex' centerContent>
            <NextLink href='/stock-predictions' passHref>
                <Button fontFamily='Helvetica' fontWeight='semibold'>
                Stock Prediction Dashboard
                </Button>
            </NextLink>
        </Container>
    )
}
