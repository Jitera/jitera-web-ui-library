import React from 'react'
import { Card, CardProps } from 'antd'
import { CardInterface } from 'antd/lib/card'

export interface JiteraCardProps extends CardProps {}

const JiteraCard = React.forwardRef<CardInterface, JiteraCardProps>((props, ref) => {
  const { children, ...rest } = props
  return (
    // @ts-ignore Card has forwarded ref but somehow the type definition not.
    <Card {...rest} ref={ref}>
      {children}
    </Card>
  )
})

export { JiteraCard }
