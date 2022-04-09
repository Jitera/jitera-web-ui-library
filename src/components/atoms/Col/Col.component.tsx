import React from 'react'
import { Col as AntCol, ColProps as AntColProps } from 'antd'

import { PreviewProps } from '@/types/preview'
import { ComponentProps } from '@/types/component'

export interface ColProps extends PreviewProps, ComponentProps<AntColProps> {}

const Col = React.forwardRef<HTMLDivElement, ColProps>((props, ref) => {
  const { children, ...rest } = props
  return (
    <AntCol {...rest} ref={ref}>
      {children}
    </AntCol>
  )
})

export { Col }
