import { Story } from '@storybook/react'

import { Select, SelectProps } from './Select.component'

const defaultArguments: SelectProps = {
  options: [
    { value: 'hello', label: 'Hello' },
    { value: 'world', label: 'World' }
  ],
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

const SelectTemplate: Story<SelectProps> = (arguments_) => <Select isPreview {...arguments_} />

export const Default = SelectTemplate.bind({})
Default.args = {
  ...defaultArguments
}

export default {
  title: 'Atoms/Select',
  component: Select
}
