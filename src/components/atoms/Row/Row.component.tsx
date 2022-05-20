import React from 'react'
import { Row as AntRow, RowProps as AntRowProps } from 'antd'

import { ComponentProps } from '@src/types/component'

import { PreviewProps } from '@src/types/preview'
import { useResponsiveVisibility } from '@src/hooks/responsiveVisibility'

export interface RowProps extends PreviewProps, ComponentProps<AntRowProps> {}

const Row = React.forwardRef<HTMLDivElement, RowProps>((props, ref) => {
  const { children, responsiveVisibility, className, ...rest } = props
  const { classNames } = useResponsiveVisibility({ className, responsiveVisibility })
  return (
    <AntRow {...rest} className={classNames} ref={ref}>
      {children}
    </AntRow>
  )
})

export { Row }
