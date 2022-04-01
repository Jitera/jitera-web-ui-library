import { Story } from '@storybook/react'
import { JiteraCard, JiteraCardProps } from './Card.component'

const defaultArgs: JiteraCardProps = {}

const CardTemplate: Story<JiteraCardProps> = (args) => <JiteraCard {...args} />

export const Default = CardTemplate.bind({})
Default.args = {
  ...defaultArgs,
  children: 'Lorem Ipsum'
}

export default {
  title: 'Atoms/Card',
  component: JiteraCard
}
