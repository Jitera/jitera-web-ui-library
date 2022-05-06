import React from 'react'
import {
  Checkbox as AntCheckbox,
  CheckboxProps as AntCheckboxProps,
  Space as AntSpace,
  SpaceProps as AntSpaceProps
} from 'antd'

import { CheckboxGroupProps as AntCheckboxGroupProps } from 'antd/lib/checkbox'

import { PreviewProps } from '@src/types/preview'
import { ComponentProps, CheckboxStateColor } from '@src/types/component'

import VisibilityComponent from '@components/common/ResponsiveVisibility/ResponsiveVisibility.component'

import { CheckboxWrapper } from './Checkbox.styles'

export interface CheckboxOptions extends AntCheckboxProps {
  label: string
}

export interface CheckboxProps
  extends CheckboxStateColor,
    PreviewProps,
    ComponentProps<Omit<AntCheckboxGroupProps, 'options'>> {
  data: CheckboxOptions[]
  spaceProps?: AntSpaceProps
  direction?: 'horizontal' | 'vertical' | undefined
}

const Checkbox = React.forwardRef<HTMLDivElement, CheckboxProps>((props, ref) => {
  const {
    data,
    spaceProps,
    isPreview,
    responsiveVisibility,
    activeColor,
    inactiveColor,
    checkColor,
    labelStyle,
    direction,
    ...rest
  } = props
  return (
    <VisibilityComponent visibility={responsiveVisibility} isPreview={isPreview}>
      <CheckboxWrapper
        activeColor={activeColor}
        inactiveColor={inactiveColor}
        labelStyle={labelStyle}
        checkColor={checkColor}
      >
        <AntCheckbox.Group disabled={isPreview} {...rest} ref={ref}>
          <AntSpace direction={direction} {...spaceProps}>
            {data?.map((option) => (
              <AntCheckbox {...option}>{option.label}</AntCheckbox>
            ))}
          </AntSpace>
        </AntCheckbox.Group>
      </CheckboxWrapper>
    </VisibilityComponent>
  )
})

export { Checkbox }
