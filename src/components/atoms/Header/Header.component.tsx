import React from 'react'
import { Header, BasicProps } from 'antd/lib/layout/layout'

import { PreviewProps } from '@/types/preview'

export interface JiteraHeaderProps extends PreviewProps, Omit<BasicProps, 'prefixCls'> {}

const JiteraHeader = React.forwardRef<HTMLDivElement, JiteraHeaderProps>((props, ref) => {
  const { children, style, ...rest } = props
  return (
    <Header
      {...rest}
      prefixCls="jitera-layout-header"
      style={{ width: '100%', ...style }}
      ref={ref}
    >
      {children}
    </Header>
  )
})

export { JiteraHeader }
