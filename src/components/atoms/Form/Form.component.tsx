import React, { ForwardRefExoticComponent, RefAttributes } from 'react'
import { Form, FormInstance, FormProps, FormItemProps } from 'antd'

import { PreviewProps } from '@/types/preview'

export interface JiteraFormProps extends PreviewProps, FormProps {
  formRef?: React.RefObject<FormInstance>
  formStyle?: React.CSSProperties
}

type FormInterface = typeof Form

export interface JiteraFormInterface
  extends ForwardRefExoticComponent<JiteraFormProps & RefAttributes<HTMLDivElement>>,
    FormInterface {}

const JiteraFormComponent = React.forwardRef<HTMLDivElement, JiteraFormProps>((props, ref) => {
  const { children, formRef, style, formStyle, ...rest } = props
  return (
    <div ref={ref} style={{ ...style, height: '100%' }}>
      <Form {...rest} style={formStyle} ref={formRef}>
        {children}
      </Form>
    </div>
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
