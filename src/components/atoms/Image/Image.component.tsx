import React from 'react'

import { PreviewProps } from '@src/types/preview'

import { useResponsiveVisibility } from '@src/hooks/responsiveVisibility'

export interface ImageProps
  extends PreviewProps,
    Omit<React.ImgHTMLAttributes<HTMLImageElement>, 'src'> {
  source?: string
  alt?: string
}

const Image = React.forwardRef<HTMLImageElement, ImageProps>((props, ref) => {
  const { source, alt = '', responsiveVisibility, className, ...rest } = props
  const { classNames } = useResponsiveVisibility({ className, responsiveVisibility })
  // eslint-disable-next-line jsx-a11y/alt-text
  return <img ref={ref} src={source} className={classNames} {...rest} alt={alt} />
})

export { Image }
