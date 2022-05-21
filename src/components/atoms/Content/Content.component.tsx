import React from 'react'
import { Content as AntContent, BasicProps as AntBasicProps } from 'antd/lib/layout/layout'

import { ComponentProps } from '@src/types/component'

import { PreviewProps } from '@src/types/preview'

import { useResponsiveVisibility } from '@src/hooks/responsiveVisibility'

export interface ContentProps extends PreviewProps, ComponentProps<AntBasicProps> {}

const Content = React.forwardRef<HTMLDivElement, ContentProps>((props, ref) => {
  const { children, responsiveVisibility, className, ...rest } = props
  const { classNames } = useResponsiveVisibility({ className, responsiveVisibility })

  return (
    <AntContent {...rest} className={classNames} prefixCls="jitera-layout-content" ref={ref}>
      {children}
    </AntContent>
  )
})

export { Content }
