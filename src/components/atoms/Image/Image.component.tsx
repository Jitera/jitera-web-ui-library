import React from 'react'

import { PreviewProps } from '@/types/preview'

export interface ImageProps
  extends PreviewProps,
    Omit<React.ImgHTMLAttributes<HTMLImageElement>, 'src'> {
  source?: string | undefined
}

const Image = React.forwardRef<HTMLImageElement, ImageProps>((props, ref) => {
  const { source, ...rest } = props
  // eslint-disable-next-line jsx-a11y/alt-text
  return <img ref={ref} src={source} {...rest} />
})

export { Image }
