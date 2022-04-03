import { Story } from '@storybook/react'
import { ThemeProvider, JiteraCard, JiteraCardProps } from '@jitera/jitera-web-ui-library'

const defaultArguments: JiteraCardProps = {}

const CardTemplate: Story<JiteraCardProps> = (arguments_) => (
  <ThemeProvider>
    <JiteraCard {...arguments_} />
  </ThemeProvider>
)

export const Default = CardTemplate.bind({})
Default.args = {
  ...defaultArguments,
  children: 'Lorem Ipsum'
}

export default {
  title: 'Atoms/Card',
  component: JiteraCard
}
