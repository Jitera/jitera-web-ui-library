import React from 'react'

import { PreviewProps } from '@src/types/preview'

import VisibilityComponent from '@components/common/ResponsiveVisibility/ResponsiveVisibility.component'

export interface ImageProps
  extends PreviewProps,
    Omit<React.ImgHTMLAttributes<HTMLImageElement>, 'src'> {
  source?: string
  alt?: string
}

const Image = React.forwardRef<HTMLImageElement, ImageProps>((props, ref) => {
  const { source, alt = '', responsiveVisibility, isPreview, ...rest } = props
  // eslint-disable-next-line jsx-a11y/alt-text
  return (
    <VisibilityComponent visibility={responsiveVisibility} isPreview={isPreview}>
      <img ref={ref} src={source} {...rest} alt={alt} />
    </VisibilityComponent>
  )
})

export { Image }
