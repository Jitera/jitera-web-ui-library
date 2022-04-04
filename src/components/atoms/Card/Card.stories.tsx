import { Story } from '@storybook/react'

import { Card, CardProps } from './Card.component'

const defaultArguments: CardProps = {}

const CardTemplate: Story<CardProps> = (arguments_) => <Card {...arguments_} />

export const Default = CardTemplate.bind({})
Default.args = {
  ...defaultArguments,
  children: 'Lorem Ipsum'
}

export default {
  title: 'Atoms/Card',
  component: Card
}
