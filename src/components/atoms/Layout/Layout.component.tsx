import React from 'react'
import AntLayout, { BasicProps as AntBasicProps } from 'antd/lib/layout/layout'

import { ComponentProps } from '@src/types/component'

import { PreviewProps } from '@src/types/preview'

import { useResponsiveVisibility } from '@src/hooks/responsiveVisibility'

export interface LayoutProps extends PreviewProps, ComponentProps<AntBasicProps> {}

const Layout = React.forwardRef<HTMLDivElement, LayoutProps>((props, ref) => {
  const { children, responsiveVisibility, className, ...rest } = props
  const { classNames } = useResponsiveVisibility({ className, responsiveVisibility })
  return (
    <AntLayout {...rest} prefixCls="jitera-layout" className={classNames} ref={ref}>
      {children}
    </AntLayout>
  )
})

export { Layout }
