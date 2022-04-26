import { Story } from '@storybook/react'

import { Sider, SiderProps } from './Sider.component'

const defaultArguments: SiderProps = {
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

const SiderTemplate: Story<SiderProps> = (arguments_) => <Sider {...arguments_} />

export const Default = SiderTemplate.bind({})
Default.args = {
  ...defaultArguments,
  children: 'Lorem Ipsum'
}

export default {
  title: 'Atoms/Sider',
  component: Sider
}
