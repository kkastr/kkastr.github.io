import NextLink from 'next/link'
import { ArrowBackIcon, ExternalLinkIcon } from '@chakra-ui/icons'
import {
  Container, SimpleGrid, Button, Heading, Image, Box, Text, Link, useDisclosure, Badge,
  Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton,
} from '@chakra-ui/react'


function ShowPreviewImages({previews}: {previews: string[]}) {
    return (
        <>
        {previews.map((srcpath: string, index: number) =>
                <Image
                mt={2}
                key={index}
                src={srcpath}
                rounded='lg'
                display='flex'
                overflow='hidden'
                />
            )}
        </>
    )
}

function GridItem(
    {thumb, title, shortDescription, longDescription, contentLink, contentType, previewImages}:
    {thumb: string, title: string, shortDescription: string, longDescription: string
     contentLink: string, contentType: string, previewImages: string[]}
     ) {

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

            <Heading mt={2} fontSize='22px' textAlign="center">{title}</Heading>
            <Text mt={2} ml={2} textAlign="left">{shortDescription}</Text>

            <Modal size='2xl' isOpen={isOpen} onClose={onClose} isCentered allowPinchZoom>
            <ModalOverlay />
            <ModalContent>
            <ModalHeader>{title}</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
                <Box display='flex' alignItems='baseline'>
                <Badge> {contentType} </Badge>
                <NextLink href={contentLink} passHref>
                <Link ml={2} verticalAlign={1}>{contentLink}<ExternalLinkIcon mx='2px' /></Link>
                </NextLink>
                </Box>
                <Text mt={2} mb={2} textAlign="left">{longDescription}</Text>
                <ShowPreviewImages previews={previewImages}/>

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


export default function ProjectSection() {

    const section_name='Projects'

    return (
        <Container>
            <Heading as="h3" variant="section-title"> {section_name} </Heading>
            <SimpleGrid mt={6} columns={[2, 2]} spacing={4}>

                <GridItem
                    thumb='./images/default_profile.jpg'
                    title='Stock predictions'
                    shortDescription='Using LSTMs to model the closing values of securities.'
                    longDescription={`Using LSTMs to model the closing values of securities.`}
                    contentLink='https://github.com/kkastr/stock-price-predictions/'
                    contentType='GitHub'
                    previewImages={['./images/NFLX_pred.png', './images/GOOG_pred.png']}
                />

                <GridItem
                    thumb='./images/default_profile.jpg'
                    title='Sentiment Analysis'
                    shortDescription='NLP sentiment analysis on reddit comments.'
                    longDescription={`NLP sentiment analysis on reddit comments.`}
                    contentLink='https://github.com/kkastr/reddit-sentiment/'
                    contentType='GitHub'
                    previewImages={['./images/AMZN_pred.png']}

                />

                <GridItem
                    thumb='./images/default_profile.jpg'
                    title='Brownian dynamics'
                    shortDescription='Brownian dynamics simulations written in CUDA for GPUs.'
                    longDescription={`Brownian dynamics simulations written in CUDA for GPUs.`}
                    contentLink='https://github.com/kkastr/cuda-brownian-dynamics/'
                    contentType='GitHub'
                    previewImages={['./images/msd.png']}
                />

                <GridItem
                    thumb='./images/default_profile.jpg'
                    title='Research'
                    shortDescription='Research publications.'
                    longDescription={`Research publications.`}
                    contentLink='https://scholar.google.ca/citations?hl=en&user=lVNtC6cAAAAJ'
                    contentType='Google Scholar'
                    previewImages={[null]}
                />

            </SimpleGrid>
        </Container>
    )
}
