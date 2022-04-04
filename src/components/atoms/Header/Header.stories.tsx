import { Story } from '@storybook/react'

import { JiteraHeader, JiteraHeaderProps } from './Header.component'

const defaultArguments: JiteraHeaderProps = {}

const HeaderTemplate: Story<JiteraHeaderProps> = (arguments_) => <JiteraHeader {...arguments_} />

export const Default = HeaderTemplate.bind({})
Default.args = {
  ...defaultArguments,
  children: 'Lorem Ipsum'
}

export default {
  title: 'Atoms/Header',
  component: JiteraHeader
}
