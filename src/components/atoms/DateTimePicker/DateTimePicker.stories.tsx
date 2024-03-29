import { Story } from '@storybook/react'

import moment from 'moment'

import { DateTimePicker, DateTimePickerProps, PickerEnum } from './DateTimePicker.component'

const defaultArguments: DateTimePickerProps = {
  responsiveVisibility: [
    {
      value: 'desktop'
    },
    {
      value: 'tablet'
    },
    {
      value: 'mobile'
    }
  ]
}

const DateTimePickerTemplate: Story<DateTimePickerProps> = (arguments_) => (
  <DateTimePicker {...arguments_} />
)

export const Default = DateTimePickerTemplate.bind({})
Default.args = {
  ...defaultArguments,
  value: moment().set('month', 10).set('date', 5),
  format: 'YYYY/MM/DD'
}

export const WithErrorMessage = DateTimePickerTemplate.bind({})
WithErrorMessage.args = {
  ...defaultArguments,
  value: moment().set('month', 10).set('date', 5),
  format: 'YYYY/MM/DD',
  errorMessage: 'Lorem ipsum dolor sit amet amet'
}

export const DateTimePickerWithTime = DateTimePickerTemplate.bind({})
DateTimePickerWithTime.args = {
  ...defaultArguments,
  showTime: true,
  value: moment().set('month', 10).set('date', 5),
  format: 'YYYY/MM/DD hh:mm'
}

export const WeekPicker = DateTimePickerTemplate.bind({})
WeekPicker.args = {
  ...defaultArguments,
  picker: PickerEnum.WEEK,
  value: moment().set('month', 10).set('date', 5),
  format: 'MM/DD'
}

export const MonthPicker = DateTimePickerTemplate.bind({})
MonthPicker.args = {
  ...defaultArguments,
  picker: PickerEnum.MONTH,
  value: moment().set('month', 10).set('date', 5),
  format: 'YYYY/MM'
}

export const TimePicker = DateTimePickerTemplate.bind({})
TimePicker.args = {
  ...defaultArguments,
  picker: PickerEnum.TIME,
  value: moment().set('hour', 8).set('minute', 0).set('second', 0),
  format: 'hh:mm'
}

export default {
  title: 'Atoms/DateTimePicker',
  component: DateTimePicker
}
