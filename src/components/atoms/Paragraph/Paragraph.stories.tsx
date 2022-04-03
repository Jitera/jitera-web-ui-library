import { Story } from '@storybook/react'

import { JiteraParagraph, JiteraParagraphProps } from './Paragraph.component'

const defaultArguments: JiteraParagraphProps = {}

const ParagraphTemplate: Story<JiteraParagraphProps> = (arguments_) => (
  <JiteraParagraph {...arguments_} />
)

export const Default = ParagraphTemplate.bind({})
Default.args = {
  ...defaultArguments,
  children: 'Lorem Ipsum'
}

export default {
  title: 'Atoms/Paragraph',
  component: JiteraParagraph
}
