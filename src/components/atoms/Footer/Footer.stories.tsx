import { Story } from '@storybook/react'

import { Footer, FooterProps } from './Footer.component'

const defaultArguments: FooterProps = {
  responsiveVisibility: [
    {
      value: 'desktop'
    },
    {
      value: 'tablet'
    },
    {
      value: 'mobile'
    }
  ]
}

const FooterTemplate: Story<FooterProps> = (arguments_) => <Footer {...arguments_} />

export const Default = FooterTemplate.bind({})
Default.args = {
  ...defaultArguments,
  children: 'Lorem Ipsum'
}

export default {
  title: 'Atoms/Footer',
  component: Footer
}
