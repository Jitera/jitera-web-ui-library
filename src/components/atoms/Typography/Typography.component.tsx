import { forwardRef } from 'react'
import { Typography } from 'antd'
import { TextProps } from 'antd/lib/typography/Text'
import { LinkProps } from 'antd/lib/typography/Link'
import { TitleProps } from 'antd/lib/typography/Title'
import { ParagraphProps } from 'antd/lib/typography/Paragraph'

export enum VariantType {
  Title = 'Title',
  Link = 'Link',
  Text = 'Text',
  Paragraph = 'Paragraph'
}

export type TypographyProps = TextProps & LinkProps & TitleProps & ParagraphProps

export interface JiteraTypographyProps extends TypographyProps {
  variant?: VariantType
}

const JiteraTypography = forwardRef<HTMLElement, JiteraTypographyProps>((props, ref) => {
  const { variant = VariantType.Text, ...rest } = props

  const Component = Typography[variant]

  return <Component {...rest} ref={ref} />
})

export { JiteraTypography }
