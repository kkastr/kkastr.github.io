import { Container, Heading, Text, Button, Image, Box } from '@chakra-ui/react'
import NextLink from 'next/link'

export default function PageHeader() {
    const name = 'Konstantinos Kastritis'
    const job_desc = 'Computational Physicist | Data Scientist'
    const imgSize = '64px'
    return (
        <Container maxW='5xl' mt={10} mb={10}  display='flex' centerContent>
            <Box display={{ md: 'flex' }} flexDirection={{ md: 'row-reverse' }}>
            <Box>
                <Heading fontSize={{base: 'xl', md:'3xl'}}>{name}</Heading>
                <Text fontSize={{base: 'md', md:'md'}} textAlign='center'> {job_desc} </Text>
            </Box>
            <Image
                    flexShrink={0}
                    boxSize={imgSize}
                    rounded='md'
                    overflow='hidden'
                    objectFit='cover'
                    src='./images/profile.jpg'
                />
            </Box>
            <NextLink href='/' passHref>
                <Button mt={10} fontFamily='Helvetica' fontWeight='semibold' variant='outline'> Back to Home </Button>
            </NextLink>
        </Container>
    )
}
