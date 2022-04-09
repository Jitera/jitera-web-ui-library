import React from 'react'
import { Row as AntRow, RowProps as AntRowProps } from 'antd'

import { PreviewProps } from '@/types/preview'
import { ComponentProps } from '@/types/component'

export interface RowProps extends PreviewProps, ComponentProps<AntRowProps> {}

const Row = React.forwardRef<HTMLDivElement, RowProps>((props, ref) => {
  const { children, ...rest } = props
  return (
    <AntRow {...rest} ref={ref}>
      {children}
    </AntRow>
  )
})

export { Row }
