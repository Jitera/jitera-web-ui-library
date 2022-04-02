import React from 'react'
import Sider, { SiderProps } from 'antd/lib/layout/Sider'

import { PreviewProps } from '@/types/preview'

export interface JiteraSiderProps extends PreviewProps, SiderProps {}

const JiteraSider = React.forwardRef<HTMLDivElement, JiteraSiderProps>((props, ref) => {
  const { children, ...rest } = props
  return (
    <Sider {...rest} ref={ref}>
      {children}
    </Sider>
  )
})

export { JiteraSider }
