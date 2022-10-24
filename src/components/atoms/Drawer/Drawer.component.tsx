/* eslint-disable unicorn/prefer-spread */
/* eslint-disable unicorn/no-null */
import React from 'react'
import { render as reactRender } from 'rc-util/lib/React/render'
import { DrawerProps as AntDrawerProps } from 'antd'

import { ThemeProvider } from '@src/styles/theme'

import { StyledDrawer } from './Drawer.styles'

export enum DrawerPositionEnum {
  TOP = 'top',
  RIGHT = 'right',
  BOTTOM = 'bottom',
  LEFT = 'left'
}

export interface DrawerShowOptions
  extends Omit<AntDrawerProps, 'visible' | 'closable' | 'title' | 'closeIcon' | 'bodyStyle'> {
  position?: `${DrawerPositionEnum}`
}

const drawers: ((visible?: boolean) => void)[] = []

export const Drawer = {
  show(ReactComponent: React.ReactNode, options: DrawerShowOptions = {}) {
    const container = document.createDocumentFragment()

    function render(visible = true) {
      setTimeout(() => {
        reactRender(
          <ThemeProvider>
            <StyledDrawer visible={visible} closable={false} title={null} {...options}>
              {ReactComponent}
            </StyledDrawer>
          </ThemeProvider>,
          container
        )
        if (visible) {
          setTimeout(() => {
            const modalElements = document.querySelectorAll('.jitera-drawer')
            Array.from(modalElements)
              .at(modalElements.length - 1)
              ?.classList.add(`jitera-drawer-${drawers.length}`)
          })
        } else {
          setTimeout(() => {
            const modalElements = document.querySelectorAll('.jitera-drawer')
            Array.from(modalElements)
              .at(modalElements.length - 1)
              ?.classList.add(`jitera-drawer-${drawers.length + 1}`)
            document.querySelector(`.jitera-drawer-${drawers.length + 1}`)?.parentElement?.remove()
          })
        }
      })
    }
    drawers.push(render)
    render()
  },
  hide() {
    drawers.pop()?.(false)
  },
  hideAll() {
    // eslint-disable-next-line unicorn/no-array-for-each
    drawers.forEach((modal) => {
      modal(false)
    })
  }
}
