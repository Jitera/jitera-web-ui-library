import { Story } from '@storybook/react'

import { JiteraContent, JiteraContentProps } from './Content.component'

const defaultArguments: JiteraContentProps = {}

const ContentTemplate: Story<JiteraContentProps> = (arguments_) => <JiteraContent {...arguments_} />

export const Default = ContentTemplate.bind({})
Default.args = {
  ...defaultArguments,
  children: 'Lorem Ipsum'
}

export default {
  title: 'Atoms/Content',
  component: JiteraContent
}
