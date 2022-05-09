import React from 'react'

import { PreviewProps } from '@src/types/preview'

import VisibilityComponent from '@components/common/ResponsiveVisibility/ResponsiveVisibility.component'

import { PageWrapper } from './Page.styles'

export interface PageProps extends PreviewProps, React.HTMLAttributes<HTMLDivElement> {}

const Page = React.forwardRef<HTMLDivElement, PageProps>(({ ...props }, ref) => {
  const { children, isPreview, responsiveVisibility, ...rest } = props
  const minHeight = isPreview ? '100%' : '100vh'

  return (
    <VisibilityComponent visibility={responsiveVisibility} isPreview={isPreview}>
      <PageWrapper
        className={isPreview ? 'preview-page' : undefined}
        minHeight={minHeight}
        isPreview={isPreview}
        {...rest}
        ref={ref}
      >
        {children}
      </PageWrapper>
    </VisibilityComponent>
  )
})

export { Page }
