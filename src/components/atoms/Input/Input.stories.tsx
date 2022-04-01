import { Story } from '@storybook/react'
import { JiteraInput, JiteraInputProps } from './Input.component'

const defaultArgs: JiteraInputProps = {}

const InputTemplate: Story<JiteraInputProps> = (args) => <JiteraInput {...args} />

export const Default = InputTemplate.bind({})
Default.args = {
  ...defaultArgs
}

export default {
  title: 'Atoms/Input',
  component: JiteraInput
}
