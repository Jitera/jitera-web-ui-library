import React from 'react'
import ReactSelect, { Props as ReactSelectProps, SelectInstance } from 'react-select'

import { PreviewProps } from '@/types/preview'

export interface SelectProps extends PreviewProps, ReactSelectProps {}

const Select = React.forwardRef<SelectInstance, SelectProps>((props, ref) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { isPreview, ...rest } = props
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore TODO: Figure out correct type for ref
  return <ReactSelect {...rest} isDisabled={isPreview} ref={ref} />
})

export { Select }

export type { SelectInstance as SelectRef } from 'react-select'
export { components as SelectComponents } from 'react-select'
