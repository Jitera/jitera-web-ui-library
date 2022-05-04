import React, { useMemo, CSSProperties } from 'react'
import ReactSelect, {
  CSSObjectWithLabel,
  Props as ReactSelectProps,
  SelectInstance
} from 'react-select'

import { PreviewProps } from '@src/types/preview'

import VisibilityComponent from '@components/common/ResponsiveVisibility/ResponsiveVisibility.component'

export interface SelectProps extends PreviewProps, ReactSelectProps {
  placeholderStyle?: CSSProperties
  containerStyle?: CSSProperties
  dropdownStyle?: CSSProperties
  optionStyle?: CSSProperties
}

const Select = React.forwardRef<SelectInstance, SelectProps>((props, ref) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const {
    isPreview,
    responsiveVisibility,
    styles,
    placeholderStyle,
    containerStyle,
    dropdownStyle,
    optionStyle,
    ...rest
  } = props

  const customStyles = useMemo(() => {
    const results = styles || {}

    if (placeholderStyle) {
      results.placeholder = (style: CSSObjectWithLabel) => ({ ...style, ...placeholderStyle })
    }
    if (containerStyle) {
      results.control = (style: CSSObjectWithLabel) => ({ ...style, ...containerStyle })
    }
    if (dropdownStyle) {
      results.menu = (style: CSSObjectWithLabel) => ({ ...style, ...dropdownStyle })
    }
    if (optionStyle) {
      results.option = (style: CSSObjectWithLabel) => ({ ...style, ...optionStyle })
    }
    return results
  }, [styles, placeholderStyle, containerStyle, dropdownStyle, optionStyle])
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore TODO: Figure out correct type for ref
  return (
    <VisibilityComponent visibility={responsiveVisibility} isPreview={isPreview}>
      <ReactSelect {...rest} isDisabled={isPreview} ref={ref as any} styles={customStyles} />
    </VisibilityComponent>
  )
})

export { Select }

export type { SelectInstance as SelectRef } from 'react-select'
export { components as SelectComponents } from 'react-select'
