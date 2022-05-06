import React from 'react'
import { Dayjs } from 'dayjs'
import dayjsGenerateConfig from 'rc-picker/lib/generate/dayjs'
import generatePicker, { PickerDateProps } from 'antd/es/date-picker/generatePicker'

import { ComponentProps } from '@src/types/component'

import { PreviewProps } from '@src/types/preview'

import VisibilityComponent from '@components/common/ResponsiveVisibility/ResponsiveVisibility.component'

import { Text } from '../Text/Text.component'

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
  errorMessage?: string
}

const AntDatePicker = generatePicker<Dayjs>(dayjsGenerateConfig)

const DateTimePicker = React.forwardRef<HTMLDivElement, DateTimePickerProps>((props, ref) => {
  const { isPreview, responsiveVisibility, picker = 'date', errorMessage, ...rest } = props
  return (
    <VisibilityComponent visibility={responsiveVisibility} isPreview={isPreview}>
      <div ref={ref}>
        <AntDatePicker disabled={isPreview} picker={picker} {...rest} />
        {!!errorMessage && (
          <Text type="danger" style={{ display: 'block' }}>
            {errorMessage}
          </Text>
        )}
      </div>
    </VisibilityComponent>
  )
})

export { DateTimePicker }
