import React from 'react'
import { Menu as AntMenu, MenuProps as AntMenuProps, MenuItemProps, SubMenuProps } from 'antd'
import AntMenuItem from 'antd/lib/menu/MenuItem'
import AntSubMenu from 'antd/lib/menu/SubMenu'

import { PreviewProps } from '@/types/preview'
import { ComponentProps } from '@/types/component'

export interface MenuProps extends PreviewProps, ComponentProps<AntMenuProps> {}

export const Menu = React.forwardRef<HTMLDivElement, MenuProps>((props, ref) => {
  return (
    <div ref={ref} style={{ display: 'inline-block' }}>
      <AntMenu {...props} prefixCls="jitera-menu" />
    </div>
  )
})

export const SubMenu = React.forwardRef<HTMLUListElement, SubMenuProps>((props, ref) => {
  return (
    <ul ref={ref}>
      <AntSubMenu {...props} />
    </ul>
  )
})

export const MenuItem = React.forwardRef<HTMLUListElement, MenuItemProps>((props, ref) => {
  return (
    <ul ref={ref}>
      <AntMenuItem {...props} />
    </ul>
  )
})
