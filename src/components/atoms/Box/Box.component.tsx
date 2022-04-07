import React from 'react'
import { Card as AntCard, CardProps as AntCardProps } from 'antd'
import { CardInterface } from 'antd/lib/card'

import { PreviewProps } from '@/types/preview'
import { ComponentProps } from '@/types/component'

export interface BoxProps extends PreviewProps, ComponentProps<AntCardProps> {}

const Box = React.forwardRef<CardInterface, BoxProps>((props, ref) => {
  const { children, ...rest } = props
  return (
    // @ts-expect-error Card has forwarded ref but somehow the type definition not.
    <AntCard {...rest} ref={ref}>
      {children}
    </AntCard>
  )
})

export { Box }
