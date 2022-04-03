import { addDecorator } from '@storybook/react'
import 'antd/dist/antd.css'
import { ThemeProvider } from '../src/styles/theme/ThemeProvider'

addDecorator((story) => <ThemeProvider>{story()}</ThemeProvider>)
