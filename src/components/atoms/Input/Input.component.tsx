import React from 'react'
import { Input as AntInput, InputRef as AntInputRef, InputProps as AntInputProps } from 'antd'

import { PreviewProps } from '@/types/preview'

import { ComponentProps } from '@/types/component'

import { Form, FormItemProps } from '../Form/Form.component'

export interface InputProps extends PreviewProps, ComponentProps<AntInputProps> {
  formItem?: boolean
  formItemProps?: Omit<FormItemProps, 'children'>
}

const Input = React.forwardRef<AntInputRef, InputProps>((props, ref) => {
  const { formItem, formItemProps = {}, ...rest } = props
  return formItem ? (
    <Form.Item {...formItemProps}>
      <AntInput {...rest} ref={ref} />
    </Form.Item>
  ) : (
    <AntInput {...rest} ref={ref} />
  )
})

export { Input }
