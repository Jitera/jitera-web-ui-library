import React from 'react'
import { Upload as AntUpload, UploadProps as AntUploadProps } from 'antd'

import { ComponentProps } from '@src/types/component'

import { PreviewProps } from '@src/types/preview'

import VisibilityComponent from '@components/common/ResponsiveVisibility/ResponsiveVisibility.component'

export interface ImagePickerProps
  extends PreviewProps,
    ComponentProps<Omit<AntUploadProps, 'listType'>> {}

const ImagePicker = React.forwardRef<HTMLDivElement, ImagePickerProps>((props, ref) => {
  const { children, isPreview, responsiveVisibility, ...rest } = props

  return (
    <VisibilityComponent visibility={responsiveVisibility} isPreview={isPreview}>
      <div ref={ref}>
        <AntUpload disabled={isPreview} listType="picture" {...rest}>
          {children}
        </AntUpload>
      </div>
    </VisibilityComponent>
  )
})

export { ImagePicker }
