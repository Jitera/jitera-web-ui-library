import { Story } from '@storybook/react'
import { ThemeProvider, JiteraContent, JiteraContentProps } from '@jitera/jitera-web-ui-library'

const defaultArguments: JiteraContentProps = {}

const ContentTemplate: Story<JiteraContentProps> = (arguments_) => (
  <ThemeProvider>
    <JiteraContent {...arguments_} />
  </ThemeProvider>
)

export const Default = ContentTemplate.bind({})
Default.args = {
  ...defaultArguments,
  children: 'Lorem Ipsum'
}

export default {
  title: 'Atoms/Content',
  component: JiteraContent
}
