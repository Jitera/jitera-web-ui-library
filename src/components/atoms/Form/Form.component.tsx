import React from 'react'

import { BoxProps } from '@src/components/atoms/Box/Box.component'
import { useResponsiveVisibility } from '@src/hooks/responsiveVisibility'

export type FormProps = BoxProps

const FormComponent = React.forwardRef<HTMLDivElement, FormProps>((props, ref) => {
  const { children, responsiveVisibility, className, ...rest } = props
  const { classNames } = useResponsiveVisibility({ className, responsiveVisibility })
  return (
    <div {...rest} className={classNames} ref={ref}>
      {children}
    </div>
  )
})

const Form = FormComponent

export { Form }
