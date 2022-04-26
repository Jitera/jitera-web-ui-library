import React from 'react'
import { Row as AntRow, RowProps as AntRowProps } from 'antd'

import { ComponentProps } from '@src/types/component'

import { PreviewProps } from '@src/types/preview'

import VisibilityComponent from '@components/common/ResponsiveVisibility/ResponsiveVisibility.component'

export interface RowProps extends PreviewProps, ComponentProps<AntRowProps> {}

const Row = React.forwardRef<HTMLDivElement, RowProps>((props, ref) => {
  const { children, responsiveVisibility, isPreview, ...rest } = props
  return (
    <VisibilityComponent visibility={responsiveVisibility} isPreview={isPreview}>
      <AntRow {...rest} ref={ref}>
        {children}
      </AntRow>
    </VisibilityComponent>
  )
})

export { Row }
