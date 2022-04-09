import { Story } from '@storybook/react'

import { Icon, IconProps } from './Icon.component'

const defaultArguments: IconProps = { iconName: 'AiOutlineHome' }

const SiderTemplate: Story<IconProps> = (arguments_) => <Icon {...arguments_} />

export const Default = SiderTemplate.bind({})
Default.args = {
  ...defaultArguments
}

export default {
  title: 'Atoms/Icon',
  component: Icon
}
