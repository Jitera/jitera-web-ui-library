import React from 'react'
import { Dayjs } from 'dayjs'
import dayjsGenerateConfig from 'rc-picker/lib/generate/dayjs'
import generatePicker, { PickerDateProps } from 'antd/es/date-picker/generatePicker'

import { ComponentProps } from '@src/types/component'

import { PreviewProps } from '@src/types/preview'

import VisibilityComponent from '@components/common/ResponsiveVisibility/ResponsiveVisibility.component'

export enum PickerEnum {
  TIME = 'time',
  DATE = 'date',
  WEEK = 'week',
  MONTH = 'month'
}

export interface DateTimePickerProps
  extends PreviewProps,
    ComponentProps<Omit<PickerDateProps<Dayjs>, 'picker'>> {
  picker?: PickerEnum
}

const AntDatePicker = generatePicker<Dayjs>(dayjsGenerateConfig)

const DateTimePicker = React.forwardRef<HTMLDivElement, DateTimePickerProps>((props, ref) => {
  const { isPreview, responsiveVisibility, picker = 'date', ...rest } = props
  return (
    <VisibilityComponent visibility={responsiveVisibility} isPreview={isPreview}>
      <div ref={ref}>
        <AntDatePicker disabled={isPreview} picker={picker} {...rest} />
      </div>
    </VisibilityComponent>
  )
})

export { DateTimePicker }
