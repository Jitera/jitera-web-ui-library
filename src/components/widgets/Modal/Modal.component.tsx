import React from 'react'
import { Modal as AntModal, ModalProps as AntModalProps } from 'antd'

let instanceModalComponent: ModalComponent | null = null
const DEFAULT_STATES = {
  modals: []
}

export enum ModalPositionEnum {
  DEFAULT = 'default',
  TOP = 'top',
  CENTER = 'center'
}
export interface ModalOptions
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
export type ModalProps = {
  local?: boolean
}
type ModalState = {
  modals: { options: ModalOptions; component: React.ReactNode; visible: boolean; id: string }[]
}

export class ModalComponent extends React.PureComponent<ModalProps, ModalState> {
  constructor(props: ModalProps) {
    super(props)
    this.state = DEFAULT_STATES
  }

  componentDidMount() {
    // eslint-disable-next-line unicorn/no-this-assignment
    instanceModalComponent = this
  }

  componentWillUnmount() {
    instanceModalComponent = null
  }

  clearModal = (hideId?: string) => {
    if (!hideId) {
      return
    }

    this.setState((state) => {
      const modals = state.modals.filter((modal) => {
        if (modal.id === hideId && typeof modal.options?.afterClose === 'function') {
          modal.options?.afterClose()
        }
        return modal.id !== hideId
      })
      return {
        ...state,
        modals
      }
    })
  }

  // eslint-disable-next-line react/no-unused-class-component-methods
  hide = (id?: string) => {
    const { modals } = this.state
    let newModals = modals
    if (id) {
      newModals = modals.map((modal) => {
        if (modal.id === id) {
          return { ...modal, visible: false }
        }
        return modal
      })
    } else if (modals?.[modals.length - 1]) {
      modals[modals.length - 1].visible = false
      newModals = modals
    }
    this.setState({
      modals: [...newModals]
    })
  }

  // eslint-disable-next-line react/no-unused-class-component-methods
  show = (component: React.ReactNode, options: ModalOptions) => {
    const { modals } = this.state
    const modalId = `${Date.now()}`
    this.setState({
      modals: [...modals, { component, options, visible: true, id: modalId }]
    })
    return modalId
  }

  render() {
    const { modals } = this.state

    return (
      <>
        {modals.map((modal) => {
          return (
            <AntModal
              key={modal.id}
              visible={modal?.visible}
              closable={false}
              onCancel={() => this.hide(modal.id)}
              mask
              maskClosable
              footer={null}
              afterClose={() => this.clearModal(modal.id)}
              modalRender={() => modal.component}
              centered={modal.options.position === ModalPositionEnum.CENTER}
              style={{
                pointerEvents: 'auto',
                top: modal.options.position === ModalPositionEnum.TOP ? '0px' : undefined,
                ...modal.options.style
              }}
              {...modal.options}
            />
          )
        })}
      </>
    )
  }
}

export const Modal = {
  show(component: React.ReactNode, modalOptions: ModalOptions = {}) {
    return instanceModalComponent?.show(component, modalOptions)
  },
  hide(id?: string) {
    instanceModalComponent?.hide(id)
  }
}
