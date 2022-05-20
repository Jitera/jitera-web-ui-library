import React from 'react'

import { ComponentProps } from '@src/types/component'

import { PreviewProps } from '@src/types/preview'
import { useResponsiveVisibility } from '@src/hooks/responsiveVisibility'

export interface DividerProps
  extends PreviewProps,
    ComponentProps<React.HTMLAttributes<HTMLDivElement>> {}

const Divider = React.forwardRef<HTMLDivElement, DividerProps>((props, ref) => {
  const { children, responsiveVisibility, className, ...rest } = props
  const { classNames } = useResponsiveVisibility({ className, responsiveVisibility })

  return (
    <div {...rest} className={classNames} ref={ref}>
      {children}
    </div>
  )
})

export { Divider }
