import { Story } from '@storybook/react'
import { JiteraConfigProvider, JiteraSider, JiteraSiderProps } from '@jitera/jitera-web-ui-library'

const defaultArguments: JiteraSiderProps = {}

const SiderTemplate: Story<JiteraSiderProps> = (arguments_) => (
  <JiteraConfigProvider>
    <JiteraSider {...arguments_} />
  </JiteraConfigProvider>
)

export const Default = SiderTemplate.bind({})
Default.args = {
  ...defaultArguments,
  children: 'Lorem Ipsum'
}

export default {
  title: 'Atoms/Sider',
  component: JiteraSider
}
