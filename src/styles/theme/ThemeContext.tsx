import React from 'react'
import { defaultTheme } from './default'

const ThemeContext = React.createContext({
  theme: defaultTheme,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  toggleTheme: (_nextValue: {}) => {}
})

export default ThemeContext
