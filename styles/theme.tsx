import { extendTheme, type ThemeConfig } from '@chakra-ui/react'

const config: ThemeConfig = {
  initialColorMode: 'dark',
  useSystemColorMode: true,
}


const styles = {
  global: {
    body: {
      bg: '#22272E',
    },
  },
}

const fonts = {
  body: `'Roboto', sans-serif`,
  heading: `'Roboto', sans-serif`,
  mono: `'Roboto', sans-serif`,
}

const theme = extendTheme({styles, fonts, config})

export default theme