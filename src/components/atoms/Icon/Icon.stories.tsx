import { Story } from '@storybook/react'

import { Icon, IconProps } from './Icon.component'

const defaultArguments: IconProps = { iconName: 'AiOutlineHome' }

const IconTemplate: Story<IconProps> = (arguments_) => <Icon {...arguments_} />

export const Default = IconTemplate.bind({})
Default.args = {
  ...defaultArguments
}

export default {
  title: 'Atoms/Icon',
  component: Icon
}
