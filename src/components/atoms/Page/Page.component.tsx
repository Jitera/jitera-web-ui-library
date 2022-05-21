import React from 'react'

import clsx from 'clsx'

import { PreviewProps } from '@src/types/preview'

import { useResponsiveVisibility } from '@src/hooks/responsiveVisibility'

import { PageWrapper } from './Page.styles'

export interface PageProps extends PreviewProps, React.HTMLAttributes<HTMLDivElement> {}

const Page = React.forwardRef<HTMLDivElement, PageProps>(({ ...props }, ref) => {
  const { children, isPreview, responsiveVisibility, className, ...rest } = props
  const minHeight = isPreview ? '100%' : '100vh'
  const { classNames } = useResponsiveVisibility({ className, responsiveVisibility })

  return (
    <PageWrapper
      className={clsx(isPreview ? 'preview-page' : undefined, classNames)}
      minHeight={minHeight}
      isPreview={isPreview}
      {...rest}
      ref={ref}
    >
      {children}
    </PageWrapper>
  )
})

export { Page }
