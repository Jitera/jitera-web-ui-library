import React from 'react'
import { Input, InputRef, InputProps } from 'antd'

import { PreviewProps } from '@/types/preview'

import { JiteraForm, JiteraFormItemProps } from '../Form/Form.component'

export interface JiteraInputProps extends PreviewProps, InputProps {
  formItem?: boolean
  formItemProps?: Omit<JiteraFormItemProps, 'children'>
}

const JiteraInput = React.forwardRef<InputRef, JiteraInputProps>((props, ref) => {
  const { formItem, formItemProps = {}, ...rest } = props
  return formItem ? (
    <JiteraForm.Item {...formItemProps}>
      <Input {...rest} ref={ref} />
    </JiteraForm.Item>
  ) : (
    <Input {...rest} ref={ref} />
  )
})

export { JiteraInput }
