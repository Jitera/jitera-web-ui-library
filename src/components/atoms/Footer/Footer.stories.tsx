import { Story } from '@storybook/react'
import { JiteraFooter, JiteraFooterProps } from './Footer.component'

const defaultArgs: JiteraFooterProps = {}

const FooterTemplate: Story<JiteraFooterProps> = (args) => <JiteraFooter {...args} />

export const Default = FooterTemplate.bind({})
Default.args = {
  ...defaultArgs,
  children: 'Lorem Ipsum'
}

export default {
  title: 'Atoms/Footer',
  component: JiteraFooter
}
