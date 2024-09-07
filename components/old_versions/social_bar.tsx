import NextLink from 'next/link'
import { Container, SimpleGrid, IconButton, Button, ButtonGroup} from '@chakra-ui/react'
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
        <Container maxW='5xl' mt={2} display='flex' centerContent >

        <ButtonGroup ml={10} variant='outline' spacing={4}>

        <Button fontFamily='Helvetica' fontWeight='semibold'> Resume </Button>

        <NextLink href={'https://github.com/kkastr'} passHref>
        <Button fontFamily='Helvetica' fontWeight='semibold'> Github </Button>
        </NextLink>
        <NextLink href={'https://github.com/kkastr'} passHref>
        <Button fontFamily='Helvetica' fontWeight='semibold'> LinkedIn </Button>
        </NextLink>

        </ButtonGroup>
        {/* <SimpleGrid ml={4} w='66%' columns={3} spacing={4}> */}
            {/* <BarItem
                contentLink='https://github.com/kkastr'
                contentLabel='Github'
                contentIcon={<FontAwesomeIcon icon={faGithub}/>}
            />
            <BarItem
                contentLink='https://www.linkedin.com/in/konstantinos-kastritis-269366232/'
                contentLabel='LinkedIn'
                contentIcon={<FontAwesomeIcon icon={faLinkedin}/>}
            /> */}

        {/* </SimpleGrid> */}
        </Container>
    )
}
