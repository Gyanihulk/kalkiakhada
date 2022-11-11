import * as NextImage from 'next/image'
import { addDecorator } from '@storybook/react'
import { ThemeProvider } from 'styled-components'
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport'
import GlobalStyles from '../styles/global'
import { theme } from '../styles/theme'

const OriginalNextImage = NextImage.default

Object.defineProperty(NextImage, 'default', {
  configurable: true,
  value: (props) => <OriginalNextImage {...props} unoptimized />,
})

export const parameters = {
  viewports: {
    viewports: INITIAL_VIEWPORTS,
  },
  layout: 'fullscreen',
}

addDecorator((story) => (
  <div>
    <GlobalStyles />
    <ThemeProvider theme={theme}>{story()}</ThemeProvider>
  </div>
))
