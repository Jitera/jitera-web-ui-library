import React from 'react'

import { PreviewProps } from '@src/types/preview'

import { useResponsiveVisibility } from '@src/hooks/responsiveVisibility'

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
  const { textType = TextTypeEnum.Text, responsiveVisibility, className, ...rest } = props

  const Component = ComponentMapping[textType]
  const { classNames } = useResponsiveVisibility({ className, responsiveVisibility })

  return <Component {...rest} className={classNames} ref={ref} />
})

export { Text }
