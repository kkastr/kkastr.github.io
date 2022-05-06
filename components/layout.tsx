import Head from 'next/head'
import Link from 'next/link'
import { Container, Heading, SimpleGrid, Divider, Image, Box, chakra } from '@chakra-ui/react'
import SocialBar from './../components/socialbar'
import React from 'react'

const siteTitle = 'kkastr - home'

export default function Layout({children}: {children: React.ReactNode}) {
    return (
        <Box as="main" pb={10}>
            <Head>
            <link rel="icon" href="./favicon.ico" />
            <title>{siteTitle}</title>
            </Head>

        <>
        {children}
        </>
        </Box>
    )
}
