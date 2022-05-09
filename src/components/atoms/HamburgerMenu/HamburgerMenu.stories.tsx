/* eslint-disable sonarjs/no-identical-functions */
import { Story } from '@storybook/react'
import { useState } from 'react'

import { Box } from '../Box/Box.component'
import { Menu } from '../Menu/Menu.component'
import { MenuIconPosition, MenuItem } from '../Menu/MenuItem.component'

import { HamburgerMenu, HamburgerMenuProps } from './HamburgerMenu.component'

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
  const [isVisible, setVisible] = useState(false)
  return (
    <HamburgerMenu
      buttonProps={{
        onClick: () => {
          setVisible(true)
        },
        ...buttonProps
      }}
      drawerProps={{
        visible: isVisible,
        onClose: () => {
          setVisible(false)
        },
        ...drawerProps
      }}
      iconProps={iconProps}
    >
      <Menu>
        {Array.from({ length: 7 }, (_, k) => (
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
    type: 'dashed'
  },
  iconProps: {
    iconName: 'MdOutlineLocalFireDepartment'
  }
}

export const InsideContainer: Story<HamburgerMenuProps> = (arguments_) => {
  const { buttonProps, drawerProps, iconProps } = arguments_
  const [isVisible, setVisible] = useState(false)
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
        buttonProps={{
          onClick: () => {
            setVisible(true)
          },
          ...buttonProps
        }}
        drawerProps={{
          getContainer: '.wew',
          visible: isVisible,
          style: {
            position: 'absolute'
          },
          width: 280,
          onClose: () => {
            setVisible(false)
          },
          ...drawerProps
        }}
        iconProps={iconProps}
      >
        <Menu>
          {Array.from({ length: 7 }, (_, k) => (
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
