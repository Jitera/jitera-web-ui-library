import React from 'react'
import { Card as AntCard, CardProps as AntCardProps } from 'antd'
import { CardInterface } from 'antd/lib/card'

import { ComponentProps } from '@src/types/component'

import { PreviewProps } from '@src/types/preview'

import VisibilityComponent from '@components/common/ResponsiveVisibility/ResponsiveVisibility.component'

export interface BoxProps extends PreviewProps, ComponentProps<AntCardProps> {}

const Box = React.forwardRef<CardInterface, BoxProps>((props, ref) => {
  const { children, isPreview, responsiveVisibility, ...rest } = props

  return (
    <VisibilityComponent visibility={responsiveVisibility} isPreview={isPreview}>
      {/* @ts-expect-error Card has forwarded ref but somehow the type definition not. */}
      <AntCard {...rest} ref={ref}>
        {children}
      </AntCard>
    </VisibilityComponent>
  )
})

export { Box }
