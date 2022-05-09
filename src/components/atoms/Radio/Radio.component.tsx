import React, { CSSProperties, useMemo } from 'react'
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

import { isWrap } from '@src/utils/wrap'

import { isStyleObject, getClasses } from '@src/utils/common'

import { RadioWrapper } from './Radio.styles'

export interface RadioOptions extends AntRadioProps {
  label: string
}

export interface RadioProps
  extends RadioStateColor,
    PreviewProps,
    ComponentProps<Omit<AntRadioGroupProps, 'options'>> {
  wrap?: boolean | 'wrap-reverse' | 'wrap' | 'nowrap'
  data: RadioOptions[]
  spaceProps?: AntSpaceProps
  containerStyle?: Record<string, unknown> | string
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
    containerStyle = {},
    wrap = 'wrap',
    ...rest
  } = props

  const customSpaceProps = useMemo<AntSpaceProps>(() => {
    return {
      ...spaceProps,
      wrap: isWrap(wrap)
    }
  }, [wrap, spaceProps])
  const containerStyleProps = useMemo(() => {
    return isStyleObject(containerStyle)
      ? {
          style: containerStyle as CSSProperties
        }
      : {
          className: getClasses(containerStyle)
        }
  }, [containerStyle])
  return (
    <VisibilityComponent visibility={responsiveVisibility} isPreview={isPreview}>
      <RadioWrapper
        activeColor={activeColor}
        inactiveColor={inactiveColor}
        labelStyle={labelStyle}
        {...containerStyleProps}
      >
        <AntRadio.Group disabled={isPreview} {...rest} ref={ref}>
          <AntSpace direction={direction} {...customSpaceProps}>
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
