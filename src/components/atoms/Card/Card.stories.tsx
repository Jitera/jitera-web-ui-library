import { Story } from '@storybook/react'

import { JiteraCard, JiteraCardProps } from './Card.component'

const defaultArguments: JiteraCardProps = {}

const CardTemplate: Story<JiteraCardProps> = (arguments_) => <JiteraCard {...arguments_} />

export const Default = CardTemplate.bind({})
Default.args = {
  ...defaultArguments,
  children: 'Lorem Ipsum'
}

export default {
  title: 'Atoms/Card',
  component: JiteraCard
}
