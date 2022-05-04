import React, { useMemo, CSSProperties } from 'react'
import ReactSelect, {
  CSSObjectWithLabel,
  components as SelectComponents,
  Props as ReactSelectProps,
  SelectInstance,
  DropdownIndicatorProps,
  GroupBase
} from 'react-select'

import { PreviewProps } from '@src/types/preview'

import VisibilityComponent from '@components/common/ResponsiveVisibility/ResponsiveVisibility.component'
import { Icon, IconProps } from '@components/atoms/Icon/Icon.component'

export interface SelectProps extends PreviewProps, ReactSelectProps {
  placeholderStyle?: CSSProperties
  containerStyle?: CSSProperties
  dropdownStyle?: CSSProperties
  optionStyle?: CSSProperties
  iconProps?: IconProps
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
    iconProps,
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
  const components = useMemo(() => {
    if (!iconProps) {
      return
    }
    // eslint-disable-next-line consistent-return
    return {
      // eslint-disable-next-line react/no-unstable-nested-components
      DropdownIndicator: (
        dropdownIndicatorProps: DropdownIndicatorProps<unknown, boolean, GroupBase<unknown>>
      ) => {
        return (
          <SelectComponents.DropdownIndicator {...dropdownIndicatorProps}>
            <Icon {...iconProps} />
          </SelectComponents.DropdownIndicator>
        )
      }
    }
  }, [iconProps])

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore TODO: Figure out correct type for ref
  return (
    <VisibilityComponent visibility={responsiveVisibility} isPreview={isPreview}>
      <ReactSelect
        components={components}
        isDisabled={isPreview}
        styles={customStyles}
        {...rest}
        ref={ref as any}
      />
    </VisibilityComponent>
  )
})

export { Select }

export type { SelectInstance as SelectRef } from 'react-select'
