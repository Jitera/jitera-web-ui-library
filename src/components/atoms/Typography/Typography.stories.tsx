import { Story } from '@storybook/react'

import { Typography, TypographyVariantType, TypographyProps } from './Typography.component'

const text = 'Jitera Automation Tool'

const defaultArguments = {
  variant: 'Text'
} as TypographyProps

const TypographyTemplate: Story<TypographyProps> = (arguments_) => <Typography {...arguments_} />

export const Text = TypographyTemplate.bind({})
Text.args = {
  ...defaultArguments,
  variant: 'Text' as TypographyVariantType,
  children: text,
  type: 'danger'
}

export const Title = TypographyTemplate.bind({})
Title.args = {
  ...defaultArguments,
  variant: 'Title' as TypographyVariantType,
  level: 2,
  children: text
}

export const Link = TypographyTemplate.bind({})
Link.args = {
  ...defaultArguments,
  variant: 'Link' as TypographyVariantType,
  children: text
}

export const Paragraph = TypographyTemplate.bind({})
Paragraph.args = {
  ...defaultArguments,
  variant: 'Paragraph' as TypographyVariantType,
  children: text
}

export default {
  title: 'Atoms/Typography',
  component: Typography,
  argTypes: {
    variant: {
      description: 'Variant of the Typography',
      control: {
        type: 'select',
        options: ['Text', 'Title', 'Link', 'Paragraph']
      }
    },
    type: {
      description: 'Type of typography loading icon ',
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
