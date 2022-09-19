import styled, { CSSObject } from 'styled-components'

export const StyledTableWrapper = styled.div<{ style?: CSSObject }>`
  && {
    ${(props) => props.style}
  }
`

export const StyledTableResizer = styled.div<{ isResizing: boolean }>`
  position: absolute;
  right: 0;
  top: 0;
  height: 100%;
  width: 5px;
  background: ${(props) => (props.isResizing ? 'blue' : 'rgba(0, 0, 0, 0.5)')};
  opacity: ${(props) => (props.isResizing ? '1' : '0')};
  cursor: col-resize;
  user-select: none;
  touch-action: none;
`

export const StyledTable = styled.table`
  border-collapse: collapse;
  border: 1px solid #000;
  width: fit-content;
`

export const StyledTr = styled.tr`
  width: fit-content;
`

export const StyledTh = styled.th<{ canSort?: boolean }>`
  cursor: ${(props) => (props.canSort ? 'pointer' : null)};
  border: 1px solid #000;
  position: relative;
  transition-property: width 0.1 linear;

  &:hover .j-table__resizer {
    opacity: 1;
  }
`

export const StyledTd = styled.td`
  border: 1px solid #000;
  transition-property: width 0.1 linear;
`

export const StyledPaginationWrapper = styled.div<{ style?: CSSObject }>`
  && {
    ${(props) => props.style}
  }
`
