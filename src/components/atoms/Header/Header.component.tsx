import React from 'react'
import { Header as AntHeader, BasicProps as AntBasicProps } from 'antd/lib/layout/layout'

import { ComponentProps } from '@src/types/component'

import { PreviewProps } from '@src/types/preview'

import VisibilityComponent from '@components/common/ResponsiveVisibility/ResponsiveVisibility.component'

export interface HeaderProps extends PreviewProps, ComponentProps<AntBasicProps> {}

const Header = React.forwardRef<HTMLDivElement, HeaderProps>((props, ref) => {
  const { children, style, responsiveVisibility, isPreview, ...rest } = props
  return (
    <VisibilityComponent visibility={responsiveVisibility} isPreview={isPreview}>
      <AntHeader
        {...rest}
        prefixCls="jitera-layout-header"
        style={{ width: '100%', ...style }}
        ref={ref}
      >
        {children}
      </AntHeader>
    </VisibilityComponent>
  )
})

export { Header }
