import React from 'react'
import { Upload as AntUpload, UploadProps as AntUploadProps } from 'antd'

import { ComponentProps } from '@src/types/component'

import { PreviewProps } from '@src/types/preview'

import { useResponsiveVisibility } from '@src/hooks/responsiveVisibility'

import { Text } from '../Text/Text.component'

export interface ImagePickerProps
  extends PreviewProps,
    ComponentProps<Omit<AntUploadProps, 'listType'>> {
  errorMessage?: string
}

const ImagePicker = React.forwardRef<HTMLDivElement, ImagePickerProps>((props, ref) => {
  const { children, isPreview, responsiveVisibility, errorMessage, className, ...rest } = props
  const { classNames } = useResponsiveVisibility({ className, responsiveVisibility })

  return (
    <div className={classNames} ref={ref}>
      <AntUpload disabled={isPreview} listType="picture" {...rest}>
        {children}
      </AntUpload>
      {!!errorMessage && <Text type="danger">{errorMessage}</Text>}
    </div>
  )
})

export { ImagePicker }
