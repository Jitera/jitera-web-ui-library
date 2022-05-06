import { Story } from '@storybook/react'

import { Radio, RadioProps } from './Radio.component'

const defaultArguments: RadioProps = {
  data: [
    { label: 'A', value: 'a' },
    { label: 'B', value: 'b' }
  ]
}

const RadioTemplate: Story<RadioProps> = (arguments_) => <Radio {...arguments_} />

export const Default = RadioTemplate.bind({})
Default.args = {
  ...defaultArguments
}

export const Vertical = RadioTemplate.bind({})
Vertical.args = {
  ...defaultArguments,
  spaceProps: {
    direction: 'vertical'
  }
}

export const CustomColor = RadioTemplate.bind({})
CustomColor.args = {
  ...defaultArguments,
  activeColor: 'red',
  inactiveColor: 'green'
}

export const CustomColorDisabled = RadioTemplate.bind({})
CustomColorDisabled.args = {
  ...defaultArguments,
  disabled: true,
  activeColor: 'red',
  inactiveColor: 'green'
}

export const CustomText = RadioTemplate.bind({})
CustomText.args = {
  ...defaultArguments,
  labelStyle: {
    color: 'red'
  }
}

export default {
  title: 'Atoms/Radio',
  component: Radio
}
