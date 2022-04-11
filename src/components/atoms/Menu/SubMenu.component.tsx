import { SubMenuProps } from 'antd'
import AntSubMenu from 'antd/lib/menu/SubMenu'
import React from 'react'

export const SubMenu = React.forwardRef<HTMLUListElement, SubMenuProps>((props, ref) => {
  return (
    <ul ref={ref}>
      <AntSubMenu {...props} />
    </ul>
  )
})
