import React from 'react'
import ReactSelect, { Props as ReactSelectProps, SelectInstance } from 'react-select'

import { PreviewProps } from '@src/types/preview'

import VisibilityComponent from '@components/common/ResponsiveVisibility/ResponsiveVisibility.component'

export interface SelectProps extends PreviewProps, ReactSelectProps {}

const Select = React.forwardRef<SelectInstance, SelectProps>((props, ref) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { isPreview, responsiveVisibility, ...rest } = props
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore TODO: Figure out correct type for ref
  return (
    <VisibilityComponent visibility={responsiveVisibility} isPreview={isPreview}>
      <ReactSelect {...rest} isDisabled={isPreview} ref={ref as any} />
    </VisibilityComponent>
  )
})

export { Select }

export type { SelectInstance as SelectRef } from 'react-select'
export { components as SelectComponents } from 'react-select'
