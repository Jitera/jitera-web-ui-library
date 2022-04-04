import { addDecorator } from '@storybook/react'
import { ThemeProvider } from '../dist'

import 'antd/dist/antd.css'
import '../dist/style.css'

addDecorator((story) => <ThemeProvider>{story()}</ThemeProvider>)
