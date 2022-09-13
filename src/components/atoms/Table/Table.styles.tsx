import styled, { CSSObject } from 'styled-components'

export const StyledTableWrapper = styled.div<{ style?: CSSObject }>`
  && {
    ${(props) => props.style}
  }
`

export const StyledTable = styled.table`
  border-collapse: collapse;
  border: 1px solid #000;
`

export const StyledTh = styled.th<{ canSort?: boolean }>`
  cursor: ${(props) => (props.canSort ? 'pointer' : null)};
  border: 1px solid #000;
`

export const StyledTd = styled.td`
  border: 1px solid #000;
`

export const StyledPaginationWrapper = styled.div<{ style?: CSSObject }>`
  && {
    ${(props) => props.style}
  }
`
