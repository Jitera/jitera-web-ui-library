import { Story } from '@storybook/react'

import { Box, BoxProps } from './Box.component'

const defaultArguments: BoxProps = {}

const BoxTemplate: Story<BoxProps> = (arguments_) => <Box {...arguments_} />

export const Default = BoxTemplate.bind({})
Default.args = {
  ...defaultArguments,
  children: 'Lorem Ipsum'
}

export default {
  title: 'Atoms/Box',
  component: Box
}
