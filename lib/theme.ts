import { extendTheme } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'
import type { StyleFunctionProps } from '@chakra-ui/styled-system'

const styles = {
  global: (props)=> ({
    body: {
      bg: mode('#adbac7', '#22272e')(props)
    }
  })
}

const components = {
  // Heading: {
  //   variants: {
  //     'section-title': {
  //       fontSize: 22,
  //       marginTop: 2,
        // textDecoration: 'underline',
        // textUnderlineOffset: 6,
        // textDecorationColor: '#525252',
        // textDecorationThickness: 4,

  //     }
  //   }
  // },
  Link: {
    baseStyle: (props) => ({
      color: mode('#3d7aed', '#ff63c3')(props),
      textUnderlineOffset: 3
    })
  }
}

const fonts = {
  heading: "'M PLUS Rounded 1c'"
}

// const colors = {
//   grassTeal: '#88ccca'
// }

const config = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
}

const theme = extendTheme({ config, styles, components, fonts})

export default theme