/* eslint-disable sonarjs/no-identical-functions */
import { Story } from '@storybook/react'

import { Box } from '../Box/Box.component'
import { Menu } from '../Menu/Menu.component'
import { MenuIconPosition, MenuItem } from '../Menu/MenuItem.component'

import { HamburgerMenu, HamburgerMenuProps } from './HamburgerMenu.component'

const MENU_ITEM_COUNT = 7

const defaultArguments = {
  size: 'large',
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
} as HamburgerMenuProps

const HamburgerMenuTemplate: Story<HamburgerMenuProps> = (arguments_) => {
  const { buttonProps, drawerProps, iconProps } = arguments_
  return (
    <HamburgerMenu buttonProps={buttonProps} drawerProps={drawerProps} iconProps={iconProps}>
      <Menu>
        {Array.from({ length: MENU_ITEM_COUNT }, (_, k) => (
          <MenuItem
            key={k}
            label={`Option ${k + 1}`}
            iconProps={{
              iconName: 'AiOutlineHome'
            }}
            iconPosition={MenuIconPosition.Left}
            spaceBetween={8}
          />
        ))}
      </Menu>
    </HamburgerMenu>
  )
}

export const Default = HamburgerMenuTemplate.bind({})
Default.args = {
  ...defaultArguments
}

export const Left = HamburgerMenuTemplate.bind({})
Left.args = {
  ...defaultArguments,
  drawerProps: {
    placement: 'left'
  }
}

export const Bottom = HamburgerMenuTemplate.bind({})
Bottom.args = {
  ...defaultArguments,
  drawerProps: {
    placement: 'bottom'
  }
}

export const Top = HamburgerMenuTemplate.bind({})
Top.args = {
  ...defaultArguments,
  drawerProps: {
    placement: 'top'
  }
}

export const CustomIcon = HamburgerMenuTemplate.bind({})
CustomIcon.args = {
  ...defaultArguments,
  buttonProps: {
    buttonType: 'dashed'
  },
  iconProps: {
    iconName: 'MdOutlineLocalFireDepartment'
  }
}

export const InsideContainer: Story<HamburgerMenuProps> = (arguments_) => {
  const { buttonProps, drawerProps, iconProps } = arguments_
  return (
    <>
      <Box
        className="wew"
        style={{
          width: '300px',
          height: '500px',
          backgroundColor: '#ddd',
          overflow: 'hidden',
          position: 'relative'
        }}
      />
      <HamburgerMenu
        buttonProps={buttonProps}
        drawerProps={{
          getContainer: '.wew',
          style: {
            position: 'absolute'
          },
          width: 280,
          ...drawerProps
        }}
        iconProps={iconProps}
      >
        <Menu>
          {Array.from({ length: MENU_ITEM_COUNT }, (_, k) => (
            <MenuItem
              key={k}
              label={`Option ${k + 1}`}
              iconProps={{
                iconName: 'AiOutlineHome'
              }}
              iconPosition={MenuIconPosition.Left}
              spaceBetween={8}
            />
          ))}
        </Menu>
      </HamburgerMenu>
    </>
  )
}
InsideContainer.args = {
  ...defaultArguments
}

export default {
  title: 'Atoms/HamburgerMenu',
  component: HamburgerMenu
}
