import React from 'react'
import { Content as AntContent, BasicProps as AntBasicProps } from 'antd/lib/layout/layout'

import { ComponentProps } from '@src/types/component'

import { PreviewProps } from '@src/types/preview'

import VisibilityComponent from '@components/common/ResponsiveVisibility/ResponsiveVisibility.component'

export interface ContentProps extends PreviewProps, ComponentProps<AntBasicProps> {}

const Content = React.forwardRef<HTMLDivElement, ContentProps>((props, ref) => {
  const { children, isPreview, responsiveVisibility, ...rest } = props
  return (
    <VisibilityComponent visibility={responsiveVisibility} isPreview={isPreview}>
      <AntContent {...rest} prefixCls="jitera-layout-content" ref={ref}>
        {children}
      </AntContent>
    </VisibilityComponent>
  )
})

export { Content }
