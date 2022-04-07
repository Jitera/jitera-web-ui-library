import React from 'react'
import { Typography as AntTypography } from 'antd'
import { TextProps as AntTextProps } from 'antd/lib/typography/Text'
import { LinkProps as AntLinkProps } from 'antd/lib/typography/Link'
import { TitleProps as AntTitleProps } from 'antd/lib/typography/Title'
import { ParagraphProps as AntParagraphProps } from 'antd/lib/typography/Paragraph'

import { PreviewProps } from '@/types/preview'
import { ComponentProps } from '@/types/component'

export enum TextVariantType {
  Title = 'Title',
  Link = 'Link',
  Text = 'Text',
  Paragraph = 'Paragraph'
}

export type TextElement = HTMLHeadingElement & HTMLSpanElement & HTMLParagraphElement & HTMLElement

export type CombinedTextProps = ComponentProps<AntTextProps> &
  ComponentProps<AntLinkProps> &
  ComponentProps<AntTitleProps> &
  ComponentProps<AntParagraphProps>

export interface TextProps extends PreviewProps, CombinedTextProps {
  variant?: TextVariantType
}

const Text = React.forwardRef<TextElement, TextProps>((props, ref) => {
  const { variant = TextVariantType.Text, ...rest } = props

  const Component = AntTypography[variant]

  return <Component {...rest} ref={ref} />
})

export { Text }
