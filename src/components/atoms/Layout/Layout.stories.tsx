import { Story } from '@storybook/react'
import { JiteraLayout, JiteraLayoutProps } from './Layout.component'

const defaultArgs: JiteraLayoutProps = {}

const LayoutTemplate: Story<JiteraLayoutProps> = (args) => <JiteraLayout {...args} />

export const Default = LayoutTemplate.bind({})
Default.args = {
  ...defaultArgs,
  children: 'Lorem Ipsum'
}

export default {
  title: 'Atoms/Layout',
  component: JiteraLayout
}
