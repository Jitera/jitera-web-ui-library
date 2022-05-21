import React from 'react'

import { ComponentProps } from '@src/types/component'

import { PreviewProps } from '@src/types/preview'
import { useResponsiveVisibility } from '@src/hooks/responsiveVisibility'

export interface BoxProps
  extends PreviewProps,
    ComponentProps<React.HTMLAttributes<HTMLDivElement>> {}

const Box = React.forwardRef<HTMLDivElement, BoxProps>((props, ref) => {
  const { children, responsiveVisibility, className, ...rest } = props

  const { classNames } = useResponsiveVisibility({ className, responsiveVisibility })

  return (
    <div {...rest} className={classNames} ref={ref}>
      {children}
    </div>
  )
})

export { Box }
