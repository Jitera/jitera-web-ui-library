import React from 'react'
import { Footer as AntFooter, BasicProps as AntBasicProps } from 'antd/lib/layout/layout'

import { PreviewProps } from '@/types/preview'
import { ComponentProps } from '@/types/component'

export interface FooterProps extends PreviewProps, ComponentProps<AntBasicProps> {}

const Footer = React.forwardRef<HTMLDivElement, FooterProps>((props, ref) => {
  const { children, style, ...rest } = props
  return (
    <AntFooter
      {...rest}
      prefixCls="jitera-layout-footer"
      style={{ width: '100%', ...style }}
      ref={ref}
    >
      {children}
    </AntFooter>
  )
})

export { Footer }
