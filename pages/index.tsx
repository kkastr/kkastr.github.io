import Head from 'next/head'
import Layout, { siteTitle } from './../components/layout'
import utilStyles from './../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts'
import Link from 'next/link'
import Date from './../components/date'
import { GetStaticProps } from 'next'
import BarPlot from './../components/reddit_dashboard'
import { Container, Heading, SimpleGrid, Divider, Text } from '@chakra-ui/react'

import ProjectBar from '../components/projectbar'


export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>

      {/* <Container>
          <Heading as="h3" variant="section-title">
              Bio
          </Heading>

          <Text mt={4}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
          </Text>

      </Container> */}


          {/* <ProjectBar></ProjectBar> */}


      {/* <BarPlot></BarPlot> */}


      {/* <Container>
        <SimpleGrid columns={[1, 4]} gap={6}>
          <section>
            Hello world! 0
          </section>

          <section>
            Hello world! 1
          </section>

          <section>
            Hello world! 2
          </section>

          <section>
            Hello world! 3
          </section>
        </SimpleGrid>
      </Container> */}


            {/* <div className={utilStyles.socialContainer}>
              <a href='https://github.com/kkastr' className={`${utilStyles.github} ${utilStyles.social}`}>
              <FontAwesomeIcon icon={faGithub}/>
              </a>
              <a href='https://www.linkedin.com/in/konstantinos-kastritis-269366232/' className={`${utilStyles.linkedin}  ${utilStyles.social}`}>
              <FontAwesomeIcon icon={faLinkedin}/>
              </a>
            </div> */}
      {/* <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section> */}
    </Layout>

  )
}
