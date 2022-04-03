import { Story } from '@storybook/react'
import {
  JiteraConfigProvider,
  JiteraLayout,
  JiteraLayoutProps
} from '@jitera/jitera-web-ui-library'

const defaultArguments: JiteraLayoutProps = {}

const LayoutTemplate: Story<JiteraLayoutProps> = (arguments_) => (
  <JiteraConfigProvider>
    <JiteraLayout {...arguments_} />
  </JiteraConfigProvider>
)

export const Default = LayoutTemplate.bind({})
Default.args = {
  ...defaultArguments,
  children: 'Lorem Ipsum'
}

export default {
  title: 'Atoms/Layout',
  component: JiteraLayout
}
