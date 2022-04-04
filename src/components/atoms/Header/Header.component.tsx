import React from 'react'
import { Header as AntHeader, BasicProps as AntBasicProps } from 'antd/lib/layout/layout'

import { PreviewProps } from '@/types/preview'
import { ComponentProps } from '@/types/component'

export interface HeaderProps extends PreviewProps, ComponentProps<AntBasicProps> {}

const Header = React.forwardRef<HTMLDivElement, HeaderProps>((props, ref) => {
  const { children, style, ...rest } = props
  return (
    <AntHeader
      {...rest}
      prefixCls="jitera-layout-header"
      style={{ width: '100%', ...style }}
      ref={ref}
    >
      {children}
    </AntHeader>
  )
})

export { Header }
