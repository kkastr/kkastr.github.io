import { ChakraProvider } from '@chakra-ui/react'
import { AppProps } from 'next/app'
import Fonts from '../styles/fonts'
import theme from '../styles/theme'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Fonts />
      <Component {...pageProps} />
    </ChakraProvider>
  )
}
