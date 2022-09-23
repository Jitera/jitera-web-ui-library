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

  &.j-table__tbody-tr--dragging {
    opacity: 0.5;
  }

  .j-table__tbody-td.j-table__tbody-td--drag {
    cursor: row-resize;
  }
`

export const StyledTh = styled.th<{ canSort?: boolean }>`
  cursor: ${(props) => (props.canSort ? 'pointer' : null)};
  border: 1px solid #000;
  position: relative;

  &.j-table__thead-th--dragging {
    opacity: 0.5;
  }

  .j-table__thead-th-drag-indicator {
    cursor: col-resize;
  }

  &:hover .j-table__resizer {
    opacity: 1;
  }
`

export const StyledTd = styled.td<{ isSortColumn?: boolean }>`
  border: 1px solid #000;
  ${(props) => (props.isSortColumn ? { textAlign: 'center' } : undefined)}
`

export type PaginationPositionType = 'left' | 'center' | 'right'

export const StyledPaginationWrapper = styled.div<{
  paginationPosition: PaginationPositionType
}>`
  display: flex;
  justify-content: ${(props) => props.paginationPosition};
`