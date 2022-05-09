import React, { useState } from 'react'

import { Drawer, DrawerProps } from 'antd'

import { PreviewProps } from '@src/types/preview'

import VisibilityComponent from '@components/common/ResponsiveVisibility/ResponsiveVisibility.component'

import { Button, ButtonProps } from '../Button/Button.component'
import { Icon, IconProps } from '../Icon/Icon.component'

import styles from './HamburgerMenu.module.css'

export enum HamburgerDrawerPlacementEnum {
  TOP = 'top',
  RIGHT = 'right',
  BOTTOM = 'bottom',
  LEFT = 'left'
}

export interface HamburgerMenuProps extends PreviewProps {
  buttonProps?: Omit<ButtonProps, 'style'>
  buttonStyle?: ButtonProps['style']
  drawerProps?: Omit<DrawerProps, 'headerStyle' | 'bodyStyle' | 'footerStyle'>
  headerStyle?: DrawerProps['headerStyle']
  bodyStyle?: DrawerProps['bodyStyle']
  iconProps?: IconProps
  children?: React.ReactNode
}

const HamburgerMenu = React.forwardRef<HTMLDivElement, HamburgerMenuProps>((props, ref) => {
  const {
    isPreview,
    responsiveVisibility,
    buttonProps,
    buttonStyle,
    drawerProps,
    headerStyle,
    bodyStyle,
    iconProps,
    children
  } = props
  const [previewDrawerVisible, setPreviewDrawerVisible] = useState(false)

  const handleButtonClick = () => {
    setPreviewDrawerVisible(true)
  }

  const handleDrawerClose = () => {
    setPreviewDrawerVisible(false)
  }

  const defaultButtonProps: ButtonProps = isPreview
    ? {
        onClick: handleButtonClick
      }
    : {}

  const defaultDrawerProps: DrawerProps = isPreview
    ? {
        destroyOnClose: true,
        visible: previewDrawerVisible,
        getContainer: '.preview-page',
        style: {
          position: 'absolute'
        },
        onClose: handleDrawerClose,
        afterVisibleChange: (isVisible) => {
          const drawerContent = document.querySelector('.jitera-drawer-content') as HTMLDivElement
          if (drawerContent) {
            drawerContent.style.backgroundColor = !isVisible ? 'transparent' : '#fff'
          }
        }
      }
    : {}

  return (
    <VisibilityComponent visibility={responsiveVisibility} isPreview={isPreview} isInline>
      <div className={styles.Wrapper} ref={ref}>
        <Button {...defaultButtonProps} style={buttonStyle} {...buttonProps}>
          <Icon iconName="MdMenu" {...iconProps} />
        </Button>
        <Drawer
          {...defaultDrawerProps}
          headerStyle={headerStyle}
          bodyStyle={bodyStyle}
          {...drawerProps}
        >
          {children}
        </Drawer>
      </div>
    </VisibilityComponent>
  )
})

export { HamburgerMenu }
