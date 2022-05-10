import NextLink from 'next/link'
import { Container, SimpleGrid, IconButton,} from '@chakra-ui/react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin} from "@fortawesome/free-brands-svg-icons";

function BarItem(
    {contentLink, contentLabel, contentIcon}:
    {contentLink: string, contentLabel: string, contentIcon: JSX.Element}
    ) {

    return (
        <NextLink href={contentLink} passHref>
        <IconButton
            variant="link"
            aria-label={contentLabel}
            icon={contentIcon}
            boxSize={12}
            _hover={{transform: 'scale(1.3)'}}
        />
        </NextLink>
    )
}

export default function SocialBar() {
    return (
        <Container mt={2} display='flex' centerContent >
        <SimpleGrid w={100} columns={2} spacing={4}>

            <BarItem
                contentLink='https://github.com/kkastr'
                contentLabel='Github'
                contentIcon={<FontAwesomeIcon icon={faGithub}/>}
            />
            <BarItem
                contentLink='https://www.linkedin.com/in/konstantinos-kastritis-269366232/'
                contentLabel='LinkedIn'
                contentIcon={<FontAwesomeIcon icon={faLinkedin}/>}
            />

        </SimpleGrid>
        </Container>
    )
}
