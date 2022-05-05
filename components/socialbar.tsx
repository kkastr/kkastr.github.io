import NextLink from 'next/link'
import {
  Container,
  SimpleGrid,
  IconButton,
} from '@chakra-ui/react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faGithub,
    faLinkedin
  } from "@fortawesome/free-brands-svg-icons";

  import utilStyles from './../styles/utils.module.css'

export default function SocialBar() {
    return (
        <Container mt={2} display='Flex' centerContent={true}>
        <SimpleGrid columns={[1, 2]} spacing={6}>

        <NextLink href='https://github.com/kkastr' passHref>
            <IconButton
                variant="link"
                aria-label='Github'
                icon={<FontAwesomeIcon icon={faGithub} />}
                boxSize={12}
                _hover={{transform: 'scale(1.3)'}}
            />
        </NextLink>

        <NextLink href='https://www.linkedin.com/in/konstantinos-kastritis-269366232/' passHref>
            <IconButton
                variant="link"
                aria-label='LinkedIn'
                icon={<FontAwesomeIcon icon={faLinkedin}/>}
                boxSize={12}
                _hover={{transform: 'scale(1.3)'}}
            />
        </NextLink>

        </SimpleGrid>
        </Container>
    )
}
