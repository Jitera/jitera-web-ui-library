import { Story } from '@storybook/react'
import { JiteraConfigProvider, JiteraPage, JiteraPageProps } from '@jitera/jitera-web-ui-library'

const defaultArguments: JiteraPageProps = {}

const PageTemplate: Story<JiteraPageProps> = (arguments_) => (
  <JiteraConfigProvider>
    <JiteraPage {...arguments_} />
  </JiteraConfigProvider>
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
