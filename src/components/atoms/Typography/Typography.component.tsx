import React from 'react'
import { Typography } from 'antd'
import { TextProps } from 'antd/lib/typography/Text'
import { LinkProps } from 'antd/lib/typography/Link'
import { TitleProps } from 'antd/lib/typography/Title'
import { ParagraphProps } from 'antd/lib/typography/Paragraph'

import { PreviewProps } from '@/types/preview'

import { JiteraTitle } from '../Title/Title.component'
import { JiteraText } from '../Text/Text.component'
import { JiteraParagraph } from '../Paragraph/Paragraph.component'

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

export type TypographyProps = TextProps & LinkProps & TitleProps & ParagraphProps

export const TYPOGRAPHY_VARIANT_TYPE = {
  [TypographyVariantType.Title]: JiteraTitle,
  [TypographyVariantType.Text]: JiteraText,
  [TypographyVariantType.Paragraph]: JiteraParagraph,
  [TypographyVariantType.Link]: Typography.Link
}

export interface JiteraTypographyProps extends PreviewProps, TypographyProps {
  variant?: TypographyVariantType
}

const JiteraTypography = React.forwardRef<TypographyElement, JiteraTypographyProps>(
  (props, ref) => {
    const { variant = TypographyVariantType.Text, ...rest } = props

    const Component = TYPOGRAPHY_VARIANT_TYPE[variant]

    return <Component {...rest} ref={ref} />
  }
)

export { JiteraTypography }
