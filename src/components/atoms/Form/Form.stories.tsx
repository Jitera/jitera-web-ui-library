import { Story } from '@storybook/react'
import {
  JiteraButton,
  JiteraInput,
  JiteraForm,
  JiteraFormProps
} from '@jitera/jitera-web-ui-library'

const defaultArguments: JiteraFormProps = {}

const FormTemplate: Story<JiteraFormProps> = (arguments_) => {
  return (
    <JiteraForm
      {...arguments_}
      onFinish={(value) => {
        console.log(value)
      }}
    >
      <JiteraInput formItem formItemProps={{ label: 'Input', name: 'input' }} />
      <JiteraButton htmlType="submit">Submit</JiteraButton>
    </JiteraForm>
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
