import React from 'react'

import { PreviewProps } from '@/types/preview'

export interface PageProps extends PreviewProps, React.HTMLAttributes<HTMLDivElement> {}

const Page = React.forwardRef<HTMLDivElement, PageProps>(({ isPreview, ...props }, ref) => {
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
})

export { Page }
