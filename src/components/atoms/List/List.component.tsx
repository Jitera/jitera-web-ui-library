import React from 'react'
import { List as AntList, ListProps as AntListProps } from 'antd'

import { PreviewProps } from '@/types/preview'
import { ComponentProps } from '@/types/component'

import styles from './List.module.css'

export interface ListProps extends PreviewProps, ComponentProps<AntListProps<any>> {}

const List = React.forwardRef<HTMLDivElement, ListProps>((props, ref) => {
  const { style, ...rest } = props
  return (
    <div style={style} ref={ref}>
      <AntList style={styles.inner} {...rest} />
    </div>
  )
})

export { List }
