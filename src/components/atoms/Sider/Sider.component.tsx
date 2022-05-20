import React from 'react'
import AntSider, { SiderProps as AntSiderProps } from 'antd/lib/layout/Sider'

import { ComponentProps } from '@src/types/component'

import { PreviewProps } from '@src/types/preview'

import { useResponsiveVisibility } from '@src/hooks/responsiveVisibility'

export interface SiderProps extends PreviewProps, ComponentProps<AntSiderProps> {}

const Sider = React.forwardRef<HTMLDivElement, SiderProps>((props, ref) => {
  const { children, responsiveVisibility, className, ...rest } = props
  const { classNames } = useResponsiveVisibility({ className, responsiveVisibility })
  return (
    <AntSider {...rest} className={classNames} prefixCls="jitera-layout-sider" ref={ref}>
      {children}
    </AntSider>
  )
})

export { Sider }
