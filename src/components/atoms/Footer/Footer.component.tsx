import React from 'react'
import { Footer, BasicProps } from 'antd/lib/layout/layout'

export interface JiteraFooterProps extends BasicProps {}

const JiteraFooter = React.forwardRef<HTMLDivElement, JiteraFooterProps>((props, ref) => {
  const { children, style, ...rest } = props
  return (
    <Footer {...rest} style={{ width: '100%', ...style }} ref={ref}>
      {children}
    </Footer>
  )
})

export { JiteraFooter }
