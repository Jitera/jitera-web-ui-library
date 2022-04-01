import React from 'react'
import Sider, { SiderProps } from 'antd/lib/layout/Sider'

export interface JiteraSiderProps extends SiderProps {}

const JiteraSider = React.forwardRef<HTMLDivElement, JiteraSiderProps>((props, ref) => {
  const { children, ...rest } = props
  return (
    <Sider {...rest} ref={ref}>
      {children}
    </Sider>
  )
})

export { JiteraSider }
