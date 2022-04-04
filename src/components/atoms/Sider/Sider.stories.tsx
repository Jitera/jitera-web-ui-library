import { Story } from '@storybook/react'

import { JiteraSider, JiteraSiderProps } from './Sider.component'

const defaultArguments: JiteraSiderProps = {}

const SiderTemplate: Story<JiteraSiderProps> = (arguments_) => <JiteraSider {...arguments_} />

export const Default = SiderTemplate.bind({})
Default.args = {
  ...defaultArguments,
  children: 'Lorem Ipsum'
}

export default {
  title: 'Atoms/Sider',
  component: JiteraSider
}
