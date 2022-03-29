import { Story } from '@storybook/react'
import { JiteraTypography, VariantType, JiteraTypographyProps } from './Typography.component'

const defaultArgs = {
  variant: 'Text'
} as JiteraTypographyProps

const TypographyTemplate: Story<JiteraTypographyProps> = (args) => <JiteraTypography {...args} />

export const Text = TypographyTemplate.bind({})
Text.args = {
  ...defaultArgs,
  variant: 'Text' as VariantType,
  children: 'Jitera Automation Tool',
  type: 'danger'
}

export const Title = TypographyTemplate.bind({})
Title.args = {
  ...defaultArgs,
  variant: 'Title' as VariantType,
  level: 2,
  children: 'Jitera Automation Tool'
}

export const Link = TypographyTemplate.bind({})
Link.args = {
  ...defaultArgs,
  variant: 'Link' as VariantType,
  children: 'Jitera Automation Tool'
}

export const Paragraph = TypographyTemplate.bind({})
Paragraph.args = {
  ...defaultArgs,
  variant: 'Paragraph' as VariantType,
  children: 'Jitera Automation Tool'
}

export default {
  title: 'Atoms/Typography',
  component: JiteraTypography,
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
        options: ['2', '3', '4', '5', '6']
      }
    }
  }
}
