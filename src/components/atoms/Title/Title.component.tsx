import React from 'react'
import Base, { BlockProps } from 'antd/lib/typography/Base'

import { PreviewProps } from '@/types/preview'

export enum TitleElementEnum {
  H1 = 1,
  H2 = 2,
  H3 = 3,
  H4 = 4,
  H5 = 5
}

export const TITLE_ELEMENTS = Object.values(TitleElementEnum)

export interface JiteraTitleProps extends PreviewProps, BlockProps {
  level?: TitleElementEnum
  onClick?: (event?: React.MouseEvent<HTMLDivElement>) => void
}

const JiteraTitle = React.forwardRef<HTMLSpanElement, JiteraTitleProps>((props, ref) => {
  const { level = TitleElementEnum.H1, ...rest } = props

  return <Base {...rest} component={`h${level}`} ref={ref} />
})

export { JiteraTitle }
