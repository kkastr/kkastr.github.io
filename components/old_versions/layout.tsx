import Head from "next/head";
import { Box } from "@chakra-ui/react";
import React from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  const siteTitle = "kkastr - home";
  return (
    <Box as="main" pb={10}>
      <Head>
        <link rel="icon" href="./favicon.ico" />
        <title>{siteTitle}</title>
      </Head>

      {children}
    </Box>
  );
}
