import { ReactElement, useMemo, useState } from 'react'
import { ConfigProvider } from 'antd'

import { ToastContainer } from '@src/components/widgets/Toast/Toast.component'

import { PreviewProps } from '@src/types/preview'

import { PREFIX_COMPONENT_CLASSNAME, PREFIX_ICON_CLASSNAME } from '../../constants'
import { ModalComponent } from '../../components/widgets/Modal/Modal.component'

import { defaultTheme } from './default'
import ThemeContext from './ThemeContext'

type ThemeProviderProps = Pick<PreviewProps, 'isPreview'> & {
  children: ReactElement
}

const ThemeProvider = ({ children, isPreview }: ThemeProviderProps) => {
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
          {!isPreview ? <ToastContainer /> : undefined}
        </>
      </ThemeContext.Provider>
    </ConfigProvider>
  )
}

export { ThemeProvider }
