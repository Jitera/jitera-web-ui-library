import { Story } from '@storybook/react'

import { Text as JiteraText, TextVariantType, TextProps } from './Text.component'

const text = 'Jitera Automation Tool'

const defaultArguments = {
  variant: 'Text'
} as TextProps

const TextTemplate: Story<TextProps> = (arguments_) => <JiteraText {...arguments_} />

export const Text = TextTemplate.bind({})
Text.args = {
  ...defaultArguments,
  variant: 'Text' as TextVariantType,
  children: text,
  type: 'danger'
}

export const Title = TextTemplate.bind({})
Title.args = {
  ...defaultArguments,
  variant: 'Title' as TextVariantType,
  level: 2,
  children: text
}

export const Link = TextTemplate.bind({})
Link.args = {
  ...defaultArguments,
  variant: 'Link' as TextVariantType,
  children: text
}

export const Paragraph = TextTemplate.bind({})
Paragraph.args = {
  ...defaultArguments,
  variant: 'Paragraph' as TextVariantType,
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
        options: ['Text', 'Title', 'Link', 'Paragraph']
      }
    },
    type: {
      description: 'Type of Text loading icon ',
      control: {
        type: 'select',
        options: ['secondary', 'success', 'warning', 'danger', 'default']
      }
    },
    level: {
      description: 'Level(Size) of text',
      control: {
        type: 'select',
        options: ['1', '2', '3', '4', '5']
      }
    }
  }
}
