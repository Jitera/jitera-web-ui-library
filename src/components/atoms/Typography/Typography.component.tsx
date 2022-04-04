import React from 'react'
import { Typography } from 'antd'
import { TextProps } from 'antd/lib/typography/Text'
import { LinkProps } from 'antd/lib/typography/Link'
import { TitleProps } from 'antd/lib/typography/Title'
import { ParagraphProps } from 'antd/lib/typography/Paragraph'

import { PreviewProps } from '@/types/preview'
import { JiteraComponentProps } from '@/types/component'

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

export type TypographyProps = JiteraComponentProps<TextProps> &
  JiteraComponentProps<LinkProps> &
  JiteraComponentProps<TitleProps> &
  JiteraComponentProps<ParagraphProps>

export interface JiteraTypographyProps extends PreviewProps, TypographyProps {
  variant?: TypographyVariantType
}

const JiteraTypography = React.forwardRef<TypographyElement, JiteraTypographyProps>(
  (props, ref) => {
    const { variant = TypographyVariantType.Text, ...rest } = props

    const Component = Typography[variant]

    return <Component {...rest} ref={ref} />
  }
)

export { JiteraTypography }
