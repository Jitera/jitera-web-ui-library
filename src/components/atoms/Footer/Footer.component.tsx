import React from 'react'
import { BasicProps as AntBasicProps } from 'antd/lib/layout/layout'

import { ComponentProps } from '@src/types/component'

import { PreviewProps } from '@src/types/preview'

import { useResponsiveVisibility } from '@src/hooks/responsiveVisibility'

export interface FooterProps extends PreviewProps, ComponentProps<AntBasicProps> {}

const Footer = React.forwardRef<HTMLDivElement, FooterProps>((props, ref) => {
  const { children, style, responsiveVisibility, className, ...rest } = props
  const { classNames } = useResponsiveVisibility({ className, responsiveVisibility })
  return (
    <footer {...rest} className={classNames} style={style} ref={ref}>
      {children}
    </footer>
  )
})

export { Footer }
