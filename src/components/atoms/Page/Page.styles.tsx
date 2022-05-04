import styled from 'styled-components'

export const PageWrapper = styled.div<{ minHeight?: string | number }>`
  width: 100%;
  ${(property) => `min-height: ${property.minHeight};`},
  background-color: #fff;
`
