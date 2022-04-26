import { Story } from '@storybook/react'

import { Header, HeaderProps } from './Header.component'

const defaultArguments: HeaderProps = {
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

const HeaderTemplate: Story<HeaderProps> = (arguments_) => <Header {...arguments_} />

export const Default = HeaderTemplate.bind({})
Default.args = {
  ...defaultArguments,
  children: 'Lorem Ipsum'
}

export default {
  title: 'Atoms/Header',
  component: Header
}
