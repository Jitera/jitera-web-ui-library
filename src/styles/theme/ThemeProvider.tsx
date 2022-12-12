import { ReactElement, useMemo, useState } from 'react'
import { ConfigProvider } from 'antd'

import { PREFIX_COMPONENT_CLASSNAME, PREFIX_ICON_CLASSNAME } from '../../constants'
import { ModalComponent } from '../../components/widgets/Modal/Modal.component'

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
      theme: mergedNextColor,
      prefixCls: 'jitera'
    })

    setThemeValue(mergedNextColor)
  }

  const contextValue = useMemo(() => {
    return {
      theme: themeValue,
      toggleTheme: handleUpdateTheme
    }
  }, [themeValue])

  return (
    <ConfigProvider prefixCls={PREFIX_COMPONENT_CLASSNAME} iconPrefixCls={PREFIX_ICON_CLASSNAME}>
      <ThemeContext.Provider value={contextValue}>
        <>
          {children}
          <ModalComponent />
        </>
      </ThemeContext.Provider>
    </ConfigProvider>
  )
}

export { ThemeProvider }
