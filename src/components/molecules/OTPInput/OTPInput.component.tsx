import React from 'react'
import OtpInput, { OtpInputProps } from 'react-otp-input'

import { PreviewProps } from '@src/types/preview'

import { isStyleObject, getClasses } from '../../../utils/common'

import { useTheme } from '../../../styles/theme'
import { Text } from '../../atoms/Text/Text.component'

export enum OTPInputType {
  Box = 'box',
  Underline = 'underline'
}
export interface OTPInputProps extends PreviewProps, Omit<OtpInputProps, 'onChange' | 'numInputs'> {
  errorMessage?: string
  style?: Record<string, unknown> | string
  cellTextStyle?: Record<string, unknown> | string
  cellStyle: Record<string, unknown> | string
  pinCount: number
  autoFocus?: boolean
  otpInputType?: OTPInputType
  onChange?: (value: string) => void
}

const OTPInput = React.forwardRef<HTMLDivElement, OTPInputProps>((props, ref) => {
  // eslint-disable-next-line unicorn/prevent-abbreviations
  const {
    isPreview,
    pinCount = 4,
    autoFocus,
    errorMessage,
    style = {},
    cellTextStyle = {},
    cellStyle = {},
    otpInputType = 'box',
    ...rest
  } = props

  const { theme } = useTheme()

  let customCellStyle = {}
  if (otpInputType === OTPInputType.Underline) {
    customCellStyle = {
      borderLeft: 'unset',
      borderRight: 'unset',
      borderTop: 'unset'
    }
  }

  let inputStyle: Record<string, unknown> | string = ''

  if (isStyleObject(cellStyle) && isStyleObject(cellTextStyle)) {
    inputStyle = {
      width: '3rem',
      height: '3rem',
      marginRight: '1rem',
      fontSize: '1.5rem',
      borderRadius: 4,
      border: `${theme.borderWidthBase} solid ${theme.borderColorBase}`,
      ...(cellStyle as Record<string, unknown>),
      ...(cellTextStyle as Record<string, unknown>),
      ...customCellStyle
    }
  }

  return (
    <div ref={ref}>
      <OtpInput
        isDisabled={isPreview}
        {...rest}
        numInputs={pinCount}
        shouldAutoFocus={autoFocus}
        containerStyle={style}
        inputStyle={inputStyle}
        className={getClasses(cellStyle, cellTextStyle)}
      />
      {!!errorMessage && <Text type="danger">{errorMessage}</Text>}
    </div>
  )
})

export { OTPInput }
