import React from 'react'

import { PreviewProps } from '@src/types/preview'

import VisibilityComponent from '@components/common/ResponsiveVisibility/ResponsiveVisibility.component'

export interface PageProps extends PreviewProps, React.HTMLAttributes<HTMLDivElement> {}

const Page = React.forwardRef<HTMLDivElement, PageProps>(({ ...props }, ref) => {
  const { children, style, isPreview, responsiveVisibility, ...rest } = props
  const minHeight = isPreview ? '100%' : '100vh'

  return (
    <VisibilityComponent visibility={responsiveVisibility} isPreview={isPreview}>
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
    </VisibilityComponent>
  )
})

export { Page }
