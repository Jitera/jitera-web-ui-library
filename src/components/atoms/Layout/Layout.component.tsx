import React from 'react'
import Layout, { BasicProps } from 'antd/lib/layout/layout'

import { PreviewProps } from '@/types/preview'

export interface JiteraLayoutProps extends PreviewProps, BasicProps {}

const JiteraLayout = React.forwardRef<HTMLDivElement, JiteraLayoutProps>((props, ref) => {
  const { children, style, ...rest } = props
  return (
    <Layout {...rest} style={{ width: '100%', ...style }} ref={ref}>
      {children}
    </Layout>
  )
})

export { JiteraLayout }
