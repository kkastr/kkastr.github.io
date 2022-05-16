import { Container, Heading, Image } from '@chakra-ui/react'



export default function ProfileHeader() {
    const name = 'Konstantinos Kastritis'
    return (
        <Container maxW='5xl' mt={112} mb={28} display='flex' centerContent>
            {/* <Image
                boxSize='256px'
                rounded='lg'
                overflow='hidden'
                objectFit='cover'
                src='./images/profile.jpg'
            /> */}
            <Heading fontSize={{base: '3xl', md:'5xl'}}>{name}</Heading>
        </Container>
    )
}
