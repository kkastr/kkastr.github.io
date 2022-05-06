import {
  Container,
  Heading,
  Text,
} from '@chakra-ui/react'

export default function Bio() {

    return (
        <Container>
            <Heading as="h3" variant="section-title">
                Bio
            </Heading>

            <Text mt={4}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
            </Text>

        </Container>
    )

}
