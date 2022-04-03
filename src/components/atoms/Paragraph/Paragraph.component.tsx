import React from 'react'
import Base, { BlockProps } from 'antd/lib/typography/Base'

import { PreviewProps } from '@/types/preview'

export interface JiteraParagraphProps extends PreviewProps, BlockProps {
  onClick?: (event?: React.MouseEvent<HTMLDivElement>) => void
}

const JiteraParagraph = React.forwardRef<HTMLParagraphElement, JiteraParagraphProps>(
  (props, ref) => {
    return <Base {...props} component="p" ref={ref} />
  }
)

export { JiteraParagraph }
