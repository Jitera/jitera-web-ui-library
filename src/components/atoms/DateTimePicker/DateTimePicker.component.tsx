import React, { useMemo } from 'react'
import dayjs, { Dayjs } from 'dayjs'
import dayjsGenerateConfig from 'rc-picker/lib/generate/dayjs'
import generatePicker, { PickerDateProps } from 'antd/es/date-picker/generatePicker'

import { ComponentProps } from '@src/types/component'

import { PreviewProps } from '@src/types/preview'

import { useResponsiveVisibility } from '@src/hooks/responsiveVisibility'

import { Text } from '../Text/Text.component'

const AntDatePicker = generatePicker<Dayjs>(dayjsGenerateConfig)

export enum PickerEnum {
  TIME = 'time',
  DATE = 'date',
  WEEK = 'week',
  MONTH = 'month'
}

export interface DateTimePickerProps
  extends PreviewProps,
    ComponentProps<Omit<PickerDateProps<Dayjs>, 'picker' | 'defaultValue'>> {
  picker?: `${PickerEnum}`
  showTime?: boolean
  errorMessage?: string
  defaultValue?: Pick<PickerDateProps<Dayjs>, 'defaultValue'> | string
}

const DateTimePicker = React.forwardRef<HTMLDivElement, DateTimePickerProps>((props, ref) => {
  const {
    isPreview,
    defaultValue,
    responsiveVisibility,
    picker = 'date',
    errorMessage,
    className,
    ...rest
  } = props
  const { classNames } = useResponsiveVisibility({ className, responsiveVisibility })

  const memoDefaultValue = useMemo<Dayjs | undefined>(() => {
    if (typeof defaultValue === 'string' || !defaultValue) {
      return dayjs(defaultValue as string | number | Date | Dayjs)
    }
    return defaultValue as Dayjs
  }, [defaultValue])

  return (
    <div className={classNames} ref={ref}>
      <AntDatePicker
        disabled={isPreview}
        picker={picker}
        defaultValue={memoDefaultValue}
        prefixCls="jitera-picker"
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
