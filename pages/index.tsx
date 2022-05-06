import Head from 'next/head'
// import Layout, { siteTitle } from './../components/old_layout'
import Layout from './../components/layout'
import utilStyles from './../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts'
import Link from 'next/link'
import Date from './../components/date'
import { GetStaticProps } from 'next'
import BarPlot from './../components/reddit_dashboard'
import { Container, Heading, SimpleGrid, Divider, Text } from '@chakra-ui/react'



import Profile from '../components/profileHeader'
import Bio from '../components/bio'
import SocialBar from '../components/socialbar'
import ProjectBar from '../components/projectbar'
const name = 'Konstantinos Kastritis'

export default function Home() {
    return (
        <Layout>
            <Profile name={name}></Profile>
            <SocialBar></SocialBar>
            <Bio></Bio>
            <ProjectBar></ProjectBar>
        </Layout>
    )
}
