import { Story } from '@storybook/react'
import { JiteraParagraph, JiteraParagraphProps } from './Paragraph.component'

const defaultArgs: JiteraParagraphProps = {}

const ParagraphTemplate: Story<JiteraParagraphProps> = (args) => <JiteraParagraph {...args} />

export const Default = ParagraphTemplate.bind({})
Default.args = {
  ...defaultArgs,
  children: 'Lorem Ipsum'
}

export default {
  title: 'Atoms/Paragraph',
  component: JiteraParagraph
}
