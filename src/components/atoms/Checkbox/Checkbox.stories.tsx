import { Story } from '@storybook/react'

import { Checkbox, CheckboxProps } from './Checkbox.component'

const defaultArguments: CheckboxProps = {
  data: [
    { label: 'A', value: 'a' },
    { label: 'B', value: 'b' }
  ]
}

const CheckboxTemplate: Story<CheckboxProps> = (arguments_) => <Checkbox {...arguments_} />

export const Default = CheckboxTemplate.bind({})
Default.args = {
  ...defaultArguments
}

export const Vertical = CheckboxTemplate.bind({})
Vertical.args = {
  ...defaultArguments,
  spaceProps: {
    direction: 'vertical'
  }
}

export const CustomColor = CheckboxTemplate.bind({})
CustomColor.args = {
  ...defaultArguments,
  activeColor: 'red',
  inactiveColor: 'green'
}

export const CustomColorDisabled = CheckboxTemplate.bind({})
CustomColorDisabled.args = {
  ...defaultArguments,
  disabled: true,
  activeColor: 'red',
  inactiveColor: 'green'
}

export const CustomText = CheckboxTemplate.bind({})
CustomText.args = {
  ...defaultArguments,
  labelStyle: {
    color: 'red'
  }
}

export const CustomCheck = CheckboxTemplate.bind({})
CustomCheck.args = {
  ...defaultArguments,
  checkColor: 'green',
  activeColor: 'pink'
}

export const CustomIndeterminateCheck = CheckboxTemplate.bind({})
CustomIndeterminateCheck.args = {
  ...defaultArguments,
  checkColor: 'green',
  activeColor: 'pink'
}

export default {
  title: 'Atoms/Checkbox',
  component: Checkbox
}
