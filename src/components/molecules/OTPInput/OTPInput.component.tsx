import React from 'react'
import OtpInput, { OtpInputProps } from 'react-otp-input'

import { useTheme } from '../../../styles/theme'
import { Typography } from '../../atoms/Typography/Typography.component'

export interface OTPInputProps extends OtpInputProps {
  errorMessage?: string
}

const OTPInput = React.forwardRef<OtpInput, OTPInputProps>((props, ref) => {
  // eslint-disable-next-line unicorn/prevent-abbreviations
  const { numInputs = 4, value, onChange, errorMessage, ...rest } = props

  const { theme } = useTheme()

  return (
    <>
      <div />
      <OtpInput
        ref={ref}
        {...rest}
        numInputs={numInputs}
        value={value}
        onChange={onChange}
        inputStyle={{
          width: '3rem',
          height: '3rem',
          marginRight: '1rem',
          fontSize: '1.5rem',
          borderRadius: 4,
          border: `${theme.borderWidthBase} solid ${theme.borderColorBase}`
        }}
      />
      {!!errorMessage && <Typography type="danger">{errorMessage}</Typography>}
    </>
  )
})

export { OTPInput }
