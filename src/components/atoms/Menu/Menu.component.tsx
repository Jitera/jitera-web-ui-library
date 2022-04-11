import { Menu as AntMenu, MenuProps as AntMenuProps } from 'antd'

import React from 'react'

import { ComponentProps } from '@/types/component'
import { PreviewProps } from '@/types/preview'

export interface MenuProps extends PreviewProps, ComponentProps<AntMenuProps> {}

export const Menu = React.forwardRef<HTMLDivElement, MenuProps>((props, ref) => {
  return (
    <div ref={ref} style={{ display: 'inline-block' }}>
      <AntMenu {...props} prefixCls="jitera-menu" />
    </div>
  )
})
