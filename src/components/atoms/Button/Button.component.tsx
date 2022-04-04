import React from 'react'
import { Button as AntButton, ButtonProps as AntButtonProps } from 'antd'

import { PreviewProps } from '@/types/preview'
import { ComponentProps } from '@/types/component'

export interface ButtonProps extends PreviewProps, ComponentProps<AntButtonProps> {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
  const { type = 'primary', ...rest } = props

  return <AntButton type={type} {...rest} ref={ref} />
})

export { Button }
