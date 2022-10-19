/* eslint-disable unicorn/no-null */
import React from 'react'
import { message, MessageArgsProps } from 'antd'
import { PREFIX_COMPONENT_CLASSNAME } from '@src/constants'

message.config({
  prefixCls: `${PREFIX_COMPONENT_CLASSNAME}-message`
})
export const Toast = {
  success(
    ReactComponent: React.ReactNode | string | MessageArgsProps,
    duration?: number,
    onClose?: () => void
  ) {
    message.success(ReactComponent, duration, onClose)
  },
  error(
    ReactComponent: React.ReactNode | string | MessageArgsProps,
    duration?: number,
    onClose?: () => void
  ) {
    message.error(ReactComponent, duration, onClose)
  },
  info(
    ReactComponent: React.ReactNode | string | MessageArgsProps,
    duration?: number,
    onClose?: () => void
  ) {
    message.info(ReactComponent, duration, onClose)
  },
  warning(
    ReactComponent: React.ReactNode | string | MessageArgsProps,
    duration?: number,
    onClose?: () => void
  ) {
    message.warning(ReactComponent, duration, onClose)
  },
  warn(
    ReactComponent: React.ReactNode | string | MessageArgsProps,
    duration?: number,
    onClose?: () => void
  ) {
    message.warn(ReactComponent, duration, onClose)
  },
  loading(
    ReactComponent: React.ReactNode | string | MessageArgsProps,
    duration?: number,
    onClose?: () => void
  ) {
    message.loading(ReactComponent, duration, onClose)
  },
  message
}
