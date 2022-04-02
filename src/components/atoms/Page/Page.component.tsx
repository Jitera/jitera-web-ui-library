import React from 'react'

import { PreviewProps } from '@/types/preview'

export interface JiteraPageProps extends PreviewProps, React.HTMLAttributes<HTMLDivElement> {}

const JiteraPage = React.forwardRef<HTMLDivElement, JiteraPageProps>(
  ({ isPreview, ...props }, ref) => {
    const { children, style, ...rest } = props
    const minHeight = isPreview ? '100%' : '100vh'

    return (
      <div
        {...rest}
        style={{
          width: '100%',
          minHeight,
          backgroundColor: '#fff',
          ...style
        }}
        ref={ref}
      >
        {children}
      </div>
    )
  }
)

export { JiteraPage }
