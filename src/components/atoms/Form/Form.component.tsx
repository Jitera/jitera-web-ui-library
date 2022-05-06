import React from 'react'

import { BoxProps } from '@src/components/atoms/Box/Box.component'

import VisibilityComponent from '@components/common/ResponsiveVisibility/ResponsiveVisibility.component'

export type FormProps = BoxProps

const FormComponent = React.forwardRef<HTMLDivElement, FormProps>((props, ref) => {
  const { children, responsiveVisibility, isPreview, ...rest } = props
  return (
    <VisibilityComponent visibility={responsiveVisibility} isPreview={isPreview}>
      <div {...rest} ref={ref}>
        {children}
      </div>
    </VisibilityComponent>
  )
})

const Form = FormComponent

export { Form }
