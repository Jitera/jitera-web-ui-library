import styled, { CSSObject } from 'styled-components'

export const StyledTableWrapper = styled.div<{ customStyle?: CSSObject }>`
  && {
    ${(props) => props.customStyle}
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

export const StyledTable = styled.table<{ customStyle?: CSSObject }>`
  border-collapse: collapse;
  border: 1px solid #000;
  width: fit-content;
  ${(props) => props.customStyle}
`

export const StyledTHead = styled.thead<{ customStyle?: CSSObject }>`
  ${(props) => props.customStyle}
`

export const StyledTBody = styled.tbody<{ customStyle?: CSSObject }>`
  ${(props) => props.customStyle}
`

export const StyledTFoot = styled.tfoot<{ customStyle?: CSSObject }>`
  ${(props) => props.customStyle}
`

export const StyledTr = styled.tr<{ customStyle?: CSSObject }>`
  width: fit-content;
  ${(props) => props.customStyle}

  &.j-table__tbody-tr--dragging {
    opacity: 0.5;
  }

  .j-table__tbody-td.j-table__tbody-td--drag {
    cursor: row-resize;
  }
`

export const StyledTh = styled.th<{ canSort?: boolean; customStyle?: CSSObject }>`
  cursor: ${(props) => (props.canSort ? 'pointer' : null)};
  border: 1px solid #000;
  position: relative;
  ${(props) => props.customStyle}

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

export const StyledTd = styled.td<{ isSortColumn?: boolean; customStyle?: CSSObject }>`
  border: 1px solid #000;
  ${(props) => (props.isSortColumn ? { textAlign: 'center' } : undefined)}
  ${(props) => props.customStyle}
`

export type PaginationPositionType = 'left' | 'center' | 'right'

export const StyledPaginationWrapper = styled.div<{
  paginationPosition: PaginationPositionType
  customStyle?: CSSObject
}>`
  display: flex;
  justify-content: ${(props) => props.paginationPosition};
  ${(props) => props.customStyle}
`
