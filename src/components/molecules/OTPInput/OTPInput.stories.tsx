import { useState } from 'react'
import { Story } from '@storybook/react'

import { JiteraOTPInput, JiteraOTPInputProps } from './OTPInput.component'

const defaultArguments = {} as JiteraOTPInputProps

const OTPInputTemplate: Story<JiteraOTPInputProps> = (arguments_) => {
  const [value, setValue] = useState<string>('')

  const handleChange = (otp: string) => {
    setValue(otp)
  }

  return <JiteraOTPInput {...arguments_} value={value} onChange={handleChange} />
}

export const Default = OTPInputTemplate.bind({})
Default.args = {
  ...defaultArguments
}

export const HasError = OTPInputTemplate.bind({})
HasError.args = {
  ...defaultArguments,
  value: '1111',
  hasErrored: true,
  errorMessage: 'The OTP has been expired'
}

export const Disabled = OTPInputTemplate.bind({})
Disabled.args = {
  ...defaultArguments,
  value: '0000',
  isDisabled: true
}

export default {
  title: 'Molecules/OTPInput',
  component: JiteraOTPInput,
  argTypes: {
    value: {
      description: 'Value of OTP Input'
    },
    hasErrored: {
      description: 'State of OTP Input if having error ',
      control: {
        type: 'boolean'
      }
    },
    errorMessage: {
      description: 'Error message under the OTP Input'
    },
    isDisabled: {
      description: 'Disabled status of OTP Input',
      control: {
        type: 'boolean'
      }
    }
  }
}
