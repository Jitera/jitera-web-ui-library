import { Menu as AntMenu, MenuProps as AntMenuProps } from 'antd'

import React from 'react'

import { ComponentProps } from '@src/types/component'

import { PreviewProps } from '@src/types/preview'

import VisibilityComponent from '@components/common/ResponsiveVisibility/ResponsiveVisibility.component'

export interface MenuProps extends PreviewProps, ComponentProps<AntMenuProps> {}

export const Menu = React.forwardRef<HTMLDivElement, MenuProps>((props, ref) => {
  return (
    <VisibilityComponent visibility={props.responsiveVisibility} isPreview={props.isPreview}>
      <div ref={ref}>
        <AntMenu {...props} prefixCls="jitera-menu" />
      </div>
    </VisibilityComponent>
  )
})
