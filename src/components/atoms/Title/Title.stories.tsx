import { Story } from '@storybook/react'

import { JiteraTitle, JiteraTitleProps } from './Title.component'

const defaultArguments: JiteraTitleProps = {}

const TitleTemplate: Story<JiteraTitleProps> = (arguments_) => <JiteraTitle {...arguments_} />

export const Default = TitleTemplate.bind({})
Default.args = {
  ...defaultArguments,
  children: 'Lorem Ipsum'
}

export default {
  title: 'Atoms/Title',
  component: JiteraTitle
}
