import { Story } from '@storybook/react'
import {
  JiteraConfigProvider,
  JiteraFooter,
  JiteraFooterProps
} from '@jitera/jitera-web-ui-library'

const defaultArguments: JiteraFooterProps = {}

const FooterTemplate: Story<JiteraFooterProps> = (arguments_) => (
  <JiteraConfigProvider>
    <JiteraFooter {...arguments_} />
  </JiteraConfigProvider>
)

export const Default = FooterTemplate.bind({})
Default.args = {
  ...defaultArguments,
  children: 'Lorem Ipsum'
}

export default {
  title: 'Atoms/Footer',
  component: JiteraFooter
}
