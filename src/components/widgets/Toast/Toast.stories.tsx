import { Story } from '@storybook/react'

import { ThemeProvider } from '@src/styles/theme'

import { Toast } from './Toast.component'

export const Default: Story = () => {
  return (
    <ThemeProvider isPreview>
      <>
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
    </ThemeProvider>
  )
}

export default {
  title: 'Widgets/Toast'
}
