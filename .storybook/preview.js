import { addDecorator } from '@storybook/react'
import { ThemeProvider } from '../dist'

import '../dist/preview.css'

addDecorator((story) => <ThemeProvider isPreview>{story()}</ThemeProvider>)
