import React from 'react'
import { Content, BasicProps } from 'antd/lib/layout/layout'

export interface JiteraContentProps extends BasicProps {}

const JiteraContent = React.forwardRef<HTMLDivElement, JiteraContentProps>((props, ref) => {
  const { children, ...rest } = props
  return (
    <Content {...rest} ref={ref}>
      {children}
    </Content>
  )
})

export { JiteraContent }
