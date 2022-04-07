import React from 'react'
import { IconBaseProps } from 'react-icons/lib'

import * as antdIcons from 'react-icons/ai'
import * as bootstrapIcons from 'react-icons/bs'
import * as fontAwesomeIcons from 'react-icons/fa'
import * as featureIcons from 'react-icons/fi'
import * as materialIcons from 'react-icons/md'

import { ComponentProps } from '@/types/component'

export enum IconSet {
  None = 'none',
  Antd = 'antd',
  Bootstrap = 'bootstrap',
  Feather = 'feather',
  FontAwesome = 'font-awesome',
  Material = 'material'
}

export function getIconComponent(iconName: string, props: IconBaseProps = {}) {
  return React.createElement(
    iconName in antdIcons
      ? antdIcons[iconName as keyof typeof antdIcons]
      : iconName in bootstrapIcons
      ? bootstrapIcons[iconName as keyof typeof bootstrapIcons]
      : iconName in featureIcons
      ? featureIcons[iconName as keyof typeof featureIcons]
      : iconName in fontAwesomeIcons
      ? fontAwesomeIcons[iconName as keyof typeof fontAwesomeIcons]
      : iconName in materialIcons
      ? materialIcons[iconName as keyof typeof materialIcons]
      : '',
    props
  )
}

export function assertUnreachable(value: never): never {
  throw new Error(`Should not reach with ${value}`)
}

export function searchIcons(iconSet: IconSet, searchValue: string | undefined) {
  if (searchValue) {
    return [
      ...Object.entries(antdIcons),
      ...Object.entries(bootstrapIcons),
      ...Object.entries(featureIcons),
      ...Object.entries(fontAwesomeIcons),
      ...Object.entries(materialIcons)
    ].filter((pair) => pair[0].toLowerCase().includes(searchValue.toLowerCase()))
  }

  switch (iconSet) {
    case IconSet.Antd:
      return Object.entries(antdIcons)

    case IconSet.Bootstrap:
      return Object.entries(bootstrapIcons)

    case IconSet.Feather:
      return Object.entries(featureIcons)

    case IconSet.FontAwesome:
      return Object.entries(fontAwesomeIcons)

    case IconSet.Material:
      return Object.entries(materialIcons)

    case IconSet.None:
      return []

    default:
      return assertUnreachable(iconSet)
  }
}

export const DEFAULT_ICON_SIZE = 14
export const DEFAULT_ICON_COLOR = '#000'

export interface IconProps extends ComponentProps<IconBaseProps> {
  iconName: string
}

export const Icon = React.forwardRef<HTMLSpanElement, IconProps>((props, ref) => {
  return (
    <span ref={ref} style={{ display: 'inline-block', ...props.style }}>
      {getIconComponent(props.iconName, {
        color: props.color ?? DEFAULT_ICON_COLOR,
        size: props.size ?? DEFAULT_ICON_SIZE
      })}
    </span>
  )
})
