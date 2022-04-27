import React from 'react'
import { List as AntList, ListProps as AntListProps } from 'antd'

import { PreviewProps } from '@src/types/preview'

import { ComponentProps } from '@src/types/component'

import VisibilityComponent from '@components/common/ResponsiveVisibility/ResponsiveVisibility.component'

import styles from './List.module.css'

export interface ListProps extends PreviewProps, ComponentProps<AntListProps<any>> {}

const List = React.forwardRef<HTMLDivElement, ListProps>((props, ref) => {
  const { style, responsiveVisibility, isPreview, ...rest } = props
  return (
    <VisibilityComponent visibility={responsiveVisibility} isPreview={isPreview}>
      <div style={style} ref={ref}>
        <AntList className={styles.inner} {...rest} />
      </div>
    </VisibilityComponent>
  )
})

export { List }
