import React from 'react'

import { PreviewProps } from '@src/types/preview'

import { useResponsiveVisibility } from '@src/hooks/responsiveVisibility'

export enum TextTypeEnum {
  Link = 'Link',
  Text = 'Text',
  H1 = 'H1',
  H2 = 'H2',
  H3 = 'H3',
  H4 = 'H4',
  H5 = 'H5',
  H6 = 'H6',
  B = 'B',
  I = 'I',
  Em = 'Em',
  U = 'U',
  S = 'S',
  Del = 'Del',
  Pre = 'Pre',
  Code = 'Code',
  Blockquote = 'Blockquote',
  Figcaption = 'Figcaption',
  Cite = 'Cite'
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

export type BaseH1Props = React.HTMLAttributes<HTMLHeadingElement>

const BaseH1 = React.forwardRef<HTMLHeadingElement, BaseH1Props>(({ children, ...props }, ref) => {
  return (
    <h1 {...props} ref={ref}>
      {children}
    </h1>
  )
})

export type BaseH2Props = React.HTMLAttributes<HTMLHeadingElement>

const BaseH2 = React.forwardRef<HTMLHeadingElement, BaseH2Props>(({ children, ...props }, ref) => {
  return (
    <h2 {...props} ref={ref}>
      {children}
    </h2>
  )
})

export type BaseH3Props = React.HTMLAttributes<HTMLHeadingElement>

const BaseH3 = React.forwardRef<HTMLHeadingElement, BaseH3Props>(({ children, ...props }, ref) => {
  return (
    <h3 {...props} ref={ref}>
      {children}
    </h3>
  )
})

export type BaseH4Props = React.HTMLAttributes<HTMLHeadingElement>

const BaseH4 = React.forwardRef<HTMLHeadingElement, BaseH4Props>(({ children, ...props }, ref) => {
  return (
    <h4 {...props} ref={ref}>
      {children}
    </h4>
  )
})

export type BaseH5Props = React.HTMLAttributes<HTMLHeadingElement>

const BaseH5 = React.forwardRef<HTMLHeadingElement, BaseH5Props>(({ children, ...props }, ref) => {
  return (
    <h5 {...props} ref={ref}>
      {children}
    </h5>
  )
})

export type BaseH6Props = React.HTMLAttributes<HTMLHeadingElement>

const BaseH6 = React.forwardRef<HTMLHeadingElement, BaseH3Props>(({ children, ...props }, ref) => {
  return (
    <h6 {...props} ref={ref}>
      {children}
    </h6>
  )
})

export type BaseBProps = React.HTMLAttributes<HTMLElement>

const BaseB = React.forwardRef<HTMLElement, BaseBProps>(({ children, ...props }, ref) => {
  return (
    <b {...props} ref={ref}>
      {children}
    </b>
  )
})

export type BaseIProps = React.HTMLAttributes<HTMLElement>

const BaseI = React.forwardRef<HTMLElement, BaseIProps>(({ children, ...props }, ref) => {
  return (
    <i {...props} ref={ref}>
      {children}
    </i>
  )
})

export type BaseEmProps = React.HTMLAttributes<HTMLElement>

const BaseEm = React.forwardRef<HTMLElement, BaseEmProps>(({ children, ...props }, ref) => {
  return (
    <em {...props} ref={ref}>
      {children}
    </em>
  )
})

export type BaseUProps = React.HTMLAttributes<HTMLElement>

const BaseU = React.forwardRef<HTMLElement, BaseUProps>(({ children, ...props }, ref) => {
  return (
    <u {...props} ref={ref}>
      {children}
    </u>
  )
})

export type BaseSProps = React.HTMLAttributes<HTMLElement>

const BaseS = React.forwardRef<HTMLElement, BaseSProps>(({ children, ...props }, ref) => {
  return (
    <s {...props} ref={ref}>
      {children}
    </s>
  )
})

export type BaseDelProps = React.HTMLAttributes<HTMLModElement>

const BaseDel = React.forwardRef<HTMLModElement, BaseDelProps>(({ children, ...props }, ref) => {
  return (
    <del {...props} ref={ref}>
      {children}
    </del>
  )
})

export type BasePreProps = React.HTMLAttributes<HTMLPreElement>

const BasePre = React.forwardRef<HTMLPreElement, BaseUProps>(({ children, ...props }, ref) => {
  return (
    <pre {...props} ref={ref}>
      {children}
    </pre>
  )
})

export type BaseCodeProps = React.HTMLAttributes<HTMLElement>

const BaseCode = React.forwardRef<HTMLElement, BaseCodeProps>(({ children, ...props }, ref) => {
  return (
    <code {...props} ref={ref}>
      {children}
    </code>
  )
})

export type BaseBlockquoteProps = React.HTMLAttributes<HTMLQuoteElement>

const BaseBlockquote = React.forwardRef<HTMLQuoteElement, BaseUProps>(
  ({ children, ...props }, ref) => {
    return (
      <blockquote {...props} ref={ref}>
        {children}
      </blockquote>
    )
  }
)

export type BaseFigcaptionProps = React.HTMLAttributes<HTMLElement>

const BaseFigcaption = React.forwardRef<HTMLElement, BaseFigcaptionProps>(
  ({ children, ...props }, ref) => {
    return (
      <figcaption {...props} ref={ref}>
        {children}
      </figcaption>
    )
  }
)

export type BaseCiteProps = React.HTMLAttributes<HTMLElement>

const BaseCite = React.forwardRef<HTMLElement, BaseCiteProps>(({ children, ...props }, ref) => {
  return (
    <cite {...props} ref={ref}>
      {children}
    </cite>
  )
})

const ComponentMapping = {
  [TextTypeEnum.Text]: BaseText,
  [TextTypeEnum.Link]: BaseLink,
  [TextTypeEnum.H1]: BaseH1,
  [TextTypeEnum.H2]: BaseH2,
  [TextTypeEnum.H3]: BaseH3,
  [TextTypeEnum.H4]: BaseH4,
  [TextTypeEnum.H5]: BaseH5,
  [TextTypeEnum.H6]: BaseH6,
  [TextTypeEnum.B]: BaseB,
  [TextTypeEnum.I]: BaseI,
  [TextTypeEnum.Em]: BaseEm,
  [TextTypeEnum.U]: BaseU,
  [TextTypeEnum.S]: BaseS,
  [TextTypeEnum.Del]: BaseDel,
  [TextTypeEnum.Pre]: BasePre,
  [TextTypeEnum.Code]: BaseCode,
  [TextTypeEnum.Blockquote]: BaseBlockquote,
  [TextTypeEnum.Figcaption]: BaseFigcaption,
  [TextTypeEnum.Cite]: BaseCite
}

export type TextProps = PreviewProps &
  BaseTextProps &
  BaseLinkProps &
  BaseH1Props &
  BaseH2Props &
  BaseH3Props &
  BaseH4Props &
  BaseH5Props &
  BaseH6Props &
  BaseBProps &
  BaseIProps &
  BaseEmProps &
  BaseUProps &
  BaseSProps &
  BaseDelProps &
  BasePreProps &
  BaseCodeProps &
  BaseBlockquoteProps &
  BaseFigcaptionProps &
  BaseCiteProps & {
    textType?: `${TextTypeEnum}`
  }

const Text = React.forwardRef<
  HTMLDivElement &
    HTMLAnchorElement &
    HTMLHeadingElement &
    HTMLModElement &
    HTMLPreElement &
    HTMLQuoteElement,
  TextProps
>((props, ref) => {
  const { textType = TextTypeEnum.Text, responsiveVisibility, className, ...rest } = props

  const Component = ComponentMapping[textType]
  const { classNames } = useResponsiveVisibility({ className, responsiveVisibility })

  return <Component {...rest} className={classNames} ref={ref} />
})

export { Text }
