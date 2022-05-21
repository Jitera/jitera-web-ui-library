import React, { useMemo } from 'react'
import { Input as AntInput, InputProps as AntInputProps } from 'antd'

import { CSSProperties } from 'styled-components'

import clsx from 'clsx'

import { Text } from '@components/atoms/Text/Text.component'

import { PreviewProps } from '@src/types/preview'

import { ComponentProps } from '@src/types/component'

import { Icon, IconProps } from '@components/atoms/Icon/Icon.component'

import { getClasses, isStyleObject } from '@src/utils/common'

import { useResponsiveVisibility } from '@src/hooks/responsiveVisibility'

import styles from './Input.module.css'

export interface InputProps extends PreviewProps, ComponentProps<Omit<AntInputProps, 'style'>> {
  style?: Record<string, unknown> | string
  inputStyle?: Record<string, unknown> | string
  isPasswordField?: boolean
  placeholderStyle?: Record<string, unknown> | string
  placeholder?: string
  errorMessage?: string
  prefixIconProps?: IconProps
  suffixIconProps?: IconProps
}

const Input = React.forwardRef<HTMLDivElement, InputProps>((props, ref) => {
  const {
    style = {},
    inputStyle = {},
    errorMessage,
    isPasswordField,
    responsiveVisibility,
    isPreview,
    className,
    prefixIconProps,
    suffixIconProps,
    ...rest
  } = props

  const InternalInput = useMemo(
    () => (isPasswordField ? AntInput.Password : AntInput),
    [isPasswordField]
  )

  const inputStyleProps = useMemo(() => {
    return isStyleObject(inputStyle)
      ? {
          style: inputStyle as CSSProperties,
          className: styles.input
        }
      : {
          className: getClasses(styles.input, inputStyle)
        }
  }, [inputStyle])

  const prefixIcon = useMemo(() => {
    if (!prefixIconProps) {
      return
    }
    // eslint-disable-next-line consistent-return
    return <Icon {...prefixIconProps} />
  }, [prefixIconProps])

  const suffixIcon = useMemo(() => {
    if (!suffixIconProps) {
      return
    }
    // eslint-disable-next-line consistent-return
    return <Icon {...suffixIconProps} />
  }, [suffixIconProps])
  const { classNames } = useResponsiveVisibility({ className, responsiveVisibility })

  return (
    <div
      style={style as CSSProperties}
      className={clsx(getClasses(styles.container, className || ''), classNames)}
      ref={ref}
    >
      <InternalInput
        {...inputStyleProps}
        disabled={isPreview}
        prefix={prefixIcon}
        suffix={suffixIcon}
        {...rest}
      />
      {!!errorMessage && <Text type="danger">{errorMessage}</Text>}
    </div>
  )
})

export { Input }
