import Head from 'next/head'
import styles from './layout.module.css'
import utilStyles from './../styles/utils.module.css'
import Link from 'next/link'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faGithub,
    faLinkedin
  } from "@fortawesome/free-brands-svg-icons";


const name = 'Konstantinos Kastritis'
export const siteTitle = 'Portfolio'

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
        {/* <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.zeit.co%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        /> */}
        {/* <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" /> */}
      </Head>
      <header className={styles.header}>
        {home ? (
          <>
            <img
              src="./images/profile.jpg"
              className={utilStyles.borderCircle}
              height={96}
              width={96}
              alt={name}
            />
            <h1 className={utilStyles.headingMd}>{name}</h1>

            <div className={utilStyles.socialContainer}>
              <a href='https://github.com/kkastr' className={`${utilStyles.github} ${utilStyles.social}`}>
              <FontAwesomeIcon icon={faGithub}/>
              </a>
              <a href='https://www.linkedin.com/in/konstantinos-kastritis-269366232/' className={`${utilStyles.linkedin}  ${utilStyles.social}`}>
              <FontAwesomeIcon icon={faLinkedin}/>
              </a>
            </div>
        </>
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
            {/* <h2 className={utilStyles.headingLg}>
              <Link href="/">
                <a className={utilStyles.colorInherit}>{name}</a>
              </Link>
            </h2> */}
          </>
        )}
      </header>
      <main>{children}</main>
      {!home && (
        <div className={styles.backToHome}>
          <Link href="/">
            <button> ←Back </button>
          </Link>
        </div>
      )}
    </div>
  )
}
