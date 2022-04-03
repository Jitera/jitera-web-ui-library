import { Story } from '@storybook/react'

import { JiteraInput, JiteraInputProps } from './Input.component'

const defaultArguments: JiteraInputProps = {}

const InputTemplate: Story<JiteraInputProps> = (arguments_) => <JiteraInput {...arguments_} />

export const Default = InputTemplate.bind({})
Default.args = {
  ...defaultArguments
}

export default {
  title: 'Atoms/Input',
  component: JiteraInput
}
