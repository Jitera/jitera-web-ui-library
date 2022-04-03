import { Story } from '@storybook/react'
import {
  ThemeProvider,
  JiteraTypography,
  TypographyVariantType,
  JiteraTypographyProps
} from '@jitera/jitera-web-ui-library'

const text = 'Jitera Automation Tool'

const defaultArguments = {
  variant: 'Text'
} as JiteraTypographyProps

const TypographyTemplate: Story<JiteraTypographyProps> = (arguments_) => (
  <ThemeProvider>
    <JiteraTypography {...arguments_} />
  </ThemeProvider>
)

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
        options: ['1', '2', '3', '4', '5']
      }
    }
  }
}
