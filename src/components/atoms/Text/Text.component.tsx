import React from 'react'
import { Typography as AntTypography } from 'antd'
import { TextProps as AntTextProps } from 'antd/lib/typography/Text'
import { LinkProps as AntLinkProps } from 'antd/lib/typography/Link'
import { TitleProps as AntTitleProps } from 'antd/lib/typography/Title'
import { ParagraphProps as AntParagraphProps } from 'antd/lib/typography/Paragraph'

import { ComponentProps } from '@src/types/component'

import { PreviewProps } from '@src/types/preview'

import VisibilityComponent from '@components/common/ResponsiveVisibility/ResponsiveVisibility.component'

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
  const { variant = TextVariantType.Text, responsiveVisibility, isPreview, ...rest } = props

  const Component = AntTypography[variant]

  return (
    <VisibilityComponent visibility={responsiveVisibility} isPreview={isPreview}>
      <Component {...rest} ref={ref} />
    </VisibilityComponent>
  )
})

export { Text }
