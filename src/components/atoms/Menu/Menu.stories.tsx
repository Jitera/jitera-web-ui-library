import { Story } from '@storybook/react'

import { Menu, MenuProps } from './Menu.component'
import { MenuIconPosition, MenuItem } from './MenuItem.component'

const defaultArguments: MenuProps = {
  isPreview: true,
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

const HeaderTemplate: Story<MenuProps> = (arguments_) => (
  <Menu {...arguments_}>
    <MenuItem label="Option 1" />
    <MenuItem
      label="Option 2"
      iconProps={{
        iconName: 'AiOutlineHome'
      }}
      iconPosition={MenuIconPosition.Left}
      spaceBetween={8}
    />
    <MenuItem
      label="Option 3"
      iconProps={{
        iconName: 'AiOutlineHome'
      }}
      iconPosition={MenuIconPosition.Right}
      spaceBetween={8}
    />
    <MenuItem
      label="Option 2"
      iconProps={{
        iconName: 'AiOutlineHome'
      }}
      iconPosition={MenuIconPosition.Top}
      spaceBetween={8}
    />
    <MenuItem
      label="Option 2"
      iconProps={{
        iconName: 'AiOutlineHome'
      }}
      iconPosition={MenuIconPosition.Bottom}
      spaceBetween={8}
    />
  </Menu>
)

export const Default = HeaderTemplate.bind({})
Default.args = {
  ...defaultArguments,
  children: 'Lorem Ipsum',
  mode: 'horizontal'
}

export default {
  title: 'Atoms/Menu',
  component: Menu
}
