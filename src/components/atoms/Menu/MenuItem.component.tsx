import { MenuItemProps } from 'antd'
import AntMenuItem from 'antd/lib/menu/MenuItem'
import React from 'react'

export const MenuItem = React.forwardRef<HTMLUListElement, MenuItemProps>((props, ref) => {
  return (
    <ul ref={ref}>
      <AntMenuItem {...props} />
    </ul>
  )
})
