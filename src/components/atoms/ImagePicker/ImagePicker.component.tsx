import React from 'react'
import { Upload as AntUpload, UploadProps as AntUploadProps } from 'antd'

import { ComponentProps } from '@src/types/component'

import { PreviewProps } from '@src/types/preview'

import { useResponsiveVisibility } from '@src/hooks/responsiveVisibility'

import { Text } from '../Text/Text.component'

import type { RcFile } from 'rc-upload/lib/interface'

export interface ImagePickerProps
  extends PreviewProps,
    ComponentProps<Omit<AntUploadProps, 'listType' | 'onChange'>> {
  errorMessage?: string
  onChange: (info: RcFile | (RcFile | undefined)[]) => void
}

const ImagePicker = React.forwardRef<HTMLDivElement, ImagePickerProps>((props, ref) => {
  const {
    children,
    isPreview,
    responsiveVisibility,
    errorMessage,
    className,
    multiple,
    onChange,
    ...rest
  } = props
  const { classNames } = useResponsiveVisibility({ className, responsiveVisibility })

  return (
    <div className={classNames} ref={ref}>
      <AntUpload
        disabled={isPreview}
        listType="picture-card"
        accept="image/*"
        onChange={(files) => {
          const originFiles = multiple
            ? files.fileList.map((file) => file.originFileObj).filter(Boolean)
            : (files.file as RcFile)
          onChange(originFiles)
        }}
        {...rest}
      >
        {children}
      </AntUpload>
      {!!errorMessage && <Text type="danger">{errorMessage}</Text>}
    </div>
  )
})

export { ImagePicker }
