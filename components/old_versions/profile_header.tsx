import { Container, Heading, Text} from '@chakra-ui/react'


export default function ProfileHeader() {
    const name = 'Konstantinos Kastritis'
    const job_desc = 'Computational Physicist | Data Scientist'
    return (
        <Container maxW='5xl' mt={10} mb={10} display='flex' centerContent>
            <Heading fontSize={{base: '3xl', md:'5xl'}}>{name}</Heading>
            <Text fontSize={{base: 'lg', md:'xl'}}> {job_desc} </Text>
        </Container>
    )
}
