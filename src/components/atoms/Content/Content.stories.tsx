import { Story } from '@storybook/react'
import { JiteraContent, JiteraContentProps } from './Content.component'

const defaultArgs: JiteraContentProps = {}

const ContentTemplate: Story<JiteraContentProps> = (args) => <JiteraContent {...args} />

export const Default = ContentTemplate.bind({})
Default.args = {
  ...defaultArgs,
  children: 'Lorem Ipsum'
}

export default {
  title: 'Atoms/Content',
  component: JiteraContent
}
