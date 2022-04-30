import React from 'react'
import {
  Radio as AntRadio,
  RadioGroupProps as AntRadioGroupProps,
  CheckboxOptionType as AntCheckboxOptionType,
  Space as AntSpace,
  SpaceProps as AntSpaceProps
} from 'antd'

import { PreviewProps } from '@src/types/preview'
import { ComponentProps, RadioCheckboxStateColor } from '@src/types/component'

import VisibilityComponent from '@components/common/ResponsiveVisibility/ResponsiveVisibility.component'

import { RadioWrapper } from './Radio.styles'

export interface RadioProps
  extends RadioCheckboxStateColor,
    PreviewProps,
    ComponentProps<Omit<AntRadioGroupProps, 'options'>> {
  options: AntCheckboxOptionType[]
  spaceProps?: AntSpaceProps
}

const Radio = React.forwardRef<HTMLDivElement, RadioProps>((props, ref) => {
  const {
    options,
    spaceProps,
    isPreview,
    responsiveVisibility,
    activeColor,
    inactiveColor,
    labelStyle,
    ...rest
  } = props
  return (
    <VisibilityComponent visibility={responsiveVisibility} isPreview={isPreview}>
      <RadioWrapper activeColor={activeColor} inactiveColor={inactiveColor} labelStyle={labelStyle}>
        <AntRadio.Group {...rest} ref={ref}>
          <AntSpace {...spaceProps}>
            {options?.map((option) => (
              <AntRadio key={option.value as string} {...option}>
                {option.label}
              </AntRadio>
            ))}
          </AntSpace>
        </AntRadio.Group>
      </RadioWrapper>
    </VisibilityComponent>
  )
})

export { Radio }
export type { CheckboxOptionType as RadioCheckboxOptionType } from 'antd'
