import { addDecorator } from '@storybook/react'
import { ThemeProvider } from '../dist'

import '../dist/style.css'

addDecorator((story) => <ThemeProvider>{story()}</ThemeProvider>)
