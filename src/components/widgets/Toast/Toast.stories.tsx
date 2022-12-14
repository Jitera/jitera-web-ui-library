import { Story } from '@storybook/react'

import { Toast, ToastContainer } from './Toast.component'

export const Default: Story = () => {
  return (
    <>
      <ToastContainer />
      <button
        type="button"
        onClick={() => {
          Toast.success('Success')
        }}
      >
        Success
      </button>
      <button
        type="button"
        onClick={() => {
          Toast.error('Error')
        }}
      >
        Error
      </button>
      <button
        type="button"
        onClick={() => {
          Toast.warn('Warning')
        }}
      >
        Warning
      </button>
      <button
        type="button"
        onClick={() => {
          Toast.info('Info')
        }}
      >
        Info
      </button>
    </>
  )
}

export default {
  title: 'Widgets/Toast'
}
