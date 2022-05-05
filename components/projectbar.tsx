import NextLink from 'next/link'
import {
  Container,
  SimpleGrid,
  Button,
  Heading,
  Image,
  Box,
  Text,
} from '@chakra-ui/react'


function GridItem({title, description}){
    return (
        <Box bg='teal' boxShadow='md' rounded='md'>
            <Button w='100%'colorScheme='blue'></Button>
            <Heading mt={2} fontSize='16px' textAlign="center">{title}</Heading>
            <Text textAlign="left">{description}</Text>
        </Box>
    )
}


export default function ProjectBar() {
    return (
        <Container>
            <Heading as="h3" variant="section-title">
              Projects
            </Heading>
            <SimpleGrid mt={6} columns={[2, 2]} spacing={4}>

                <GridItem title='Stock price prediction' description='placeholder description'/>

                <GridItem title='Reddit Sentiment Analysis' description='placeholder description'/>

                <GridItem title='Cuda brownian dynamics' description='placeholder description'/>

                <GridItem title='Research link?' description='placeholder description'/>

            </SimpleGrid>
        </Container>
    )
}
