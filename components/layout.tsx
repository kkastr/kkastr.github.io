import Head from 'next/head'
import styles from './layout.module.css'
import utilStyles from './../styles/utils.module.css'
import Link from 'next/link'
import { Container, Heading, SimpleGrid, Divider, chakra } from '@chakra-ui/react'
import SocialBar from './../components/socialbar'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faGithub,
    faLinkedin
  } from "@fortawesome/free-brands-svg-icons";


const name = 'Konstantinos Kastritis'
export const siteTitle = 'kkastr - home'

export default function Layout({
  children,
  home
}: {
  children: React.ReactNode
  home?: boolean
}) {
  return (
    <div className={`${styles.container}`}>
      <Head>
        <link rel="icon" href="./favicon.ico" />
        <meta
          name="description"
          content=""
        />
      </Head>
      <header className={styles.header}>
        {home ? (
          <Container display="flex" centerContent={true}>
            <img
              src="./images/profile.jpg"
              className={utilStyles.borderCircle}
              height={96}
              width={96}
              alt={name}
            />

            <Heading as='h3' size='lg'>{name}</Heading>

            <SocialBar></SocialBar>

          </Container>
        ) : (
          <>
            <Link href="/">
              <a>
                <img
                  src="./images/profile.jpg"
                  className={utilStyles.borderCircle}
                  height={96}
                  width={96}
                  alt={name}
                />
              </a>
            </Link>
          </>
        )}
      </header>
      <main>{children}</main>
      {/* {!home && (
        <div className={styles.backToHome}>
          <Link href="/">
            <button> ←Back </button>
          </Link>
        </div>
      )} */}
    </div>
  )
}
