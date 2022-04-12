import { MenuItemProps as AntMenuItemProps } from 'antd'
import AntMenuItem from 'antd/lib/menu/MenuItem'
import React from 'react'

import { ComponentProps } from '@/types/component'
import { PreviewProps } from '@/types/preview'

import { assertUnreachable, Icon } from '../Icon/Icon.component'

import styles from './MenuItem.module.css'

export enum MenuIconPosition {
  Left = 'left',
  Right = 'right',
  Top = 'top',
  Bottom = 'bottom'
}

export interface MenuItemProps extends PreviewProps, ComponentProps<AntMenuItemProps> {
  label: string
  iconName?: string
  iconPosition?: MenuIconPosition
  spaceBetween?: number
}

export const MenuItem = React.forwardRef<HTMLLIElement, MenuItemProps>(
  ({ label, iconName, iconPosition, spaceBetween, ...restProps }, ref) => {
    return (
      <li ref={ref}>
        <ul>
          <AntMenuItem {...restProps}>
            {iconName && iconPosition && spaceBetween
              ? renderTextWithIcon(iconName, iconPosition, spaceBetween, label)
              : label}
          </AntMenuItem>
        </ul>
      </li>
    )
  }
)

function renderTextWithIcon(
  iconName: string,
  iconPosition: MenuIconPosition,
  spaceBetween: number,
  label: string
): JSX.Element {
  switch (iconPosition) {
    case MenuIconPosition.Left:
      return (
        <div className={styles.horizontal} style={{ gap: spaceBetween }}>
          <Icon iconName={iconName} />
          {label}
        </div>
      )
    case MenuIconPosition.Right:
      return (
        <div className={styles.horizontal} style={{ gap: spaceBetween }}>
          {label}
          <Icon iconName={iconName} />
        </div>
      )
    case MenuIconPosition.Top:
      return (
        <div className={styles.vertical} style={{ gap: spaceBetween }}>
          <Icon iconName={iconName} />
          {label}
        </div>
      )
    case MenuIconPosition.Bottom:
      return (
        <div className={styles.vertical} style={{ gap: spaceBetween }}>
          {label}
          <Icon iconName={iconName} />
        </div>
      )
    default:
      return assertUnreachable(iconPosition)
  }
}
