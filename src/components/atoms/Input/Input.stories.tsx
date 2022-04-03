import { Story } from '@storybook/react'
import { ThemeProvider, JiteraInput, JiteraInputProps } from '@jitera/jitera-web-ui-library'

const defaultArguments: JiteraInputProps = {}

const InputTemplate: Story<JiteraInputProps> = (arguments_) => (
  <ThemeProvider>
    <JiteraInput {...arguments_} />
  </ThemeProvider>
)

export const Default = InputTemplate.bind({})
Default.args = {
  ...defaultArguments
}

export default {
  title: 'Atoms/Input',
  component: JiteraInput
}
