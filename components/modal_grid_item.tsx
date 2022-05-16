import NextLink from 'next/link'
import { ArrowBackIcon, ExternalLinkIcon } from '@chakra-ui/icons'
import {
  Button, Heading, Image, Box, Text, Link, useDisclosure, Badge,
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

export default function ModalGridItem(
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