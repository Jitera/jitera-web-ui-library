import React from 'react'
import { Button as AntButton, ButtonProps as AntButtonProps } from 'antd'

import { ComponentProps } from '@src/types/component'

import { PreviewProps } from '@src/types/preview'

import VisibilityComponent from '@components/common/ResponsiveVisibility/ResponsiveVisibility.component'

export interface ButtonProps extends PreviewProps, ComponentProps<AntButtonProps> {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
  const { type = 'primary', isPreview, responsiveVisibility, ...rest } = props

  return (
    <VisibilityComponent visibility={responsiveVisibility} isPreview={isPreview}>
      <AntButton type={type} {...rest} ref={ref} />
    </VisibilityComponent>
  )
})

export { Button }
