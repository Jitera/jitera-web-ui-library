import { Story } from '@storybook/react'

import { Text as JiteraText, TextTypeEnum, TextProps } from './Text.component'

const text = 'Jitera Automation Tool'

const defaultArguments = {
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
  textType: 'Text',
  children: text
}

export const Link = TextTemplate.bind({})
Link.args = {
  ...defaultArguments,
  textType: 'Link',
  children: text
}

export const H1 = TextTemplate.bind({})
H1.args = {
  ...defaultArguments,
  textType: 'H1',
  children: text
}

export const H2 = TextTemplate.bind({})
H2.args = {
  ...defaultArguments,
  textType: 'H2',
  children: text
}

export const H3 = TextTemplate.bind({})
H3.args = {
  ...defaultArguments,
  textType: 'H3',
  children: text
}

export const H4 = TextTemplate.bind({})
H4.args = {
  ...defaultArguments,
  textType: 'H4',
  children: text
}

export const H5 = TextTemplate.bind({})
H5.args = {
  ...defaultArguments,
  textType: 'H5',
  children: text
}

export const H6 = TextTemplate.bind({})
H6.args = {
  ...defaultArguments,
  textType: 'H6',
  children: text
}

export const B = TextTemplate.bind({})
B.args = {
  ...defaultArguments,
  textType: 'B',
  children: text
}

export const I = TextTemplate.bind({})
I.args = {
  ...defaultArguments,
  textType: 'I',
  children: text
}

export const Em = TextTemplate.bind({})
Em.args = {
  ...defaultArguments,
  textType: 'Em',
  children: text
}

export const U = TextTemplate.bind({})
U.args = {
  ...defaultArguments,
  textType: 'U',
  children: text
}

export const S = TextTemplate.bind({})
S.args = {
  ...defaultArguments,
  textType: 'S',
  children: text
}

export const Del = TextTemplate.bind({})
Del.args = {
  ...defaultArguments,
  textType: 'Del',
  children: text
}

export const Pre = TextTemplate.bind({})
Pre.args = {
  ...defaultArguments,
  textType: 'Pre',
  children: text
}

export const Code = TextTemplate.bind({})
Code.args = {
  ...defaultArguments,
  textType: 'Code',
  children: text
}

export const Blockquote = TextTemplate.bind({})
Blockquote.args = {
  ...defaultArguments,
  textType: 'Blockquote',
  children: text
}

export const Figcaption = TextTemplate.bind({})
Figcaption.args = {
  ...defaultArguments,
  textType: 'Figcaption',
  children: text
}

export const Cite = TextTemplate.bind({})
Cite.args = {
  ...defaultArguments,
  textType: 'Cite',
  children: text
}

export default {
  title: 'Atoms/Text',
  component: Text,
  argTypes: {
    textType: {
      description: 'Variant of the Text',
      control: {
        type: 'select',
        options: Object.values(TextTypeEnum)
      }
    }
  }
}
