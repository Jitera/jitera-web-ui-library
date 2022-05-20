import React from 'react'
import { Header as AntHeader, BasicProps as AntBasicProps } from 'antd/lib/layout/layout'

import { ComponentProps } from '@src/types/component'

import { PreviewProps } from '@src/types/preview'

import { useResponsiveVisibility } from '@src/hooks/responsiveVisibility'

export interface HeaderProps extends PreviewProps, ComponentProps<AntBasicProps> {}

const Header = React.forwardRef<HTMLDivElement, HeaderProps>((props, ref) => {
  const { children, responsiveVisibility, className, ...rest } = props
  const { classNames } = useResponsiveVisibility({ className, responsiveVisibility })
  return (
    <AntHeader {...rest} prefixCls="jitera-layout-header" className={classNames} ref={ref}>
      {children}
    </AntHeader>
  )
})

export { Header }
