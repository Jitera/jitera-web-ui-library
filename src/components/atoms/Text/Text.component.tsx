import React from 'react'

import { PreviewProps } from '@src/types/preview'

import VisibilityComponent from '@components/common/ResponsiveVisibility/ResponsiveVisibility.component'

export enum TextTypeEnum {
  Link = 'Link',
  Text = 'Text'
}

export type BaseTextProps = React.HTMLAttributes<HTMLDivElement>

const BaseText = React.forwardRef<HTMLDivElement, BaseTextProps>(({ children, ...props }, ref) => {
  return (
    <div {...props} ref={ref}>
      {children}
    </div>
  )
})

export type BaseLinkProps = React.AnchorHTMLAttributes<HTMLAnchorElement>

const BaseLink = React.forwardRef<HTMLAnchorElement, BaseLinkProps>(
  ({ children, ...props }, ref) => {
    return (
      <a {...props} ref={ref}>
        {children}
      </a>
    )
  }
)

const ComponentMapping = {
  [TextTypeEnum.Text]: BaseText,
  [TextTypeEnum.Link]: BaseLink
}

export type TextProps = PreviewProps &
  BaseTextProps &
  BaseLinkProps & {
    textType?: TextTypeEnum
  }

const Text = React.forwardRef<HTMLDivElement & HTMLAnchorElement, TextProps>((props, ref) => {
  const { textType = TextTypeEnum.Text, responsiveVisibility, isPreview, ...rest } = props

  const Component = ComponentMapping[textType]

  return (
    <VisibilityComponent visibility={responsiveVisibility} isPreview={isPreview} isInline>
      <Component {...rest} ref={ref} />
    </VisibilityComponent>
  )
})

export { Text }
