import { Menu as AntMenu, MenuItemProps as AntMenuItemProps } from 'antd'
import React from 'react'

import { ComponentProps } from '@src/types/component'

import { PreviewProps } from '@src/types/preview'

import VisibilityComponent from '@components/common/ResponsiveVisibility/ResponsiveVisibility.component'

import { assertUnreachable, Icon, IconProps } from '../Icon/Icon.component'

import { Horizontal, MenuItemInner, MenuItemWrapper, Vertical } from './MenuItem.styles'

export enum MenuIconPosition {
  Left = 'left',
  Right = 'right',
  Top = 'top',
  Bottom = 'bottom'
}

const { Item: AntMenuItem } = AntMenu

export interface MenuItemProps extends PreviewProps, ComponentProps<AntMenuItemProps> {
  label: string
  iconProps?: IconProps
  iconPosition?: MenuIconPosition
  spaceBetween?: number
}

export const MenuItem = React.forwardRef<HTMLLIElement, MenuItemProps>(
  (
    { label, iconProps, iconPosition, spaceBetween, responsiveVisibility, isPreview, ...restProps },
    ref
  ) => {
    return (
      <VisibilityComponent visibility={responsiveVisibility} isPreview={isPreview}>
        <MenuItemWrapper ref={ref as any}>
          <MenuItemInner isPreview={isPreview}>
            <AntMenuItem {...restProps}>
              {iconProps && iconPosition && spaceBetween
                ? renderTextWithIcon(iconProps, iconPosition, spaceBetween, label)
                : label}
            </AntMenuItem>
          </MenuItemInner>
        </MenuItemWrapper>
      </VisibilityComponent>
    )
  }
)

function renderTextWithIcon(
  iconProps: IconProps,
  iconPosition: MenuIconPosition,
  spaceBetween: number,
  label: string
): JSX.Element {
  switch (iconPosition) {
    case MenuIconPosition.Left:
      return (
        <Horizontal style={{ gap: spaceBetween }}>
          <Icon {...iconProps} />
          {label}
        </Horizontal>
      )
    case MenuIconPosition.Right:
      return (
        <Horizontal style={{ gap: spaceBetween }}>
          {label}
          <Icon {...iconProps} />
        </Horizontal>
      )
    case MenuIconPosition.Top:
      return (
        <Vertical style={{ gap: spaceBetween }}>
          <Icon {...iconProps} />
          {label}
        </Vertical>
      )
    case MenuIconPosition.Bottom:
      return (
        <Vertical style={{ gap: spaceBetween }}>
          {label}
          <Icon {...iconProps} />
        </Vertical>
      )
    default:
      return assertUnreachable(iconPosition)
  }
}
