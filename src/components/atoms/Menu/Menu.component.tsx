import { Menu as AntMenu, MenuProps as AntMenuProps } from 'antd'

import React from 'react'

import { ComponentProps } from '@src/types/component'

import { PreviewProps } from '@src/types/preview'

import VisibilityComponent from '@components/common/ResponsiveVisibility/ResponsiveVisibility.component'

import { MenuWrapper } from './MenuItem.styles'

export interface MenuProps extends PreviewProps, ComponentProps<AntMenuProps> {}

export const Menu = React.forwardRef<HTMLDivElement, MenuProps>((props, ref) => {
  const { isPreview, ...rest } = props
  return (
    <VisibilityComponent visibility={props.responsiveVisibility} isPreview={isPreview}>
      <MenuWrapper isPreview={isPreview} ref={ref}>
        <AntMenu disabled={isPreview} {...rest} prefixCls="jitera-menu" />
      </MenuWrapper>
    </VisibilityComponent>
  )
})
