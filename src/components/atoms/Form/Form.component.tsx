import React, { ForwardRefExoticComponent, RefAttributes } from 'react'
import { Form as AntForm, FormInstance as AntFormInstance, FormProps as AntFormProps } from 'antd'

import { PreviewProps } from '@/types/preview'
import { ComponentProps } from '@/types/component'

export interface FormProps extends PreviewProps, ComponentProps<AntFormProps> {
  formRef?: React.RefObject<AntFormInstance>
  formStyle?: React.CSSProperties
  children?: React.ReactNode
}

type AntFormType = typeof AntForm

export interface FormInterface
  extends ForwardRefExoticComponent<FormProps & RefAttributes<HTMLDivElement>>,
    AntFormType {}

const FormComponent = React.forwardRef<HTMLDivElement, FormProps>((props, ref) => {
  const { children, formRef, style, formStyle, ...rest } = props
  return (
    <div ref={ref} style={{ ...style, height: '100%' }}>
      <AntForm {...rest} style={formStyle} ref={formRef}>
        {children}
      </AntForm>
    </div>
  )
})

const Form = FormComponent as FormInterface

Form.ErrorList = AntForm.ErrorList
Form.useForm = AntForm.useForm
Form.Item = AntForm.Item
Form.List = AntForm.List
Form.Provider = AntForm.Provider
Form.create = AntForm.create

export { Form }

export type { FormItemProps } from 'antd'
