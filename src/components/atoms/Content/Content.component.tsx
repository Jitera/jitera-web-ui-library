import React from 'react'
import { Content as AntContent, BasicProps as AntBasicProps } from 'antd/lib/layout/layout'

import { PreviewProps } from '@/types/preview'
import { ComponentProps } from '@/types/component'

export interface ContentProps extends PreviewProps, ComponentProps<AntBasicProps> {}

const Content = React.forwardRef<HTMLDivElement, ContentProps>((props, ref) => {
  const { children, ...rest } = props
  return (
    <AntContent {...rest} prefixCls="jitera-layout-content" ref={ref}>
      {children}
    </AntContent>
  )
})

export { Content }
