import React from 'react'
import { Content, BasicProps } from 'antd/lib/layout/layout'

import { PreviewProps } from '@/types/preview'
import { JiteraComponentProps } from '@/types/component'

export interface JiteraContentProps extends PreviewProps, JiteraComponentProps<BasicProps> {}

const JiteraContent = React.forwardRef<HTMLDivElement, JiteraContentProps>((props, ref) => {
  const { children, ...rest } = props
  return (
    <Content {...rest} prefixCls="jitera-layout-content" ref={ref}>
      {children}
    </Content>
  )
})

export { JiteraContent }
