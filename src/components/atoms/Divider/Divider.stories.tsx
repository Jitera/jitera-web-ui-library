import { Story } from '@storybook/react'

import { Divider, DividerProps } from './Divider.component'

const defaultArguments: DividerProps = {
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

const DividerTemplate: Story<DividerProps> = (arguments_) => <Divider {...arguments_} />

export const Default = DividerTemplate.bind({})
Default.args = {
  ...defaultArguments,
  style: {
    borderTopWidth: '1px',
    borderTopStyle: 'solid',
    borderTopColor: '#000'
  }
}

export default {
  title: 'Atoms/Divider',
  component: Divider
}
