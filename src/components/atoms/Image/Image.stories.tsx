import { Story } from '@storybook/react'

import { Image, ImageProps } from './Image.component'

const defaultArguments: ImageProps = {
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

const ImageTemplate: Story<ImageProps> = (arguments_) => <Image {...arguments_} />

export const Default = ImageTemplate.bind({})
Default.args = {
  ...defaultArguments
}

export default {
  title: 'Atoms/Image',
  component: Image
}
