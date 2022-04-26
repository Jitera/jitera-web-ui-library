import { Story } from '@storybook/react'

import { Content, ContentProps } from './Content.component'

const defaultArguments: ContentProps = {
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

const ContentTemplate: Story<ContentProps> = (arguments_) => <Content {...arguments_} />

export const Default = ContentTemplate.bind({})
Default.args = {
  ...defaultArguments,
  children: 'Lorem Ipsum'
}

export default {
  title: 'Atoms/Content',
  component: Content
}
