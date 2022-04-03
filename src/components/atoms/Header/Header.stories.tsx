import { Story } from '@storybook/react'
import {
  JiteraConfigProvider,
  JiteraHeader,
  JiteraHeaderProps
} from '@jitera/jitera-web-ui-library'

const defaultArguments: JiteraHeaderProps = {}

const HeaderTemplate: Story<JiteraHeaderProps> = (arguments_) => (
  <JiteraConfigProvider>
    <JiteraHeader {...arguments_} />
  </JiteraConfigProvider>
)

export const Default = HeaderTemplate.bind({})
Default.args = {
  ...defaultArguments,
  children: 'Lorem Ipsum'
}

export default {
  title: 'Atoms/Header',
  component: JiteraHeader
}
