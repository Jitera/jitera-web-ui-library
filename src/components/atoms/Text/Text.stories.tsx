import { Story } from '@storybook/react'

import { JiteraText, JiteraTextProps } from './Text.component'

const defaultArguments: JiteraTextProps = {}

const TextTemplate: Story<JiteraTextProps> = (arguments_) => <JiteraText {...arguments_} />

export const Default = TextTemplate.bind({})
Default.args = {
  ...defaultArguments,
  children: 'Lorem Ipsum'
}

export default {
  title: 'Atoms/Text',
  component: JiteraText
}
