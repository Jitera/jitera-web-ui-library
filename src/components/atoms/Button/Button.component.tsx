import React from 'react'
import { Button, ButtonProps } from 'antd'

export interface JiteraButtonProps extends ButtonProps {}

const JiteraButton = React.forwardRef<HTMLButtonElement, JiteraButtonProps>((props, ref) => {
  const { type = 'primary', ...rest } = props

  return <Button type={type} {...rest} ref={ref} />
})

export { JiteraButton }
