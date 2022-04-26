import React from 'react'
import { Footer as AntFooter, BasicProps as AntBasicProps } from 'antd/lib/layout/layout'

import { ComponentProps } from '@src/types/component'

import { PreviewProps } from '@src/types/preview'

import VisibilityComponent from '@components/common/ResponsiveVisibility/ResponsiveVisibility.component'

export interface FooterProps extends PreviewProps, ComponentProps<AntBasicProps> {}

const Footer = React.forwardRef<HTMLDivElement, FooterProps>((props, ref) => {
  const { children, style, isPreview, responsiveVisibility, ...rest } = props
  return (
    <VisibilityComponent visibility={responsiveVisibility} isPreview={isPreview}>
      <AntFooter
        {...rest}
        prefixCls="jitera-layout-footer"
        style={{ width: '100%', ...style }}
        ref={ref}
      >
        {children}
      </AntFooter>
    </VisibilityComponent>
  )
})

export { Footer }
