import React from 'react'
import { Typography as AntTypography } from 'antd'
import { TextProps as AntTextProps } from 'antd/lib/typography/Text'
import { LinkProps as AntLinkProps } from 'antd/lib/typography/Link'
import { TitleProps as AntTitleProps } from 'antd/lib/typography/Title'
import { ParagraphProps as AntParagraphProps } from 'antd/lib/typography/Paragraph'

import { PreviewProps } from '@/types/preview'
import { ComponentProps } from '@/types/component'

export enum TypographyVariantType {
  Title = 'Title',
  Link = 'Link',
  Text = 'Text',
  Paragraph = 'Paragraph'
}

export type TypographyElement = HTMLHeadingElement &
  HTMLSpanElement &
  HTMLParagraphElement &
  HTMLElement

export type CombinedTypographyProps = ComponentProps<AntTextProps> &
  ComponentProps<AntLinkProps> &
  ComponentProps<AntTitleProps> &
  ComponentProps<AntParagraphProps>

export interface TypographyProps extends PreviewProps, CombinedTypographyProps {
  variant?: TypographyVariantType
}

const Typography = React.forwardRef<TypographyElement, TypographyProps>((props, ref) => {
  const { variant = TypographyVariantType.Text, ...rest } = props

  const Component = AntTypography[variant]

  return <Component {...rest} ref={ref} />
})

export { Typography }
