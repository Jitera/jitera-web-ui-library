import React from 'react'
import { Col as AntCol, ColProps as AntColProps } from 'antd'

import { ComponentProps } from '@src/types/component'

import { PreviewProps } from '@src/types/preview'
import { useResponsiveVisibility } from '@src/hooks/responsiveVisibility'

export interface ColProps extends PreviewProps, ComponentProps<AntColProps> {}

const Col = React.forwardRef<HTMLDivElement, ColProps>((props, ref) => {
  const { children, responsiveVisibility, className, ...rest } = props
  const { classNames } = useResponsiveVisibility({ className, responsiveVisibility })
  return (
    <AntCol {...rest} className={classNames} ref={ref}>
      {children}
    </AntCol>
  )
})

export { Col }
