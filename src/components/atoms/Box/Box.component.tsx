import React from 'react'

import { ComponentProps } from '@src/types/component'

import { PreviewProps } from '@src/types/preview'

import VisibilityComponent from '@components/common/ResponsiveVisibility/ResponsiveVisibility.component'

export interface BoxProps
  extends PreviewProps,
    ComponentProps<React.HTMLAttributes<HTMLDivElement>> {}

const Box = React.forwardRef<HTMLDivElement, BoxProps>((props, ref) => {
  const { children, isPreview, responsiveVisibility, ...rest } = props

  return (
    <VisibilityComponent visibility={responsiveVisibility} isPreview={isPreview}>
      <div {...rest} ref={ref}>
        {children}
      </div>
    </VisibilityComponent>
  )
})

export { Box }
