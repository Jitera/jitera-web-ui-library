import React from 'react'
import AntLayout, { BasicProps as AntBasicProps } from 'antd/lib/layout/layout'

import { ComponentProps } from '@src/types/component'

import { PreviewProps } from '@src/types/preview'

import VisibilityComponent from '@components/common/ResponsiveVisibility/ResponsiveVisibility.component'

export interface LayoutProps extends PreviewProps, ComponentProps<AntBasicProps> {}

const Layout = React.forwardRef<HTMLDivElement, LayoutProps>((props, ref) => {
  const { children, responsiveVisibility, isPreview, ...rest } = props
  return (
    <VisibilityComponent visibility={responsiveVisibility} isPreview={isPreview}>
      <AntLayout {...rest} prefixCls="jitera-layout" ref={ref}>
        {children}
      </AntLayout>
    </VisibilityComponent>
  )
})

export { Layout }
