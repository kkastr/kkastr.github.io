// import '../styles/global.css'
import { ChakraProvider } from '@chakra-ui/react'
import { AppProps } from 'next/app'
import Fonts from '../components/fonts'
import theme from '../lib/theme'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Fonts />
      <Component {...pageProps} />
    </ChakraProvider>
  )
}
