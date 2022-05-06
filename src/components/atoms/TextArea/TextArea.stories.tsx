import { Story } from '@storybook/react'

import { TextArea, TextAreaProps } from './TextArea.component'

const defaultArguments: TextAreaProps = {
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

const InputTemplate: Story<TextAreaProps> = (arguments_) => <TextArea {...arguments_} />

export const Default = InputTemplate.bind({})
Default.args = {
  ...defaultArguments
}

export default {
  title: 'Atoms/TextArea',
  component: TextArea
}
