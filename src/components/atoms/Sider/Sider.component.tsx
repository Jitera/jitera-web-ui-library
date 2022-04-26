import React from 'react'
import AntSider, { SiderProps as AntSiderProps } from 'antd/lib/layout/Sider'

import { ComponentProps } from '@src/types/component'

import { PreviewProps } from '@src/types/preview'

import VisibilityComponent from '@components/common/ResponsiveVisibility/ResponsiveVisibility.component'

export interface SiderProps extends PreviewProps, ComponentProps<AntSiderProps> {}

const Sider = React.forwardRef<HTMLDivElement, SiderProps>((props, ref) => {
  const { children, responsiveVisibility, isPreview, ...rest } = props
  return (
    <VisibilityComponent visibility={responsiveVisibility} isPreview={isPreview}>
      <AntSider {...rest} prefixCls="jitera-layout-sider" ref={ref}>
        {children}
      </AntSider>
    </VisibilityComponent>
  )
})

export { Sider }
