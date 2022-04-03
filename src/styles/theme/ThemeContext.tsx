import { useContext, createContext } from 'react'

import { defaultTheme } from './default'

const ThemeContext = createContext({
  theme: defaultTheme,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  toggleTheme: (_nextValue: typeof defaultTheme) => {}
})

export const useTheme = () => {
  return useContext(ThemeContext)
}

export default ThemeContext
