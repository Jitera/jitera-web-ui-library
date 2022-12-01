/* eslint-disable unicorn/prefer-spread */
/* eslint-disable unicorn/no-null */
import React from 'react'
import { render as reactRender } from 'rc-util/lib/React/render'
import { Modal as AntModal, ModalProps as AntModalProps } from 'antd'

import { ThemeProvider } from '@src/styles/theme'

export enum ModalPositionEnum {
  DEFAULT = 'default',
  TOP = 'top',
  CENTER = 'center'
}

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
  position?: `${ModalPositionEnum}`
}

const modals: ((visible?: boolean) => void)[] = []

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
              onCancel={() => render(false)}
              maskClosable={false}
              footer={null}
              modalRender={() => ReactComponent}
              centered={options.position === ModalPositionEnum.CENTER}
              style={{
                pointerEvents: 'auto',
                top: options.position === ModalPositionEnum.TOP ? '0px' : undefined,
                ...options.style
              }}
              {...options}
            />
          </ThemeProvider>,
          container
        )
        if (visible) {
          setTimeout(() => {
            const modalElements = document.querySelectorAll('.jitera-modal-root')
            Array.from(modalElements)
              .at(modalElements.length - 1)
              ?.classList.add(`jitera-modal-root-${modals.length}`)
          })
        } else {
          setTimeout(() => {
            document
              .querySelector(`.jitera-modal-root-${modals.length + 1}`)
              ?.parentElement?.remove()
          })
        }
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
