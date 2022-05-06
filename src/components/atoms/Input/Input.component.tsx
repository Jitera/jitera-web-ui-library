import React, { useMemo } from 'react'
import { Input as AntInput, InputProps as AntInputProps } from 'antd'

import { CSSProperties } from 'styled-components'

import { Text } from '@components/atoms/Text/Text.component'

import { PreviewProps } from '@src/types/preview'

import { ComponentProps } from '@src/types/component'

import VisibilityComponent from '@components/common/ResponsiveVisibility/ResponsiveVisibility.component'

import { getClasses, isStyleObject } from '@src/utils/common'

import styles from './Input.module.css'

export interface InputProps extends PreviewProps, ComponentProps<Omit<AntInputProps, 'style'>> {
  style?: Record<string, unknown> | string
  inputStyle?: Record<string, unknown> | string
  isPasswordField?: boolean
  placeholderStyle?: Record<string, unknown> | string
  placeholder?: string
  errorMessage?: string
}

const Input = React.forwardRef<HTMLDivElement, InputProps>((props, ref) => {
  const {
    style = {},
    inputStyle = {},
    placeholder,
    errorMessage,
    isPasswordField,
    responsiveVisibility,
    isPreview,
    className,
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

  return (
    <VisibilityComponent visibility={responsiveVisibility} isPreview={isPreview}>
      <div
        style={style as CSSProperties}
        className={getClasses(styles.container, className || '')}
        ref={ref}
      >
        <InternalInput
          {...inputStyleProps}
          disabled={isPreview}
          placeholder={placeholder}
          {...rest}
        />
        {!!errorMessage && <Text type="danger">{errorMessage}</Text>}
      </div>
    </VisibilityComponent>
  )
})

export { Input }
