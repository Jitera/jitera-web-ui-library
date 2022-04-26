import React from 'react'
import { Col as AntCol, ColProps as AntColProps } from 'antd'

import { ComponentProps } from '@src/types/component'

import { PreviewProps } from '@src/types/preview'

import VisibilityComponent from '@components/common/ResponsiveVisibility/ResponsiveVisibility.component'

export interface ColProps extends PreviewProps, ComponentProps<AntColProps> {}

const Col = React.forwardRef<HTMLDivElement, ColProps>((props, ref) => {
  const { children, isPreview, responsiveVisibility, ...rest } = props
  return (
    <VisibilityComponent visibility={responsiveVisibility} isPreview={isPreview}>
      <AntCol {...rest} ref={ref}>
        {children}
      </AntCol>
    </VisibilityComponent>
  )
})

export { Col }
