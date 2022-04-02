import { Story } from '@storybook/react'
import { JiteraText, JiteraTextProps } from './Text.component'

const defaultArgs: JiteraTextProps = {}

const TextTemplate: Story<JiteraTextProps> = (args) => <JiteraText {...args} />

export const Default = TextTemplate.bind({})
Default.args = {
  ...defaultArgs,
  children: 'Lorem Ipsum'
}

export default {
  title: 'Atoms/Text',
  component: JiteraText
}
