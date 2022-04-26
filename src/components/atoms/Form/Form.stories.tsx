import { Story } from '@storybook/react'

import { Input } from '../Input/Input.component'
import { Button } from '../Button/Button.component'

import { Form, FormProps } from './Form.component'

const defaultArguments: FormProps = {
  responsiveVisibility: [
    {
      value: 'desktop'
    },
    {
      value: 'tablet'
    },
    {
      value: 'mobile'
    }
  ]
}

const FormTemplate: Story<FormProps> = (arguments_) => {
  return (
    <Form
      {...arguments_}
      onFinish={(value) => {
        console.log(value)
      }}
    >
      <Input formItem formItemProps={{ label: 'Input', name: 'input' }} />
      <Button htmlType="submit">Submit</Button>
    </Form>
  )
}

export const Default = FormTemplate.bind({})
Default.args = {
  ...defaultArguments
}

export default {
  title: 'Atoms/Form',
  component: Form
}
