import { Story } from '@storybook/react'

import { Layout, LayoutProps } from './Layout.component'

const defaultArguments: LayoutProps = {
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

const LayoutTemplate: Story<LayoutProps> = (arguments_) => <Layout {...arguments_} />

export const Default = LayoutTemplate.bind({})
Default.args = {
  ...defaultArguments,
  children: 'Lorem Ipsum'
}

export default {
  title: 'Atoms/Layout',
  component: Layout
}
