import React, { ForwardRefExoticComponent, RefAttributes } from 'react'
import { Form, FormInstance, FormProps, FormItemProps } from 'antd'

import { PreviewProps } from '@/types/preview'

export interface JiteraFormProps extends PreviewProps, FormProps {}

type FormInterface = typeof Form

export interface JiteraFormInterface
  extends ForwardRefExoticComponent<JiteraFormProps & RefAttributes<FormInstance<any>>>,
    FormInterface {}

const JiteraFormComponent = React.forwardRef<FormInstance, JiteraFormProps>((props, ref) => {
  const { children, ...rest } = props
  return (
    <Form {...rest} ref={ref}>
      {children}
    </Form>
  )
})

const JiteraForm = JiteraFormComponent as JiteraFormInterface

JiteraForm.ErrorList = Form.ErrorList
JiteraForm.useForm = Form.useForm
JiteraForm.Item = Form.Item
JiteraForm.List = Form.List
JiteraForm.Provider = Form.Provider
JiteraForm.create = Form.create

export { JiteraForm }
export type { FormItemProps as JiteraFormItemProps }
