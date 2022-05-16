import NextLink from 'next/link'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Grid, GridItem, Heading, Image, Text, Box, Center, Link,} from '@chakra-ui/react'


export default function FeaturedItem(
    {title, longDescription, contentLink, imageLocationLeft, previewImage, imgHeight, imgAspect}:
    {title: string, longDescription: string, contentLink: string, imageLocationLeft: boolean, previewImage: string, imgHeight: number, imgAspect: number} ) {

    // const imageColNum = imageLocationLeft ? 1 : 3
    // const textColNum = imageLocationLeft ? 4: 1

    const justifySwitch = imageLocationLeft ? 'right': 'left'
    const boxMarginLeft = imageLocationLeft ? 2: 0
    const boxMarginRight = imageLocationLeft ? 0: 2

    const growthDirection = imageLocationLeft ? 'row-reverse': 'row'

    const pxHeight = imgHeight.toString().concat('px')
    const pxWidth =  (imgAspect * imgHeight).toString().concat('px')

    return (


        <Box mt={6} mb={20} display={{md: 'flex'}}  flexDirection={{md: growthDirection}}>

            <Box mt={2} mr={boxMarginRight} ml={boxMarginLeft}>

                <Heading mb={2} fontSize={28} textAlign={{md: 'center'}}> {title}</Heading>
                <Center  bg='#2d333b' boxShadow='base' rounded='md'>
                    <Text mx={5} my={5} fontSize={17} textAlign={{md: justifySwitch}}> {longDescription} </Text>
                </Center>
                <Center >
                    <NextLink href={contentLink} passHref>
                    <Link >Github Repository<ExternalLinkIcon mx={0.5}/> </Link>
                    </NextLink>
                </Center>

            </Box>

            <Image
                height={pxHeight}
                width={pxWidth}
                flexShrink={0}
                overflow='hidden'
                objectFit='contain'
                rounded='md'
                src={previewImage}
            />

        </Box>




        // <Grid
        // height={gridHeight}
        // gap={1}
        // mt={10}
        // mb={20}
        // templateRows='repeat(3, 1fr)'
        // templateColumns='repeat(5, 1fr)'
        // >

        //     <GridItem colStart={imageColNum} rowSpan={2} colSpan={3}  margin='auto'>
        //         <Image
        //         src={previewImage}

        //         rounded='md'
        //         display='flex'
        //         overflow='hidden'
        //         />

        //     </GridItem>

        //     <GridItem rowStart={1} colStart={textColNum} colSpan={2} margin='auto'>
        //         <Heading fontSize={32} textAlign={justifySwitch}> {title}</Heading>
        //     </GridItem>

        //     <GridItem
        //     zIndex={2} bg='#2d333b'
        //     rowStart={2} colStart={textColNum} colSpan={2}
        //     boxShadow='base'
        //     rounded='md'
        //     margin='auto'
        //     >
        //         <Text mx={5} my={5} fontSize={18} textAlign={justifySwitch}>{longDescription}</Text>
        //     </GridItem>

        //     <GridItem margin='auto' colStart={textColNum} colSpan={2} >

        //         <NextLink href={contentLink} passHref>
        //         <Link>{contentLink}<ExternalLinkIcon mx={0.5}/> </Link>
        //         </NextLink>
        //     </GridItem>

        // </Grid>

    )

}
