import React from 'react'
import { List as AntList, ListProps as AntListProps } from 'antd'

import { PreviewProps } from '@src/types/preview'

import { ComponentProps } from '@src/types/component'

import { useResponsiveVisibility } from '@src/hooks/responsiveVisibility'

import styles from './List.module.css'

export interface ListProps extends PreviewProps, ComponentProps<AntListProps<any>> {}

const List = React.forwardRef<HTMLDivElement, ListProps>((props, ref) => {
  const { style, responsiveVisibility, className, ...rest } = props
  const { classNames } = useResponsiveVisibility({ className, responsiveVisibility })
  return (
    <div style={style} className={classNames} ref={ref}>
      <AntList className={styles.inner} {...rest} />
    </div>
  )
})

export { List }
