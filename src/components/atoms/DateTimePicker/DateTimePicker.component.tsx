import React from 'react'
import { DatePicker as AntDatePicker, DatePickerProps as AntDatePickerProps } from 'antd'

import { ComponentProps } from '@src/types/component'

import { PreviewProps } from '@src/types/preview'

import { useResponsiveVisibility } from '@src/hooks/responsiveVisibility'

import { Text } from '../Text/Text.component'

export enum PickerEnum {
  TIME = 'time',
  DATE = 'date',
  WEEK = 'week',
  MONTH = 'month'
}

export interface DateTimePickerProps
  extends PreviewProps,
    ComponentProps<Omit<AntDatePickerProps, 'picker'>> {
  showTime?: boolean
  picker?: PickerEnum
  errorMessage?: string
}

const DateTimePicker = React.forwardRef<HTMLDivElement, DateTimePickerProps>((props, ref) => {
  const {
    isPreview,
    responsiveVisibility,
    picker = 'date',
    errorMessage,
    className,
    ...rest
  } = props
  const { classNames } = useResponsiveVisibility({ className, responsiveVisibility })

  return (
    <div className={classNames} ref={ref}>
      <AntDatePicker disabled={isPreview} picker={picker} {...rest} />
      {!!errorMessage && (
        <Text type="danger" style={{ display: 'block' }}>
          {errorMessage}
        </Text>
      )}
    </div>
  )
})

export { DateTimePicker }
