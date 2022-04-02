import React from 'react'
import { Footer, BasicProps } from 'antd/lib/layout/layout'

import { PreviewProps } from '@/types/preview'

export interface JiteraFooterProps extends PreviewProps, Omit<BasicProps, 'prefixCls'> {}

const JiteraFooter = React.forwardRef<HTMLDivElement, JiteraFooterProps>((props, ref) => {
  const { children, style, ...rest } = props
  return (
    <Footer
      {...rest}
      prefixCls="jitera-layout-footer"
      style={{ width: '100%', ...style }}
      ref={ref}
    >
      {children}
    </Footer>
  )
})

export { JiteraFooter }
