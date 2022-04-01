import { Story } from '@storybook/react'
import { JiteraSider, JiteraSiderProps } from './Sider.component'

const defaultArgs: JiteraSiderProps = {}

const SiderTemplate: Story<JiteraSiderProps> = (args) => <JiteraSider {...args} />

export const Default = SiderTemplate.bind({})
Default.args = {
  ...defaultArgs,
  children: 'Lorem Ipsum'
}

export default {
  title: 'Atoms/Sider',
  component: JiteraSider
}
