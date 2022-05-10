import { Container, Heading, Image } from '@chakra-ui/react'



export default function ProfileHeader() {
    const name = 'Konstantinos Kastritis'
    return (
        <Container mt={10} display='flex' centerContent>
            <Image
                boxSize='128px'
                rounded='lg'
                overflow='hidden'
                objectFit='cover'
                src='./images/profile.jpg'
            />
            <Heading mt={2} as='h3' size='lg'>{name}</Heading>
        </Container>
    )
}
