import React, { CSSProperties, useMemo } from 'react'
import {
  Checkbox as AntCheckbox,
  CheckboxProps as AntCheckboxProps,
  Space as AntSpace,
  SpaceProps as AntSpaceProps
} from 'antd'

import { CheckboxGroupProps as AntCheckboxGroupProps } from 'antd/lib/checkbox'

import { PreviewProps } from '@src/types/preview'
import { ComponentProps, CheckboxStateColor } from '@src/types/component'

import { isWrap } from '@src/utils/wrap'

import { isStyleObject, getClasses } from '@src/utils/common'

import { useResponsiveVisibility } from '@src/hooks/responsiveVisibility'

import { CheckboxWrapper } from './Checkbox.styles'

export interface CheckboxOptions extends AntCheckboxProps {
  label: string
}

export interface CheckboxProps
  extends CheckboxStateColor,
    PreviewProps,
    ComponentProps<Omit<AntCheckboxGroupProps, 'options'>> {
  wrap?: boolean | 'wrap-reverse' | 'wrap' | 'nowrap'
  data: CheckboxOptions[]
  spaceProps?: AntSpaceProps
  containerStyle?: Record<string, unknown> | string
  direction?: 'horizontal' | 'vertical' | undefined
}

const Checkbox = React.forwardRef<HTMLDivElement, CheckboxProps>((props, ref) => {
  const {
    data,
    wrap = 'wrap',
    spaceProps,
    isPreview,
    responsiveVisibility,
    containerStyle = {},
    activeColor,
    inactiveColor,
    checkColor,
    labelStyle,
    direction,
    className,
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
  const { classNames } = useResponsiveVisibility({ className, responsiveVisibility })

  return (
    <CheckboxWrapper
      activeColor={activeColor}
      inactiveColor={inactiveColor}
      checkColor={checkColor}
      labelStyle={labelStyle}
      {...containerStyleProps}
      className={classNames}
    >
      <AntCheckbox.Group disabled={isPreview} {...rest} ref={ref}>
        <AntSpace direction={direction} {...customSpaceProps}>
          {data?.map((option) => (
            <AntCheckbox {...option}>{option.label}</AntCheckbox>
          ))}
        </AntSpace>
      </AntCheckbox.Group>
    </CheckboxWrapper>
  )
})

export { Checkbox }
