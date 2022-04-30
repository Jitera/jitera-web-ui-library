import { CSSObject } from 'styled-components'

export type ComponentProps<T> = Omit<T, 'prefixCls' | 'iconPrefixCls'>

export interface RadioCheckboxStateColor {
  activeColor?: string
  inactiveColor?: string
  labelStyle?: CSSObject
}

export type RadioStateColor = RadioCheckboxStateColor

export interface CheckboxStateColor extends RadioCheckboxStateColor {
  checkColor?: string
}
