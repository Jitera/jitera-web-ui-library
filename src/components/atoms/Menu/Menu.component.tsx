import { Menu as AntMenu, MenuProps as AntMenuProps } from 'antd'

import React from 'react'

import { ComponentProps } from '@src/types/component'

import { PreviewProps } from '@src/types/preview'

import { useResponsiveVisibility } from '@src/hooks/responsiveVisibility'

import { MenuWrapper } from './MenuItem.styles'

export interface MenuProps extends PreviewProps, ComponentProps<AntMenuProps> {}

export const Menu = React.forwardRef<HTMLDivElement, MenuProps>((props, ref) => {
  const { isPreview, className, responsiveVisibility, ...rest } = props
  const { classNames } = useResponsiveVisibility({ className, responsiveVisibility })
  return (
    <MenuWrapper isPreview={isPreview} className={classNames} ref={ref}>
      <AntMenu disabled={isPreview} {...rest} prefixCls="jitera-menu" />
    </MenuWrapper>
  )
})
