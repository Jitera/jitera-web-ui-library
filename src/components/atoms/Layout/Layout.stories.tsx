import { Story } from '@storybook/react'
import { JiteraLayout, JiteraLayoutProps } from '@jitera/jitera-web-ui-library'

const defaultArguments: JiteraLayoutProps = {}

const LayoutTemplate: Story<JiteraLayoutProps> = (arguments_) => <JiteraLayout {...arguments_} />

export const Default = LayoutTemplate.bind({})
Default.args = {
  ...defaultArguments,
  children: 'Lorem Ipsum'
}

export default {
  title: 'Atoms/Layout',
  component: JiteraLayout
}
