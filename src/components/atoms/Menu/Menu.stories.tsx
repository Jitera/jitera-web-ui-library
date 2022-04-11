import { Story } from '@storybook/react'

import { Menu, MenuProps } from './Menu.component'
import { MenuItem } from './MenuItem.component'

const defaultArguments: MenuProps = {}

const HeaderTemplate: Story<MenuProps> = (arguments_) => (
  <Menu {...arguments_}>
    <MenuItem>Option</MenuItem>
  </Menu>
)

export const Default = HeaderTemplate.bind({})
Default.args = {
  ...defaultArguments,
  children: 'Lorem Ipsum'
}

export default {
  title: 'Atoms/Menu',
  component: Menu
}
