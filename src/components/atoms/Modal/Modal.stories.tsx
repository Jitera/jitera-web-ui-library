import { Story } from '@storybook/react'
import styled from 'styled-components'

import { Modal } from './Modal.component'

const Modal2MoleculeWrapper = styled.div`
  background-color: #ff77c1;
  padding: 12px;
`

const Modal1MoleculeWrapper = styled.div`
  background-color: #fff;
  padding: 24px;
`

const Modal2Molecule: React.FC = () => {
  return (
    <Modal2MoleculeWrapper>
      <button
        type="button"
        onClick={() => {
          Modal.hide()
        }}
      >
        Close Modal 2
      </button>
    </Modal2MoleculeWrapper>
  )
}

const Modal1Molecule: React.FC = () => {
  return (
    <Modal1MoleculeWrapper>
      <button
        type="button"
        onClick={() => {
          Modal.show(<Modal2Molecule />)
        }}
      >
        Open Modal 2
      </button>
      <button
        type="button"
        onClick={() => {
          Modal.hide()
        }}
      >
        Close Modal 2
      </button>
    </Modal1MoleculeWrapper>
  )
}

export const Default: Story = () => {
  const handleClick = () => {
    Modal.show(<Modal1Molecule />)
  }
  return (
    <button type="button" onClick={handleClick}>
      Modal 1
    </button>
  )
}

export default {
  title: 'Atoms/Modal'
}
