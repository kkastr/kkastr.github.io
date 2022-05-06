import NextLink from 'next/link'
import { ArrowBackIcon, ExternalLinkIcon } from '@chakra-ui/icons'
import {
  Container,
  SimpleGrid,
  Button,
  Heading,
  Image,
  Box,
  Text,
  Link,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Badge,
} from '@chakra-ui/react'



function GridItem({thumb, title, description, githublink}){

    const { isOpen, onOpen, onClose } = useDisclosure()

    return (
        <Box
        boxShadow='md'
        rounded='lg'
        borderWidth='1px'
        overflow='hidden'
        _hover={{transform: 'scale(1.1)'}}
        onClick={onOpen}
        >

            <Image
            src={thumb}
            width='256px'
            height='128px'
            roundedTop='lg'
            display='flex'
            overflow='hidden'
            />

            <Heading mt={2} fontSize='16px' textAlign="center">{title}</Heading>
            <Text textAlign="left">{description}</Text>

            <Modal size='2xl' isOpen={isOpen} onClose={onClose} isCentered allowPinchZoom>
            <ModalOverlay />
            <ModalContent>
            <ModalHeader>{title}</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
                <Box display='flex' alignItems='baseline'>
                <Badge> Github </Badge>
                <NextLink href={githublink} passHref>
                <Link ml='2' verticalAlign={1}>{githublink}<ExternalLinkIcon mx='2px' /></Link>
                </NextLink>
                </Box>
                <Image
                mt={2}
                src='./images/msd.png'
                rounded='lg'
                display='flex'
                overflow='hidden'
                />
            </ModalBody>

            <ModalFooter justifyContent='center'>
                <Button w='20%' colorScheme='teal' mr={3} onClick={onClose}>
                <ArrowBackIcon/>
                </Button>
            </ModalFooter>
            </ModalContent>
            </Modal>
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

                <GridItem
                    thumb='./images/default_profile.jpg'
                    title='Stock price prediction'
                    description='placeholder description'
                    githublink='https://github.com/kkastr/stock-price-predictions/'
                />

                <GridItem
                    thumb='./images/default_profile.jpg'
                    title='Reddit Sentiment Analysis'
                    description='placeholder description'
                    githublink='https://github.com/kkastr/reddit-sentiment-analysis/'
                />

                <GridItem
                    thumb='./images/default_profile.jpg'
                    title='Cuda brownian dynamics'
                    description='placeholder description'
                    githublink='https://github.com/kkastr/cuda-brownian-dynamics/'
                />

                <GridItem
                    thumb='./images/default_profile.jpg'
                    title='Research link?'
                    description='placeholder description'
                    githublink='https://scholar.google.ca/citations?hl=en&user=lVNtC6cAAAAJ'
                />

            </SimpleGrid>
        </Container>
    )
}
