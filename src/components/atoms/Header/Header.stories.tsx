import { Story } from '@storybook/react'
import { JiteraHeader, JiteraHeaderProps } from './Header.component'

const defaultArgs: JiteraHeaderProps = {}

const HeaderTemplate: Story<JiteraHeaderProps> = (args) => <JiteraHeader {...args} />

export const Default = HeaderTemplate.bind({})
Default.args = {
  ...defaultArgs,
  children: 'Lorem Ipsum'
}

export default {
  title: 'Atoms/Header',
  component: JiteraHeader
}
