import { Story } from '@storybook/react'
import {
  ThemeProvider,
  JiteraButton,
  JiteraInput,
  JiteraForm,
  JiteraFormProps
} from '@jitera/jitera-web-ui-library'

const defaultArguments: JiteraFormProps = {}

const FormTemplate: Story<JiteraFormProps> = (arguments_) => {
  return (
    <ThemeProvider>
      <JiteraForm
        {...arguments_}
        onFinish={(value) => {
          console.log(value)
        }}
      >
        <JiteraInput formItem formItemProps={{ label: 'Input', name: 'input' }} />
        <JiteraButton htmlType="submit">Submit</JiteraButton>
      </JiteraForm>
    </ThemeProvider>
  )
}

export const Default = FormTemplate.bind({})
Default.args = {
  ...defaultArguments
}

export default {
  title: 'Atoms/Form',
  component: JiteraForm
}
