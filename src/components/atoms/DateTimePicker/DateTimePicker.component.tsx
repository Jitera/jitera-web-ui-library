import React, { useMemo } from 'react'
import moment from 'moment'

import { DatePicker, DatePickerProps } from 'antd'

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
    ComponentProps<Omit<DatePickerProps, 'picker' | 'defaultValue' | 'value'>> {
  picker?: `${PickerEnum}`
  showTime?: boolean
  errorMessage?: string
  defaultValue?: string
  value?: moment.Moment | string
}

const DateTimePicker = React.forwardRef<HTMLDivElement, DateTimePickerProps>((props, ref) => {
  const {
    isPreview,
    defaultValue,
    responsiveVisibility,
    picker = 'date',
    errorMessage,
    className,
    value,
    ...rest
  } = props
  const { classNames } = useResponsiveVisibility({ className, responsiveVisibility })

  const memoDefaultValue = useMemo<undefined | moment.Moment>(() => {
    if (typeof defaultValue === 'string') return moment(defaultValue)
    return defaultValue
  }, [defaultValue])

  const currentValue = useMemo(() => {
    if (!value) {
      // eslint-disable-next-line unicorn/no-useless-undefined
      return undefined
    }

    if (typeof value === 'string') {
      return moment(value)
    }
    return value
  }, [value])

  return (
    <div className={classNames} ref={ref}>
      <DatePicker
        disabled={isPreview}
        picker={picker}
        defaultValue={memoDefaultValue}
        prefixCls="jitera-picker"
        value={currentValue}
        {...rest}
      />
      {!!errorMessage && (
        <Text type="danger" style={{ display: 'block' }}>
          {errorMessage}
        </Text>
      )}
    </div>
  )
})

export { DateTimePicker }
