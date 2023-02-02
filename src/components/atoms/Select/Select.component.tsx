import React, { useMemo, CSSProperties } from 'react'
import ReactSelect, {
  CSSObjectWithLabel,
  components as SelectComponents,
  Props as ReactSelectProps,
  SelectInstance,
  DropdownIndicatorProps,
  GroupBase,
  OptionsOrGroups
} from 'react-select'

import { PreviewProps } from '@src/types/preview'

import { Icon, IconProps } from '@components/atoms/Icon/Icon.component'
import { useResponsiveVisibility } from '@src/hooks/responsiveVisibility'

export interface SelectPropsDatum {
  label: string
  value: string
}

export interface SelectProps
  extends PreviewProps,
    Omit<ReactSelectProps, 'onChange' | 'defaultValue' | 'value'> {
  placeholderStyle?: CSSProperties
  containerStyle?: CSSProperties
  dropdownStyle?: CSSProperties
  optionStyle?: CSSProperties
  iconProps?: IconProps
  data?: OptionsOrGroups<SelectPropsDatum, GroupBase<SelectPropsDatum>> | undefined
  defaultValue?: string | string[] | undefined
  value?: string | string[] | undefined
  onChange?: (value: string) => void
}

const extractSelectOptions = (
  value: string | string[] | undefined,
  data: OptionsOrGroups<SelectPropsDatum, GroupBase<SelectPropsDatum>> | undefined,
  isMulti: boolean
) => {
  if (!value || !data) {
    // eslint-disable-next-line unicorn/no-useless-undefined
    return undefined
  }

  if (isMulti) {
    return data.filter((opt) => (value as string[]).includes((opt as SelectPropsDatum).value))
  }

  return data.find((opt) => (opt as SelectPropsDatum).value === value)
}

const Select = React.forwardRef<SelectInstance, SelectProps>((props, ref) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const {
    isPreview,
    responsiveVisibility,
    className,
    styles,
    data,
    placeholderStyle,
    containerStyle,
    dropdownStyle,
    optionStyle,
    iconProps,
    defaultValue,
    value,
    isMulti = false,
    onChange,
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
  const { classNames } = useResponsiveVisibility({ className, responsiveVisibility })

  const defaultValueOption = useMemo(
    () => extractSelectOptions(defaultValue, data, isMulti),
    [defaultValue, data, isMulti]
  )

  const valueOption = useMemo(
    () => extractSelectOptions(value, data, isMulti),
    [value, data, isMulti]
  )

  return (
    <ReactSelect
      isMulti={isMulti}
      className={classNames}
      components={components}
      // disabling the select in preview mode causes some ref issues in the editor, so instead we do this.
      menuIsOpen={isPreview ? false : rest?.menuIsOpen}
      styles={customStyles}
      options={data}
      defaultValue={defaultValueOption}
      value={valueOption}
      onChange={(newValue: any) => {
        if (onChange) {
          if (isMulti) {
            onChange(newValue?.map((newValueItem: any) => newValueItem.value))
          } else {
            onChange(newValue?.value)
          }
        }
      }}
      {...rest}
      // TODO: find correct type for ref
      ref={ref as any}
    />
  )
})

export { Select }

export type { SelectInstance as SelectRef } from 'react-select'
