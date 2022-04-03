import { addDecorator } from '@storybook/react'
import { ThemeProvider } from '@jitera/jitera-web-ui-library'

import 'antd/dist/antd.css'
import '@jitera/jitera-web-ui-library/dist/style.css'

addDecorator((story) => <ThemeProvider>{story()}</ThemeProvider>)
