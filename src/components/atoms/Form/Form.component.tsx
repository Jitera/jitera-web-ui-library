import React, { ForwardRefExoticComponent, RefAttributes } from 'react'
import { Form as AntForm, FormProps as AntFormProps } from 'antd'

import VisibilityComponent from '@components/common/ResponsiveVisibility/ResponsiveVisibility.component'

import { ComponentProps } from '@src/types/component'

import { PreviewProps } from '@src/types/preview'

export interface FormProps extends PreviewProps, ComponentProps<AntFormProps> {
  children?: React.ReactNode
}

type AntFormType = typeof AntForm

export interface FormInterface
  extends ForwardRefExoticComponent<FormProps & RefAttributes<HTMLDivElement>>,
    AntFormType {}

const FormComponent = React.forwardRef<HTMLDivElement, FormProps>((props, ref) => {
  const { children, responsiveVisibility, isPreview, ...rest } = props
  return (
    <VisibilityComponent visibility={responsiveVisibility} isPreview={isPreview}>
      <AntForm {...rest} ref={ref as any}>
        {children}
      </AntForm>
    </VisibilityComponent>
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
