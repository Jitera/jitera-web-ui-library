/* eslint-disable unicorn/no-null */
import React from 'react'
import { render as reactRender } from 'rc-util/lib/React/render'
import { Modal as AntModal, ModalProps as AntModalProps } from 'antd'

import { ThemeProvider } from '@src/styles/theme'

import { Box } from '../Box/Box.component'

const modals: ((visible?: boolean) => void)[] = []

export interface ModalShowOptions
  extends Omit<
    AntModalProps,
    | 'visible'
    | 'closable'
    | 'footer'
    | 'modalRender'
    | 'cancelText'
    | 'cancelButtonProps'
    | 'okText'
    | 'onOk'
    | 'okButtonProps'
    | 'okType'
    | 'title'
    | 'closeIcon'
    | 'bodyStyle'
  > {
  position?: string
}

export const Modal = {
  show(ReactComponent: React.ReactNode, options: ModalShowOptions = {}) {
    const container = document.createDocumentFragment()

    function render(visible = true) {
      setTimeout(() => {
        reactRender(
          <ThemeProvider>
            <AntModal
              visible={visible}
              closable={false}
              footer={null}
              modalRender={() => <Box style={{ pointerEvents: 'auto' }}>{ReactComponent}</Box>}
              style={{
                top: options.position,
                ...options.style
              }}
              {...options}
            />
          </ThemeProvider>,
          container
        )
      })
    }
    modals.push(render)
    render()
  },
  hide() {
    modals.pop()?.(false)
  },
  hideAll() {
    // eslint-disable-next-line unicorn/no-array-for-each
    modals.forEach((modal) => {
      modal(false)
    })
  }
}
