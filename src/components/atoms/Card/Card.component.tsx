import React from 'react'
import { Card, CardProps } from 'antd'
import { CardInterface } from 'antd/lib/card'

import { PreviewProps } from '@/types/preview'
import { JiteraComponentProps } from '@/types/component'

export interface JiteraCardProps extends PreviewProps, JiteraComponentProps<CardProps> {}

const JiteraCard = React.forwardRef<CardInterface, JiteraCardProps>((props, ref) => {
  const { children, ...rest } = props
  return (
    // @ts-expect-error Card has forwarded ref but somehow the type definition not.
    <Card {...rest} ref={ref}>
      {children}
    </Card>
  )
})

export { JiteraCard }
