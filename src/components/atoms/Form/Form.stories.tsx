import { Story } from '@storybook/react'

import { Input } from '../Input/Input.component'
import { Button } from '../Button/Button.component'

import { BoxProps } from '../Box/Box.component'

import { Form } from './Form.component'

const defaultArguments: BoxProps = {
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

const FormTemplate: Story<BoxProps> = (arguments_) => {
  return (
    <Form {...arguments_}>
      <Input />
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
