import { Story } from '@storybook/react'

import { JiteraFooter, JiteraFooterProps } from './Footer.component'

const defaultArguments: JiteraFooterProps = {}

const FooterTemplate: Story<JiteraFooterProps> = (arguments_) => <JiteraFooter {...arguments_} />

export const Default = FooterTemplate.bind({})
Default.args = {
  ...defaultArguments,
  children: 'Lorem Ipsum'
}

export default {
  title: 'Atoms/Footer',
  component: JiteraFooter
}
