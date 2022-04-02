import { Story } from '@storybook/react'
import { JiteraTitle, JiteraTitleProps } from './Title.component'

const defaultArgs: JiteraTitleProps = {}

const TitleTemplate: Story<JiteraTitleProps> = (args) => <JiteraTitle {...args} />

export const Default = TitleTemplate.bind({})
Default.args = {
  ...defaultArgs,
  children: 'Lorem Ipsum'
}

export default {
  title: 'Atoms/Title',
  component: JiteraTitle
}
