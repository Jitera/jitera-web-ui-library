import React from 'react'
import { Content, BasicProps } from 'antd/lib/layout/layout'

import { PreviewProps } from '@/types/preview'

export interface JiteraContentProps extends PreviewProps, Omit<BasicProps, 'prefixCls'> {}

const JiteraContent = React.forwardRef<HTMLDivElement, JiteraContentProps>((props, ref) => {
  const { children, ...rest } = props
  return (
    <Content {...rest} prefixCls="jitera-layout-content" ref={ref}>
      {children}
    </Content>
  )
})

export { JiteraContent }
