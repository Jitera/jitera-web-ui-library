import { Story } from '@storybook/react'

import { JiteraPage, JiteraPageProps } from './Page.component'

const defaultArguments: JiteraPageProps = {}

const PageTemplate: Story<JiteraPageProps> = (arguments_) => <JiteraPage {...arguments_} />

export const Default = PageTemplate.bind({})
Default.args = {
  ...defaultArguments,
  children: 'Lorem Ipsum'
}

export default {
  title: 'Atoms/Page',
  component: JiteraPage
}
