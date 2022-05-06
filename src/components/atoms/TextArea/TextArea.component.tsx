import React, { useMemo } from 'react'
import { Input as AntInput } from 'antd'
import { TextAreaProps as AntTextAreaProps } from 'antd/lib/input/TextArea'

import { CSSProperties } from 'styled-components'

import { Text } from '@components/atoms/Text/Text.component'

import { PreviewProps } from '@src/types/preview'

import { ComponentProps } from '@src/types/component'

import VisibilityComponent from '@components/common/ResponsiveVisibility/ResponsiveVisibility.component'

import { getClasses, isStyleObject } from '@src/utils/common'

import styles from './TextArea.module.css'

export interface TextAreaProps
  extends PreviewProps,
    ComponentProps<Omit<AntTextAreaProps, 'style'>> {
  style?: Record<string, unknown> | string
  inputStyle?: Record<string, unknown> | string
  placeholderStyle?: Record<string, unknown> | string
  placeholder?: string
  errorMessage?: string
}

const TextArea = React.forwardRef<HTMLDivElement, TextAreaProps>((props, ref) => {
  const {
    style = {},
    inputStyle = {},
    errorMessage,
    responsiveVisibility,
    isPreview,
    className,
    ...rest
  } = props

  const inputStyleProps = useMemo(() => {
    return isStyleObject(inputStyle)
      ? {
          style: inputStyle as CSSProperties,
          className: styles.textarea
        }
      : {
          className: getClasses(styles.textarea, inputStyle)
        }
  }, [inputStyle])

  return (
    <VisibilityComponent visibility={responsiveVisibility} isPreview={isPreview}>
      <div
        style={style as CSSProperties}
        className={getClasses(styles.container, className || '')}
        ref={ref}
      >
        <AntInput.TextArea {...inputStyleProps} disabled={isPreview} {...rest} />
        {!!errorMessage && <Text type="danger">{errorMessage}</Text>}
      </div>
    </VisibilityComponent>
  )
})

export { TextArea }
