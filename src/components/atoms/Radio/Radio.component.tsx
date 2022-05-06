import React from 'react'
import {
  Radio as AntRadio,
  RadioProps as AntRadioProps,
  RadioGroupProps as AntRadioGroupProps,
  Space as AntSpace,
  SpaceProps as AntSpaceProps
} from 'antd'

import { PreviewProps } from '@src/types/preview'
import { ComponentProps, RadioStateColor } from '@src/types/component'

import VisibilityComponent from '@components/common/ResponsiveVisibility/ResponsiveVisibility.component'

import { RadioWrapper } from './Radio.styles'

export interface RadioOptions extends AntRadioProps {
  label: string
}

export interface RadioProps
  extends RadioStateColor,
    PreviewProps,
    ComponentProps<Omit<AntRadioGroupProps, 'options'>> {
  data: RadioOptions[]
  spaceProps?: AntSpaceProps
  direction?: 'horizontal' | 'vertical' | undefined
}

const Radio = React.forwardRef<HTMLDivElement, RadioProps>((props, ref) => {
  const {
    data,
    spaceProps,
    isPreview,
    responsiveVisibility,
    activeColor,
    inactiveColor,
    labelStyle,
    direction,
    ...rest
  } = props
  return (
    <VisibilityComponent visibility={responsiveVisibility} isPreview={isPreview}>
      <RadioWrapper activeColor={activeColor} inactiveColor={inactiveColor} labelStyle={labelStyle}>
        <AntRadio.Group disabled={isPreview} {...rest} ref={ref}>
          <AntSpace direction={direction} {...spaceProps}>
            {data?.map((option) => (
              <AntRadio key={option.value as string} value={option.value} {...option}>
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
