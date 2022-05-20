import React, { useState } from 'react'

import { Drawer, DrawerProps } from 'antd'

import clsx from 'clsx'

import { PreviewProps } from '@src/types/preview'

import { useResponsiveVisibility } from '@src/hooks/responsiveVisibility'

import { Button, ButtonProps } from '../Button/Button.component'
import { Icon, IconProps } from '../Icon/Icon.component'

import styles from './HamburgerMenu.module.css'

export enum HamburgerDrawerPlacementEnum {
  TOP = 'top',
  RIGHT = 'right',
  BOTTOM = 'bottom',
  LEFT = 'left'
}

export interface HamburgerDrawerProps
  extends Omit<DrawerProps, 'headerStyle' | 'bodyStyle' | 'footerStyle' | 'title'> {
  headerVisible?: boolean
}

export interface HamburgerMenuProps extends PreviewProps {
  className?: string
  drawerTitle?: string
  buttonProps?: Omit<ButtonProps, 'style'>
  buttonStyle?: ButtonProps['style']
  drawerProps?: HamburgerDrawerProps
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
    drawerTitle,
    drawerProps,
    headerStyle,
    bodyStyle,
    iconProps,
    children,
    className
  } = props
  const [drawerVisible, setDrawerVisible] = useState(false)
  const { headerVisible, closable, ...restDrawerProps } = (drawerProps ||
    {}) as HamburgerDrawerProps

  const handleButtonClick = () => {
    setDrawerVisible(true)
  }

  const handleDrawerClose = () => {
    setDrawerVisible(false)
  }

  const defaultPreviewDrawerProps: DrawerProps = isPreview
    ? {
        destroyOnClose: true,
        getContainer: '.preview-page',
        style: {
          position: 'absolute'
        },
        afterVisibleChange: (isVisible) => {
          const drawerContent = document.querySelector('.jitera-drawer-content') as HTMLDivElement
          if (drawerContent) {
            drawerContent.style.backgroundColor = !isVisible ? 'transparent' : '#fff'
          }
        }
      }
    : {}

  const defaultDrawerProps: DrawerProps = !headerVisible
    ? { title: undefined, closable: false }
    : { title: drawerTitle, closable }

  const { classNames } = useResponsiveVisibility({ className, responsiveVisibility })

  return (
    <div className={clsx(styles.Wrapper, classNames)} ref={ref}>
      <Button onClick={handleButtonClick} style={buttonStyle} {...buttonProps}>
        <Icon iconName="MdMenu" {...iconProps} />
      </Button>
      <Drawer
        {...defaultPreviewDrawerProps}
        {...defaultDrawerProps}
        visible={drawerVisible}
        onClose={handleDrawerClose}
        headerStyle={headerStyle}
        bodyStyle={bodyStyle}
        {...restDrawerProps}
      >
        {children}
      </Drawer>
    </div>
  )
})

export { HamburgerMenu }
