import React from 'react'
import { List as AntList, ListProps as AntListProps } from 'antd'

import { PreviewProps } from '@/types/preview'
import { ComponentProps } from '@/types/component'

export interface ListProps<T> extends PreviewProps, ComponentProps<AntListProps<T>> {}

const List = React.forwardRef<HTMLDivElement, ListProps<any>>((props, ref) => {
  const { style, ...rest } = props
  return (
    <div style={style} ref={ref}>
      <AntList style={{ width: '100%', height: 'auto' }} {...rest} />
    </div>
  )
})

export { List }
