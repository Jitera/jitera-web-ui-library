import styled from 'styled-components'

export const PageWrapper = styled.div<{ minHeight?: string | number; isPreview?: boolean }>`
  width: 100%;
  ${(property) => `min-height: ${property.minHeight};`}
  background-color: #fff;
  ${(property) => (property.isPreview ? 'position: relative' : undefined)}
`
