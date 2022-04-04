import React from 'react'
import AntLayout, { BasicProps as AntBasicProps } from 'antd/lib/layout/layout'

import { PreviewProps } from '@/types/preview'
import { ComponentProps } from '@/types/component'

export interface LayoutProps extends PreviewProps, ComponentProps<AntBasicProps> {}

const Layout = React.forwardRef<HTMLDivElement, LayoutProps>((props, ref) => {
  const { children, ...rest } = props
  return (
    <AntLayout {...rest} prefixCls="jitera-layout" ref={ref}>
      {children}
    </AntLayout>
  )
})

export { Layout }
