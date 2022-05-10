import { Container, Heading, Text, } from '@chakra-ui/react'

export default function BioSection() {
    const section_name='Bio'
    const description=`Konstantinos is a physicist-turned-programmer with a passion for
                       learning and problem solving. He likes exploring any data he can get his hands on and using code to gain insight into real-life problems.`
    return (
        <Container>

            <Heading as="h3" variant="section-title"> {section_name} </Heading>

            <Text mt={4}> {description} </Text>

        </Container>
    )

}
