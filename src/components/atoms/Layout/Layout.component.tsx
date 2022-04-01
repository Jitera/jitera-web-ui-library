import React from 'react'
import Layout, { BasicProps } from 'antd/lib/layout/layout'

export interface JiteraLayoutProps extends BasicProps {}

const JiteraLayout = React.forwardRef<HTMLDivElement, JiteraLayoutProps>((props, ref) => {
  const { children, style, ...rest } = props
  return (
    <Layout {...rest} style={{ ...style, width: '100%', minHeight: '100vh' }} ref={ref}>
      {children}
    </Layout>
  )
})

export { JiteraLayout }
