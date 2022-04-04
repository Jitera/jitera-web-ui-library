import React from 'react'
import { Input, InputRef, InputProps } from 'antd'

import { PreviewProps } from '@/types/preview'

import { JiteraComponentProps } from '@/types/component'

import { JiteraForm, JiteraFormItemProps } from '../Form/Form.component'

export interface JiteraInputProps extends PreviewProps, JiteraComponentProps<InputProps> {
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
