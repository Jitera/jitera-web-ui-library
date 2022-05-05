import { Story } from '@storybook/react'

import { Button } from '../Button/Button.component'

import { ImagePicker, ImagePickerProps } from './ImagePicker.component'

const defaultArguments: ImagePickerProps = {}

const ImagePickerTemplate: Story<ImagePickerProps> = (arguments_) => <ImagePicker {...arguments_} />

export const Default = ImagePickerTemplate.bind({})
Default.args = {
  ...defaultArguments,
  children: <Button>Upload</Button>
}

export default {
  title: 'Atoms/ImagePicker',
  component: ImagePicker
}
