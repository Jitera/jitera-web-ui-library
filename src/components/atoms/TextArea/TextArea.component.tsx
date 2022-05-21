import React, { useMemo } from 'react'
import { Input as AntInput } from 'antd'
import { TextAreaProps as AntTextAreaProps } from 'antd/lib/input/TextArea'

import { CSSProperties } from 'styled-components'

import clsx from 'clsx'

import { Text } from '@components/atoms/Text/Text.component'

import { PreviewProps } from '@src/types/preview'

import { ComponentProps } from '@src/types/component'

import { getClasses, isStyleObject } from '@src/utils/common'

import { useResponsiveVisibility } from '@src/hooks/responsiveVisibility'

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
  const { classNames } = useResponsiveVisibility({ className, responsiveVisibility })

  return (
    <div
      style={style as CSSProperties}
      className={clsx(getClasses(styles.container, className || ''), classNames)}
      ref={ref}
    >
      <AntInput.TextArea {...inputStyleProps} disabled={isPreview} {...rest} />
      {!!errorMessage && <Text type="danger">{errorMessage}</Text>}
    </div>
  )
})

export { TextArea }
