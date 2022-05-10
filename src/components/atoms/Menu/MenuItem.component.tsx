import { Menu as AntMenu, MenuItemProps as AntMenuItemProps } from 'antd'
import React from 'react'

import { ComponentProps } from '@src/types/component'

import { PreviewProps } from '@src/types/preview'

import VisibilityComponent from '@components/common/ResponsiveVisibility/ResponsiveVisibility.component'

import { assertUnreachable, Icon, IconProps } from '../Icon/Icon.component'

import styles from './MenuItem.module.css'

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
        <li className={styles.WrapperList} ref={ref}>
          <ul className={styles.WrapperListList}>
            <AntMenuItem {...restProps}>
              {iconProps && iconPosition && spaceBetween
                ? renderTextWithIcon(iconProps, iconPosition, spaceBetween, label)
                : label}
            </AntMenuItem>
          </ul>
        </li>
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
        <div className={styles.horizontal} style={{ gap: spaceBetween }}>
          <Icon {...iconProps} />
          {label}
        </div>
      )
    case MenuIconPosition.Right:
      return (
        <div className={styles.horizontal} style={{ gap: spaceBetween }}>
          {label}
          <Icon {...iconProps} />
        </div>
      )
    case MenuIconPosition.Top:
      return (
        <div className={styles.vertical} style={{ gap: spaceBetween }}>
          <Icon {...iconProps} />
          {label}
        </div>
      )
    case MenuIconPosition.Bottom:
      return (
        <div className={styles.vertical} style={{ gap: spaceBetween }}>
          {label}
          <Icon {...iconProps} />
        </div>
      )
    default:
      return assertUnreachable(iconPosition)
  }
}
