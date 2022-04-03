import { Story } from '@storybook/react'
import { ThemeProvider, JiteraPage, JiteraPageProps } from '@jitera/jitera-web-ui-library'

const defaultArguments: JiteraPageProps = {}

const PageTemplate: Story<JiteraPageProps> = (arguments_) => (
  <ThemeProvider>
    <JiteraPage {...arguments_} />
  </ThemeProvider>
)

export const Default = PageTemplate.bind({})
Default.args = {
  ...defaultArguments,
  children: 'Lorem Ipsum'
}

export default {
  title: 'Atoms/Page',
  component: JiteraPage
}
