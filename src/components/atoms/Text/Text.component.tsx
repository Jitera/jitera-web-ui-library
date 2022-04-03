import React from 'react'
import omit from 'rc-util/lib/omit'
import Base, { BlockProps, EllipsisConfig } from 'antd/lib/typography/Base'

import { PreviewProps } from '@/types/preview'

export interface JiteraTextProps extends PreviewProps, BlockProps {
  ellipsis?: boolean | Omit<EllipsisConfig, 'expandable' | 'rows' | 'onExpand'>
  onClick?: (event?: React.MouseEvent<HTMLDivElement>) => void
}

const JiteraText = React.forwardRef<HTMLSpanElement, JiteraTextProps>((props, ref) => {
  const { ellipsis, ...rest } = props
  const mergedEllipsis = React.useMemo(() => {
    if (ellipsis && typeof ellipsis === 'object') {
      return omit(ellipsis as any, ['expandable', 'rows'])
    }

    return ellipsis
  }, [ellipsis])
  return <Base {...rest} ellipsis={mergedEllipsis} component="span" ref={ref} />
})

export { JiteraText }
