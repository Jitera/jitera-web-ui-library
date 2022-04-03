import React, { ReactElement, useMemo, useState } from 'react'
import { ConfigProvider } from 'antd'

import { defaultTheme } from './default'
import ThemeContext from './ThemeContext'

type ThemeProviderProps = {
  children: ReactElement
}

const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [themeValue, setThemeValue] = useState(defaultTheme)

  const handleUpdateTheme = (nextValue: typeof defaultTheme) => {
    const mergedNextColor = {
      ...defaultTheme,
      ...nextValue
    }

    ConfigProvider.config({
      theme: mergedNextColor
    })

    setThemeValue(mergedNextColor)
  }

  const contextValue = useMemo(() => {
    return {
      theme: themeValue,
      toggleTheme: handleUpdateTheme
    }
  }, [themeValue])

  return <ThemeContext.Provider value={contextValue}>{children}</ThemeContext.Provider>
}

export { ThemeProvider }
