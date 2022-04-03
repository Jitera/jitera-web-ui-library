import { Story } from '@storybook/react'
import {
  JiteraConfigProvider,
  JiteraContent,
  JiteraContentProps
} from '@jitera/jitera-web-ui-library'

const defaultArguments: JiteraContentProps = {}

const ContentTemplate: Story<JiteraContentProps> = (arguments_) => (
  <JiteraConfigProvider>
    <JiteraContent {...arguments_} />
  </JiteraConfigProvider>
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
