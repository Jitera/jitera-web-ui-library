import { Story } from '@storybook/react'
import { JiteraButton } from '../Button/Button.component'
import { JiteraInput } from '../Input/Input.component'
import { JiteraForm, JiteraFormProps } from './Form.component'

const defaultArgs: JiteraFormProps = {}

const FormTemplate: Story<JiteraFormProps> = (args) => {
  return (
    <JiteraForm
      {...args}
      onFinish={(value) => {
        console.log(value)
      }}
    >
      <JiteraInput formItem={true} formItemProps={{ label: 'Input', name: 'input' }} />
      <JiteraButton htmlType="submit">Submit</JiteraButton>
    </JiteraForm>
  )
}

export const Default = FormTemplate.bind({})
Default.args = {
  ...defaultArgs
}

export default {
  title: 'Atoms/Form',
  component: JiteraForm
}
