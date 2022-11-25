import { extendTheme, type ThemeConfig } from '@chakra-ui/react'

const config: ThemeConfig = {
  initialColorMode: 'dark',
  useSystemColorMode: true,
}

const colors = {
    portfolio: {
      slatedark: '#22272E',
      slatelight: '#2a3139',
      pink: '#ff63c3'
  }
}
const styles = {
  global: {
    body: {
      bg: 'portfolio.slatedark',
    },
  },
}

const fonts = {
  body: `'Roboto', sans-serif`,
  heading: `'Roboto', sans-serif`,
  mono: `'Roboto', sans-serif`,
}

const theme = extendTheme({colors, styles, fonts, config})

export default theme