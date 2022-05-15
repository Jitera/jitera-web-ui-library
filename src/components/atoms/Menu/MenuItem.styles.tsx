import styled from 'styled-components'

export const MenuWrapper = styled.div<{ isPreview?: boolean }>`
  .jitera-menu-item-disabled,
  .jitera-menu-submenu-disabled {
    ${(props) => (props.isPreview ? 'color: unset !important;' : '')}
  }
`

export const MenuItemWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const MenuItemInner = styled.div`
  width: 100%;
`

export const Horizontal = styled.div`
  display: flex;
`

export const Vertical = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  line-height: 1;
`
