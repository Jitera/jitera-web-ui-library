import React from 'react'
import OtpInput, { OtpInputProps } from 'react-otp-input'

import { useTheme } from '../../../styles/theme'
import { Text } from '../../atoms/Text/Text.component'

export enum OTPInputType {
  Box = 'box',
  Underline = 'underline'
}
export interface OTPInputProps extends Omit<OtpInputProps, 'onChange' | 'numInputs'> {
  errorMessage?: string
  style?: CSSStyleDeclaration
  cellTextStyle?: CSSStyleDeclaration
  cellStyle: CSSStyleDeclaration
  pinCount: number
  autoFocus?: boolean
  otpInputType?: OTPInputType
  onChange?: (value: string) => void
}

const OTPInput = React.forwardRef<HTMLDivElement, OTPInputProps>((props, ref) => {
  // eslint-disable-next-line unicorn/prevent-abbreviations
  const {
    pinCount = 4,
    value,
    onChange,
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

  return (
    <div ref={ref}>
      <OtpInput
        {...rest}
        numInputs={pinCount}
        value={value}
        onChange={onChange}
        shouldAutoFocus={autoFocus}
        containerStyle={style}
        inputStyle={{
          width: '3rem',
          height: '3rem',
          marginRight: '1rem',
          fontSize: '1.5rem',
          borderRadius: 4,
          border: `${theme.borderWidthBase} solid ${theme.borderColorBase}`,
          ...cellStyle,
          ...cellTextStyle,
          ...customCellStyle
        }}
      />
      {!!errorMessage && <Text type="danger">{errorMessage}</Text>}
    </>
  )
})

export { OTPInput }
