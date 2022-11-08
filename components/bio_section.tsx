import NextLink from 'next/link'
import {
    Container, Box, Center, Grid, GridItem, Heading, Text, Image, Button, ButtonGroup
} from '@chakra-ui/react'


export default function BioSection() {
    const section_name = 'Bio'
    const description = `Konstantinos is a physicist turned data scientist with a passion for
                       learning and problem solving. He likes exploring any data he can get his hands on and using code to gain insight into real-life problems.`

    const resumepdf = './kastritis_resume.pdf'
    const githubLink = 'https://github.com/kkastr'
    const linkedinLink = 'https://www.linkedin.com/in/konstantinos-kastritis-269366232/'
    const email = 'dinokastritis@gmail.com'

    const imgSize = '256px'
    return (

        <Container maxW='4xl'>
            <Heading> {section_name} </Heading>

            <Box mt={6} display={{ md: 'flex' }} flexDirection={{ md: 'row-reverse' }}>
                <Image
                    flexShrink={0}
                    boxSize={imgSize}
                    rounded='md'
                    overflow='hidden'
                    objectFit='cover'
                    src='./images/profile.jpg'
                />
                <Box mt={2} mr={12}>
                    <Center boxShadow='dark-lg' rounded='md'>
                        <Text mx={5} my={5} fontSize={20}> {description} </Text>
                    </Center>
                    <Center mt={8} >
                        <ButtonGroup variant='outline' spacing={4}>

                            <NextLink href={resumepdf} passHref>
                                <Button fontFamily='Helvetica' fontWeight='semibold'> Resume </Button>
                            </NextLink>
                            <NextLink href={githubLink} passHref>
                                <Button fontFamily='Helvetica' fontWeight='semibold'> Github </Button>
                            </NextLink>
                            <NextLink href={linkedinLink} passHref>
                                <Button fontFamily='Helvetica' fontWeight='semibold'> LinkedIn </Button>
                            </NextLink>

                        </ButtonGroup>
                    </Center>

                </Box>

            </Box>
        </Container>

    )

}
