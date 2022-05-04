import React, { ChangeEvent, useState } from 'react'
import { Input as AntInput, InputProps as AntInputProps } from 'antd'

import { CSSProperties } from 'styled-components'

import { PreviewProps } from '@src/types/preview'

import { ComponentProps } from '@src/types/component'

import VisibilityComponent from '@components/common/ResponsiveVisibility/ResponsiveVisibility.component'

import { getClasses, isStyleObject } from '../../../utils/common'

import { Form, FormItemProps } from '../Form/Form.component'

import { Text } from '../Text/Text.component'

import styles from './Input.module.css'

export interface InputProps extends PreviewProps, ComponentProps<Omit<AntInputProps, 'style'>> {
  formItem?: boolean
  formItemProps?: Omit<FormItemProps, 'children'>
  style?: Record<string, unknown> | string
  inputStyle?: Record<string, unknown> | string
  isPasswordField?: boolean
  placeholderStyle?: Record<string, unknown> | string
  placeholder?: string
  errorMessage?: string
}

const Input = React.forwardRef<HTMLDivElement, InputProps>((props, ref) => {
  const {
    formItem,
    formItemProps = {},
    style = {},
    inputStyle = {},
    placeholder,
    placeholderStyle = {},
    errorMessage,
    isPasswordField,
    responsiveVisibility,
    isPreview,
    ...rest
  } = props
  const [inputValue, setInputValue] = useState<number | string>('')

  const WrapperComponent = formItem ? Form.Item : 'div'

  const InternalInput = isPasswordField ? AntInput.Password : AntInput

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value)
  }

  return (
    <VisibilityComponent visibility={responsiveVisibility} isPreview={isPreview}>
      <WrapperComponent
        style={style as CSSProperties}
        {...formItemProps}
        className={getClasses(styles.container, isStyleObject(style) ? '' : style)}
        ref={ref}
      >
        <div className={styles.inputWrapper}>
          <InternalInput
            style={inputStyle as CSSProperties}
            className={getClasses(styles.input, isStyleObject(inputStyle) ? '' : inputStyle)}
            onChange={handleChange}
            disabled={isPreview}
            {...rest}
            placeholder=""
          />
          {!inputValue && (
            <Text
              style={placeholderStyle as CSSProperties}
              className={getClasses(
                styles.placeholder,
                isStyleObject(placeholderStyle) ? '' : getClasses(placeholderStyle)
              )}
            >
              {placeholder}
            </Text>
          )}
        </div>
        {!!errorMessage && <Text type="danger">{errorMessage}</Text>}
      </WrapperComponent>
    </VisibilityComponent>
  )
})

export { Input }
