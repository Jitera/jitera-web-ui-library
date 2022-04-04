import React from 'react'
import AntSider, { SiderProps as AntSiderProps } from 'antd/lib/layout/Sider'

import { PreviewProps } from '@/types/preview'
import { ComponentProps } from '@/types/component'

export interface SiderProps extends PreviewProps, ComponentProps<AntSiderProps> {}

const Sider = React.forwardRef<HTMLDivElement, SiderProps>((props, ref) => {
  const { children, ...rest } = props
  return (
    <AntSider {...rest} prefixCls="jitera-layout-sider" ref={ref}>
      {children}
    </AntSider>
  )
})

export { Sider }
