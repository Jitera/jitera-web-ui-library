import { Story } from '@storybook/react'

import { Text as JiteraText, TextTypeEnum, TextProps } from './Text.component'

const text = 'Jitera Automation Tool'

const defaultArguments = {
  variant: 'Text',
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
} as TextProps

const TextTemplate: Story<TextProps> = (arguments_) => <JiteraText {...arguments_} />

export const Text = TextTemplate.bind({})
Text.args = {
  ...defaultArguments,
  textType: 'Text' as TextTypeEnum,
  children: text
}

export const Link = TextTemplate.bind({})
Link.args = {
  ...defaultArguments,
  textType: 'Link' as TextTypeEnum,
  children: text
}

export default {
  title: 'Atoms/Text',
  component: Text,
  argTypes: {
    variant: {
      description: 'Variant of the Text',
      control: {
        type: 'select',
        options: ['Text', 'Link']
      }
    }
  }
}
