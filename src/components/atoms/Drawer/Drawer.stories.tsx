import { Story } from '@storybook/react'
import styled from 'styled-components'

import { Drawer, DrawerPositionEnum } from './Drawer.component'

const Drawer2MoleculeWrapper = styled.div`
  background-color: #ff77c1;
  padding: 12px;
`

const Drawer1MoleculeWrapper = styled.div`
  background-color: #fff;
  padding: 24px;
`

const Drawer2Molecule: React.FC = () => {
  return (
    <Drawer2MoleculeWrapper>
      <button
        type="button"
        onClick={() => {
          Drawer.hide()
        }}
      >
        Close Drawer 2
      </button>
    </Drawer2MoleculeWrapper>
  )
}

const Drawer1Molecule: React.FC<{ position: DrawerPositionEnum }> = ({ position }) => {
  return (
    <Drawer1MoleculeWrapper>
      <button
        type="button"
        onClick={() => {
          Drawer.show(<Drawer2Molecule />, {
            placement: position
          })
        }}
      >
        Open Drawer 2
      </button>
      <button
        type="button"
        onClick={() => {
          Drawer.hide()
        }}
      >
        Close Drawer 1
      </button>
    </Drawer1MoleculeWrapper>
  )
}

export const Default: Story = () => {
  const handleClick = (position: DrawerPositionEnum) => {
    Drawer.show(<Drawer1Molecule position={position} />, {
      placement: position
    })
  }
  return (
    <>
      {[
        DrawerPositionEnum.TOP,
        DrawerPositionEnum.RIGHT,
        DrawerPositionEnum.BOTTOM,
        DrawerPositionEnum.LEFT
      ].map((position) => (
        <button key={position} type="button" onClick={() => handleClick(position)}>
          Drawer {position} 1
        </button>
      ))}
    </>
  )
}

export default {
  title: 'Atoms/Drawer'
}
