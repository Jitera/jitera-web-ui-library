import { Story } from '@storybook/react'
import { JiteraPage, JiteraPageProps } from './Page.component'

const defaultArgs: JiteraPageProps = {}

const PageTemplate: Story<JiteraPageProps> = (args) => <JiteraPage {...args} />

export const Default = PageTemplate.bind({})
Default.args = {
  ...defaultArgs,
  children: 'Lorem Ipsum'
}

export default {
  title: 'Atoms/Page',
  component: JiteraPage
}
