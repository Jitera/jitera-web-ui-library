import { Story } from '@storybook/react'

import { Input, InputProps } from './Input.component'

const defaultArguments: InputProps = {}

const InputTemplate: Story<InputProps> = (arguments_) => <Input {...arguments_} />

export const Default = InputTemplate.bind({})
Default.args = {
  ...defaultArguments
}

export default {
  title: 'Atoms/Input',
  component: Input
}
