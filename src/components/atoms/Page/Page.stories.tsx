import { Story } from '@storybook/react'

import { Page, PageProps } from './Page.component'

const defaultArguments: PageProps = {}

const PageTemplate: Story<PageProps> = (arguments_) => <Page {...arguments_} />

export const Default = PageTemplate.bind({})
Default.args = {
  ...defaultArguments,
  children: 'Lorem Ipsum'
}

export default {
  title: 'Atoms/Page',
  component: Page
}
