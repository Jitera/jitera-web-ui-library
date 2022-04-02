import React from 'react'
import Sider, { SiderProps } from 'antd/lib/layout/Sider'

import { PreviewProps } from '@/types/preview'

export interface JiteraSiderProps extends PreviewProps, Omit<SiderProps, 'prefixCls'> {}

const JiteraSider = React.forwardRef<HTMLDivElement, JiteraSiderProps>((props, ref) => {
  const { children, ...rest } = props
  return (
    <Sider {...rest} prefixCls="jitera-layout-sider" ref={ref}>
      {children}
    </Sider>
  )
})

export { JiteraSider }
