import { Story } from '@storybook/react'
import { JiteraInput, JiteraInputProps } from '@jitera/jitera-web-ui-library'

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
